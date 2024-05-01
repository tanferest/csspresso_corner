// Fichero src/components/App.js
import { useState, useEffect } from 'react';
// import {Route, Routes} from 'react-router-dom';

import ls from '../services/ls';
import menuData from '../data/menu.json';
import Header from './Header';
import Homepage from './Homepage';

const App = () => {

  // const [menu, setMenu] = useState(ls.get('menu',[]));


  // useEffect(() => {
  //   if (menu.length === 0) {
  //     setMenu(menuData);
  //   }
  // }, [menu]);

  // // useEffect(() => {
  // //   ls.set('menu', menu);
  // // }, [menu]);

  // console.log(menu[4]);

  // if (menu[4]) {
  //   console.log(menu[4].product);
  // } else {
  //   console.log("El objeto menu[4] no está definido o es null");
  // }

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
  //   <hr />
  //   </>)
  // })

return <>
  <Header></Header>
  <Homepage></Homepage>
  {/* <ul>
    {menuList}
  </ul> */}
</>;
};

export default App;