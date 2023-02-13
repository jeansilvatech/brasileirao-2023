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

    }
]
const tableGames = [
    {
        
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
                    <h2>Jogos</h2>
                    <img src="./assets/img/${team.image}" alt="">
            </div>
            `   
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