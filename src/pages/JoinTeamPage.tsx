import { useState } from 'react';
import Breadcrumb from '../components/layout/Breadcrumb';

const roles = [
  { id: 'writer', label: 'Technology Writer' },
  { id: 'developer', label: 'Developer' },
  { id: 'editor', label: 'Editor' },
  { id: 'researcher', label: 'Researcher' },
  { id: 'photographer', label: 'Photographer' },
  { id: 'videographer', label: 'Videographer' },
  { id: 'designer', label: 'Graphic Designer' },
  { id: 'community', label: 'Community Contributor' },
  { id: 'social', label: 'Social Media Contributor' },
];

const benefits = [
  { icon: '✍️', title: 'Publish Your Work', desc: 'Get your articles, tutorials, and guides published on a growing East African tech platform.' },
  { icon: '🌱', title: 'Build Your Portfolio', desc: 'Develop a professional portfolio of published technology content to strengthen your career.' },
  { icon: '🤝', title: 'Join the Community', desc: 'Connect with other technology professionals, developers, and educators in Rwanda and East Africa.' },
  { icon: '📚', title: 'Learn and Grow', desc: 'Work with experienced editors who will give you constructive editorial feedback.' },
];

export default function JoinTeamPage() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', role: '', experience: '', portfolioUrl: '', whyJoin: '', additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="page-fade max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="font-display text-3xl font-semibold text-slate-900 mb-3">Application Received!</h1>
        <p className="text-slate-600 mb-2">Thank you for applying to join TechLearn Rwanda, <strong>{form.fullName}</strong>.</p>
        <p className="text-slate-600 mb-8">Our team will review your application and contact you at <strong>{form.email}</strong> within 5-7 business days.</p>
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <p className="text-teal-800 text-sm">While you wait, explore our <a href="/tutorials" className="underline">tutorials</a> and <a href="/resources" className="underline">resources</a> to get familiar with the kind of content we publish.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-fade">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0F1729] to-[#1a2744] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-wide">Opportunities</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-2 mb-4">Join Our Team</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">TechLearn Rwanda is looking for passionate individuals who want to contribute to technology education and media in East Africa.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info column */}
          <div>
            <h2 className="font-display text-xl font-semibold text-slate-900 mb-4">Why Contribute?</h2>
            <div className="space-y-4 mb-8">
              {benefits.map(b => (
                <div key={b.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{b.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-xl font-semibold text-slate-900 mb-3">Roles We're Looking For</h2>
            <div className="flex flex-wrap gap-2">
              {roles.map(r => (
                <span key={r.id} className="tag-pill">{r.label}</span>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>No account needed to apply.</strong> Submit the form and our team will reach out if your application is successful. Accepted contributors receive access to the contributor portal.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Breadcrumb crumbs={[{ label: 'Join Our Team' }]} />
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-display text-xl font-semibold text-slate-900 mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input required value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Role You're Applying For *</label>
                    <select required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500">
                      <option value="">Select a role…</option>
                      {roles.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Relevant Experience *</label>
                  <textarea required rows={4} value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} placeholder="Describe your relevant experience, skills, and any previous writing, development, or creative work." className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Portfolio or LinkedIn URL</label>
                  <input type="url" value={form.portfolioUrl} onChange={e => setForm({ ...form, portfolioUrl: e.target.value })} placeholder="https://…" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Why Do You Want to Join TechLearn Rwanda? *</label>
                  <textarea required rows={4} value={form.whyJoin} onChange={e => setForm({ ...form, whyJoin: e.target.value })} placeholder="Tell us about your motivation for contributing to technology education and media in Rwanda." className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Additional Information</label>
                  <textarea rows={3} value={form.additionalInfo} onChange={e => setForm({ ...form, additionalInfo: e.target.value })} placeholder="Any other information you'd like to share." className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none" />
                </div>
                <div className="pt-2">
                  <p className="text-xs text-slate-500 mb-4">By submitting this form, you consent to TechLearn Rwanda storing your information for the purpose of evaluating your application. We will not share your details with third parties.</p>
                  <button type="submit" disabled={loading} className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors disabled:opacity-60">
                    {loading ? 'Submitting…' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
