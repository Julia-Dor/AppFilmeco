console.log("Script carregado");


const form = document.getElementById("form-filme");
const genero = document.getElementById("genero");
const humor = document.getElementById("humor");

const posterFilme = document.getElementById("poster-filme");
const nomeFilme = document.getElementById("nome-filme");
const descricaoFilme = document.getElementById("descricao-filme");


const filmes = [
    {
        genero: "terror",
        humor: "triste",
        nome: "Obsessão",
        descricao: "Um suspense psicológico intenso que prende sua atenção até o final.",
        poster: "./img/obssessaoPoster.jpeg"
    },

    {
        genero: "terror",
        humor: "entediado",
        nome: "Invocação do Mal",
        descricao: "Uma das histórias sobrenaturais mais famosas do cinema.",
        poster: "./img/incocacaoPoster.jpeg"
    },

    {
        genero: "acao",
        humor: "animado",
        nome: "John Wick",
        descricao: "Ação intensa e cenas de combate impressionantes.",
        poster: "./img/johnPoster.jpeg"
    },

    {
        genero: "acao",
        humor: "feliz",
        nome: "Vingadores: Ultimato",
        descricao: "Uma aventura épica cheia de heróis e emoção.",
        poster: "./img/vingadoresUltimatoPoster.jpeg"
    },

    {
        genero: "animacao",
        humor: "triste",
        nome: "Divertida Mente",
        descricao: "Uma história emocionante sobre sentimentos e crescimento.",
        poster: "./img/divertidaPoster.jpeg"
    },

    {
        genero: "animacao",
        humor: "feliz",
        nome: "Shrek",
        descricao: "Uma animação divertida e cheia de humor que conquistou gerações.",
        poster: "./img/shrekPoster.jpeg"
    },

    {
        genero: "ficcao",
        humor: "reflexivo",
        nome: "Interestelar",
        descricao: "Uma jornada espacial emocionante que faz refletir sobre o tempo e a humanidade.",
        poster: "./img/interestelarPoster.jpeg"
    },

    {
        genero: "romance",
        humor: "feliz",
        nome: "Como Eu Era Antes de Você",
        descricao: "Uma história romântica envolvente e emocionante.",
        poster: "./img/antesdevocePoster.jpeg"
    },

    {
    genero: "terror",
    humor: "feliz",
    nome: "Corra!",
    descricao: "Um suspense inteligente que mistura terror e crítica social.",
    poster: "./img/corraPoster.jpeg"
    },

    {
    genero: "terror",
    humor: "animado",
    nome: "Um Lugar Silencioso",
    descricao: "Tensão constante e sobrevivência em um mundo silencioso.",
    poster: "./img/lugarSilenciosoPoster.jpeg"
    },

    {
    genero: "terror",
    humor: "reflexivo",
    nome: "O Farol",
    descricao: "Uma experiência psicológica intensa e cheia de simbolismos.",
    poster:"./img/farolPoster.jpeg"
    },

    {
    genero: "acao",
    humor: "triste",
    nome: "Gladiador",
    descricao: "Uma história emocionante sobre honra, perda e vingança.",
    poster: "./img/gladiadorPoster.jpeg"
    },

    {
    genero: "acao",
    humor: "entediado",
    nome: "Mad Max: Estrada da Fúria",
    descricao: "Perseguições insanas e ação do começo ao fim.",
    poster: "./img/madmaxPoster.jpeg"
    },

    {
    genero: "acao",
    humor: "reflexivo",
    nome: "Batman: O Cavaleiro das Trevas",
    descricao: "Uma história profunda sobre justiça, caos e escolhas.",
    poster: "./img/cavaleiroPoster.jpeg"
    },

    {
    genero: "romance",
    humor: "triste",
    nome: "Orgulho e Preconceito",
    descricao: "Um romance clássico sobre sentimentos, orgulho e amadurecimento.",
    poster: "./img/orgulhoPoster.jpeg"
    },

    {
    genero: "romance",
    humor: "animado",
    nome: "10 Coisas que Eu Odeio em Você",
    descricao: "Uma comédia romântica divertida e cheia de personalidade.",
    poster: "./img/odeioemvocePoster.jpeg"
    },

    {
    genero: "romance",
    humor: "entediado",
    nome: "Questão de Tempo",
    descricao: "Uma história leve, divertida e emocionante.",
    poster: "./img/questaotempoPoster.jpeg"
    },

    {
    genero: "romance",
    humor: "reflexivo",
    nome: "Brilho Eterno de uma Mente sem Lembranças",
    descricao: "Uma reflexão sobre amor, memória e escolhas.",
    poster: "./img/brilhoEternoPoster.jpeg"
    },

    {
    genero: "ficcao",
    humor: "feliz",
    nome: "De Volta para o Futuro",
    descricao: "Uma aventura divertida que atravessa gerações.",
    poster: "./img/devoltaFuturoPoster.jpeg"
    },

    {
    genero: "ficcao",
    humor: "triste",
    nome: "A Chegada",
    descricao: "Uma ficção científica emocionante sobre comunicação e tempo.",
    poster: "./img/chegadaPoster.jpeg"
    },

    {
    genero: "ficcao",
    humor: "animado",
    nome: "Guardiões da Galáxia",
    descricao: "Aventura espacial cheia de humor e ação.",
    poster: "./img/guardioesGalaxiaPoster.jpeg"
    },

    {
    genero: "ficcao",
    humor: "entediado",
    nome: "Matrix",
    descricao: "Uma ficção científica revolucionária e cheia de ação.",
    poster: "./img/matrixPoster.jpeg"
    },

    {
    genero: "animacao",
    humor: "animado",
    nome: "Homem-Aranha no Aranhaverso",
    descricao: "Uma animação vibrante e visualmente impressionante.",
    poster: "./img/aranhaversoPoster.jpeg"
    },

    {
    genero: "animacao",
    humor: "entediado",
    nome: "Os Incríveis",
    descricao: "Diversão garantida com uma família de super-heróis.",
    poster: "./img/incriveisPoster.jpeg"
    },

    {
    genero: "animacao",
    humor: "reflexivo",
    nome: "A Viagem de Chihiro",
    descricao: "Uma obra-prima da animação cheia de simbolismos e fantasia.",
    poster: "./img/chihiroPoster.jpeg"
    },
];

esconderPoster();

form.addEventListener("submit", recomendarFilme);

function esconderPoster() {
    posterFilme.style.display = "none";
}

function mostrarPoster() {
    posterFilme.style.display = "block";
}

function procurarFilme(generoEscolhido, humorEscolhido) {

    return filmes.find(function (filme) {

        return (
            filme.genero === generoEscolhido &&
            filme.humor === humorEscolhido
        );

    });

}

function exibirFilme(filme) {

    posterFilme.src = filme.poster;
    mostrarPoster();

    nomeFilme.textContent = filme.nome;

    descricaoFilme.textContent =
        filme.descricao;

}

function exibirMensagemErro() {

    esconderPoster();

    nomeFilme.textContent =
        "Nenhum filme encontrado";

    descricaoFilme.textContent =
        "Não encontramos uma recomendação para essa combinação. Tente outras opções.";

}

function validarFormulario(generoEscolhido, humorEscolhido) {

    if (!generoEscolhido || !humorEscolhido) {

        esconderPoster();

        nomeFilme.textContent =
            "Selecione todas as opções";

        descricaoFilme.textContent =
            "Escolha um gênero e informe como você está se sentindo.";

        return false;
    }

    return true;
}

function recomendarFilme(event) {

    event.preventDefault();

    const generoEscolhido = genero.value;
    const humorEscolhido = humor.value;

    console.log("Gênero:", generoEscolhido);
    console.log("Humor:", humorEscolhido);

    const formularioValido =
        validarFormulario(
            generoEscolhido,
            humorEscolhido
        );

    if (!formularioValido) {
        return;
    }

    const filmeEncontrado =
        procurarFilme(
            generoEscolhido,
            humorEscolhido
        );

    if (filmeEncontrado) {
        exibirFilme(filmeEncontrado);
    } else {
        exibirMensagemErro();
    }

}