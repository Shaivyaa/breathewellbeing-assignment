import React from "react";
import {
  Description,
  Header,
  OverviewBoxContainer,
  OverviewBoxDetails,
  OverviewDescription,
  OverviewHeader,
  OverviewImage,
  OverviewSectionContainer,
  OverviewSectionWrapper,
} from "./index.styles";
import overviewData from "./overviewData.json";

export default function OverviewSection() {
  return (
    <>
      <OverviewSectionWrapper>
        <OverviewSectionContainer>
          <Header>Overview</Header>
          <Description>
            Diabetes is a metabolic disorder that disturbs the normal blood
            sugar levels in the body. It is the root cause of various health
            complications that may be life-threatening. Recognizing the early
            signs of diabetes is crucial in light of this threat. It can reduce
            the progress of this sugar monster and can lead to diabetes
            reversal. To understand the development of diabetes, be aware of the
            diabetes symptoms.Diabetes comes in a variety of forms, so the
            symptoms vary. Let's understand the various symptoms of Type 1, 2
            Diabetes, Prediabetes and Gestational diabetes.
          </Description>
          <OverviewBoxContainer>
            {overviewData.map((item, index) => (
              <OverviewBoxDetails key={index}>
                <OverviewHeader>{item.title}</OverviewHeader>
                <OverviewImage src={item.image} alt={item.title} />
                <OverviewDescription>{item.description}</OverviewDescription>
              </OverviewBoxDetails>
            ))}
          </OverviewBoxContainer>
        </OverviewSectionContainer>
      </OverviewSectionWrapper>
    </>
  );
}
