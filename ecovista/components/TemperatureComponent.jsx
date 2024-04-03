import { getTemperatureData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const TemperatureComponent = async ({ lat, lon }) => {
    const { temp, feels_like } = await getTemperatureData(lat, lon);

    return (
        <Card>
            <h6 className="feature-name">Current Temperature</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icon_tempareture.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <h3 className="feature-title">{temp}°C</h3>

                <span className="feature-name">Feels Like {feels_like}°C</span>
            </div>
        </Card>
    );
};

export default TemperatureComponent;
