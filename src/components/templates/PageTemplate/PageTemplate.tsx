import React from "react";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

import { StyledContainer } from "./_styled";

import { TemplateProps } from "components/templates/_interfaces";

const PageTemplate = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </>
  );
};

export default PageTemplate;
