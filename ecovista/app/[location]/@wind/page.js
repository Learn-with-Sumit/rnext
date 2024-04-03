import WindComponent from "@/components/WindComponent";

const WindPage = ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    return <WindComponent lat={latitude} lon={longitude} />;
};

export default WindPage;
