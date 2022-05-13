import { Route, Routes } from 'react-router-dom';
import Inicio  from './componentes/inicio/Inicio';
import { Mesero } from './componentes/mesero/Mesero';
import { Pedidos } from './componentes/mesero/Pedidos';
import Cocina from './componentes/cocina/Cocina';


const App = () => {
  
  return (
    <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Mesero" element={<Mesero />} />
          <Route path="/Pedidos" element={<Pedidos />} />
          <Route path="/Cocina" element={<Cocina />} />
    </Routes>
  );
}

export default App;