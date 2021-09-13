import axios from "axios";
import {
  AboutFullURL,
  NavLinksURL,
  FooterURL,
  CoreTeamURL,
} from "../constants/Endpoints";

export default async function getAboutContent() {
  const requestURLS = [NavLinksURL, AboutFullURL, CoreTeamURL, FooterURL];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, aboutFullReq, coreTeamReq, footerReq] = await Promise.all(
    requests
  );

  const data = [
    navReq.data,
    aboutFullReq.data,
    coreTeamReq.data,
    footerReq.data,
  ];

  return data;
}
