import { Text } from '../i18n/i18n.service';

// I campi Text possono essere una stringa (uguale in tutte le lingue) o { en, it }

export interface Job {
  role: Text;
  from: string; // "YYYY-MM"
  to: string | null; // null = in corso
  company: string;
  place: Text;
  text: Text;
  tags: Text[];
}

export interface Cert {
  name: string;
  issuer: string;
  date: string;
}

export const PROFILE = {
  name: "Tommaso Cirillo",
  role: "Full Stack Developer",
  location: { en: "Salerno, Italy", it: "Salerno, Italia" },
  email: "tommaso.cirillo98@gmail.com",
  linkedin: "https://it.linkedin.com/in/tommaso-cirillo-b496b91b7",
  website: "https://tommaso.cirillo.work",
  github: "https://github.com/tomas97186",
  credly: "",// "https://www.credly.com/users/tommaso-cirillo",
  intro: {
    en:
      "I build web applications end to end, from microservice architecture to UI.\n" +
      "5+ years across Java/Angular, Salesforce and AWS, now leading a full stack team.",
    it:
      "Sviluppo applicazioni web end to end, dall'architettura a microservizi alla UI.\n" +
      "5+ anni tra Java/Angular, Salesforce e AWS, oggi alla guida di un team full stack.",
  },
};

export const ABOUT: Text[] = [
  {
    en: `I started out on Salesforce and AWS, where I quickly ended up owning cloud integrations on my own,
   from the first analysis with the client to the final delivery.`,
    it: `Ho iniziato con Salesforce e AWS, dove mi sono presto ritrovato a gestire in autonomia le integrazioni cloud,
   dalla prima analisi con il cliente fino alla consegna finale.`,
  },
  {
    en: `Then I moved to full stack work: helping define the architecture of new systems, picking the stack,
   designing the UI in Figma and writing both the Spring backend and the Angular frontend.`,
    it: `Poi sono passato al full stack: ho contribuito a definire l'architettura di nuovi sistemi, scelto lo stack,
   progettato la UI in Figma e sviluppato sia il backend in Spring che il frontend in Angular.`,
  },
  {
    en: `Today I lead a small full stack team. I still write a lot of code, but I also spend time on technical
   decisions, code reviews and helping newer developers grow.`,
    it: `Oggi guido un piccolo team full stack. Scrivo ancora molto codice, ma dedico tempo anche alle scelte
   tecniche, alle code review e alla crescita degli sviluppatori più giovani.`,
  },
];

const NAPLES = { en: "Naples", it: "Napoli" };

export const JOBS: Job[] = [
  {
    role: "Full Stack Developer · Team Leader",
    from: "2023-09",
    to: null,
    company: "IBM Client Innovation Center",
    place: NAPLES,
    text: {
      en: "Leading a full stack team of three developers on a Java/Angular web platform. I own the architectural and tooling decisions, with a focus on maintainability and long-term scalability, review code and set the development standards for the team. I mentor junior developers through onboarding and day-to-day growth, and act as the technical reference for stakeholders, turning business needs into concrete solutions.",
      it: "Guido un team full stack di tre sviluppatori su una piattaforma web Java/Angular. Prendo le decisioni su architettura e strumenti, con attenzione alla manutenibilità e alla scalabilità nel lungo periodo, faccio code review e definisco gli standard di sviluppo del team. Seguo gli sviluppatori junior dall'onboarding alla crescita quotidiana e sono il riferimento tecnico per gli stakeholder, traducendo le esigenze di business in soluzioni concrete.",
    },
    tags: [
      "Leadership",
      "Mentoring",
      { en: "Architecture", it: "Architettura" },
      "Spring",
      "Angular",
      "OpenShift",
      "Oracle SQL",
      "Figma",
    ],
  },
  {
    role: "Full Stack Developer",
    from: "2023-01",
    to: "2023-09",
    company: "IBM Client Innovation Center",
    place: NAPLES,
    text: {
      en:
        "Owned the re-engineering of a legacy monolith into a modern microservices web application. " +
        "Took part in requirements gathering and architecture design, chose the stack from database to frontend, " +
        "designed the whole UI/UX in Figma and built the services with Spring and the client with Angular, deployed on OpenShift.",
      it:
        "Ho guidato la reingegnerizzazione di un monolite legacy in una moderna applicazione web a microservizi. " +
        "Ho partecipato alla raccolta dei requisiti e alla progettazione dell'architettura, scelto lo stack dal database al frontend, " +
        "progettato l'intera UI/UX in Figma e sviluppato i servizi in Spring e il client in Angular, con deploy su OpenShift.",
    },
    tags: ["Java", "Spring", "Angular", "OpenShift", "Oracle SQL", "Figma"],
  },
  {
    role: "Salesforce / AWS Developer",
    from: "2022-04",
    to: "2023-01",
    company: "IBM Client Innovation Center",
    place: NAPLES,
    text: {
      en:
        "Designed and delivered on my own a cloud contact center integrated with Salesforce: Amazon Connect for call flows, " +
        "Lambda for the backend logic and Lex bots for conversational automation. " +
        "Worked directly with the client from day one and became the reference for both technical and functional topics.",
      it:
        "Ho progettato e realizzato in autonomia un contact center cloud integrato con Salesforce: Amazon Connect per i flussi di chiamata, " +
        "Lambda per la logica di backend e bot Lex per l'automazione conversazionale. " +
        "Ho lavorato a stretto contatto con il cliente fin dal primo giorno, diventando il riferimento sia per gli aspetti tecnici che per quelli funzionali.",
    },
    tags: ["Amazon Connect", "AWS Lambda", "Amazon Lex", "Salesforce"],
  },
  {
    role: "Junior Salesforce Developer",
    from: "2021-09",
    to: "2022-06",
    company: "IBM Client Innovation Center",
    place: NAPLES,
    text: {
      en:
        "Worked on a large data migration from a legacy relational database to Salesforce (extraction, mapping, transformation) " +
        "and on new Service Cloud features, including a loyalty program for customer engagement and rewards.",
      it:
        "Ho lavorato a una migrazione dati su larga scala da un database relazionale legacy a Salesforce (estrazione, mapping, trasformazione) " +
        "e a nuove funzionalità di Service Cloud, tra cui un programma fedeltà per il coinvolgimento e la premiazione dei clienti.",
    },
    tags: ["Apex", "Service Cloud", "SQL", { en: "Data migration", it: "Migrazione dati" }],
  },
];

export const SKILLS: { group: Text; items: Text[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML / CSS", "Figma"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring", { en: "Microservices", it: "Microservizi" }, "REST API", "Python", "C", "SQL"],
  },
  { group: "Cloud", items: ["OpenShift", "Docker / Kubernetes", "AWS"] },
  {
    group: { en: "Practices", it: "Metodologie" },
    items: [
      "Agile",
      "Git",
      "Code review",
      { en: "Architecture design", it: "Progettazione architetturale" },
      { en: "Requirements analysis", it: "Analisi dei requisiti" },
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

const UNISA = { en: "University of Salerno", it: "Università degli Studi di Salerno" };

export const EDUCATION: { title: Text; school: Text; years: string; note: Text }[] = [
  {
    title: {
      en: "MSc Computer Engineering — Artificial Intelligence",
      it: "Laurea Magistrale in Ingegneria Informatica — Intelligenza Artificiale",
    },
    school: UNISA,
    years: "2019 – 2021",
    note: {
      en: "110 cum laude · Thesis: Age estimation with Vision Transformers",
      it: "110 e lode · Tesi: Stima dell'età con Vision Transformer",
    },
  },
  {
    title: { en: "BSc Computer Engineering", it: "Laurea Triennale in Ingegneria Informatica" },
    school: UNISA,
    years: "2016 – 2019",
    note: {
      en: "110/110 · Thesis: Analysis and comparison of people counting software",
      it: "110/110 · Tesi: Analisi e confronto di software di people counting",
    },
  },
];

export const LANGUAGES: { name: Text; level: Text }[] = [
  { name: { en: "Italian", it: "Italiano" }, level: { en: "Native", it: "Madrelingua" } },
  { name: { en: "English", it: "Inglese" }, level: "C1" },
];

// Riga in fondo al CV (solo /cv, non compare sul sito). Stringa vuota per toglierla.
export const CV_NOTE: Text = {
  en: "I authorize the processing of my personal data in accordance with the EU Regulation 2016/679 (GDPR) and Italian Legislative Decree 196/2003.",
  it: "Autorizzo il trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003.",
};
