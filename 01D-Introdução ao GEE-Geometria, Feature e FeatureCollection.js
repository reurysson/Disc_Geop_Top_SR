/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central 
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 05 ###############################################
Objetivo: 
1 - Criar e manipular Geometrias, Feature e FeatureCollection

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
// PARTE 01

// Vamos configurar o GEE para mostar a imagem de satélite ao invés do mapa hidrido
// Pesquise no Docs mais opções de configuração do Map.setOption.
Map.setOptions("SATELLITE");

// Agora vamos apontar um local de interesse e o nível de zoom para visualização
// Pesquise no Docs mais opções de configuração do Map.centerObject. 
Map.centerObject(ee.Geometry.MultiPoint(-42.834984, -5.063569), 17);

// Com uso da ferramenta de desenho, vetorize a lagoa da zona norte de Teresina.
// Na seção "Imports" renomeia a "geometry" para "lagoa"
// Agora vamos adicionar a lagoa ao mapa
Map.addLayer(lagoa,{color: 'blue'}, 'Lagoa' );

// Vamos verificar o tipo de geometria 
print('Tipo de geometria: ', lagoa.type());

var area = lagoa.area();
print('Área da lagoa:', area);

var perimetro = lagoa.perimeter();
print('Perímetro da lagoa:', perimetro);

var coord = lagoa.coordinates();
print('Coordenadas', coord)

var centroide = lagoa.centroid();
Map.addLayer(centroide,{color: '#e7298a'}, 'Centróide')

//PARTE 02

//Podemos transformar uma geometria em uma Feature. 
//Diferentemente de uma geometria, uma Feature amazena atributos, 
//o equivalente ao um arquivo Shapefile single part.

var lagoa_f = ee.Feature(lagoa);
print('Tipo?', lagoa_f);

lagoa_f = lagoa_f.set(
  'NOME', 'Lagoa do Norte',
  'AREA', area,
  'PERIMETRO', perimetro,
  'PROFUNDIDADE', 2,
  'VOLUME', 100000
);
print(lagoa_f)

var buffer_lagoa =lagoa_f.buffer(50);
Map.addLayer(buffer_lagoa,{},'Buffer de 50m');

var buffer_ext =  buffer_lagoa.difference(lagoa_f);
Map.addLayer(buffer_ext,{},'Buffer Externo - 50m')

var area_buffer_ext = buffer_ext.area();
print('Área do Buffer',area_buffer_ext);

var lagoa_fc = ee.FeatureCollection(lagoa_f);
print(lagoa_fc)

Export.table.toAsset({
  collection: lagoa_fc, 
  description: 'Exportar_lagoa', 
  assetId: 'lagoa'
})

