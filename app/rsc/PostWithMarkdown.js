import Markdown from "react-markdown";

export default async function PostWithMarkdown({ text }) {
    const markdownText = `## ${text}`;

    return (
        <div className="box-3">
            <Markdown>{markdownText}</Markdown>
        </div>
    );
}
