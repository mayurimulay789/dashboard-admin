import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout1 from './Components/MainLayout1';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
function App() {
  return (
   <div>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<MainLayout1/>}>
  <Route index element={<Dashboard/>}/>
  <Route index element={<Product/>}/>

  </Route>
</Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
