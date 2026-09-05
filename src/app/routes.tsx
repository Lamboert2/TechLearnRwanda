import { createBrowserRouter, Outlet } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ArticlePage from '../pages/ArticlePage';
import CategoryPage from '../pages/CategoryPage';
import { TutorialList, TutorialDetail } from '../pages/TutorialsPage';
import { ToolsIndex, ToolDetail } from '../pages/ToolsPage';
import SearchPage from '../pages/SearchPage';
import SignInPage from '../pages/SignInPage';
import JoinTeamPage from '../pages/JoinTeamPage';
import {
  TechnologyPage, ProgrammingPage, WebDevPage, AIPage, CybersecurityPage,
  MobilePage, DatabasesPage, RwandaTechPage, StudentHubPage, CareersPage,
  ProjectsPage, ResourcesPage, MediaPage
} from '../pages/ContentPages';
import {
  AboutPage, ContactPage, AdvertisePage, PrivacyPolicy, TermsPage,
  CookiePolicy, DisclaimerPage, EditorialPolicy, CorrectionsPolicy
} from '../pages/StaticPages';
import {
  AdminLayout, DashboardHome, ArticlesAdmin, TeamApplications, SiteSettings, GenericAdminSection
} from '../pages/admin/AdminDashboard';
import ContributorDashboard from '../pages/contributor/ContributorDashboard';

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      { index: true, Component: Home },
      { path: 'technology', Component: TechnologyPage },
      { path: 'programming', Component: ProgrammingPage },
      { path: 'web-development', Component: WebDevPage },
      { path: 'ai', Component: AIPage },
      { path: 'cybersecurity', Component: CybersecurityPage },
      { path: 'mobile', Component: MobilePage },
      { path: 'databases', Component: DatabasesPage },
      { path: 'rwanda-tech', Component: RwandaTechPage },
      { path: 'student-hub', Component: StudentHubPage },
      { path: 'student-hub/:section', Component: StudentHubPage },
      { path: 'careers', Component: CareersPage },
      { path: 'careers/:id', Component: CareersPage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'projects/:slug', Component: ProjectsPage },
      { path: 'resources', Component: ResourcesPage },
      { path: 'resources/:slug', Component: ResourcesPage },
      { path: 'media', Component: MediaPage },
      { path: 'media/videos', Component: MediaPage },
      { path: 'media/photos', Component: MediaPage },
      { path: 'media/audio', Component: MediaPage },
      { path: 'media/:slug', Component: MediaPage },
      { path: 'tutorials', Component: TutorialList },
      { path: 'tutorial/:slug', Component: TutorialDetail },
      { path: 'article/:slug', Component: ArticlePage },
      { path: 'category/:category', Component: CategoryPage },
      { path: 'author/:slug', Component: CategoryPage },
      { path: 'tools', Component: ToolsIndex },
      { path: 'tools/:toolSlug', Component: ToolDetail },
      { path: 'search', Component: SearchPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'advertise', Component: AdvertisePage },
      { path: 'join-our-team', Component: JoinTeamPage },
      { path: 'privacy-policy', Component: PrivacyPolicy },
      { path: 'terms', Component: TermsPage },
      { path: 'cookie-policy', Component: CookiePolicy },
      { path: 'disclaimer', Component: DisclaimerPage },
      { path: 'editorial-policy', Component: EditorialPolicy },
      { path: 'corrections-policy', Component: CorrectionsPolicy },
      { path: 'sign-in', Component: SignInPage },
      { path: '*', Component: NotFound },
    ]
  },
  // Admin (no public layout)
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardHome },
      { path: 'articles', Component: ArticlesAdmin },
      { path: 'articles/new', Component: ArticlesAdmin },
      { path: 'tutorials', Component: function AdminTutorials() { return <GenericAdminSection title="Tutorials" />; } },
      { path: 'projects', Component: function AdminProjects() { return <GenericAdminSection title="Projects" />; } },
      { path: 'resources', Component: function AdminResources() { return <GenericAdminSection title="Resources" />; } },
      { path: 'media', Component: function AdminMedia() { return <GenericAdminSection title="Media Library" />; } },
      { path: 'applications', Component: TeamApplications },
      { path: 'comments', Component: function AdminComments() { return <GenericAdminSection title="Comments" />; } },
      { path: 'messages', Component: function AdminMessages() { return <GenericAdminSection title="Contact Messages" />; } },
      { path: 'newsletter', Component: function AdminNewsletter() { return <GenericAdminSection title="Newsletter" />; } },
      { path: 'careers', Component: function AdminCareers() { return <GenericAdminSection title="Careers" />; } },
      { path: 'users', Component: function AdminUsers() { return <GenericAdminSection title="Users & Roles" />; } },
      { path: 'seo', Component: function AdminSEO() { return <GenericAdminSection title="SEO" />; } },
      { path: 'settings', Component: SiteSettings },
    ]
  },
  // Contributor portal (no public layout)
  {
    path: '/contributor',
    Component: ContributorDashboard,
  }
]);
