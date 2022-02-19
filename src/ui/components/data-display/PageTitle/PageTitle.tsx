import React from "react";
import { PageTitleContainer, PageTitleStyled } from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string; //se quisesse passar um elemento html:  string | JSX.Element
}
// o ? torna a propriedade não obrigatoria no componente, sem isso, é obrigatoria

const PageTitle: React.FC<PageTitleProps> = (props) => {
  //Elementos dentro do componente podem ser chamados por props.children
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      {props.subtitle}
    </PageTitleContainer>
  );
};

export default PageTitle;
