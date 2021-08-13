import {
  ContactInformationType,
  SocialLinksType,
  BankAddressType,
  NavLinksType,
} from "./types/NavFooterTypes";
import { ProjectsType, CountriesListType } from "./types/ProjectTypes";
import {
  CoreTeamListType,
} from "./types/AboutTypes";

// Mock Data for Dynamic Site
export const NavLinks: NavLinksType = [];

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
