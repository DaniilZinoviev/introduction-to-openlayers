import { Map, View } from "ol";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";

const map = new Map({
  target: document.getElementById("map"),
  layers: [
    // Мы используем тот же TileLayer, но с другим источником данных (source)
    new TileLayer({
      // Многие тайлы построены на принципе передачи z,x,y для получения нужных тайлов
      // Для того, что бы добавить для них поддержку, достаточно использовать класс XYZ с плейсхолдерами
      source: new XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/" + "World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      }),
    }),
  ],
  view: new View({
    center: [4517934.495704523, -2284501.936731553],
    zoom: 5,
  }),
});
