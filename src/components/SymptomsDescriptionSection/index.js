import React from "react";
import {
  FreeSessionImgContainer,
  SymptomBoxDetails,
  SymptomDescription,
  SymptomDescriptionContainer,
  SymptomHeader,
  SymptomImage,
  SymptomsDescriptionContainer,
  SymptomsDescriptionSectionWrapper,
} from "./index.styles";
import symptomsDescriptionData from "./symptomsDescription.json";
import freeSessionBg from "../../assets/images/freeSessionBg.png";

export default function SymptomsDescriptionSection() {
  return (
    <>
      <SymptomsDescriptionSectionWrapper>
        <SymptomsDescriptionContainer>
          {symptomsDescriptionData.map((item, index) => {
            if (item.title === "") {
              return (
                <SymptomBoxDetails
                  key={index}
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <SymptomImage src={item.image} alt="Background" />
                </SymptomBoxDetails>
              );
            }

            return (
              <SymptomBoxDetails key={index} reverse={index % 2 !== 0}>
                <SymptomDescriptionContainer>
                  <SymptomHeader>{item.title}</SymptomHeader>
                  <SymptomDescription>{item.description}</SymptomDescription>
                </SymptomDescriptionContainer>
                <SymptomImage src={item.image} alt={item.title} />
              </SymptomBoxDetails>
            );
          })}
        </SymptomsDescriptionContainer>
      </SymptomsDescriptionSectionWrapper>
      <FreeSessionImgContainer>
        <img src={freeSessionBg} alt="free-session-bg" />
      </FreeSessionImgContainer>
    </>
  );
}
