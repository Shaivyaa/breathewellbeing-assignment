import React from "react";
import {
  Description,
  FAQSectionContainer,
  FAQSectionWrapper,
  Header,
} from "./index.styles";

export default function FAQSection() {
  return (
    <>
      <FAQSectionWrapper>
        <FAQSectionContainer>
          <Header>Frequently Asked Questions</Header>
          <Description>
            For all additional questions, please feel free to contact us!
          </Description>
        </FAQSectionContainer>
      </FAQSectionWrapper>
      <div class="container">
        <div class="accordions">
          <div class="accordion">
            <input type="checkbox" id="question-1" />
            <label for="question-1" class="accordion__header" id="question-1">
              Undergraduate Studies
            </label>
            <div class="accordion__content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae quos voluptate libero ipsa dicta! Quaerat
              </p>
            </div>
          </div>
        </div>

        <div class="accordions">
          <div class="accordion">
            <input type="checkbox" id="question-2" />
            <label for="question-2" class="accordion__header" id="question-1">
              Postgraduate Studies
            </label>
            <div class="accordion__content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae quos voluptate libero ipsa dicta! Quaerat
              </p>
            </div>
          </div>
        </div>

        <div class="accordions">
          <div class="accordion">
            <input type="checkbox" id="question-3" />
            <label for="question-3" class="accordion__header" id="question-1">
              Research
            </label>
            <div class="accordion__content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae quos voluptate libero ipsa dicta! Quaerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
