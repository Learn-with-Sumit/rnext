import React, { useLayoutEffect, useRef, useEffect } from "react";

const LayoutTest = () => {
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
        const element = elementRef.current;
        element.style.backgroundColor = 'white';
        setTimeout(() => {
            element.style.backgroundColor = 'pink';
        }, 1000)
        return () => {
          element.style.backgroundColor = 'white';
        };
      }, []);

      useEffect(() => {
        console.log('useEffect');
      }, []);


    return (
        <div
            className="m-2 border p-2"
            ref={elementRef}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                qui earum a explicabo, eos impedit corrupti minima voluptatibus
                laboriosam reiciendis voluptatem eum, corporis dolorum, ipsum
                dolore obcaecati neque incidunt ab.
            </p>
        </div>
    );
};

export default LayoutTest;
