import { useState } from 'react';
import { Link } from 'react-router';
import Breadcrumb from '../components/layout/Breadcrumb';

export function AboutPage() {
  return (
    <div className="page-fade max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb crumbs={[{ label: 'About' }]} />
      <div className="mt-8 prose prose-slate max-w-none">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl font-display">TL</span>
          </div>
          <h1 className="font-display text-4xl font-semibold text-slate-900">About TechLearn Rwanda</h1>
          <p className="text-xl text-slate-600 mt-3">Technology • Knowledge • Skills • Opportunities</p>
        </div>

        {[
          { title: 'What We Are', content: 'TechLearn Rwanda is a comprehensive technology and digital knowledge platform designed for students, developers, IT professionals, entrepreneurs, and technology enthusiasts in Rwanda and East Africa. We combine the depth of a technology publication with the practicality of an education platform, the community of a student hub, and the utility of a developer resource centre.' },
          { title: 'Our Mission', content: 'To accelerate digital literacy, programming skills, and technology careers in Rwanda by providing high-quality, accessible, and locally relevant technology education, resources, and media.' },
          { title: 'Our Vision', content: "To become the most trusted technology knowledge platform in East Africa — where students learn, developers grow, professionals connect, and ideas are shared." },
          { title: 'Who We Serve', content: 'Students pursuing technology degrees and looking for practical knowledge beyond the classroom. Developers building skills and looking for career opportunities. IT professionals seeking to stay current with industry developments. Entrepreneurs using technology to build businesses. Beginners taking their first steps into programming and technology. Technology enthusiasts who want to understand and participate in the digital economy.' },
          { title: 'Our Content', content: 'Every article, tutorial, and resource on TechLearn Rwanda is reviewed by human editors before publication. We do not publish automatically generated content. We do not scrape or copy from other websites. Our editorial team includes practising software engineers, cybersecurity professionals, data scientists, and experienced technology educators.' },
          { title: 'Editorial Philosophy', content: 'We publish content that is genuinely useful, technically accurate, and appropriate for our audience. We clearly distinguish between news, opinion, tutorial, and guide content. We cite sources where appropriate and correct factual errors promptly.' },
        ].map(s => (
          <div key={s.title} className="mb-8">
            <h2 className="font-display text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-teal-600 rounded-full" />
              {s.title}
            </h2>
            <p className="text-slate-600 leading-relaxed">{s.content}</p>
          </div>
        ))}

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mt-10">
          <h2 className="font-display text-xl font-semibold text-teal-900 mb-3">Contribute to TechLearn Rwanda</h2>
          <p className="text-teal-800 mb-4">We welcome technology writers, developers, photographers, videographers, educators, and community contributors. If you're passionate about technology in Rwanda and East Africa, we'd love to hear from you.</p>
          <Link to="/join-our-team" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">Apply to Join Our Team</Link>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100">
          <h2 className="font-display text-xl font-semibold text-slate-900 mb-3">Contact Us</h2>
          <p className="text-slate-600">For editorial inquiries, corrections, advertising, or general questions, please visit our <Link to="/contact" className="text-teal-700 hover:underline">Contact page</Link>.</p>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', category: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-fade max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb crumbs={[{ label: 'Contact' }]} />
      <h1 className="font-display text-3xl font-semibold text-slate-900 mt-6 mb-2">Contact Us</h1>
      <p className="text-slate-600 mb-8">We read every message. Please select the appropriate category so we can direct your query to the right team.</p>

      {submitted ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h2 className="font-display text-xl font-semibold text-teal-900 mb-2">Message Sent</h2>
          <p className="text-teal-700">Thank you for reaching out. We typically respond within 2-3 business days.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-slate-200 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500">
              {['General', 'Editorial', 'Technical', 'Partnership', 'Advertising', 'Join Our Team'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
            <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 resize-none" />
          </div>
          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">Send Message</button>
        </form>
      )}
    </div>
  );
}

export function AdvertisePage() {
  return (
    <div className="page-fade max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb crumbs={[{ label: 'Advertise' }]} />
      <h1 className="font-display text-3xl font-semibold text-slate-900 mt-6 mb-4">Advertise on TechLearn Rwanda</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">TechLearn Rwanda connects technology brands, educational institutions, and services with an engaged audience of students, developers, and IT professionals in Rwanda and East Africa.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: '🎯', title: 'Targeted Audience', desc: 'Reach students, developers, and technology professionals who are actively engaged with technology content.' },
          { icon: '📍', title: 'East Africa Focus', desc: 'Connect with a highly relevant audience in Rwanda and the broader East African technology community.' },
          { icon: '📋', title: 'Content First', desc: 'All advertising is secondary to publisher content. Your ads reach readers who are genuinely engaged.' },
        ].map(s => (
          <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl font-semibold text-slate-900 mb-4">Advertising Options</h2>
      <div className="space-y-3 mb-10">
        {[
          { type: 'Display Advertising', desc: 'Banner placements across article pages, category pages, and the homepage.' },
          { type: 'Sponsored Content', desc: 'Educational articles, tutorials, or guides co-created with your brand. Clearly labelled as sponsored.' },
          { type: 'Newsletter Sponsorship', desc: 'Reach subscribers directly through our weekly technology newsletter.' },
          { type: 'Partnerships', desc: 'Longer-term brand partnerships supporting technology education initiatives.' },
        ].map(o => (
          <div key={o.type} className="flex gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-900">{o.type}</h4>
              <p className="text-slate-500 text-sm mt-0.5">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900 mb-4">Get in Touch</h3>
        <p className="text-slate-600 text-sm mb-4">To discuss advertising opportunities, please send us your inquiry. We'll respond within 2 business days with rates and available placements.</p>
        <Link to="/contact" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">
          Contact Advertising Team
        </Link>
      </div>
    </div>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="page-fade max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-semibold text-slate-900 mb-2">{title}</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Introduction</h2>
        <p>TechLearn Rwanda ("we", "us", "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and what rights you have regarding your data.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Newsletter subscriptions: We collect only your email address when you opt in.</li>
          <li>Contact form submissions: We collect the name, email, and message you provide.</li>
          <li>Team applications: We collect the information included in your application form.</li>
          <li>Comments: We collect the name, email, and comment content you submit.</li>
          <li>Technical data: We may collect standard server logs including IP addresses and browser user agents for security and performance purposes.</li>
        </ul>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">How We Use Your Information</h2>
        <p>We use collected information to respond to inquiries, send newsletters to subscribers, moderate comments, process team applications, and improve the platform. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us through our contact page. Newsletter subscribers may unsubscribe at any time using the link in any newsletter email.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Contact</h2>
        <p>For privacy-related inquiries, please use our <Link to="/contact" className="text-teal-700 hover:underline">Contact page</Link> and select "General" as the category.</p>
      </div>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Acceptance</h2>
        <p>By accessing TechLearn Rwanda, you agree to these Terms of Use. If you do not agree, please do not use the platform.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Use of Content</h2>
        <p>All content on TechLearn Rwanda is provided for educational and informational purposes. You may share links to content. You may not reproduce, republish, or distribute content without written permission.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">User-Submitted Content</h2>
        <p>Comments and other content submitted by users must be factual, respectful, and not violate any applicable laws. We reserve the right to remove content that violates these terms or our community standards.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Disclaimer of Warranties</h2>
        <p>Content is provided "as is" without warranties of any kind. Technical information should be verified before use in production systems.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Changes</h2>
        <p>We may update these terms at any time. Continued use of the platform constitutes acceptance of updated terms.</p>
      </div>
    </LegalPage>
  );
}

export function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">How We Use Cookies</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Strictly necessary cookies:</strong> Required for the platform to function. These cannot be disabled.</li>
          <li><strong>Performance cookies:</strong> Help us understand how visitors use the platform so we can improve it. No personal data is collected.</li>
          <li><strong>Preference cookies:</strong> Remember your preferences such as theme settings.</li>
        </ul>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Managing Cookies</h2>
        <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect the functionality of the platform.</p>
      </div>
    </LegalPage>
  );
}

export function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">General Information Only</h2>
        <p>Content on TechLearn Rwanda is provided for educational and informational purposes only. It does not constitute professional advice. Always verify technical information before using it in production environments.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">External Links</h2>
        <p>Our content may link to external websites. We are not responsible for the content, accuracy, or availability of external sites.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Accuracy</h2>
        <p>While we strive for accuracy, technology information can change rapidly. We encourage readers to verify information with official documentation. If you find an error, please use our corrections process.</p>
      </div>
    </LegalPage>
  );
}

export function EditorialPolicy() {
  return (
    <LegalPage title="Editorial Policy">
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Content Production</h2>
        <p>All content published on TechLearn Rwanda is reviewed by human editors before publication. We do not publish automatically generated content without human review and approval.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">AI-Assisted Drafting</h2>
        <p>AI tools may be used to assist with initial drafting, research, or outline generation. All AI-assisted content is reviewed, edited, and approved by qualified human editors. AI-drafted content is never published as-is. Authors are responsible for the accuracy of their published work.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Originality</h2>
        <p>We publish only original content. We do not scrape, copy, or republish content from other websites without explicit permission and proper attribution. Plagiarism results in immediate removal and may result in contributor access being revoked.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Fact Checking</h2>
        <p>Technical claims are verified against authoritative sources such as official documentation, peer-reviewed research, or established industry references. We include source links where appropriate.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Corrections</h2>
        <p>Factual errors are corrected promptly and transparently. Significant corrections are noted at the bottom of the relevant article.</p>
      </div>
      <div>
        <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">Advertising Separation</h2>
        <p>Editorial decisions are made independently of advertising relationships. Advertising does not influence content selection, coverage, or editorial conclusions. Sponsored content is clearly labelled.</p>
      </div>
    </LegalPage>
  );
}

export function CorrectionsPolicy() {
  const [form, setForm] = useState({ article: '', description: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page-fade max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-semibold text-slate-900 mb-4">Corrections Policy</h1>
      <div className="text-slate-600 mb-8 space-y-4 text-sm leading-relaxed">
        <p>TechLearn Rwanda is committed to accuracy. When we make errors, we correct them promptly and transparently.</p>
        <p>If you believe you have found a factual error in our content, please use the form below to report it. We review all correction requests and respond within 3 business days.</p>
        <p>Significant corrections to published articles are noted at the bottom of the relevant piece with a clear description of what was changed and when.</p>
      </div>
      {submitted ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="text-teal-800 font-medium">Thank you for your correction report. Our editorial team will review it within 3 business days.</p>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 bg-white rounded-2xl border border-slate-200 p-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Article URL or Title *</label>
            <input required value={form.article} onChange={e => setForm({ ...form, article: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description of the Error *</label>
            <textarea required rows={5} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 resize-none" placeholder="Please describe the error and, if possible, provide the correct information with a source." />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Email (optional)</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" placeholder="We'll notify you when the correction is reviewed" />
          </div>
          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors">Submit Correction Request</button>
        </form>
      )}
    </div>
  );
}
