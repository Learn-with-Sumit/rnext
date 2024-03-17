import ContentDisplay from "@/components/ContentDisplay"

const ContentPage = ({params: {contentId}}) => {
  return (
    <ContentDisplay id={contentId} />
  )
}

export default ContentPage