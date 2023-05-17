import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import {Inicio} from"../components/Inicio";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { Signup } from "../components/Signup/Signup";
import { ProductList } from "../components/Product/ProductList"
import { Header } from "../components/Product/Header";
import { Carrito } from "../components/Product/Carts"
import { auth } from "..//firebase";
import React, { useState, useEffect } from 'react';


export function MyRoutes() {
    const [userName,setUserName] =useState([])
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
            setUserName(user.displayName)
        }else setUserName("")
      })  
    },[])
    return(
        <Router>
            <Routes>       
                <Route exact path="/" element={<Home name={userName}/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/ProductList" element={<ProductList />} />
                <Route exact path="/Header" element={<Header />} />
                <Route exact path="/Carts" element={<Carrito />} />  
                
            </Routes>
        </Router>
    );

};