import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Overlay } from "ol";
import airports from "./airports.json";

const map = new Map({
  layers: [new TileLayer({ source: new OSM(), opacity: 0.7 })],
  target: document.getElementById("map"),
  view: new View({ center: [4194913.233065522, 7506074.673079068], zoom: 9 }),
});

// Попап
const popup = document.getElementById("popup").cloneNode(true);
const popupOverlay = new Overlay({
  element: popup,
  positioning: "bottom-center",
  offset: [0, -36],
});
map.addOverlay(popupOverlay);

// Функция создания маркеров
// По клику на маркер, покажется попап
function createMarker(position, title) {
  const marker = document.getElementById("marker").cloneNode(true);
  const markerOverlay = new Overlay({
    element: marker,
    positioning: "bottom-center",
    position: position,
  });
  map.addOverlay(markerOverlay);

  marker.addEventListener("click", function () {
    popupOverlay.setPosition(position);
    popup.querySelector("#title").textContent = title;
  });
}

// Создание маркеров аэропортов
airports.forEach((airport) => {
  createMarker(airport.position, airport.title);
});
