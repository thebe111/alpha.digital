import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 50px;
    padding: 0 7%;

    > h1 {
        font-family: "Amaranth";
        font-size: 1rem;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 100px - 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    > .main__phrase {
        margin-right: 7%;

        > p {
            max-width: 250px;
            text-align: end;
            font-size: 0.9rem;
        }

        > .main__services {
            margin-top: 10px;
        }
    }

    > a {
        display: flex; 
        justify-content: end;
        text-decoration: none;
        margin-right: 7%;

        > p {
            white-space: nowrap;
        }

        > p, svg {
            font-size: 5rem;
        }

        @media only screen and
        (max-device-width: 768px) {
            > p, svg {
                font-size: 3rem;
            }
        }

        @media only screen and
        (max-device-width: 468px) {
            > p, svg {
                font-size: 2rem;
            }
        }
    }
`;

export const Footer = styled.footer`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7% 20px 7%;

    @media only screen and
    (max-device-width: 468px) {
        flex-direction: column;
    }

    > .footer__email {
        font-size: 1rem;
    }

    > .footer__signature {
        font-size: 0.8rem;

        > span {
            font-size: 0.8rem;
            font-weight: bold;
            font-family: "Amaranth";
        }
    }
`;
