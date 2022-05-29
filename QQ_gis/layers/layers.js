var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ขอบเขต'
            });
var format_Hospitals_2 = new ol.format.GeoJSON();
var features_Hospitals_2 = format_Hospitals_2.readFeatures(json_Hospitals_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_2.addFeatures(features_Hospitals_2);
var lyr_Hospitals_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitals_2, 
                style: style_Hospitals_2,
                interactive: true,
                title: '<img src="styles/legend/Hospitals_2.png" /> Hospitals'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: 'คะแนนการบริการ<br />\
    <img src="styles/legend/_3_0.png" /> ⭐⭐⭐<br />\
    <img src="styles/legend/_3_1.png" /> ⭐⭐⭐⭐<br />\
    <img src="styles/legend/_3_2.png" /> ⭐⭐⭐⭐⭐<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
    title: 'สังกัดโรงพยาบาล<br />\
    <img src="styles/legend/_4_0.png" />  โรงพยาบาลจุฬารัตน์ 3 อินเตอร์<br />\
    <img src="styles/legend/_4_1.png" />  โรงพยาบาลจุฬารัตน์ 9 แอร์พอร์ต<br />\
    <img src="styles/legend/_4_2.png" />  โรงพยาบาลพริ้นซ์ สุวรรณภูมิ <br />\
    <img src="styles/legend/_4_3.png" /> โรงพยาบาลเปาโล สมุทรปราการ<br />\
    <img src="styles/legend/_4_4.png" /> โรงพยาบาลวิภาราม ชัยปราการ<br />\
    <img src="styles/legend/_4_5.png" /> โรงพยาบาลสำโรง<br />'
        });
var format_Hospitels_5 = new ol.format.GeoJSON();
var features_Hospitels_5 = format_Hospitels_5.readFeatures(json_Hospitels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitels_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitels_5.addFeatures(features_Hospitels_5);
var lyr_Hospitels_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitels_5, 
                style: style_Hospitels_5,
                interactive: true,
                title: '<img src="styles/legend/Hospitels_5.png" /> Hospitels'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr_Hospitals_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_Hospitels_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr_Hospitals_2,lyr__3,lyr__4,lyr_Hospitels_5];
lyr__1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Hospitals_2.set('fieldAliases', {'ชื่อโรงพยาบาล': 'ชื่อโรงพยาบาล', 'ประเภท': 'ประเภท', 'การบริการ': 'การบริการ', 'สิทธิ': 'สิทธิ', 'ลิงค์': 'ลิงค์', 'lat': 'lat', 'long': 'long', });
lyr__3.set('fieldAliases', {'Hospitel': 'Hospitel', 'สังกัด': 'สังกัด', 'สิทธิ': 'สิทธิ', 'เบอร์': 'เบอร์', 'การบริการ': 'การบริการ', 'Lat': 'Lat', 'Long': 'Long', });
lyr__4.set('fieldAliases', {'Hospitel': 'Hospitel', 'สังกัด': 'สังกัด', 'สิทธิ': 'สิทธิ', 'เบอร์': 'เบอร์', 'การบริการ': 'การบริการ', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Hospitels_5.set('fieldAliases', {'Hospitel': 'Hospitel', 'สังกัด': 'สังกัด', 'สิทธิ': 'สิทธิ', 'เบอร์': 'เบอร์', 'Lat': 'Lat', 'Long': 'Long', });
lyr__1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Hospitals_2.set('fieldImages', {'ชื่อโรงพยาบาล': 'TextEdit', 'ประเภท': 'TextEdit', 'การบริการ': 'TextEdit', 'สิทธิ': 'TextEdit', 'ลิงค์': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr__3.set('fieldImages', {'Hospitel': 'TextEdit', 'สังกัด': 'TextEdit', 'สิทธิ': 'TextEdit', 'เบอร์': 'TextEdit', 'การบริการ': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr__4.set('fieldImages', {'Hospitel': 'TextEdit', 'สังกัด': 'TextEdit', 'สิทธิ': 'TextEdit', 'เบอร์': 'TextEdit', 'การบริการ': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Hospitels_5.set('fieldImages', {'Hospitel': 'TextEdit', 'สังกัด': 'TextEdit', 'สิทธิ': 'TextEdit', 'เบอร์': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr__1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Hospitals_2.set('fieldLabels', {'ชื่อโรงพยาบาล': 'header label', 'ประเภท': 'header label', 'การบริการ': 'header label', 'สิทธิ': 'header label', 'ลิงค์': 'header label', 'lat': 'no label', 'long': 'no label', });
lyr__3.set('fieldLabels', {'Hospitel': 'header label', 'สังกัด': 'header label', 'สิทธิ': 'header label', 'เบอร์': 'header label', 'การบริการ': 'header label', 'Lat': 'no label', 'Long': 'no label', });
lyr__4.set('fieldLabels', {'Hospitel': 'header label', 'สังกัด': 'header label', 'สิทธิ': 'header label', 'เบอร์': 'header label', 'การบริการ': 'header label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Hospitels_5.set('fieldLabels', {'Hospitel': 'header label', 'สังกัด': 'header label', 'สิทธิ': 'header label', 'เบอร์': 'header label', 'Lat': 'inline label', 'Long': 'inline label', });
lyr_Hospitels_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});