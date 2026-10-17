
import React, { useState } from "react";

import Portada from "./portada";
import Carousel from "./componentes-encabezado/carrusel";
import Itinerario from "./componentes-encabezado/Itinerario";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import DireccionEvento from "./componentes-encabezado/Ubicacion";
import NuestraHistoria from "./componentes-encabezado/Galeria";
import Vestimenta from "./componentes-encabezado/vestimenta";
import AlbumCompartido from "./componentes-encabezado/album";
import ImagenSeparacion from "./componentes-encabezado/imagenseparacion";
import Musica from "./componentes-encabezado/musica";
import Padres from "./componentes-encabezado/Padres";

export default function PaginaPrincipal() {
  const [mostrarContenido, setMostrarContenido] =
    useState(false);

  return (
    <div>
      {/* MÚSICA INDEPENDIENTE */}
      <Musica
        onContinuar={() => setMostrarContenido(true)}
      />

      {/* PORTADA ORIGINAL */}
      <Portada mostrarContenido={mostrarContenido} />

      <Padres/>

      {/* RESTO DE LA INVITACIÓN */}
      <DireccionEvento />

      <NuestraHistoria />

      <Itinerario />

      <Vestimenta />

      <AlbumCompartido />

      <Regalos />

      <Confirmacion />

      <ImagenSeparacion />
    </div>
  );
}
