import React, { Component } from 'react';
import { render } from 'react-dom';
import Secciones from './components/Secciones.jsx';
import Articulos from './components/Articulos.jsx';

// render(
//     <Secciones/>
//     , document.getElementById('secciones')
// );
render(
    <Articulos/>
    , document.getElementById('articulos')
);