const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter((item) => item.location === location);

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export { getLocationByName, getLocations };
