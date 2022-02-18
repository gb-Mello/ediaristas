import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string; //se quisesse passar um elemento html:  string | JSX.Element
}
// o ? torna a propriedade não obrigatoria no componente, sem isso, é obrigatoria

const PageTitle: React.FC<PageTitleProps> = (props) => {
  //Elementos dentro do componente podem ser chamados por props.children
  return (
    <div>
      {props.title}
      {props.subtitle}
    </div>
  );
};

export default PageTitle;
