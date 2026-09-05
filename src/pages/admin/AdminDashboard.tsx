import { useState } from 'react';
import { Link, useNavigate, Outlet, useLocation } from 'react-router';
import { useAuth, canAccess } from '../../context/AuthContext';
import { articles, tutorials, projects, resources } from '../../data/content';

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: '📊' },
  { label: 'Articles', path: '/admin/articles', icon: '📝' },
  { label: 'Tutorials', path: '/admin/tutorials', icon: '📚' },
  { label: 'Projects', path: '/admin/projects', icon: '💻' },
  { label: 'Resources', path: '/admin/resources', icon: '📁' },
  { label: 'Media Library', path: '/admin/media', icon: '🖼️' },
  { label: 'Team Applications', path: '/admin/applications', icon: '👥' },
  { label: 'Comments', path: '/admin/comments', icon: '💬' },
  { label: 'Contact Messages', path: '/admin/messages', icon: '✉️' },
  { label: 'Newsletter', path: '/admin/newsletter', icon: '📧' },
  { label: 'Careers', path: '/admin/careers', icon: '💼' },
  { label: 'Users & Roles', path: '/admin/users', icon: '👤' },
  { label: 'SEO', path: '/admin/seo', icon: '🔍' },
  { label: 'Site Settings', path: '/admin/settings', icon: '⚙️' },
];

function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => { signOut(); navigate('/sign-in'); };

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed lg:static top-0 left-0 h-full w-64 bg-[#0F1729] text-white z-50 flex flex-col transform transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-sm font-bold font-display">TL</div>
            <div>
              <div className="font-display font-bold text-sm">TechLearn Rwanda</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wide">Admin CMS</div>
            </div>
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold">
              {user?.name[0]}
            </div>
            <div>
              <p className="text-xs font-medium">{user?.name}</p>
              <p className="text-[10px] text-slate-400">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                location.pathname === item.path
                  ? 'bg-teal-600/20 text-teal-400 border-r-2 border-teal-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="block text-xs text-slate-400 hover:text-white mb-2 transition-colors">← View Public Site</Link>
          <button onClick={handleSignOut} className="w-full text-left text-xs text-slate-400 hover:text-red-400 transition-colors">Sign Out</button>
        </div>
      </aside>
    </>
  );
}

function DashboardHome() {
  const stats = [
    { label: 'Published Articles', value: articles.length, icon: '📝', color: 'text-blue-600 bg-blue-50' },
    { label: 'Tutorials', value: tutorials.length, icon: '📚', color: 'text-teal-600 bg-teal-50' },
    { label: 'Projects', value: projects.length, icon: '💻', color: 'text-purple-600 bg-purple-50' },
    { label: 'Resources', value: resources.length, icon: '📁', color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center text-xl mb-3`}>{s.icon}</div>
            <p className="text-2xl font-bold font-display text-slate-900">{s.value}</p>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent articles */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6">
        <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-semibold text-slate-900">Recent Articles</h2>
          <Link to="/admin/articles" className="text-xs text-teal-700 hover:underline">View all</Link>
        </div>
        <div className="divide-y divide-slate-50">
          {articles.slice(0, 5).map(a => (
            <div key={a.id} className="px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-800">{a.title}</p>
                <p className="text-xs text-slate-400">{a.author.name} · {new Date(a.publishedAt).toLocaleDateString()}</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Published</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'New Article', path: '/admin/articles/new', icon: '✏️' },
          { label: 'Upload Media', path: '/admin/media', icon: '📤' },
          { label: 'Applications', path: '/admin/applications', icon: '👥' },
          { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
        ].map(q => (
          <Link key={q.path} to={q.path} className="bg-white rounded-xl border border-slate-200 p-4 text-center hover:border-teal-300 hover:bg-teal-50 transition-colors">
            <div className="text-2xl mb-1">{q.icon}</div>
            <p className="text-sm font-medium text-slate-700">{q.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticlesAdmin() {
  const [search, setSearch] = useState('');
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-semibold text-slate-900">Articles</h1>
        <button className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">+ New Article</button>
      </div>
      <div className="mb-4">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles…" className="w-full max-w-sm px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Title</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Category</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Author</th>
              <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Date</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="text-left px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map(a => (
              <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-800 line-clamp-1">{a.title}</p>
                  <p className="text-xs text-slate-400">{a.views.toLocaleString()} views</p>
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-slate-600">{a.category}</td>
                <td className="px-4 py-3 hidden md:table-cell text-slate-600">{a.author.name}</td>
                <td className="px-4 py-3 hidden lg:table-cell text-slate-500">{new Date(a.publishedAt).toLocaleDateString()}</td>
                <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Published</span></td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-teal-700 hover:underline">Edit</button>
                    <button className="text-xs text-slate-400 hover:text-red-600 transition-colors">Archive</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TeamApplications() {
  const applications = [
    { id: 1, name: 'Patrick Uwimana', email: 'patrick@example.com', role: 'Technology Writer', status: 'Pending', date: '2024-11-14' },
    { id: 2, name: 'Claudine Mukamana', email: 'claudine@example.com', role: 'Developer', status: 'Under Review', date: '2024-11-10' },
    { id: 3, name: 'Olivier Hakizimana', email: 'olivier@example.com', role: 'Editor', status: 'Approved', date: '2024-11-05' },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">Team Applications</h1>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Applicant</th>
              <th className="text-left px-4 py-3 font-semibold">Role</th>
              <th className="text-left px-4 py-3 font-semibold">Date</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="text-left px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {applications.map(a => (
              <tr key={a.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-800">{a.name}</p>
                  <p className="text-xs text-slate-400">{a.email}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{a.role}</td>
                <td className="px-4 py-3 text-slate-500">{new Date(a.date).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    a.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    a.status === 'Under Review' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                  }`}>{a.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-teal-700 hover:underline">View</button>
                    <button className="text-xs text-green-600 hover:underline">Approve</button>
                    <button className="text-xs text-red-500 hover:underline">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SiteSettings() {
  const [settings, setSettings] = useState({
    siteName: 'TechLearn Rwanda',
    tagline: 'Technology • Knowledge • Skills • Opportunities',
    contactEmail: 'info@techlearnrwanda.rw',
    location: 'Kigali, Rwanda',
    adsEnabled: false,
    adsenseId: '',
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-slate-900 mb-6">Site Settings</h1>
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 max-w-2xl">
        {[
          { key: 'siteName', label: 'Site Name', type: 'text' },
          { key: 'tagline', label: 'Tagline', type: 'text' },
          { key: 'contactEmail', label: 'Contact Email', type: 'email' },
          { key: 'location', label: 'Location', type: 'text' },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-slate-700 mb-1">{f.label}</label>
            <input type={f.type} value={(settings as any)[f.key]} onChange={e => setSettings({ ...settings, [f.key]: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
          </div>
        ))}

        <div className="border-t border-slate-100 pt-4">
          <h3 className="font-semibold text-slate-800 mb-3">Advertising</h3>
          <label className="flex items-center gap-3 cursor-pointer mb-3">
            <input type="checkbox" checked={settings.adsEnabled} onChange={e => setSettings({ ...settings, adsEnabled: e.target.checked })} className="accent-teal-600" />
            <div>
              <p className="text-sm font-medium text-slate-700">Enable Advertisements</p>
              <p className="text-xs text-slate-500">Ads are disabled by default. Only enable when a legitimate publisher ID is configured.</p>
            </div>
          </label>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Publisher ID</label>
            <input type="text" value={settings.adsenseId} onChange={e => setSettings({ ...settings, adsenseId: e.target.value })} placeholder="Enter legitimate publisher ID" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
            <p className="text-xs text-slate-400 mt-1">Do not enter a fake or unverified publisher ID.</p>
          </div>
        </div>

        <button className="px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Save Settings</button>
      </div>
    </div>
  );
}

function GenericAdminSection({ title }: { title: string }) {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-slate-900 mb-4">{title}</h1>
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-400">
        <div className="text-4xl mb-3">🏗️</div>
        <p className="font-medium">This section is available in the full platform.</p>
      </div>
    </div>
  );
}

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/sign-in');
    return null;
  }

  if (!canAccess(user, 'EDITOR')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl text-slate-800 mb-2">Access Denied</h2>
          <p className="text-slate-500">You don't have permission to access this area.</p>
          <Link to="/" className="mt-4 inline-block text-teal-700 hover:underline">← Go to home page</Link>
        </div>
      </div>
    );
  }

  // Force password change
  if (user.mustChangePassword) {
    return <ChangePasswordPrompt />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Admin top bar */}
        <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <h2 className="font-semibold text-slate-700 text-sm">TechLearn Rwanda Admin</h2>
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function ChangePasswordPrompt() {
  const [newPwd, setNewPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const { changePassword } = useAuth();
  const navigate = useNavigate();

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPwd.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (newPwd !== confirm) { setError('Passwords do not match.'); return; }
    changePassword(newPwd);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 w-full max-w-md shadow-sm">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🔐</div>
          <h1 className="font-display text-2xl font-semibold text-slate-900">Change Your Password</h1>
          <p className="text-slate-500 text-sm mt-1">For security, you must set a new password before continuing.</p>
        </div>
        {error && <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">{error}</div>}
        <form onSubmit={handle} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">New Password (min. 8 characters)</label>
            <input required type="password" value={newPwd} onChange={e => setNewPwd(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
            <input required type="password" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
          </div>
          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">Set New Password</button>
        </form>
      </div>
    </div>
  );
}

export { DashboardHome, ArticlesAdmin, TeamApplications, SiteSettings, GenericAdminSection };
