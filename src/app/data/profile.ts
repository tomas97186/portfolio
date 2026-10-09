export interface Job {
  role: string;
  from: string;
  to: string;
  company: string;
  place: string;
  text: string;
  tags: string[];
}

export interface Cert {
  name: string;
  issuer: string;
  date: string;
}

export const PROFILE = {
  name: "Tommaso Cirillo",
  role: "Full Stack Developer",
  location: "Salerno, Italy",
  email: "tommaso.cirillo98@gmail.com",
  linkedin: "https://it.linkedin.com/in/tommaso-cirillo-b496b91b7",
  website: "https://tommaso.cirillo.work",
  github: "https://github.com/tomas97186",
  credly: "",// "https://www.credly.com/users/tommaso-cirillo",
  intro:
    "I build web applications end to end, from microservice architecture to UI.\n" +
    "5+ years across Java/Angular, Salesforce and AWS, now leading a full stack team.",
};

export const ABOUT = [
  `I started out on Salesforce and AWS, where I quickly ended up owning cloud integrations on my own,
   from the first analysis with the client to the final delivery.`,
  `Then I moved to full stack work: helping define the architecture of new systems, picking the stack,
   designing the UI in Figma and writing both the Spring backend and the Angular frontend.`,
  `Today I lead a small full stack team. I still write a lot of code, but I also spend time on technical
   decisions, code reviews and helping newer developers grow.`,
];

export const JOBS: Job[] = [
  {
    role: "Full Stack Developer · Team Leader",
    from: "Sep 2023",
    to: "Present",
    company: "IBM Client Innovation Center",
    place: "Naples",
    text: "Leading a full stack team of three developers on a Java/Angular web platform. I own the architectural and tooling decisions, with a focus on maintainability and long-term scalability, review code and set the development standards for the team. I mentor junior developers through onboarding and day-to-day growth, and act as the technical reference for stakeholders, turning business needs into concrete solutions.",
    tags: [
      "Leadership",
      "Mentoring",
      "Architecture",
      "Spring",
      "Angular",
      "OpenShift",
      "Oracle SQL",
      "Figma",
    ],
  },
  {
    role: "Full Stack Developer",
    from: "Jan 2023",
    to: "Sep 2023",
    company: "IBM Client Innovation Center",
    place: "Naples",
    text:
      "Owned the re-engineering of a legacy monolith into a modern microservices web application. " +
      "Took part in requirements gathering and architecture design, chose the stack from database to frontend, " +
      "designed the whole UI/UX in Figma and built the services with Spring and the client with Angular, deployed on OpenShift.",
    tags: ["Java", "Spring", "Angular", "OpenShift", "Oracle SQL", "Figma"],
  },
  {
    role: "Salesforce / AWS Developer",
    from: "Apr 2022",
    to: "Jan 2023",
    company: "IBM Client Innovation Center",
    place: "Naples",
    text:
      "Designed and delivered on my own a cloud contact center integrated with Salesforce: Amazon Connect for call flows, " +
      "Lambda for the backend logic and Lex bots for conversational automation. " +
      "Worked directly with the client from day one and became the reference for both technical and functional topics.",
    tags: ["Amazon Connect", "AWS Lambda", "Amazon Lex", "Salesforce"],
  },
  {
    role: "Junior Salesforce Developer",
    from: "Sep 2021",
    to: "Jun 2022",
    company: "IBM Client Innovation Center",
    place: "Naples",
    text:
      "Worked on a large data migration from a legacy relational database to Salesforce (extraction, mapping, transformation) " +
      "and on new Service Cloud features, including a loyalty program for customer engagement and rewards.",
    tags: ["Apex", "Service Cloud", "SQL", "Data migration"],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML / CSS", "Figma"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring", "Microservices", "REST API", "Python", "C", "SQL"],
  },
  { group: "Cloud", items: ["OpenShift", "Docker / Kubernetes", "AWS"] },
  {
    group: "Practices",
    items: [
      "Agile",
      "Git",
      "Code review",
      "Architecture design",
      "Requirements analysis",
    ],
  },
];

export const CERTS: Cert[] = [
  {
    name: "Red Hat Certified Technologist in OpenShift (EX180)",
    issuer: "Red Hat",
    date: "2025",
  },
  {
    name: "Junior Angular Developer",
    issuer: "certificates.dev",
    date: "2024",
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
  },
  { name: "Java SE 8 Programmer I", issuer: "Oracle", date: "2023" },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  { name: "Platform Developer I", issuer: "Salesforce", date: "2022" },
];

export const EDUCATION = [
  {
    title: "MSc Computer Engineering — Artificial Intelligence",
    school: "University of Salerno",
    years: "2019 – 2021",
    note: "110 cum laude · Thesis: Age estimation with Vision Transformers",
  },
  {
    title: "BSc Computer Engineering",
    school: "University of Salerno",
    years: "2016 – 2019",
    note: "110/110 · Thesis: Analysis and comparison of people counting software",
  },
];

export const LANGUAGES = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "C1" },
];

// Riga in fondo al CV (solo /cv, non compare sul sito). Stringa vuota per toglierla.
export const CV_NOTE =
  "I authorize the processing of my personal data in accordance with the EU Regulation 2016/679 (GDPR) and Italian Legislative Decree 196/2003.";
