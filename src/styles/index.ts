import React from "react";
import styled from "styled-components";

// 480px | mobile
// 768px | tablet
// 1024px | laptop

export const Main = styled.main`
    max-width: 1224px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 2px dashed #dedede;
    border-radius: 30px;
    margin: 20px;

    @media only screen and 
    (min-device-width: 1300px) {
        margin: 20px auto;
    }
`;

export const CompanySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    position: relative;

    @media only screen and 
    (max-device-width: 480px) {
        height: 500px;
    }
`;

export const CompanyName = styled.div`
    width: 100%;
    position: absolute;
    margin-bottom: 2rem;
    top: 0px;
    left: 0px;
`;

export const CompanyHeader = styled.h1`
    font-weight: bold;
    color: var(--color-black);
    font-size: 4rem;
    font-family: "Amaranth";
    position: relative;
    z-index: 4;

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.8rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 2rem;
    }
`;

export const CompanyHeaderDot = styled.span`
    color: var(--color-secondary);
`;

export const CompanyHeaderEffect = styled.div`
    width: 20rem;
    height: 2rem;
    position: absolute;
    left: 5rem;
    top: 3rem;
    border-radius: 5px;
    background-color: var(--color-primary);

    @media only screen and 
    (max-device-width: 768px) {
        width: 16rem;
        height: 1.3rem;
        left: 3rem;
        top: 2rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        width: 11rem;
        height: 0.8rem;
        left: 2rem;
        top: 1.6rem;
    }
`;

export const MainParagraph = styled.p`
    color: var(--color-black);
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    margin-top: 10%;
    font-family: "Amaranth";

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.4rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const PortfolioSection = styled.section`
    margin: 4rem 0;
`;

export const SectionHeader = styled.h1`
    font-weight: bold;
    color: var(--color-black);
    font-size: 3rem;
    margin-bottom: 2rem;
    font-family: "Amaranth";

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.4rem;
    }
`;

export const PortfolioContent = styled.div`
    display: flex;

    @media only screen and 
    (max-device-width: 768px) {
        flex-direction: column;
    }
`;

export const PortfolioDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media only screen and 
    (max-device-width: 768px) {
        padding: 2rem 20px;
    }

    @media only screen and 
    (max-device-width: 480px) {
        padding: 2rem 0;
    }
`;

export const PortfolioDescriptionHeader = styled.h2`
    font-family: "Amaranth";
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--color-black);

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const PortfolioDescriptionDetails = styled.p`
    font-size: 1.6rem;
    padding-left: 1rem;
    color: var(--color-black);

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 1.2rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 1rem;
    }
`;

export const WorkSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WorkItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.4rem;

    @media only screen and 
    (max-device-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const WorkItemNumber = styled.span`
    display: inline-block;
    width: 70px;
    height: 70px;
    min-width: 70px;
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
    font-family: "Amaranth";
    border-radius: 5px;

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const ItemParagraph = styled.p`
    color: var(--color-black);
    font-size: 1.4rem;
    padding-left: 1rem;

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const ItemA = styled.div`
    margin-right: 35%;
    width: 450px;
    padding-bottom: 40px;

    @media only screen and 
    (max-device-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

export const ItemB = styled(ItemA)`
    margin-right: 0;
    margin-left: 35%;

    @media only screen and 
    (max-device-width: 768px) {
        margin: 0;
    }
`;

export const ItemC = styled(ItemA)``;

export const ItemD = styled(ItemB)``;

export const WorkItemHeader = styled.h3`
    color: var(--color-black);
    font-size: 2rem;
    font-weight: bold;
    font-family: "Amaranth";
    margin-left: 20px;

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 1.8rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        margin-left: 0;
    }
`;

export const Footer = styled.footer`
    background-color: var(--color-black);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 450px;
`;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
`;

export const MailLink = styled.a`
    color: var(--color-white);
    font-family: "GilroyExtrabold";
    font-size: 3rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-style: wavy;
        text-decoration-color: var(--color-primary);
        cursor: pointer;
    }

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.4rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const FooterParagraph = styled.p`
    color: var(--color-light-gray);
`;

export const FooterCompanyName = styled.span`
    color: var(--color-light-gray);
    font-weight: bold;
    font-family: "Amaranth";
`;

export const FooterSectionHeader = styled(SectionHeader)`
    color: var(--color-light-gray);

    @media only screen and 
    (max-device-width: 768px) {
        font-size: 2.4rem;
    }

    @media only screen and 
    (max-device-width: 480px) {
        font-size: 1.8rem;
    }
`;
