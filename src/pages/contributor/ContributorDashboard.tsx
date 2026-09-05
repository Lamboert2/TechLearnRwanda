import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const statuses = ['DRAFT', 'SUBMITTED', 'UNDER REVIEW', 'REVISION REQUIRED', 'APPROVED', 'PUBLISHED', 'REJECTED'] as const;

const statusColor: Record<string, string> = {
  DRAFT: 'bg-slate-100 text-slate-600',
  SUBMITTED: 'bg-blue-100 text-blue-700',
  'UNDER REVIEW': 'bg-amber-100 text-amber-700',
  'REVISION REQUIRED': 'bg-orange-100 text-orange-700',
  APPROVED: 'bg-teal-100 text-teal-700',
  PUBLISHED: 'bg-green-100 text-green-700',
  REJECTED: 'bg-red-100 text-red-700',
};

const mockArticles = [
  { id: 1, title: 'Understanding PHP Sessions', status: 'SUBMITTED', date: '2024-11-10', feedback: '' },
  { id: 2, title: 'Introduction to REST APIs', status: 'REVISION REQUIRED', date: '2024-10-28', feedback: 'Good start! Please add more code examples and a section on error handling.' },
  { id: 3, title: 'Getting Started with GitHub Actions', status: 'PUBLISHED', date: '2024-10-15', feedback: '' },
];

export default function ContributorDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'articles' | 'create' | 'profile'>('articles');
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftSaved, setDraftSaved] = useState(false);

  if (!user) { navigate('/sign-in'); return null; }

  const saveDraft = () => { setDraftSaved(true); setTimeout(() => setDraftSaved(false), 2500); };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm font-display">TL</div>
            <span className="font-display font-bold text-slate-900 hidden sm:block">TechLearn Rwanda</span>
          </Link>
          <span className="text-slate-300">·</span>
          <span className="text-sm text-slate-500">Contributor Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600 hidden sm:block">{user.name}</span>
          <button onClick={() => { signOut(); navigate('/sign-in'); }} className="text-sm text-slate-500 hover:text-red-600 transition-colors">Sign Out</button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full px-4 py-8 flex-1">
        {/* Tabs */}
        <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-8 w-fit">
          {[
            { key: 'articles', label: '📝 My Articles' },
            { key: 'create', label: '✏️ Create Draft' },
            { key: 'profile', label: '👤 Profile' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as any)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === t.key ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* My Articles */}
        {activeTab === 'articles' && (
          <div>
            <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">My Articles</h1>
            <div className="space-y-4">
              {mockArticles.map(a => (
                <div key={a.id} className="bg-white rounded-xl border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{a.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">Submitted: {new Date(a.date).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${statusColor[a.status]}`}>{a.status}</span>
                  </div>
                  {a.feedback && (
                    <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-amber-800 mb-1">Editorial Feedback</p>
                      <p className="text-sm text-amber-700">{a.feedback}</p>
                    </div>
                  )}
                  {a.status === 'REVISION REQUIRED' && (
                    <button className="mt-3 text-sm font-semibold text-teal-700 hover:underline">Edit and Resubmit →</button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-50 rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">Submission Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s, i) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor[s]}`}>{s}</span>
                    {i < statuses.length - 1 && <span className="text-slate-300 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Create Draft */}
        {activeTab === 'create' && (
          <div>
            <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">Create Draft</h1>
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Article Title</label>
                <input value={draftTitle} onChange={e => setDraftTitle(e.target.value)} placeholder="Enter a compelling title…" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                <textarea rows={14} value={draftContent} onChange={e => setDraftContent(e.target.value)} placeholder="Write your article here. The full rich-text editor is available in the complete platform." className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 resize-none font-mono" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={saveDraft} className="px-5 py-2.5 bg-slate-700 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                  {draftSaved ? '✓ Draft Saved' : 'Save Draft'}
                </button>
                <button className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Submit for Review</button>
              </div>
              <p className="text-xs text-slate-400">Articles must be reviewed and approved by an editor before publication. You will receive feedback via the "My Articles" tab.</p>
            </div>
          </div>
        )}

        {/* Profile */}
        {activeTab === 'profile' && (
          <div>
            <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">My Profile</h1>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center text-white text-2xl font-bold font-display">
                  {user.name[0]}
                </div>
                <div>
                  <h2 className="font-display font-semibold text-slate-900 text-lg">{user.name}</h2>
                  <p className="text-slate-500 text-sm">{user.email}</p>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">{user.role}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                  <input defaultValue={user.name} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
                  <textarea rows={3} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 resize-none" placeholder="A short description about yourself and your expertise." />
                </div>
                <button className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Save Profile</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
