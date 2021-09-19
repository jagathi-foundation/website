import React from "react";
import { AboutFullContentType } from "../types/AboutTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  aboutFullContent: AboutFullContentType;
}

const AboutUs: React.FC<Props> = ({ aboutFullContent }) => {
  return (
    <div style={{ marginTop: "9.6rem" }}>
      <img
        src={cmsImg(aboutFullContent.coverimg)}
        alt="Company"
        className="
          xl:w-6/12
          object-cover object-center
          mx-auto
          my-10
          rounded-md
          shadow-md
          w-3/4

        "
      />

      <div
        className="
          flex
          justify-between
          mx-auto
          my-10
          xl:w-6/12
          w-3/4
          text-center
          lg:flex-row
          flex-col
        "
      >
        {/* <div>
          <h1 className="text-3xl">Our Vision</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.ourvision}</p>
        </div>
        <div>
          <h1 className="text-3xl">Founding Story</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.foundingstory}</p>
        </div>
        <div>
          <h1 className="text-3xl">What We Do</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.whatwedo}</p>
        </div> */}
        <p className="text-left">
          <h1 className="mb-4 text-black text-2xl">Women Welfare</h1>
          <p>Women must possess the self worth, confidence and freedom to choose
          what they may with regard to their private and professional choices
          alike.A proper nurturing, polishing and sharpening of those skills is
          only made possible through better education, awareness and a space to
          freely express oneself. Empowerment of women is a necessity for the
          very development of a society.it helps women to promote an overall
          development of society, grant women economic independence, reduce
          scope domestic violence and sexual exploitation,eradicate corruption,
          get rid of poverty and in-turn facilitate national development.</p>
          <h1 className="my-4 text-black text-2xl">Education</h1>
          <p><blockquote className="my-4 font-bold text-xl">"Education is the most powerful weapon which you can use to
          change the world" -Nelson Mandela</blockquote> The conventional assembly of
          education inputs is not improving learning outcomes. This presents a
          fundamental challenge to the way that governments, development
          partners and communities are managing and supporting education
          systems. A new, more radical approach that focusses on enhancing
          learning outcomes is long overdue and forms the basis for this
          strategy. Jagathi Foundation outlines the shift towards a greater
          focus on improving learning outcomes, including supporting the breadth
          of skills that allow young people to become agile, adaptive learners
          and citizens, equipped to navigate personal, social, academic,
          economic and environmental challenges.</p>
          <h1 className="my-4 text-black text-2xl">Health</h1> 
          <p>Number of people suffering from the major and severe health problems in rural sections
          and urban slums. The biggest reason of these health disparities here
          is malnutrition and pathetic slum living facilities. The air they
          breathe, the water they drink and even food they eat are totally
          contrary and pathetic to the normal and healthy living facilities.
          Jagathi Foundation support basic health and social needs of
          underprivileged sections of the society like poor, women, elderly,
          children etc with awareness on hygiene, nutrition needs and lifestyle
          changes.</p> 
          <h1 className="my-4 text-black text-2xl">Environment</h1> 
          <p>Jagathi Foundation sensitize the people about
          value and importance of the environment Create awareness on how to
          reduce the usage of plastic and pesticides which are harmful for
          health. Proper conservation and utilization of Natural resources like
          water & soil and protect the lakes, ponds from polluting. Also
          rejuvenate wells & Ponds, bring them back to life for alternate source
          of water and educate to do proper disposal of solid waste.
          </p>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
