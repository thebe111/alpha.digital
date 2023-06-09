import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import * as SC from "../styles/index";
import { FiArrowUpRight } from "react-icons/fi";

const HomePage: React.FC<PageProps> = () => {
  return (
      <>
          <SC.Header>
              <h1>Alpha.Digital</h1>
          </SC.Header>

          <SC.Main>
              <div className="main__phrase">
                  <p>Let's make an unforgettable project together right now.</p>
                  <p className="main__services">Websites, landpages, e-commerces, and more.</p>
              </div>

              <Link to="mailto:contact@thealphadigital.com.br">
                  <p>Start a project</p>

                  <FiArrowUpRight />
              </Link>

              <div></div>
          </SC.Main>

          <SC.Footer>
              <p className="footer__email">contact@thealphadigital.com.br</p>

              <p className="footer__signature">Powered By <span>@AlphaDigital</span>.</p>
          </SC.Footer>
      </>
  )
}

export default HomePage;

export const Head: HeadFC = () => <title>Alpha.Digital</title>
