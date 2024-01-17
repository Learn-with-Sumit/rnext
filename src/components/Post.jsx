import Heading from "./Heading";
import Section from "./Section";

export default function Post({ title, body }) {
    return (
        <Section isFancy={true}>
            <Heading>{title}</Heading>
            <p>
                <i>{body}</i>
            </p>
        </Section>
    );
}
