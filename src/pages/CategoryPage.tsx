import { useParams, Link } from 'react-router';
import { articles } from '../data/content';
import ArticleCard from '../components/content/ArticleCard';
import Breadcrumb from '../components/layout/Breadcrumb';

const categoryMeta: Record<string, { title: string; description: string; icon: string }> = {
  technology: { title: 'Technology', description: 'Latest news, analysis, and insights from the technology world.', icon: '💻' },
  programming: { title: 'Programming', description: 'Articles, guides, and best practices across programming languages and paradigms.', icon: '⌨️' },
  'web-development': { title: 'Web Development', description: 'Frontend, backend, and full-stack web development articles and tutorials.', icon: '🌐' },
  ai: { title: 'AI & Technology', description: 'Artificial intelligence, machine learning, data science, and automation.', icon: '🤖' },
  cybersecurity: { title: 'Cybersecurity', description: 'Digital security, privacy, ethical hacking, and safe coding practices.', icon: '🔒' },
  mobile: { title: 'Mobile Development', description: 'iOS, Android, React Native, and cross-platform mobile app development.', icon: '📱' },
  databases: { title: 'Databases', description: 'SQL, NoSQL, database design, performance, and optimisation.', icon: '🗄️' },
  'rwanda-tech': { title: 'Rwanda Tech', description: 'Technology news, startups, events, and opportunities from Rwanda and East Africa.', icon: '🇷🇼' },
};

export default function CategoryPage() {
  const { category } = useParams();
  const meta = categoryMeta[category || ''];

  const cat = category?.replace(/-/g, ' ').toLowerCase() || '';
  const categoryArticles = articles.filter(a => {
    const ac = a.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return ac === category || a.category.toLowerCase().replace(/\s+/g, '-') === category;
  });

  const displayTitle = meta?.title || (category || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: displayTitle }]} />

      <div className="mt-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          {meta?.icon && <span className="text-3xl">{meta.icon}</span>}
          <h1 className="font-display text-3xl font-semibold text-slate-900">{displayTitle}</h1>
        </div>
        {meta?.description && <p className="text-slate-600 mt-1 max-w-2xl">{meta.description}</p>}
      </div>

      {categoryArticles.length > 0 ? (
        <>
          {categoryArticles[0] && (
            <div className="mb-8">
              <ArticleCard article={categoryArticles[0]} size="featured" />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryArticles.slice(1).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
          </div>
        </>
      ) : (
        <div className="py-24 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="font-display text-xl font-semibold text-slate-800 mb-2">Articles Coming Soon</h2>
          <p className="text-slate-500 mb-6">We're actively publishing content in this category. Check back soon.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/tutorials" className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Browse Tutorials</Link>
            <Link to="/" className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">Back to Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}
