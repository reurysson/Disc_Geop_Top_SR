/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central 
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 06 ###############################################
Objetivo: 
1 - Realizar um uplaod de um FeatureCollection
2 - Filtrar um FeatureCollection com base em suas propriedades e valores

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
// PARTE 01

// Vamos iniciar fazendo o upload do shapefile do Piauí para o Assets, mas antes crie uma pastas com nome "TOPICOS_SR".
// Ao fazer o upload do shapefile são necessários os arquivos: .shp, .dbf, .shx e .proj.
// Em seguida vamos criar um variável para armazenar o shapefile que baixamos do site do IBGE.
var pi = ee.FeatureCollection('users/reurysson/TOPICOS_SR/pi_municipios_2022'); //O endereço entre aspas, é o endereço do arquivo no seu Assets

//Adicionado o Piauí ao mapa
Map.addLayer(pi, {}, 'Piauí');

//Vamos selecionar apenas o município de Teresina
var teresina = pi.filter(ee.Filter.eq('NM_MUN', 'Teresina'));
Map.addLayer(teresina, {color: 'green'}, 'Teresina');

/*Com o município de Teresina filtrado, podemos selecionar suas propriedades.
Contudo, por se tratar de uma FeatuteCollection, poderíamos ter várias Features com o mesmo nome, 
o que, obviamente, não é o caso aqui, mas temos que usar o método .first() para selecionar "a primeira" ocorrência, 
e só em seguida extrair o dado de interesse com o método .get().
*/
var areaThe = teresina.first().get('AREA_KM2');
print('Área de Teresina:', areaThe);

var codThe = teresina.first().get('CD_MUN');
print('Código municipal: '+ codThe.getInfo());  //Observe a diferença entre os dois prints e o resultado no Console

//Agora vamos selecionar todos os municípios piauienses que integram a RIDE da Grande Teresina.
//Primeiro vamos criar uma lista com os nomes dos municípios. Os nomes devem ser escritos igual se encontram na tabela de atributos.
var rideMun = ee.List(['Altos', 'Beneditinos','Coivaras', 'Curralinhos',
'Demerval Lobão', 'José de Freitas', 'Lagoa Alegre', 'Lagoa do Piauí', 
'Miguel Leão', 'Monsenhor Gil', 'Nazária', "Pau D'arco do Piauí", 'Teresina', 'União']);

// Por fim, criaremos um filtro onde buscaremos na coluna "NM_MUN" todos os elementos da lista criada anteriormente.
var ride = pi.filter(ee.Filter.inList('NM_MUN', rideMun));
Map.addLayer(ride, {color:'gray'},'RIDE');

//Se quisermos apenas o contorno da RIDE podemos unir todas as geometrias em uma única (o equivalente à função dissolver)
var ride_dissolve = ride.union()
Map.addLayer(ride_dissolve,{},'Limite da RIDE')

//Vamos exportar a ride para o Assets para usarmos posteiormente
Export.table.toAsset({
  collection: ride, 
  description: 'ExportarRIDE', 
  assetId: 'rideTeresina', 
});


//PARTE 02
//Seleciondo os municípios com área inferiror a 500 km²
var pi_20k = pi.filter(ee.Filter.lte('AREA_KM2', 500))
Map.addLayer(pi_20k)


// DESAFIO
// Apresente no mapa os 3 municípios do Piauí com maiores áreas territoriais
var pi_ord_area = pi.sort('AREA_KM2', false);  //Ordenando a FC em ordem decrescente
var list_maiores = pi_ord_area.toList(3);      //Transf. a FC em uma lista e seleciona as três maiores
print('Maiores municípios',list_maiores)
var maiores_mun = ee.FeatureCollection(list_maiores) // Converte a lista em uma FC novamente
Map.addLayer(maiores_mun,{},'Maiores Municípios')





