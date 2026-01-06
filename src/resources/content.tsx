import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Uthithmenon",
  lastName: "Ravitharan",
  name: "Uthithmenon Ravitharan",
  role: "Software Engineer",
  avatar: "/IMG_8110.jpeg",
  email: "Uthithmenon@gmail.com",
  location: "America/Toronto", 
  languages: ["English"], 
};


const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Uthith18",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/uthith-ravi/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/uthithravi/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,

  headline: <>Just a guy who likes playing with computers and data.</>,

  featured: {
    display: false,
    title: null,
    href: "",
  },

  subline: (
    <>
      Hey, I’m <strong>Uthith</strong>. I build software, play with data, and
      occasionally pretend I know what I’m doing.
      <br />
      Mostly though, I just enjoy making computers do useful (and sometimes fun)
      things.
    </>
  ),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/uthith-ravi-lyxg31/30min",
  },
intro: {
  display: true,
  title: "Introduction",
  description: (
    <>
      I’m a software engineering graduate from York University with a strong
      interest in backend systems, data, and full-stack development. I enjoy
      building practical software, working with real data, and turning ideas
      into working products.
    </>
  ),
},

work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "International Justice Mission",
      timeframe: "Sept 2024 – Apr 2025",
      role: "Software Developer / Analyst",
      achievements: [
        <>
          Built a Chrome extension to flag fast fashion websites linked to child
          labor, using web scraping and analytics to populate an ethical
          company database.
        </>,
        <>
          Developed interactive dashboards with Python (Pandas, Matplotlib) and
          SQL to help stakeholders identify trends and make faster,
          data-driven decisions.
        </>,
        <>
          Implemented real-time alerts and a user-friendly popup UI using
          JavaScript, HTML, and CSS.
        </>,
      ],
      images: [],
    },
    {
      company: "Apple Canada",
      timeframe: "Apr 2023 – Present",
      role: "Genius",
      achievements: [
        <>
          Delivered efficient and empathetic technical support for Mac and
          iPhone, consistently exceeding service time standards.
        </>,
        <>
          Maintained teammate satisfaction ratings above 85% by clearly
          explaining technical issues and building customer trust.
        </>,
        <>
          Achieved Apple hardware repair certification, demonstrating expertise
          in diagnosing and resolving complex device issues.
        </>,
      ],
      images: [],
    },
    {
      company: "Apple Canada",
      timeframe: "Apr 2022 – Apr 2023",
      role: "Technical Expert",
      achievements: [
        <>
          Diagnosed and resolved complex hardware and software issues on first
          contact using advanced Apple system knowledge.
        </>,
        <>
          Translated technical problems into clear, actionable explanations to
          support informed customer decisions.
        </>,
      ],
      images: [],
    },
  ],
},

studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      name: "Lassonde School of Engineering, York University",
      description: (
        <>
          Bachelor of Engineering (Honours) in Software Engineering · GPA:
          3.4/4.0
        </>
      ),
    },
  ],
},

technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Programming Languages",
      description: (
        <>Strong foundation in backend, scripting, and web development.</>
      ),
      tags: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "SQL", icon: "database" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
      ],
      images: [],
    },
    {
      title: "Frameworks & Tools",
      description: (
        <>
          Experience building full-stack applications, APIs, and data-driven
          systems.
        </>
      ),
      tags: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
      ],
      images: [],
    },
    {
      title: "Data & Analytics",
      description: (
        <>
          Comfortable working with datasets, dashboards, and automation for
          real-world decision making.
        </>
      ),
      tags: [
        { name: "Pandas", icon: "python" },
        { name: "NumPy", icon: "python" },
        { name: "Matplotlib", icon: "chart" },
        { name: "scikit-learn", icon: "ai" },
      ],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const newsletter = false;

export { person, social, home, about, blog, work, gallery };
