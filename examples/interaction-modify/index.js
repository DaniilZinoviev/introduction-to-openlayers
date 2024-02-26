import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import Modify from "ol/interaction/Modify";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import GeoJSON from "ol/format/GeoJSON.js";
import features from "./features.json";

const map = new Map({
  target: document.getElementById("map"),
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [3668276.5603219555, -143279.18145446997], zoom: 7 }),
});

const source = new VectorSource({ features: new GeoJSON().readFeatures(features) });
const layer = new VectorLayer({
  source: source,
  style: new Style({
    fill: new Fill({ color: "rgba(255, 255, 255, 0.4)" }),
    stroke: new Stroke({ color: "#3399CC", width: 2 }),
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "#3399CC" }),
      stroke: new Stroke({ color: "#fff", width: 2 }),
    }),
  }),
});
map.addLayer(layer);

const interaction = new Modify({
  // Мы можем передать VectorSource или список фич
  source: source,
});
map.addInteraction(interaction);

interaction.on('modifyend', (event) => {
  console.log(event.features);
})