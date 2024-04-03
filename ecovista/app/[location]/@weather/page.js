import NoLocationInfo from "@/components/NoLocationInfo";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const CurrentWeatherPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
};

export default CurrentWeatherPage;
