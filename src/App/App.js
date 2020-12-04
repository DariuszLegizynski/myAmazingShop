import { Route, Switch, Redirect } from "react-router-dom";

//layout
import Home from "../layout/home/Home";
import Shop from "../layout/shop/Shop";
import Sign from "../layout/sign/Sign";

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/shop"} component={Shop} />
        <Route path={"/sign"} component={Sign} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
