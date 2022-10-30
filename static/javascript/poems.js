var authorLe = document.getElementById("author-leandro");
var authorVi = document.getElementById("author-vinicius");
var photoPerfil = document.getElementById("photo-perfil");
var titulo = document.getElementById("titulo");
var subTitulo = document.getElementById("sub-titulo");
var poetryOne = document.getElementById("poetry-one");
var poetryTwo = document.getElementById("poetry-two");
var poetryThree = document.getElementById("poetry-three");
var poetryFour = document.getElementById("poetry-four");
var poetryFive= document.getElementById("poetry-five");

//          Variable Table 

var resultOne = document.getElementById('result').nodeValue;
var resultTwo = document.getElementById('resultTwo').nodeValue;
var resultThree = document.getElementById('resultThree'); // this propierty null for test
var resultFour = document.getElementById('resultFour').nodeValue;
var resultFive = document.getElementById('resultFive').nodeValue;
var resultSix = document.getElementById('resultSix').nodeValue;

// teste 

soma = resultOne + resultTwo;



console.log(soma);



authorLe.onclick = function(){
    photoPerfil.style.backgroundImage="url('static/imagem/leandro.jpg')";
    alert("clicou leandro ok");
    // innerHtml ele reconhece as tags do html dentro do texto
    // texxtContent reconhece so o texto 
    titulo.textContent="Leandro Luiz Pereira";
    titulo.style="color:white";
    subTitulo.textContent="My poetry";
    subTitulo.style="color:white";

    poetryOne.innerHTML="<p> <strong><h3>Ao dispertar ao te conhecer-la</h3> <hr> </strong> <p><br>Quando eu te vê pela primeira vez <br>Tudo se desvez  <br>Tudo saiu fora do normal  <br>ao ouvir a sua voz angenlical </p> <p> <br>A cada dia que passa  <br>Eu quero estar junto com essa princesa  <br>Eu notos o seu jeito e a suas manias  <br>Como ver varias obras ao vivo em poesias  </p> <p><br>Ao ouvi-la cantar <br>E melhor melodia e harmonia <br>Como faço para conquista-la <br>Para ouvir que sim como minha namorada  </p> <p><strong>Pode haver várias mulheres lindas…</strong></p><p><br>Pela beleza e pelo corpo escutural <br>Mas nenhuma delas vai substitui-la <br>Pois sempre no final <br>Estarei pensando ne-la </p><p><br>Eu me vejo juntos em casa <br>Acordando toda manhã </p><p><br>Ela me inspira <br>O que faz ser melhor que ontem </p><p><strong>Sem tê-la…</strong></p><p><Br>E como a lua sem refletir ao mar <br>E como as estrelas náo estando nos céu <br>E como as borboletas sem asas </p> <p><strong>Nada faz sentindo</strong> </p> <p><br>Os caminhos que escolhe foi cruel<br>E ao mesmo tempo como a lua de mel<br>Encontrei a mulher dos sonhos<br>E nâo posso tê la em meus braços</p> <p><br>O nosso amor e impossível<br>Por ser imperfeito ao seus olhos incrível<br>E por ter que ignora-la<br>Para não prejudica-la</p></p>";
    poetryTwo.innerHTML="<strong> <h3>Um pai de amor</h3> </strong> <hr><p> <br>Mesmo sendo tão viu pecador<br>Entregou seu filho por amor<br>Como Um pai amoroso e presente<br>E alfa e omega e onipotente</p><p><br>Há momentos constante<br>Quando estou triste <br>Sempre ha conforto em suas palavras <br>Para poder prosseguir a jornada </p><p><br>Seu amor e ágape e resplendor<br>Que vai além de qualquer amor<br>Não e possível ter como agradecer<br>Por tudo que tens feito sem merecer </p><p><br>O seu amor e tão além<br>Te qualquer intendimento de alguém<br>Que deixou na terra vários exemplos<br>Para que nos possamos seguirmos</p> <p><br>Com suas palavras<br>A cada dia tendo seguir<br>Apesar de ser meio difícil a cumprilas<br>Para não pecar contra ti </p> <p><br>A cada dia há  oportunidade<br>de ser tentado e praticar iniquidade<br>Mas com seu espírito santo<br>Me faz refletir e não a cometer no ato  </p><p><br>Eu tenho alguns defeitos<br>Mas o senhor sempre está disposto conserta-los<br>para que possamos estar juntos ao seu lado </p>";
    poetryThree.innerHTML="<strong> <h3>Leão meu animal favorito</h3></strong> <hr><p><br>Leão és um  animal fantástico<br>Pena que não pode ser um animal doméstico<br>Um dos animais  mais criativo de Deus<br>Separado para terra e não do céus</p><p><br>Como penso um dia chegar perto<br>Para apenas afagar e de acariciar<br>E brincar ,de ate conversar<br>Mesmo ele não entender o meu falar</p><p><br>Mas só posso ver de longe<br>Este animal incrível e elegante<br>Um animal de personalidade<br>Tendo uma forte indentidade</p><p><br>E considerado um rei entre os animais<br>Cheio de vigor e de um ser capais<br>Um dos aspectos e o seu rugido .<br>Deixando muitas vezes destemido</p><p><br>O leão e muito ágil e veloz<Br>Mesmo sendo um animal feroz<br>Temos chances de o leão se tornar leal <br>De modo que tratamos este magnífico animal</p>";
    poetryFour.innerHTML="  <strong><h3>A sensação do músico ao toca-la</h3></strong> <hr> <p><br>A música e a expressão da alma<br>Com a criações das  harmonias<br>Faz as pessoas sentirem até a calma<br>Com infinitas possibilidades e melodias</p><p><br>Da para sentir na alma<br>ao tocar e expressar<br>Bem Indescritíva a música ao se forma<br>Quando ao tocar<br>Uma conexão meio que  surreal<br>Me dispertar o sentimento<br>Sendo um momento fenomenal<br>Único ao tocar o  instrumento</p><p><br>E por isso que Deus se agrada<br>Uma forma de conexão e  adoração<br>Quando as batidas e  expressada<br>Quando e sincero e de coração</p>";
    poetryFive.innerHTML="<strong><h3>Um luar nublado</h3></strong> <hr> <p><br>Uma antiga lembrança<br>Como um luar nublado<br>Perdendo total esperança<br>Para ser seu namorado</p><p><br>Outro a conquistou<br>Tive que afastar<br>Meu mundo desmoronou<br>Acabei a me magoar</p><p><br>Escrevo a poesia e a carta<br>Que serviu como terapia<br>Uma despedida certa<br>Pena que não seja minha</p>";

    //-----------------------------------------------------------------STYLES---------------------------------------------------------------------------
    poetryOne.style="display:block";
    poetryTwo.style="display:block";
    poetryThree.style="display:block";
    poetryFour.style="display:block";
    poetryFive.style="display:block";
}

authorVi.onclick = function(){

    alert("clicou vinicius ok");
    photoPerfil.style.backgroundImage="url('static/imagem/th.jpg')";
    titulo.textContent="Vinicius de Moraes";
    titulo.style="color:white";
    subTitulo.textContent="poesias";
    subTitulo.style="color:white";
    poetryOne.innerHTML=" <strong><h3>Pela luz dos olhos teus</h3></strong> <hr> <p><br>Quando a luz dos olhos meus<br>E a luz dos olhos teus<br>Resolvem se encontrar<br>Ai que bom que isso é meu Deus<br>Que frio que me dá o encontro desse olhar<br>Mas se a luz dos olhos teus<br>Resiste aos olhos meus só pra me provocar<br> Meu amor, juro por Deus me sinto incendiar<br> Meu amor, juro por Deus<br>Que a luz dos olhos meus já não pode esperar<br>Quero a luz dos olhos meus<br>Na luz dos olhos teus sem mais lará-lará<br> Pela luz dos olhos teus<br> Eu acho meu amor que só se pode achar<br> Que a luz dos olhos meus precisa se casar.</p>";
    poetryTwo.textContent="";
    poetryThree.textContent="";
    poetryFour.textContent="";
    poetryFive.textContent="";
    //-----------------------------------------------------------------STYLES---------------------------------------------------------------------------
    poetryOne.style="display:block";
    poetryTwo.style="display:none";
    poetryThree.style="display:none";
    poetryFour.style="display:none";
    poetryFive.style="display:none";
}

  
 // 1 - Obstrução de página de layount díferentes de slides 
 // 2 - javascript usar o localstores ou banco de dados firebase 
 // 3 - lista de armazenamento em campo
 // 4 - servidor , 
 // 5 - 
