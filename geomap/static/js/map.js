// Adicione seu código JS personalizado aqui

// Crie um mapa Folium
var map = L.map('map').setView([0, 0], 2);

// Adicione um layer de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker;

// Função para adicionar ou mover marcador no clique
function onMapClick(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;

    // Remover o marcador existente se houver
    if (marker) {
        map.removeLayer(marker);
    }

    // Criar um novo marcador e adicionar ao mapa
    marker = L.marker([lat, lon]).addTo(map);

    // Adicionar um PopUp com as coordenadas
    marker.bindPopup("Latitude: " + lat + "<br>Longitude: " + lon).openPopup();

    // Enviar as coordenadas para o servidor 
    fetch('/get_coordinates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat: lat, lon: lon }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Adicionar o evento para o clique no mapa
map.on('click', onMapClick);
