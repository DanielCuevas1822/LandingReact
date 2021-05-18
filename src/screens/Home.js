import React from "react";
import Foda from "../components/FodaComponent/Foda";
import Team from "../components/TeamComponent/Team";
import PersonList from "../components/PeronsListComponent/PeronsList";
import Banner from "../components/BannerComponent/Banner";
const Home = () => {
  return (
    <React.Fragment>
      <Banner contact={false} />
      <Team />
      <Foda />
      <PersonList />
    </React.Fragment>
  );
};

export default Home;
