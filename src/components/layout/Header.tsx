import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const mainNav = [
  { label: 'Technology', path: '/technology' },
  { label: 'Programming', path: '/programming' },
  { label: 'Web Dev', path: '/web-development' },
  { label: 'AI & Tech', path: '/ai' },
  { label: 'Cybersecurity', path: '/cybersecurity' },
  { label: 'Mobile', path: '/mobile' },
  { label: 'Databases', path: '/databases' },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'Student Hub', path: '/student-hub' },
  { label: 'Careers', path: '/careers' },
  { label: 'Rwanda Tech', path: '/rwanda-tech' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resources', path: '/resources' },
  { label: 'Tools', path: '/tools' },
  { label: 'Media', path: '/media' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0F1729] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-slate-400">Technology • Knowledge • Skills • Opportunities</span>
          <div className="flex gap-4 items-center">
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
            <Link to="/advertise" className="text-slate-400 hover:text-white transition-colors">Advertise</Link>
            {user ? (
              <div className="flex items-center gap-3">
                <Link to={user.role === 'CONTRIBUTOR' ? '/contributor' : '/admin'} className="text-teal-400 hover:text-teal-300 font-medium">Dashboard</Link>
                <button onClick={signOut} className="text-slate-400 hover:text-white">Sign Out</button>
              </div>
            ) : (
              <Link to="/sign-in" className="text-teal-400 hover:text-teal-300 font-medium">Sign In</Link>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 bg-[#0D9488] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm font-display">TL</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-[#0F1729] text-lg leading-tight">TechLearn</div>
                <div className="text-[10px] text-slate-500 leading-tight font-medium tracking-wide uppercase">Rwanda</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5 overflow-x-auto flex-1 mx-6">
              {mainNav.slice(0, 10).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    location.pathname === item.path
                      ? 'border-teal-600 text-teal-700'
                      : 'border-transparent text-slate-700 hover:text-teal-700 hover:border-teal-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="px-3 py-5 text-sm font-medium text-slate-700 hover:text-teal-700 border-b-2 border-transparent hover:border-teal-300 transition-colors flex items-center gap-1 whitespace-nowrap">
                  More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full right-0 bg-white border border-slate-200 rounded-xl shadow-xl py-2 min-w-[180px] hidden group-hover:block z-50">
                  {mainNav.slice(10).map(item => (
                    <Link key={item.path} to={item.path} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-teal-700 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <Link to="/join-our-team" className="hidden sm:inline-flex items-center px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                Join Us
              </Link>
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Menu"
              >
                {menuOpen
                  ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
              {mainNav.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-slate-100 px-4 py-3 flex flex-wrap gap-2">
              <Link to="/about" className="text-sm text-slate-600 hover:text-teal-700">About</Link>
              <span className="text-slate-300">·</span>
              <Link to="/contact" className="text-sm text-slate-600 hover:text-teal-700">Contact</Link>
              <span className="text-slate-300">·</span>
              <Link to="/join-our-team" className="text-sm text-teal-700 font-medium">Join Our Team</Link>
              <span className="text-slate-300">·</span>
              {user
                ? <button onClick={signOut} className="text-sm text-slate-600 hover:text-teal-700">Sign Out</button>
                : <Link to="/sign-in" className="text-sm text-teal-700 font-medium">Sign In</Link>
              }
            </div>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-start justify-center pt-24 px-4" onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                  ref={searchRef}
                  type="search"
                  placeholder="Search articles, tutorials, tools, projects…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-lg border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
              <button type="submit" className="px-5 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors">Search</button>
              <button type="button" onClick={() => setSearchOpen(false)} className="px-4 py-3 text-slate-500 hover:text-slate-700 transition-colors">✕</button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Python', 'Cybersecurity', 'Rwanda Tech', 'Career Guide', 'MySQL'].map(s => (
                <button key={s} onClick={() => { setSearchQuery(s); }} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-teal-50 hover:text-teal-700 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
