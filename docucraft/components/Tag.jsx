import Link from "next/link"

const Tag = ({tag}) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 p-1 rounded-md mr-2 text-xs">{tag}</Link>
  )
}

export default Tag