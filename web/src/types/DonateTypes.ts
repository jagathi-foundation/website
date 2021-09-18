export interface DonateInformationType {
  accountname: string;
  accountnumber: string;
  accountifsc: string;
  accountlocation: string;
  donateredirecturl: string;
  whydonate: string;
  donateimg: any;
}

export interface Sponsor {
  name: string;
  image: any;
}

export type SponsorsType = Array<Sponsor>;
