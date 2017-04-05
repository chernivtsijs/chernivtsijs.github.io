const mapboxURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

const venue = L
  .map('venue', {
    scrollWheelZoom: false,
  })
  .setView(coords, 16);

L
  .tileLayer(mapboxURL, {
    maxZoom: 18,
    id: 'mapbox.streets',
  })
  .addTo(venue);

L
  .marker(coords)
  .addTo(venue)
  .openPopup();
