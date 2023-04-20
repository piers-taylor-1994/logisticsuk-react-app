import logo from './logo.png';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import ROUTES from './routes';
import Menu from './menu/Menu';

function App() {
  const routes = useRoutes(ROUTES);

  return (
    <div className="app">
      <header className="app-header"><img src={logo} className="app-logo" alt="logo" /></header>
      <Menu />
      {routes}
    </div>
  );
}

export default App;
