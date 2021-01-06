import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ItemPage from "./pages/ItemPage";
import Locations from "./pages/Locations";
import PropertyLocation from "./pages/PropertyLocation";
import {Switch, Route} from 'react-router-dom'
import {ContextProvider} from "./context/Context"


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/locations/' component={Locations} />
        <Route path='/properties/:page' component={Properties} />
        <Route path='/property/:title' component={ItemPage} />
        <Route path='/property-location/:title/:page' component={PropertyLocation} />
      </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
