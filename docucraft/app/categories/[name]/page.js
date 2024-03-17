import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

import ContentDisplay from "@/components/ContentDisplay";

const CategoriesPage = ({params: {name}}) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs, name);
    return (
        <ContentDisplay id={matchedDocs[0].id} />
    )
  }

  export default CategoriesPage