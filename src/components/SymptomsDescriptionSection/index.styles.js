import styled from "styled-components";

export const SymptomsDescriptionSectionWrapper = styled.div`
  padding: 30px 140px 31px 100px;
  background: linear-gradient(0deg, #def4f7 0%, #fcfaf8 100%);

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const SymptomsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  width: 100%;
  max-width: 1275px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    gap: 28px;
  }
`;

export const SymptomBoxDetails = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  gap: 68px;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 28px;
  }
`;

export const SymptomDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 77px;

  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const SymptomHeader = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.005em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media screen and (max-width: 480px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

export const SymptomDescription = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const SymptomImage = styled.img`
  width: 100%;
`;

export const FreeSessionImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
