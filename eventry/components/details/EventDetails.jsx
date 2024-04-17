const EventDetails = ({ details, swags }) => {
    return (
        <div className="col-span-3">
            <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                <h2 className="font-bold text-2xl">Details</h2>
                <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
                    <p className="">{details}</p>

                    {swags && (
                        <ul className="">
                            {swags.map((swag) => (
                                <li key={swag}>{swag}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
