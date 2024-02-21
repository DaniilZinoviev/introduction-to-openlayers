import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import StadiaMaps from 'ol/source/StadiaMaps.js';
import View from "ol/View.js";
import { OverviewMap, defaults as defaultControls } from "ol/control.js";

const overviewMapControl = new OverviewMap({
  // На эти классы добавим CSS (см. style.css)
  className: "ol-overviewmap ol-custom-overviewmap",
  layers: [
    // NOTE: Layers from Stadia Maps do not require an API key for localhost development or most production
    // web deployments. See https://docs.stadiamaps.com/authentication/ for details.
    new TileLayer({
      source: new StadiaMaps({
        layer: "stamen_watercolor",
        // apiKey: 'OPTIONAL'
      }),
    }),
    new TileLayer({
      source: new StadiaMaps({
        layer: "stamen_terrain_labels",
        // apiKey: 'OPTIONAL'
      }),
    }),
  ],
  collapseLabel: "\u00BB",
  label: "\u00AB",
  collapsed: false,
});

const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  layers: [new TileLayer({ source: new OSM() })],
  target: "map",
  view: new View({ center: [500000, 6000000], zoom: 7 }),
});
