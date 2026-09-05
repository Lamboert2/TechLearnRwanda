import { Link } from 'react-router';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0F1729] text-white mt-20">
      {/* Newsletter bar */}
      <div className="border-b border-white/10 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">Stay Updated</h3>
            <p className="text-slate-400 text-sm mt-1">Get the latest technology articles, tutorials, and career guides in your inbox.</p>
          </div>
          {subscribed ? (
            <div className="text-teal-400 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Thank you! You're subscribed.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <button type="submit" className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-500 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">TL</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">TechLearn</div>
                <div className="text-[10px] text-slate-500 leading-tight font-medium tracking-wide uppercase">Rwanda</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A technology and digital knowledge platform for students, developers, and IT professionals in Rwanda and East Africa.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map(s => (
                <div key={s} title={s} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-colors cursor-pointer text-xs font-bold">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-4">Content</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Technology', '/technology'], ['Programming', '/programming'], ['Web Dev', '/web-development'],
                ['AI & Tech', '/ai'], ['Cybersecurity', '/cybersecurity'], ['Tutorials', '/tutorials'],
              ].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-slate-400 hover:text-teal-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Student Hub', '/student-hub'], ['Careers', '/careers'], ['Projects', '/projects'],
                ['Resources', '/resources'], ['Tools', '/tools'], ['Media', '/media'], ['Rwanda Tech', '/rwanda-tech'],
              ].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-slate-400 hover:text-teal-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['About', '/about'], ['Join Our Team', '/join-our-team'], ['Contact', '/contact'],
                ['Advertise', '/advertise'], ['Sign In', '/sign-in'],
              ].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-slate-400 hover:text-teal-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide text-slate-400 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Privacy Policy', '/privacy-policy'], ['Terms of Use', '/terms'], ['Cookie Policy', '/cookie-policy'],
                ['Disclaimer', '/disclaimer'], ['Editorial Policy', '/editorial-policy'], ['Corrections', '/corrections-policy'],
              ].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-slate-400 hover:text-teal-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} TechLearn Rwanda. All rights reserved.</span>
          <span>Technology • Knowledge • Skills • Opportunities</span>
        </div>
      </div>
    </footer>
  );
}
