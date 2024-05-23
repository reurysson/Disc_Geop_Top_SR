/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 04 ###############################################
Objetivo: 
1 - Criar e manipular dicionários 

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
// INÍCIO
// Trabalhando com dicionários
// DICIONÁRIO - apresentado entre {}, é composto por strings e seu significado ou valor, ou seja, chave: valor.
// No exemplo abaixo temos um dicionário criado em JavaScript. No GEE devemos usar o construtor específico para esta finalidade, o ee.Dictionary.
var  dadosCidade = {
  'cidade': 'Teresina', 
  'population':868000, 
  'elevação': 79
};
print('Dados de Teresina', dadosCidade);

//Exemplo de dicionário criado com o construtor ee.Dictionay.
var dadosCidade2 = ee.Dictionary({
  cidade: 'Parnaíba', 
  populacao: 162159,
  elevacao: 5
});
print(dadosCidade2); // Observe que independent da ordem das chaves, o GEE/JS sempre irá ordenar em ordem crescente.

// Extrindo o valor de uma chave de um dicionário. O método ".get", do ee.Dictionary extrair um valor específico chave que é passada como string.
// Assim é possível usar o valor com entrada em outras etapas do código.
var pop_parn = dadosCidade2.get('populacao');
print(pop_parn);

//Alterando o valor de uma chave de um dicionário usando o método ".get"
//Aqui reaproveitamos o dicionário dadosCidades2 para criar outro com mesmo nome, porém com o valor atualizado.
dadosCidade2 = dadosCidade2.set('elevacao', 8);
print(dadosCidade2);


/*############# ATIVIDADE 01C #############

1° Crie um dicionário com dados de nome, código, área, população e densidade demográfica de cinco municípios do Piauí de sua escola.

*/


