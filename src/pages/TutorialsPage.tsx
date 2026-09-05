import { Link, useParams } from 'react-router';
import { tutorials } from '../data/content';
import Breadcrumb from '../components/layout/Breadcrumb';
import NotFound from './NotFound';

function TutorialList() {
  const diffs = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Tutorials' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Tutorials</h1>
        <p className="text-slate-600 mt-1">Step-by-step guides covering programming, web development, and technology.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map(t => (
          <article key={t.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover group">
            <div className="aspect-video bg-slate-100 overflow-hidden">
              <img src={t.imageUrl} alt={t.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  t.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  t.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>{t.difficulty}</span>
                <span className="text-xs text-slate-400">⏱ {t.estimatedTime}</span>
              </div>
              <h2 className="font-display font-semibold text-slate-900 leading-snug mb-2">
                <Link to={`/tutorial/${t.slug}`} className="hover:text-teal-700 transition-colors">{t.title}</Link>
              </h2>
              <p className="text-slate-500 text-sm line-clamp-2 mb-3">{t.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <img src={t.author.photo} alt={t.author.name} className="w-5 h-5 rounded-full object-cover" />
                  <span>{t.author.name}</span>
                </div>
                <Link to={`/tutorial/${t.slug}`} className="text-xs font-semibold text-teal-700 hover:text-teal-800">Start →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TutorialDetail() {
  const { slug } = useParams();
  const tutorial = tutorials.find(t => t.slug === slug);
  if (!tutorial) return <NotFound />;

  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Tutorials', path: '/tutorials' }, { label: tutorial.title }]} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
        <main className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
              tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
              tutorial.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
            }`}>{tutorial.difficulty}</span>
            <span className="text-sm text-slate-500 flex items-center gap-1">⏱ {tutorial.estimatedTime}</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-slate-900 mb-4">{tutorial.title}</h1>
          <p className="text-lg text-slate-600 mb-6">{tutorial.description}</p>

          <div className="flex items-center gap-3 py-4 border-y border-slate-100 mb-8">
            <img src={tutorial.author.photo} alt={tutorial.author.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-slate-900 text-sm">{tutorial.author.name}</p>
              <p className="text-xs text-slate-400">{new Date(tutorial.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Prerequisites</h3>
            <ul className="space-y-1">
              {tutorial.prerequisites.map((p, i) => (
                <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning objectives */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-8">
            <h3 className="font-semibold text-teal-900 mb-2">What You'll Learn</h3>
            <ul className="space-y-1">
              {tutorial.objectives.map((o, i) => (
                <li key={i} className="text-sm text-teal-800 flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          {tutorial.sections.map((section, i) => (
            <div key={section.id} className="mb-10">
              <h2 className="font-display text-xl font-semibold text-slate-900 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>
              {section.codeExample && (
                <div className="bg-[#0F172A] rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{section.language || 'code'}</span>
                  </div>
                  <pre className="p-5 text-sm text-slate-300 overflow-x-auto font-mono-code leading-relaxed">{section.codeExample}</pre>
                </div>
              )}
            </div>
          ))}
        </main>

        {/* Sidebar: TOC */}
        <aside>
          <div className="sticky top-24 bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Table of Contents</h3>
            <ol className="space-y-2">
              {tutorial.sections.map((s, i) => (
                <li key={s.id} className="flex items-start gap-2 text-sm text-slate-600 hover:text-teal-700 cursor-pointer transition-colors">
                  <span className="font-bold text-teal-600 flex-shrink-0">{i + 1}.</span>
                  {s.title}
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex flex-wrap gap-1">
                {tutorial.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export { TutorialList, TutorialDetail };
export default TutorialList;
