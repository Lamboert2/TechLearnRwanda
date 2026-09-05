import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="page-fade min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-9xl font-bold text-slate-100 select-none">404</div>
        <h1 className="font-display text-2xl font-semibold text-slate-900 -mt-4 mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/" className="px-5 py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Go to Home</Link>
          <Link to="/tutorials" className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors">Browse Tutorials</Link>
          <Link to="/search" className="px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors">Search</Link>
        </div>
      </div>
    </div>
  );
}
