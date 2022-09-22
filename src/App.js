import { Route } from "wouter"
import MyProvider from './Provider';
import Home from './Home'
import Login from './Login'
import HomeAdmin from './HomeAdmin'

function App() {
  return (
    <MyProvider>
      <Route path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/homeAdmin" component={HomeAdmin} />
    </MyProvider>
  );
}

export default App;
