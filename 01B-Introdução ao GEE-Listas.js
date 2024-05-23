/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 03 ###############################################
Objetivo: 
1 - Criar e manipular listas

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################
*/
//PARTE 01
//Trabalhando com lista
// Listas são armazenadas entre colchetes []. Listas são mutáveis, ou seja, é possível inserir, remover e alterar seus elementos.
// Criando uma sequência de números

var lista_js = [1, 2, 3]; //Essa é uma lista em JavaScript padrão;
print('Lista em JS: ', lista_js);

//Criando uma lista utilizando o construtor ee.List do GEE
var lista1 = ee.List([1, 2, 3, 4, 5]);
print('Lista em GEE: ', lista1);

//Criando uma sequência de números usando o método .sequence() do ee.List. Esse é o método preferível
var lista2 = ee.List.sequence(1,5);
print('Lista usado métodos do GEE: ' , lista2);

//Adicionando um elemento no final da lista
lista2 = lista2.add(7);
print('Nova sequência 2 : ', lista2);

//Adicionando novo elemento (nº 6) em um local específico de uma lista
lista2 =lista2.insert(5, 6); // Número 6 é inserido no posição 5
print('Nova sequência 2 com adição do n° 6: ', lista2);

//Visualizando parte de uma lista usanfo o método .slice do ee.List
print('Três primeiros elementos da lista: ', lista2.slice(0,3));  //Observe que o 3 é exclusive
print('Dois últimos elementos da lista: ', lista2.slice(-2));


// Removento um valor associado a uma posição específica: .splice()
lista2 = lista2.splice(0,1);
print('removento 1ª elemento da lista: ', lista2);

//Substituindo um valor associado a uma dada posição na lita: .set()
lista2 = lista2.set(2, 9);
print('Lista com valor substituído: ', lista2);

//Colocando um lista em ordem crescente
lista2 = lista2.sort();
print("Ordem crescente: ", lista2);

//Colocando um lista em ordem decrescente
lista2 = lista2.reverse();
print("Ordem decrescente: ", lista2);

//Verificando o número de elementos de uma lista
print('Tamanho da lista: ', lista2.length());


/*##################### ATIVIDADE 01B ###################

1° Crie uma variável chamada city_pi e armazene uma lista com o nome de quatro cidades piauienses: Corrente, Parnaíaba, Floriano e Picos.
2° Adicione a cidade de Uruçuí à lista criada anteriormente
3° Ordene a lista em ordem crescente
4° Substitua a última cidade da lista por Santa Filomena
5° Remova a primeira cidade da lista.
6° Crie uma lista com números para reprentar os anos de 1980 a 2025, contando de 5 em 5 anos.
*/



