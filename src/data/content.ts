export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory?: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
  type: 'article' | 'tutorial' | 'news' | 'opinion' | 'how-to' | 'guide' | 'interview' | 'review';
  views: number;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  photo: string;
  bio: string;
  expertise: string[];
  role: string;
  socialLinks?: { twitter?: string; linkedin?: string; github?: string };
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  prerequisites: string[];
  objectives: string[];
  author: Author;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  sections: TutorialSection[];
  views: number;
  relatedTutorials?: string[];
}

export interface TutorialSection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  language?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  screenshotUrl: string;
  demoUrl?: string;
  sourceUrl?: string;
  author: Author;
  publishedAt: string;
  category: string;
  tags: string[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: 'cheat-sheet' | 'guide' | 'template' | 'reference' | 'roadmap' | 'pdf' | 'code';
  category: string;
  tags: string[];
  downloadUrl?: string;
  author: Author;
  publishedAt: string;
  imageUrl: string;
}

export interface Career {
  id: string;
  title: string;
  company?: string;
  type: 'job' | 'internship' | 'guide' | 'roadmap';
  location?: string;
  remote?: boolean;
  description: string;
  requirements?: string[];
  skills?: string[];
  deadline?: string;
  publishedAt: string;
  category: string;
  featured?: boolean;
}

export interface MediaItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: 'video' | 'photo' | 'audio' | 'podcast' | 'gallery';
  url?: string;
  thumbnailUrl: string;
  duration?: string;
  author: Author;
  publishedAt: string;
  category: string;
  tags: string[];
  transcript?: string;
}

// Authors
export const authors: Author[] = [
  {
    id: 'a1',
    name: 'Jean-Baptiste Nzeyimana',
    slug: 'jean-baptiste-nzeyimana',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format',
    bio: 'Jean-Baptiste is a senior software engineer and technology educator based in Kigali. He has over eight years of experience in web development and has contributed to several open-source projects in East Africa.',
    expertise: ['Web Development', 'JavaScript', 'React', 'Node.js'],
    role: 'Senior Editor',
    socialLinks: { twitter: 'jb_tech_rw', github: 'jbnzeyimana' }
  },
  {
    id: 'a2',
    name: 'Amina Uwimana',
    slug: 'amina-uwimana',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&auto=format',
    bio: 'Amina is a cybersecurity analyst and educator passionate about digital safety in Rwanda. She holds certifications in ethical hacking and network security.',
    expertise: ['Cybersecurity', 'Networking', 'Cloud Security'],
    role: 'Technology Writer',
    socialLinks: { linkedin: 'aminauwimana', twitter: 'amina_sectech' }
  },
  {
    id: 'a3',
    name: 'Eric Habimana',
    slug: 'eric-habimana',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format',
    bio: 'Eric is a full-stack developer and Python enthusiast who teaches programming at the University of Rwanda. He specialises in data science and machine learning applications.',
    expertise: ['Python', 'Machine Learning', 'Data Science', 'AI'],
    role: 'Contributing Author',
    socialLinks: { github: 'erichabimana', linkedin: 'eric-habimana-rw' }
  },
  {
    id: 'a4',
    name: 'Grace Ingabire',
    slug: 'grace-ingabire',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&auto=format',
    bio: 'Grace is a mobile developer and UI/UX designer focused on building accessible applications for African markets. She co-founded a tech startup in Kigali.',
    expertise: ['Mobile Development', 'React Native', 'UI/UX Design'],
    role: 'Technology Writer',
    socialLinks: { twitter: 'grace_dev_rw', linkedin: 'grace-ingabire' }
  }
];

// Articles
export const articles: Article[] = [
  {
    id: 'art1',
    slug: 'getting-started-with-react-2024',
    title: 'Getting Started with React: A Complete Guide for Rwandan Developers',
    excerpt: 'React remains the most widely used JavaScript library for building user interfaces. This comprehensive guide walks you through everything you need to know to start building React applications from scratch.',
    content: `<h2>What is React?</h2><p>React is a JavaScript library developed by Meta (formerly Facebook) for building user interfaces. It uses a component-based architecture that makes it straightforward to build complex, interactive web applications.</p><h2>Why Learn React in 2024?</h2><p>React continues to dominate the frontend landscape. According to the Stack Overflow Developer Survey, React is consistently among the most used and most wanted web frameworks. For developers in Rwanda's growing tech ecosystem, React skills open doors to local startups, remote work opportunities, and global tech companies.</p><h2>Setting Up Your Environment</h2><p>Before writing your first React component, you need to set up a proper development environment.</p><pre><code># Install Node.js first (https://nodejs.org)
# Then create a new React project
npx create-react-app my-first-app
cd my-first-app
npm start</code></pre><p>This will scaffold a complete React project and start a development server.</p><h2>Understanding Components</h2><p>Components are the building blocks of React applications. A component is a JavaScript function that returns HTML-like markup called JSX.</p><pre><code>function Greeting({ name }) {
  return (
    &lt;div className="greeting"&gt;
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;
      &lt;p&gt;Welcome to React development.&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Greeting;</code></pre><h2>State and Props</h2><p>State is data that can change over time and triggers a re-render when updated. Props are values passed from a parent component to a child component.</p><pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre><h2>Next Steps</h2><p>Once you're comfortable with the basics, explore React Router for navigation, and consider learning a state management library like Zustand or Redux Toolkit for larger applications.</p>`,
    category: 'Programming',
    subcategory: 'React',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    author: authors[0],
    publishedAt: '2024-11-15',
    readTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'React code on a monitor',
    featured: true,
    editorsPick: true,
    type: 'guide',
    views: 4230
  },
  {
    id: 'art2',
    slug: 'cybersecurity-basics-east-africa',
    title: 'Cybersecurity Fundamentals Every East African Developer Must Know',
    excerpt: 'As digital adoption accelerates across East Africa, understanding cybersecurity fundamentals has become essential for every developer, IT professional, and business owner.',
    content: `<h2>The Cybersecurity Landscape in East Africa</h2><p>East Africa's rapid digitisation has brought remarkable economic opportunities — and new security challenges. Mobile money platforms, e-government services, and digital businesses now handle millions of transactions daily, making the region an increasingly attractive target for cybercriminals.</p><h2>Common Threats You Should Know</h2><p>Understanding common attack vectors is the first step toward building secure systems.</p><h3>Phishing Attacks</h3><p>Phishing remains the most common entry point for cybercriminals. Attackers send deceptive emails or messages that trick users into revealing credentials or installing malware. Always verify sender addresses and never click suspicious links.</p><h3>SQL Injection</h3><p>SQL injection occurs when attackers insert malicious SQL code into input fields to manipulate your database.</p><pre><code>-- Vulnerable query
SELECT * FROM users WHERE email = '$email' AND password = '$password';

-- Secure approach using prepared statements
$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ? AND password = ?');
$stmt->execute([$email, $hashedPassword]);</code></pre><h3>Cross-Site Scripting (XSS)</h3><p>XSS attacks inject malicious scripts into web pages viewed by other users. Always sanitise and escape user input before rendering it in the browser.</p><h2>Essential Security Practices</h2><ul><li>Use HTTPS everywhere</li><li>Hash passwords with bcrypt or Argon2</li><li>Implement rate limiting on authentication endpoints</li><li>Keep dependencies updated</li><li>Use environment variables for sensitive configuration</li><li>Implement proper input validation</li></ul><h2>Resources for Further Learning</h2><p>OWASP (Open Web Application Security Project) provides free resources covering the most critical web application security risks. Their Top 10 list is an excellent starting point for any developer serious about security.</p>`,
    category: 'Cybersecurity',
    tags: ['Security', 'Web Security', 'OWASP', 'Best Practices'],
    author: authors[1],
    publishedAt: '2024-11-10',
    readTime: 10,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Cybersecurity concept with digital lock',
    featured: true,
    trending: true,
    type: 'article',
    views: 3801
  },
  {
    id: 'art3',
    slug: 'python-data-science-beginners',
    title: 'Python for Data Science: Your First Steps into AI and Analytics',
    excerpt: 'Python has become the dominant language for data science and machine learning. This guide introduces the tools and concepts you need to start your data science journey.',
    content: `<h2>Why Python for Data Science?</h2><p>Python's straightforward syntax, extensive library ecosystem, and strong community support have made it the language of choice for data scientists worldwide. Libraries like NumPy, Pandas, and scikit-learn provide powerful tools for data analysis and machine learning.</p><h2>Setting Up Your Data Science Environment</h2><pre><code># Install Anaconda for a complete data science environment
# Or install individual packages with pip:
pip install numpy pandas matplotlib scikit-learn jupyter</code></pre><h2>Loading and Exploring Data with Pandas</h2><pre><code>import pandas as pd

# Load a CSV file
df = pd.read_csv('students.csv')

# Explore the data
print(df.head())         # First 5 rows
print(df.describe())     # Statistical summary
print(df.info())         # Data types and null values</code></pre><h2>Visualising Data with Matplotlib</h2><pre><code>import matplotlib.pyplot as plt

# Create a simple bar chart
categories = ['Python', 'JavaScript', 'PHP', 'Java']
counts = [45, 38, 22, 18]

plt.bar(categories, counts, color='teal')
plt.title('Programming Languages Used by Rwandan Developers')
plt.xlabel('Language')
plt.ylabel('Number of Developers')
plt.show()</code></pre><h2>Your First Machine Learning Model</h2><p>Machine learning allows computers to learn patterns from data and make predictions. Let's build a simple classifier.</p><pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
print(f'Accuracy: {accuracy_score(y_test, predictions):.2%}')</code></pre>`,
    category: 'Programming',
    subcategory: 'Python',
    tags: ['Python', 'Data Science', 'Machine Learning', 'AI'],
    author: authors[2],
    publishedAt: '2024-11-08',
    readTime: 12,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Python code and data visualization',
    trending: true,
    type: 'guide',
    views: 2950
  },
  {
    id: 'art4',
    slug: 'kigali-tech-ecosystem-2024',
    title: 'Inside Kigali\'s Growing Tech Ecosystem: Opportunities for Developers',
    excerpt: "Rwanda's capital city has established itself as one of Africa's most promising technology hubs. We explore the opportunities available for developers, entrepreneurs, and tech professionals.",
    content: `<h2>Rwanda's Digital Transformation Journey</h2><p>Rwanda's remarkable economic recovery and forward-thinking government policies have created a fertile environment for technology businesses. The country's commitment to becoming a knowledge-based economy — articulated in Vision 2050 — has attracted significant investment in digital infrastructure and skills development.</p><h2>Key Technology Sectors</h2><h3>Fintech and Mobile Money</h3><p>Mobile money adoption in Rwanda is among the highest in Africa, creating a vibrant fintech sector. MTN MoMo and Airtel Money have transformed financial inclusion, and a growing number of fintech startups are building services on top of these platforms.</p><h3>EdTech</h3><p>The COVID-19 pandemic accelerated digital education adoption in Rwanda. Several EdTech companies now serve Rwandan students, and international platforms have expanded their presence in the country.</p><h3>HealthTech</h3><p>Rwanda's universal healthcare ambitions have driven investment in health technology. Drone delivery services, electronic health records, and telemedicine platforms are reshaping healthcare delivery.</p><h2>Key Organisations and Resources</h2><ul><li><strong>Rwanda ICT Chamber</strong>: The primary ICT industry body connecting technology businesses and professionals</li><li><strong>Kigali Innovation City</strong>: A special economic zone designed to attract technology companies and talent</li><li><strong>Carnegie Mellon University Africa</strong>: Providing graduate-level engineering education in Kigali</li><li><strong>African Institute for Mathematical Sciences (AIMS)</strong>: Nurturing mathematical and computational talent</li></ul><h2>How to Get Involved</h2><p>Joining developer communities is one of the most effective ways to build your career in Kigali's tech scene. Look for local meetups, hackathons, and coding communities where you can network, collaborate, and learn from experienced practitioners.</p>`,
    category: 'Rwanda Tech',
    tags: ['Rwanda', 'Kigali', 'Tech Ecosystem', 'Startups', 'Career'],
    author: authors[0],
    publishedAt: '2024-11-05',
    readTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Kigali city skyline at dusk',
    featured: true,
    editorsPick: true,
    type: 'article',
    views: 5120
  },
  {
    id: 'art5',
    slug: 'building-rest-apis-nodejs',
    title: 'Building Production-Ready REST APIs with Node.js and Express',
    excerpt: 'Learn how to design, build, and secure REST APIs using Node.js and Express. Covers routing, middleware, authentication, validation, and deployment best practices.',
    content: `<h2>What is a REST API?</h2><p>REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API uses HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources.</p><h2>Project Setup</h2><pre><code>mkdir api-project && cd api-project
npm init -y
npm install express cors helmet dotenv express-validator bcryptjs jsonwebtoken
npm install -D nodemon</code></pre><h2>Creating Your First Express Server</h2><pre><code>const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json({ limit: '10mb' }));

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));</code></pre><h2>Implementing Authentication</h2><pre><code>const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Hash password on registration
const hashedPassword = await bcrypt.hash(plainPassword, 12);

// Verify on login
const isValid = await bcrypt.compare(plainPassword, hashedPassword);

// Generate JWT
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);</code></pre><h2>Input Validation</h2><pre><code>const { body, validationResult } = require('express-validator');

const validateRegistration = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).matches(/^(?=.*[A-Z])(?=.*[0-9])/),
  body('name').trim().isLength({ min: 2, max: 100 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];</code></pre>`,
    category: 'Web Development',
    subcategory: 'Node.js',
    tags: ['Node.js', 'Express', 'REST API', 'Backend', 'JavaScript'],
    author: authors[0],
    publishedAt: '2024-10-28',
    readTime: 15,
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Node.js server code',
    type: 'guide',
    views: 2340
  },
  {
    id: 'art6',
    slug: 'mobile-app-development-react-native',
    title: 'Cross-Platform Mobile Development with React Native',
    excerpt: 'React Native allows you to build native mobile apps for both iOS and Android using JavaScript. This guide covers setup, core concepts, and building your first app.',
    content: `<h2>Why React Native?</h2><p>React Native bridges the gap between web and mobile development. If you already know React, you can leverage that knowledge to build genuine native mobile apps for both iOS and Android from a single codebase.</p><h2>Installation and Setup</h2><pre><code># Install React Native CLI
npm install -g @react-native-community/cli

# Create a new project
npx react-native@latest init MyMobileApp
cd MyMobileApp

# Run on Android
npx react-native run-android

# Run on iOS (Mac only)
npx react-native run-ios</code></pre><h2>Core Components</h2><pre><code>import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileCard({ name, role }) {
  return (
    &lt;View style={styles.card}&gt;
      &lt;Text style={styles.name}&gt;{name}&lt;/Text&gt;
      &lt;Text style={styles.role}&gt;{role}&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: '600', color: '#0F172A' },
  role: { fontSize: 14, color: '#64748B', marginTop: 4 },
});</code></pre>`,
    category: 'Mobile',
    tags: ['React Native', 'Mobile', 'iOS', 'Android', 'JavaScript'],
    author: authors[3],
    publishedAt: '2024-10-20',
    readTime: 11,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Mobile app development on a smartphone',
    type: 'guide',
    views: 1870
  },
  {
    id: 'art7',
    slug: 'introduction-to-databases-mysql',
    title: 'Introduction to Databases and MySQL for Beginners',
    excerpt: 'Databases are the backbone of virtually every application. Learn the fundamentals of relational databases and how to use MySQL to store, query, and manage data effectively.',
    content: `<h2>What is a Database?</h2><p>A database is an organised collection of structured data stored and accessed electronically. Most web applications rely on databases to persist user data, content, transactions, and configuration.</p><h2>Relational Databases</h2><p>Relational databases store data in tables with rows and columns. Tables are connected through relationships defined by keys. MySQL, PostgreSQL, and SQLite are popular relational database systems.</p><h2>MySQL Fundamentals</h2><pre><code>-- Create a database
CREATE DATABASE techlearn_db;
USE techlearn_db;

-- Create a table
CREATE TABLE articles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(300) NOT NULL,
  content TEXT,
  author_id INT NOT NULL,
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  views INT DEFAULT 0,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

-- Create an index for better performance
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published ON articles(published_at);</code></pre><h2>Basic SQL Queries</h2><pre><code>-- Select data
SELECT id, title, published_at FROM articles WHERE category = 'Technology' ORDER BY published_at DESC LIMIT 10;

-- Insert data
INSERT INTO articles (title, content, author_id) VALUES ('My First Article', 'Content here...', 1);

-- Update data
UPDATE articles SET views = views + 1 WHERE id = 42;

-- Delete data (use with caution!)
DELETE FROM articles WHERE id = 42;</code></pre>`,
    category: 'Databases',
    subcategory: 'MySQL',
    tags: ['MySQL', 'SQL', 'Databases', 'Backend'],
    author: authors[2],
    publishedAt: '2024-10-15',
    readTime: 9,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Database schema diagram',
    type: 'tutorial',
    views: 1650
  },
  {
    id: 'art8',
    slug: 'ai-machine-learning-africa',
    title: 'How Artificial Intelligence is Transforming Africa\'s Development Landscape',
    excerpt: 'AI applications are solving uniquely African challenges — from diagnosing diseases in remote clinics to optimising agricultural yields. We look at the most impactful AI initiatives across the continent.',
    content: `<h2>AI on the African Continent</h2><p>Artificial intelligence is no longer a distant concept for Africa — it is actively being deployed to solve some of the continent's most pressing challenges. From Lagos to Nairobi to Kigali, AI startups and research institutions are building solutions tailored to African contexts.</p><h2>Healthcare Applications</h2><p>Machine learning models are being deployed to assist in diagnosing diseases like malaria, tuberculosis, and diabetic retinopathy in regions with limited specialist doctors. These tools are not replacing healthcare workers — they are extending their reach.</p><h2>Agricultural Innovation</h2><p>Precision agriculture platforms use satellite imagery and machine learning to help smallholder farmers optimise planting, identify crop diseases early, and predict yields. These tools are increasingly accessible through smartphone apps, even in areas with intermittent connectivity.</p><h2>Natural Language Processing for African Languages</h2><p>One of the most exciting areas of AI research in Africa is natural language processing for local languages. Projects like Masakhane are building NLP datasets and models for dozens of African languages that have historically been underrepresented in AI research.</p><h2>Opportunities for Rwandan Developers</h2><p>Rwanda's structured approach to AI governance, its investment in digital infrastructure, and the growing community of developers and researchers create a unique opportunity. The Rwanda Artificial Intelligence Policy, adopted in 2024, signals the government's commitment to positioning Rwanda as an AI leader on the continent.</p>`,
    category: 'AI & Technology',
    tags: ['AI', 'Machine Learning', 'Africa', 'Innovation', 'Rwanda'],
    author: authors[2],
    publishedAt: '2024-11-01',
    readTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'AI neural network visualization',
    trending: true,
    editorsPick: true,
    type: 'article',
    views: 3490
  },
  {
    id: 'art9',
    slug: 'git-github-beginners-guide',
    title: 'Git and GitHub: The Developer\'s Essential Collaboration Toolkit',
    excerpt: 'Version control is a fundamental skill for every developer. Learn how Git tracks changes to your code and how GitHub enables collaboration with teams around the world.',
    content: `<h2>What is Version Control?</h2><p>Version control is a system that records changes to files over time, allowing you to recall specific versions later. Git is the most widely used version control system, and GitHub is the most popular platform for hosting Git repositories.</p><h2>Setting Up Git</h2><pre><code># Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Initialise a new repository
git init my-project
cd my-project</code></pre><h2>The Basic Git Workflow</h2><pre><code># Check the status of your files
git status

# Stage changes
git add .          # Stage all changes
git add index.html # Stage a specific file

# Commit your changes
git commit -m "Add homepage layout"

# View commit history
git log --oneline</code></pre><h2>Working with Branches</h2><pre><code># Create and switch to a new branch
git checkout -b feature/user-authentication

# Make changes, then commit
git add .
git commit -m "Add login form component"

# Merge back to main
git checkout main
git merge feature/user-authentication</code></pre><h2>Collaborating on GitHub</h2><p>GitHub extends Git's version control with collaboration features. Fork a repository to create your own copy, make changes, and submit a pull request to propose your changes to the original project.</p>`,
    category: 'Programming',
    subcategory: 'Git',
    tags: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    author: authors[0],
    publishedAt: '2024-10-10',
    readTime: 10,
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'GitHub repository on a laptop screen',
    type: 'guide',
    views: 2100
  }
];

// Tutorials
export const tutorials: Tutorial[] = [
  {
    id: 'tut1',
    slug: 'build-todo-app-react',
    title: 'Build a Full-Stack Todo Application with React and Node.js',
    description: 'In this step-by-step tutorial, you will build a complete todo application with user authentication, a React frontend, a Node.js API backend, and a MySQL database.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    estimatedTime: '4 hours',
    prerequisites: ['Basic HTML and CSS', 'JavaScript fundamentals', 'Understanding of React basics', 'Node.js installed on your machine'],
    objectives: [
      'Set up a Node.js Express API with authentication',
      'Design a MySQL database schema for tasks',
      'Build a React frontend with React Router',
      'Implement CRUD operations',
      'Deploy the application'
    ],
    author: authors[0],
    publishedAt: '2024-11-12',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Todo app interface on a laptop',
    tags: ['React', 'Node.js', 'MySQL', 'Full Stack'],
    sections: [
      {
        id: 's1',
        title: 'Setting Up the Project',
        content: 'We will start by creating the project structure and installing dependencies for both the frontend and backend.',
        codeExample: `mkdir todo-app && cd todo-app
mkdir frontend backend
cd backend && npm init -y
npm install express cors helmet dotenv bcryptjs jsonwebtoken mysql2`,
        language: 'bash'
      },
      {
        id: 's2',
        title: 'Designing the Database',
        content: 'Our application needs tables for users and tasks. We will create a MySQL schema with proper relationships and indexes.',
        codeExample: `CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(300) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`,
        language: 'sql'
      }
    ],
    views: 1840,
    relatedTutorials: ['tut2', 'tut3']
  },
  {
    id: 'tut2',
    slug: 'css-flexbox-grid-mastery',
    title: 'CSS Flexbox and Grid: Master Modern Web Layouts',
    description: 'A comprehensive tutorial on CSS Flexbox and CSS Grid — the two modern layout systems that have transformed how we build responsive web interfaces.',
    category: 'Web Development',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
    prerequisites: ['Basic HTML knowledge', 'Understanding of CSS selectors and properties'],
    objectives: [
      'Understand the Flexbox model and all its properties',
      'Build complex layouts with CSS Grid',
      'Create responsive designs without media queries',
      'Know when to use Flexbox vs Grid'
    ],
    author: authors[3],
    publishedAt: '2024-10-25',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'CSS grid layout diagram',
    tags: ['CSS', 'Flexbox', 'Grid', 'Layout', 'Responsive'],
    sections: [
      {
        id: 's1',
        title: 'Introduction to Flexbox',
        content: 'Flexbox is a one-dimensional layout method for arranging items in rows or columns.',
        codeExample: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}`,
        language: 'css'
      }
    ],
    views: 2310,
    relatedTutorials: ['tut1']
  },
  {
    id: 'tut3',
    slug: 'python-web-scraping',
    title: 'Web Scraping with Python: BeautifulSoup and Requests',
    description: 'Learn how to extract data from websites using Python. This tutorial covers HTTP requests, HTML parsing, handling JavaScript-rendered pages, and ethical scraping practices.',
    category: 'Programming',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
    prerequisites: ['Python basics', 'Understanding of HTML structure'],
    objectives: [
      'Make HTTP requests with the Requests library',
      'Parse HTML with BeautifulSoup',
      'Handle pagination and dynamic content',
      'Store scraped data in CSV and JSON',
      'Respect robots.txt and rate limits'
    ],
    author: authors[2],
    publishedAt: '2024-10-18',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Python code on a dark screen',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data Collection'],
    sections: [
      {
        id: 's1',
        title: 'Installing the Required Libraries',
        content: 'We need two main libraries: Requests for making HTTP calls and BeautifulSoup for parsing HTML.',
        codeExample: `pip install requests beautifulsoup4 lxml`,
        language: 'bash'
      }
    ],
    views: 1560,
    relatedTutorials: ['tut2']
  }
];

// Projects
export const projects: Project[] = [
  {
    id: 'proj1',
    slug: 'rwandan-job-board',
    title: 'Rwanda Tech Jobs Board',
    description: 'A dedicated job board platform connecting Rwandan tech talent with local and remote technology opportunities. Built with React, Node.js, and MySQL.',
    problem: 'Rwandan tech professionals struggled to find technology-specific job listings in one centralised location, often relying on general job boards that mix tech roles with unrelated positions.',
    solution: 'A technology-focused job board that categorises roles by skill (frontend, backend, data, design) and supports both local and remote positions. Employers can post listings; candidates can apply directly through the platform.',
    features: ['Advanced role filtering', 'Remote work indicators', 'Salary transparency', 'Application tracking', 'Email notifications for new matches', 'Mobile-responsive design'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    screenshotUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format',
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    author: authors[0],
    publishedAt: '2024-10-30',
    category: 'Web Application',
    tags: ['Job Board', 'Rwanda', 'React', 'Node.js']
  },
  {
    id: 'proj2',
    slug: 'student-grade-tracker',
    title: 'Student Grade and Progress Tracker',
    description: 'A web application helping university students in Rwanda track their grades, calculate GPA, and visualise academic progress across semesters.',
    problem: "Students at Rwandan universities often track grades manually using spreadsheets or paper notebooks, making it difficult to understand cumulative GPA and academic standing.",
    solution: 'An intuitive web app where students input module grades, and the system automatically calculates semester and cumulative GPA, displays progress charts, and sends alerts for at-risk modules.',
    features: ['GPA calculator with Rwandan grading system', 'Semester comparison charts', 'Credit-hour weighting', 'Export to PDF', 'Offline support', 'Dark mode'],
    technologies: ['React', 'IndexedDB', 'Chart.js', 'Service Worker', 'Tailwind CSS'],
    screenshotUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&auto=format',
    author: authors[3],
    publishedAt: '2024-09-15',
    category: 'Education Technology',
    tags: ['EdTech', 'Student', 'GPA', 'React']
  }
];

// Resources
export const resources: Resource[] = [
  {
    id: 'res1',
    slug: 'javascript-cheat-sheet',
    title: 'JavaScript ES2024 Quick Reference',
    description: 'A comprehensive cheat sheet covering modern JavaScript syntax, array methods, async/await patterns, destructuring, and the most useful ES2024 features. Perfect for developers moving from older JavaScript or coming from other languages.',
    type: 'cheat-sheet',
    category: 'Programming',
    tags: ['JavaScript', 'ES2024', 'Reference'],
    author: authors[0],
    publishedAt: '2024-11-01',
    imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&auto=format'
  },
  {
    id: 'res2',
    slug: 'web-developer-roadmap-2024',
    title: 'Web Developer Learning Roadmap 2024',
    description: 'A structured learning roadmap for aspiring web developers in Rwanda. Covers frontend, backend, and full-stack paths with recommended resources, estimated timeframes, and skill checkpoints.',
    type: 'roadmap',
    category: 'Career',
    tags: ['Roadmap', 'Web Development', 'Career', 'Learning Path'],
    author: authors[0],
    publishedAt: '2024-10-15',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&auto=format'
  },
  {
    id: 'res3',
    slug: 'sql-reference-guide',
    title: 'SQL Complete Reference Guide',
    description: 'Every SQL command you need, with examples. Covers SELECT, JOIN types, window functions, stored procedures, indexes, and optimisation tips. Includes MySQL and PostgreSQL variations.',
    type: 'reference',
    category: 'Databases',
    tags: ['SQL', 'MySQL', 'PostgreSQL', 'Reference'],
    author: authors[2],
    publishedAt: '2024-09-20',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop&auto=format'
  },
  {
    id: 'res4',
    slug: 'cybersecurity-study-guide',
    title: 'Cybersecurity Fundamentals Study Guide',
    description: 'Study notes and reference material covering network security, common attack types, encryption fundamentals, and security certifications. Ideal for IT students and professionals preparing for CompTIA Security+ or CEH.',
    type: 'guide',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'CompTIA', 'Network Security', 'Study'],
    author: authors[1],
    publishedAt: '2024-09-10',
    imageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&h=250&fit=crop&auto=format'
  }
];

// Careers
export const careers: Career[] = [
  {
    id: 'car1',
    title: 'How to Build a Software Developer Portfolio That Gets You Hired',
    type: 'guide',
    description: 'A practical guide to creating a portfolio that stands out to hiring managers. Covers project selection, presentation, GitHub profile optimisation, and the types of work that demonstrate real competence.',
    publishedAt: '2024-11-01',
    category: 'Career Development',
    featured: true
  },
  {
    id: 'car2',
    title: 'Technical Interview Preparation: Algorithms and Data Structures',
    type: 'guide',
    description: 'Comprehensive preparation guide for technical coding interviews. Covers common data structures (arrays, linked lists, trees, graphs, hash maps), algorithm patterns, time complexity analysis, and practice strategies.',
    publishedAt: '2024-10-20',
    category: 'Interview Preparation',
    featured: true
  },
  {
    id: 'car3',
    title: 'Career Paths in Technology: Which Role is Right for You?',
    type: 'roadmap',
    description: 'An exploration of technology career paths — from frontend and backend development to data science, cybersecurity, DevOps, and product management. Includes skill requirements, salary expectations, and growth trajectories.',
    publishedAt: '2024-10-05',
    category: 'Career Development'
  },
  {
    id: 'car4',
    title: 'Writing a CV for Technology Roles in Africa',
    type: 'guide',
    description: 'Tailored advice for crafting a compelling technology CV in the African job market. Covers structure, highlighting open-source contributions, remote work readiness, and common mistakes to avoid.',
    publishedAt: '2024-09-18',
    category: 'CV & Resume'
  },
  {
    id: 'car5',
    title: 'Finding Remote Tech Jobs as an African Developer',
    type: 'guide',
    description: 'A practical guide to finding and securing remote technology positions with international companies. Covers platforms, payment options, timezone management, and building a remote-friendly reputation.',
    publishedAt: '2024-09-05',
    category: 'Remote Work'
  }
];

// Media items
export const mediaItems: MediaItem[] = [
  {
    id: 'med1',
    slug: 'intro-to-web-development-video',
    title: 'Introduction to Web Development: HTML, CSS, and JavaScript',
    description: 'A beginner-friendly video walkthrough covering the three pillars of web development. Learn how HTML provides structure, CSS adds style, and JavaScript creates interactivity.',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=338&fit=crop&auto=format',
    duration: '45 min',
    author: authors[0],
    publishedAt: '2024-11-08',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'Beginner']
  },
  {
    id: 'med2',
    slug: 'kigali-devfest-highlights',
    title: 'KigaliDevFest 2024: Highlights and Key Moments',
    description: 'A photo gallery from KigaliDevFest 2024, capturing the energy of Rwanda\'s largest developer conference. Features keynotes, workshops, networking sessions, and the award ceremony.',
    type: 'gallery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=338&fit=crop&auto=format',
    author: authors[0],
    publishedAt: '2024-10-30',
    category: 'Events',
    tags: ['Events', 'Conference', 'Rwanda', 'Developers']
  },
  {
    id: 'med3',
    slug: 'tech-africa-podcast-ep12',
    title: 'TechLearn Podcast Ep. 12: Breaking into Tech Without a Degree',
    description: 'In this episode, we speak with three Rwandan developers who built successful technology careers through self-learning, bootcamps, and open-source contribution — without a traditional computer science degree.',
    type: 'podcast',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=338&fit=crop&auto=format',
    duration: '58 min',
    author: authors[0],
    publishedAt: '2024-10-22',
    category: 'Career',
    tags: ['Podcast', 'Career', 'Self-taught', 'Rwanda'],
    transcript: 'Host: Welcome to the TechLearn Rwanda podcast. Today we have three incredible guests who have each built remarkable technology careers through non-traditional paths...'
  }
];

export const categories = [
  { id: 'cat1', name: 'Technology', slug: 'technology', description: 'News, analysis, and insights from the technology world', count: 24 },
  { id: 'cat2', name: 'Programming', slug: 'programming', description: 'Programming languages, techniques, and best practices', count: 31 },
  { id: 'cat3', name: 'Web Development', slug: 'web-development', description: 'Frontend, backend, and full-stack web development', count: 28 },
  { id: 'cat4', name: 'AI & Technology', slug: 'ai', description: 'Artificial intelligence, machine learning, and data science', count: 16 },
  { id: 'cat5', name: 'Cybersecurity', slug: 'cybersecurity', description: 'Security, privacy, and digital safety', count: 14 },
  { id: 'cat6', name: 'Mobile', slug: 'mobile', description: 'iOS, Android, and cross-platform mobile development', count: 12 },
  { id: 'cat7', name: 'Databases', slug: 'databases', description: 'SQL, NoSQL, and database design', count: 10 },
  { id: 'cat8', name: 'Rwanda Tech', slug: 'rwanda-tech', description: 'Technology news and stories from Rwanda and East Africa', count: 18 },
];

export function getArticlesByCategory(cat: string) {
  return articles.filter(a => a.category.toLowerCase().replace(/[^a-z]/g, '-') === cat.toLowerCase() || a.category === cat);
}

export function getFeaturedArticles() {
  return articles.filter(a => a.featured);
}

export function getTrendingArticles() {
  return articles.filter(a => a.trending);
}

export function getEditorsPicks() {
  return articles.filter(a => a.editorsPick);
}

export function searchContent(query: string) {
  const q = query.toLowerCase();
  const articleResults = articles.filter(a =>
    a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))
  ).map(a => ({ ...a, resultType: 'article' as const }));

  const tutorialResults = tutorials.filter(t =>
    t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
  ).map(t => ({ ...t, resultType: 'tutorial' as const }));

  const projectResults = projects.filter(p =>
    p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  ).map(p => ({ ...p, resultType: 'project' as const }));

  return [...articleResults, ...tutorialResults, ...projectResults];
}
