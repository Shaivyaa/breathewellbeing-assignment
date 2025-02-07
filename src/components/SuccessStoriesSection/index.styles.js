import styled from "styled-components";

export const SuccessStoriesSectionWrapper = styled.div`
  background-color: #fcfaf8;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 140px 0 120px;

  @media screen and (max-width: 1050px) {
    padding: 25px;
  }
`;

export const SuccessStoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const SuccessStoriesHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 55px;
  justify-content: space-between;
  background-color: white;
  width: 90%;
  /* max-width: 1085px; */

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }
`;

export const SuccessStoriesDescriptionContainer = styled.div`
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

export const Header = styled.div`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 600;
  line-height: 58px;
  text-align: left;
  width: 100%;
  max-width: 819px;

  @media screen and (max-width: 800px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  max-width: 300px;

  @media screen and (max-width: 800px) {
    max-width: 200px;
    text-align: center;
  }
`;

export const Btn = styled.button`
  width: 100%;
  max-width: 300px;
  border: 2px solid #4aa2b0;
  outline: none;
  border-radius: 12px;
  padding: 0;
  font-size: 20px;
  color: #4aa2b0;
  background-color: white;
  cursor: pointer;
  padding: 22px 0;

  &:hover {
    background-color: #4aa2b0;
    transition: 0.2s 0.1s;
    color: white;
  }

  @media screen and (max-width: 800px) {
    padding: 15px;
    max-width: 200px;
    text-align: center;
    font-size: 15px;
  }
`;

export const BookConsultation = styled.button`
  background-color: #4aa2b0;
  width: 100%;
  max-width: 360px;
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
  margin: 48px 0 86px 0;

  &:hover {
    border: 2px solid #4aa2b0;
    background-color: white;
    color: #4aa2b0;
    transition: 0.2s 0.1s;
  }

  @media screen and (max-width: 800px) {
    margin: 20px 0;
    padding: 10px;
    font-weight: 400;
  }
`;
