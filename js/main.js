var ny = [40.741895, -73.989300];

var map = L.map('map').setView(ny, 6);
L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19
}).addTo(map);

var marker =L.marker(ny).addTo(map);

marker.bindPopup('<h3> New York, USA. </h3>');