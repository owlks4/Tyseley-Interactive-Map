import './style.css'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

var map_init = L.map('map',{
  center: [0, 0],
  zoom:1
});


var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
    imageBounds = [[0, 0], [40.773941, 74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map_init);

var greenIcon = L.icon({
  iconUrl: 'filename',
  });

L.marker([9.0820, 8.6753],  {icon: greenIcon}).addTo(map_init)