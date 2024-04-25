const SortHotel = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label for="highToLow">
                    <input type="checkbox" name="highToLow" id="highToLow" />
                    Price High to Low
                </label>

                <label for="lowToHigh">
                    <input type="checkbox" name="lowToHigh" id="lowToHigh" />
                    Price Low to high
                </label>
            </form>
        </div>
    );
};

export default SortHotel;
