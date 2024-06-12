var size = 0;
var placement = 'point';
function categories_canopy_cover_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Up to 10%':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,153,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '> 10% up to 25%':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,209,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '> 25% up to 50%':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(62,142,196,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '> 50%':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,48,107,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.14}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_canopy_cover_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("canopy_cover");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_canopy_cover_9(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
