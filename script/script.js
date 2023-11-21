const apiKey = "qkoXD4H4JdQAHcgc0YP8wfXvyYefbxrwpO1eKsmQ"

document.getElementById('show-picture').addEventListener('click', async () => {
    try {
        const pictureApi = await getPictureApi(apiKey);
        showPictureApi(pictureApi);
    } catch (error) {
        console.error(`Error al obtener la imagen: ${error.message}`);
    }
})

async function getPictureApi(apiKey) {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    return response.json();
}

function showPictureApi(pictureApi) {
    console.log("Respuesta de la API de la fotografia del dia:", pictureApi)

    const imageElement = document.getElementById("picture-container");
    imageElement.src = pictureApi.url;
}

