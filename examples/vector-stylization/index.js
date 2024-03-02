import { Feature, Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Circle, LineString, MultiPoint, Point, Polygon } from "ol/geom";
import { Fill, Stroke, Style } from "ol/style";
import CircleStyle from "ol/style/Circle";

const map = new Map({
  target: document.getElementById("map"),
  layers: [new TileLayer({ source: new OSM(), opacity: 0.5 })],
  view: new View({ center: [6211761.822606514, 2412244.33194488], zoom: 7 }),
});

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
  // Для стилизации используем класс Style
  style: new Style({
    // Заливка
    fill: new Fill({ color: "rgba(230, 161, 79, 0.4)" }),
    // Обводка
    stroke: new Stroke({ color: "rgba(230, 161, 79, 1)", width: 2 }),
    // Стиль для точки
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "rgba(230, 161, 79, 0.4)" }),
      stroke: new Stroke({ color: "rgba(230, 161, 79, 1)", width: 2 }),
    }),
  }),
});

// Нарисуем точку
const point = new Feature({
  geometry: new Point([6216653.792416765, 2341922.265922518]),
});
source.addFeature(point);

// Нарисуем линию
const line = new Feature({
  geometry: new LineString([
    [6098023.524518171, 2417747.7979814108],
    [6195862.920723196, 2569398.8620992005],
    [6290033.3395705335, 2406740.865908345],
  ]),
});
source.addFeature(line);

// Нарисуем полигон
const polygon = new Feature({
  geometry: new Polygon([
    [
      [5929250.566064502, 2369439.5961051816],
      [5857094.011363296, 2479508.916835835],
      [5968386.324546512, 2583463.275303675],
      [6096800.532065609, 2503968.765887092],
      [6096800.532065609, 2503968.765887092],
      [5929250.566064502, 2369439.5961051816],
    ],
  ]),
});
polygon.setStyle([
  // Стили для полигона
  new Style({
    fill: new Fill({ color: "rgba(193, 211, 63, 0.4)" }),
    stroke: new Stroke({ color: "rgba(193, 211, 63, 1)", width: 2 }),
  }),
  // Стили для вершин
  new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "rgba(255, 255, 255, 0.7)" }),
      stroke: new Stroke({ color: "rgba(147, 211, 63, 1)", width: 4 }),
    }),
    // Чтобы стилизовать часть геометрии, достаточно получить желаемые части
    // Это могут быть грани для полигона или линий, центр для окружности, вершины полигона
    geometry: function (feature) {
      // Получаем все вершины
      const coordinates = feature.getGeometry().getCoordinates()[0];
      return new MultiPoint(coordinates);
    },
  }),
]);
polygon.setStyle([
  // Стили для полигона
  new Style({
    fill: new Fill({ color: "rgba(193, 211, 63, 0.4)" }),
    stroke: new Stroke({ color: "rgba(193, 211, 63, 1)", width: 2 }),
  }),
  // Стили для вершин
  new Style({
    image: new CircleStyle({
      radius: 6,
      fill: new Fill({ color: "rgba(255, 255, 255, 0.7)" }),
      stroke: new Stroke({ color: "rgba(147, 211, 63, 1)", width: 4 }),
    }),
    // Чтобы стилизовать часть геометрии, достаточно получить желаемые части
    // Это могут быть грани для полигона или линий, центр для окружности, вершины полигона
    geometry: function (feature) {
      // Получаем все вершины
      const coordinates = feature.getGeometry().getCoordinates()[0];
      return new MultiPoint(coordinates);
    },
  }),
]);
source.addFeature(polygon);

// Нарисуем окружность
const circle = new Feature({
  geometry: new Circle([6401325.652753751, 2559003.4262524187], 100000),
});
source.addFeature(circle);

map.addLayer(layer);
