import styled from "styled-components";

export const OverviewSectionWrapper = styled.div`
  padding: 96px 87px 30px 54px;
  background-color: #fcfaf8;

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const OverviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
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
    font-size: 30px;
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
  width: 100%;
  max-width: 1079px;
`;

export const OverviewBoxContainer = styled.div`
  display: flex;
  gap: 38px;
  margin-top: 71px;

  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const OverviewBoxDetails = styled.div`
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

export const OverviewHeader = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const OverviewImage = styled.img`
  width: 184px;
  height: 128px;
  margin: 50px 0 30px 0;
`;

export const OverviewDescription = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000db;
`;
