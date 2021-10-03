import { CMSURL } from "./CMSURL";

//An Enum To Map Names of Schemas to their Rest Enpoints.
enum NameToUrl {
  NavLinks = "navigation-links",
  CarouselItems = "carousel-items",
  AboutBlob = "about-blob",
  Impact = "impact",
  FooterInfo = "footer-information",
  AboutFull = "about-full",
  Pillars = "pillars",
  CoreTeam = "core-team-members",
  ProjectCountries = "project-countries",
  Projects = "projects",
  Donate = "donate-information",
  Sponsors = "sponsors",
}

//Export the rest endpoint for each schema.
export const NavLinksURL = `${CMSURL}${NameToUrl.NavLinks}`;
export const CarouselURL = `${CMSURL}${NameToUrl.CarouselItems}`;
export const AboutBlobURL = `${CMSURL}${NameToUrl.AboutBlob}`;
export const ImpactURL = `${CMSURL}${NameToUrl.Impact}`;
export const FooterURL = `${CMSURL}${NameToUrl.FooterInfo}`;
export const AboutFullURL = `${CMSURL}${NameToUrl.AboutFull}`;
export const PillarsURL = `${CMSURL}${NameToUrl.Pillars}`;
export const CoreTeamURL = `${CMSURL}${NameToUrl.CoreTeam}`;
export const ProjectCountriesURL = `${CMSURL}${NameToUrl.ProjectCountries}`;
export const ProjectsURL = `${CMSURL}${NameToUrl.Projects}`;
export const DonateInformationURL = `${CMSURL}${NameToUrl.Donate}`;
export const SponsorsURL = `${CMSURL}${NameToUrl.Sponsors}`;
