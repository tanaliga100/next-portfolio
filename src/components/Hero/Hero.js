import React from "react";
import { FaSmileWink } from "react-icons/fa";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi
        <br />
        I'm Jordan Tanaliga
      </SectionTitle>
      <SectionText>
        Creating the best looking applications for YOU{" "}
        <icon>{FaSmileWink}</icon> is my JOB.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "mailto:jordantanaliga@outlook.com?subject=Me&body=Hello!")
        }
      >
        {" "}
        Learn MORE
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
