import styled from "styled-components";

export const SpecialSymptomsSectionWrapper = styled.div`
  padding: 35px 0 58px 0;
  background-color: #fcfaf8;

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const SpecialSymptomsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 89px;

  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const SymptomsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const SymptomsMaleDetailsContainer = styled.div`
  display: flex;
  gap: 38px;

  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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

export const SymptomsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: #ffffff;
  padding: 29px 19px 56px 19px;
  width: 100%;
  max-width: 375px;
  box-shadow: 0px 4px 10px 2px #0000001a;
`;
export const SymptomsHeader = styled.div`
  font-family: Poppins;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const SymptomsImage = styled.img`
  width: 184px;
  height: 128px;
  margin: 30px 0 30px 0;
`;

export const SymptomsDescription = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000db;
`;
