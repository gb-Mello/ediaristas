import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Gabriel Pereira"}
        picture={"https://github.com/gb-Mello"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
