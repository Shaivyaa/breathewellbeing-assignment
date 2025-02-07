import React from "react";
import {
  Header,
  OrganizationBgImage,
  OrganizationDetails,
  OrganizationLogoContainer,
  OrganizationSectionContainer,
  OrganizationSectionDescription,
  OrganizationSectionWrapper,
  OrganizationTagline,
} from "./index.styles";
import org1 from "../../assets/images/org-1.png";
import org2 from "../../assets/images/org-2.png";
import org3 from "../../assets/images/org-3.png";
import orgBg from "../../assets/images/orgBg.png";

export default function OrganizationSection() {
  return (
    <>
      <OrganizationSectionWrapper>
        <OrganizationSectionContainer>
          <Header>
            We are recognized by 3 major international organizations
          </Header>
          <OrganizationSectionDescription>
            <OrganizationLogoContainer>
              <img src={org1} alt="org1" />
              <img src={org2} alt="org2" />
              <img src={org3} alt="org3" />
            </OrganizationLogoContainer>

            <OrganizationDetails>
              <OrganizationTagline>
                With their impeccable knowledge and expertise,over 100
                world-class experts assist you in naturally controlling your
                diabetes.Our effective strategy is based on:
              </OrganizationTagline>

              <OrganizationBgImage>
                <img src={orgBg} alt="org-bg" />
              </OrganizationBgImage>
            </OrganizationDetails>
          </OrganizationSectionDescription>
        </OrganizationSectionContainer>
      </OrganizationSectionWrapper>
    </>
  );
}
