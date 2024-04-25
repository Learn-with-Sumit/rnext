'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const FilterByStarCategory = () => {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {

    event.preventDefault();
    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery(prev => [...prev, name]);
    } else {
      const filtered = query.filter(item => item !== name);
      setQuery(filtered);
    }

    console.log(query);
  }

  useEffect(() => {
    const category = params.get('category');

    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split('|');
      setQuery(queryInCategory);
    }

  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set('category', encodeURI(query.join('|')))
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`)
  }, [query])

  return (
    <div>
      <h3 className="font-bold text-lg">Star Category</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        <label htmlFor="fiveStar">
          <input
            type="checkbox"
            name="5"
            checked={query.includes('5')}
            id="fiveStar"
            onChange={handleChange} />5 Star
        </label>

        <label htmlFor="fourStar">
          <input
            type="checkbox"
            name="4"
            checked={query.includes('4')}
            id="fourStar"
            onChange={handleChange} />4 Star
        </label>

        <label htmlFor="threeStar">
          <input
            type="checkbox"
            name="3"
            checked={query.includes('3')}
            id="threeStar"
            onChange={handleChange} />3 Star
        </label>

        <label htmlFor="twoStar">
          <input
            type="checkbox"
            name="2"
            checked={query.includes('2')}
            id="twoStar"
            onChange={handleChange} />2 Star
        </label>

        <label htmlFor="oneStar">
          <input
            type="checkbox"
            name="1"
            checked={query.includes('1')}
            id="oneStar"
            onChange={handleChange} />1 Star
        </label>
      </form>
    </div>
  );
};

export default FilterByStarCategory;
