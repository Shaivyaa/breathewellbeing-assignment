import React from "react";
import {
  BookConsultation,
  Btn,
  BtnContainer,
  Header,
  SuccessStoriesContainer,
  SuccessStoriesDescriptionContainer,
  SuccessStoriesHeaderContainer,
  SuccessStoriesSectionWrapper,
} from "./index.styles";
import successStoriesBg from "../../assets/images/success-storiesbg.png";

export default function SuccessStoriesSection() {
  return (
    <>
      <SuccessStoriesSectionWrapper>
        <SuccessStoriesContainer>
          <SuccessStoriesHeaderContainer>
            <Header>
              Success Stories of People Who Lower Blood Glucose Levels Naturally
            </Header>
            <BtnContainer>
              <Btn>View all stories</Btn>
            </BtnContainer>
          </SuccessStoriesHeaderContainer>
          <SuccessStoriesDescriptionContainer>
            <img src={successStoriesBg} alt="success-stories-bg" />
          </SuccessStoriesDescriptionContainer>
          <BookConsultation>Book a Free Session</BookConsultation>
        </SuccessStoriesContainer>
      </SuccessStoriesSectionWrapper>
    </>
  );
}
