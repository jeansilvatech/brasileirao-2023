const container = document.querySelector('.container')
const teams = [
    {
        name: "América",
        image: "america.svg",
        state: "Minas Gerais",
    },
    {
        name: "Athletico",
        image: "athletico.svg",
        state: "Paraná",
    },
    {
        name: "Atlético",
        image: "atletico.svg",
        state: "Minas Gerais",
    },
    {
        name: "Bahia",
        image: "bahia.svg",
        state: "Bahia",
    },
    {
        name: "Botafogo",
        image: "botafogo.svg",
        state: "Rio de Janeiro",
    },
    {
        name: "Bragantino",
        image: "bragantino.svg",
        state: "São Paulo",
    },
    {
        name: "Corinthians",
        image: "corinthians.svg",
        state: "São Paulo",
    },
    {
        name: "Coritiba",
        image: "coritiba.svg",
        state: "Paraná",
    },
    {
        name: "Cruzeiro",
        image: "cruzeiro.svg",
        state: "Minas Gerais",
    },
    {
        name: "Cuiabá",
        image: "cuiaba.svg",
        state: "Mato Grosso",
    },
    {
        name: "Flamengo",
        image: "flamengo.svg",
        state: "Rio de Janeiro",
    },
    {
        name: "Fluminense",
        image: "fluminense.svg",
        state: "Rio de Janeiro",
    },
    {
        name: "Fortaleza",
        image: "fortaleza.svg",
        state: "Ceará",
    },
    {
        name: "Goiás",
        image: "goias.svg",
        state: "Goiás",
    },
    {
        name: "Grêmio",
        image: "gremio.svg",
        state: "Rio grande do Sul",
    },
    {
        name: "Internacional",
        image: "internacional.svg",
        state: "Rio Grande do Sul",
    },
    {
        name: "Palmeiras",
        image: "palmeiras.svg",
        state: "São Paulo",
    },
    {
        name: "Santos",
        image: "santos.svg",
        state: "São Paulo",
    },
    {
        name: "São Paulo",
        image: "sao-paulo.svg",
        state: "São Paulo",
    },
    {
        name: "Vasco da Gama",
        image: "vasco.svg",
        state: "Rio de Janeiro",

    },
    
]
for(i=0; i<=teams.length; i++){
    container.innerHTML = container.innerHTML + `
    <div class="team">
            <img src="./assets/img/${teams[i].image}" alt="">
            <h2>${teams[i].name}</h2>
            <p>${teams[i].state}</p>
        </div>
    `
}
