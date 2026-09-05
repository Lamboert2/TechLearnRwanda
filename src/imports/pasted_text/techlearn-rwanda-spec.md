BUILD A COMPLETE PRODUCTION-READY WEBSITE
=========================================

PROJECT NAME:
TECHLEARN RWANDA

TAGLINE:
Technology • Knowledge • Skills • Opportunities

IMPORTANT:
Build this as a completely NEW website from scratch.

Do not create a portfolio.
Do not create a simple blog.
Do not create a landing page.
Do not create a visual-only prototype.
Do not create a collection of disconnected demo pages.

I want a complete, large-scale technology, education, media, resources,
tools and career platform.

The website must feel like a real operating digital publication and
technology platform.

The public website must provide substantial useful content and media
and must remain useful even when advertisements are disabled.

Google AdSense approval is NOT guaranteed. Do not attempt to manipulate
Google or create the website solely to bypass AdSense policies.
Build a legitimate publisher website with useful original content,
clear navigation, strong UX and appropriate advertising architecture.

==================================================
1. CORE CONCEPT
==================================================

TECHLEARN RWANDA is a technology and digital knowledge platform for:

- Students
- Developers
- IT professionals
- Beginners
- Entrepreneurs
- Technology enthusiasts
- Digital professionals
- People learning programming
- People looking for technology careers

The platform combines:

- Technology publication
- Educational website
- Programming tutorial platform
- Digital resource center
- Student hub
- Technology media platform
- Developer resource center
- Practical online tools
- Career platform
- Project showcase
- Contributor platform
- Professional CMS

==================================================
2. PUBLIC ACCESS
==================================================

NORMAL VISITORS MUST NOT BE REQUIRED TO LOG IN.

Visitors should immediately be able to:

- Read articles
- Read tutorials
- Watch videos
- Browse photos
- Listen to audio
- Use tools
- View projects
- Browse resources
- Browse careers
- Search the website
- View categories
- Contact the platform
- Apply to join the team

No account should be required for normal content consumption.

However, provide an OPTIONAL "Sign In" system for:

- Contributors
- Authors
- Editors
- Administrators

Do not force ordinary visitors to create accounts.

==================================================
3. AUTHENTICATION
==================================================

Create a secure authentication system.

Roles:

SUPER_ADMIN
ADMIN
EDITOR
AUTHOR
CONTRIBUTOR

Optional visitor accounts are NOT required.

Authentication is primarily for people managing or contributing to
the platform.

Create:

/sign-in
/admin
/contributor

Protect private routes properly.

Use secure password hashing.

Use secure sessions or JWT with appropriate security practices.

==================================================
4. INITIAL ADMIN ACCOUNT
==================================================

Create the initial administrator using environment variables:

INITIAL_ADMIN_EMAIL=lambert2@gmail.com
INITIAL_ADMIN_PASSWORD=Lambert

IMPORTANT:

Do NOT permanently hard-code these credentials into source code.

The application should use them only during initial administrator setup.

Hash the password before storing it.

After first login, FORCE the administrator to change the initial password.

Never expose passwords in the database, API responses, logs or frontend.

Provide:

.env.example

==================================================
5. MAIN NAVIGATION
==================================================

Create a professional desktop mega-navigation and mobile navigation.

Primary navigation:

HOME
TECHNOLOGY
PROGRAMMING
WEB DEVELOPMENT
AI & TECHNOLOGY
CYBERSECURITY
MOBILE
DATABASES
TUTORIALS
STUDENT HUB
CAREERS
RWANDA TECH
PROJECTS
RESOURCES
TOOLS
MEDIA

Additional navigation:

ABOUT
JOIN OUR TEAM
CONTACT
ADVERTISE
SIGN IN

Every navigation item MUST lead to a meaningful working page.

Never use:

href="#"

fake buttons

dead links

"coming soon"

placeholder destinations

==================================================
6. HOMEPAGE
==================================================

Create a rich editorial homepage.

Sections should include:

- Header
- Main navigation
- Search
- Featured story
- Latest technology articles
- Trending articles
- Programming tutorials
- Web development
- AI & technology
- Cybersecurity
- Rwanda Tech
- Student Hub
- Career opportunities
- Featured projects
- Technology videos
- Photo galleries
- Podcasts/audio
- Useful tools
- Developer resources
- Editor's picks
- Most-read content
- Newsletter
- Join Our Team
- About the platform
- Footer

The homepage should visually communicate immediately:

WHAT THE PLATFORM IS
WHO IT SERVES
WHAT USERS CAN LEARN
WHAT USERS CAN DO
WHAT RESOURCES ARE AVAILABLE

Content must be the main focus.

==================================================
7. TECHNOLOGY PUBLICATION
==================================================

Create a complete publishing system supporting:

NEWS
ARTICLES
ANALYSIS
OPINION
HOW-TO
GUIDES
TUTORIALS
INTERVIEWS
CASE STUDIES
PROJECTS
REVIEWS
CAREER GUIDES
RESOURCE ARTICLES

Categories:

Technology
Programming
Web Development
Mobile Development
AI
Cybersecurity
Databases
Software Engineering
Cloud
Networking
Developer Tools
Digital Business
Rwanda Tech

==================================================
8. PROGRAMMING CONTENT
==================================================

Create major programming sections for:

PHP
JavaScript
TypeScript
Python
React
Node.js
Express
HTML
CSS
MySQL
SQL
Git
GitHub
REST APIs
Software Engineering
Data Structures
Algorithms

Every category must contain:

- Category introduction
- Articles
- Tutorials
- Projects
- Resources
- Related content

Do not expose empty categories.

==================================================
9. TUTORIAL PLATFORM
==================================================

Create a full tutorial system.

Each tutorial supports:

- Title
- Description
- Featured image
- Author
- Difficulty
- Estimated time
- Prerequisites
- Learning objectives
- Table of contents
- Step-by-step lessons
- Code examples
- Images
- Diagrams
- Videos
- Expected results
- Common errors
- Best practices
- Conclusion
- Related tutorials

Tutorials must be genuinely educational.

Visitors do not need accounts.

==================================================
10. STUDENT HUB
==================================================

Create a large Student Hub.

Sections:

- Study Guides
- Programming Notes
- IT Notes
- Exam Preparation
- Project Ideas
- Final-Year Projects
- Documentation Guides
- Learning Roadmaps
- Internship Preparation
- Career Guidance
- Scholarship Resources
- Developer Resources
- Technical Interview Preparation

Every section must contain meaningful information.

==================================================
11. TECHNOLOGY TOOLS
==================================================

Create a dedicated Tools platform.

Tools must actually work.

Include:

- GPA Calculator
- Percentage Calculator
- Age Calculator
- Discount Calculator
- Loan Calculator
- Simple Interest Calculator
- Compound Interest Calculator
- Scientific Calculator
- Unit Converter
- Temperature Converter
- Length Converter
- Weight Converter
- Data Storage Converter
- Time Converter
- Unix Timestamp Converter
- Binary Converter
- Number Base Converter
- JSON Formatter
- JSON Validator
- Base64 Encoder
- Base64 Decoder
- URL Encoder
- URL Decoder
- HTML Entity Encoder
- Color Converter
- HEX/RGB Converter
- Word Counter
- Character Counter
- Case Converter
- Text Cleaner
- Password Strength Checker
- Random Password Generator
- QR Code Generator

Each tool page must contain:

- Tool
- Explanation
- How it works
- Instructions
- Examples
- Common mistakes
- Related resources
- Related articles

Do not create calculator-only pages with no useful explanatory content.

==================================================
12. MEDIA PLATFORM
==================================================

I specifically want the website to be MEDIA-RICH.

Create a complete Media Center.

Main media sections:

/media
/media/videos
/media/photos
/media/audio

Support:

IMAGES
VIDEOS
AUDIO
PHOTO GALLERIES
INFOGRAPHICS
DOCUMENTS
THUMBNAILS
PODCASTS

Media must support:

- title
- description
- caption
- alt text
- author
- category
- tags
- date
- source
- copyright/usage information
- thumbnail


==================================================
14. PHOTO GALLERIES
==================================================

Create:

/media/photos

Support:

- Albums
- Galleries
- Individual photos
- Captions
- Descriptions
- Categories
- Tags

Gallery pages must contain useful editorial context.

==================================================
15. AUDIO / PODCAST SYSTEM
==================================================

Create:

/media/audio

Support:

- Podcasts
- Interviews
- Educational audio
- Technology discussions

Each episode supports:

- Audio
- Cover image
- Title
- Description
- Transcript
- Host/author
- Category
- Date
- Related content

==================================================
16. PROJECTS
==================================================

Create a project showcase:

/projects

Each project supports:

- Project title
- Description
- Problem
- Solution
- Features
- Technologies
- Screenshots
- Architecture
- Documentation
- Demo URL
- Source-code URL
- Author
- Related tutorials

==================================================
17. RESOURCES
==================================================

Create:

/resources

Resource types:

- Cheat sheets
- Study guides
- Templates
- Programming references
- Documentation
- PDFs
- Code examples
- Learning roadmaps
- Downloadable educational materials

Every resource should have a meaningful description.

==================================================
18. CAREERS
==================================================

Create:

/careers

Sections:

- Technology Jobs
- Internships
- Career Guides
- CV/Resume Guides
- Interview Preparation
- Portfolio Guidance
- Skills Roadmaps
- Career Paths

Allow administrators to publish legitimate opportunities.

Never fabricate job vacancies.

==================================================
19. JOIN OUR TEAM
==================================================

Create a prominent:

JOIN OUR TEAM

page.

URL:

/join-our-team

Explain that the platform accepts contributors.

Roles:

- Technology Writer
- Developer
- Editor
- Researcher
- Photographer
- Videographer
- Graphic Designer
- Community Contributor
- Social Media Contributor

Create application form:

Full Name
Email
Phone
Role
Experience
Portfolio URL
Why do you want to join?
CV Upload
Additional Information

Applicants do NOT need an account.

Applications must appear in:

ADMIN → TEAM APPLICATIONS

Admin can:

- View
- Filter
- Contact
- Approve
- Reject
- Archive
- Invite accepted applicants

==================================================
20. CONTRIBUTOR PORTAL
==================================================

Accepted contributors can receive accounts.

Contributor dashboard:

- My Articles
- Create Draft
- Upload Media
- Submit Article
- Editorial Feedback
- Submission Status
- Profile

Workflow:

DRAFT
SUBMITTED
UNDER REVIEW
REVISION REQUIRED
APPROVED
PUBLISHED
REJECTED

Contributors cannot publish directly unless explicitly granted
permission by an administrator.

==================================================
21. AUTHORS
==================================================

Create an author system.

Author profile contains:

- Name
- Photo
- Biography
- Expertise
- Articles
- Tutorials
- Projects
- Social links

Do not create fake experts or fake biographies.

==================================================
22. ADMIN CMS
==================================================

Create a complete professional CMS.

Admin sections:

Dashboard
Articles
Tutorials
News
Categories
Tags
Authors
Contributors
Team Applications
Projects
Resources
Videos
Audio
Photo Galleries
Media Library
Tools
Careers
Comments
Contact Messages
Newsletter
SEO
Advertisements
Users
Roles
Site Settings
Legal Pages

The administrator must be able to manage the entire public platform.

==================================================
23. CONTENT EDITOR
==================================================

Create a professional rich-text editor.

Support:

- Headings
- Paragraphs
- Bold
- Italic
- Links
- Images
- Captions
- Galleries
- Videos
- Audio
- Tables
- Quotes
- Lists
- Code blocks
- Syntax highlighting
- Callouts
- Internal links
- External references

Include:

Save Draft
Preview
Submit
Request Revision
Approve
Publish
Unpublish
Archive

==================================================
24. CONTENT QUALITY CONTROL
==================================================

Before publishing, show an editorial checklist:

Original content
Human reviewed
Useful to readers
Correct title
Good introduction
Proper headings
Author assigned
Category assigned
Featured image
Alt text
Sources where necessary
Internal links
Related content
SEO title
SEO description
Canonical URL
No broken links
No placeholder content
No copied content
No misleading claims

Do not automatically publish AI-generated content.

AI may assist drafting, but content must be reviewed before publication.

==================================================
25. INITIAL CONTENT
==================================================

The website must NOT launch as an empty shell.

Create a substantial starter content structure covering all major sections.

Include meaningful starter content for:

- Technology
- Programming
- Web Development
- AI
- Cybersecurity
- Databases
- Tutorials
- Student Hub
- Careers
- Rwanda Tech
- Projects
- Resources
- Tools
- Media

Prioritize quality over artificial page count.

Do not create:

- fake news
- fake statistics
- fake authors
- fake reviews
- fake comments
- fake testimonials
- fake views
- fake likes
- fake users
- fake job vacancies

Do not scrape or copy other websites.

==================================================
26. RWANDA TECH
==================================================

Create a dedicated:

/rwanda-tech

section covering:

- Technology in Rwanda
- ICT
- Digital skills
- Software development
- Innovation
- Startups
- Technology education
- Developer ecosystem
- Digital business
- Technology events
- Student opportunities

Do not fabricate facts or statistics.

==================================================
27. SEARCH
==================================================

Create global search.

Search across:

Articles
Tutorials
Videos
Audio
Projects
Resources
Tools
Careers
Categories

Search results should display:

- Thumbnail
- Title
- Type
- Category
- Excerpt
- Date

Search must work without login.

==================================================
28. COMMENTS
==================================================

Create optional comments.

Visitors can comment without registering.

Fields:

Name
Email
Comment

Email must remain private.

All comments begin as:

PENDING MODERATION

Admin can:

Approve
Reject
Delete
Mark Spam
Flag

Implement:

- Rate limiting
- Validation
- Sanitization
- Spam protection

==================================================
29. CONTACT
==================================================

Create:

/contact

Contact categories:

General
Editorial
Technical
Partnership
Advertising
Join Our Team

Messages appear in the Admin Dashboard.

==================================================
30. NEWSLETTER
==================================================

Create optional newsletter subscription.

Only collect:

Email

Provide:

- Subscribe
- Unsubscribe

Do not spam users.

==================================================
31. ADVERTISE PAGE
==================================================

Create:

/advertise

Explain advertising and partnership opportunities.

Include:

- Advertising opportunities
- Sponsorship
- Partnerships
- Contact form

Do not make fake claims about audience size, traffic or reach.

==================================================
32. ADSENSE-READY AD SYSTEM
==================================================

Create a centralized advertisement architecture.

IMPORTANT:

Ads are DISABLED by default.

Configuration:

ADS_ENABLED=false

Create reusable components:

AdSlot
TopAd
SidebarAd
InContentAd
ArticleAd
ArticleBottomAd

Do not insert a fake Google publisher ID.

Create:

ADSENSE_PUBLISHER_ID

Use it only when a legitimate publisher ID is configured.

Create /ads.txt support without fabricating publisher information.

==================================================
33. AD PLACEMENT RULES
==================================================

Ads must never appear on:

- Admin pages
- Sign-in pages
- Private contributor pages
- Error pages
- Empty pages
- Empty categories
- Empty author pages
- Search-only pages
- Navigation-only pages
- Thank-you pages
- Pages without meaningful publisher content

Ads must never:

- Cover content
- Cover buttons
- Interfere with navigation
- Encourage accidental clicks
- Mislead users
- Become more prominent than publisher content

Publisher content must always be the primary focus.

==================================================
34. SEO
==================================================

Implement professional technical SEO.

Each indexable content page should support:

- Unique title
- Meta description
- Canonical URL
- Open Graph
- Twitter metadata
- Structured data
- Breadcrumbs

Structured data where appropriate:

Article
NewsArticle
VideoObject
BreadcrumbList
Organization
WebSite
HowTo

Generate:

/sitemap.xml
/robots.txt

Do not index:

Admin pages
Private contributor pages
Sign-in
Empty categories
Empty author pages
Empty search pages
Error pages
Internal API routes

==================================================
35. INTERNAL LINKING
==================================================

Create intelligent related-content systems.

Show:

Related Articles
Related Tutorials
Related Videos
Related Projects
Related Tools
Related Resources

Links must be genuinely relevant.

Do not create random links just to increase page count.

==================================================
36. BREADCRUMBS
==================================================

Implement breadcrumbs on all major content pages.

Example:

Home
→ Programming
→ PHP
→ PHP Sessions Explained

Every breadcrumb should link to a meaningful destination.

==================================================
37. MEDIA LIBRARY
==================================================

Create a professional admin Media Library.

Features:

Upload
Search
Filter
Edit
Delete
Preview
Assign to content
Add alt text
Add caption
Add source
Add copyright information
Track media usage

Support:

JPG
PNG
WEBP
SVG where safe
MP4
MP3
PDF
and other appropriate formats.

Implement upload validation and file-size limits.

Never allow executable uploads.

==================================================
38. PERFORMANCE
==================================================

Optimize the website for:

- Mobile
- Desktop
- Fast loading
- Core Web Vitals
- Lazy-loaded images
- Responsive images
- Caching
- Code splitting
- Optimized assets
- Efficient API requests

Do not overload pages with unnecessary animations.

==================================================
39. ACCESSIBILITY
==================================================

Implement:

- Semantic HTML
- Keyboard navigation
- Proper labels
- Alt text
- Focus states
- Accessible forms
- Appropriate ARIA
- Good contrast
- Responsive typography

==================================================
40. SECURITY
==================================================

Implement:

- Secure authentication
- bcrypt password hashing
- Role-based authorization
- Helmet
- CORS
- Rate limiting
- Input validation
- Sanitization
- XSS protection
- SQL injection prevention
- Secure file uploads
- File-type validation
- File-size limits
- Secure cookies/session handling where applicable
- Environment variables

Never expose:

Passwords
Database credentials
JWT secrets
API keys

==================================================
41. DATABASE
==================================================

Use a properly designed relational database.

Recommended tables:

users
roles
permissions
authors
contributors
articles
article_categories
categories
tags
article_tags
tutorials
tutorial_sections
projects
resources
videos
audio
galleries
gallery_images
media
tools
tool_categories
careers
team_applications
comments
contact_messages
newsletter_subscribers
site_settings
seo_settings
advertisement_settings
article_views

Use:

- Primary keys
- Foreign keys
- Indexes
- Unique constraints
- Timestamps
- Proper relationships

==================================================
42. TECHNOLOGY STACK
==================================================

Use a production-quality modern stack.

Frontend:

Next.js or React
TypeScript
Tailwind CSS
Responsive design

Backend/API:

Next.js server/API architecture or Node.js backend

Database:

MySQL

ORM:

Prisma or another reliable ORM

Authentication:

Secure session-based authentication or Auth.js/NextAuth where appropriate

Storage:

Architecture should support reliable media storage.

The application must be structured so it can be deployed in production.

==================================================
43. SITE SETTINGS
==================================================

Admin can configure:

Site Name
Tagline
Logo
Favicon
Publisher Name
Contact Email
Location
Social Links
SEO Defaults
Analytics
Search Console Verification
AdSense Publisher ID
Advertisements Enabled/Disabled
Newsletter
Footer Content

Do not fabricate verification IDs.

==================================================
44. LEGAL AND TRUST PAGES
==================================================

Create complete pages:

/about
/contact
/privacy-policy
/terms
/cookie-policy
/disclaimer
/editorial-policy
/corrections-policy
/advertise

Make legitimate publisher/contact information configurable.

Do not fabricate company registration information.

==================================================
45. ABOUT PAGE
==================================================

The About page should explain:

- What TechLearn Rwanda is
- Mission
- Vision
- Audience
- Content categories
- Editorial philosophy
- Team
- Contribution opportunities
- Contact information

==================================================
46. EDITORIAL POLICY
==================================================

Explain:

- How content is produced
- Research
- Fact checking
- Human review
- AI-assisted drafting policy
- Sources
- Corrections
- Originality
- Plagiarism policy

==================================================
47. CORRECTIONS POLICY
==================================================

Create a system explaining how readers can report factual errors.

Provide an easy correction-contact method.

==================================================
48. NO DEAD-END PAGES
==================================================

THIS IS CRITICAL.

Every public navigation item must lead to a real page.

Every "Read More" button must lead to the corresponding content.

Every "Watch" button must lead to a real video.

Every "View Gallery" button must lead to a real gallery.

Every "Explore" button must lead somewhere meaningful.

Every "Learn More" button must lead to relevant information.

Every tool must work.

Every form must submit correctly.

Never use fake buttons.

Never use "#" as a destination.

Never create placeholder links.

==================================================
49. NO EMPTY PRODUCTION CONTENT
==================================================

The production interface must not display:

Lorem ipsum
Sample article
Demo article
Coming soon
Under construction
Test content
Placeholder images
Fake testimonials
Fake statistics
Fake reviews

If content does not exist, the system should use a proper empty state
or hide that section.

==================================================
50. ADMIN ANALYTICS
==================================================

Create a dashboard showing legitimate metrics when analytics are
configured.

Examples:

Article views
Popular articles
Tool usage
Media views
Traffic summaries

Do not fabricate numbers.

==================================================
51. CONTENT DISCOVERY
==================================================

Implement:

Trending
Most Read
Editor's Picks
Latest
Related
Recommended

These should be based on real content/activity or editor selection.

Do not fabricate popularity.

==================================================
52. NEWSLETTER SECTION
==================================================

Include newsletter CTAs naturally throughout the website.

Do not make newsletter registration mandatory.

==================================================
53. MOBILE EXPERIENCE
==================================================

Mobile design is extremely important.

Create:

- Mobile header
- Mobile menu
- Mobile search
- Responsive article layouts
- Responsive media
- Responsive tools
- Responsive dashboard
- Touch-friendly buttons

==================================================
54. DESIGN DIRECTION
==================================================

Visual style:

Premium
Modern
Editorial
Professional
Technology-focused
Clean
Trustworthy
Media-rich

Use:

- Strong typography
- High-quality cards
- Good spacing
- Large editorial imagery
- Clear content hierarchy
- Professional navigation
- Attractive article pages
- Rich media sections
- Consistent design system

Avoid:

- Generic AI-generated landing page appearance
- Excessive gradients
- Excessive animations
- Clutter
- Advertisement-heavy layouts
- Empty whitespace without purpose

==================================================
55. CONTENT-FIRST DESIGN
==================================================

The visual hierarchy must always prioritize:

1. Site identity
2. Navigation
3. Publisher content
4. Useful tools/resources
5. Media
6. Community/career features
7. Advertising

Advertisements must never become the main reason the page exists.

==================================================
56. FILE STRUCTURE
==================================================

Before implementation, create a complete logical project structure.

Organize:

app/pages
components
layouts
features
lib
database
api
auth
admin
content
media
tools
seo
hooks
utils
types
styles
public
uploads/storage configuration
documentation

The project must be maintainable and scalable.

==================================================
57. ERROR HANDLING
==================================================

Create:

404
403
500
Network Error
Loading States
Empty States

Do not display advertisements on error pages.

==================================================
58. ADMIN PERMISSIONS
==================================================

SUPER_ADMIN:
Everything

ADMIN:
Manage website content, users, media and settings

EDITOR:
Review and publish content

AUTHOR:
Create and edit own content

CONTRIBUTOR:
Create drafts and submit content

Enforce permissions at the backend, not just in the frontend.

==================================================
59. RESPONSIVE ADMIN DASHBOARD
==================================================

Admin dashboard must work on:

Desktop
Laptop
Tablet
Mobile

==================================================
60. FINAL QUALITY AUDIT
==================================================

Before declaring the website complete, perform a complete audit.

Test:

Every page
Every route
Every navigation item
Every button
Every form
Every calculator
Every tool
Every article
Every tutorial
Every media page
Every gallery
Every video
Every audio page
Every search function
Every login function
Every admin permission
Every contributor workflow
Every team application
Every database relationship

Also check:

SEO
Accessibility
Security
Mobile responsiveness
Desktop responsiveness
Performance
Broken links
Missing images
Missing alt text
Empty pages
Placeholder content
Advertisement rules
Sitemap
Robots.txt
Legal pages

==================================================
61. IMPORTANT GOOGLE/ADSENSE PRINCIPLE
==================================================

Do not design this website to manipulate Google's review system.

Do not create:

- Fake traffic
- Fake engagement
- Scraped content
- Keyword stuffing
- Cloaking
- Hidden content
- Misleading navigation
- Doorway pages
- Automatically generated low-value pages
- Advertisement-only pages

The platform must provide genuine value.

Advertising must be secondary to publisher content.

Ads are disabled by default.

Google makes the final decision regarding AdSense eligibility.

==================================================
62. FINAL RESULT
==================================================

The finished website must feel like a REAL TECHNOLOGY MEDIA COMPANY,
not a template.

It should combine:

TECHNOLOGY PUBLICATION
+
EDUCATION PLATFORM
+
PROGRAMMING TUTORIALS
+
STUDENT HUB
+
MEDIA CENTER
+
VIDEO PLATFORM
+
PHOTO GALLERIES
+
AUDIO/PODCASTS
+
PROJECT SHOWCASE
+
ONLINE TOOLS
+
CAREER PLATFORM
+
JOIN OUR TEAM
+
CONTRIBUTOR PLATFORM
+
ADMIN CMS
+
SEARCH
+
SEO
+
LEGAL/TRUST SYSTEM
+
ADVERTISING ARCHITECTURE

The public website must be usable without login.

Sign-in should exist for authorized contributors, authors, editors and
administrators.

Every link must be meaningful.

Every tool must work.

Every form must work.

Every major section must contain meaningful content.

The website must be scalable, secure, responsive, media-rich,
content-rich and production-ready.

DO NOT RETURN A SIMPLE DEMO.

BUILD THE COMPLETE SYSTEM. lets use react and mysql and make sure you start from installation and project structure then we go on coding. make it quick coz i want it today