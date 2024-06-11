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
var format_highwaytypeexcludingfootways_4 = new ol.format.GeoJSON();
var features_highwaytypeexcludingfootways_4 = format_highwaytypeexcludingfootways_4.readFeatures(json_highwaytypeexcludingfootways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwaytypeexcludingfootways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highwaytypeexcludingfootways_4.addFeatures(features_highwaytypeexcludingfootways_4);
var lyr_highwaytypeexcludingfootways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highwaytypeexcludingfootways_4, 
                style: style_highwaytypeexcludingfootways_4,
                popuplayertitle: "highway type (excluding footways)",
                interactive: true,
    title: 'highway type (excluding footways)<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_4_0.png" /> motorway<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_4_1.png" /> arterial<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_4_2.png" /> collector<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_4_3.png" /> local<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_4_4.png" /> offroad<br />'
        });
var format_publictransport_5 = new ol.format.GeoJSON();
var features_publictransport_5 = format_publictransport_5.readFeatures(json_publictransport_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_publictransport_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_publictransport_5.addFeatures(features_publictransport_5);
var lyr_publictransport_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_publictransport_5, 
                style: style_publictransport_5,
                popuplayertitle: "public transport",
                interactive: true,
    title: 'public transport<br />\
    <img src="styles/legend/publictransport_5_0.png" /> train<br />\
    <img src="styles/legend/publictransport_5_1.png" /> bus<br />'
        });
var format_leveloftrafficstress_6 = new ol.format.GeoJSON();
var features_leveloftrafficstress_6 = format_leveloftrafficstress_6.readFeatures(json_leveloftrafficstress_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leveloftrafficstress_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leveloftrafficstress_6.addFeatures(features_leveloftrafficstress_6);
var lyr_leveloftrafficstress_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leveloftrafficstress_6, 
                style: style_leveloftrafficstress_6,
                popuplayertitle: "level of traffic stress",
                interactive: true,
    title: 'level of traffic stress<br />\
    <img src="styles/legend/leveloftrafficstress_6_0.png" /> 1<br />\
    <img src="styles/legend/leveloftrafficstress_6_1.png" /> 2<br />\
    <img src="styles/legend/leveloftrafficstress_6_2.png" /> 3<br />\
    <img src="styles/legend/leveloftrafficstress_6_3.png" /> 4<br />'
        });
var format_canopy_cover_7 = new ol.format.GeoJSON();
var features_canopy_cover_7 = format_canopy_cover_7.readFeatures(json_canopy_cover_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canopy_cover_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canopy_cover_7.addFeatures(features_canopy_cover_7);
var lyr_canopy_cover_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_canopy_cover_7, 
                style: style_canopy_cover_7,
                popuplayertitle: "canopy_cover",
                interactive: true,
    title: 'canopy_cover<br />\
    <img src="styles/legend/canopy_cover_7_0.png" /> Up to 10% (or outside Bendigo)<br />\
    <img src="styles/legend/canopy_cover_7_1.png" /> > 10% up to 25%<br />\
    <img src="styles/legend/canopy_cover_7_2.png" /> > 25% up to 50%<br />\
    <img src="styles/legend/canopy_cover_7_3.png" /> > 50%<br />'
        });
var format_slope_8 = new ol.format.GeoJSON();
var features_slope_8 = format_slope_8.readFeatures(json_slope_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slope_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slope_8.addFeatures(features_slope_8);
var lyr_slope_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slope_8, 
                style: style_slope_8,
                popuplayertitle: "slope",
                interactive: true,
    title: 'slope<br />\
    <img src="styles/legend/slope_8_0.png" /> Up to 1%<br />\
    <img src="styles/legend/slope_8_1.png" /> > 1% up to 2.5%<br />\
    <img src="styles/legend/slope_8_2.png" /> > 2.5% up to 5%<br />\
    <img src="styles/legend/slope_8_3.png" /> > 5% up to 10%<br />\
    <img src="styles/legend/slope_8_4.png" /> > 10%<br />'
        });
var format_lanenumbersoneway_9 = new ol.format.GeoJSON();
var features_lanenumbersoneway_9 = format_lanenumbersoneway_9.readFeatures(json_lanenumbersoneway_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lanenumbersoneway_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lanenumbersoneway_9.addFeatures(features_lanenumbersoneway_9);
var lyr_lanenumbersoneway_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lanenumbersoneway_9, 
                style: style_lanenumbersoneway_9,
                popuplayertitle: "lane numbers (one way)",
                interactive: true,
    title: 'lane numbers (one way)<br />\
    <img src="styles/legend/lanenumbersoneway_9_0.png" /> 1<br />\
    <img src="styles/legend/lanenumbersoneway_9_1.png" /> 2<br />\
    <img src="styles/legend/lanenumbersoneway_9_2.png" /> 3 to 4<br />\
    <img src="styles/legend/lanenumbersoneway_9_3.png" /> 5 or more<br />'
        });
var format_speedlimit_10 = new ol.format.GeoJSON();
var features_speedlimit_10 = format_speedlimit_10.readFeatures(json_speedlimit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_speedlimit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_speedlimit_10.addFeatures(features_speedlimit_10);
var lyr_speedlimit_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_speedlimit_10, 
                style: style_speedlimit_10,
                popuplayertitle: "speed limit",
                interactive: true,
    title: 'speed limit<br />\
    <img src="styles/legend/speedlimit_10_0.png" /> Up to 30 km/h<br />\
    <img src="styles/legend/speedlimit_10_1.png" /> > 30 km/h up to 40 km/h<br />\
    <img src="styles/legend/speedlimit_10_2.png" /> > 40 km/h up to 50 km/h<br />\
    <img src="styles/legend/speedlimit_10_3.png" /> > 50 km/h up to 60 km/h<br />\
    <img src="styles/legend/speedlimit_10_4.png" /> > 60 km/h hp to 80 km/h<br />\
    <img src="styles/legend/speedlimit_10_5.png" /> > 80 km/h<br />'
        });
var format_linkswithbikelaneprojecttags_11 = new ol.format.GeoJSON();
var features_linkswithbikelaneprojecttags_11 = format_linkswithbikelaneprojecttags_11.readFeatures(json_linkswithbikelaneprojecttags_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linkswithbikelaneprojecttags_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linkswithbikelaneprojecttags_11.addFeatures(features_linkswithbikelaneprojecttags_11);
var lyr_linkswithbikelaneprojecttags_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linkswithbikelaneprojecttags_11, 
                style: style_linkswithbikelaneprojecttags_11,
                popuplayertitle: "links with bikelane project tags",
                interactive: true,
                    title: '<img src="styles/legend/linkswithbikelaneprojecttags_11.png" /> links with bikelane project tags'
                });
var format_everydayridesharedpaths_12 = new ol.format.GeoJSON();
var features_everydayridesharedpaths_12 = format_everydayridesharedpaths_12.readFeatures(json_everydayridesharedpaths_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_everydayridesharedpaths_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everydayridesharedpaths_12.addFeatures(features_everydayridesharedpaths_12);
var lyr_everydayridesharedpaths_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_everydayridesharedpaths_12, 
                style: style_everydayridesharedpaths_12,
                popuplayertitle: "everyday ride shared paths",
                interactive: true,
                    title: '<img src="styles/legend/everydayridesharedpaths_12.png" /> everyday ride shared paths'
                });
var format_proposedprotectednetwork_13 = new ol.format.GeoJSON();
var features_proposedprotectednetwork_13 = format_proposedprotectednetwork_13.readFeatures(json_proposedprotectednetwork_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proposedprotectednetwork_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proposedprotectednetwork_13.addFeatures(features_proposedprotectednetwork_13);
var lyr_proposedprotectednetwork_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proposedprotectednetwork_13, 
                style: style_proposedprotectednetwork_13,
                popuplayertitle: "proposed protected network",
                interactive: true,
                    title: '<img src="styles/legend/proposedprotectednetwork_13.png" /> proposed protected network'
                });
var format_cyclingmixedtraffic_14 = new ol.format.GeoJSON();
var features_cyclingmixedtraffic_14 = format_cyclingmixedtraffic_14.readFeatures(json_cyclingmixedtraffic_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingmixedtraffic_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingmixedtraffic_14.addFeatures(features_cyclingmixedtraffic_14);
var lyr_cyclingmixedtraffic_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingmixedtraffic_14, 
                style: style_cyclingmixedtraffic_14,
                popuplayertitle: "cycling: mixed traffic",
                interactive: true,
                    title: '<img src="styles/legend/cyclingmixedtraffic_14.png" /> cycling: mixed traffic'
                });
var format_cyclingonroadlane_15 = new ol.format.GeoJSON();
var features_cyclingonroadlane_15 = format_cyclingonroadlane_15.readFeatures(json_cyclingonroadlane_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingonroadlane_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingonroadlane_15.addFeatures(features_cyclingonroadlane_15);
var lyr_cyclingonroadlane_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingonroadlane_15, 
                style: style_cyclingonroadlane_15,
                popuplayertitle: "cycling: onroad lane",
                interactive: true,
                    title: '<img src="styles/legend/cyclingonroadlane_15.png" /> cycling: onroad lane'
                });
var format_cyclingseparatedlane_16 = new ol.format.GeoJSON();
var features_cyclingseparatedlane_16 = format_cyclingseparatedlane_16.readFeatures(json_cyclingseparatedlane_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingseparatedlane_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingseparatedlane_16.addFeatures(features_cyclingseparatedlane_16);
var lyr_cyclingseparatedlane_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingseparatedlane_16, 
                style: style_cyclingseparatedlane_16,
                popuplayertitle: "cycling: separated lane",
                interactive: true,
                    title: '<img src="styles/legend/cyclingseparatedlane_16.png" /> cycling: separated lane'
                });
var format_cyclingoffroadpath_17 = new ol.format.GeoJSON();
var features_cyclingoffroadpath_17 = format_cyclingoffroadpath_17.readFeatures(json_cyclingoffroadpath_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingoffroadpath_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingoffroadpath_17.addFeatures(features_cyclingoffroadpath_17);
var lyr_cyclingoffroadpath_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingoffroadpath_17, 
                style: style_cyclingoffroadpath_17,
                popuplayertitle: "cycling: offroad path",
                interactive: true,
                    title: '<img src="styles/legend/cyclingoffroadpath_17.png" /> cycling: offroad path'
                });
var format_intersectiontype_18 = new ol.format.GeoJSON();
var features_intersectiontype_18 = format_intersectiontype_18.readFeatures(json_intersectiontype_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersectiontype_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersectiontype_18.addFeatures(features_intersectiontype_18);
var lyr_intersectiontype_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersectiontype_18, 
                style: style_intersectiontype_18,
                popuplayertitle: "intersection type",
                interactive: true,
    title: 'intersection type<br />\
    <img src="styles/legend/intersectiontype_18_0.png" /> signalised<br />\
    <img src="styles/legend/intersectiontype_18_1.png" /> roundabout<br />\
    <img src="styles/legend/intersectiontype_18_2.png" /> simple<br />'
        });
var group_networknodes = new ol.layer.Group({
                                layers: [lyr_intersectiontype_18,],
                                fold: "open",
                                title: "network nodes"});
var group_networklinks = new ol.layer.Group({
                                layers: [lyr_highwaytypeexcludingfootways_4,lyr_publictransport_5,lyr_leveloftrafficstress_6,lyr_canopy_cover_7,lyr_slope_8,lyr_lanenumbersoneway_9,lyr_speedlimit_10,lyr_linkswithbikelaneprojecttags_11,lyr_everydayridesharedpaths_12,lyr_proposedprotectednetwork_13,lyr_cyclingmixedtraffic_14,lyr_cyclingonroadlane_15,lyr_cyclingseparatedlane_16,lyr_cyclingoffroadpath_17,],
                                fold: "open",
                                title: "network links"});
var group_Destinations = new ol.layer.Group({
                                layers: [lyr_destinationtypepoints_1,lyr_destinationtypelinesbendigo_parking_2,lyr_destinationtypepolygons_3,],
                                fold: "open",
                                title: "Destinations"});

lyr_OpenStreetMap_0.setVisible(true);lyr_destinationtypepoints_1.setVisible(false);lyr_destinationtypelinesbendigo_parking_2.setVisible(false);lyr_destinationtypepolygons_3.setVisible(false);lyr_highwaytypeexcludingfootways_4.setVisible(false);lyr_publictransport_5.setVisible(false);lyr_leveloftrafficstress_6.setVisible(false);lyr_canopy_cover_7.setVisible(false);lyr_slope_8.setVisible(false);lyr_lanenumbersoneway_9.setVisible(false);lyr_speedlimit_10.setVisible(false);lyr_linkswithbikelaneprojecttags_11.setVisible(false);lyr_everydayridesharedpaths_12.setVisible(false);lyr_proposedprotectednetwork_13.setVisible(false);lyr_cyclingmixedtraffic_14.setVisible(true);lyr_cyclingonroadlane_15.setVisible(true);lyr_cyclingseparatedlane_16.setVisible(true);lyr_cyclingoffroadpath_17.setVisible(true);lyr_intersectiontype_18.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_Destinations,group_networklinks,group_networknodes];
lyr_destinationtypepoints_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypepolygons_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_highwaytypeexcludingfootways_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'highway_type': 'highway_type', });
lyr_publictransport_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'public_transport': 'public_transport', });
lyr_leveloftrafficstress_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lvl_traf_stress': 'lvl_traf_stress', });
lyr_canopy_cover_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'canopy_cover': 'canopy_cover', });
lyr_slope_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'slope': 'slope', });
lyr_lanenumbersoneway_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lanes': 'lanes', });
lyr_speedlimit_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'speed_limit': 'speed_limit', });
lyr_linkswithbikelaneprojecttags_11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'bikelaneleft': 'bikelaneleft', 'bikelaneright': 'bikelaneright', 'bikelaneleftwidth': 'bikelaneleftwidth', 'bikelanerightwidth': 'bikelanerightwidth', 'bikelanelefttraf': 'bikelanelefttraf', 'bikelanerighttraf': 'bikelanerighttraf', });
lyr_everydayridesharedpaths_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'shared_path': 'shared_path', });
lyr_proposedprotectednetwork_13.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'new_link_required': 'new_link_required', });
lyr_cyclingmixedtraffic_14.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingonroadlane_15.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingseparatedlane_16.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingoffroadpath_17.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_intersectiontype_18.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'type': 'type', });
lyr_destinationtypepoints_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypepolygons_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_highwaytypeexcludingfootways_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'highway_type': 'TextEdit', });
lyr_publictransport_5.set('fieldImages', {'ogc_fid': 'TextEdit', 'public_transport': 'TextEdit', });
lyr_leveloftrafficstress_6.set('fieldImages', {'ogc_fid': 'TextEdit', 'lvl_traf_stress': 'TextEdit', });
lyr_canopy_cover_7.set('fieldImages', {'ogc_fid': 'TextEdit', 'canopy_cover': 'TextEdit', });
lyr_slope_8.set('fieldImages', {'ogc_fid': 'TextEdit', 'slope': 'TextEdit', });
lyr_lanenumbersoneway_9.set('fieldImages', {'ogc_fid': 'TextEdit', 'lanes': 'TextEdit', });
lyr_speedlimit_10.set('fieldImages', {'ogc_fid': 'TextEdit', 'speed_limit': 'TextEdit', });
lyr_linkswithbikelaneprojecttags_11.set('fieldImages', {'ogc_fid': 'TextEdit', 'bikelaneleft': 'TextEdit', 'bikelaneright': 'TextEdit', 'bikelaneleftwidth': 'TextEdit', 'bikelanerightwidth': 'TextEdit', 'bikelanelefttraf': 'TextEdit', 'bikelanerighttraf': 'TextEdit', });
lyr_everydayridesharedpaths_12.set('fieldImages', {'ogc_fid': 'TextEdit', 'shared_path': 'TextEdit', });
lyr_proposedprotectednetwork_13.set('fieldImages', {'ogc_fid': 'TextEdit', 'new_link_required': 'TextEdit', });
lyr_cyclingmixedtraffic_14.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingonroadlane_15.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingseparatedlane_16.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingoffroadpath_17.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_intersectiontype_18.set('fieldImages', {'ogc_fid': 'TextEdit', 'type': 'TextEdit', });
lyr_destinationtypepoints_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypepolygons_3.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_highwaytypeexcludingfootways_4.set('fieldLabels', {'ogc_fid': 'hidden field', 'highway_type': 'inline label - always visible', });
lyr_publictransport_5.set('fieldLabels', {'ogc_fid': 'hidden field', 'public_transport': 'inline label - visible with data', });
lyr_leveloftrafficstress_6.set('fieldLabels', {'ogc_fid': 'hidden field', 'lvl_traf_stress': 'inline label - visible with data', });
lyr_canopy_cover_7.set('fieldLabels', {'ogc_fid': 'hidden field', 'canopy_cover': 'inline label - visible with data', });
lyr_slope_8.set('fieldLabels', {'ogc_fid': 'hidden field', 'slope': 'inline label - visible with data', });
lyr_lanenumbersoneway_9.set('fieldLabels', {'ogc_fid': 'hidden field', 'lanes': 'inline label - visible with data', });
lyr_speedlimit_10.set('fieldLabels', {'ogc_fid': 'hidden field', 'speed_limit': 'inline label - visible with data', });
lyr_linkswithbikelaneprojecttags_11.set('fieldLabels', {'ogc_fid': 'hidden field', 'bikelaneleft': 'inline label - visible with data', 'bikelaneright': 'inline label - visible with data', 'bikelaneleftwidth': 'inline label - visible with data', 'bikelanerightwidth': 'inline label - visible with data', 'bikelanelefttraf': 'inline label - visible with data', 'bikelanerighttraf': 'inline label - visible with data', });
lyr_everydayridesharedpaths_12.set('fieldLabels', {'ogc_fid': 'hidden field', 'shared_path': 'inline label - visible with data', });
lyr_proposedprotectednetwork_13.set('fieldLabels', {'ogc_fid': 'hidden field', 'new_link_required': 'inline label - visible with data', });
lyr_cyclingmixedtraffic_14.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingonroadlane_15.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingseparatedlane_16.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingoffroadpath_17.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_intersectiontype_18.set('fieldLabels', {'ogc_fid': 'hidden field', 'type': 'inline label - visible with data', });
lyr_intersectiontype_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});