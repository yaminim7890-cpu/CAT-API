async function getCatImage() {
    try {
        const response = await fetch(
            "https://api.thecatapi.com/v1/images/search"
        );

        const data = await response.json();
        const cat = data[0];

        console.log("========== RANDOM CAT ==========");
        console.log(`Cat ID   : ${cat.id}`);
        console.log(`URL      : ${cat.url}`);
        console.log(`Width    : ${cat.width}px`);
        console.log(`Height   : ${cat.height}px`);
        console.log("================================");
        console.log(`Open Cat Image: ${cat.url}`);

    } catch (error) {
        console.log("Error fetching cat image:", error.message);
    }
}

getCatImage();