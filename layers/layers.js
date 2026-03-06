ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-48.673891, -26.918371, -48.631621, -26.895052]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BensTombados_1 = new ol.format.GeoJSON();
var features_BensTombados_1 = format_BensTombados_1.readFeatures(json_BensTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BensTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BensTombados_1.addFeatures(features_BensTombados_1);
var lyr_BensTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BensTombados_1, 
                style: style_BensTombados_1,
                popuplayertitle: 'Bens Tombados',
                interactive: true,
                title: '<img src="styles/legend/BensTombados_1.png" /> Bens Tombados'
            });
var format_TerrasIndgenas_2 = new ol.format.GeoJSON();
var features_TerrasIndgenas_2 = format_TerrasIndgenas_2.readFeatures(json_TerrasIndgenas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerrasIndgenas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrasIndgenas_2.addFeatures(features_TerrasIndgenas_2);
var lyr_TerrasIndgenas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrasIndgenas_2, 
                style: style_TerrasIndgenas_2,
                popuplayertitle: 'Terras Indígenas',
                interactive: true,
                title: '<img src="styles/legend/TerrasIndgenas_2.png" /> Terras Indígenas'
            });
var format_ComunidadesQuilombolas_3 = new ol.format.GeoJSON();
var features_ComunidadesQuilombolas_3 = format_ComunidadesQuilombolas_3.readFeatures(json_ComunidadesQuilombolas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComunidadesQuilombolas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesQuilombolas_3.addFeatures(features_ComunidadesQuilombolas_3);
cluster_ComunidadesQuilombolas_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ComunidadesQuilombolas_3
});
var lyr_ComunidadesQuilombolas_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ComunidadesQuilombolas_3, 
                style: style_ComunidadesQuilombolas_3,
                popuplayertitle: 'Comunidades Quilombolas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesQuilombolas_3.png" /> Comunidades Quilombolas'
            });
var format_reasPrioritriasparaConservao_4 = new ol.format.GeoJSON();
var features_reasPrioritriasparaConservao_4 = format_reasPrioritriasparaConservao_4.readFeatures(json_reasPrioritriasparaConservao_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasPrioritriasparaConservao_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPrioritriasparaConservao_4.addFeatures(features_reasPrioritriasparaConservao_4);
var lyr_reasPrioritriasparaConservao_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPrioritriasparaConservao_4, 
                style: style_reasPrioritriasparaConservao_4,
                popuplayertitle: 'Áreas Prioritárias para Conservação ',
                interactive: true,
                title: '<img src="styles/legend/reasPrioritriasparaConservao_4.png" /> Áreas Prioritárias para Conservação '
            });
var format_UnidadesdeConservao_5 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_5 = format_UnidadesdeConservao_5.readFeatures(json_UnidadesdeConservao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_5.addFeatures(features_UnidadesdeConservao_5);
var lyr_UnidadesdeConservao_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_5, 
                style: style_UnidadesdeConservao_5,
                popuplayertitle: 'Unidades de Conservação',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_5.png" /> Unidades de Conservação'
            });
var format_ServiosApoio_6 = new ol.format.GeoJSON();
var features_ServiosApoio_6 = format_ServiosApoio_6.readFeatures(json_ServiosApoio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiosApoio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosApoio_6.addFeatures(features_ServiosApoio_6);
cluster_ServiosApoio_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ServiosApoio_6
});
var lyr_ServiosApoio_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ServiosApoio_6, 
                style: style_ServiosApoio_6,
                popuplayertitle: 'Serviços Apoio',
                interactive: true,
                title: '<img src="styles/legend/ServiosApoio_6.png" /> Serviços Apoio'
            });
var format_Equipamentos_7 = new ol.format.GeoJSON();
var features_Equipamentos_7 = format_Equipamentos_7.readFeatures(json_Equipamentos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Equipamentos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_7.addFeatures(features_Equipamentos_7);
cluster_Equipamentos_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Equipamentos_7
});
var lyr_Equipamentos_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Equipamentos_7, 
                style: style_Equipamentos_7,
                popuplayertitle: 'Equipamentos ',
                interactive: true,
                title: '<img src="styles/legend/Equipamentos_7.png" /> Equipamentos '
            });
var format_Fundeadouros_8 = new ol.format.GeoJSON();
var features_Fundeadouros_8 = format_Fundeadouros_8.readFeatures(json_Fundeadouros_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fundeadouros_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_8.addFeatures(features_Fundeadouros_8);
var lyr_Fundeadouros_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_8, 
                style: style_Fundeadouros_8,
                popuplayertitle: 'Fundeadouros',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_8.png" /> Fundeadouros'
            });
var format_BaciadeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciadeEvoluoCurtoPrazo_9 = format_BaciadeEvoluoCurtoPrazo_9.readFeatures(json_BaciadeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoCurtoPrazo_9.addFeatures(features_BaciadeEvoluoCurtoPrazo_9);
var lyr_BaciadeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoCurtoPrazo_9, 
                style: style_BaciadeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacia de Evolução - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoCurtoPrazo_9.png" /> Bacia de Evolução - Curto Prazo'
            });
var format_BaciadeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciadeEvoluoSituaoAtual_10 = format_BaciadeEvoluoSituaoAtual_10.readFeatures(json_BaciadeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluoSituaoAtual_10.addFeatures(features_BaciadeEvoluoSituaoAtual_10);
var lyr_BaciadeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluoSituaoAtual_10, 
                style: style_BaciadeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacia de Evolução - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluoSituaoAtual_10.png" /> Bacia de Evolução - Situação Atual'
            });
var format_CanaldeAcesso_11 = new ol.format.GeoJSON();
var features_CanaldeAcesso_11 = format_CanaldeAcesso_11.readFeatures(json_CanaldeAcesso_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcesso_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcesso_11.addFeatures(features_CanaldeAcesso_11);
var lyr_CanaldeAcesso_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcesso_11, 
                style: style_CanaldeAcesso_11,
                popuplayertitle: 'Canal de Acesso',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcesso_11.png" /> Canal de Acesso'
            });
var format_AcessosHidroviriosLongoPrazo_12 = new ol.format.GeoJSON();
var features_AcessosHidroviriosLongoPrazo_12 = format_AcessosHidroviriosLongoPrazo_12.readFeatures(json_AcessosHidroviriosLongoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosLongoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosLongoPrazo_12.addFeatures(features_AcessosHidroviriosLongoPrazo_12);
var lyr_AcessosHidroviriosLongoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosLongoPrazo_12, 
                style: style_AcessosHidroviriosLongoPrazo_12,
                popuplayertitle: 'Acessos Hidroviários - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosLongoPrazo_12.png" /> Acessos Hidroviários - Longo Prazo'
            });
var format_AcessosHidroviriosSituaoAtual_13 = new ol.format.GeoJSON();
var features_AcessosHidroviriosSituaoAtual_13 = format_AcessosHidroviriosSituaoAtual_13.readFeatures(json_AcessosHidroviriosSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosSituaoAtual_13.addFeatures(features_AcessosHidroviriosSituaoAtual_13);
var lyr_AcessosHidroviriosSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosSituaoAtual_13, 
                style: style_AcessosHidroviriosSituaoAtual_13,
                popuplayertitle: 'Acessos Hidroviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosSituaoAtual_13.png" /> Acessos Hidroviários - Situação Atual'
            });
var format_AcessosInternosRodovirios_14 = new ol.format.GeoJSON();
var features_AcessosInternosRodovirios_14 = format_AcessosInternosRodovirios_14.readFeatures(json_AcessosInternosRodovirios_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosInternosRodovirios_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodovirios_14.addFeatures(features_AcessosInternosRodovirios_14);
var lyr_AcessosInternosRodovirios_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodovirios_14, 
                style: style_AcessosInternosRodovirios_14,
                popuplayertitle: 'Acessos Internos Rodoviários ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodovirios_14.png" /> Acessos Internos Rodoviários '
            });
var format_AcessosRodoviriosMdioPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosMdioPrazo_15 = format_AcessosRodoviriosMdioPrazo_15.readFeatures(json_AcessosRodoviriosMdioPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosMdioPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosMdioPrazo_15.addFeatures(features_AcessosRodoviriosMdioPrazo_15);
var lyr_AcessosRodoviriosMdioPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosMdioPrazo_15, 
                style: style_AcessosRodoviriosMdioPrazo_15,
                popuplayertitle: 'Acessos Rodoviários - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosMdioPrazo_15.png" /> Acessos Rodoviários - Médio Prazo'
            });
var format_AcessosRodoviriosSituaoAtual_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosSituaoAtual_16 = format_AcessosRodoviriosSituaoAtual_16.readFeatures(json_AcessosRodoviriosSituaoAtual_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosSituaoAtual_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosSituaoAtual_16.addFeatures(features_AcessosRodoviriosSituaoAtual_16);
var lyr_AcessosRodoviriosSituaoAtual_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosSituaoAtual_16, 
                style: style_AcessosRodoviriosSituaoAtual_16,
                popuplayertitle: 'Acessos Rodoviários - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosSituaoAtual_16.png" /> Acessos Rodoviários - Situação Atual'
            });
var format_InstalaesNoOperacionais_17 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionais_17 = format_InstalaesNoOperacionais_17.readFeatures(json_InstalaesNoOperacionais_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionais_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionais_17.addFeatures(features_InstalaesNoOperacionais_17);
var lyr_InstalaesNoOperacionais_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionais_17, 
                style: style_InstalaesNoOperacionais_17,
                popuplayertitle: 'Instalações Não Operacionais',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionais_17.png" /> Instalações Não Operacionais'
            });
var format_InstalaesRetroporturias_18 = new ol.format.GeoJSON();
var features_InstalaesRetroporturias_18 = format_InstalaesRetroporturias_18.readFeatures(json_InstalaesRetroporturias_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesRetroporturias_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturias_18.addFeatures(features_InstalaesRetroporturias_18);
cluster_InstalaesRetroporturias_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_InstalaesRetroporturias_18
});
var lyr_InstalaesRetroporturias_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_InstalaesRetroporturias_18, 
                style: style_InstalaesRetroporturias_18,
                popuplayertitle: 'Instalações Retroportuárias ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturias_18.png" /> Instalações Retroportuárias '
            });
var format_TerminaldeUsoPrivadoEntornodaPoligonal_19 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivadoEntornodaPoligonal_19 = format_TerminaldeUsoPrivadoEntornodaPoligonal_19.readFeatures(json_TerminaldeUsoPrivadoEntornodaPoligonal_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldeUsoPrivadoEntornodaPoligonal_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivadoEntornodaPoligonal_19.addFeatures(features_TerminaldeUsoPrivadoEntornodaPoligonal_19);
var lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivadoEntornodaPoligonal_19, 
                style: style_TerminaldeUsoPrivadoEntornodaPoligonal_19,
                popuplayertitle: 'Terminal de Uso Privado (Entorno da Poligonal)',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivadoEntornodaPoligonal_19.png" /> Terminal de Uso Privado (Entorno da Poligonal)'
            });
var format_TerminaisdePassageirosLongoPrazo_20 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_20 = format_TerminaisdePassageirosLongoPrazo_20.readFeatures(json_TerminaisdePassageirosLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_20.addFeatures(features_TerminaisdePassageirosLongoPrazo_20);
cluster_TerminaisdePassageirosLongoPrazo_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TerminaisdePassageirosLongoPrazo_20
});
var lyr_TerminaisdePassageirosLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TerminaisdePassageirosLongoPrazo_20, 
                style: style_TerminaisdePassageirosLongoPrazo_20,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_20.png" /> Terminais de Passageiros - Longo Prazo'
            });
var format_TerminaisdePassageirosSituaoAtual_21 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_21 = format_TerminaisdePassageirosSituaoAtual_21.readFeatures(json_TerminaisdePassageirosSituaoAtual_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosSituaoAtual_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_21.addFeatures(features_TerminaisdePassageirosSituaoAtual_21);
var lyr_TerminaisdePassageirosSituaoAtual_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_21, 
                style: style_TerminaisdePassageirosSituaoAtual_21,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_21.png" /> Terminais de Passageiros - Situação Atual'
            });
var format_Acostagem_22 = new ol.format.GeoJSON();
var features_Acostagem_22 = format_Acostagem_22.readFeatures(json_Acostagem_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Acostagem_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acostagem_22.addFeatures(features_Acostagem_22);
var lyr_Acostagem_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acostagem_22, 
                style: style_Acostagem_22,
                popuplayertitle: 'Acostagem ',
                interactive: true,
                title: '<img src="styles/legend/Acostagem_22.png" /> Acostagem '
            });
var format_ArmazenagemLongoPrazo_23 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_23 = format_ArmazenagemLongoPrazo_23.readFeatures(json_ArmazenagemLongoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_23.addFeatures(features_ArmazenagemLongoPrazo_23);
var lyr_ArmazenagemLongoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_23, 
                style: style_ArmazenagemLongoPrazo_23,
                popuplayertitle: 'Armazenagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_23.png" /> Armazenagem - Longo Prazo'
            });
var format_ArmazenagemMdioPrazo_24 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_24 = format_ArmazenagemMdioPrazo_24.readFeatures(json_ArmazenagemMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_24.addFeatures(features_ArmazenagemMdioPrazo_24);
var lyr_ArmazenagemMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_24, 
                style: style_ArmazenagemMdioPrazo_24,
                popuplayertitle: 'Armazenagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_24.png" /> Armazenagem - Médio Prazo'
            });
var format_ArmazenagemCurtoPrazo_25 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_25 = format_ArmazenagemCurtoPrazo_25.readFeatures(json_ArmazenagemCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_25.addFeatures(features_ArmazenagemCurtoPrazo_25);
var lyr_ArmazenagemCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_25, 
                style: style_ArmazenagemCurtoPrazo_25,
                popuplayertitle: 'Armazenagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_25.png" /> Armazenagem - Curto Prazo'
            });
var format_ArmazenagemSituaoAtual_26 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_26 = format_ArmazenagemSituaoAtual_26.readFeatures(json_ArmazenagemSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_26.addFeatures(features_ArmazenagemSituaoAtual_26);
var lyr_ArmazenagemSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_26, 
                style: style_ArmazenagemSituaoAtual_26,
                popuplayertitle: 'Armazenagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_26.png" /> Armazenagem - Situação Atual'
            });
var format_reaseInstalaesAlfandegadasdoPorto_27 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPorto_27 = format_reaseInstalaesAlfandegadasdoPorto_27.readFeatures(json_reaseInstalaesAlfandegadasdoPorto_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPorto_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPorto_27.addFeatures(features_reaseInstalaesAlfandegadasdoPorto_27);
var lyr_reaseInstalaesAlfandegadasdoPorto_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPorto_27, 
                style: style_reaseInstalaesAlfandegadasdoPorto_27,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPorto_27.png" /> Áreas e Instalações Alfandegadas do Porto '
            });
var format_reasArrendveisLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasArrendveisLongoPrazo_28 = format_reasArrendveisLongoPrazo_28.readFeatures(json_reasArrendveisLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisLongoPrazo_28.addFeatures(features_reasArrendveisLongoPrazo_28);
var lyr_reasArrendveisLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisLongoPrazo_28, 
                style: style_reasArrendveisLongoPrazo_28,
                popuplayertitle: 'Áreas Arrendáveis - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisLongoPrazo_28.png" /> Áreas Arrendáveis - Longo Prazo'
            });
var format_reasArrendveisMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasArrendveisMdioPrazo_29 = format_reasArrendveisMdioPrazo_29.readFeatures(json_reasArrendveisMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisMdioPrazo_29.addFeatures(features_reasArrendveisMdioPrazo_29);
var lyr_reasArrendveisMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisMdioPrazo_29, 
                style: style_reasArrendveisMdioPrazo_29,
                popuplayertitle: 'Áreas Arrendáveis - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisMdioPrazo_29.png" /> Áreas Arrendáveis - Médio Prazo'
            });
var format_reasArrendveisCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasArrendveisCurtoPrazo_30 = format_reasArrendveisCurtoPrazo_30.readFeatures(json_reasArrendveisCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisCurtoPrazo_30.addFeatures(features_reasArrendveisCurtoPrazo_30);
var lyr_reasArrendveisCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisCurtoPrazo_30, 
                style: style_reasArrendveisCurtoPrazo_30,
                popuplayertitle: 'Áreas Arrendáveis - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisCurtoPrazo_30.png" /> Áreas Arrendáveis - Curto Prazo'
            });
var format_reasArrendveisSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasArrendveisSituaoAtual_31 = format_reasArrendveisSituaoAtual_31.readFeatures(json_reasArrendveisSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisSituaoAtual_31.addFeatures(features_reasArrendveisSituaoAtual_31);
var lyr_reasArrendveisSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisSituaoAtual_31, 
                style: style_reasArrendveisSituaoAtual_31,
                popuplayertitle: 'Áreas Arrendáveis - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisSituaoAtual_31.png" /> Áreas Arrendáveis - Situação Atual'
            });
var format_reasArrendadas_32 = new ol.format.GeoJSON();
var features_reasArrendadas_32 = format_reasArrendadas_32.readFeatures(json_reasArrendadas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendadas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadas_32.addFeatures(features_reasArrendadas_32);
var lyr_reasArrendadas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadas_32, 
                style: style_reasArrendadas_32,
                popuplayertitle: 'Áreas Arrendadas',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadas_32.png" /> Áreas Arrendadas'
            });
var format_ZoneamentoLongoPrazo_33 = new ol.format.GeoJSON();
var features_ZoneamentoLongoPrazo_33 = format_ZoneamentoLongoPrazo_33.readFeatures(json_ZoneamentoLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLongoPrazo_33.addFeatures(features_ZoneamentoLongoPrazo_33);
var lyr_ZoneamentoLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLongoPrazo_33, 
                style: style_ZoneamentoLongoPrazo_33,
                popuplayertitle: 'Zoneamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoLongoPrazo_33.png" /> Zoneamento - Longo Prazo'
            });
var format_ZoneamentoMdioPrazo_34 = new ol.format.GeoJSON();
var features_ZoneamentoMdioPrazo_34 = format_ZoneamentoMdioPrazo_34.readFeatures(json_ZoneamentoMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoMdioPrazo_34.addFeatures(features_ZoneamentoMdioPrazo_34);
var lyr_ZoneamentoMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoMdioPrazo_34, 
                style: style_ZoneamentoMdioPrazo_34,
                popuplayertitle: 'Zoneamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoMdioPrazo_34.png" /> Zoneamento - Médio Prazo'
            });
var format_ZoneamentoCurtoPrazo_35 = new ol.format.GeoJSON();
var features_ZoneamentoCurtoPrazo_35 = format_ZoneamentoCurtoPrazo_35.readFeatures(json_ZoneamentoCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoCurtoPrazo_35.addFeatures(features_ZoneamentoCurtoPrazo_35);
var lyr_ZoneamentoCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoCurtoPrazo_35, 
                style: style_ZoneamentoCurtoPrazo_35,
                popuplayertitle: 'Zoneamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoCurtoPrazo_35.png" /> Zoneamento - Curto Prazo'
            });
var format_ZoneamentoSituaoAtual_36 = new ol.format.GeoJSON();
var features_ZoneamentoSituaoAtual_36 = format_ZoneamentoSituaoAtual_36.readFeatures(json_ZoneamentoSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ZoneamentoSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoSituaoAtual_36.addFeatures(features_ZoneamentoSituaoAtual_36);
var lyr_ZoneamentoSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoSituaoAtual_36, 
                style: style_ZoneamentoSituaoAtual_36,
                popuplayertitle: 'Zoneamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoSituaoAtual_36.png" /> Zoneamento - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodeItaja_37 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeItaja_37 = format_PoligonaldareadoPortoOrganizadodeItaja_37.readFeatures(json_PoligonaldareadoPortoOrganizadodeItaja_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeItaja_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeItaja_37.addFeatures(features_PoligonaldareadoPortoOrganizadodeItaja_37);
var lyr_PoligonaldareadoPortoOrganizadodeItaja_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeItaja_37, 
                style: style_PoligonaldareadoPortoOrganizadodeItaja_37,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Itajaí',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeItaja_37.png" /> Poligonal da Área do Porto Organizado de Itajaí'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeItaja_37,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLongoPrazo_33,lyr_ZoneamentoMdioPrazo_34,lyr_ZoneamentoCurtoPrazo_35,lyr_ZoneamentoSituaoAtual_36,],
                                fold: 'open',
                                title: 'Zoneamento'});
var group_reasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasArrendadas_32,],
                                fold: 'open',
                                title: 'Áreas Arrendadas'});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveisLongoPrazo_28,lyr_reasArrendveisMdioPrazo_29,lyr_reasArrendveisCurtoPrazo_30,lyr_reasArrendveisSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis'});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPorto_27,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_23,lyr_ArmazenagemMdioPrazo_24,lyr_ArmazenagemCurtoPrazo_25,lyr_ArmazenagemSituaoAtual_26,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_Acostagem_22,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_TerminaisdePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_20,lyr_TerminaisdePassageirosSituaoAtual_21,],
                                fold: 'open',
                                title: 'Terminais de Passageiros '});
var group_TerminaldeUsoPrivadoEntornodaPoligonal = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado (Entorno da Poligonal)'});
var group_InstalaesRetroporturias = new ol.layer.Group({
                                layers: [lyr_InstalaesRetroporturias_18,],
                                fold: 'open',
                                title: 'Instalações Retroportuárias '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaesNoOperacionais_17,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais'});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosMdioPrazo_15,lyr_AcessosRodoviriosSituaoAtual_16,],
                                fold: 'open',
                                title: 'Acessos Rodoviários'});
var group_AcessosInternosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosInternosRodovirios_14,],
                                fold: 'open',
                                title: 'Acessos Internos Rodoviários '});
var group_AcessosHidrovirios = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosLongoPrazo_12,lyr_AcessosHidroviriosSituaoAtual_13,],
                                fold: 'open',
                                title: 'Acessos Hidroviários'});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcesso_11,],
                                fold: 'open',
                                title: 'Canal de Acesso'});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluoCurtoPrazo_9,lyr_BaciadeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacia de Evolução'});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_Fundeadouros_8,],
                                fold: 'open',
                                title: 'Fundeadouros'});
var group_Equipamentos = new ol.layer.Group({
                                layers: [lyr_Equipamentos_7,],
                                fold: 'open',
                                title: 'Equipamentos'});
var group_ServiosdeApoio = new ol.layer.Group({
                                layers: [lyr_ServiosApoio_6,],
                                fold: 'open',
                                title: 'Serviços de Apoio'});
var group_UnidadedeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_5,],
                                fold: 'open',
                                title: 'Unidade de Conservação'});
var group_reasPrioritriasparaConservao = new ol.layer.Group({
                                layers: [lyr_reasPrioritriasparaConservao_4,],
                                fold: 'open',
                                title: 'Áreas Prioritárias para Conservação '});
var group_ComunidadesQuilombolas = new ol.layer.Group({
                                layers: [lyr_ComunidadesQuilombolas_3,],
                                fold: 'open',
                                title: 'Comunidades Quilombolas'});
var group_TerrasIndgenas = new ol.layer.Group({
                                layers: [lyr_TerrasIndgenas_2,],
                                fold: 'open',
                                title: 'Terras Indígenas'});
var group_BensTombados = new ol.layer.Group({
                                layers: [lyr_BensTombados_1,],
                                fold: 'open',
                                title: 'Bens Tombados'});

lyr_GoogleSatellite_0.setVisible(true);lyr_BensTombados_1.setVisible(false);lyr_TerrasIndgenas_2.setVisible(false);lyr_ComunidadesQuilombolas_3.setVisible(false);lyr_reasPrioritriasparaConservao_4.setVisible(false);lyr_UnidadesdeConservao_5.setVisible(false);lyr_ServiosApoio_6.setVisible(false);lyr_Equipamentos_7.setVisible(false);lyr_Fundeadouros_8.setVisible(false);lyr_BaciadeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciadeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaldeAcesso_11.setVisible(false);lyr_AcessosHidroviriosLongoPrazo_12.setVisible(false);lyr_AcessosHidroviriosSituaoAtual_13.setVisible(false);lyr_AcessosInternosRodovirios_14.setVisible(false);lyr_AcessosRodoviriosMdioPrazo_15.setVisible(false);lyr_AcessosRodoviriosSituaoAtual_16.setVisible(false);lyr_InstalaesNoOperacionais_17.setVisible(false);lyr_InstalaesRetroporturias_18.setVisible(false);lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_20.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_21.setVisible(false);lyr_Acostagem_22.setVisible(false);lyr_ArmazenagemLongoPrazo_23.setVisible(false);lyr_ArmazenagemMdioPrazo_24.setVisible(false);lyr_ArmazenagemCurtoPrazo_25.setVisible(false);lyr_ArmazenagemSituaoAtual_26.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPorto_27.setVisible(false);lyr_reasArrendveisLongoPrazo_28.setVisible(false);lyr_reasArrendveisMdioPrazo_29.setVisible(false);lyr_reasArrendveisCurtoPrazo_30.setVisible(false);lyr_reasArrendveisSituaoAtual_31.setVisible(false);lyr_reasArrendadas_32.setVisible(false);lyr_ZoneamentoLongoPrazo_33.setVisible(false);lyr_ZoneamentoMdioPrazo_34.setVisible(false);lyr_ZoneamentoCurtoPrazo_35.setVisible(false);lyr_ZoneamentoSituaoAtual_36.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeItaja_37.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_BensTombados,group_TerrasIndgenas,group_ComunidadesQuilombolas,group_reasPrioritriasparaConservao,group_UnidadedeConservao,group_ServiosdeApoio,group_Equipamentos,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosHidrovirios,group_AcessosInternosRodovirios,group_AcessosRodovirios,group_InstalaesNoOperacionais,group_InstalaesRetroporturias,group_TerminaldeUsoPrivadoEntornodaPoligonal,group_TerminaisdePassageiros,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadasdoPorto,group_reasArrendveis,group_reasArrendadas,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_BensTombados_1.set('fieldAliases', {'cod': 'Código ', 'nome': 'Nome ', 'estado': 'Estado ', 'municipio': 'Município ', 'fonte': 'Fonte ', 'Anodisp': 'Ano de Disponibilização ', });
lyr_TerrasIndgenas_2.set('fieldAliases', {'Nome': 'Nome', 'Categor': 'Categoria ', 'Titulo': 'Título', 'Document': 'Documento ', 'Estado': 'Estado', 'Municipio': 'Município ', 'Aream2': 'Área (m²) ', 'Perimetro': 'Perímetro ', 'Datadoc': 'Data do Documento ', 'Anodispo': 'Ano de Disponibilização ', 'Populac': 'População ', 'SitJurid': 'Situação Jurídica ', 'Etnia': 'Grupo Étnico', });
lyr_ComunidadesQuilombolas_3.set('fieldAliases', {'Nome': 'Nome', 'Estado': 'Estado', 'Fonte': 'Fonte', 'Municipio': 'Município ', 'Nfamilias': 'Número de Família', 'ano': 'Ano de Disponibilização', });
lyr_reasPrioritriasparaConservao_4.set('fieldAliases', {'Nome': 'Nome', 'Fonte': 'Fonte', 'AnoDisponi': 'Ano de Disponibilização ', 'Tipo': 'Tipo', 'Importânc': 'Importância', 'Prioridade': 'Prioridade', 'Caracter.': 'Características', 'Ameaças': 'Ameaças', 'Oportunid.': 'Oportunidades ', 'Cria UC': 'Cria Unidade de Conservação ', 'Ação pri': 'Ação Prioritária ', });
lyr_UnidadesdeConservao_5.set('fieldAliases', {'Nome': 'Nome', 'Decreto': 'Decreto', 'PlaManej': 'Plano de Manejo', 'Fonte': 'Fonte', 'Estado': 'Estado', 'Municipio': 'Município', 'Ato Leg': 'Ato Legal ', 'Uso': 'Uso', 'Jurisdic': 'Jurisdição ', 'Categor': 'Categoria ', 'AnoDisponi': 'Ano de Disponibilização ', });
lyr_ServiosApoio_6.set('fieldAliases', {'Serv.Ofer.': 'Serviço Oferecido ', 'Empr.Forn': 'Empresa Fornecedora', 'Capacidade': 'Capacidade', });
lyr_Equipamentos_7.set('fieldAliases', {'TipoEquip': 'Tipo de Equipamento ', 'Finalidade': 'Finalidade do Equipamento ', 'Operador': 'Operador do Equipamento ', 'Capacidade': 'Capacidade do Equipamento (t) ', 'TempoUso': 'Tempo de Uso (anos) ', 'DataFabr': 'Data de Fabricação ', });
lyr_Fundeadouros_8.set('fieldAliases', {'Nome': 'Nome', 'Quant': 'Quantidade ', 'Localiza': 'Localização ', 'Profundida': 'Profundidade (m) ', 'Compr': 'Comprimento (m) ', 'Larg': 'Largura (m) ', 'Diametro': 'Diâmetro (m) ', });
lyr_BaciadeEvoluoCurtoPrazo_9.set('fieldAliases', {'Localiza': 'Localização ', 'Comp': 'Comprimento (m) ', 'Observ': 'Observação', 'Prof': 'Profundidade (m) ', 'Quantidade': 'Quantidade', 'Diametro': 'Diâmetro (m) ', 'Largura': 'Largura (m) ', });
lyr_BaciadeEvoluoSituaoAtual_10.set('fieldAliases', {'Localiza': 'Localização ', 'Comp': 'Comprimento (m) ', 'Observ': 'Observação', 'Prof': 'Profundidade (m) ', 'Quantidade': 'Quantidade', 'Diametro': 'Diâmetro (m) ', 'Largura': 'Largura (m) ', });
lyr_CanaldeAcesso_11.set('fieldAliases', {'Trecho': 'Trecho', 'Comprim': 'Comprimento (m) ', 'Diame': 'Diâmetro (m) ', 'Profu(m)': 'Profundidade (m) ', 'Larg.min m': 'Largura (m) ', });
lyr_AcessosHidroviriosLongoPrazo_12.set('fieldAliases', {'nome': 'Nome ', 'TipoNave': 'Tipo de Navegação ', 'extensaoKm': 'Extensão (Km) ', 'ProfundMin': 'Profundidade Mínima (m) ', 'ProfundMax': 'Profundidade Máxima (m) ', 'Atualizaca': 'Atualização ', });
lyr_AcessosHidroviriosSituaoAtual_13.set('fieldAliases', {'nome': 'Nome', 'TipoNave': 'Tipo de Navegação ', 'extensaoKm': 'Extensão (Km)', 'ProfundMin': 'Profundidade Mínima (m) ', 'ProfundMax': 'Profundidade Máxima (m) ', 'Atualizaca': 'Atualização ', });
lyr_AcessosInternosRodovirios_14.set('fieldAliases', {'Recinto': 'Nome ', 'ExtKm': 'Extensão (Km)', });
lyr_AcessosRodoviriosMdioPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV': 'PNV', 'Jurisdic': 'Jurisdição ', 'Classifi': 'Classificação ', 'Concess': 'Concessão ', 'Municipi': 'Município', 'UF': 'Unidade de Federação', 'VMDia': 'VMD Diário ', 'Exensao_KM': 'Extensão (Km) ', });
lyr_AcessosRodoviriosSituaoAtual_16.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV': 'PNV', 'Jurisdic': 'Jurisdição ', 'Classifi': 'Classificação ', 'Concess': 'Concessão ', 'Municipi': 'Município ', 'UF': 'Unidade de Federação ', 'VMDia': 'VMD Diário ', 'Exensao_KM': 'Extensão (Km) ', });
lyr_InstalaesNoOperacionais_17.set('fieldAliases', {'Uso Inst': 'Uso da Instalação', 'Tip Inst': 'Tipo de Instalação ', 'Reg Expl': 'Regime de Exploração', 'Justific': 'Justificativa ', 'Aream2': 'Área (m²) ', });
lyr_InstalaesRetroporturias_18.set('fieldAliases', {'Tip Inst': 'Tipo de Instalação ', 'Propriet': 'Proprietário ', 'ServOfer': 'Serviços Oferecidos ', 'Produtos': 'Produtos', 'RegExplo': 'Regime de Exploração ', 'Aream2': 'Área (m²) ', 'Captone': 'Capacidade de Armazenagem (t) ', 'capm3': 'Capacidade de Armazenagem (m³) ', 'Estaci': 'Capacidade dos Estacionamentos de Caminhões', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19.set('fieldAliases', {'Nome': 'Nome', 'Cod TUP': 'Código TUP ', 'Situacao': 'Situação ', 'Gestao': 'Gestão ', 'Tip Prod': 'Tipo de Produto ', 'Modalid': 'Modalidade ', 'Companhi': 'Companhia ', 'CNPJ': 'CNPJ', 'Inst Leg': 'Instrumento Legal ', 'Endereco': 'Endereço ', 'Aream2': 'Área (m²) ', 'Profun': 'Profundidade (m) ', });
lyr_TerminaisdePassageirosLongoPrazo_20.set('fieldAliases', {'Nome': 'Nome', 'Área m²': 'Área (m²) ', 'Capacidade': 'Capacidade de atendimento (passageiros por ano) ', });
lyr_TerminaisdePassageirosSituaoAtual_21.set('fieldAliases', {'Nome': 'Nome', 'Aream2': 'Área (m²) ', 'capacidade': 'Capacidade de atendimento (passageiros por ano) ', });
lyr_Acostagem_22.set('fieldAliases', {'Id Berco': 'Identificador do Berço ', 'EstaCons': 'Estado de Conservação ', 'Caracter': 'Características Construtivas', 'PrincProd': 'Principais Produtos ', 'Compriment': 'Comprimento (m) ', 'Profundida': 'Profundidade (m) ', });
lyr_ArmazenagemLongoPrazo_23.set('fieldAliases', {'Tipo Inst': 'Tipo da Instalação ', 'Capac.ton.': 'Capacidade (t) ', 'Área m²': 'Área (m²) ', 'Vol. m³': 'Volume (m³) ', 'Reg.Expl.': 'Regime de Exploração', 'Local': 'Local', });
lyr_ArmazenagemMdioPrazo_24.set('fieldAliases', {'Tipo Inst': 'Tipo da Instalação ', 'Capac.ton': 'Capacidade (t) ', 'Área m²': 'Área (m²) ', 'Vol. m³': 'Volume (m³) ', 'Local': 'Local', 'Reg.Expl.': 'Regime de Exploração', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldAliases', {'Tipo Inst': 'Tipo da Instalação ', 'Capac.ton': 'Capacidade (t) ', 'Área m²': 'Área (m²) ', 'Vol. m³': 'Volume (m³) ', 'Reg.Expl.': 'Regime de Exploração', 'Local': 'Local', });
lyr_ArmazenagemSituaoAtual_26.set('fieldAliases', {'Tipo Inst': 'Tipo de Instalação ', 'Capac.ton': 'Capacidade (t) ', 'Área m²': 'Área (m²) ', 'Vol. m³': 'Volume (m³) ', 'Reg.Expl.': 'Regime de Exploração', 'Local': 'Local', });
lyr_reaseInstalaesAlfandegadasdoPorto_27.set('fieldAliases', {'Nome': 'Nome', 'Companhi': 'Companhia ', 'Tip Prod': 'Tipo de Produto ', 'Inst Leg': 'Instrumento Legal ', 'Aream2': 'Área (m²) ', });
lyr_reasArrendveisLongoPrazo_28.set('fieldAliases', {'Nome': 'Nome da Área ', 'Aream2': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisMdioPrazo_29.set('fieldAliases', {'Nome': 'Nome da Área ', 'Aream2': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisCurtoPrazo_30.set('fieldAliases', {'Nome': 'Nome da Área ', 'Aream2': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisSituaoAtual_31.set('fieldAliases', {'Nome': 'Nome da Área', 'Aream2': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendadas_32.set('fieldAliases', {'Grupo': 'Grupo', 'UF': 'Unidade de Federação ', 'AP': 'Autoridade Portuária ', 'Contrato': 'Número do Contrato ', 'Arr orig': 'Arrendatário Original ', 'Arr atua': 'Arrendatário Atual ', 'Tip inst': 'Tipo Especificado no Instrumento ', 'Objeto': 'Objeto', 'Finalid': 'Finalidade ', 'Pra Cont': 'Prazo Especificado no Contrato ', 'Val unit': 'Valor Unitário ', 'Val mes': 'Valor Total/Mês ', 'Pend jur': 'Pendências Jurídica ', 'QPendJur': 'Qual a Pendência Jurídica ', 'Obs': 'Observações ', 'Carg Mov': 'Natureza da Carga Movimentada ', 'Res 1837': 'Prejudicado Pela Revogação da Resolução 1837/2011?', 'Prorroga': 'Pode Ser Prorrogado? ', 'Sit Contab': 'Situação Contábil ', 'Res 525': 'Já Foi Prorrogado com Fundamento na Resolução 525/2005? ', 'DataCont': 'Data de Celebração', 'DataArre': 'Data de Início do Arrendamento ', 'DataTerm': 'Data de Término do Arrendamento ', 'Aream2': 'Área (m²) ', 'NTAdit': 'Número de TAs na Pasta ', });
lyr_ZoneamentoLongoPrazo_33.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Nome': 'Nome', 'Observacao': 'Observação', 'Aream2': 'Área (m²) ', });
lyr_ZoneamentoMdioPrazo_34.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Nome': 'Nome', 'Observacao': 'Observação', 'Aream2': 'Área (m²) ', });
lyr_ZoneamentoCurtoPrazo_35.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Nome': 'Nome', 'Observacao': 'Observação', 'Aream2': 'Área (m²) ', });
lyr_ZoneamentoSituaoAtual_36.set('fieldAliases', {'Categoria': 'Categoria ', 'Operador': 'Operador', 'Nome': 'Nome', 'Observacao': 'Observação', 'Aream2': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodeItaja_37.set('fieldAliases', {'Name': 'Nome', 'Ins. Legal': 'Instrumento Legal ', 'Tipo': 'Tipo ', 'Área': 'Área (m²) ', });
lyr_BensTombados_1.set('fieldImages', {'cod': 'TextEdit', 'nome': 'TextEdit', 'estado': 'TextEdit', 'municipio': 'TextEdit', 'fonte': 'TextEdit', 'Anodisp': 'Range', });
lyr_TerrasIndgenas_2.set('fieldImages', {'Nome': 'TextEdit', 'Categor': 'TextEdit', 'Titulo': 'TextEdit', 'Document': 'TextEdit', 'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Aream2': 'TextEdit', 'Perimetro': 'TextEdit', 'Datadoc': 'Range', 'Anodispo': 'Range', 'Populac': 'TextEdit', 'SitJurid': 'TextEdit', 'Etnia': 'TextEdit', });
lyr_ComunidadesQuilombolas_3.set('fieldImages', {'Nome': 'TextEdit', 'Estado': 'TextEdit', 'Fonte': 'TextEdit', 'Municipio': 'TextEdit', 'Nfamilias': 'TextEdit', 'ano': 'TextEdit', });
lyr_reasPrioritriasparaConservao_4.set('fieldImages', {'Nome': 'TextEdit', 'Fonte': 'TextEdit', 'AnoDisponi': 'Range', 'Tipo': 'TextEdit', 'Importânc': 'TextEdit', 'Prioridade': 'TextEdit', 'Caracter.': 'TextEdit', 'Ameaças': 'TextEdit', 'Oportunid.': 'TextEdit', 'Cria UC': 'TextEdit', 'Ação pri': 'TextEdit', });
lyr_UnidadesdeConservao_5.set('fieldImages', {'Nome': 'TextEdit', 'Decreto': 'TextEdit', 'PlaManej': 'TextEdit', 'Fonte': 'TextEdit', 'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Ato Leg': 'TextEdit', 'Uso': 'TextEdit', 'Jurisdic': 'TextEdit', 'Categor': 'TextEdit', 'AnoDisponi': 'Range', });
lyr_ServiosApoio_6.set('fieldImages', {'Serv.Ofer.': 'TextEdit', 'Empr.Forn': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_Equipamentos_7.set('fieldImages', {'TipoEquip': 'TextEdit', 'Finalidade': 'TextEdit', 'Operador': 'TextEdit', 'Capacidade': 'TextEdit', 'TempoUso': 'TextEdit', 'DataFabr': 'Range', });
lyr_Fundeadouros_8.set('fieldImages', {'Nome': 'TextEdit', 'Quant': 'TextEdit', 'Localiza': 'TextEdit', 'Profundida': 'TextEdit', 'Compr': 'TextEdit', 'Larg': 'TextEdit', 'Diametro': 'TextEdit', });
lyr_BaciadeEvoluoCurtoPrazo_9.set('fieldImages', {'Localiza': 'TextEdit', 'Comp': 'TextEdit', 'Observ': 'TextEdit', 'Prof': 'TextEdit', 'Quantidade': 'TextEdit', 'Diametro': 'TextEdit', 'Largura': 'TextEdit', });
lyr_BaciadeEvoluoSituaoAtual_10.set('fieldImages', {'Localiza': 'TextEdit', 'Comp': 'TextEdit', 'Observ': 'TextEdit', 'Prof': 'TextEdit', 'Quantidade': 'TextEdit', 'Diametro': 'TextEdit', 'Largura': 'TextEdit', });
lyr_CanaldeAcesso_11.set('fieldImages', {'Trecho': 'TextEdit', 'Comprim': 'Range', 'Diame': 'Range', 'Profu(m)': 'TextEdit', 'Larg.min m': 'TextEdit', });
lyr_AcessosHidroviriosLongoPrazo_12.set('fieldImages', {'nome': 'TextEdit', 'TipoNave': 'TextEdit', 'extensaoKm': 'TextEdit', 'ProfundMin': 'TextEdit', 'ProfundMax': 'TextEdit', 'Atualizaca': 'Range', });
lyr_AcessosHidroviriosSituaoAtual_13.set('fieldImages', {'nome': 'TextEdit', 'TipoNave': 'TextEdit', 'extensaoKm': 'TextEdit', 'ProfundMin': 'TextEdit', 'ProfundMax': 'TextEdit', 'Atualizaca': 'Range', });
lyr_AcessosInternosRodovirios_14.set('fieldImages', {'Recinto': 'TextEdit', 'ExtKm': 'TextEdit', });
lyr_AcessosRodoviriosMdioPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'Jurisdic': 'TextEdit', 'Classifi': 'TextEdit', 'Concess': 'TextEdit', 'Municipi': 'TextEdit', 'UF': 'TextEdit', 'VMDia': 'TextEdit', 'Exensao_KM': 'TextEdit', });
lyr_AcessosRodoviriosSituaoAtual_16.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'Jurisdic': 'TextEdit', 'Classifi': 'TextEdit', 'Concess': 'TextEdit', 'Municipi': 'TextEdit', 'UF': 'TextEdit', 'VMDia': 'TextEdit', 'Exensao_KM': 'TextEdit', });
lyr_InstalaesNoOperacionais_17.set('fieldImages', {'Uso Inst': 'TextEdit', 'Tip Inst': 'TextEdit', 'Reg Expl': 'TextEdit', 'Justific': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_InstalaesRetroporturias_18.set('fieldImages', {'Tip Inst': 'TextEdit', 'Propriet': 'TextEdit', 'ServOfer': 'TextEdit', 'Produtos': 'TextEdit', 'RegExplo': 'TextEdit', 'Aream2': 'TextEdit', 'Captone': 'TextEdit', 'capm3': 'TextEdit', 'Estaci': 'TextEdit', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19.set('fieldImages', {'Nome': 'TextEdit', 'Cod TUP': 'TextEdit', 'Situacao': 'TextEdit', 'Gestao': 'TextEdit', 'Tip Prod': 'TextEdit', 'Modalid': 'TextEdit', 'Companhi': 'TextEdit', 'CNPJ': 'TextEdit', 'Inst Leg': 'TextEdit', 'Endereco': 'TextEdit', 'Aream2': 'TextEdit', 'Profun': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_20.set('fieldImages', {'Nome': 'TextEdit', 'Área m²': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_21.set('fieldImages', {'Nome': 'TextEdit', 'Aream2': 'TextEdit', 'capacidade': 'TextEdit', });
lyr_Acostagem_22.set('fieldImages', {'Id Berco': 'TextEdit', 'EstaCons': 'TextEdit', 'Caracter': 'TextEdit', 'PrincProd': 'TextEdit', 'Compriment': 'TextEdit', 'Profundida': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_23.set('fieldImages', {'Tipo Inst': 'TextEdit', 'Capac.ton.': 'Range', 'Área m²': 'TextEdit', 'Vol. m³': 'Range', 'Reg.Expl.': 'TextEdit', 'Local': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_24.set('fieldImages', {'Tipo Inst': 'TextEdit', 'Capac.ton': 'Range', 'Área m²': 'TextEdit', 'Vol. m³': 'Range', 'Local': 'TextEdit', 'Reg.Expl.': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldImages', {'Tipo Inst': 'TextEdit', 'Capac.ton': 'Range', 'Área m²': 'TextEdit', 'Vol. m³': 'TextEdit', 'Reg.Expl.': 'TextEdit', 'Local': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_26.set('fieldImages', {'Tipo Inst': 'TextEdit', 'Capac.ton': 'TextEdit', 'Área m²': 'TextEdit', 'Vol. m³': 'Range', 'Reg.Expl.': 'TextEdit', 'Local': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPorto_27.set('fieldImages', {'Nome': 'TextEdit', 'Companhi': 'TextEdit', 'Tip Prod': 'TextEdit', 'Inst Leg': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_reasArrendveisLongoPrazo_28.set('fieldImages', {'Nome': 'TextEdit', 'Aream2': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisMdioPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'Aream2': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisCurtoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Aream2': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisSituaoAtual_31.set('fieldImages', {'Nome': 'TextEdit', 'Aream2': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendadas_32.set('fieldImages', {'Grupo': 'TextEdit', 'UF': 'TextEdit', 'AP': 'TextEdit', 'Contrato': 'TextEdit', 'Arr orig': 'TextEdit', 'Arr atua': 'TextEdit', 'Tip inst': 'TextEdit', 'Objeto': 'TextEdit', 'Finalid': 'TextEdit', 'Pra Cont': 'TextEdit', 'Val unit': 'TextEdit', 'Val mes': 'TextEdit', 'Pend jur': 'TextEdit', 'QPendJur': 'TextEdit', 'Obs': 'TextEdit', 'Carg Mov': 'TextEdit', 'Res 1837': 'TextEdit', 'Prorroga': 'TextEdit', 'Sit Contab': 'TextEdit', 'Res 525': 'TextEdit', 'DataCont': 'DateTime', 'DataArre': 'DateTime', 'DataTerm': 'DateTime', 'Aream2': 'TextEdit', 'NTAdit': 'TextEdit', });
lyr_ZoneamentoLongoPrazo_33.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Nome': 'TextEdit', 'Observacao': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_ZoneamentoMdioPrazo_34.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Nome': 'TextEdit', 'Observacao': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_ZoneamentoCurtoPrazo_35.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Nome': 'TextEdit', 'Observacao': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_ZoneamentoSituaoAtual_36.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Nome': 'TextEdit', 'Observacao': 'TextEdit', 'Aream2': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeItaja_37.set('fieldImages', {'Name': 'TextEdit', 'Ins. Legal': 'TextEdit', 'Tipo': 'TextEdit', 'Área': 'TextEdit', });
lyr_BensTombados_1.set('fieldLabels', {'cod': 'inline label - visible with data', 'nome': 'inline label - visible with data', 'estado': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'fonte': 'inline label - visible with data', 'Anodisp': 'inline label - visible with data', });
lyr_TerrasIndgenas_2.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Categor': 'inline label - visible with data', 'Titulo': 'inline label - visible with data', 'Document': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', 'Datadoc': 'inline label - visible with data', 'Anodispo': 'inline label - visible with data', 'Populac': 'inline label - visible with data', 'SitJurid': 'inline label - visible with data', 'Etnia': 'inline label - visible with data', });
lyr_ComunidadesQuilombolas_3.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Nfamilias': 'inline label - visible with data', 'ano': 'no label', });
lyr_reasPrioritriasparaConservao_4.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'AnoDisponi': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Importânc': 'inline label - visible with data', 'Prioridade': 'inline label - visible with data', 'Caracter.': 'inline label - visible with data', 'Ameaças': 'inline label - visible with data', 'Oportunid.': 'inline label - visible with data', 'Cria UC': 'inline label - visible with data', 'Ação pri': 'inline label - visible with data', });
lyr_UnidadesdeConservao_5.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Decreto': 'inline label - visible with data', 'PlaManej': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Ato Leg': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Jurisdic': 'inline label - visible with data', 'Categor': 'inline label - visible with data', 'AnoDisponi': 'inline label - visible with data', });
lyr_ServiosApoio_6.set('fieldLabels', {'Serv.Ofer.': 'inline label - visible with data', 'Empr.Forn': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_Equipamentos_7.set('fieldLabels', {'TipoEquip': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'TempoUso': 'inline label - visible with data', 'DataFabr': 'inline label - visible with data', });
lyr_Fundeadouros_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Quant': 'inline label - visible with data', 'Localiza': 'inline label - visible with data', 'Profundida': 'inline label - visible with data', 'Compr': 'inline label - visible with data', 'Larg': 'inline label - visible with data', 'Diametro': 'inline label - visible with data', });
lyr_BaciadeEvoluoCurtoPrazo_9.set('fieldLabels', {'Localiza': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Prof': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Diametro': 'inline label - visible with data', 'Largura': 'inline label - visible with data', });
lyr_BaciadeEvoluoSituaoAtual_10.set('fieldLabels', {'Localiza': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Prof': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Diametro': 'inline label - visible with data', 'Largura': 'inline label - visible with data', });
lyr_CanaldeAcesso_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Comprim': 'inline label - visible with data', 'Diame': 'inline label - visible with data', 'Profu(m)': 'inline label - visible with data', 'Larg.min m': 'inline label - visible with data', });
lyr_AcessosHidroviriosLongoPrazo_12.set('fieldLabels', {'nome': 'inline label - visible with data', 'TipoNave': 'inline label - visible with data', 'extensaoKm': 'inline label - visible with data', 'ProfundMin': 'inline label - visible with data', 'ProfundMax': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosHidroviriosSituaoAtual_13.set('fieldLabels', {'nome': 'inline label - visible with data', 'TipoNave': 'inline label - visible with data', 'extensaoKm': 'inline label - visible with data', 'ProfundMin': 'inline label - visible with data', 'ProfundMax': 'inline label - visible with data', 'Atualizaca': 'inline label - visible with data', });
lyr_AcessosInternosRodovirios_14.set('fieldLabels', {'Recinto': 'inline label - visible with data', 'ExtKm': 'inline label - visible with data', });
lyr_AcessosRodoviriosMdioPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Jurisdic': 'inline label - visible with data', 'Classifi': 'inline label - visible with data', 'Concess': 'inline label - visible with data', 'Municipi': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMDia': 'inline label - visible with data', 'Exensao_KM': 'inline label - visible with data', });
lyr_AcessosRodoviriosSituaoAtual_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Jurisdic': 'inline label - visible with data', 'Classifi': 'inline label - visible with data', 'Concess': 'inline label - visible with data', 'Municipi': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMDia': 'inline label - visible with data', 'Exensao_KM': 'inline label - visible with data', });
lyr_InstalaesNoOperacionais_17.set('fieldLabels', {'Uso Inst': 'inline label - visible with data', 'Tip Inst': 'inline label - visible with data', 'Reg Expl': 'inline label - visible with data', 'Justific': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_InstalaesRetroporturias_18.set('fieldLabels', {'Tip Inst': 'inline label - visible with data', 'Propriet': 'inline label - visible with data', 'ServOfer': 'inline label - visible with data', 'Produtos': 'inline label - visible with data', 'RegExplo': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Captone': 'inline label - visible with data', 'capm3': 'inline label - visible with data', 'Estaci': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivadoEntornodaPoligonal_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Cod TUP': 'inline label - visible with data', 'Situacao': 'inline label - visible with data', 'Gestao': 'inline label - visible with data', 'Tip Prod': 'inline label - visible with data', 'Modalid': 'inline label - visible with data', 'Companhi': 'inline label - visible with data', 'CNPJ': 'inline label - visible with data', 'Inst Leg': 'inline label - visible with data', 'Endereco': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Profun': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'capacidade': 'inline label - visible with data', });
lyr_Acostagem_22.set('fieldLabels', {'Id Berco': 'inline label - visible with data', 'EstaCons': 'inline label - visible with data', 'Caracter': 'inline label - visible with data', 'PrincProd': 'inline label - visible with data', 'Compriment': 'inline label - visible with data', 'Profundida': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_23.set('fieldLabels', {'Tipo Inst': 'inline label - visible with data', 'Capac.ton.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Vol. m³': 'inline label - visible with data', 'Reg.Expl.': 'inline label - visible with data', 'Local': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_24.set('fieldLabels', {'Tipo Inst': 'inline label - visible with data', 'Capac.ton': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Vol. m³': 'inline label - visible with data', 'Local': 'inline label - visible with data', 'Reg.Expl.': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldLabels', {'Tipo Inst': 'inline label - visible with data', 'Capac.ton': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Vol. m³': 'inline label - visible with data', 'Reg.Expl.': 'inline label - visible with data', 'Local': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_26.set('fieldLabels', {'Tipo Inst': 'inline label - visible with data', 'Capac.ton': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Vol. m³': 'inline label - visible with data', 'Reg.Expl.': 'inline label - visible with data', 'Local': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPorto_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhi': 'inline label - visible with data', 'Tip Prod': 'inline label - visible with data', 'Inst Leg': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_reasArrendveisLongoPrazo_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisMdioPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisCurtoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisSituaoAtual_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendadas_32.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'UF': 'hidden field', 'AP': 'hidden field', 'Contrato': 'inline label - visible with data', 'Arr orig': 'inline label - visible with data', 'Arr atua': 'inline label - visible with data', 'Tip inst': 'inline label - visible with data', 'Objeto': 'inline label - visible with data', 'Finalid': 'inline label - visible with data', 'Pra Cont': 'hidden field', 'Val unit': 'hidden field', 'Val mes': 'hidden field', 'Pend jur': 'hidden field', 'QPendJur': 'hidden field', 'Obs': 'inline label - visible with data', 'Carg Mov': 'inline label - visible with data', 'Res 1837': 'hidden field', 'Prorroga': 'hidden field', 'Sit Contab': 'hidden field', 'Res 525': 'hidden field', 'DataCont': 'hidden field', 'DataArre': 'inline label - visible with data', 'DataTerm': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', 'NTAdit': 'hidden field', });
lyr_ZoneamentoLongoPrazo_33.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Observacao': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_ZoneamentoMdioPrazo_34.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Observacao': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_ZoneamentoCurtoPrazo_35.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Observacao': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_ZoneamentoSituaoAtual_36.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Observacao': 'inline label - visible with data', 'Aream2': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeItaja_37.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeItaja_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});