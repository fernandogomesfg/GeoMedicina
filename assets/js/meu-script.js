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

function hg(){
    
}

function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    p.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 16.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    

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
        CentroSaudePorto = L.marker([-25.977116, 32.587300], { icon: primario }).bindPopup('Centro de Saude do Porto'),
        CentroSaudeMaxaquene = L.marker([-25.9742, 32.58319], { icon: primario }).bindPopup('Centro de Saude de Maxaquene'),
        CentroSaudeJoseMacamo = L.marker([-25, 324], { icon: primario }).bindPopup('Centro de Saude Jose Macamo'),
        CentroSaudeBagamoyo = L.marker([-25.89721, 32.57024], { icon: primario }).bindPopup('Centro de Saude de Bagamoyo'),
        CentroSaudeZimpeto = L.marker([-25.83122, 32.57763], { icon: primario }).bindPopup('Centro de Saude de Zimpeto'),
        CentroSaudeMagoanineTendas = L.marker([-25.84639, 32.59742], { icon: primario }).bindPopup('Centro de Saude de Magoanine - Tendas'),
        CentroSaudeMagoanineMiniCentro = L.marker([-25.8549034,32.5985053], { icon: primario }).bindPopup('Centro de Saude de Magoanine Mini-Centro'),
        CentroSaudePolanaCimento = L.marker([-25.9629903,32.5936552], { icon: primario }).bindPopup('Centro de Saude da Polana Cimento'),
        CentroSaude1Maio = L.marker([-25.948110967492187, 32.589699178934104], { icon: primario }).bindPopup('Centro de Saude 1 de Maio'),
        CentroSaudeCanico = L.marker([-25.9342732,32.6041081], { icon: primario }).bindPopup('Centro de Saude Urbano da Polana Canico'),
        CentroSaudeMavalane = L.marker([-25, 32], { icon: primario }).bindPopup('Centro de Saude de Mavalane'),
        CentroSaudeAlbazine = L.marker([-25.84229, 32.64126], { icon: primario }).bindPopup('Centro de Saude de Albazine'),
        CentroSaude1Junho = L.marker([-25.91512, 32.60994], { icon: primario }).bindPopup('Centro de Saude 1 de Junho'),
        CentroSaudeRomao = L.marker([-25.87214, 32.63013], { icon: primario }).bindPopup('Centro de Saude de Romao'),
        CentroSaudePescadores = L.marker([-25.90576, 32.65618], { icon: primario }).bindPopup('Centro de Saude dos Pescadores'),
        CentroSaudeHulene = L.marker([-25.9144, 32.59608], { icon: primario }).bindPopup('Centro de Saude de Hulene'),
        CentroSaudeMalhaganlene = L.marker([-25.95094, 32.58225], { icon: primario }).bindPopup('Centro de Saude de Malhaganlene'),
        CentroSaudeInhaca = L.marker([-26.00329, 32.92033], { icon: primario }).bindPopup('Centro de Saude de Inhaca'),
        CentroSaudeCatembe = L.marker([-26.02314, 32.57864], { icon: primario }).bindPopup('Centro de Saude de Catembe'),
        CentroSaudeBoquisso = L.marker([-25.73921, 32.53837], { icon: primario }).bindPopup('Centro de Saude de Boquisso'),
        CentroSaudeHPMatola = L.marker([-25.96635, 32.44014], { icon: primario }).bindPopup('Centro de Saude HP da Matola'),
        CentroSaudeMutsekua = L.marker([-26.011081, 32.567492], { icon: primario }).bindPopup('Centro de Saude de Mutsekua'),
        CentroSaudeMarracuene = L.marker([-25.7315676, 32.6709071], { icon: primario }).bindPopup('Centro de Saude de Marracuene'),
        CentroSaudeEduardoMondlane = L.marker([-25.6535565, 32.6721168], { icon: primario }).bindPopup('Centro de Saude Eduardo Mondlane'),
        CentroSaudeMuhalaze = L.marker([-25.7764769, 32.5183781], { icon: primario }).bindPopup('Centro de Saude de Muhalaze'),
        CentroSaudeManhica = L.marker([-25.40932247699612, 32.8076782822609], { icon: primario }).bindPopup('Centro de Saude da Manhica'),
        CentroSaudeMagude = L.marker([-25.02894, 32.64899], { icon: primario }).bindPopup('Centro de Saude de Magude'),
        CentroSaudeMavalane = L.marker([-25.92763, 32.59466], { icon: primario }).bindPopup('Centro de Saude de Mavalane'),
        CentroSaudeMoamba = L.marker([-25.59874, 32.244964], { icon: primario }).bindPopup('Centro de Saude da Moamba'),
        CentroSaudeMali = L.marker([-25.761462, 32.568606], { icon: primario }).bindPopup('Centro de Saude de Mali'),
        CentroSaudeMassacaII = L.marker([-26.064394, 32.286632], { icon: primario }).bindPopup('Centro de Saude Massaca II'),
        CentroSaudeTsalala = L.marker([-25.894861649885513, 32.461665272712715], { icon: primario }).bindPopup('Centro de Saude de Tsalala'),
        CentroSaudeMassaca = L.marker([-26.06479, 32.286415], { icon: primario }).bindPopup('Centro de Saude Massaca'),
        CentroSaudePontaOuro = L.marker([-26.837186, 32.884238], { icon: primario }).bindPopup('Centro de Saude da Ponta de Ouro'),
        CentroSaudeMachubo = L.marker([-25.564393, 32.799445], { icon: primario }).bindPopup('Centro de Saude de Machubo'),
        CentroSaudeNamaacha = L.marker([-25.991039, 32.13282], { icon: primario }).bindPopup('Centro de Saude de Namaacha'),
        CentroSaudeFomento = L.marker([-25.9343369, 32.4761886], { icon: primario }).bindPopup('Centro de Saude do Fomento'),
        CentroSaudeMosaka = L.marker([-25.884333252220074, 32.62050032615662], { icon: primario }).bindPopup('Centro de Saude de Mosaka'),
        CentroSaudeMaluana = L.marker([-25.49612335053489, 32.65233278274537], { icon: primario }).bindPopup('Centro de Saude de Maluana'),
        CentroSaudeMaragra = L.marker([-25.45742363267859, 32.77265533804894], { icon: primario }).bindPopup('Centro de Saude de Maragra'),
        CentroSaudeMagoanineA = L.marker([-25.89538649370233, 32.578765153884895], { icon: primario }).bindPopup('Centro de Saude de Magoanine A'),
        CentroSaudeCampoane = L.marker([-26.0402705,32.3265883], { icon: primario }).bindPopup('Centro de Saude de Campoane'),
        CentroSaudePRM = L.marker([-25.970671, 32.578015], { icon: primario }).bindPopup('Centro de Saude da PRM'),
        CentroSaudeCMC = L.marker([-25.8426904,32.6238105], { icon: primario }).bindPopup('Centro de Saude de CMC'),
        CentroSaudeNovaVida = L.marker([-25.9635152,32.5712496], { icon: primario }).bindPopup('Centro de Saude Nova Vida'),
        CentroSaudePeermed = L.marker([-25.9696069,32.5707297], { icon: primario }).bindPopup('Centro de Saude Peermed'),
        CentroSaudeZonaVerde = L.marker([-25.8738161,32.558492], { icon: primario }).bindPopup('Centro de Saude da Zona Verde'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de'),
        CentroSaude = L.marker([-25., 32.], { icon: primario }).bindPopup('Centro de Saude de')
        



    //Grupo de Centros de Saude
    var CentroSaude = L.layerGroup([CentroSaudeXipamanine, CentroSaudeAltoMae, CentroSaudePorto, CentroSaudeMaxaquene, CentroSaudeBagamoyo, CentroSaudeZimpeto, CentroSaudeMagoanineTendas, CentroSaudeAlbazine, CentroSaude1Junho, CentroSaudeRomao, CentroSaudePescadores, CentroSaudeHulene, CentroSaudeMalhaganlene, CentroSaudeInhaca, CentroSaudeCatembe, CentroSaudeBoquisso, CentroSaudeHPMatola, CentroSaudeMutsekua, CentroSaudeMarracuene, CentroSaudeEduardoMondlane, CentroSaudeMuhalaze, CentroSaudeManhica, CentroSaudeMagude, CentroSaudeMavalane, CentroSaudeMoamba, CentroSaudeMali, CentroSaudeMassacaII, CentroSaudeTsalala, CentroSaudeMassaca, CentroSaudePontaOuro, CentroSaudeMachubo, CentroSaudeNamaacha, CentroSaudeFomento, CentroSaudeMosaka, CentroSaudeMaluana, CentroSaudeMaragra, CentroSaudeCampoane, CentroSaudeMagoanineA, CentroSaudePRM, CentroSaudeCMC, CentroSaudeNovaVida, CentroSaudePeermed, CentroSaudeMagoanineMiniCentro, CentroSaudeCanico, CentroSaudePolanaCimento, CentroSaude1Maio, CentroSaudeZonaVerde])
    //-25.909328591338603, 32.4935956299305 Maternidade da Machava

    /*==============================================
            Nivel Primario - Postos de Saude
    ================================================*/
    //Postos de Saude
    var PostoSaudeMozal = L.marker([-25.9186685, 32.3946614], { icon: primario }).bindPopup('Posto de Saude da Mozal'),
        PostoSaudeInhagoiaA = L.marker([-25.916371999405182, 32.558552026748664], { icon: primario }).bindPopup('Posto de Inhagoia "A"'),
        PostoSaudeUnidadeA = L.marker([-25.9105428,32.5169807], { icon: primario }).bindPopup('Posto de Saude Unidade A'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude'),
        PostoSaude = L.marker([-25, 32], { icon: primario }).bindPopup('Posto de Saude')




    //Grupo de Postos de Saude
    var PostoSaude = L.layerGroup([PostoSaudeMozal, PostoSaudeInhagoiaA, PostoSaudeUnidadeA])


    /*==============================================
                    Nivel Secundario
    ================================================*/
    //Hospitais gerais
    var HospitalGeralMavalane = L.marker([-25.93033, 32.58613], { icon: secundario }).bindPopup('Hospital Geral de Mavalane'),
        HospitalGeralMachava = L.marker([-25.91429, 32.53155], { icon: secundario }).bindPopup('Hospital Geral da Machava'),
        HospitalGeralJoseMacamo = L.marker([-25.947144, 32.543960], { icon: secundario }).bindPopup('Hospital Geral Jose Macamo'),
        HospitalGeralChamanculo = L.marker([-25.95118961209202, 32.55535617470742], { icon: secundario }).bindPopup('Hospital Geral de Chamanculo'),
        HospitalGeralPolanaCanico = L.marker([-25.935561, 32.611509], { icon: secundario }).bindPopup('Hospital Geral da Polana Canico');
    //Grupo de Hospitais Gerais
    var HospitaisGerais = L.layerGroup([HospitalGeralMavalane, HospitalGeralMachava, HospitalGeralJoseMacamo, HospitalGeralChamanculo, HospitalGeralPolanaCanico]);

    //Hospitais distritais
    var HospitalDistritalManhica = L.marker([-25.408708157686203, 32.806573212146766], { icon: secundario }).bindPopup('Hospital Distrital da Manhica')

    //Grupo de hospitais distritais
    var HospitaisDistritais = L.layerGroup([HospitalDistritalManhica])


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
    var HospitalPsiquiatricoInfulene = L.marker([-25.8596128, 32.5666355], { icon: quaternario }).bindPopup('Hospital Psiquiatrico de Infulene');
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
        "Posto de Saude": PostoSaude,
        "Hospital Distrital": HospitaisDistritais,
        "Hospital Rural": HospitaisGerais,
        "Hospital Geral": HospitaisGerais,
        "Hospital Provincial": HospitaisGerais,
        "Hospital Central": HospitaisCentrais,
        "Hospital Especializado": HospitaisEspecializados,
        "Hospital Militar": HospitaisMilitares,

    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    L.Control.geocoder().addTo(map);    //search de locais

    


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



