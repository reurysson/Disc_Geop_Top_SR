/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 01 ###############################################
Objetivo:
1 - conhecer a sintaxe Javascript
2 - conhecer os tipos mais comuns de variáveis
3 - realizar operação básicas com variáveis

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################

PARTE 1
Vamos começar escrevendo nosso primeiro programa no GEE para saudar o mundo.
*/
print("Olá, mundo!");  //A função print imprime o valor do argumento passado no Console

print("Saudação:","Olá, mundo!", "Prazer em conhecê-lo."); //A função print aceita vários argumentos


/*Exemplo de uma VARIÁVEL
Uma variável pode receber vários tipos de objetos, como números, strings, além de lista, imagens, coleções de imagens, features etc.
Exploramentos com mais detalhes cada tipo de objeto do GEE nas aulas seguintes.
*/

var  cidade = "Teresina"; //Teresina é uma string (cadeia de caracteres). Strings são sempre apresentadas em aspas duplas ou simples, mas não devemos misturá-las. 
print(cidade) ;

var populacao = 868000; // A variável população agora guarda um númento do tipo inteiro, mas o GEE trata qualquer número como float.
print(populacao);

//As variáveis abaixo guardam números reais (float - pontos flutuantes)
var coord_x = -42.811034;
var coord_y = -5.090300;

//É possível descobrir qual tipo de objeto uma variável guarda utilizando a função typeof
//Observe que no segundo objeto substituí o ';' por '+' para plotar o resultado na mesma linha. 
print("Cidade é uma:",typeof cidade, "Pupolação é um: " + typeof populacao);

//Exemplo de uma LISTA - Lista das maiores cidades do Brasil
//Uma variável pode receber uma lista de elementos
var maioresCidades = ['São Paulo', 'Rio de Janeiro', 'Brasília'];
print(maioresCidades);

//DICIONÁRIO - apresentado entre {}, é composto por strings e seu significado ou valor, ou seja, chave: valor.
var  dadosCidade = {
  'cidade': cidade, 
  'population':868000, 
  'elevação': 79
};
print('Dados de Teresina', dadosCidade);

//FUNÇÕES
//Funções são muito importantes no GEE. Ela são um espécie de bloco de códigos que executam um procedimento específico. 
//Uma vez criadas, as funções podem ser chamadas em várias partes do código, evitando ter que reescrever o código.
function cumprimentar (nome) {
  var cumprimento = 'Olá, ' + nome;
  return cumprimento;
}

print(cumprimentar('mundo!'));
print(cumprimentar('turma!'));

/* EXERCÍCIO
Essas são as cinco maiores cidades do mundo: Toquio, Delhi, Shangai, Cidade do México e São Paulo.
Crie uma variável chamada 'maioresCidadades' para armazenar a lista das cinco maiores cidades do mundo e print a lista no console.
*/
//Resposta:
var maioresCidades = ['Toquio', 'Delhi', 'Shangai', 'Cidade do México', 'São Paulo'];
print('Maiores cidades do mundo',maioresCidades);


//PARTE 2
//Criando uma variável para armazenar número inteiro
var n1 = 1;
var n2 = 3;

//Realizando uma soma entre dois números
var soma = n1 + n2;
print('soma é', soma);

//Usando uma função para somar dois numeros construtores do GEE
var novoNumero = ee.Number(n1).add(1);
print(novoNumero);

// Continuaremos tratando do números na próxima aula.

