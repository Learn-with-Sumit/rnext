const ChildComponent = () => {
    return <div>I am a Child Component</div>;
};

const ParentComponent = () => {
    return (
        <div>
            <ChildComponent />
        </div>
    );
};

export default ParentComponent;
