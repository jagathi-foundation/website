import axios from "axios";
import {
  AboutFullURL,
  NavLinksURL,
  FooterURL,
  PillarsURL,
} from "../constants/Endpoints";

export default async function getAboutContent() {
  const requestURLS = [NavLinksURL, AboutFullURL, PillarsURL, FooterURL];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, aboutFullReq, pillarsReq, footerReq] = await Promise.all(
    requests
  );

  const data = [
    navReq.data,
    aboutFullReq.data,
    pillarsReq.data,
    footerReq.data,
  ];

  return data;
}
