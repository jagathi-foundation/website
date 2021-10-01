import React, { useState, useEffect } from 'react'
//Page Components
import Spinner from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//Page Content Getter
import getProjectContent from '../utils/GetProjectContent';
//Types
import { NavLinksType, SocialLinksType, ContactInformationType, BankAddressType } from '../types/NavFooterTypes';
import { RouteComponentProps } from 'react-router';

const Project: React.FC<RouteComponentProps> = ({match}) => {
    //State
    const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
    const [footerData, setFooterData] = useState<{
        socials: SocialLinksType;
        contact: ContactInformationType;
        bank: BankAddressType;
    } | null>(null);

    useEffect(() => {
        (async () => {
            const [navData, footerData] = await getProjectContent();
            setNavLinks(navData as NavLinksType);
            setFooterData({
                bank: footerData.bankaddressURL,
                contact: { email: footerData.email, location: footerData.location },
                socials: {
                  twitter: footerData.twitterURL,
                  facebook: footerData.facebookURL,
                  instagram: footerData.instagramURL,
                  youtube: footerData.youtubeURL,
                },
              });
        })()
    }, [])

    if(!navLinks || !footerData) {
        return <Spinner />
    }

    return (
        <div>
            <Navbar navLinks={navLinks} page="Home" url={match} />
            <br /><br /><br /><br /><br /><br />
            <h1 className="text-center text-3xl text-yellow-500 pb-24" style={{textTransform: "capitalize"}}>Project {((match.params as any).blob as string).replace("-", " ")}</h1>
            <h1 className="text-center text-3xl text-yellow-500 pb-24" style={{textTransform: "capitalize"}}>Coming Soon!</h1>
            <Footer
                socialLinks={footerData.socials}
                contactInfo={footerData.contact}
                donateLink={footerData.bank}
            />
        </div>
    )
}

export default Project;
