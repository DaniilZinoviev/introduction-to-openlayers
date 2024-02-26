import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import Draw from "ol/interaction/Draw";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";

const map = new Map({
  target: document.getElementById("map"),
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [3668276.5603219555, -143279.18145446997], zoom: 7 }),
});

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
  style: new Style({
    // Заливка полигона
    fill: new Fill({ color: "rgba(255, 255, 255, 0.4)" }),
    // Контур полигона
    stroke: new Stroke({ color: "#3399CC", width: 2 }),
    // Стили для точки
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "#3399CC" }),
      stroke: new Stroke({ color: "#fff", width: 2 }),
    }),
  }),
});
map.addLayer(layer);

// Взаимодействия выделены в класс, вроде Draw и других
const interaction = new Draw({
  type: "Polygon",
  source: source,
});
map.addInteraction(interaction);

// Коллбек на завершение рисовании фичи
interaction.on("drawend", (event) => {
  const geometry = event.feature.getGeometry();
  console.log({
    type: geometry.getType(),
    coordinates: geometry.getCoordinates(),
  });
});
