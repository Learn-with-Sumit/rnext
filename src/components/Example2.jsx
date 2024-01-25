import { useState } from "react";

export default function Example2({ userId }) {
    const [comment, setComment] = useState("");

    // 🔴 Avoid: Resetting state on prop change in an Effect
    // useEffect(() => {
    //     setComment("");
    // }, [userId]);

    return (
        <div>
            <h2>Profile ID: {userId}</h2>

            <div>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <p style={{ backgroundColor: "lightcyan" }}>{comment}</p>
            </div>
        </div>
    );
}
