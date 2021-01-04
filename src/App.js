import Home from "./pages/Home";
import Properties from "./pages/Properties";
import {Switch, Route} from 'react-router-dom'
import {ContextProvider} from "./context/Context"


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/properties/:page' component={Properties} />
      </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
