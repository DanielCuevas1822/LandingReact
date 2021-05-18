import "./App.scss";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Home from "./screens/Home"
import Contactus from "./screens/Contactus";
import { Link, Route, Switch } from "react-router-dom";
import SinglePerson from './components/SinglePersonComponent/SinglePerson';

function App() {
  return (
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
  );
}

export default App;
