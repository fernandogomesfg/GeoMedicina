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
    console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    //Icone da posicao inicial
    var posicao = L.icon({
        iconUrl: 'assets/img/red_marker.png',
        iconSize: [40, 40],
    });

    L.marker([pos.coords.latitude, pos.coords.longitude], { icon: posicao }).addTo(map)
        .bindPopup('Voce esta aqui')
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

    /*==============================================
            Nivel Primario - Centro de Saude
    ================================================*/
    //Centro de Saude
    var CentroSaudeChamanculo = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude de Chamanculo'),
        CentroSaudeN14 = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude de N 14'),
        CentroSaudeXipamanine = L.marker([-25.93832, 32.56572], { icon: primario }).bindPopup('Centro de Saude de Xipamanine'),
        CentroSaudeAltoMae = L.marker([-25.96011, 32.57011], { icon: primario }).bindPopup('Centro de Saude do Alto-Mae'),
        CentroSaudePorto = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude do Porto'),
        CentroSaudeMaxaquene = L.marker([-25.9742, 32.58319], { icon: primario }).bindPopup('Centro de Saude de Maxaquene'),
        CentroSaudeJoseMacamo = L.marker([-25, 324], { icon: primario }).bindPopup('Centro de Saude Jose Macamo'),
        CentroSaudeInhagoia = L.marker([-25.91635, 32.55856], { icon: primario }).bindPopup('Centro de Saude de Inhagoia'),
        CentroSaudeBagamoyo = L.marker([-25.89721, 32.57024], { icon: primario }).bindPopup('Centro de Saude de Bagamoyo'),
        CentroSaudeZimpeto = L.marker([-25.83122, 32.57763], { icon: primario }).bindPopup('Centro de Saude de Zimpeto'),
        CentroSaudeMagoanineTendas = L.marker([-25.84639, 32.59742], { icon: primario }).bindPopup('Centro de Saude de Magoanine - Tendas'),
        CentroSaudeMagoanineMiniCentro = L.marker([-25, 32], { icon: primario }).bindPopup('')
        CentroSaudeMagoanine = L.marker([-25, 32], { icon: primario }).bindPopup('')
        CentroSaudeMagoanine = L.marker([-25, 32], { icon: primario }).bindPopup('')
        CentroSaudeMagoanine = L.marker([-25, 32], { icon: primario }).bindPopup('')
        CentroSaudeMagoanine = L.marker([-25, 32], { icon: primario }).bindPopup('')
        CentroSaudeMagoanine = L.marker([-25, 32], { icon: primario }).bindPopup('')
        


    //Grupo de Centros de Saude
    var CentroSaude = L.layerGroup([CentroSaudeXipamanine, CentroSaudeAltoMae, CentroSaudePorto, CentroSaudeMaxaquene, CentroSaudeInhagoia, CentroSaudeBagamoyo, CentroSaudeZimpeto, CentroSaudeMagoanineTendas ])


    /*==============================================
            Nivel Primario - Postos de Saude
    ================================================*/
    //Postos de Saude
    var CentroSaudeChamanculo = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude de Chamanculo'),
        CentroSaudeN14 = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude de N 14')
        
        


    //Grupo de Postos de Saude
    var PostoSaude = L.layerGroup([])


    /*==============================================
                    Nivel Secundario
    ================================================*/
    //Hospitais gerais
    var HospitalGeralMavalane = L.marker([-25.93033, 32.58613], { icon: secundario }).bindPopup('Hospital Geral de Mavalane'),
        HospitalGeralMachava = L.marker([-25.91429, 32.53155], { icon: secundario }).bindPopup('Hospital Geral da Machava'),
        HospitalGeralJoseMacamo = L.marker([-25.947144, 32.543960], { icon: secundario }).bindPopup('Hospital Geral Jose Macamo'),
        HospitalGeralChamanculo = L.marker([-25.951050, 32.555408], { icon: secundario }).bindPopup('Hospital Geral de Chamanculo'),
        HospitalGeralPolanaCanico = L.marker([-25.935561, 32.611509], { icon: secundario }).bindPopup('Hospital Geral da Polana Canico');
    //Grupo de Hospitais Gerais
    var HospitaisGerais = L.layerGroup([HospitalGeralMavalane, HospitalGeralMachava, HospitalGeralJoseMacamo, HospitalGeralChamanculo, HospitalGeralPolanaCanico]);


    /*==============================================
                    Nivel Quaternario
        Centrais,  Especializados e Militar
    ================================================*/
    //: Hospitais Centrais, Hospitais Especializados, Hospital Militar
    //Hospitais Centrais
    var HospitalCentralMaputo = L.marker([-25.96917736197402, 32.58871078491212], { icon: quaternario }).bindPopup('Hospital Central de Maputo');
    //Grupo de Hospitais Centrais
    var HospitaisCentrais = L.layerGroup([HospitalCentralMaputo]);


    //Hospitais Especializados
    var HospitalPsiquiatricoInfulene = L.marker([0, 0], { icon: quaternario }).bindPopup('Hospital Psiquiatrico de Infulene');
    //Grupo de Hospitais Especializados
    var HospitaisEspecializados = L.layerGroup([HospitalPsiquiatricoInfulene]);


    //Hospitais Militares
    var HospitalMilitarMaputo = L.marker([-25.957234971186132, 32.59212255477906], { icon: quaternario }).bindPopup('Hospital Militar de Maputo');
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
        "Centro de Saude": CentroSaude,
        "Posto de Saude": HospitaisGerais,
        "Hospital Distrital": HospitaisGerais,
        "Hospital Rural": HospitaisGerais,
        "Hospital Geral": HospitaisGerais,
        "Hospital Provincial": HospitaisGerais,
        "Hospital Central": HospitaisCentrais,
        "Hospital Especializado": HospitaisEspecializados,
        "Hospital Militar": HospitaisMilitares,

    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);

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



