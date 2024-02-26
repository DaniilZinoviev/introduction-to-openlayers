import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Overlay } from "ol";
import { toLonLat } from "ol/proj";
import { createStringXY } from "ol/coordinate";

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  target: document.getElementById("map"),
  view: new View({ center: [0, 0], zoom: 3 }),
});

// Попап (без указанного `position` он не будет показан)
const popup = document.getElementById("popup");
const overlay = new Overlay({
  element: popup,
  positioning: "bottom-center",
  offset: [0, -4],
});
map.addOverlay(overlay);

map.on("click", (event) => {
  // Переводим координаты в географические (широта, долгота)
  const [lon, lat] = toLonLat(event.coordinate);

  // Отображаем в формате "широта, долгота"
  const coordsEl = popup.querySelector("#coordinates");
  coordsEl.textContent = createStringXY(6)([lat, lon]);

  // Закрепляем оверлей за координатой
  overlay.setPosition(event.coordinate);
});
