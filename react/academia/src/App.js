
import ListarCurso from './componentsCurso/listarCurso';
import MenuPrincipal from './componentsPlantilla/Menu';
import Dashboard from './componentsPlantilla/Dashboard';
import FooterPrincipal from './componentsPlantilla/Footer';
import CrearCurso from './componentsCurso/crearCurso';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as  Router } from 'react-router-dom';


function App() {
  return (
    <div className="App" id="contendorprincipal">
      <MenuPrincipal></MenuPrincipal>
      <Router>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/ListarCursos" component={ListarCurso}></Route>
        <Route path="/CrearCurso" component={CrearCurso}></Route>
        <Route></Route>
      </Router>
      <FooterPrincipal></FooterPrincipal>
      
    </div>
  );
}

export default App;
