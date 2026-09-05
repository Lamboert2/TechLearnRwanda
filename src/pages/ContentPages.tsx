import { Link } from 'react-router';
import Breadcrumb from '../components/layout/Breadcrumb';
import { articles, tutorials, projects, resources, careers, mediaItems } from '../data/content';
import ArticleCard from '../components/content/ArticleCard';
import SectionHeader from '../components/ui/SectionHeader';

export function TechnologyPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Technology' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Technology</h1>
        <p className="text-slate-600 mt-1">News, analysis, and insights from the technology world.</p>
      </div>
      {articles[0] && <div className="mb-8"><ArticleCard article={articles[0]} size="featured" /></div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.slice(1, 7).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function ProgrammingPage() {
  const progArticles = articles.filter(a => a.category === 'Programming' || a.subcategory);
  const languages = ['PHP', 'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'HTML & CSS', 'SQL', 'Git'];

  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Programming' }]} />
      <div className="mt-6 mb-6">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Programming</h1>
        <p className="text-slate-600 mt-1">Articles, tutorials, and best practices across programming languages.</p>
      </div>

      {/* Language tiles */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-8">
        {languages.map(l => (
          <Link key={l} to={`/search?q=${l}`} className="bg-white border border-slate-200 rounded-xl p-3 text-center hover:border-teal-300 hover:bg-teal-50 transition-colors">
            <p className="text-xs font-semibold text-slate-700">{l}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(progArticles.length > 0 ? progArticles : articles).slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function WebDevPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Web Development' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Web Development</h1>
        <p className="text-slate-600 mt-1">Frontend, backend, and full-stack web development.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SectionHeader title="Latest Articles" />
          <div className="flex flex-col gap-5">
            {articles.filter(a => a.category === 'Web Development').slice(0, 4).map(a => <ArticleCard key={a.id} article={a} size="lg" />)}
            {articles.filter(a => a.category === 'Web Development').length === 0 && articles.slice(4, 6).map(a => <ArticleCard key={a.id} article={a} size="lg" />)}
          </div>
        </div>
        <aside>
          <SectionHeader title="Tutorials" linkLabel="All" linkPath="/tutorials" />
          <div className="flex flex-col gap-4">
            {tutorials.slice(0, 3).map(t => (
              <Link key={t.id} to={`/tutorial/${t.slug}`} className="bg-white rounded-xl border border-slate-100 p-4 card-hover group">
                <h4 className="font-semibold text-sm text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">{t.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{t.difficulty} · {t.estimatedTime}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function AIPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'AI & Technology' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">AI & Technology</h1>
        <p className="text-slate-600 mt-1">Artificial intelligence, machine learning, data science, and automation in Africa and beyond.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.filter(a => a.category === 'AI & Technology').slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
        {articles.filter(a => a.category === 'AI & Technology').length === 0 && articles.slice(2, 5).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function CybersecurityPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Cybersecurity' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Cybersecurity</h1>
        <p className="text-slate-600 mt-1">Digital security, ethical hacking, and safe development practices.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.filter(a => a.category === 'Cybersecurity').slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
        {articles.filter(a => a.category === 'Cybersecurity').length === 0 && articles.slice(1, 4).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function MobilePage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Mobile' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Mobile Development</h1>
        <p className="text-slate-600 mt-1">iOS, Android, React Native, and cross-platform mobile development.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.filter(a => a.category === 'Mobile').slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
        {articles.filter(a => a.category === 'Mobile').length === 0 && articles.slice(5, 8).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function DatabasesPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Databases' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Databases</h1>
        <p className="text-slate-600 mt-1">SQL, NoSQL, database design, performance, and optimisation.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.filter(a => a.category === 'Databases').slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
        {articles.filter(a => a.category === 'Databases').length === 0 && articles.slice(6, 9).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function RwandaTechPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Rwanda Tech' }]} />
      {/* Hero banner */}
      <div className="relative rounded-2xl overflow-hidden mb-8 mt-4">
        <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&h=400&fit=crop&auto=format" alt="Kigali skyline" className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-8">
          <div>
            <div className="text-3xl mb-2">🇷🇼</div>
            <h1 className="font-display text-3xl font-semibold text-white">Rwanda Tech</h1>
            <p className="text-slate-300 mt-1">Technology news, innovation, and opportunities from Rwanda and East Africa.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {['ICT Policy', 'Startups', 'Digital Skills', 'Innovation'].map(t => (
          <div key={t} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-teal-300 transition-colors">
            <p className="font-semibold text-slate-800 text-sm">{t}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.filter(a => a.category === 'Rwanda Tech').slice(0, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
        {articles.filter(a => a.category === 'Rwanda Tech').length === 0 && articles.slice(3, 6).map(a => <ArticleCard key={a.id} article={a} size="md" />)}
      </div>
    </div>
  );
}

export function StudentHubPage() {
  const sections = [
    { icon: '📖', title: 'Study Guides', desc: 'Comprehensive study guides for programming and IT courses.', link: '/student-hub/study-guides' },
    { icon: '💻', title: 'Programming Notes', desc: 'Concise notes covering popular programming languages.', link: '/student-hub/programming-notes' },
    { icon: '🖥️', title: 'IT Notes', desc: 'Networking, operating systems, and IT fundamentals.', link: '/student-hub/it-notes' },
    { icon: '📝', title: 'Exam Preparation', desc: 'Practice questions and revision strategies.', link: '/student-hub/exam-prep' },
    { icon: '💡', title: 'Project Ideas', desc: 'Inspiring project ideas for coursework and portfolios.', link: '/student-hub/project-ideas' },
    { icon: '🎓', title: 'Final-Year Projects', desc: 'Guidance for selecting and completing final-year projects.', link: '/student-hub/final-year' },
    { icon: '📋', title: 'Documentation Guides', desc: 'How to write professional technical documentation.', link: '/student-hub/documentation' },
    { icon: '🗺️', title: 'Learning Roadmaps', desc: 'Structured paths for learning key technologies.', link: '/student-hub/roadmaps' },
    { icon: '🏢', title: 'Internship Preparation', desc: 'How to find and succeed in technology internships.', link: '/student-hub/internships' },
    { icon: '💼', title: 'Career Guidance', desc: 'Starting and advancing your technology career.', link: '/careers' },
    { icon: '🎯', title: 'Scholarship Resources', desc: 'Technology scholarships and funding opportunities.', link: '/student-hub/scholarships' },
    { icon: '⚡', title: 'Technical Interviews', desc: 'Preparation for coding interviews and technical assessments.', link: '/careers' },
  ];

  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Student Hub' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Student Hub</h1>
        <p className="text-slate-600 mt-1 max-w-2xl">Resources, guides, and tools to help technology students succeed — from study notes to career preparation.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {sections.map(s => (
          <Link key={s.title} to={s.link} className="bg-white rounded-xl border border-slate-100 p-5 card-hover group">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-display font-semibold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{s.title}</h3>
            <p className="text-slate-500 text-sm">{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-br from-[#0F1729] to-[#1a2744] rounded-2xl p-8 text-white text-center">
        <h2 className="font-display text-2xl font-semibold mb-2">Need Help Getting Started?</h2>
        <p className="text-slate-300 mb-4">Browse our learning roadmaps to find a structured path for your technology goals.</p>
        <Link to="/resources" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-500 transition-colors">Explore Resources</Link>
      </div>
    </div>
  );
}

export function CareersPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Careers' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Careers in Technology</h1>
        <p className="text-slate-600 mt-1">Career guides, roadmaps, and resources for technology professionals in Rwanda and East Africa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {careers.map(c => (
          <Link key={c.id} to={`/careers/${c.id}`} className="bg-white rounded-xl border border-slate-100 p-5 card-hover group">
            <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${
              c.type === 'guide' ? 'bg-teal-100 text-teal-700' : 'bg-blue-100 text-blue-700'
            }`}>
              {c.type === 'guide' ? '📖 Guide' : '🗺️ Roadmap'}
            </span>
            <h3 className="font-display font-semibold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">{c.title}</h3>
            <p className="text-slate-500 text-sm line-clamp-3">{c.description}</p>
            <p className="text-xs text-slate-400 mt-3">{c.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ProjectsPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Projects' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Project Showcase</h1>
        <p className="text-slate-600 mt-1">Real projects built by our community of developers and students.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover group">
            <div className="h-52 bg-slate-100 overflow-hidden">
              <img src={p.screenshotUrl} alt={`${p.title} screenshot`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="font-display font-semibold text-slate-900 text-lg mb-2">
                <Link to={`/projects/${p.slug}`} className="hover:text-teal-700 transition-colors">{p.title}</Link>
              </h2>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.technologies.map(t => <span key={t} className="tag-pill">{t}</span>)}
              </div>
              <div className="flex gap-3">
                <Link to={`/projects/${p.slug}`} className="text-sm font-semibold text-teal-700 hover:text-teal-800">View Details →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Resources' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Developer Resources</h1>
        <p className="text-slate-600 mt-1">Cheat sheets, study guides, roadmaps, templates, and references.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map(r => (
          <Link key={r.id} to={`/resources/${r.slug}`} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover group">
            <div className="h-36 bg-slate-100 overflow-hidden">
              <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="tag-pill mb-2 inline-block capitalize">{r.type.replace('-', ' ')}</span>
              <h3 className="font-display font-semibold text-slate-900 leading-snug mb-2 group-hover:text-teal-700 transition-colors">{r.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">{r.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MediaPage() {
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Media' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Media Center</h1>
        <p className="text-slate-600 mt-1">Videos, photo galleries, and podcasts from TechLearn Rwanda.</p>
      </div>
      <div className="flex gap-3 mb-8">
        {[
          { label: '🎬 Videos', path: '/media/videos' },
          { label: '📷 Photos', path: '/media/photos' },
          { label: '🎙️ Audio', path: '/media/audio' },
        ].map(t => (
          <Link key={t.path} to={t.path} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">{t.label}</Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {mediaItems.map(m => (
          <article key={m.id} className="group bg-white rounded-xl border border-slate-100 overflow-hidden card-hover">
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              <img src={m.thumbnailUrl} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              {m.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-teal-700 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              )}
              <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wide px-2 py-1 bg-black/60 text-white rounded-full">{m.type}</span>
              {m.duration && <span className="absolute bottom-3 right-3 text-xs font-medium bg-black/70 text-white px-2 py-0.5 rounded">{m.duration}</span>}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2">
                <Link to={`/media/${m.slug}`} className="hover:text-teal-700 transition-colors">{m.title}</Link>
              </h3>
              <p className="text-xs text-slate-400 mt-1">{m.author.name} · {new Date(m.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
