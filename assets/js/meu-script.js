let p = document.querySelector('p')
function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Voce esta aqui')
        .openPopup();
    /*
        L.marker([-25.93033,32.58613]).addTo(map)
            .bindPopup('Hospital Geral de Mavalane')
            .openPopup();
            */
}


function error(err) {
    console.log(err)
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

position_gps
