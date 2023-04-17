
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Inicio from "./components/Inicio/inicio";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Inicio/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
