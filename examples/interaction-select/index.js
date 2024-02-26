import { Map, Overlay, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import Select from "ol/interaction/Select";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import { Fill, Stroke } from "ol/style";
import CircleStyle from "ol/style/Circle";
import GeoJSON from "ol/format/GeoJSON.js";
import features from "./features.json";
import { getCenter } from "ol/extent";

const map = new Map({
  target: document.getElementById("map"),
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [3542481.374372363, 30397.482611367595], zoom: 7 }),
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

const interaction = new Select({
  // Мы можем передать VectorSource или список фич
  source: source,
  style: new Style({
    fill: new Fill({ color: "rgba(255, 255, 255, 0.5)" }),
    stroke: new Stroke({ color: "#674ea7", width: 4 }),
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "#674ea7" }),
      stroke: new Stroke({ color: "#fff", width: 4 }),
    }),
  }),
});
map.addInteraction(interaction);

// Попап
const popup = document.getElementById("popup").cloneNode(true);
const popupOverlay = new Overlay({
  element: popup,
  positioning: "bottom-center",
  offset: [0, 0],
});
map.addOverlay(popupOverlay);

// Опционально: добавим оверлей сверху над выделенной геометрией
interaction.on("select", (event) => {
  const feature = event.selected[0];
  if (!feature) {
    popupOverlay.setPosition(undefined);
    return;
  }
  const center = getCenter(feature.getGeometry().getExtent());
  const title = feature.getProperties().name;
  popup.querySelector("#title").textContent = title;
  popupOverlay.setPosition(center);
});
