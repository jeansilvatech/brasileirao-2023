const container = document.querySelector('.container')
const local = ["Casa", "Fora"]
const data = await fetch('../data/data.json')
const res = await data.json();

res.forEach((team)=>{
    
    container.innerHTML += `
    <div class="team ${team.image.split(".svg").join("")} ${team.final}" tabindex="1">
            <img src="./assets/img/${team.image}" alt="">
            <h2>${team.name}</h2>
            <p><i class="fa-solid fa-location-dot"></i>${team.state}</p>
            <p class="team_${team.final}"id="final">${team.final}</p>
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
        res.forEach((team)=>{
            let nameClass = card.classList[1];
            let nameImage = team.image.split(".svg").join("");
            if(nameClass===nameImage){
            content.innerHTML = `
                <div class="team ${team.image.split(".svg").join("")}">
                    <p>Tabela</p>
                        <img class="team-image" src="./assets/img/${team.image}" alt="">
                        <div class="subtitle">
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
                <div class="matches ${match.number?"past":""} ${match.local.toLowerCase()}">
                    <span>${match.number}ª</span>
                    <img src="./assets/img/${match.adversary}.svg" alt="">
                </div>
                <div class="matches return ${match.number+19<=38?"past":""} ${match.local.toLowerCase()==='fora'?'casa':'fora'}">
                    <span>${match.number+19}ª</span>
                    <img src="./assets/img/${match.adversary}.svg" alt="">
                </div>`
            })
            const matches = document.querySelectorAll('.matches')
            const matchesReturn = document.querySelectorAll('.content .return')

            const btnShift = document.querySelector('.btn-shift')
            const btnReturn = document.querySelector('.btn-return')
            btnReturn.style.display='flex';
            btnReturn.addEventListener('click', ()=>{
               
                matches.forEach((matchesShift)=>{
                    matchesShift.style.display = 'none'
                })
                matchesReturn.forEach((matchesRet)=>{
                    matchesRet.style.display = 'flex'
            
                })
                btnShift.style.display='flex';
                btnReturn.style.display='none';
                
            }) 
            btnShift.addEventListener('click', ()=>{
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
const header = document.querySelector('.name')
const logo = document.querySelector('#logo')
const body = document.querySelector('body')
const screen = window.matchMedia("(max-width:480px)")



header.addEventListener('mouseover', ()=>{
    logo.style.filter = 'drop-shadow(0 0 0.75rem yellow)'
    body.style.backgroundColor = '#191970'
    if(screen.matches){
        header.style.borderRight= 'none'
        header.style.borderBottom = '20px solid yellow'
    }else{
        header.style.borderRight = '40px solid yellow'
        header.style.borderBottom= 'none'
    }
})
header.addEventListener('mouseout', ()=>{
    logo.style.filter = 'drop-shadow(0 0 0.75rem #1C1C1C)'
    body.style.backgroundColor = '#006400'
    
    if(screen.matches){
        header.style.borderRight= 'none'
        header.style.borderBottom = '2px solid yellow'
    }else{
        header.style.borderRight = '2px solid yellow'
        header.style.borderBottom= 'none'
        
    }
})