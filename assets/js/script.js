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
        matches:[
            {   number: 1,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "cuiaba",
                local: "fora"
            },
            {
                number: 15,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "atletico",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Botafogo",
        image: "botafogo.svg",
        state: "Rio de Janeiro",
        matches:[
            {   number: 1,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "internacional",
                local: "Casa"
            },
        ] 
    },
    {
        name: "RB Bragantino",
        image: "bragantino.svg",
        state: "São Paulo",
        matches:[
            {   number: 1,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "Vasco",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Corinthians",
        image: "corinthians.svg",
        state: "São Paulo",
        matches:[
            {   number: 1,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "coritiba",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Coritiba",
        image: "coritiba.svg",
        state: "Paraná",
        matches:[
            {   number: 1,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "corinthians",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Cruzeiro",
        image: "cruzeiro.svg",
        state: "Minas Gerais",
        matches:[
            {   number: 1,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "palmeiras",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Cuiabá",
        image: "cuiaba.svg",
        state: "Mato Grosso",
        matches:[
            {   number: 1,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "athletico",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Flamengo",
        image: "flamengo.svg",
        state: "Rio de Janeiro",
        matches:[
            {   number: 1,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "sao-paulo",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Fluminense",
        image: "fluminense.svg",
        state: "Rio de Janeiro",
        matches:[
            {   number: 1,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "gremio",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Fortaleza",
        image: "fortaleza.svg",
        state: "Ceará",
        matches:[
            {   number: 1,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "santos",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Goiás",
        image: "goias.svg",
        state: "Goiás",
        matches:[
            {   number: 1,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "america",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Grêmio",
        image: "gremio.svg",
        state: "Rio Grande do Sul",
        matches:[
            {   number: 1,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "palmeiras",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "sao-paulo",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "flamengo",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "corinthians",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 19,
                adversary: "fluminense",
                local: "Casa"
            },
        ] 
    },
    {
        name: "Internacional",
        image: "internacional.svg",
        state: "Rio Grande do Sul",
        matches:[
            {   number: 1,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "botafogo",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Palmeiras",
        image: "palmeiras.svg",
        state: "São Paulo",
        matches:[
            {   number: 1,
                adversary: "cuiaba",
                local: "Casa"
            },
            {
                number: 2,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 3,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "goias",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "gremio",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "bragantino",
                local: "Casa"
            },
            {
                number: 7,
                adversary: "santos",
                local: "Fora"
            },
            {
                number: 8,
                adversary: "atletico",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "coritiba",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "bahia",
                local: "Fora"
            },
            {
                number: 12,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "athletico",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "internacional",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "fortaleza",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "america",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "cruzeiro",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "bragantino",
                local: "Fora"
            },
        ] 
    },
    {
        name: "Santos",
        image: "santos.svg",
        state: "São Paulo",
        matches:[
            {   number: 1,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 4,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 5,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 6,
                adversary: "vasco",
                local: "Fora"
            },
            {
                number: 7,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 9,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 10,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 11,
                adversary: "corinthians",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "flamengo",
                local: "Casa"
            },
            {
                number: 13,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 14,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 15,
                adversary: "sao-paulo",
                local: "Fora"
            },
            {
                number: 16,
                adversary: "botafogo",
                local: "Casa"
            },
            {
                number: 17,
                adversary: "fluminense",
                local: "Fora"
            },
            {
                number: 18,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "fortaleza",
                local: "Fora"
            },
        ] 
    },
    {
        name: "São Paulo",
        image: "sao-paulo.svg",
        state: "São Paulo",
        matches:[
            {   number: 1,
                adversary: "botafogo",
                local: "Fora"
            },
            {
                number: 2,
                adversary: "america",
                local: "Casa"
            },
            {
                number: 3,
                adversary: "coritiba",
                local: "Fora"
            },
            {
                number: 4,
                adversary: "internacional",
                local: "Casa"
            },
            {
                number: 5,
                adversary: "fortaleza",
                local: "Fora"
            },
            {
                number: 6,
                adversary: "corinthians",
                local: "fora"
            },
            {
                number: 7,
                adversary: "vasco",
                local: "Casa"
            },
            {
                number: 8,
                adversary: "goias",
                local: "Casa"
            },
            {
                number: 9,
                adversary: "gremio",
                local: "Fora"
            },
            {
                number: 10,
                adversary: "palmeiras",
                local: "Casa"
            },
            {
                number: 11,
                adversary: "athletico",
                local: "Casa"
            },
            {
                number: 12,
                adversary: "cruzeiro",
                local: "Fora"
            },
            {
                number: 13,
                adversary: "fluminense",
                local: "Casa"
            },
            {
                number: 14,
                adversary: "bragantino",
                local: "Fora"
            },
            {
                number: 15,
                adversary: "santos",
                local: "Casa"
            },
            {
                number: 16,
                adversary: "cuiaba",
                local: "Fora"
            },
            {
                number: 17,
                adversary: "bahia",
                local: "Casa"
            },
            {
                number: 18,
                adversary: "atletico",
                local: "Casa"
            },
            {
                number: 19,
                adversary: "flamengo",
                local: "Fora"
            },
        ] 
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
