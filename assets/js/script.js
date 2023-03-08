const container = document.querySelector('.container')
const local = ["Casa", "Fora"]
const teams = [
    {
        name: "América",
        image: "america.svg",
        state: "Minas Gerais",
        matches:[
            {   number: 1,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "goias",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Athletico",
        image: "athletico.svg",
        state: "Paraná",
        matches:[
            {   number: 1,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "cuiaba",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Atlético",
        image: "atletico.svg",
        state: "Minas Gerais",
        matches:[
            {   number: 1,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "bahia",
                local: "Casa"
            },
        ] 
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
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "bragantino",
                local: "Fora"
            },
        ]   
    }
]

teams.forEach((team)=>{
    
    container.innerHTML += `
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
                        <div>
                            
                            <div class="btn-shift"><i class="fa-solid fa-chevron-up"></i></div>
                        </div>
                </div>
                <div class="container-content">
                </div>
            `  
             team.matches.forEach((match)=>{
                content.innerHTML +=
                `
                <div class="matches ${match.local.toLowerCase()}">
                <span>${match.number}ª</span>
                <img src="./assets/img/${match.adversary}.svg" alt="">
                </div>
                <div class="matches return ${match.local.toLowerCase()==='fora'?'casa':'fora'}">
                <span>${match.number+19}ª</span>
                <img src="./assets/img/${match.adversary}.svg" alt="">
                </div>`
                  
            })
            const btnShift = document.querySelector('.btn-shift')
            const btnReturn = document.querySelector('.btn-return')
            btnReturn.addEventListener('click', ()=>{
                const matches = document.querySelectorAll('.matches')
                const matchesReturn = document.querySelectorAll('.content .return')
                matches.forEach((matchesShift)=>{
                    matchesShift.style.display = 'none'
                })
                matchesReturn.forEach((matchesRet)=>{
                    matchesRet.style.display = 'flex'
            
                })
                btnShift.style.display='flex';
                btnReturn.style.display='none'
            }) 
            btnShift.addEventListener('click', ()=>{
                const matches = document.querySelectorAll('.matches')
                const matchesReturn = document.querySelectorAll('.content .return')
                matches.forEach((matchesShift)=>{
                    matchesShift.style.display = 'flex'
                })
                matchesReturn.forEach((matchesRet)=>{
                    matchesRet.style.display = 'none'
            
                })
                btnShift.style.display='none';
                btnReturn.style.display='flex';
            }) 
            
            }
        })
    })
    
})



games.classList.remove('enter-modal')
btnClose.addEventListener('click', ()=>{
    containerGames.style.display = 'none';
})
