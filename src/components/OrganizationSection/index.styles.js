import styled from "styled-components";

export const OrganizationSectionWrapper = styled.div`
  padding: 10px 87px 74px 54px;
  background-color: #fcfaf8;

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const OrganizationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 83px;
`;

export const Header = styled.div`
  font-family: Poppins;
  font-size: 47px;
  font-weight: 700;
  line-height: 63.5px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 100%;
  max-width: 825px;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const OrganizationSectionDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1125px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const OrganizationLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;

  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

export const OrganizationDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 647px;

  @media screen and (max-width: 1050px) {
    align-items: center;
    gap: 20px;
  }
`;

export const OrganizationTagline = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media screen and (max-width: 1050px) {
    text-align: center;
  }
`;

export const OrganizationBgImage = styled.div`
  @media screen and (max-width: 1050px) {
    img {
      width: 100%;
      max-width: 300px;
    }
  }
`;
