const data = {
    coord: {
        lon: 78.9629,
        lat: 20.5937,
    },
    weather: [
        {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
        },
    ],
    base: "stations",
    main: {
        temp: 24.87,
        feels_like: 24.3,
        temp_min: 24.87,
        temp_max: 24.87,
        pressure: 1012,
        humidity: 34,
        sea_level: 1012,
        grnd_level: 984,
    },
    visibility: 10000,
    wind: {
        speed: 3.02,
        deg: 333,
        gust: 3.36,
    },
    clouds: {
        all: 1,
    },
    dt: 1705671920,
    sys: {
        country: "IN",
        sunrise: 1705627372,
        sunset: 1705667155,
    },
    timezone: 19800,
    id: 1270077,
    name: "Hinganghāt",
    cod: 200,
};

const getFakeAPIData = () => {
    return data;
};

export { getFakeAPIData };
