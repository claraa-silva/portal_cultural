import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// 📍 Lista de universidades com coordenadas aproximadas
const universidades = [
  // Argentina
  { nome: "Universidad de Buenos Aires", coords: [-34.60, -58.38] }, // Buenos Aires :contentReference[oaicite:0]{index=0}
  { nome: "Universidad Nacional de La Plata", coords: [-34.92, -57.95] },
  { nome: "Universidad Nacional de Rosario", coords: [-32.95, -60.66] },
  { nome: "Universidad Nacional de Misiones", coords: [-27.36, -55.90] },
  { nome: "Universidad de Morón", coords: [-34.65, -58.62] },

  // Bolívia
  { nome: "Universidad de Aquino Bolivia", coords: [-16.50, -68.15] },
  { nome: "Universidad Mayor de San Andrés", coords: [-16.50, -68.15] },
  { nome: "Universidad Autónoma Gabriel René Moreno", coords: [-17.78, -63.18] },

  // Colômbia
  { nome: "Universidad Nacional de Colombia", coords: [4.64, -74.08] },
  { nome: "Universidad de Antioquia", coords: [6.26, -75.56] },
  { nome: "Pontificia Universidad Javeriana", coords: [4.63, -74.06] },

  // Paraguai
  { nome: "Universidad Nacional de Asunción", coords: [-25.30, -57.58] },
  { nome: "Universidad Politécnica y Artística del Paraguay", coords: [-25.28, -57.63] },
  { nome: "Universidad Sudamericana", coords: [-25.26, -57.57] },
  { nome: "Universidad Autónoma de San Sebastián", coords: [-25.29, -57.60] },

  // Peru
  { nome: "Universidad Nacional Mayor de San Marcos", coords: [-12.05, -77.04] },
  { nome: "Pontificia Universidad Católica del Perú", coords: [-12.07, -77.08] },
  { nome: "Universidad Peruana Cayetano Heredia", coords: [-12.02, -77.05] },

  // Uruguai
  { nome: "Universidad de la República", coords: [-34.90, -56.16] },
  { nome: "Universidad ORT Uruguay", coords: [-34.92, -56.15] },
  { nome: "Universidad Católica del Uruguay", coords: [-34.90, -56.19] },

  // Venezuela
  { nome: "Universidad Central de Venezuela", coords: [10.48, -66.90] },
  { nome: "Universidad de Los Andes", coords: [8.59, -71.14] },
  { nome: "Universidad Simón Bolívar", coords: [10.40, -66.88] },
];

function Mapa() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        center={[-15, -60]} // Centro da América do Sul
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {universidades.map((uni, index) => (
          <Marker key={index} position={uni.coords}>
            <Popup>{uni.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;