import { gql } from "graphql-request";
import { getClient } from "@/lib/graphQLClient";

export const getAllPosts = async (tags) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query allPosts($tags: [ObjectId!]) {
        publication(host: "blog.greenroots.info") {
          title
          posts(first: 20, filter:{tags: $tags}) {
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                author{
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    { tags: tags }
  );

  return data.publication.posts.edges;
};