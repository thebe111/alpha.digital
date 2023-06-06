import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { 
    CompanyHeader,
    CompanyHeaderDot,
    CompanyHeaderEffect,
    CompanyName,
    CompanySection,
    ContactSection,
    Footer,
    FooterCompanyName,
    FooterParagraph,
    MailLink,
    Main,
    MainParagraph,
    PortfolioDescription,
    PortfolioSection,
    SectionHeader,
    PortfolioDescriptionHeader,
    PortfolioDescriptionDetails,
    PortfolioContent,
    WorkSection,
    WorkItemNumber,
    WorkItemHeader,
    WorkItem,
    ItemParagraph,
    ItemA,
    ItemB,
    ItemC,
    ItemD,
    FooterSectionHeader,
} from "../styles/index";
import { StaticImage } from "gatsby-plugin-image";

const portfolio = [
    {
        id: 1,
        company: "SoluCX",
        uri: "https://solucx.com.br/",
        description: "We give voice to more than 30 million customers annually. Through a complete ecosystem of Customer Experience solutions, we offer education, consulting and technology to generate insights and listen to customers, in addition to recognizing professionals and companies that stand out in the customer-centric era",
    },
];

const HomePage: React.FC<PageProps> = () => {
  return (
      <>
          <Main>
              <CompanySection>
                  <CompanyName>
                      <CompanyHeader>
                          Alpha<CompanyHeaderDot>.</CompanyHeaderDot>Digital
                      </CompanyHeader>
                      <CompanyHeaderEffect></CompanyHeaderEffect>
                  </CompanyName>

                  <MainParagraph>
                      Trabalhamos os detalhes provendo as melhores soluções em qualidade, performance, e manutenibilidade.
                  </MainParagraph>
              </CompanySection>

              <PortfolioSection>
                  <SectionHeader>Portfolio</SectionHeader>

                  <PortfolioContent>
                      <StaticImage 
                          src="../../static/assets/solucx_presentation_image.png" 
                          alt="Company representative image"
                          className="img"
                          layout="constrained"
                          transformOptions={{ fit: "contain" }}
                      />
                      <PortfolioDescription>
                          <PortfolioDescriptionHeader>SoluCX</PortfolioDescriptionHeader>
                          <PortfolioDescriptionDetails>
                              Trabalhos juntos no serviço core de disparos de mensagens onde conseguimos aumentar a performance e reduzir em 00% os custos. Conseguimos servir mais clientes e trabalhar de forma a facilitar a manutenção e eventual integrações ao projeto
                          </PortfolioDescriptionDetails>
                      </PortfolioDescription>
                  </PortfolioContent>
              </PortfolioSection>

              <SectionHeader>Como Trabalhamos?</SectionHeader>

              <WorkSection>
                  <ItemA>
                      <WorkItem>
                          <WorkItemNumber>1</WorkItemNumber>
                          <WorkItemHeader>Mapeamento</WorkItemHeader>
                      </WorkItem>

                      <ItemParagraph>
                          Entendemos seu negócio de ponta a ponta, os requisitos, as regras do negócio os critérios de aceitação e os objetivos do projeto e definiremos o que será mais urgente no seu contexto, trabalhando uma solução sob medida
                      </ItemParagraph>
                  </ItemA>

                  <ItemB>
                      <WorkItem>
                          <WorkItemNumber>2</WorkItemNumber>
                          <WorkItemHeader>Planejamento</WorkItemHeader>
                      </WorkItem>

                      <ItemParagraph>
                          Passamos a separar as melhores metodologias e tecnologias transformando essa informações em um calendário ágil evitando possíveis dificuldades e impedimentos
                      </ItemParagraph>
                  </ItemB>

                  <ItemC>
                      <WorkItem>
                          <WorkItemNumber>3</WorkItemNumber>
                          <WorkItemHeader>Desenvolvimento</WorkItemHeader>
                      </WorkItem>

                      <ItemParagraph>
                          Aqui nossos especialistas entram em ação, trabalhamos com metodologias ágeis e com isso as entregas acontecem de forma constante a cada duas semanas. Demonstramos a evolução do projeto, alinhando os objetivos e tudo isso com uma comunicação objetiva e constante com você parceiro. Todo o processo é focado em entrega de valor com um desenvolvimento baseado em testes
                      </ItemParagraph>
                  </ItemC>

                  <ItemD>
                      <WorkItem>
                          <WorkItemNumber>4</WorkItemNumber>
                          <WorkItemHeader>Suporte</WorkItemHeader>
                      </WorkItem>

                      <ItemParagraph>
                          Realizamos desde do dia zero toda a documentação do projeto para que você parceiro possa ser independente do nosso time, e ficamos disponíveis a suporte para garantir os objetivos e metas definidos para o projeto com uma garantia de 60 dias
                      </ItemParagraph>
                  </ItemD>
              </WorkSection>
          </Main>

          <Footer>
              <ContactSection>
                  <FooterSectionHeader>Entre em contato</FooterSectionHeader>
                  <MailLink href="mailto:contact@adigital.co">contact@adigital.co</MailLink>
              </ContactSection>

              <FooterParagraph>Created by <FooterCompanyName>@alphadigital.</FooterCompanyName> | Street Frederico Peixoto, 123 - Sala 2. Vitória da Conquista - BA</FooterParagraph>
          </Footer>
      </>
  )
}

export default HomePage;

export const Head: HeadFC = () => <title>Alpha.Digital</title>
