export default function Example8({ data }) {
    // 🔴 Avoid: Passing data to the parent in an Effect
    // useEffect(() => {
    //     if (data) {
    //         onFetched(data);
    //     }
    // }, [onFetched, data]);

    return <div>Example 8: {data}</div>;
}
