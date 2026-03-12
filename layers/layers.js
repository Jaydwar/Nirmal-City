var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nirmal_Drain_1 = new ol.format.GeoJSON();
var features_Nirmal_Drain_1 = format_Nirmal_Drain_1.readFeatures(json_Nirmal_Drain_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nirmal_Drain_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nirmal_Drain_1.addFeatures(features_Nirmal_Drain_1);
var lyr_Nirmal_Drain_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nirmal_Drain_1, 
                style: style_Nirmal_Drain_1,
                popuplayertitle: 'Nirmal_Drain',
                interactive: true,
                title: '<img src="styles/legend/Nirmal_Drain_1.png" /> Nirmal_Drain'
            });
var format_WaterBody_2 = new ol.format.GeoJSON();
var features_WaterBody_2 = format_WaterBody_2.readFeatures(json_WaterBody_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterBody_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBody_2.addFeatures(features_WaterBody_2);
var lyr_WaterBody_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBody_2, 
                style: style_WaterBody_2,
                popuplayertitle: 'Water Body',
                interactive: true,
                title: '<img src="styles/legend/WaterBody_2.png" /> Water Body'
            });
var format_PhotoNirmal_3 = new ol.format.GeoJSON();
var features_PhotoNirmal_3 = format_PhotoNirmal_3.readFeatures(json_PhotoNirmal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhotoNirmal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhotoNirmal_3.addFeatures(features_PhotoNirmal_3);
var lyr_PhotoNirmal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhotoNirmal_3, 
                style: style_PhotoNirmal_3,
                popuplayertitle: 'Photo Nirmal',
                interactive: true,
                title: '<img src="styles/legend/PhotoNirmal_3.png" /> Photo Nirmal'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Nirmal_Drain_1.setVisible(true);lyr_WaterBody_2.setVisible(true);lyr_PhotoNirmal_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nirmal_Drain_1,lyr_WaterBody_2,lyr_PhotoNirmal_3];
lyr_Nirmal_Drain_1.set('fieldAliases', {'id': 'id', 'Num': 'Num', });
lyr_WaterBody_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_PhotoNirmal_3.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Nirmal_Drain_1.set('fieldImages', {'id': '', 'Num': '', });
lyr_WaterBody_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_PhotoNirmal_3.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Nirmal_Drain_1.set('fieldLabels', {'id': 'no label', 'Num': 'no label', });
lyr_WaterBody_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_PhotoNirmal_3.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_PhotoNirmal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});