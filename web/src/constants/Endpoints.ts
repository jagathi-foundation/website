import { CMSURL } from "./CMSURL";

enum NameToUrl {
  NavLinks = "navigation-links",
  CarouselItems = "carousel-items",
  AboutBlob = "about-blob",
  Impact = "impact",
  ProjectTopics = "project-topics",
  FooterInfo = "footer-information",
  AboutFull = 'about-full',
  Pillars = 'pillars'
}

export const NavLinksURL = `${CMSURL}${NameToUrl.NavLinks}`;
export const CarouselURL = `${CMSURL}${NameToUrl.CarouselItems}`;
export const AboutBlobURL = `${CMSURL}${NameToUrl.AboutBlob}`;
export const ImpactURL = `${CMSURL}${NameToUrl.Impact}`;
export const ProjectTopicsURL = `${CMSURL}${NameToUrl.ProjectTopics}`
export const FooterURL = `${CMSURL}${NameToUrl.FooterInfo}`
export const AboutFullURL = `${CMSURL}${NameToUrl.AboutFull}`;
export const PillarsURL = `${CMSURL}${NameToUrl.Pillars}`

