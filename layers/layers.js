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
var format_leveloftrafficstress_5 = new ol.format.GeoJSON();
var features_leveloftrafficstress_5 = format_leveloftrafficstress_5.readFeatures(json_leveloftrafficstress_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leveloftrafficstress_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leveloftrafficstress_5.addFeatures(features_leveloftrafficstress_5);
var lyr_leveloftrafficstress_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leveloftrafficstress_5, 
                style: style_leveloftrafficstress_5,
                popuplayertitle: "level of traffic stress",
                interactive: true,
    title: 'level of traffic stress<br />\
    <img src="styles/legend/leveloftrafficstress_5_0.png" /> 1<br />\
    <img src="styles/legend/leveloftrafficstress_5_1.png" /> 2<br />\
    <img src="styles/legend/leveloftrafficstress_5_2.png" /> 3<br />\
    <img src="styles/legend/leveloftrafficstress_5_3.png" /> 4<br />'
        });
var format_slope_6 = new ol.format.GeoJSON();
var features_slope_6 = format_slope_6.readFeatures(json_slope_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slope_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slope_6.addFeatures(features_slope_6);
var lyr_slope_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slope_6, 
                style: style_slope_6,
                popuplayertitle: "slope",
                interactive: true,
    title: 'slope<br />\
    <img src="styles/legend/slope_6_0.png" /> Up to 1%<br />\
    <img src="styles/legend/slope_6_1.png" /> > 1% up to 2.5%<br />\
    <img src="styles/legend/slope_6_2.png" /> > 2.5% up to 5%<br />\
    <img src="styles/legend/slope_6_3.png" /> > 5% up to 10%<br />\
    <img src="styles/legend/slope_6_4.png" /> > 10%<br />'
        });
var format_lanenumbersoneway_7 = new ol.format.GeoJSON();
var features_lanenumbersoneway_7 = format_lanenumbersoneway_7.readFeatures(json_lanenumbersoneway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lanenumbersoneway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lanenumbersoneway_7.addFeatures(features_lanenumbersoneway_7);
var lyr_lanenumbersoneway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lanenumbersoneway_7, 
                style: style_lanenumbersoneway_7,
                popuplayertitle: "lane numbers (one way)",
                interactive: true,
    title: 'lane numbers (one way)<br />\
    <img src="styles/legend/lanenumbersoneway_7_0.png" /> 1<br />\
    <img src="styles/legend/lanenumbersoneway_7_1.png" /> 2<br />\
    <img src="styles/legend/lanenumbersoneway_7_2.png" /> 3 to 4<br />\
    <img src="styles/legend/lanenumbersoneway_7_3.png" /> 5 or more<br />'
        });
var format_speedlimit_8 = new ol.format.GeoJSON();
var features_speedlimit_8 = format_speedlimit_8.readFeatures(json_speedlimit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_speedlimit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_speedlimit_8.addFeatures(features_speedlimit_8);
var lyr_speedlimit_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_speedlimit_8, 
                style: style_speedlimit_8,
                popuplayertitle: "speed limit",
                interactive: true,
    title: 'speed limit<br />\
    <img src="styles/legend/speedlimit_8_0.png" /> Up to 30 km/h<br />\
    <img src="styles/legend/speedlimit_8_1.png" /> > 30 km/h up to 40 km/h<br />\
    <img src="styles/legend/speedlimit_8_2.png" /> > 40 km/h up to 50 km/h<br />\
    <img src="styles/legend/speedlimit_8_3.png" /> > 50 km/h up to 60 km/h<br />\
    <img src="styles/legend/speedlimit_8_4.png" /> > 60 km/h hp to 80 km/h<br />\
    <img src="styles/legend/speedlimit_8_5.png" /> > 80 km/h<br />'
        });
var format_cyclewaystatus_9 = new ol.format.GeoJSON();
var features_cyclewaystatus_9 = format_cyclewaystatus_9.readFeatures(json_cyclewaystatus_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclewaystatus_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclewaystatus_9.addFeatures(features_cyclewaystatus_9);
var lyr_cyclewaystatus_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclewaystatus_9, 
                style: style_cyclewaystatus_9,
                popuplayertitle: "cycleway status",
                interactive: true,
    title: 'cycleway status<br />\
    <img src="styles/legend/cyclewaystatus_9_0.png" /> bikepath<br />\
    <img src="styles/legend/cyclewaystatus_9_1.png" /> shared path<br />\
    <img src="styles/legend/cyclewaystatus_9_2.png" /> separated lane<br />\
    <img src="styles/legend/cyclewaystatus_9_3.png" /> simple lane<br />\
    <img src="styles/legend/cyclewaystatus_9_4.png" /> shared street<br />\
    <img src="styles/legend/cyclewaystatus_9_5.png" /> none<br />'
        });
var format_highwaytype_10 = new ol.format.GeoJSON();
var features_highwaytype_10 = format_highwaytype_10.readFeatures(json_highwaytype_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwaytype_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highwaytype_10.addFeatures(features_highwaytype_10);
var lyr_highwaytype_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highwaytype_10, 
                style: style_highwaytype_10,
                popuplayertitle: "highway type",
                interactive: true,
    title: 'highway type<br />\
    <img src="styles/legend/highwaytype_10_0.png" /> motorway<br />\
    <img src="styles/legend/highwaytype_10_1.png" /> arterial<br />\
    <img src="styles/legend/highwaytype_10_2.png" /> collector<br />\
    <img src="styles/legend/highwaytype_10_3.png" /> local<br />\
    <img src="styles/legend/highwaytype_10_4.png" /> offroad<br />'
        });
var format_intersectiontype_11 = new ol.format.GeoJSON();
var features_intersectiontype_11 = format_intersectiontype_11.readFeatures(json_intersectiontype_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersectiontype_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersectiontype_11.addFeatures(features_intersectiontype_11);
var lyr_intersectiontype_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersectiontype_11, 
                style: style_intersectiontype_11,
                popuplayertitle: "intersection type",
                interactive: true,
    title: 'intersection type<br />\
    <img src="styles/legend/intersectiontype_11_0.png" /> signalised<br />\
    <img src="styles/legend/intersectiontype_11_1.png" /> roundabout<br />\
    <img src="styles/legend/intersectiontype_11_2.png" /> simple<br />'
        });
var group_networknodes = new ol.layer.Group({
                                layers: [lyr_intersectiontype_11,],
                                fold: "open",
                                title: "network nodes"});
var group_networklinks = new ol.layer.Group({
                                layers: [lyr_publictransport_4,lyr_leveloftrafficstress_5,lyr_slope_6,lyr_lanenumbersoneway_7,lyr_speedlimit_8,lyr_cyclewaystatus_9,lyr_highwaytype_10,],
                                fold: "open",
                                title: "network links"});
var group_Destinations = new ol.layer.Group({
                                layers: [lyr_destinationtypepoints_1,lyr_destinationtypelinesbendigo_parking_2,lyr_destinationtypepolygons_3,],
                                fold: "open",
                                title: "Destinations"});

lyr_OpenStreetMap_0.setVisible(true);lyr_destinationtypepoints_1.setVisible(false);lyr_destinationtypelinesbendigo_parking_2.setVisible(false);lyr_destinationtypepolygons_3.setVisible(false);lyr_publictransport_4.setVisible(false);lyr_leveloftrafficstress_5.setVisible(false);lyr_slope_6.setVisible(false);lyr_lanenumbersoneway_7.setVisible(false);lyr_speedlimit_8.setVisible(false);lyr_cyclewaystatus_9.setVisible(true);lyr_highwaytype_10.setVisible(false);lyr_intersectiontype_11.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_Destinations,group_networklinks,group_networknodes];
lyr_destinationtypepoints_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypepolygons_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_publictransport_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'public_transport': 'public_transport', });
lyr_leveloftrafficstress_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lvl_traf_stress': 'lvl_traf_stress', });
lyr_slope_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'slope': 'slope', });
lyr_lanenumbersoneway_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lanes': 'lanes', });
lyr_speedlimit_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'speed_limit': 'speed_limit', });
lyr_cyclewaystatus_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_highwaytype_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'highway_type': 'highway_type', });
lyr_intersectiontype_11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'type': 'type', });
lyr_destinationtypepoints_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypepolygons_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_publictransport_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'public_transport': 'TextEdit', });
lyr_leveloftrafficstress_5.set('fieldImages', {'ogc_fid': 'TextEdit', 'lvl_traf_stress': 'TextEdit', });
lyr_slope_6.set('fieldImages', {'ogc_fid': 'TextEdit', 'slope': 'TextEdit', });
lyr_lanenumbersoneway_7.set('fieldImages', {'ogc_fid': 'TextEdit', 'lanes': 'TextEdit', });
lyr_speedlimit_8.set('fieldImages', {'ogc_fid': 'TextEdit', 'speed_limit': 'TextEdit', });
lyr_cyclewaystatus_9.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_highwaytype_10.set('fieldImages', {'ogc_fid': 'TextEdit', 'highway_type': 'TextEdit', });
lyr_intersectiontype_11.set('fieldImages', {'ogc_fid': 'TextEdit', 'type': 'TextEdit', });
lyr_destinationtypepoints_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypepolygons_3.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_publictransport_4.set('fieldLabels', {'ogc_fid': 'hidden field', 'public_transport': 'inline label - visible with data', });
lyr_leveloftrafficstress_5.set('fieldLabels', {'ogc_fid': 'hidden field', 'lvl_traf_stress': 'inline label - visible with data', });
lyr_slope_6.set('fieldLabels', {'ogc_fid': 'hidden field', 'slope': 'inline label - visible with data', });
lyr_lanenumbersoneway_7.set('fieldLabels', {'ogc_fid': 'no label', 'lanes': 'inline label - visible with data', });
lyr_speedlimit_8.set('fieldLabels', {'ogc_fid': 'hidden field', 'speed_limit': 'inline label - visible with data', });
lyr_cyclewaystatus_9.set('fieldLabels', {'ogc_fid': 'no label', 'cycleway': 'inline label - always visible', });
lyr_highwaytype_10.set('fieldLabels', {'ogc_fid': 'no label', 'highway_type': 'inline label - always visible', });
lyr_intersectiontype_11.set('fieldLabels', {'ogc_fid': 'hidden field', 'type': 'inline label - visible with data', });
lyr_intersectiontype_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});