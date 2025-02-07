import React from "react";
import {
  Header,
  SymptomBoxDetails,
  SymptomDescription,
  SymptomDescriptionContainer,
  SymptomHeader,
  SymptomImage,
  SymptomsDetailsContainer,
  SymptomsSectionContainer,
  SymptomsSectionWrapper,
} from "./index.styles";
import symptomsData from "./symptomsData.json";

export default function SymptomsSection() {
  return (
    <>
      <SymptomsSectionWrapper>
        <SymptomsSectionContainer>
          <Header>Symptoms of Diabetes</Header>
          <SymptomsDetailsContainer>
            {symptomsData.map((item, index) => (
              <SymptomBoxDetails key={index} reverse={index % 2 !== 0}>
                <SymptomDescriptionContainer>
                  <SymptomHeader>{item.title}</SymptomHeader>
                  <SymptomDescription>{item.description}</SymptomDescription>
                </SymptomDescriptionContainer>
                <SymptomImage src={item.image} alt={item.title} />
              </SymptomBoxDetails>
            ))}
          </SymptomsDetailsContainer>
        </SymptomsSectionContainer>
      </SymptomsSectionWrapper>
    </>
  );
}
