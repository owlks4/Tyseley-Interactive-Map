import './style.css'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import bg from "/big_tyseley.png"

var map = L.map('map',{
  center: [0, 0],
  zoom:1,
  minZoom: 1,
  maxZoom: 4
});

var imageUrl = bg,
    imageBounds = [[-251.092651757, -400], [251.092651757, 400]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var greenIcon = L.icon({
  iconUrl: 'filename',
  });

L.marker([9.0820, 8.6753],  {title: "TEXT", riseOnHover: true, autoPanOnFocus: true}).addTo(map)