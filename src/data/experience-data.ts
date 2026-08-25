export interface ExperienceItem {
  company: string;
  companyShort: string;
  role: string;
  period: string;
  type: 'fulltime' | 'intern';
  descriptions: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'PT Bank Central Asia (BCA)',
    companyShort: 'BCA',
    role: 'IT Specialist',
    period: 'Apr 2026 – Present',
    type: 'fulltime',
    descriptions: [
      'Developing the Expense Management feature on OCEAN by BCA, a B2B non-financial application that helps businesses manage their operational processes.',
      'Maintaining release quality by keeping the bug rate below 10% of total QA test cases, through rigorous development and self-testing before handoff.',
      'Applying React best practices such as code splitting and dynamic imports to keep application performance optimal as feature complexity grows.',
      'Deepening expertise in Microfrontend architecture with Module Federation, including build-time vs runtime integration strategies across modules.',
      'Implemented a prefetching strategy within the module federation setup, reducing feature load time from ~6-10 seconds to under 500ms, significantly improving user experience when accessing new modules.',
      'Actively contributing beyond frontend scope by assisting the team with tracing and debugging via OCP logs — driven by curiosity to understand the system end-to-end, despite being a Frontend Engineer.',
    ],
  },
  {
    company: 'PT Bank Digital BCA (blu by BCA)',
    companyShort: 'blu by BCA',
    role: 'IT Specialist',
    period: 'Jan 2024 – Apr 2026',
    type: 'fulltime',
    descriptions: [
      'Developed core internet banking features — including Payroll Transfer, Single Transfer, and Bulk Transfer modules — for both client-facing and backoffice applications, supporting 1,000+ daily transactions.',
      'Built and maintained B2B banking modules across 2 platforms (client view & backoffice view), collaborating with cross-functional teams to ensure seamless transaction processing.',
      'Improved website performance by +15% across Google Lighthouse metrics (Performance, Accessibility, Best Practices, SEO) through code splitting, dynamic imports, and route-based chunking.',
      'Reduced initial bundle size by ~20%, resulting in faster page load times and improved user experience.',
      'Implemented Role-Based Access Control (RBAC) system supporting many user roles with complex permission matrices across all frontend modules.',
      'Wrote unit, integration, and end-to-end tests, achieving ~70%+ test coverage on critical transfer modules.',
      'Applied SOLID principles, Design System methodology in code reviews, Design Pattern and improving code maintainability across 10+ shared components.',
      'Integrated Sentry for error monitoring across microfrontend modules, cutting average bug resolution time by ~30%.',
    ],
  },
  {
    company: 'PT Bank Central Asia (BCA)',
    companyShort: 'BCA',
    role: 'IT Intern',
    period: 'Aug 2023 – Jan 2024',
    type: 'intern',
    descriptions: [
      'Translated Figma designs into web UI using React JS for 15+ pages/features, maintaining high design fidelity to the original mockups.',
      'Built 10+ reusable UI components using Vite & React JS, accelerating subsequent feature development by ~20%.',
      'Developed custom hooks and lightweight state management solutions, reducing code duplication across 5+ modules and improving component reusability.',
      'Optimized web application performance through lazy loading and image optimization, reducing page load time from ~4s to ~2s.',
      'Implemented responsive design across all developed pages, ensuring consistent UI across 3 breakpoints (mobile, tablet, desktop).',
      'Gained hands-on experience with Microfrontend architecture using Module Federation, contributing to 2+ independently deployable modules.',
      'Explored SQL Server for data querying and debugging, helping identify and resolve 5+ performance-related issues in application-database interactions.',
      'Supported QA processes by creating 30+ test cases and documenting bugs via Jira, helping reduce miscommunication between Dev and QA teams and supporting on-time feature delivery.',
      'Maintained bug tracking and progress sheets that improved team transparency, contributing to a ~15% reduction in unresolved issues before release.',
      'Collaborated with 5+ team members (designers, backend engineers, and QA) in Agile/Scrum ceremonies, including daily standups, sprint planning, and retrospectives.',
      'Practiced Git version control and branching strategies (feature branching, pull requests) across 20+ commits/PRs, ensuring smooth collaboration and minimal merge conflicts.',
      'Debugged and resolved 10+ frontend issues reported during QA and UAT cycles, improving application stability before release.',
      'Participated in code reviews, receiving and applying feedback that improved code quality and helped internalize clean code principles early on.',
      'Assisted in cross-browser and cross-device testing, ensuring consistent functionality across Chrome, Firefox, and Safari.',
      'Documented technical implementation notes and component usage guidelines, making onboarding easier for future team members/interns.',
    ],
  },
];
