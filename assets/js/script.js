const container = document.querySelector('.container')
const local = ["Casa", "Fora"]
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
        name: "RB Bragantino",
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
        state: "Rio Grande do Sul",
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
        matches:[
            {   number: 1,
                adversary: "atletico.svg",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "palmeiras.svg",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "bahia.svg",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "fluminense.svg",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "coritiba.svg",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "santos.svg",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "sao-paulo.svg",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "fortaleza.svg",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "flamengo.svg",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "internacional.svg",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "goias.svg",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "cuiaba.svg",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "botafogo.svg",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "cruzeiro.svg",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "america.svg",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "athletico.svg",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "corinthians.svg",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "gremio.svg",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "bragantino.svg",
                local: "Fora"
            },
        ]   
    }
]

teams.forEach((team)=>{
    
    container.innerHTML = container.innerHTML + `
    <div class="team ${team.image.split(".svg").join("")}">
            <img src="./assets/img/${team.image}" alt="">
            <h2>${team.name}</h2>
            <p>${team.state}</p>
    </div>
    ` 
   
})
const containerGames = document.querySelector('.container-games')
const games = document.querySelector('.games')
const btnClose = document.querySelector('.close')
const content = document.querySelector('.content')

const team = document.querySelectorAll('.team');
const containerContent = document.querySelector('.container-content')
team.forEach((card)=>{
    card.addEventListener('click', ()=>{
        containerGames.style.display = 'flex'
        games.classList.add('enter-modal')
        content.innerHTML = `${card.classList[1].toUpperCase()}

        `
        teams.forEach((team)=>{
            let nameClass = card.classList[1];
            let nameImage = team.image.split(".svg").join("");
            if(nameClass===nameImage){
            content.innerHTML = `
                <div class="team ${team.image.split(".svg").join("")}">
                    <p>Tabela</p>
                        <img src="./assets/img/${team.image}" alt="">
                        <div class="legend">
                            <p>Casa<span class="casa"></span></p>
                            <p>Fora<span class="fora"></span></p>
                        </div>
                </div>
                <div class="container-content">
                </div>
            `   
             team.matches.forEach((match)=>{
                content.innerHTML = content.innerHTML +
                `
                <div class="matches ${match.local.toLowerCase()}">
                <span>${match.number}ª</span>
                <img src="./assets/img/${match.adversary}" alt="">
                <span class="local">- ${match.local}</span>
                </div>`
                
                
            })
            }
        })
    })
})


games.classList.remove('enter-modal')
btnClose.addEventListener('click', ()=>{
    containerGames.style.display = 'none';
})
containerGames.addEventListener('click', ()=>{
    containerGames.style.display = 'none'
})