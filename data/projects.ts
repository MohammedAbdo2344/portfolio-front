export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: "Backend" | "Frontend" | "Fullstack";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  problemSolved?: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "todo-list-api",
    title: "To-do List api",
    description: "To-do List application built with laravel",
    fullDescription: "Developed a feature-rich to-do list application with a secure user authentication system using JWT.Implemented user profiles, allowing each user to manage their personalized categories.Each profile contains categories, and within each category, users can create and organize tasks by priority.Focused on intuitive UI/UX design, ensuring ease of use and seamless task management for users.",
    category: "Backend",
    techStack: ["Laravel", "PostgreSQL", "Redis", "JWT"],
    githubUrl: "https://github.com/MohammedAbdo2344/toDoListApi",
    // liveUrl: "https://ecommerce-demo.com",
    featured: true,
    problemSolved: "Built a feature-rich to-do list application with a secure user authentication system using JWT.",
    // architecture: ""
  },
  {
    id: "2",
    slug: "real-time-chat-api",
    title: "Real-time Chat API",
    description: "WebSocket-based real-time chat application with message persistence",
    fullDescription: "A robust real-time chat API supporting multiple chat rooms, user authentication, message history, and file sharing. Built with Node.js and Socket.IO for optimal performance.",
    category: "Backend",
    techStack: ["Node.js", "Socket.IO", "PostgreSQL", "Redis", "JWT"],
    githubUrl: "https://github.com/username/realtime-chat-api",
    featured: true,
    problemSolved: "Created a scalable chat system that handles thousands of concurrent connections with minimal latency.",
    // architecture: "Event-driven architecture with message queues, horizontal scaling, and database sharding."
  },
  {
    id: "3",
    slug: "wow-marketing-agency",
    title: "Wow Marketing Agency",
    description: "Content Management System (CMS) built with Laravel",
    fullDescription: "Developed a comprehensive, bilingual Content Management System (CMS) using Laravel 10 to manage dynamic content such as posts, projects, and services.Implemented a powerful and responsive admin panel with Filament 3, providing an intuitive user experience for content management.Engineered full Right-to-Left (RTL) support for Arabic, ensuring the application is fully localized and accessible for Arabic-speaking users.Built a secure and scalable RESTful API with Laravel Sanctum to deliver content to various clients, with support for language selection via headers.Integrated SEO-friendly features, allowing for the management of meta titles and descriptions to improve search engine visibility.Utilized modern PHP 8.1 features and followed best practices, including the use of Data Transfer Objects (DTOs) for robust and validated data handling.",
    category: "Fullstack",
    techStack: ["Laravel", "Filament 3", "MySQL", "Blade", "Livewire", " Laravel Sanctum"],
    githubUrl: "https://github.com/MohammedAbdo2344/wowMarketingAgency",
    // liveUrl: "https://crm-saas-demo.com",
    featured: true,
    problemSolved: "Built a comprehensive, bilingual CMS using Laravel 10 to manage dynamic content such as posts, projects, and services.",
    // architecture: " "
  },
  {
    id: "4",
    slug: "grand-notion-platform",
    title: "Grand Notion Platform",
    description: "Platform built with Django",
    fullDescription: "Developed and maintained the backend of the Grand Notion web platform using Python and the Django framework.Designed and implemented RESTful APIs to support course listings, student interactions, and other core functionalities.Integrated with the frontend to ensure seamless data flow between client and server.Worked with relational databases to manage course data, user profiles, and other application resources.Ensured backend stability, performance, and security in a production environment.Collaborated with frontend developers and other team members to deliver reliable features and enhancements.",
    category: "Backend",
    techStack: ["Django", "Django REST Framework", "PostgreSQL", "Redis"],
    // githubUrl: "https://github.com/username/django-rest-api",
    liveUrl: "https://www.grandnotioneg.com/en",
    featured: false,
    problemSolved: "Built a performant API that handles 10,000+ requests per minute with proper caching and optimization.",
    // architecture: "Layered architecture with separation of concerns, caching strategies, and async task processing."
  }
];

export const featuredProjects = projects.filter(project => project.featured);
