import ContentDisplay from "@/components/ContentDisplay"

const SubContentPage = ({params: {subContentId}}) => {
    return (
        <ContentDisplay id={subContentId} />
    )
  }

  export default SubContentPage