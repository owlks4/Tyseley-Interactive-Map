import './style.css'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import bg from "/big_tyseley.png"
import redMarker from "/marker-icon.png"
import markerShadow from "/marker-shadow.png"

var map = L.map('map',{
  center: [0, 0],
  zoom:1,
  minZoom: 1,
  maxZoom: 4,
  crs: L.CRS.Simple
});

class MarkerInfo {
  constructor (title, position, panelImage, desc){
      this.title = title;
      this.position = position;
      this.panelImage = panelImage;
      this.desc = desc;
  }
}

let markers = [
  new MarkerInfo("River renaturalisation", [165, 310], "noneYet","This section of the river once had a natural, meandering course, which you can still see on old maps of the area.\n\nBut in the Victorian era, it was artificially straightened into what we see today.\n\nIn the future, we’d like to restore the meanders to this section of the river - which would be of great ecological benefit to the wildlife."),
  new MarkerInfo("St Cyprian's Church", [102, 162], "noneYet", "St Cyprian’s Church is the parish church of Hay Mills.\n\nThe building originally served as a schoolroom for the children of workers at the neighbouring Webster & Horsfall wire factory.\n\nIn 1873, it was adapted into a church, and gained its characteristic tower and buttresses. The church remains in use to this day."),
  new MarkerInfo("Webster & Horsfall", [75, 180], "noneYet", "Webster & Horsfall is a local business that has been manufacturing specialist wire in Birmingham since 1720.\n\nIt’s since played a part in major world events, such as the laying of the first successful transatlantic telegraph cable in the 1860s.\n\nIn 2010, the reshaping of the business allowed for the release of a large amount of industrial land for redevelopment: Tyseley Energy Park."),
  new MarkerInfo("Future NCDH building", [60, 144], "noneYet", "The National Centre for the Decarbonisation of Heat will enable the development of solutions for  decarbonising Britain’s heat infrastructure over the next 30 years.\n\nWidespread inefficient insulation and expensive heat pump installation are problems that need to be solved in order to prevent a climate crisis, and the NCDH will help to coordinate efforts, as well as with the training of engineers."),
  new MarkerInfo("Energy Innovation Centre", [53, 170], "noneYet", "The Birmingham Energy Innovation Centre is developing new ways to use renewable energy sources - such as hydrogen fuel cells, energy storage, and improved recycling capabilities.\n\nBuilt in 2020, it is one of several green energy buildings intended to be built within the energy park."),
  new MarkerInfo("Low carbon refueling", [25, 182], "noneYet", "This refueling station provides sustainable\nfuel for both public and commercial vehicles – including green hydrogen, electric charging,\nand green substitutes for diesel fuels.\nThis is also the prospective future location of Ammonia-to-Hydrogen infrastructure in collaboration with Ammogen."),
  new MarkerInfo("Phase 3", [25, 130], "noneYet", "This space is marked out for a future development. Tyseley Energy Park Phase 3: Coming soon!"),
  new MarkerInfo("Biomass Power Plant", [8, 150], "noneYet", "This 10MW biomass power plant generates electricity from waste wood that would otherwise have gone to landfill.\n\nOver the course of its operation, it has diverted over 72,000 tonnes of material from going to waste, and generates enough sustainable power to supply the equivalent of 17,000 local homes!"),
  new MarkerInfo("Veolia Energy Recovery", [-3, 66], "noneYet", "The Veolia energy recovery plant generates energy by burning rubbish that would otherwise have gone to landfill.\n\nAccess to the household recycling centre is via the Southeast entrance on James Road."),
  new MarkerInfo("New outdoor spaces", [-5, -12], "noneYet", "New outdoor spaces by the River Cole, particularly with families in mind, will provide new ways for the community to use the area.\n\nMoreover, they'll be constructed from sustainable materials - predominantly wood - so they'll be environmentally friendly and fit right into the existing surroundings."),
  new MarkerInfo("Former Ackers weir", [-105, -74], "noneYet", "It is now recognised that weirs can be detrimental to wildlife in rivers – for example, by impeding the movement of fish so that they cannot complete their natural migrations.\n\nIn 2022, the Victorian weir in this location was finally dismantled - restoring this area of the river to a more natural state.\n\nIn addition, the new hibernacula built nearby now provides a sustainable shelter for local wildlife!")
]

var imageUrl = bg,
    imageBounds = [[-219.706070287 , -350], [219.706070287 , 350]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var redIcon = L.icon({
  iconUrl: redMarker,
  shadowUrl: markerShadow,
  iconAnchor:   [12, 41],
  shadowAnchor: [12, 41]
  });

for (let i = 0; i < markers.length; i++){
  let m = markers[i];
  L.marker(m.position,  {icon: redIcon, title: m.title, riseOnHover: true, autoPanOnFocus: true}).addTo(map)
}