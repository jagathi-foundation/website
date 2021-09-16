import React from "react";

const DonateWidget: React.FC = () => {
  return (
    <main
      style={{ marginTop: "10.6rem", marginBottom: "4.6rem" }}
      className="text-center mx-auto"
    >
      <h1 className="text-4xl">Donate</h1>
      <section className="flex justify-center my-10 mx-auto w-4/12">
        <img
          src="http://100smiles.org/assets/images/donateus.jpg"
          alt="Donate"
          className="shadow rounded border-yellow-500 border-4 object-cover object-center"
          style={{ width: "600px" }}
        />
        <div className="mx-5">
          <div className="border-4 border-yellow-500 py-5 px-24 rounded shadow">
            <h3 className="text-3xl">Official Bank Details</h3>
            <p className="mt-4">Name : 100 Smiles Charity Foundation</p>
            <p>Account No : 6468886184</p>
            <p>IFSC : IDIB000M180</p>
            <p>Indian Bank, Madhapur, Hyderabad</p>
          </div>
          <div className="border-4 border-yellow-500 py-5 px-24 mt-7 rounded shadow">
            <h3 className="text-3xl">Donate Here</h3>
            <button className="mt-6 bg-yellow-500 text-white py-2 px-10 rounded-md">
              Click to Donate
            </button>
          </div>
          <div className="border-4 border-yellow-500 py-5 px-24 mt-7 rounded shadow">
            <h3 className="text-3xl">Why Donate?</h3>
            <p className="mt-4 w-96">
              When you donate to the Jagathi Foundation, you support women and
              children around the world. We ensure that your donation is used
              for the right purpose!
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-10 mx-auto w-4/12 border-4 border-yellow-500 py-5 px-24 mt-7 rounded shadow items-center flex-col">
        <h1 className="text-3xl">Huge Thanks To Our Sponsors:</h1>
        <div className="flex my-3 space-x-6">
          <img
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/182680328_104058415187822_3491522283252140210_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kTkvCxLQ_bAAX-g78T9&tn=DPwk89XF1p7BafN9&_nc_ht=scontent-sea1-1.xx&oh=b076a709900a096ba77ab3212f2ad662&oe=6163315B"
            alt="Relief Riders"
            className="h-24"
          />
          <img
            src="https://www.youthforseva.org/resources/Pictures/YFS%20Logo%20R%20-%20col.png"
            alt="Relief Riders"
            className="h-24"
          />
          <img
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.18172-8/13329522_1254945394534494_115001792168073360_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RAkBo3MOf0cAX-ISkAO&tn=DPwk89XF1p7BafN9&_nc_ht=scontent-sea1-1.xx&oh=0d2d7017839c8a5ef976f656c33581ed&oe=6166B1FF"
            alt="Relief Riders"
            className="h-24"
          />
        </div>
      </div>
    </main>
  );
};

export default DonateWidget;
