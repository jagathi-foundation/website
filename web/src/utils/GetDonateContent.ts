import axios from "axios";
import {
  NavLinksURL,
  FooterURL,
  DonateInformationURL,
  SponsorsURL,
} from "../constants/Endpoints";

export default async function getDonateContent() {
  const requestURLS = [
    NavLinksURL,
    DonateInformationURL,
    SponsorsURL,
    FooterURL,
  ];

  const requests = requestURLS.map((url) => axios.get(url));

  const [navReq, donateReq, sponsorsReq, footerReq] = await Promise.all(requests);

  const data = [navReq.data, donateReq.data, sponsorsReq.data, footerReq.data];

  return data;
}
