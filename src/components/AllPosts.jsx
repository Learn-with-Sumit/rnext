import Heading from "./Heading";
import RecentPosts from "./RecentPosts";
import Section from "./Section";

export default function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    );
}
