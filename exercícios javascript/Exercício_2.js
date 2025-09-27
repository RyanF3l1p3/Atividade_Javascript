//a. Declare uma constante PI com valor 3.14159. Tente atribuir outro valor a PI e
//veja o erro no console. Explique por que isso acontece.

const PI = 3.14159;
PI = 4.25; 

//O erro acontece porque const é usado para declarar constantes, que são identificadores 
// (nomes de variáveis) que, uma vez atribuídos, não podem ter seu valor reatribuído.
//Quando você usa const PI = 3.14159;, o JavaScript "bloqueia" a variável PI para aquele valor.
//Quando o código tenta executar PI = 3.14;, o runtime (Node.js ou o navegador) 
// identifica que está tentando alterar o valor de uma constante e imediatamente lança um erro (TypeError).

//b.Declare uma constante SemanasDoAno sem atribuir valor. Na linha seguinte
//atribua o valor 52. O que ocorre?

const SemanasDoAno;
SemanasDoAno = 52;

//O que acontece é erro na declaração na linguagem, "declarations must be initialized.ts(1155)" a declaração de uma constante
//  deve incluir uma atribuição de valor inicial. Não é permitido declará-la e atribuir o valor depois