import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const DATA = {
  name: "Kevin Selm",
  initials: "KS",
  url: "https://kcselm.com",
  location: "Portland, OR",
  locationLink: "https://www.google.com/maps/place/portland",
  description:
    "Full Stack Web Developer who loves learning and building things ",
  summary:
    "I'm a Full Stack Developer who loves turning ideas into interesting software solutions. I'm all about lifelong learning and keeping up with new tech. Outside of work I still like diving into personal projects to keep my skills sharp and my curiosity happy. I love networking and meeting new people, so lets [connect](/#contact) and chat soon!",
  avatarUrl: "me.png",
  skills: [
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C#",
    "Java",
    "SQL",
    "Postgres",
    "Docker",
    "Azure",
    "git",
  ],
  simple_icon_slugs: [
    "TypeScript",
    "JavaScript",
    "java",
    "react",
    "redux",
    "html5",
    "css3",
    "tailwindcss",
    "nodedotjs",
    "prisma",
    "drizzle",
    "express",
    "nextdotjs",
    "csharp",
    "microsoftazure",
    "powerbi",
    "python",
    "django",
    "mysql",
    "postgresql",
    "trpc",
    "vercel",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "mongodb",
    "visualstudiocode",
    "webpack",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kcselm93@gmail.com",
    tel: "8122128015",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/kselm-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/kselm-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:kcselm93@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  showcaseImages: [
    { imageUrl: "/showcase/dog.png", altText: "Me and my dog hamocking" },
    {
      imageUrl: "/showcase/discgolf.png",
      altText: "Playing disc golf",
    },
    {
      imageUrl: "/showcase/me-cascades.jpg",
      altText: "At North Cascades National Park",
    },
    {
      imageUrl: "/showcase/rock-climbing.png",
      altText: "Bouldering gym",
    },
    {
      imageUrl: "/showcase/wife.png",
      altText: "Engagement photo with my wife",
    },
    { imageUrl: "/showcase/coffee.jpg", altText: "coffee shop" },
    {
      imageUrl: "/showcase/ultimate.jpg",
      altText: "Playing club ultimate frisbee",
    },
  ],

  work: [
    {
      company: "Tyler Technologies",
      href: "https://www.tylertech.com/",
      location: "Remote",
      title: "Frontend Software Developer",
      logoUrl: "/tyler-technologies.svg",
      start: "May 2024",
      end: "October 2024",
      description:
        "Developed WCAG-compliant web pages and custom reusable components for clients servicing millions of users, significantly enhancing inclusivity and usability.",
      skills: ["TypeScript", "HTML", "CSS", "Sharepoint"],
    },
    {
      company: "Leidos",
      href: "https://www.leidos.com/",
      location: "Remote",
      title: "Frontend Software Developer",
      logoUrl: "/leidos.svg",
      start: "June 2023",
      end: "December 2023",
      description:
        "Led frontend development for a web application that provided admins and team leads with a customizable dashboard to visualize team data and metrics.",
      skills: ["React", "TypeScript", "C#", "HTML", "CSS", "MySQL"],
    },
    {
      company: "Sur-Seal",
      href: "https://www.sur-seal.com/",
      location: "Remote",
      title: "Fullstack Software Developer",
      logoUrl: "/sur-seal.svg",
      start: "February 2021",
      end: "June 2023",
      description:
        "Fullstack developer responsible for maintaining and enhancing in-house sales and product application, creating data visualizations and analytical tools, and automating reporting processes.",
      skills: ["C#", "React", "Next.js", "TypeScript", "JavaScript", "Python", "SQL", "PowerBI", "MySQL"],
    },
    {
      company: "TDS Telecom",
      href: "https://www.tdstelecom.com/",
      location: "Remote",
      title: "Software Engineer 1",
      logoUrl: "/tds.png",
      start: "January 2019",
      end: "February 2021",
      description:
        "Backend network application developer working on provisioning software and network inventory management applications.",
      skills: ["Python", "Java", "SQL", "Bash scripting", "Perl", "Oracle"],
    },
    {
      company: "TDS Telecom ",
      href: "https://www.tdstelecom.com/",
      location: "Remote",
      title: "Business Risk Intelligence Intern",
      logoUrl: "/tds.png",
      start: "April 2018",
      end: "January 2019",
      description:
        "Worked with senior developers and accountants on data analysis and frontend web development projects.",
      skills: ["React", "Angular", "JavaScript", "Python", "MongoDB"],
    },
  ],
  education: [
    {
      school: "Madison Area Technical College",
      href: "https://madisoncollege.edu/",
      degree: "Associate's Degree Web Software Development",
      logoUrl: "/matc-dark.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Coffee Note",
      href: "https://coffee-note-eta.vercel.app/",
      description:
        "Keep track of all of your favorite coffees with this web app",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "tRPC",
        "TailwindCSS",
        "Shadcn UI",
      ],
      image: "/coffeeNote.png",
      video: "",
      links: [
        {
          type: "Website",
          href: "https://coffee-note-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kcselm/coffee-note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      className: "",
    },
  ],
}
