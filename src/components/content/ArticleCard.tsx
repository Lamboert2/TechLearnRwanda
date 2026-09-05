import { Link } from 'react-router';
import type { Article } from '../../data/content';

interface Props {
  article: Article;
  size?: 'sm' | 'md' | 'lg' | 'featured';
  showImage?: boolean;
}

export default function ArticleCard({ article, size = 'md', showImage = true }: Props) {
  const categoryPath = `/category/${article.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  if (size === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[16/9] card-hover">
        {showImage && (
          <img src={article.imageUrl} alt={article.imageAlt} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Link to={categoryPath} className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-900/60 px-2.5 py-1 rounded-full hover:bg-teal-800 transition-colors">
              {article.category}
            </Link>
            {article.featured && <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Featured</span>}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight mb-3">
            <Link to={`/article/${article.slug}`} className="hover:text-teal-300 transition-colors">{article.title}</Link>
          </h2>
          <p className="text-slate-300 text-sm line-clamp-2 mb-4 hidden sm:block">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <img src={article.author.photo} alt={article.author.name} className="w-7 h-7 rounded-full object-cover border border-white/20" />
            <span>{article.author.name}</span>
            <span>·</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </article>
    );
  }

  if (size === 'lg') {
    return (
      <article className="group card-hover">
        {showImage && (
          <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 mb-4">
            <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
          </div>
        )}
        <Link to={categoryPath} className="tag-pill mb-2 inline-block">{article.category}</Link>
        <h3 className="font-display text-xl font-semibold text-slate-900 leading-snug mb-2">
          <Link to={`/article/${article.slug}`} className="hover:text-teal-700 transition-colors">{article.title}</Link>
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <img src={article.author.photo} alt={article.author.name} className="w-6 h-6 rounded-full object-cover" />
          <span>{article.author.name}</span>
          <span>·</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
          <span>·</span>
          <span>{article.readTime} min</span>
        </div>
      </article>
    );
  }

  if (size === 'sm') {
    return (
      <article className="flex gap-3 group">
        {showImage && (
          <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
            <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-slate-800 leading-snug line-clamp-2 mb-1">
            <Link to={`/article/${article.slug}`} className="hover:text-teal-700 transition-colors">{article.title}</Link>
          </h4>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime} min</span>
          </div>
        </div>
      </article>
    );
  }

  // md (default)
  return (
    <article className="group bg-white rounded-xl border border-slate-100 overflow-hidden card-hover">
      {showImage && (
        <div className="aspect-video bg-slate-100 overflow-hidden">
          <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Link to={categoryPath} className="tag-pill">{article.category}</Link>
          {article.trending && <span className="tag-pill bg-amber-50 text-amber-700 border-amber-200">Trending</span>}
        </div>
        <h3 className="font-display font-semibold text-slate-900 leading-snug mb-2 line-clamp-2">
          <Link to={`/article/${article.slug}`} className="hover:text-teal-700 transition-colors">{article.title}</Link>
        </h3>
        <p className="text-slate-500 text-xs line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <img src={article.author.photo} alt={article.author.name} className="w-5 h-5 rounded-full object-cover" />
          <span>{article.author.name}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}
