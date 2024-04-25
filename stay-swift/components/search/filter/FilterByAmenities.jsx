const FilterByAmenities = () => {
  return (
    <div>
      <h3 className="font-bold text-lg">Amenities</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="wifi">
          <input type="checkbox" name="wifi" id="wifi" />
          Wi-fi
        </label>

        <label htmlFor="swimmingPool">
          <input type="checkbox" name="swimmingPool" id="swimmingPool" />
          Swimming Pool
        </label>
      </form>
    </div>
  );
};

export default FilterByAmenities;
