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
var format_statewidepublictransport_4 = new ol.format.GeoJSON();
var features_statewidepublictransport_4 = format_statewidepublictransport_4.readFeatures(json_statewidepublictransport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_statewidepublictransport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_statewidepublictransport_4.addFeatures(features_statewidepublictransport_4);
var lyr_statewidepublictransport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_statewidepublictransport_4, 
                style: style_statewidepublictransport_4,
                popuplayertitle: "statewide public transport",
                interactive: true,
    title: 'statewide public transport<br />\
    <img src="styles/legend/statewidepublictransport_4_0.png" /> train<br />\
    <img src="styles/legend/statewidepublictransport_4_1.png" /> bus<br />'
        });
var format_statewidearterialroads_5 = new ol.format.GeoJSON();
var features_statewidearterialroads_5 = format_statewidearterialroads_5.readFeatures(json_statewidearterialroads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_statewidearterialroads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_statewidearterialroads_5.addFeatures(features_statewidearterialroads_5);
var lyr_statewidearterialroads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_statewidearterialroads_5, 
                style: style_statewidearterialroads_5,
                popuplayertitle: "statewide arterial roads",
                interactive: true,
    title: 'statewide arterial roads<br />\
    <img src="styles/legend/statewidearterialroads_5_0.png" /> motorway<br />\
    <img src="styles/legend/statewidearterialroads_5_1.png" /> arterial<br />'
        });
var format_highwaytypeexcludingfootways_6 = new ol.format.GeoJSON();
var features_highwaytypeexcludingfootways_6 = format_highwaytypeexcludingfootways_6.readFeatures(json_highwaytypeexcludingfootways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highwaytypeexcludingfootways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highwaytypeexcludingfootways_6.addFeatures(features_highwaytypeexcludingfootways_6);
var lyr_highwaytypeexcludingfootways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highwaytypeexcludingfootways_6, 
                style: style_highwaytypeexcludingfootways_6,
                popuplayertitle: "highway type (excluding footways)",
                interactive: true,
    title: 'highway type (excluding footways)<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_6_0.png" /> motorway<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_6_1.png" /> arterial<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_6_2.png" /> collector<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_6_3.png" /> local<br />\
    <img src="styles/legend/highwaytypeexcludingfootways_6_4.png" /> offroad<br />'
        });
var format_publictransport_7 = new ol.format.GeoJSON();
var features_publictransport_7 = format_publictransport_7.readFeatures(json_publictransport_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_publictransport_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_publictransport_7.addFeatures(features_publictransport_7);
var lyr_publictransport_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_publictransport_7, 
                style: style_publictransport_7,
                popuplayertitle: "public transport",
                interactive: true,
    title: 'public transport<br />\
    <img src="styles/legend/publictransport_7_0.png" /> train<br />\
    <img src="styles/legend/publictransport_7_1.png" /> bus<br />'
        });
var format_leveloftrafficstress_8 = new ol.format.GeoJSON();
var features_leveloftrafficstress_8 = format_leveloftrafficstress_8.readFeatures(json_leveloftrafficstress_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leveloftrafficstress_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leveloftrafficstress_8.addFeatures(features_leveloftrafficstress_8);
var lyr_leveloftrafficstress_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_leveloftrafficstress_8, 
                style: style_leveloftrafficstress_8,
                popuplayertitle: "level of traffic stress",
                interactive: true,
    title: 'level of traffic stress<br />\
    <img src="styles/legend/leveloftrafficstress_8_0.png" /> 1<br />\
    <img src="styles/legend/leveloftrafficstress_8_1.png" /> 2<br />\
    <img src="styles/legend/leveloftrafficstress_8_2.png" /> 3<br />\
    <img src="styles/legend/leveloftrafficstress_8_3.png" /> 4<br />'
        });
var format_canopy_cover_9 = new ol.format.GeoJSON();
var features_canopy_cover_9 = format_canopy_cover_9.readFeatures(json_canopy_cover_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canopy_cover_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canopy_cover_9.addFeatures(features_canopy_cover_9);
var lyr_canopy_cover_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_canopy_cover_9, 
                style: style_canopy_cover_9,
                popuplayertitle: "canopy_cover",
                interactive: true,
    title: 'canopy_cover<br />\
    <img src="styles/legend/canopy_cover_9_0.png" /> Up to 10%<br />\
    <img src="styles/legend/canopy_cover_9_1.png" /> > 10% up to 25%<br />\
    <img src="styles/legend/canopy_cover_9_2.png" /> > 25% up to 50%<br />\
    <img src="styles/legend/canopy_cover_9_3.png" /> > 50%<br />'
        });
var format_slope_10 = new ol.format.GeoJSON();
var features_slope_10 = format_slope_10.readFeatures(json_slope_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slope_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slope_10.addFeatures(features_slope_10);
var lyr_slope_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slope_10, 
                style: style_slope_10,
                popuplayertitle: "slope",
                interactive: true,
    title: 'slope<br />\
    <img src="styles/legend/slope_10_0.png" /> Up to 1%<br />\
    <img src="styles/legend/slope_10_1.png" /> > 1% up to 2.5%<br />\
    <img src="styles/legend/slope_10_2.png" /> > 2.5% up to 5%<br />\
    <img src="styles/legend/slope_10_3.png" /> > 5% up to 10%<br />\
    <img src="styles/legend/slope_10_4.png" /> > 10%<br />'
        });
var format_lanenumbersoneway_11 = new ol.format.GeoJSON();
var features_lanenumbersoneway_11 = format_lanenumbersoneway_11.readFeatures(json_lanenumbersoneway_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lanenumbersoneway_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lanenumbersoneway_11.addFeatures(features_lanenumbersoneway_11);
var lyr_lanenumbersoneway_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lanenumbersoneway_11, 
                style: style_lanenumbersoneway_11,
                popuplayertitle: "lane numbers (one way)",
                interactive: true,
    title: 'lane numbers (one way)<br />\
    <img src="styles/legend/lanenumbersoneway_11_0.png" /> 1<br />\
    <img src="styles/legend/lanenumbersoneway_11_1.png" /> 2<br />\
    <img src="styles/legend/lanenumbersoneway_11_2.png" /> 3 to 4<br />\
    <img src="styles/legend/lanenumbersoneway_11_3.png" /> 5 or more<br />'
        });
var format_speedlimit_12 = new ol.format.GeoJSON();
var features_speedlimit_12 = format_speedlimit_12.readFeatures(json_speedlimit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_speedlimit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_speedlimit_12.addFeatures(features_speedlimit_12);
var lyr_speedlimit_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_speedlimit_12, 
                style: style_speedlimit_12,
                popuplayertitle: "speed limit",
                interactive: true,
    title: 'speed limit<br />\
    <img src="styles/legend/speedlimit_12_0.png" /> Up to 30 km/h<br />\
    <img src="styles/legend/speedlimit_12_1.png" /> > 30 km/h up to 40 km/h<br />\
    <img src="styles/legend/speedlimit_12_2.png" /> > 40 km/h up to 50 km/h<br />\
    <img src="styles/legend/speedlimit_12_3.png" /> > 50 km/h up to 60 km/h<br />\
    <img src="styles/legend/speedlimit_12_4.png" /> > 60 km/h hp to 80 km/h<br />\
    <img src="styles/legend/speedlimit_12_5.png" /> > 80 km/h<br />'
        });
var format_linkswithbikelaneprojecttags_13 = new ol.format.GeoJSON();
var features_linkswithbikelaneprojecttags_13 = format_linkswithbikelaneprojecttags_13.readFeatures(json_linkswithbikelaneprojecttags_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linkswithbikelaneprojecttags_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linkswithbikelaneprojecttags_13.addFeatures(features_linkswithbikelaneprojecttags_13);
var lyr_linkswithbikelaneprojecttags_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linkswithbikelaneprojecttags_13, 
                style: style_linkswithbikelaneprojecttags_13,
                popuplayertitle: "links with bikelane project tags",
                interactive: true,
                title: '<img src="styles/legend/linkswithbikelaneprojecttags_13.png" /> links with bikelane project tags'
            });
var format_everydayridesharedpaths_14 = new ol.format.GeoJSON();
var features_everydayridesharedpaths_14 = format_everydayridesharedpaths_14.readFeatures(json_everydayridesharedpaths_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_everydayridesharedpaths_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everydayridesharedpaths_14.addFeatures(features_everydayridesharedpaths_14);
var lyr_everydayridesharedpaths_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_everydayridesharedpaths_14, 
                style: style_everydayridesharedpaths_14,
                popuplayertitle: "everyday ride shared paths",
                interactive: true,
                title: '<img src="styles/legend/everydayridesharedpaths_14.png" /> everyday ride shared paths'
            });
var format_proposedprotectednetwork_15 = new ol.format.GeoJSON();
var features_proposedprotectednetwork_15 = format_proposedprotectednetwork_15.readFeatures(json_proposedprotectednetwork_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proposedprotectednetwork_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proposedprotectednetwork_15.addFeatures(features_proposedprotectednetwork_15);
var lyr_proposedprotectednetwork_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proposedprotectednetwork_15, 
                style: style_proposedprotectednetwork_15,
                popuplayertitle: "proposed protected network",
                interactive: true,
                title: '<img src="styles/legend/proposedprotectednetwork_15.png" /> proposed protected network'
            });
var format_cyclingmixedtraffic_16 = new ol.format.GeoJSON();
var features_cyclingmixedtraffic_16 = format_cyclingmixedtraffic_16.readFeatures(json_cyclingmixedtraffic_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingmixedtraffic_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingmixedtraffic_16.addFeatures(features_cyclingmixedtraffic_16);
var lyr_cyclingmixedtraffic_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingmixedtraffic_16, 
                style: style_cyclingmixedtraffic_16,
                popuplayertitle: "cycling: mixed traffic",
                interactive: true,
                title: '<img src="styles/legend/cyclingmixedtraffic_16.png" /> cycling: mixed traffic'
            });
var format_cyclingonroadlane_17 = new ol.format.GeoJSON();
var features_cyclingonroadlane_17 = format_cyclingonroadlane_17.readFeatures(json_cyclingonroadlane_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingonroadlane_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingonroadlane_17.addFeatures(features_cyclingonroadlane_17);
var lyr_cyclingonroadlane_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingonroadlane_17, 
                style: style_cyclingonroadlane_17,
                popuplayertitle: "cycling: onroad lane",
                interactive: true,
                title: '<img src="styles/legend/cyclingonroadlane_17.png" /> cycling: onroad lane'
            });
var format_cyclingseparatedlane_18 = new ol.format.GeoJSON();
var features_cyclingseparatedlane_18 = format_cyclingseparatedlane_18.readFeatures(json_cyclingseparatedlane_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingseparatedlane_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingseparatedlane_18.addFeatures(features_cyclingseparatedlane_18);
var lyr_cyclingseparatedlane_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingseparatedlane_18, 
                style: style_cyclingseparatedlane_18,
                popuplayertitle: "cycling: separated lane",
                interactive: true,
                title: '<img src="styles/legend/cyclingseparatedlane_18.png" /> cycling: separated lane'
            });
var format_cyclingoffroadpath_19 = new ol.format.GeoJSON();
var features_cyclingoffroadpath_19 = format_cyclingoffroadpath_19.readFeatures(json_cyclingoffroadpath_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cyclingoffroadpath_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cyclingoffroadpath_19.addFeatures(features_cyclingoffroadpath_19);
var lyr_cyclingoffroadpath_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cyclingoffroadpath_19, 
                style: style_cyclingoffroadpath_19,
                popuplayertitle: "cycling: offroad path",
                interactive: true,
                title: '<img src="styles/legend/cyclingoffroadpath_19.png" /> cycling: offroad path'
            });
var format_intersectiontype_20 = new ol.format.GeoJSON();
var features_intersectiontype_20 = format_intersectiontype_20.readFeatures(json_intersectiontype_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersectiontype_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersectiontype_20.addFeatures(features_intersectiontype_20);
var lyr_intersectiontype_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersectiontype_20, 
                style: style_intersectiontype_20,
                popuplayertitle: "intersection type",
                interactive: true,
    title: 'intersection type<br />\
    <img src="styles/legend/intersectiontype_20_0.png" /> signalised<br />\
    <img src="styles/legend/intersectiontype_20_1.png" /> roundabout<br />\
    <img src="styles/legend/intersectiontype_20_2.png" /> simple<br />'
        });
var group_networknodes = new ol.layer.Group({
                                layers: [lyr_intersectiontype_20,],
                                fold: "open",
                                title: "network nodes"});
var group_networklinks = new ol.layer.Group({
                                layers: [lyr_statewidepublictransport_4,lyr_statewidearterialroads_5,lyr_highwaytypeexcludingfootways_6,lyr_publictransport_7,lyr_leveloftrafficstress_8,lyr_canopy_cover_9,lyr_slope_10,lyr_lanenumbersoneway_11,lyr_speedlimit_12,lyr_linkswithbikelaneprojecttags_13,lyr_everydayridesharedpaths_14,lyr_proposedprotectednetwork_15,lyr_cyclingmixedtraffic_16,lyr_cyclingonroadlane_17,lyr_cyclingseparatedlane_18,lyr_cyclingoffroadpath_19,],
                                fold: "open",
                                title: "network links"});
var group_Destinations = new ol.layer.Group({
                                layers: [lyr_destinationtypepoints_1,lyr_destinationtypelinesbendigo_parking_2,lyr_destinationtypepolygons_3,],
                                fold: "open",
                                title: "Destinations"});

lyr_OpenStreetMap_0.setVisible(true);lyr_destinationtypepoints_1.setVisible(false);lyr_destinationtypelinesbendigo_parking_2.setVisible(false);lyr_destinationtypepolygons_3.setVisible(false);lyr_statewidepublictransport_4.setVisible(false);lyr_statewidearterialroads_5.setVisible(false);lyr_highwaytypeexcludingfootways_6.setVisible(false);lyr_publictransport_7.setVisible(false);lyr_leveloftrafficstress_8.setVisible(false);lyr_canopy_cover_9.setVisible(false);lyr_slope_10.setVisible(false);lyr_lanenumbersoneway_11.setVisible(false);lyr_speedlimit_12.setVisible(false);lyr_linkswithbikelaneprojecttags_13.setVisible(false);lyr_everydayridesharedpaths_14.setVisible(false);lyr_proposedprotectednetwork_15.setVisible(false);lyr_cyclingmixedtraffic_16.setVisible(true);lyr_cyclingonroadlane_17.setVisible(true);lyr_cyclingseparatedlane_18.setVisible(true);lyr_cyclingoffroadpath_19.setVisible(true);lyr_intersectiontype_20.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_Destinations,group_networklinks,group_networknodes];
lyr_destinationtypepoints_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_destinationtypepolygons_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'dest_type': 'dest_type', 'pt_stop_type': 'pt_stop_type', 'stop_name': 'stop_name', 'number_bay': 'number_bay', });
lyr_statewidepublictransport_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'public_transport': 'public_transport', });
lyr_statewidearterialroads_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'highway_type': 'highway_type', });
lyr_highwaytypeexcludingfootways_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'highway_type': 'highway_type', });
lyr_publictransport_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'public_transport': 'public_transport', });
lyr_leveloftrafficstress_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lvl_traf_stress': 'lvl_traf_stress', });
lyr_canopy_cover_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'canopy_cover': 'canopy_cover', });
lyr_slope_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'slope': 'slope', });
lyr_lanenumbersoneway_11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'lanes': 'lanes', });
lyr_speedlimit_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'speed_limit': 'speed_limit', });
lyr_linkswithbikelaneprojecttags_13.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'bikelane_left': 'bikelane_left', 'bikelane_right': 'bikelane_right', 'bikelane_left_lane': 'bikelane_left_lane', 'bikelane_right_lane': 'bikelane_right_lane', 'bikelane_left_width': 'bikelane_left_width', 'bikelane_right_width': 'bikelane_right_width', 'bikelane_left_traf_left': 'bikelane_left_traf_left', 'bikelane_left_traf_right': 'bikelane_left_traf_right', 'bikelane_right_traf_left': 'bikelane_right_traf_left', 'bikelane_right_traf_right': 'bikelane_right_traf_right', 'bikelane_left_buff_left': 'bikelane_left_buff_left', 'bikelane_left_buff_right': 'bikelane_left_buff_right', 'bikelane_right_buff_left': 'bikelane_right_buff_left', 'bikelane_right_buff_right': 'bikelane_right_buff_right', });
lyr_everydayridesharedpaths_14.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'shared_path': 'shared_path', });
lyr_proposedprotectednetwork_15.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'new_link_required': 'new_link_required', });
lyr_cyclingmixedtraffic_16.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingonroadlane_17.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingseparatedlane_18.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_cyclingoffroadpath_19.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cycleway': 'cycleway', });
lyr_intersectiontype_20.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'type': 'type', });
lyr_destinationtypepoints_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_destinationtypepolygons_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'dest_type': 'TextEdit', 'pt_stop_type': 'TextEdit', 'stop_name': 'TextEdit', 'number_bay': 'TextEdit', });
lyr_statewidepublictransport_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'public_transport': 'TextEdit', });
lyr_statewidearterialroads_5.set('fieldImages', {'ogc_fid': 'TextEdit', 'highway_type': 'TextEdit', });
lyr_highwaytypeexcludingfootways_6.set('fieldImages', {'ogc_fid': 'TextEdit', 'highway_type': 'TextEdit', });
lyr_publictransport_7.set('fieldImages', {'ogc_fid': 'TextEdit', 'public_transport': 'TextEdit', });
lyr_leveloftrafficstress_8.set('fieldImages', {'ogc_fid': 'TextEdit', 'lvl_traf_stress': 'TextEdit', });
lyr_canopy_cover_9.set('fieldImages', {'ogc_fid': 'TextEdit', 'canopy_cover': 'TextEdit', });
lyr_slope_10.set('fieldImages', {'ogc_fid': 'TextEdit', 'slope': 'TextEdit', });
lyr_lanenumbersoneway_11.set('fieldImages', {'ogc_fid': 'TextEdit', 'lanes': 'TextEdit', });
lyr_speedlimit_12.set('fieldImages', {'ogc_fid': 'TextEdit', 'speed_limit': 'TextEdit', });
lyr_linkswithbikelaneprojecttags_13.set('fieldImages', {'ogc_fid': 'TextEdit', 'bikelane_left': '', 'bikelane_right': '', 'bikelane_left_lane': '', 'bikelane_right_lane': '', 'bikelane_left_width': '', 'bikelane_right_width': '', 'bikelane_left_traf_left': '', 'bikelane_left_traf_right': '', 'bikelane_right_traf_left': '', 'bikelane_right_traf_right': '', 'bikelane_left_buff_left': '', 'bikelane_left_buff_right': '', 'bikelane_right_buff_left': '', 'bikelane_right_buff_right': '', });
lyr_everydayridesharedpaths_14.set('fieldImages', {'ogc_fid': 'TextEdit', 'shared_path': 'TextEdit', });
lyr_proposedprotectednetwork_15.set('fieldImages', {'ogc_fid': 'TextEdit', 'new_link_required': 'TextEdit', });
lyr_cyclingmixedtraffic_16.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingonroadlane_17.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingseparatedlane_18.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_cyclingoffroadpath_19.set('fieldImages', {'ogc_fid': 'TextEdit', 'cycleway': 'TextEdit', });
lyr_intersectiontype_20.set('fieldImages', {'ogc_fid': 'TextEdit', 'type': 'TextEdit', });
lyr_destinationtypepoints_1.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypelinesbendigo_parking_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_destinationtypepolygons_3.set('fieldLabels', {'ogc_fid': 'hidden field', 'dest_type': 'inline label - visible with data', 'pt_stop_type': 'inline label - visible with data', 'stop_name': 'inline label - visible with data', 'number_bay': 'inline label - visible with data', });
lyr_statewidepublictransport_4.set('fieldLabels', {'ogc_fid': 'hidden field', 'public_transport': 'inline label - visible with data', });
lyr_statewidearterialroads_5.set('fieldLabels', {'ogc_fid': 'hidden field', 'highway_type': 'inline label - visible with data', });
lyr_highwaytypeexcludingfootways_6.set('fieldLabels', {'ogc_fid': 'hidden field', 'highway_type': 'inline label - visible with data', });
lyr_publictransport_7.set('fieldLabels', {'ogc_fid': 'hidden field', 'public_transport': 'inline label - visible with data', });
lyr_leveloftrafficstress_8.set('fieldLabels', {'ogc_fid': 'hidden field', 'lvl_traf_stress': 'inline label - visible with data', });
lyr_canopy_cover_9.set('fieldLabels', {'ogc_fid': 'hidden field', 'canopy_cover': 'inline label - visible with data', });
lyr_slope_10.set('fieldLabels', {'ogc_fid': 'hidden field', 'slope': 'inline label - visible with data', });
lyr_lanenumbersoneway_11.set('fieldLabels', {'ogc_fid': 'hidden field', 'lanes': 'inline label - visible with data', });
lyr_speedlimit_12.set('fieldLabels', {'ogc_fid': 'hidden field', 'speed_limit': 'inline label - visible with data', });
lyr_linkswithbikelaneprojecttags_13.set('fieldLabels', {'ogc_fid': 'hidden field', 'bikelane_left': 'inline label - visible with data', 'bikelane_right': 'inline label - visible with data', 'bikelane_left_lane': 'inline label - visible with data', 'bikelane_right_lane': 'inline label - visible with data', 'bikelane_left_width': 'inline label - visible with data', 'bikelane_right_width': 'inline label - visible with data', 'bikelane_left_traf_left': 'inline label - visible with data', 'bikelane_left_traf_right': 'inline label - visible with data', 'bikelane_right_traf_left': 'inline label - visible with data', 'bikelane_right_traf_right': 'inline label - visible with data', 'bikelane_left_buff_left': 'inline label - visible with data', 'bikelane_left_buff_right': 'inline label - visible with data', 'bikelane_right_buff_left': 'inline label - visible with data', 'bikelane_right_buff_right': 'inline label - visible with data', });
lyr_everydayridesharedpaths_14.set('fieldLabels', {'ogc_fid': 'hidden field', 'shared_path': 'inline label - visible with data', });
lyr_proposedprotectednetwork_15.set('fieldLabels', {'ogc_fid': 'hidden field', 'new_link_required': 'inline label - visible with data', });
lyr_cyclingmixedtraffic_16.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingonroadlane_17.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingseparatedlane_18.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_cyclingoffroadpath_19.set('fieldLabels', {'ogc_fid': 'hidden field', 'cycleway': 'inline label - visible with data', });
lyr_intersectiontype_20.set('fieldLabels', {'ogc_fid': 'hidden field', 'type': 'inline label - visible with data', });
lyr_intersectiontype_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});