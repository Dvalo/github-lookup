import { Route, Switch } from "react-router-dom";

import Header from "./componenets/header/Header";
import SearchBar from "./componenets/search/SearchBar";

import SingleProfile from "./componenets/profile/SingleProfile";
import FavouriteProfiles from "./componenets/profile/FavouriteProfiles";

import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={FavouriteProfiles} />
        <Route path="/:username" component={SingleProfile} />
      </Switch>
    </>
  );
}

export default App;
