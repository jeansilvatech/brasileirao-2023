const container = document.querySelector('.container')
const local = ["Casa", "Fora"]
const data = await fetch('../data/data.json')
const res = await data.json();

res.forEach((team)=>{
    
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
        res.forEach((team)=>{
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
            
                team.matches.map((match)=>{
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
