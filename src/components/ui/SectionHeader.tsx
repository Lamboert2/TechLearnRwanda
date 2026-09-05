import { Link } from 'react-router';

interface Props {
  title: string;
  subtitle?: string;
  linkLabel?: string;
  linkPath?: string;
  accent?: boolean;
}

export default function SectionHeader({ title, subtitle, linkLabel, linkPath, accent }: Props) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        {accent && <div className="w-8 h-1 bg-teal-600 rounded-full mb-3" />}
        <h2 className="font-display text-2xl font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
      </div>
      {linkLabel && linkPath && (
        <Link to={linkPath} className="text-sm font-medium text-teal-700 hover:text-teal-800 flex items-center gap-1 transition-colors shrink-0">
          {linkLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      )}
    </div>
  );
}
