// Gets user input for season and plant type
function getUserInput() {
    const season = prompt("Enter season (summer/winter/spring/autumn):").toLowerCase();
    const plantType = prompt("Enter plant type (flower/vegetable/herb/tree):").toLowerCase();
    return { season, plantType };
}

// Centralised advice data (NO hardcoded logic anymore)
const adviceData = {
    seasons: {
        summer: "Water your plants regularly and provide some shade.",
        winter: "Protect your plants from frost with covers.",
        spring: "Great time for planting new seeds and fertilising soil.",
        autumn: "Clear dead leaves and prepare soil for winter."
    },
    plants: {
        flower: "Use fertiliser to encourage blooms.",
        vegetable: "Keep an eye out for pests!",
        herb: "Harvest regularly to encourage growth.",
        tree: "Water deeply but less frequently."
    }
};

// Returns season advice
function getSeasonAdvice(season) {
    return adviceData.seasons[season] || "No advice for this season.";
}

// Returns plant advice
function getPlantAdvice(plantType) {
    return adviceData.plants[plantType] || "No advice for this type of plant.";
}

// Main function
function generateAdvice() {
    const { season, plantType } = getUserInput();

    let advice = "\n🌱 GARDEN REPORT 🌱\n\n";

    advice += "Season: " + season + "\n";
    advice += "Plant: " + plantType + "\n\n";

    advice += getSeasonAdvice(season) + "\n";
    advice += getPlantAdvice(plantType);

    console.log(advice);
}

// Run app
generateAdvice();