import {
  ContactInformationType,
  SocialLinksType,
  BankAddressType,
  NavLinksType,
} from "./types/NavFooterTypes";
import { ProjectsType, CountriesListType } from "./types/ProjectTypes";
import {
  CoreTeamListType,
  FounderType,
  PillarsListType,
  AboutFullContentType,
} from "./types/AboutTypes";

// Mock Data for Dynamic Site
export const NavLinks: NavLinksType = [];

export const AboutFull: AboutFullContentType = {
  img: "images/jagathistreatch.jpg",
  descs: [
    {
      name: "Our Vision",
      desc: "Transform the lives of the deprived/most deserved poor comunitites by providing quality education, health, hygine and gender equality.",
    },
    {
      name: "Founding Story",
      desc: "Jagathi foundation was formed to enforce the four pillars for a good society. Their work throught COVID-19 has been life changing for many.",
    },
    {
      name: "What We Do",
      desc: "Impart quality education to those who need it, upscale and empower women, adress the health needs of all and create enviromental awarness.",
    },
  ],
};

export const PillarsList: PillarsListType = [
  "Education",
  "Enviroment",
  "Health & Welfare",
];

export const Founder: FounderType = {
  img: "images/durgapfp.jpg",
  name: "Durga Kaylani",
  desc: "Durga Kalyani is the founder and the current head of the Jagathi Foundation. She is exteremely dedicated towards the foundations and has spend countless hours working toward it’s mission. She hopes to impact her comunnity in a positive way.",
};

export const CoreTeamContent: CoreTeamListType = [
  {
    name: "Aditya Mamillapali",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Ajith Moni",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Francis Reddy",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Prabhu Kumar",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Sri Burugula",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    name: "Sujatha Gangiredla",
    img: "images/baseperson.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

export const CountriesContent: CountriesListType = ["India", "US"];

export const ProjectsContent: ProjectsType = [
  {
    name: "Hygine Distribution",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Health & Welfare"],
    countries: ["India"],
  },
  {
    name: "Notebook Distr.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Education"],
    countries: ["India"],
  },
  {
    name: "Bag Distribution.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Education"],
    countries: ["India"],
  },
  {
    name: "Health Checkup.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Health & Welfare"],
    countries: ["India"],
  },
  {
    name: "Baking Classes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Enviroment"],
    countries: ["India"],
  },
  {
    name: "COVID Awareness",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Health & Welfare"],
    countries: ["India"],
  },
  {
    name: "Serve with Heart",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Health & Welfare"],
    countries: ["India"],
  },
  {
    name: "Green Diwali",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Enviroment"],
    countries: ["India"],
  },
  {
    name: "Children’s Day",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "images/baseproject.png",
    pillars: ["Education"],
    countries: ["India"],
  },
];

export const SocialLinksContent: SocialLinksType = {
  twitter: "",
  instagram: "",
  facebook: "",
  youtube: "",
};

export const ContactInfoContent: ContactInformationType = {
  email: "jagathifoundation@gmail.com",
  location: "Hyderbad, India",
};

export const DonateLink: BankAddressType = "bankaddress.jagathifoundation.org";
