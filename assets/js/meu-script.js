let p = document.querySelector('p')
function camadas() {
    //Camadas do mapa
    //Google Satelite
    googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
    //googleSat.addTo(map)

    //Google Streat
    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
    //googleStreets.addTo(map)

    //Google Hibrido
    googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
    //googleHybrid.addTo(map)

    //Google Terrain
    googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
    //googleTerrain.addTo(map)

    //Default Map
    defaultMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'), {
        maxZoom: 20
    }
    //defaultMap.addTo(map)
}


function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    //Icone da posicao inicial
    var posicao = L.icon({
        iconUrl: 'assets/img/red_marker.png',
        iconSize: [40, 40],
        // iconAnchor: [22, 94],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });

    L.marker([pos.coords.latitude, pos.coords.longitude], { icon: posicao }).addTo(map)
        .bindPopup('Voce esta aqui')
        .openPopup();


    //funcao de camadas do mapa
    camadas()

    //adiccao de pontos no mapa
    var myIcon = L.icon({
        iconUrl: 'assets/img/gps.png',
        iconSize: [40, 40],
        // iconAnchor: [22, 94],
        // popupAnchor: [-3, -76],
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });
    //Hospitais gerais
    var HospitalGeralMavalane = L.marker([-25.93033, 32.58613], { icon: myIcon }).bindPopup('Hospital Geral de Mavalane'),
        HospitalGeralMachava = L.marker([-25.91429, 32.53155], { icon: myIcon }).bindPopup('Hospital Geral da Machava'),
        HospitalGeralJoseMacamo = L.marker([-25.947144, 32.543960], { icon: myIcon }).bindPopup('Hospital Geral Jose Macamo'),
        HospitalGeralChamanculo = L.marker([-25.951050, 32.555408], { icon: myIcon }).bindPopup('Hospital Geral de Chamanculo'),
        HospitalGeralPolanaCanico = L.marker([-25.935561, 32.611509], { icon: myIcon }).bindPopup('Hospital Geral da Polana Canico');
    //Grupo de Hospitais Gerais
    var HospitaisGerais = L.layerGroup([HospitalGeralMavalane, HospitalGeralMachava, HospitalGeralJoseMacamo, HospitalGeralChamanculo, HospitalGeralPolanaCanico]);


    //Hospitais Centrais
    var HospitalCentralMaputo = L.marker([-25.96917736197402, 32.58871078491212], { icon: myIcon }).bindPopup('Hospital Central de Maputo');
    //Grupo de Hospitais Centrais
    var HospitaisCentrais = L.layerGroup([HospitalCentralMaputo]);


    //Hospital Militar
    var HospitalMilitarMaputo = L.marker([-25.957234971186132, 32.59212255477906], { icon: myIcon }).bindPopup('Hospital Central de Maputo');
    //Grupo de Hospitais Militares
    var HospitaisMilitares = L.layerGroup([HospitalMilitarMaputo]);



    //Controlador de camadas
    var baseMaps = {
        "Default": defaultMap,
        "Google Streets": googleStreets,
        "Google Satelite": googleSat,
        "Google Hibrido": googleHybrid
    };

    var overlayMaps = {
        "Centro de Saude": HospitaisGerais,
        "Posto de Saude": HospitaisGerais,
        "Hospital Distrital": HospitaisGerais,
        "Hospital Rural": HospitaisGerais,
        "Hospital Geral": HospitaisGerais,
        "Hospital Provincial": HospitaisGerais,
        "Hospital Central": HospitaisCentrais,
        "Hospital Especializado": HospitaisGerais,
        "Hospital Militar": HospitaisMilitares

    };
    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

    //mostrar coordenadas do cursor no rodape
    map.on('mousemove', function (e) {
        document.getElementsByClassName('coordinate')[0].innerHTML = 'Latitude: ' + e.latlng.lat + ' Longitude: ' + e.latlng.lng;
        console.log(e.latlng.lat + ', ' + e.latlng.lng)
    })





}





function error(err) {
    console.log(err)
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});



