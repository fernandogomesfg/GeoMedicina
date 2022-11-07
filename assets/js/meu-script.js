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
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
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
    //console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    var map;
    map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    //Icone da posicao inicial
    var posicao = L.icon({
        iconUrl: 'assets/img/red_marker.png',
        iconSize: [40, 40],
    });

    L.marker([pos.coords.latitude, pos.coords.longitude], { icon: posicao }).addTo(map)
        .bindPopup('Você esta aqui')
        .openPopup();

    //funcao de camadas do mapa
    camadas()


    /*==============================================
                    Icones
    ================================================*/
    //Nivel Primario
    var primario = L.icon({
        iconUrl: 'assets/img/NivelPrimario.png',
        iconSize: [40, 40],
    });

    //Nivel Secundario
    var secundario = L.icon({
        iconUrl: 'assets/img/NivelSecundario.png',
        iconSize: [40, 40],
    });

    //Nivel Terciario 
    var terciario = L.icon({
        iconUrl: 'assets/img/NivelTerciario.png',
        iconSize: [40, 40],
    });

    //Nivel Quaternario
    var quaternario = L.icon({
        iconUrl: 'assets/img/NivelQuaternario.png',
        iconSize: [40, 40],
    });


    //Controlador de camadas
    var baseMaps = {
        "Default": defaultMap,
        "Google Streets": googleStreets,
        "Google Satelite": googleSat,
        "Google Hibrido": googleHybrid
    };

    function onEachFeature(feature, unid_sanitarias) {
        if (feature.properties && feature.properties.Nome) {
            unid_sanitarias.bindPopup(
                `
                <table>
                    <tr>
                        <td ><b>Nome: </b></td>                  
                        <td></b>${feature.properties.Nome} </br></td>
                    </tr>

                    <tr>
                        <td><b>Categoria: </b></td> 
                        <td></b>${feature.properties.Categoria}</td>
                    </tr>
                    
                    <tr>
                        <td><b>Localizacao:</b>
                        <td>${feature.properties.Localizacao}</td>
                    </tr>
                </table>
                
                `);

        }
    }

    L.control.layers(baseMaps).addTo(map);
    L.Control.geocoder().addTo(map);    //search de locais
    L.geoJSON(unid_sanitarias, { onEachFeature: onEachFeature }).addTo(map)
    //L.geoJSON(distritos_Maputo).addTo(map)
    //L.geoJSON(distritosMaputoCity).addTo(map)

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