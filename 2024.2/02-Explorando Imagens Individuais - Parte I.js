/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central 
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 07 ###############################################
Objetivo: 
1 - Explorar o catálogo de imagens do GEE;
2 - Visualizar imagens de satélite para diferentes regiões de interesse
3 - Realizar configurações básicas de visualizaçãço de imagens 


Referência:
CARDILLE, J. A. et al. Cloud-Based Remote Sensing with Google Earth Engine. Disponível em: https://www.eefabook.org/
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
//PARTE 1
//Vamos iniciar criando uma variável para armazenar o Modelo Digital de Elevação (MDE). Como o MDE corresponde a
//uma única imagem, usaremos o construtor ee.Image e selecionaremos a banda de elevação.

var mde = ee.Image("NASA/NASADEM_HGT/001");
print('MDE-Completo',mde);  //1-Observe no print que há três bandas. Usaremos a banda "elevation".

mde = mde.select('elevation'); // Aqui estamos fazendo um reaproveitamento de variável
print('MDE-Elevação',mde);

var mde_fill = ee.Terrain.fillMinima(mde);

//Vamos visualizar o MDE no mapa usando a função Map.addLayer(eeObject, visParams, name, shown, opacity).
//Nas configurações da camada podemos consultar os valores mínimo e máximo para inserirmos nos parâmetros de visualização.
Map.addLayer(mde_fill, {min:-26, max:3420},'NASADEM',1,1);

// O resultado é uma MDE apresentado em escala de cinza. Podemos colorir atribuíndo uma paleta de cores. 
// Use o Inspector para explorar a elevação de algumas parte do mundo

// Vamos definir uma área de interesse. Navege pelo mapa e crie um polígono para definir a área de interesse
var roi = ee.Feature(geometry);
Map.addLayer(roi, {}, 'Área de Interesse', 1, 1);

// Agora vamos recortar o mde usando nossa área de interesse como máscara.
mde_fill = mde_fill.clip(roi).focalMedian();

//Vamos centralizar a vizualização na nossa área de interesse
Map.centerObject(roi, 6);

//Agora vamos criar o relevo sombreado e a declividade da mesma região
var rel_sombra = ee.Terrain.hillshade(mde_fill, 350, 45)

var decliv =ee.Terrain.slope(mde_fill)



// Visualizando o resultado no mapa. Fonte esquema de cores: https://colorbrewer2.org/
Map.addLayer(rel_sombra, {min: 178, max:183}, 'Relevo Sombreado');
Map.addLayer(mde_fill,{palette:['#2887a1','#79a7ac','#b5c8b8','#edeac2','#d6bd8d','#bd925a','#A16928'], min:9, max:855}, 'MDE-Roi', 1, 0.5);
Map.addLayer(decliv, {palette: ['#3288bd','#99d594','#e6f598','#fee08b','#fc8d59','#d53e4f'], min: 0, max: 1.43}, 'Declividade')



// EXERCÍCIO
// 1° Mova o polígono para diferentes áreas, altere suas dimensões, e execute o programa novamente. 
// 2° Crie novos polígonos na mesma geometria e execute o programa novamente e avalie o resultado.

//DESAFIO//
// Pesquise uma forma de converter a raster declividade de graus para porcentagem
//var per = decliv.divide(180).multiply(Math.PI).tan().multiply(100).rename('Percent')
//Map.addLayer(per)