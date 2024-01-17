import AllPosts from "./components/AllPosts";
import Heading from "./components/Heading";
import Post from "./components/Post";
import Section from "./components/Section";

export default function ProfilePage() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post title="Hello traveller!" body="Read about my adventures." />
            <AllPosts />
        </Section>
    );
}
