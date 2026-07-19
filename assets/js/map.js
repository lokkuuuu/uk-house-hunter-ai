let map;


function loadMap(lat, lng){



if(map){

map.remove();

}



map =
L.map('map')
.setView(
[lat,lng],
14
);



L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{

maxZoom:19,

}
)
.addTo(map);



L.marker(
[lat,lng]
)
.addTo(map)
.bindPopup(
"Property Location"
)
.openPopup();



}