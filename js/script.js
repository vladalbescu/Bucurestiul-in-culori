var colors = ["#aadd22", "#9911aa", "#0088ff", "#ffaa00", "#ff7700", "#ff0033"];
var southWest = L.latLng(44.3, 25.7),
  northEast = L.latLng(44.6, 26.5),
  bounds = L.latLngBounds(southWest, northEast);

var map = L.map("map", {
  center: [44.435, 26.095],
  zoom: 11,
  maxBounds: bounds,
  zoomControl: false,
  scrollWheelZoom: false,
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 11,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoidmxhZGFsbW9uZCIsImEiOiJja2JpN3BuaXQwY2szMnpxdnpjNWZjbHJzIn0.OigDrBj0ZK0RRqrKehEpDg",
  }
).addTo(map);

// Toggle scrollwheel zoom when clicking on map
map.on("click", function () {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
  } else {
    map.scrollWheelZoom.enable();
  }
});

for (var i = 0; i < polygons.length; i++) {
  var polygon = L.polygon(polygons[i], {
    fillColor: colors[i],
    fillOpacity: 0.5,
    color: colors[i],
    weight: 1,
  }).addTo(map);
}

// Shrink header on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").classList.add("header--scrolled");
  } else {
    document.getElementById("header").classList.remove("header--scrolled");
  }
}
