import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import MainLayout from './layouts/MainLayout';

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   );
}
export default App;
