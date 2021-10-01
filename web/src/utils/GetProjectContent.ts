import axios from "axios";
import {
  NavLinksURL,
  FooterURL,
} from "../constants/Endpoints";

export default async function getProjectContent() {
  const requestURLS = [
    NavLinksURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, footerReq] =
    await Promise.all(requests);

  const data = [
    navReq.data,
    footerReq.data,
  ];

  return data;
}


