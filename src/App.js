import "./App.scss";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Home from "./screens/Home";
import Contactus from "./screens/Contactus";
import { Route, Switch } from "react-router-dom";
import SinglePerson from "./components/SinglePersonComponent/SinglePerson";
import StaticContext from "./context/StaticContext";

function App() {
  return (
    <StaticContext.Provider
      value={[
        {
          name: "Marie Mortensen",
          image: "https://randomuser.me/api/portraits/women/27.jpg",
          id: "1",
        },
        {
          name: "Natalia Soto",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
          id: "2",
        },
        {
          name: "Thomas Meyer",
          image: "https://randomuser.me/api/portraits/men/65.jpg",
          id: "3",
        },
        {
          name: "Hunter Walker",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          id: "4",
        },
      ]}
    >
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contactus" component={Contactus} />
            <Route path="/person/:id" component={SinglePerson} />
          </Switch>
        </main>
        <Footer />
      </div>
    </StaticContext.Provider>
  );
}

export default App;
