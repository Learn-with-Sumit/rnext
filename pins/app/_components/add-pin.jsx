import { createPin } from "../actions";

const AddPin = () => {
    return (
        <form action={createPin}>
            <input type="hidden" name="title" value="Mac Book Pro" />
            <input
                type="hidden"
                name="description"
                value="Mac Book Pro M3 model 2024 make."
            />
            <input type="hidden" name="type" value="Laptop" />
            <input
                type="hidden"
                name="content"
                value="This MacBook Pro has all that we need. I am going to buy it soon"
            />
            <button type="submit">+Add</button>
        </form>
    );
};

export default AddPin;
