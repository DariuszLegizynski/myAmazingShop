import { Route } from "react-router-dom";

//layout
import Home from "../layout/home/Home";

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Home} />
    </div>
  );
}

export default App;
