import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  padding: 96px 87px 74px 54px;
  background-color: #def4f7;

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1275px;
  margin: 0 auto;
`;

export const Header = styled.div`
  font-family: "Poppins", serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 74px;
  letter-spacing: -0.800000011920929px;
  text-align: start;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 100%;
  max-width: 1110px;

  @media screen and (max-width: 1050px) {
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeroDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const DescriptionSection = styled.div`
  width: 100%;
  max-width: 688px;
  display: flex;
  flex-direction: column;
  gap: 39px;
`;

export const HeroSectionImage = styled.div`
  text-align: center;
  img {
    @media screen and (max-width: 1050px) {
      margin: 0 auto;
      width: 100%;
    }
  }
`;

export const Description = styled.div`
  font-family: "Poppins", serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #00000099;
  width: 100%;
  max-width: 598px;
`;

export const TagLine = styled.div`
  font-family: "Poppins", serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #00000099;
  width: 100%;
  max-width: 470px;
`;

export const ConsultationBox = styled.div`
  background-color: #ffffff;
  padding: 33px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
  }
`;

export const ConsultationTagLine = styled.div`
  font-family: "Poppins", serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const PhoneNumberField = styled.div`
  margin: 43px 0 31px 0;
  width: 100%;
  max-width: 570px;

  input {
    padding: 12px 0 12px 29px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
    ::placeholder {
      color: #00000099;
    }
  }

  @media screen and (max-width: 712px) {
    max-width: 380px;
  }

  @media screen and (max-width: 500px) {
    max-width: 200px;
    margin: 20px 0;
  }
`;

export const BookConsultation = styled.button`
  background-color: #4aa2b0;
  width: 100%;
  max-width: 605px;
  border-radius: 8px;
  border: 2px solid transparent;
  outline: none;
  padding: 20px;
  cursor: pointer;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.06em;
  text-align: center;
  color: white;

  &:hover {
    border: 2px solid #4aa2b0;
    background-color: white;
    color: #4aa2b0;
    transition: 0.2s 0.1s;
    outline: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 12px;
  }
`;
