import { Route, Switch } from "react-router-dom";
import Homepage from "./views/homepage/Homepage";
import ProfilePage from "./views/profile/ProfilePage";

import "./styles/global.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:username" component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
