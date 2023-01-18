import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './menuCard.js';
import NavBar from "./navBar";

const uniqueList=[ ...new Set(Menu.map((curElem)=>{
  return curElem.category;
})),"All"];


const Restaurant = () => {
    const [menuData,setmenuData]=React.useState(Menu);
    const [menuList,setmenuList]=React.useState(uniqueList);
    const filterItem=(category) =>{
      if(category==='All'){
        setmenuData(Menu);
        return;
      }
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
      })
      setmenuData(updatedList);
    }
  return (
    <>
     <h1 style={{textalign:'center',display:'block',position:'relative' ,left:'43%',top:'10px'}}>Swarup Restaurant</h1>  
     <NavBar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant