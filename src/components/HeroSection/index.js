import React from "react";
import {
  BookConsultation,
  ConsultationBox,
  ConsultationTagLine,
  Description,
  DescriptionSection,
  Header,
  HeroDescriptionContainer,
  HeroSectionContainer,
  HeroSectionImage,
  HeroSectionWrapper,
  PhoneNumberField,
  TagLine,
} from "./index.styles";
import heroSectionBg from "../../assets/images/herosectionbg.png";

export default function HeroSection() {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionContainer>
          <Header>
            Identifying the Signs: Understanding the Symptoms of Diabetes
          </Header>
          <HeroDescriptionContainer>
            <DescriptionSection>
              <Description>
                Identifying symptoms of diabetes is the first step to control
                your sugar levels at an early stage. It's your first step to
                live a healthy & stress-free life.
              </Description>
              <TagLine>
                Know your symptoms and talk to a senior diabetes expert
              </TagLine>
              <ConsultationBox>
                <ConsultationTagLine>
                  Book a consultation with senior Diabetes Expert.
                </ConsultationTagLine>
                <PhoneNumberField>
                  <input type="tel" placeholder="Enter your WhatsApp Number" />
                </PhoneNumberField>
                <BookConsultation>BOOK A CONSULTATION</BookConsultation>
              </ConsultationBox>
            </DescriptionSection>
            <HeroSectionImage>
              <img src={heroSectionBg} alt="bg-img" />
            </HeroSectionImage>
          </HeroDescriptionContainer>
        </HeroSectionContainer>
      </HeroSectionWrapper>
    </>
  );
}
