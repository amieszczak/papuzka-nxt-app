import React from "react";
/* import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"; */
/* import "leaflet/dist/leaflet.css"; */
import './map.css'
//
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

export default function LocationMap() {
  return (
    <MapContainer center={[50.0619, 19.9368]} zoom={15} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.0619, 19.9368]}>
      </Marker>
    </MapContainer>
  );
}