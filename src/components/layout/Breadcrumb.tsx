import { Link } from 'react-router';

interface Crumb { label: string; path?: string; }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500 flex-wrap">
      <Link to="/" className="hover:text-teal-700 transition-colors">Home</Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          {c.path && i < crumbs.length - 1
            ? <Link to={c.path} className="hover:text-teal-700 transition-colors">{c.label}</Link>
            : <span className={i === crumbs.length - 1 ? 'text-slate-800 font-medium' : ''}>{c.label}</span>
          }
        </span>
      ))}
    </nav>
  );
}
