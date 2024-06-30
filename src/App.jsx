import "./App.css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import ButtomNav from "./bottomNavigation";

const App = () => {
  return (
    <div>
      <ButtomNav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
