import { Link } from 'react-router';
import ArticleCard from '../components/content/ArticleCard';
import SectionHeader from '../components/ui/SectionHeader';
import { articles, tutorials, projects, resources, careers, mediaItems, getFeaturedArticles, getTrendingArticles, getEditorsPicks } from '../data/content';

const toolLinks = [
  { icon: '🧮', label: 'GPA Calculator', path: '/tools/gpa-calculator' },
  { icon: '🔐', label: 'Password Generator', path: '/tools/password-generator' },
  { icon: '📦', label: 'JSON Formatter', path: '/tools/json-formatter' },
  { icon: '🔄', label: 'Base64 Encoder', path: '/tools/base64-encoder' },
  { icon: '🎨', label: 'Color Converter', path: '/tools/color-converter' },
  { icon: '📝', label: 'Word Counter', path: '/tools/word-counter' },
  { icon: '🌡️', label: 'Unit Converter', path: '/tools/unit-converter' },
  { icon: '🔗', label: 'URL Encoder', path: '/tools/url-encoder' },
];

const categories = [
  { label: 'Technology', icon: '💻', path: '/technology', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { label: 'Programming', icon: '⌨️', path: '/programming', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { label: 'Web Dev', icon: '🌐', path: '/web-development', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { label: 'AI & Tech', icon: '🤖', path: '/ai', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { label: 'Cybersecurity', icon: '🔒', path: '/cybersecurity', color: 'bg-red-50 text-red-700 border-red-200' },
  { label: 'Mobile', icon: '📱', path: '/mobile', color: 'bg-green-50 text-green-700 border-green-200' },
  { label: 'Databases', icon: '🗄️', path: '/databases', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { label: 'Rwanda Tech', icon: '🇷🇼', path: '/rwanda-tech', color: 'bg-sky-50 text-sky-700 border-sky-200' },
];

export default function Home() {
  const featured = getFeaturedArticles();
  const trending = getTrendingArticles();
  const picks = getEditorsPicks();

  return (
    <main className="page-fade">
      {/* Hero / Featured */}
      <section className="bg-[#0F1729] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              {featured[0] && <ArticleCard article={featured[0]} size="featured" />}
            </div>
            <div className="flex flex-col gap-5">
              {featured.slice(1, 3).map(a => (
                <article key={a.id} className="group bg-white/5 rounded-xl overflow-hidden flex gap-3 p-3 hover:bg-white/10 transition-colors">
                  <div className="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-800">
                    <img src={a.imageUrl} alt={a.imageAlt} className="w-full h-full object-cover opacity-80" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wide">{a.category}</span>
                    <h3 className="font-display font-semibold text-white text-sm leading-snug mt-1 line-clamp-3">
                      <Link to={`/article/${a.slug}`} className="hover:text-teal-300 transition-colors">{a.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{a.readTime} min read</p>
                  </div>
                </article>
              ))}
              {/* Quick search */}
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-2">Quick Search</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Python', 'MySQL', 'Security', 'Career'].map(t => (
                    <Link key={t} to={`/search?q=${t}`} className="text-xs px-2.5 py-1 bg-white/10 text-slate-300 rounded-full hover:bg-teal-800 hover:text-white transition-colors">{t}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-white border-b border-slate-100 py-4 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
          {categories.map(c => (
            <Link key={c.path} to={c.path} className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${c.color}`}>
              <span>{c.icon}</span> {c.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Latest Technology */}
        <section className="mb-14">
          <SectionHeader title="Latest Technology" linkLabel="View All" linkPath="/technology" accent />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.slice(0, 4).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
          </div>
        </section>

        {/* Trending + Sidebar layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="lg:col-span-2">
            <SectionHeader title="Trending Now" accent />
            <div className="flex flex-col gap-5">
              {trending.length > 0
                ? trending.map(a => <ArticleCard key={a.id} article={a} size="lg" />)
                : articles.slice(1, 4).map(a => <ArticleCard key={a.id} article={a} size="lg" />)
              }
            </div>
          </div>
          <aside>
            <SectionHeader title="Editor's Picks" linkLabel="See all" linkPath="/technology" />
            <div className="flex flex-col gap-4 mb-8">
              {picks.length > 0
                ? picks.map(a => <ArticleCard key={a.id} article={a} size="sm" />)
                : articles.slice(0, 4).map(a => <ArticleCard key={a.id} article={a} size="sm" />)
              }
            </div>

            {/* Newsletter mini */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl p-5 text-white">
              <h4 className="font-display font-semibold text-base mb-1">Tech Digest</h4>
              <p className="text-teal-200 text-xs mb-3">Weekly tech insights, tutorials and career tips.</p>
              <Link to="#newsletter" className="block w-full text-center py-2 bg-white text-teal-800 text-sm font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                Subscribe Free →
              </Link>
            </div>
          </aside>
        </div>

        {/* Programming Tutorials */}
        <section className="mb-14">
          <SectionHeader title="Programming Tutorials" subtitle="Step-by-step guides for all skill levels" linkLabel="All Tutorials" linkPath="/tutorials" accent />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tutorials.map(t => (
              <article key={t.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover group">
                <div className="aspect-video bg-slate-100 overflow-hidden">
                  <img src={t.imageUrl} alt={t.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      t.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      t.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>{t.difficulty}</span>
                    <span className="text-xs text-slate-400">⏱ {t.estimatedTime}</span>
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 leading-snug mb-2 line-clamp-2">
                    <Link to={`/tutorial/${t.slug}`} className="hover:text-teal-700 transition-colors">{t.title}</Link>
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {t.tags.slice(0, 3).map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI & Rwanda Tech split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <section>
            <SectionHeader title="AI & Technology" linkLabel="More" linkPath="/ai" accent />
            <div className="flex flex-col gap-4">
              {articles.filter(a => a.category === 'AI & Technology').slice(0, 3).map(a => <ArticleCard key={a.id} article={a} size="sm" />)}
              {articles.filter(a => a.category === 'AI & Technology').length === 0 && articles.slice(7, 9).map(a => <ArticleCard key={a.id} article={a} size="sm" />)}
            </div>
          </section>
          <section>
            <SectionHeader title="Rwanda Tech" linkLabel="More" linkPath="/rwanda-tech" accent />
            <div className="flex flex-col gap-4">
              {articles.filter(a => a.category === 'Rwanda Tech').slice(0, 3).map(a => <ArticleCard key={a.id} article={a} size="sm" />)}
              {articles.filter(a => a.category === 'Rwanda Tech').length === 0 && articles.slice(3, 5).map(a => <ArticleCard key={a.id} article={a} size="sm" />)}
            </div>
          </section>
        </div>

        {/* Student Hub promo */}
        <section className="mb-14 bg-gradient-to-r from-[#0F1729] to-[#1a2744] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wide">Student Hub</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4">Everything You Need to Succeed in Tech</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">Study guides, IT notes, exam prep, project ideas, learning roadmaps, internship resources, and career guidance — all designed for students navigating the technology landscape in Rwanda and East Africa.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/student-hub" className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-500 transition-colors">
                Explore Student Hub →
              </Link>
              <Link to="/tutorials" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                Browse Tutorials
              </Link>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <SectionHeader title="Featured Projects" subtitle="Real-world projects built by the community" linkLabel="All Projects" linkPath="/projects" accent />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <article key={p.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover group">
                <div className="h-48 bg-slate-100 overflow-hidden">
                  <img src={p.screenshotUrl} alt={`${p.title} screenshot`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-slate-900 mb-2">
                    <Link to={`/projects/${p.slug}`} className="hover:text-teal-700 transition-colors">{p.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm mb-3 line-clamp-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-14">
          <SectionHeader title="Developer Tools" subtitle="Free online tools for developers and students" linkLabel="All Tools" linkPath="/tools" accent />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {toolLinks.map(t => (
              <Link key={t.path} to={t.path} className="tool-card flex items-center gap-3">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-sm font-medium text-slate-700">{t.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Media */}
        <section className="mb-14">
          <SectionHeader title="Media Center" subtitle="Videos, photo galleries, and podcasts" linkLabel="Explore Media" linkPath="/media" accent />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mediaItems.map(m => (
              <article key={m.id} className="group bg-white rounded-xl border border-slate-100 overflow-hidden card-hover">
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <img src={m.thumbnailUrl} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {m.type === 'video' && (
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-teal-700 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    )}
                    {m.type === 'podcast' && (
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V23h2v-2.06A9 9 0 0 0 21 12v-2h-2z" /></svg>
                      </div>
                    )}
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wide px-2 py-1 bg-black/60 text-white rounded-full">
                    {m.type}
                  </span>
                  {m.duration && <span className="absolute bottom-3 right-3 text-xs font-medium bg-black/70 text-white px-2 py-0.5 rounded">{m.duration}</span>}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2">
                    <Link to={`/media/${m.slug}`} className="hover:text-teal-700 transition-colors">{m.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{m.author.name} · {new Date(m.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Careers */}
        <section className="mb-14">
          <SectionHeader title="Career Resources" subtitle="Guides, roadmaps, and opportunities" linkLabel="All Career Content" linkPath="/careers" accent />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careers.slice(0, 3).map(c => (
              <Link key={c.id} to={`/careers/${c.id}`} className="bg-white rounded-xl border border-slate-100 p-5 card-hover group">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${
                  c.type === 'guide' ? 'bg-teal-100 text-teal-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {c.type === 'guide' ? '📖 Guide' : '🗺️ Roadmap'}
                </span>
                <h3 className="font-display font-semibold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">{c.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{c.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-14">
          <SectionHeader title="Developer Resources" subtitle="Cheat sheets, guides, and references" linkLabel="All Resources" linkPath="/resources" accent />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map(r => (
              <Link key={r.id} to={`/resources/${r.slug}`} className="bg-white rounded-xl border border-slate-100 p-4 card-hover group">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                  <span className="text-lg">{r.type === 'cheat-sheet' ? '📋' : r.type === 'roadmap' ? '🗺️' : r.type === 'guide' ? '📖' : '📚'}</span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm leading-snug mb-1 group-hover:text-teal-700 transition-colors">{r.title}</h4>
                <p className="text-slate-500 text-xs line-clamp-2">{r.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {r.tags.slice(0, 2).map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="mb-14 bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Contribute</span>
            <h2 className="font-display text-3xl font-semibold text-slate-900 mt-2 mb-4">Join Our Team</h2>
            <p className="text-slate-600 mb-6">We're looking for technology writers, developers, editors, photographers, videographers, and community contributors passionate about technology in Rwanda and East Africa.</p>
            <Link to="/join-our-team" className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">
              Apply to Join
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
