import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <h2>Learn with Sumit</h2>

            <Panel
                title="Paid Course"
                isActive={activeIndex === 0 && true}
                onActive={() => setActiveIndex(0)}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                repellat laboriosam, dicta accusamus fugit, vel provident
                nesciunt tenetur a amet nam distinctio quaerat quas ipsum
                inventore eligendi maiores consectetur qui?
            </Panel>

            <Panel
                title="Free Course"
                isActive={activeIndex === 1 && true}
                onActive={() => setActiveIndex(1)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                nesciunt autem adipisci ab ipsa placeat, minus libero fugit
                facere magni exercitationem delectus ipsum deleniti recusandae
                laboriosam nobis? Ut, perferendis aut.
            </Panel>
        </>
    );
}
