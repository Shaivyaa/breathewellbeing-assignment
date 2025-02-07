import styled from "styled-components";

export const FAQSectionWrapper = styled.div`
  padding: 57px 0 57px;

  @media screen and (max-width: 500px) {
    padding: 25px;
  }
`;

export const FAQSectionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  font-family: Poppins;
  font-size: 47px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: -0.005em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media screen and (max-width: 480px) {
    font-size: 22px;
    line-height: 40px;
  }
`;

export const Description = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
