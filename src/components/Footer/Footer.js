import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Section } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +639690243354">+639690243354</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: jordantanaliga@gmail.com">
            @jordantanaliga@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer></CompanyContainer>
      <Section>
        <h1>
          Lets create cool things together ! <h3>G ? </h3>{" "}
        </h1>{" "}
        <p style={{ fontSize: ".5em" }}>
          I do rely more on enthusiasm than the actual skills.. Because whatever
          you do, IF you do it enthusiastically then perhaps people will love it
          more... <br /> <br /> _jordantanaliga100
        </p>
      </Section>
      <SocialIconsContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
