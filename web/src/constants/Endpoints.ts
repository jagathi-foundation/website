import { CMSURL } from "./CMSURL";

//An Enum To Map Names of Schemas to their Rest Enpoints.
enum NameToUrl {
  NavLinks = "navigation-links",
  CarouselItems = "carousel-items",
  AboutBlob = "about-blob",
  Impact = "impact",
  ProjectTopics = "project-topics",
  FooterInfo = "footer-information",
  AboutFull = "about-full",
  Pillars = "pillars",
  Founder = "founder",
  CoreTeam = "core-team-members",
  ProjectCountries = "project-countries",
  Projects = "projects"
}

//Export the rest endpoint for each schema.
export const NavLinksURL = `${CMSURL}${NameToUrl.NavLinks}`;
export const CarouselURL = `${CMSURL}${NameToUrl.CarouselItems}`;
export const AboutBlobURL = `${CMSURL}${NameToUrl.AboutBlob}`;
export const ImpactURL = `${CMSURL}${NameToUrl.Impact}`;
export const ProjectTopicsURL = `${CMSURL}${NameToUrl.ProjectTopics}`;
export const FooterURL = `${CMSURL}${NameToUrl.FooterInfo}`;
export const AboutFullURL = `${CMSURL}${NameToUrl.AboutFull}`;
export const PillarsURL = `${CMSURL}${NameToUrl.Pillars}`;
export const FounderURL = `${CMSURL}${NameToUrl.Founder}`;
export const CoreTeamURL = `${CMSURL}${NameToUrl.CoreTeam}`;
export const ProjectCountriesURL = `${CMSURL}${NameToUrl.ProjectCountries}`
export const ProjectsURL = `${CMSURL}${NameToUrl.Projects}`