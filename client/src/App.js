import './App.css';
import { GLobalStyle } from './shared-styles/global.styled';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/theme';

const  App = () => {
  return (
    <ThemeProvider theme={defaultTheme}> 
    <GLobalStyle />
    <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/dashboard"  />
        </Switch>
    </div>
    </ThemeProvider>

  );
}

export default App;
