/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 08 ###############################################
Objetivo: 
1 - Usar o editor de códigos para ler uma imagem
2 - Usar o editor de códigos para selecionar banda de uma imagem e visualisar como camadas de mapa

Referência:
CARDILLE, J. A. et al. Cloud-Based Remote Sensing with Google Earth Engine. Disponível em: https://www.eefabook.org/
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
// PARTE 1
// Acessando uma imagem Landsat 8.

var ls8= ee.Image("LANDSAT/LC08/C02/T1_L2/LC08_219063_20231015");
print('Landsat 8 - TERESINA',ls8); 

//Para faciliyar a visualização, vamos centralizar o mapa na imagem usanda a função Map.CenterObject(). Consulte os argumentos da função no Docs.
Map.centerObject(ls8, 10);

//Agora vamos adicionar a imagem ao mapa. A imagem aparecerá escura pois não configuramos os parâmetros de visualização.
//Faremos isso manualmente nesse primeiro momento. Depois automatizaremos. 
Map.addLayer(ls8,{},'Imagem Landsat 8')

//Podemos ainda visualizar bandas individuais da imagem, apenas indicando a banda como parâmetro de visualização no
//Map.addLayer(eeObject, visParams, name, shown, opacity). 
Map.addLayer(ls8, {bands: 'SR_B2', min: 8000, max: 17000}, 'Banda 2', 0, 1 ),

// Use o Inspector para clicar em algum alvo reconhecido na imagem e vizualizar os valores de reflectância em cada banca.
// Explore: Point, Pixels e Objects

// Vizualise outras bandas.
// Os valores de min e max são padrão, mas é possível consultar o valor real para cada imagem e alterar posteriormente.
Map.addLayer(ls8,{bands: "SR_B3", min: 8000, max: 17000}, 'Banda 3', 0, 1);
Map.addLayer(ls8,{bands: "SR_B4", min: 8000, max: 17000}, 'Banda 4', 0, 1);
Map.addLayer(ls8,{bands: "SR_B4", min: 8000, max: 17000}, 'Banda 4', 0, 1);
Map.addLayer(ls8,{bands: "SR_B5", min: 8000, max: 17000}, 'Banda 5', 0, 1);
// No janela flutuante de configuração das camadas (layers) interaja com a barra deslizante da opacidade e range clicando na engrenagem ao lado de cada camada.
// Explore as imagens à procura de padrões, diferenças de cores e tons entre as bandas em alvos específicos, como água e solo exposto.

// Ao usar o Map.AddLayer() no exemplo anterior, você apenas está  vizualisando as bandas. Não sendo possível realizar qualquer processamento com elas.
// Se deseja usar uma banda em algum processo é preciso selecioná-la da imagem e colocá-la dendro de uma variável.
// Vamos selecionar a banda do infravermelho próximo (B5) e colocá-la dentro de uma variável chamada "b5".
var b5 = ls8.select("SR_B5");
 print('Banda 5', b5);
 
// Vamos selecionar também a banda do vermelho (B4)
var b4 = ls8.select("SR_B4");
print('Banda 4', b4);

// Agora vamos vizualizar a banda 5 no mapa. A banda 4 já está lá.
Map.addLayer(b5, {min: 8000, max: 17000 }, 'Banda 5', 0, 1);
 
// Como agora temos as bandas 4 e 5 em variáveis específicas, podemos fazer operação matemáticas com elas, igual fizemos com números.
// Vamos calcular a diferença entre as bandas 5 e 4: b5-b4
var banda_dif = b5.subtract(b4);

// Podemos calcular a soma entre as duas bandas: b5+b4
var banda_sum = b5.add(b4)

// Também podemos calcular a razão entres os dois últimos resultados: (b5-b4)/(b5+b4)
var banda_rate = banda_dif.divide(banda_sum);

//Agora podemos visualizar no mapa esse resultado com o Map.addLayer()
//Map.addLayer(banda_rate, {min:-1, max:1}, 'NDVI', 0, 1);
Map.addLayer(banda_rate, {min:-0.0571, max:0.425}, 'NDVI', 0, 1);
// Acabamos de criar uma imagem NDVI, mas no GEE há uma forma mais fácil de fazer isso. Retornaremos a este assunto posteriormente.


//PARTE 2 - Composição Colorida
//Logo no início desse script visualizamos uma composição colorida feita manualmente. Agora vamos automatizar esse processo.
//Podemos fazer combinações de bandas para obter uma imagem colorida. Vamos vizualizar a imagem em cor natural R4G3B2;
Map.addLayer(ls8, {bands: ["SR_B4","SR_B3","SR_B2"], min:8000, max: 17000}, "Cor Natural", 0, 1)

Map.addLayer(ls8, FalsaCorVisParam, "Falsa Cor", 0, 1)  
//Observe acima que as configurações de visualização estão diferentes. O que foi feito? 
//Alternativamente poderíamos ter usado "["SR_B5","SR_B3","SR_B2"]" nos parâmetros de visualização, juntos com os valor min e max.

Map.addLayer(ls8, {bands: ["SR_B6","SR_B5","SR_B2"], min:7805, max: 23501}, "Falsa Cor de Ondas Curtas", 0, 1)
//Na visualização acima, os valores mínimo e máximo foram obtidos das configurações da camada.
