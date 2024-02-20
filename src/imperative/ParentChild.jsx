import React, {useImperativeHandle, useState, forwardRef, useRef} from 'react'

// Child Component
const ChildComponent = forwardRef((props, ref) => {
    const [greeting, setGreeting] = useState("Hi");

    useImperativeHandle(ref, () => (
        {
            getGreeting() {
                return greeting;
            },
            updateGreeting(greet) {
                setGreeting(greet);
            }
        }
    ))


    return (
        <div className='border border-red-600 p-2 m-2'>
            <h2>I am a child</h2>
            <p>{greeting}</p>
        </div>
    );
  });

  // Parent Component
  const ParentComponent = () => {
    const childRef = useRef();
    function handleGreet() {
        childRef.current.updateGreeting("Hola People!");
    }
    
    return (
        <div className='border border-blue-600 p-2 m-2'>
            <h2>I am a Parent</h2>
            <button
                className='p-2 bg-black text-white rounded'
                onClick={handleGreet}>
                Geet Me
            </button>
            <ChildComponent ref={childRef}/>
        </div>
    );
  };

const ParentChild = () => {
  return (
    <div className='border border-gray-600 p-2 m-2'>
        <ParentComponent />
    </div>
  )
}

export default ParentChild