import React from "react";
import { Img } from "./AcomplishmentsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxTitle, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    camp: "Udemy Online Courses",
    text: "React - The Complete Guide (inc Hooks, React-Router, Redux)",
    image: "/images/react.jpg",
  },
  {
    camp: "Udemy Online Courses",
    text: "The Modern JavaScript Bootcamp",
    image: "/images/javascript.jpg",
  },
  {
    camp: "Great Learning Courses",
    text: "Introduction to UI-UX",
    image: "/images/ui-ux.jpg",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Licenses and Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.text} </BoxTitle>
          <Img src={card.image} />
          <BoxText>{card.camp}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
