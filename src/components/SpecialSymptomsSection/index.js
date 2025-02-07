import React from "react";
import {
  Header,
  SpecialSymptomsContainer,
  SpecialSymptomsSectionWrapper,
  SymptomsDescription,
  SymptomsHeader,
  SymptomsImage,
  SymptomsDetails,
  SymptomsMaleDetailsContainer,
  SymptomsSection,
} from "./index.styles";
import symptomsMaleData from "./specialSymptomsMale.json";
import symptomsFemaleData from "./specialSymptomsFemale.json";

export default function SpecialSymptomsSection() {
  return (
    <>
      <SpecialSymptomsSectionWrapper>
        <SpecialSymptomsContainer>
          <SymptomsSection>
            <Header>Special Symptoms in Male</Header>
            <SymptomsMaleDetailsContainer>
              {symptomsMaleData.map((item, index) => (
                <SymptomsDetails key={index}>
                  <SymptomsHeader>{item.title}</SymptomsHeader>
                  <SymptomsImage src={item.image} alt={item.title} />
                  <SymptomsDescription>{item.description}</SymptomsDescription>
                </SymptomsDetails>
              ))}
            </SymptomsMaleDetailsContainer>
          </SymptomsSection>
          <SymptomsSection>
            {" "}
            <Header>Special Symptoms in Female</Header>
            <SymptomsMaleDetailsContainer>
              {symptomsFemaleData.map((item, index) => (
                <SymptomsDetails key={index}>
                  <SymptomsHeader>{item.title}</SymptomsHeader>
                  <SymptomsImage src={item.image} alt={item.title} />
                  <SymptomsDescription>{item.description}</SymptomsDescription>
                </SymptomsDetails>
              ))}
            </SymptomsMaleDetailsContainer>
          </SymptomsSection>
        </SpecialSymptomsContainer>
      </SpecialSymptomsSectionWrapper>
    </>
  );
}
