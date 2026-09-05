import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { articles } from '../data/content';
import Breadcrumb from '../components/layout/Breadcrumb';
import ArticleCard from '../components/content/ArticleCard';
import NotFound from './NotFound';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!article) return <NotFound />;

  const related = articles.filter(a => a.id !== article.id && (a.category === article.category || a.tags.some(t => article.tags.includes(t)))).slice(0, 3);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName(''); setEmail(''); setComment('');
  };

  return (
    <div className="page-fade">
      {/* Hero image */}
      <div className="w-full h-72 md:h-96 bg-slate-200 overflow-hidden">
        <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <main className="lg:col-span-2">
            <div className="mb-4">
              <Breadcrumb crumbs={[
                { label: article.category, path: `/category/${article.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}` },
                { label: article.title }
              ]} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                article.type === 'tutorial' ? 'bg-blue-100 text-blue-700' :
                article.type === 'guide' ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-700'
              }`}>{article.type}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-4">{article.title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">{article.excerpt}</p>

            {/* Author + meta */}
            <div className="flex items-center gap-4 py-4 border-y border-slate-100 mb-8">
              <img src={article.author.photo} alt={article.author.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <Link to={`/author/${article.author.slug}`} className="font-semibold text-slate-900 hover:text-teal-700 transition-colors">{article.author.name}</Link>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-0.5">
                  <span>{article.author.role}</span>
                  <span>·</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Article body */}
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Share */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-700 mb-3">Share this article</p>
              <div className="flex gap-2">
                {['Twitter', 'LinkedIn', 'Facebook', 'Copy Link'].map(s => (
                  <button key={s} className="px-4 py-2 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-100 hover:text-teal-700 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Author box */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 flex gap-4">
              <img src={article.author.photo} alt={article.author.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">About the Author</p>
                <Link to={`/author/${article.author.slug}`} className="font-display font-semibold text-slate-900 hover:text-teal-700 transition-colors">{article.author.name}</Link>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{article.author.bio}</p>
              </div>
            </div>

            {/* Comments */}
            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-6">Leave a Comment</h3>
              <p className="text-sm text-slate-500 mb-4">All comments are reviewed before publication. Your email address will not be published.</p>
              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-teal-800 text-sm font-medium">
                  Thank you for your comment. It has been submitted for review.
                </div>
              ) : (
                <form onSubmit={handleComment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                      <input required value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span> <span className="text-xs text-slate-400">(private)</span></label>
                      <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Comment <span className="text-red-500">*</span></label>
                    <textarea required rows={5} value={comment} onChange={e => setComment(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none" />
                  </div>
                  <button type="submit" className="px-6 py-2.5 bg-teal-600 text-white font-semibold text-sm rounded-lg hover:bg-teal-700 transition-colors">
                    Submit Comment
                  </button>
                </form>
              )}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">Related Articles</h3>
                <div className="flex flex-col gap-4">
                  {related.map(a => <ArticleCard key={a.id} article={a} size="sm" />)}
                </div>
              </div>
            )}

            {/* Category articles */}
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">More in {article.category}</h3>
              <div className="flex flex-col gap-3">
                {articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 4).map(a => (
                  <Link key={a.id} to={`/article/${a.slug}`} className="text-sm text-slate-700 hover:text-teal-700 transition-colors leading-snug">
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3 pb-2 border-b border-slate-100">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(t => (
                  <Link key={t} to={`/search?q=${t}`} className="tag-pill">{t}</Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
