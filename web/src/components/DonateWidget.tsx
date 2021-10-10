import React from "react";
import { DonateInformationType, SponsorsType } from "../types/DonateTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  sponsors: SponsorsType;
  donateInformation: DonateInformationType;
}

const DonateWidget: React.FC<Props> = ({ sponsors, donateInformation }) => {
  return (
    <main
      style={{ marginTop: "11rem", marginBottom: "5.2rem" }}
      className="text-center mx-auto"
    >
      <h1 className="text-4xl">Donate</h1>
      <section className="flex justify-center my-10 lg:mx-auto mx-10 lg:w-4/12 lg:flex-row flex-col text-center">
        <img
          src={cmsImg(donateInformation.donateimg)}
          alt="Donate"
          className="shadow rounded border-yellow-500 border-4 object-cover object-center mx-auto mb-10 lg:mb-0"
          style={{ width: "400px" }}
        />
        <div className="lg:mx-5">
          <div className="border-4 border-yellow-500 py-5 lg:px-24 rounded shadow">
            <h3 className="text-3xl">Official Bank Details</h3>
            <p className="mt-4">Name : {donateInformation.accountname}</p>
            <p>Account No : {donateInformation.accountnumber}</p>
            <p>IFSC : {donateInformation.accountifsc}</p>
            <p>{donateInformation.accountlocation}</p>
          </div>
          <div className="border-4 border-yellow-500 py-5 lg:px-24 mt-7 rounded shadow">
            <h3 className="text-3xl">Tax Exemption</h3>
            <p className="mt-4 lg:w-96">
              {donateInformation.donateredirecturl}
            </p>
          </div>
          <div className="border-4 border-yellow-500 py-5 lg:px-24 px-10 mt-7 rounded shadow">
            <h3 className="text-3xl">Why Donate?</h3>
            <p className="mt-4 lg:w-96">{donateInformation.whydonate}</p>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-10 lg:mx-auto 2xl:w-7/12 lg:w-8/12 mx-10 border-4 border-yellow-500 py-5 lg:px-24 mt-7 rounded shadow items-center flex-col">
        <h1 className="text-3xl">Thanks To Our Partners</h1>
        <div className="flex my-3 space-x-6 lg:flex-row flex-col justify-center items-center">
          {sponsors.map((sponsor, i) => {
            return (
              <img
                src={cmsImg(sponsor.image)}
                alt={sponsor.name}
                key={i}
                title={sponsor.name}
                className="h-20 object-contain max-w-xs"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DonateWidget;
