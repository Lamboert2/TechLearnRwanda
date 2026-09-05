import { useState } from 'react';
import { Link, useParams } from 'react-router';
import Breadcrumb from '../components/layout/Breadcrumb';

interface ToolDef {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
}

const allTools: ToolDef[] = [
  { id: 't1', name: 'GPA Calculator', icon: '🎓', description: 'Calculate your semester and cumulative GPA', category: 'Academic', slug: 'gpa-calculator' },
  { id: 't2', name: 'Percentage Calculator', icon: '📊', description: 'Calculate percentages quickly and accurately', category: 'Math', slug: 'percentage-calculator' },
  { id: 't3', name: 'Age Calculator', icon: '📅', description: 'Calculate age from date of birth', category: 'Date & Time', slug: 'age-calculator' },
  { id: 't4', name: 'Discount Calculator', icon: '🏷️', description: 'Find discount prices and savings', category: 'Math', slug: 'discount-calculator' },
  { id: 't5', name: 'Loan Calculator', icon: '💰', description: 'Calculate loan payments and interest', category: 'Finance', slug: 'loan-calculator' },
  { id: 't6', name: 'JSON Formatter', icon: '📦', description: 'Format, validate, and prettify JSON', category: 'Developer', slug: 'json-formatter' },
  { id: 't7', name: 'Base64 Encoder', icon: '🔤', description: 'Encode and decode Base64 strings', category: 'Developer', slug: 'base64-encoder' },
  { id: 't8', name: 'URL Encoder', icon: '🔗', description: 'Encode and decode URL strings', category: 'Developer', slug: 'url-encoder' },
  { id: 't9', name: 'Password Generator', icon: '🔐', description: 'Generate secure random passwords', category: 'Security', slug: 'password-generator' },
  { id: 't10', name: 'Password Strength Checker', icon: '🛡️', description: 'Check how strong your password is', category: 'Security', slug: 'password-checker' },
  { id: 't11', name: 'Word Counter', icon: '📝', description: 'Count words, characters, sentences', category: 'Text', slug: 'word-counter' },
  { id: 't12', name: 'Case Converter', icon: '🔡', description: 'Convert text between cases', category: 'Text', slug: 'case-converter' },
  { id: 't13', name: 'Color Converter', icon: '🎨', description: 'Convert between HEX, RGB, HSL', category: 'Developer', slug: 'color-converter' },
  { id: 't14', name: 'Unit Converter', icon: '📏', description: 'Convert length, weight, temperature', category: 'Converters', slug: 'unit-converter' },
  { id: 't15', name: 'Binary Converter', icon: '01', description: 'Convert between binary, decimal, hex', category: 'Developer', slug: 'binary-converter' },
  { id: 't16', name: 'Unix Timestamp', icon: '⏰', description: 'Convert Unix timestamps to dates', category: 'Date & Time', slug: 'unix-timestamp' },
];

// Individual tool renderers
function GPACalculator() {
  const [grades, setGrades] = useState([{ subject: '', grade: '', credits: '' }]);
  const [result, setResult] = useState<number | null>(null);

  const gradePoints: Record<string, number> = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0 };

  const calculate = () => {
    let totalPoints = 0, totalCredits = 0;
    grades.forEach(g => {
      const pts = gradePoints[g.grade] ?? parseFloat(g.grade);
      const cr = parseFloat(g.credits);
      if (!isNaN(pts) && !isNaN(cr) && cr > 0) {
        totalPoints += pts * cr;
        totalCredits += cr;
      }
    });
    setResult(totalCredits > 0 ? totalPoints / totalCredits : null);
  };

  return (
    <div>
      <div className="space-y-3 mb-4">
        {grades.map((g, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <input placeholder="Subject" value={g.subject} onChange={e => { const ng = [...grades]; ng[i].subject = e.target.value; setGrades(ng); }} className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
            <select value={g.grade} onChange={e => { const ng = [...grades]; ng[i].grade = e.target.value; setGrades(ng); }} className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500">
              <option value="">Grade</option>
              {Object.keys(gradePoints).map(gp => <option key={gp} value={gp}>{gp}</option>)}
            </select>
            <input placeholder="Credits" type="number" value={g.credits} onChange={e => { const ng = [...grades]; ng[i].credits = e.target.value; setGrades(ng); }} className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setGrades([...grades, { subject: '', grade: '', credits: '' }])} className="text-sm px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">+ Add Subject</button>
        <button onClick={calculate} className="text-sm px-5 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">Calculate GPA</button>
      </div>
      {result !== null && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 text-center">
          <p className="text-sm text-teal-700 mb-1">Your GPA</p>
          <p className="text-5xl font-bold text-teal-800 font-display">{result.toFixed(2)}</p>
          <p className="text-sm text-teal-600 mt-1">{result >= 3.7 ? 'Distinction' : result >= 3.0 ? 'Merit' : result >= 2.0 ? 'Pass' : 'Below Pass'}</p>
        </div>
      )}
    </div>
  );
}

function JSONFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const format = () => {
    try { setOutput(JSON.stringify(JSON.parse(input), null, 2)); setError(''); }
    catch (e: any) { setError('Invalid JSON: ' + e.message); setOutput(''); }
  };
  const minify = () => {
    try { setOutput(JSON.stringify(JSON.parse(input))); setError(''); }
    catch (e: any) { setError('Invalid JSON: ' + e.message); setOutput(''); }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input JSON</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={10} placeholder='{"key": "value"}' className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm font-mono-code focus:outline-none focus:border-teal-500 resize-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Output</label>
          <textarea readOnly value={output} rows={10} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm font-mono-code bg-slate-50 resize-none" />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm mt-2 bg-red-50 p-3 rounded-lg">{error}</p>}
      <div className="flex gap-2 mt-3">
        <button onClick={format} className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Format / Prettify</button>
        <button onClick={minify} className="px-4 py-2 bg-slate-700 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">Minify</button>
        <button onClick={() => { setInput(''); setOutput(''); setError(''); }} className="px-4 py-2 border border-slate-200 text-sm rounded-lg hover:bg-slate-50 transition-colors">Clear</button>
      </div>
    </div>
  );
}

function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const encode = () => { setOutput(btoa(unescape(encodeURIComponent(input)))); setError(''); };
  const decode = () => {
    try { setOutput(decodeURIComponent(escape(atob(input)))); setError(''); }
    catch { setError('Invalid Base64 input'); setOutput(''); }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Input</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Enter text or Base64 string…" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm font-mono-code focus:outline-none focus:border-teal-500 resize-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Result</label>
          <textarea readOnly value={output} rows={8} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm font-mono-code bg-slate-50 resize-none" />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm mt-2 bg-red-50 p-3 rounded-lg">{error}</p>}
      <div className="flex gap-2 mt-3">
        <button onClick={encode} className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Encode to Base64</button>
        <button onClick={decode} className="px-4 py-2 bg-slate-700 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">Decode from Base64</button>
      </div>
    </div>
  );
}

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNums, setUseNums] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let chars = '';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNums) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (!chars) return;
    let pw = '';
    for (let i = 0; i < length; i++) pw += chars[Math.floor(Math.random() * chars.length)];
    setPassword(pw);
    setCopied(false);
  };

  const copy = () => { navigator.clipboard.writeText(password); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const strength = password.length === 0 ? 0 : password.length < 8 ? 1 : password.length < 12 ? 2 : password.length < 16 ? 3 : 4;
  const strengthLabel = ['', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  const strengthColor = ['', 'bg-red-500', 'bg-amber-500', 'bg-blue-500', 'bg-green-500'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Password Length: {length}</label>
        <input type="range" min={8} max={64} value={length} onChange={e => setLength(+e.target.value)} className="w-full accent-teal-600" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          ['Uppercase (A-Z)', useUpper, setUseUpper],
          ['Lowercase (a-z)', useLower, setUseLower],
          ['Numbers (0-9)', useNums, setUseNums],
          ['Symbols (!@#…)', useSymbols, setUseSymbols],
        ].map(([label, val, fn]: any) => (
          <label key={label as string} className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
            <input type="checkbox" checked={val as boolean} onChange={e => fn(e.target.checked)} className="accent-teal-600" />
            {label as string}
          </label>
        ))}
      </div>
      <button onClick={generate} className="w-full py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Generate Password</button>
      {password && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <code className="font-mono-code text-sm break-all text-slate-800">{password}</code>
            <button onClick={copy} className="shrink-0 px-3 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-lg hover:bg-teal-200 transition-colors">{copied ? '✓ Copied' : 'Copy'}</button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all ${strengthColor[strength]}`} style={{ width: `${strength * 25}%` }} />
            </div>
            <span className="text-xs font-medium text-slate-600">{strengthLabel[strength]}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const readTime = Math.ceil(words / 200);

  return (
    <div>
      <textarea value={text} onChange={e => setText(e.target.value)} rows={8} placeholder="Paste or type your text here…" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500 resize-none mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          ['Words', words],
          ['Characters', chars],
          ['Chars (no spaces)', charsNoSpaces],
          ['Sentences', sentences],
          ['Read time', `${readTime} min`],
        ].map(([label, val]) => (
          <div key={label as string} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-teal-700 font-display">{val}</p>
            <p className="text-xs text-slate-500 mt-0.5">{label as string}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorConverter() {
  const [hex, setHex] = useState('#0D9488');
  const [rgb, setRgb] = useState({ r: 13, g: 148, b: 136 });

  const hexToRgb = (h: string) => {
    const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
    if (!isNaN(r + g + b)) setRgb({ r, g, b });
  };
  const rgbToHex = ({ r, g, b }: typeof rgb) => `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Color Preview</label>
        <div className="w-full h-24 rounded-xl border border-slate-200" style={{ backgroundColor: hex }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">HEX</label>
          <div className="flex gap-2">
            <input type="color" value={hex} onChange={e => { setHex(e.target.value); hexToRgb(e.target.value); }} className="w-12 h-10 border rounded-lg cursor-pointer" />
            <input value={hex} onChange={e => { const v = e.target.value; setHex(v); if (/^#[0-9A-Fa-f]{6}$/.test(v)) hexToRgb(v); }} className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm font-mono-code focus:outline-none focus:border-teal-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">RGB</label>
          <div className="grid grid-cols-3 gap-1.5">
            {(['r', 'g', 'b'] as const).map(c => (
              <div key={c}>
                <label className="text-xs text-slate-500 uppercase">{c}</label>
                <input type="number" min={0} max={255} value={rgb[c]} onChange={e => {
                  const newRgb = { ...rgb, [c]: +e.target.value };
                  setRgb(newRgb);
                  setHex(rgbToHex(newRgb));
                }} className="w-full px-2 py-1.5 border border-slate-200 rounded text-sm text-center focus:outline-none focus:border-teal-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-50 rounded-xl p-4">
        <p className="text-sm font-medium text-slate-700 mb-2">CSS Values</p>
        <div className="space-y-1.5 font-mono-code text-sm">
          <p className="text-slate-600">color: <span className="text-teal-700">{hex}</span>;</p>
          <p className="text-slate-600">color: <span className="text-teal-700">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>;</p>
        </div>
      </div>
    </div>
  );
}

function URLEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={5} placeholder="Enter URL or text to encode/decode…" className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm font-mono-code focus:outline-none focus:border-teal-500 resize-none" />
      </div>
      <div className="flex gap-2">
        <button onClick={() => setOutput(encodeURIComponent(input))} className="px-4 py-2 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors">Encode URL</button>
        <button onClick={() => { try { setOutput(decodeURIComponent(input)); } catch { setOutput('Invalid encoded string'); }}} className="px-4 py-2 bg-slate-700 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">Decode URL</button>
      </div>
      {output && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Result</label>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-mono-code break-all text-slate-800">{output}</div>
        </div>
      )}
    </div>
  );
}

function UnitConverter() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('miles');
  const [result, setResult] = useState('');
  const [type, setType] = useState('length');

  const conversions: Record<string, Record<string, number>> = {
    length: { km: 1, miles: 0.621371, meters: 1000, feet: 3280.84, inches: 39370.1, cm: 100000 },
    weight: { kg: 1, lbs: 2.20462, grams: 1000, ounces: 35.274, tonnes: 0.001 },
    temperature: {},
  };

  const tempConvert = (val: number, from: string, to: string) => {
    let celsius = from === 'celsius' ? val : from === 'fahrenheit' ? (val - 32) * 5 / 9 : val - 273.15;
    return to === 'celsius' ? celsius : to === 'fahrenheit' ? celsius * 9 / 5 + 32 : celsius + 273.15;
  };

  const unitsByType: Record<string, string[]> = {
    length: ['km', 'miles', 'meters', 'feet', 'inches', 'cm'],
    weight: ['kg', 'lbs', 'grams', 'ounces', 'tonnes'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let res: number;
    if (type === 'temperature') {
      res = tempConvert(v, fromUnit, toUnit);
    } else {
      const table = conversions[type];
      const inBase = v / table[fromUnit];
      res = inBase * table[toUnit];
    }
    setResult(res.toFixed(6).replace(/\.?0+$/, ''));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Conversion Type</label>
        <div className="flex gap-2">
          {['length', 'weight', 'temperature'].map(t => (
            <button key={t} onClick={() => { setType(t); setFromUnit(unitsByType[t][0]); setToUnit(unitsByType[t][1]); setResult(''); }} className={`px-4 py-2 text-sm font-medium rounded-lg capitalize transition-colors ${type === t ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 items-end">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Value</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">From</label>
          <select value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500">
            {unitsByType[type].map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">To</label>
          <select value={toUnit} onChange={e => setToUnit(e.target.value)} className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500">
            {unitsByType[type].map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
      <button onClick={convert} className="w-full py-2.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Convert</button>
      {result && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-teal-800 font-display">{value} {fromUnit} = {result} {toUnit}</p>
        </div>
      )}
    </div>
  );
}

function GenericTool({ tool }: { tool: ToolDef }) {
  return <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-800 text-sm">This tool ({tool.name}) is available in the full platform.</div>;
}

function ToolWidget({ slug }: { slug: string }) {
  switch (slug) {
    case 'gpa-calculator': return <GPACalculator />;
    case 'json-formatter': return <JSONFormatter />;
    case 'base64-encoder': return <Base64Tool />;
    case 'password-generator': return <PasswordGenerator />;
    case 'word-counter': return <WordCounter />;
    case 'color-converter': return <ColorConverter />;
    case 'url-encoder': return <URLEncoder />;
    case 'unit-converter': return <UnitConverter />;
    default: return <GenericTool tool={allTools.find(t => t.slug === slug)!} />;
  }
}

function ToolDetail() {
  const { toolSlug } = useParams();
  const tool = allTools.find(t => t.slug === toolSlug);
  if (!tool) return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="font-display text-2xl text-slate-800">Tool not found</h1>
      <Link to="/tools" className="text-teal-700 mt-4 inline-block hover:underline">← Back to Tools</Link>
    </div>
  );

  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Tools', path: '/tools' }, { label: tool.name }]} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
        <main className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{tool.icon}</span>
            <div>
              <h1 className="font-display text-2xl font-semibold text-slate-900">{tool.name}</h1>
              <p className="text-slate-500 text-sm">{tool.description}</p>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6">
            <ToolWidget slug={tool.slug} />
          </div>
        </main>

        <aside>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 mb-6">
            <h3 className="font-semibold text-slate-800 mb-3">How to Use</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Fill in the input fields above and click the action button to see the result. All calculations are performed locally in your browser — no data is sent to any server.</p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-800 mb-3">Other Tools</h3>
            <div className="space-y-2">
              {allTools.filter(t => t.id !== tool.id).slice(0, 6).map(t => (
                <Link key={t.id} to={`/tools/${t.slug}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-teal-700 transition-colors">
                  <span>{t.icon}</span> {t.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ToolsIndex() {
  const categories = [...new Set(allTools.map(t => t.category))];
  return (
    <div className="page-fade max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Tools' }]} />
      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Developer & Student Tools</h1>
        <p className="text-slate-600 mt-1">Free online tools for developers, students, and technology professionals. All tools run locally in your browser.</p>
      </div>
      {categories.map(cat => (
        <section key={cat} className="mb-10">
          <h2 className="font-display text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">{cat}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allTools.filter(t => t.category === cat).map(t => (
              <Link key={t.id} to={`/tools/${t.slug}`} className="tool-card group">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-semibold text-sm text-slate-800 group-hover:text-teal-700 transition-colors">{t.name}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export { ToolsIndex, ToolDetail };
export default ToolsIndex;
