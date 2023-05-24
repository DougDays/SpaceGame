const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

let camera = new Scene(CTX);
let imageCache = {};

function cacheImage(imageUrl) {
    return new Promise((resolve, reject) => {
        if (imageCache[imageUrl]) {
            // A imagem já está em cache, resolva imediatamente
            resolve(imageCache[imageUrl]);
        } else {
            // Crie um novo objeto de imagem
            let image = new Image();

            // Defina a função onload para resolver a Promise após o carregamento completo da imagem
            image.onload = function() {
                imageCache[imageUrl] = image; // Armazene a imagem em cache
                resolve(image);
            };

            // Defina a função onerror para rejeitar a Promise em caso de falha no carregamento da imagem
            image.onerror = function() {
                reject(new Error(`Falha ao carregar a imagem: ${imageUrl}`));
            };

            // Carregue a imagem
            image.src = imageUrl;
        }
    });
}

// Lista de URLs de imagens a serem pré-carregadas
let imageUrls = [
    '../img/spaceship.png',
    '../img/meteor.png'
];

// Função para pré-carregar todas as imagens
function preloadImages(urls) {
    let promises = urls.map(cacheImage);
    return Promise.all(promises);
}

// Chamada da função de pré-carregamento
preloadImages(imageUrls)
.then(() => {
    // Todas as imagens foram pré-carregadas com sucesso
    // Agora você pode usar as imagens normalmente
    let imageBank = [];
    imageBank[0] = imageCache['../img/spaceship.png']; // Use a image
    imageBank[1] = imageCache['../img/meteor.png']
    let ship = new Ship(
        CTX,
        imageBank[0],
        camera,
        3,
        3,
        canvas.width/2-32,
        canvas.height-128,
        8,
        GAMEPAD
    );

    function spawn () {
        let meteor = new Enemies(
            CTX,
            imageBank[1],
            camera,
            1,
            1,
            Math.floor(Math.random() * canvas.width)+1,
            -100,
            10
        );
        camera.newSprite(meteor)
    }
    setInterval(spawn, 1000);

//Adiciona os objetos a cena(camera)
    camera.newSprite(ship);
//????
    camera.turnOnCam();

})
.catch((error) => {
    // Ocorreu um erro durante o pré-carregamento das imagens
    console.error(error);
});