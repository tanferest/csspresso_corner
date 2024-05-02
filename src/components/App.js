// Fichero src/components/App.js
import { useState, useEffect } from 'react';
import {Route, Routes, Router} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import ls from '../services/ls';
import menuData from '../data/menu.json';
import Header from './Header';
import Homepage from './Homepage';
import Menu from './Menu';
import Conocenos from './Conocenos';

const App = () => {

  const [menu, setMenu] = useState(ls.get('menu',[]));


  useEffect(() => {
    if (menu.length === 0) {
      setMenu(menuData);
    }
  }, [menu]);

  useEffect(() => {
    ls.set('menu', menu);
  }, [menu]);

  const { pathname } = useLocation();


  // const menuList = menu
  // .map((item, index) => {
  //   console.log(item.image);
  //   const image = `${process.env.PUBLIC_URL}${item.image}`;
  //   return (
  //   <>
  //   <li key={index}>
  //     <p>{index}</p>
  //     <h3>{item.product}</h3>
  //     <img src={image} alt={item.image} />
  //     <h4>Categoría: {item.category}</h4>
  //     <p>Subcategoría: {item.subcategory}</p>
  //     <p>Precio: {item.price}</p>
  //     <p>{item.description}</p>
  //   </li>
  //   </>)
  // })

return <>
  <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menu" element={<Menu data={menu} location={pathname}/>}/>
      <Route path="/conocenos" element={<Conocenos location={pathname} />} />
    </Routes>
  {/* <ul>
    {menuList}
  </ul> */}
</>;
};

export default App;