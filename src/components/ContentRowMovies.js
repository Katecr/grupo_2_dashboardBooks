import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard"
    

function ContentRowMovies() {
   
const [dataProducto, setDataProducto] = useState([]);
  
  useEffect(() => {
   fetch('/api/products')
  .then(response => response.json())
  .then(dataProducto => setDataProducto(dataProducto))
  },[]);
  let rowProducto;
  if (!dataProducto.meta){
      rowProducto = {
      title: 'Total Productos',
      icon: 'fa-book',
      quantity: 0
    }
  } else {
     rowProducto = {
      title: 'Total Productos',
      icon: 'fa-book',
      quantity: dataProducto.meta.total
    }
  }

   const [dataUsuario, setDataUsuario] = useState([]);
  
  useEffect(() => {
   fetch('/api/users')
  .then(response => response.json())
  .then(dataUsuario => setDataUsuario(dataUsuario))
  },[]);
  let rowUsuarios;
  if (!dataUsuario.meta){
    rowUsuarios = {
      title: 'Total Usuarios',
      icon: 'fa-user',
      quantity: 50
    };
  } else {
    rowUsuarios = {
      title : "Total Usuarios",
      icon: 'fa-user',
      quantity: dataUsuario.meta.total
    }
  }
  
  const [dataCategoria, setDataCategoria] = useState([]);
  
  useEffect(() => {
   fetch('/api/category')
  .then(response => response.json())
  .then(dataCategoria => setDataCategoria(dataCategoria))
  },[]);
  let rowCategoria;
  if (!dataCategoria.meta){
    rowCategoria = {
      title: 'Total Categorias',
      icon: 'fa-award',
      quantity: 0
    };
  } else {
    rowCategoria = {
      title: 'Total Categorias',
      icon: 'fa-award',
      quantity: dataCategoria.meta.total
    }
  }

    return (
        <div className="row">
            <SmallCard {...rowProducto} key={1}/>
            <SmallCard {...rowCategoria} key={2}/>
            <SmallCard {...rowUsuarios} key={3}/>
            
        </div>
        
    )

}


export default ContentRowMovies; 