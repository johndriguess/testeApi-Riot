const keyAPI = "RGAPI-41e23f71-c21f-4c25-a595-9a634991fe37"

const nome = document.querySelector(".nome");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");

const fecthSummoner = async (nomeInvocador) => {
    const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nomeInvocador}?api_key=${keyAPI}`);
    if(response.status == 200){
        const data = await response.json();
        return data['id'];
    }
}

const printar = async (nomeInvocador) => {
    const lol = await fecthSummoner(nomeInvocador);
    nome.innerHTML = lol;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeInvocador = input.value.toLowerCase().split(" ").join("");
    printar(nomeInvocador);
    input.value = "";
}); 

