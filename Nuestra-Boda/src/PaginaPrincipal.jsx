import React from "react";
import Carousel from "./componentes-encabezado/carrusel";
import Itinerario from "./componentes-encabezado/Itinerario";
import Preguntas from "./componentes-encabezado/Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import Frase from "./componentes-encabezado/Frase";
import DireccionEvento from "./componentes-encabezado/Ubicacion";
import NuestraHistoria from "./componentes-encabezado/Galeria";
import FraseBiblica from "./componentes-encabezado/Frasefinal";
import Vestimenta from "./componentes-encabezado/vestimenta";
import AlbumCompartido from "./componentes-encabezado/album";
import ImagenSeparacion from "./componentes-encabezado/imagenseparacion";


export default function PaginaPrincipal() {


  return (
    <div >

  <Frase/>

  <DireccionEvento/>

  <NuestraHistoria/>

  <Itinerario />
  
  <FraseBiblica/>

  <Vestimenta/>

  <AlbumCompartido/>

  <Preguntas/>
  
  <Regalos/>

  <ImagenSeparacion/>
  
  <Confirmacion/>
  

      </div>      
  );
}
