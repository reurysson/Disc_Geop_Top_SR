/*
INSTITUTO FEDERAL DO PIAUÍ - Campus Teresina Central
Curso Superior de Tecnologia em Geoprocessamento 
Disciplina: Tópicos Especiais em Sensoriamento Remoto: Sensoriamento Remoto Baseado em Computação em Nuvem
Prof. Dr. Reurysson Morais

############################################### AULA 02 ###############################################
Objetivo: 
1 - conhecer a sintaxe Javascript
2 - conhecer os tipos mais comuns de variáveis
3 - realizar operação básicas com variáveis

Referência:
GANDHI, U. End-to-End Google Earth Engine (Full Course Material): A hands-on introduction to applied remote sensing 
using Google Earth Engine. Disponível em: https://courses.spatialthoughts.com/end-to-end-gee.html
GOOGLE EARTH ENGINE. Documentation. Disponível em: https://developers.google.com/earth-engine/guides/getstarted
#######################################################################################################

PARTE 1 - Relambrado parte da aula anterior
Vamos começar escrevendo nosso primeiro programa no GEE para saudar o mundo
*/
print("Olá, mundo!");  //A função print imprime o valor do argumento parassado no Cosole

print("Saudação:","Olá, Google Earth Engine!", "Prazer em conhecê-lo."); //A função print aceita vários argumentos


//Criando variáveis
//Uma variável pode receber vários tipos de objetos, como números, strings, além de lista, imagens, coleções de imagens e features etc.

var  cidade = "Teresina"; //Teresina é uma string (cadeia de caracteres). Strings são sempre apresentadas em aspas duplas ou simples, mas não devemos misturá-las. 
print(cidade) ;

var populacao = 868000; // A var população agora guarda um númento do tipo inteiro
print(populacao);

//As variáveis abaixo guardam números reais (flat - pontos flutuantes)
var coord_x = -42.811034;
var coord_y = -5.090300;
print("A coordenada x e y:" + coord_x + ", " + coord_y);


//É possível descobrir qual tipo de objeto uma varriável guarda utilizando a função type()
print("Cidade é uma:",typeof cidade, "Pupolação é um: " + typeof populacao); //Observe que no segundo objeto substituí o ; por + para deixar na mesma linha.


//PARTE 2 - Continuação da aula anterior
//Explorando variáveis numéricas: atribuído valores a variáveis
var n1 = 10;  //A variável n1 recebe o valor 10
var n2 = 4;

// Executando operação matemáticas entre variáveis numéricas
// Atenção! O uso de operadores aritméticos JavaScrit no GEE não são recomendáveis. O GEE tem funções próprias e devemos usá-las.

var soma = n1 + n2;

// Remova os as barras duplas "//" do início das linhas abaixo para executar as operações aritméticas.

//var dif = n1 - n2;
//var mult = n1 * n2;  //Obtem a multiplicação entre dois números
//var div = n1 / n2;   //Obtem a divisão entre dois números
//var div_r = n1 % n2; //Obter o resto da divisão entre dois números
//print('A soma é '+ soma);
//print('A diferença é ' + dif);
//print('A multiplicação é ' + mult);
//print('A divisão é ' + div);

//Atribuindo um novo valor para n1
n1 = 20;  //Aqui estamos fazendo um aproveitamento de variáveis e atribuíndo um novo valor para n1
print("O novo valor de n1: " + n1);

var soma2 = n1 + n2;
print(soma2);

//PARTE 3

// Todas as operações executadas anteriormente foram executadas no lado do cliente, com "altos" custos computacionais. 
// Podemos fazer as mesmas coisas do lado do servidor Google, o que é sempre RECOMENDÁVEL.
// Evite misturar funções do lado do cliente e do lado do servidor

// Criando variáveis utilizando CONSTUTORES do GEE. Eles colocam as variáveis dentro de contêineres para serem enviadas e processadas pelos servidores Google (ee.XXXXX)

var cidade2 = ee.String("José de Freitas");
print("Cidade", cidade2);                   // observe que a função print funciona da mesma forma
var pop_cidade2 = ee.Number(42559);
print("População", pop_cidade2); 

//Qual a diferença dessas duas novas variáveis comparadas com as anteriores? 

//No print abaixo colequei tudo na mesma linha utilizando o operador de concatenação "+".
//A função .getInfo() é utilizada para converter objetos Earth Engine em seus equivalentes JavaScript padrão
print("População de " + cidade2.getInfo()+ ": " + pop_cidade2.getInfo());


//Executando operação matemáticas entre variáveis numéricas utilizando MÉTODOS do GEE
// Inicialmete vamos criar mais duas variáveis numéricas
var n3 = ee.Number(100);
var n4 = ee.Number(2);

//Utilizandos métodos do GEE para realização de operações aritméticas (Sempre recomendado)
var soma2 = n3.add(n4); print(soma2);
var dif2 = n3.subtract(n4);print(dif2);
var mult2 = n3.multiply(n4); print(mult2);
var div2 = n3.divide(n4); print(div2);
var div_r2 = n3.mod(n4); print(div_r2);  //O método .mod() retorna o resto da divisão.


/*############## ATIVIDADE 01A ##############

1° Faça a multiplicação entre n3 e n4 e print os resultados no console.
2° Faça a divisão entre n3 e n4 e print os resultados no console.
3° Eleve n3 à potencia n4 e print os resultados no console.
4° Considerando que Teresina tem uma população de 866300 habitante e uma área de 1391.293 km², calcule a densidade demográfica do município
*/

//############## DESAFIO ##############
// Converta as coordenadas de Teresina, apresentadas na Parte 1, que estão no formato decimal para o formato hexagesimal. 




