import { useSearchParams, Link } from 'react-router';
import { searchContent } from '../data/content';
import ArticleCard from '../components/content/ArticleCard';

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const results = query ? searchContent(query) : [];

  return (
    <div className="page-fade max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-display text-2xl font-semibold text-slate-900 mb-2">
        {query ? `Search results for "${query}"` : 'Search'}
      </h1>
      {query && <p className="text-slate-500 text-sm mb-8">{results.length} result{results.length !== 1 ? 's' : ''} found</p>}

      {!query && (
        <div className="py-16 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-slate-500">Enter a search term in the search bar to find articles, tutorials, tools, and more.</p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {['React', 'Python', 'MySQL', 'Cybersecurity', 'Rwanda Tech', 'Career'].map(t => (
              <Link key={t} to={`/search?q=${t}`} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-teal-100 hover:text-teal-700 transition-colors">{t}</Link>
            ))}
          </div>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="py-16 text-center">
          <div className="text-5xl mb-4">🤷</div>
          <h2 className="font-display text-xl text-slate-800 mb-2">No results found</h2>
          <p className="text-slate-500 mb-6">We couldn't find anything matching "{query}". Try different keywords.</p>
          <Link to="/" className="px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Back to Home</Link>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((r: any) => (
            <div key={r.id} className="bg-white rounded-xl border border-slate-100 p-5 flex gap-4 card-hover group">
              {r.imageUrl && (
                <div className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                  <img src={r.imageUrl} alt={r.imageAlt || r.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                    r.resultType === 'tutorial' ? 'bg-blue-100 text-blue-700' :
                    r.resultType === 'project' ? 'bg-purple-100 text-purple-700' : 'bg-teal-100 text-teal-700'
                  }`}>{r.resultType}</span>
                  {r.category && <span className="text-xs text-slate-400">{r.category}</span>}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
                  <Link to={`/${r.resultType}/${r.slug}`}>{r.title}</Link>
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">{r.excerpt || r.description}</p>
                {r.publishedAt && <p className="text-xs text-slate-400 mt-1">{new Date(r.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
