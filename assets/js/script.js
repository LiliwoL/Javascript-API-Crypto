

const API_ENDPOINT = "https://api.coingecko.com/api/v3/";

const API_AUTH_SUFFIX = "x_cg_demo_api_key=" + API_KEY;

// https://docs.coingecko.com/v3.0.1/reference/endpoint-overview
const API_URLS = {
    // Liste des coins
    'coins': API_ENDPOINT + 'coins/list' + '?' + API_AUTH_SUFFIX,
    'price' : API_ENDPOINT + 'simple/price?ids=ethereum&vs_currencies=eur&' + API_AUTH_SUFFIX,
}

/**
 * Liste des cryptos disponibles
 */
function callAPI( endpoint ) {
    fetch(endpoint)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Cas de la liste des cryptos
            // Cas du prix de l'ethereum
            if (data.ethereum !== undefined) {
                console.log("Prix Ethereum: " + data.ethereum.eur);
                document.getElementById("ether-rate").innerHTML = data.ethereum.eur + " €";
            }

        })
        .catch(error => {
            console.log("Erreur de récupération API " + error);
        }
    );
}

// Appel de la fonction getCoins
console.log("Liste");
callAPI(API_URLS.coins);

console.log("Prix Ethereum");
callAPI(API_URLS.price);
