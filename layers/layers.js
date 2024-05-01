var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_destinationtypepoints_1 = new ol.format.GeoJSON();
var features_destinationtypepoints_1 = format_destinationtypepoints_1.readFeatures(json_destinationtypepoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destinationtypepoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destinationtypepoints_1.addFeatures(features_destinationtypepoints_1);
var lyr_destinationtypepoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_destinationtypepoints_1, 
                style: style_destinationtypepoints_1,
                popuplayertitle: "destination type (points)",
                interactive: true,
    title: 'destination type (points)<br />\
    <img src="styles/legend/destinationtypepoints_1_0.png" /> bank<br />\
    <img src="styles/legend/destinationtypepoints_1_1.png" /> cafe<br />\
    <img src="styles/legend/destinationtypepoints_1_2.png" /> community_centre<br />\
    <img src="styles/legend/destinationtypepoints_1_3.png" /> convenience_store<br />\
    <img src="styles/legend/destinationtypepoints_1_4.png" /> dentist<br />\
    <img src="styles/legend/destinationtypepoints_1_5.png" /> health_clinic<br />\
    <img src="styles/legend/destinationtypepoints_1_6.png" /> kindergarten<br />\
    <img src="styles/legend/destinationtypepoints_1_7.png" /> library<br />\
    <img src="styles/legend/destinationtypepoints_1_8.png" /> park<br />\
    <img src="styles/legend/destinationtypepoints_1_9.png" /> parking<br />\
    <img src="styles/legend/destinationtypepoints_1_10.png" /> pharmacy<br />\
    <img src="styles/legend/destinationtypepoints_1_11.png" /> playground<br />\
    <img src="styles/legend/destinationtypepoints_1_12.png" /> post_office<br />\
    <img src="styles/legend/destinationtypepoints_1_13.png" /> primary_school<br />\
    <img src="styles/legend/destinationtypepoints_1_14.png" /> pt_stop<br />\
    <img src="styles/legend/destinationtypepoints_1_15.png" /> restaurant<br />\
    <img src="styles/legend/destinationtypepoints_1_16.png" /> secondary_school<br />\
    <img src="styles/legend/destinationtypepoints_1_17.png" /> shop<br />\
    <img src="styles/legend/destinationtypepoints_1_18.png" /> sport<br />\
    <img src="styles/legend/destinationtypepoints_1_19.png" /> supermarket<br />\
    <img src="styles/legend/destinationtypepoints_1_20.png" /> bendigo_bike_racks<br />\
    <img src="styles/legend/destinationtypepoints_1_21.png" /> bendigo_parking<br />'
        });
var format_destinationtypelinesbendigo_parking_2 = new ol.format.GeoJSON();
var features_destinationtypelinesbendigo_parking_2 = format_destinationtypelinesbendigo_parking_2.readFeatures(json_destinationtypelinesbendigo_parking_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destinationtypelinesbendigo_parking_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destinationtypelinesbendigo_parking_2.addFeatures(features_destinationtypelinesbendigo_parking_2);
var lyr_destinationtypelinesbendigo_parking_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_destinationtypelinesbendigo_parking_2, 
                style: style_destinationtypelinesbendigo_parking_2,
                popuplayertitle: "destination type (lines - bendigo_parking)",
                interactive: true,
                title: '<img src="styles/legend/destinationtypelinesbendigo_parking_2.png" /> destination type (lines - bendigo_parking)'
            });
var format_destinationtypepolygons_3 = new ol.format.GeoJSON();
var features_destinationtypepolygons_3 = format_destinationtypepolygons_3.readFeatures(json_destinationtypepolygons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_destinationtypepolygons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_destinationtypepolygons_3.addFeatures(features_destinationtypepolygons_3);
var lyr_destinationtypepolygons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_destinationtypepolygons_3, 
                style: style_destinationtypepolygons_3,
                popuplayertitle: "destination type (polygons)",
                interactive: true,
    title: 'destination type (polygons)<br />\
    <img src="styles/legend/destinationtypepolygons_3_0.png" /> bank<br />\
    <img src="styles/legend/destinationtypepolygons_3_1.png" /> cafe<br />\
    <img src="styles/legend/destinationtypepolygons_3_2.png" /> community_centre<br />\
    <img src="styles/legend/destinationtypepolygons_3_3.png" /> convenience_store<br />\
    <img src="styles/legend/destinationtypepolygons_3_4.png" /> dentist<br />\
    <img src="styles/legend/destinationtypepolygons_3_5.png" /> health_clinic<br />\
    <img src="styles/legend/destinationtypepolygons_3_6.png" /> kindergarten<br />\
    <img src="styles/legend/destinationtypepolygons_3_7.png" /> library<br />\
    <img src="styles/legend/destinationtypepolygons_3_8.png" /> park<br />\
    <img src="styles/legend/destinationtypepolygons_3_9.png" /> parking<br />\
    <img src="styles/legend/destinationtypepolygons_3_10.png" /> pharmacy<br />\
    <img src="styles/legend/destinationtypepolygons_3_11.png" /> playground<br />\
    <img src="styles/legend/destinationtypepolygons_3_12.png" /> post_office<br />\
    <img src="styles/legend/destinationtypepolygons_3_13.png" /> primary_school<br />\
    <img src="styles/legend/destinationtypepolygons_3_14.png" /> pt_stop<br />\
    <img src="styles/legend/destinationtypepolygons_3_15.png" /> restaurant<br />\
    <img src="styles/legend/destinationtypepolygons_3_16.png" /> secondary_school<br />\
    <img src="styles/legend/destinationtypepolygons_3_17.png" /> shop<br />\
    <img src="styles/legend/destinationtypepolygons_3_18.png" /> sport<br />\
    <img src="styles/legend/destinationtypepolygons_3_19.png" /> supermarket<br />\
    <img src="styles/legend/destinationtypepolygons_3_20.png" /> bendigo_bike_racks<br />\
    <img src="styles/legend/destinationtypepolygons_3_21.png" /> bendigo_parking<br />'
        });
var format_publictransport_4 = new ol.format.GeoJSON();
var features_publictransport_4 = format_publictransport_4.readFeatures(json_publictransport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_publictransport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_publictransport_4.addFeatures(features_publictransport_4);
var lyr_publictransport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_publictransport_4, 
                style: style_publictransport_4,
                popuplayertitle: "public transport",
                interactive: true,
    title: 'public transport<br />\
    <img src="styles/legend/publictransport_4_0.png" /> train<br />\
    <img src="styles/legend/publictransport_4_1.png" /> bus<br />\
    <img src="styles/legend/publictransport_4_2.png" /> none<br />'
        });
var format_slope_5 = new ol.format.GeoJSON();
var features_slope_5 = format_slope_5.readFeatures(json_slope_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slope_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slope_5.addFeatures(features_slope_5);
var lyr_slope_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slope_5, 
                style: style_slope_5,
                popuplayertitle: "slope",
                interactive: true,
    title: 'slope<br />\
    <img src="styles/legend/slope_5_0.png" /> Up to 1%<br />\
    <img src="styles/legend/slope_5_1.png" /> > 1% up to 2.5%<br />\
    <img src="styles/legend/slope_5_2.png" /> > 2.5% up to 5%<br />\
    <img src="styles/legend/slope_5_3.png" /> > 5% up to 10%<br />\
    <img src="styles/legend/slope_5_4.png" /> > 10%<br />'
        });
var format_lanenumbersoneway_6 = new ol.format.GeoJSON();
var features_lanenumbersoneway_6 = format_lanenumbersoneway_6.readFeatures(json_lanenumbersoneway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lanenumbersoneway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lanenumbersoneway_6.addFeatures(features_lanenumbersoneway_6);
var lyr_lanenumbersoneway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lanenumbersoneway_6, 
                style: style_lanenumbersoneway_6,
                popuplayertitle: "lane numbers (one way)",
                interactive: true,
    title: 'lane numbers (one way)<br />\
    <img src="styles/legend/lanenumbersoneway_6_0.png" /> 1<br />\
    <img src="styles/legend/lanenumbersoneway_6_1.png" /> 2<br />\
    <img src="styles/legend/lanenumbersoneway_6_2.png" /> 3 to 4<br />\
    <img src="styles/legend/lanenumbersoneway_6_3.png" /> 5 or more<br />'
        });
var format_speedlimit_7 = new ol.format.GeoJSON();
var features_speedlimit_7 = format_speedlimit_7.readFeatures(json_speedlimit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_speedlimit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_speedlimit_7.addFeatures(features_speedlimit_7);
var lyr_speedlimit_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_speedlimit_7, 
                style: style_speedlimit_7,
                popuplayertitle: "speed limit",
                interactive: true,
    title: 'speed limit<br />\
    <img src="styles/legend/speedlimit_7_0.png" /> Up to 30 km/h<br />\
    <img src="styles/legend/speedlimit_7_1.png" /> > 30 km/h up to 40 km/h<br />\
    <img src="styles/legend/speedlimit_7_2.png" /> > 40 km/h up to 50 km/h<br />\
    <img src="styles/legend/speedlimit_7_3.png" /> > 50 km/h up to 60 km/h<br />\
    <img src="styles/legend/speedlimit_7_4.png" /> > 60 km/h hp to 80 km/h<br />\
    <img src="styles/legend/speedlimit_7_5.png" /> > 80 km/h<br />'
        });
var format_cyclewaystatus_8 = new ol.format.GeoJSON();
var features_cyclewaystatus_8 = format_cyclewaystatus_8.readFeatures(json_cyclewaystatus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclewaystatus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclewaystatus_8.addFeatures(features_cyclewaystatus_8);
var lyr_cyclewaystatus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclewaystatus_8, 
                style: style_cyclewaystatus_8,
                popuplayertitle: "cycleway status",
                interactive: true,
    title: 'cycleway status<br />\
    <img src="styles/legend/cyclewaystatus_8_0.png" /> bikepath<br />\
    <img src="styles/legend/cyclewaystatus_8_1.png" /> shared path<br />\
    <img src="styles/legend/cyclewaystatus_8_2.png" /> separated lane<br />\
    <img src="styles/legend/cyclewaystatus_8_3.png" /> simple lane<br />\
    <img src="styles/legend/cyclewaystatus_8_4.png" /> shared street<br />\
    <img src="styles/legend/cyclewaystatus_8_5.png" /> none<br />'
        });
var format_highwaytype_9 = new ol.format.GeoJSON();
var features_highwaytype_9 = format_highwaytype_9.readFeatures(json_highwaytype_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwaytype_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highwaytype_9.addFeatures(features_highwaytype_9);
var lyr_highwaytype_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highwaytype_9, 
                style: style_highwaytype_9,
                popuplayertitle: "highway type",
                interactive: true,
    title: 'highway type<br />\
    <img src="styles/legend/highwaytype_9_0.png" /> motorway<br />\
    <img src="styles/legend/highwaytype_9_1.png" /> arterial<br />\
    <img src="styles/legend/highwaytype_9_2.png" /> collector<br />\
    <img src="styles/legend/highwaytype_9_3.png" /> local<br />\
    <img src="styles/legend/highwaytype_9_4.png" /> offroad<br />'
        });
var format_intersectiontype_10 = new ol.format.GeoJSON();
var features_intersectiontype_10 = format_intersectiontype_10.readFeatures(json_intersectiontype_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersectiontype_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersectiontype_10.addFeatures(features_intersectiontype_10);
var lyr_intersectiontype_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersectiontype_10, 
                style: style_intersectiontype_10,
                popuplayertitle: "intersection type",
                interactive: true,
    title: 'intersection type<br />\
    <img src="styles/legend/intersectiontype_10_0.png" /> signalised<br />\
    <img src="styles/legend/intersectiontype_10_1.png" /> roundabout<br />\
    <img src="styles/legend/intersectiontype_10_2.png" /> simple<br />'
        });
var group_networknodes = new ol.layer.Group({
                                layers: [lyr_intersectiontype_10,],
                                fold: "open",
                                title: "network nodes"});
var group_networklinks = new ol.layer.Group({
                                layers: [lyr_publictransport_4,lyr_slope_5,lyr_lanenumbersoneway_6,lyr_speedlimit_7,lyr_cyclewaystatus_8,lyr_highwaytype_9,],
                                fold: "open",
                                title: "network links"});
var group_Destinations = new ol.layer.Group({
                                layers: [lyr_destinationtypepoints_1,lyr_destinationtypelinesbendigo_parking_2,lyr_destinationtypepolygons_3,],
                                fold: "open",
                                title: "Destinations"});

lyr_OpenStreetMap_0.setVisible(true);lyr_destinationtypepoints_1.setVisible(false);lyr_destinationtypelinesbendigo_parking_2.setVisible(false);lyr_destinationtypepolygons_3.setVisible(false);lyr_publictransport_4.setVisible(false);lyr_slope_5.setVisible(false);lyr_lanenumbersoneway_6.setVisible(false);lyr_speedlimit_7.setVisible(false);lyr_cyclewaystatus_8.setVisible(true);lyr_highwaytype_9.setVisible(false);lyr_intersectiontype_10.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_Destinations,group_networklinks,group_networknodes];
lyr_destinationtypepoints_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypepolygons_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_publictransport_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'public_transport': 'public_transport', });
lyr_slope_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'slope': 'slope', });
lyr_lanenumbersoneway_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lanes': 'lanes', });
lyr_speedlimit_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'speed_limit': 'speed_limit', });
lyr_cyclewaystatus_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_highwaytype_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'highway_type': 'highway_type', });
lyr_intersectiontype_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'type': 'type', });
lyr_destinationtypepoints_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypepolygons_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_publictransport_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'public_transport': 'TextEdit', });
lyr_slope_5.set('fieldImages', {'ogc_fid': 'TextEdit', 'slope': 'TextEdit', });
lyr_lanenumbersoneway_6.set('fieldImages', {'ogc_fid': 'TextEdit', 'lanes': 'TextEdit', });
lyr_speedlimit_7.set('fieldImages', {'ogc_fid': 'TextEdit', 'speed_limit': 'TextEdit', });
lyr_cyclewaystatus_8.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_highwaytype_9.set('fieldImages', {'ogc_fid': 'TextEdit', 'highway_type': 'TextEdit', });
lyr_intersectiontype_10.set('fieldImages', {'ogc_fid': 'TextEdit', 'type': 'TextEdit', });
lyr_destinationtypepoints_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - always visible', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - always visible', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypepolygons_3.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - always visible', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_publictransport_4.set('fieldLabels', {'ogc_fid': 'hidden field', 'public_transport': 'inline label - always visible', });
lyr_slope_5.set('fieldLabels', {'ogc_fid': 'hidden field', 'slope': 'inline label - always visible', });
lyr_lanenumbersoneway_6.set('fieldLabels', {'ogc_fid': 'hidden field', 'lanes': 'inline label - always visible', });
lyr_speedlimit_7.set('fieldLabels', {'ogc_fid': 'hidden field', 'speed_limit': 'inline label - always visible', });
lyr_cyclewaystatus_8.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - always visible', });
lyr_highwaytype_9.set('fieldLabels', {'ogc_fid': 'hidden field', 'highway_type': 'inline label - always visible', });
lyr_intersectiontype_10.set('fieldLabels', {'ogc_fid': 'hidden field', 'type': 'inline label - always visible', });
lyr_intersectiontype_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});