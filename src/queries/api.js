export async function blogPageQuery() {
  const siteBlogPageQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        posts(first: 100) {
          nodes {
            title
            date
            excerpt
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            slug
          }
        }
      }
              `,
    }),
  });
  const { data } = await siteBlogPageQueryRes.json();
  return data;
}

export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                  nodeByUri(uri: $uri) {
                    __typename
                    isContentNode
                    isTermNode
                    ... on Post{
                      id
                      title
                      date
                      uri
                      excerpt
                      content
                      seo {
                        metaDesc
                        title
                      }
                      featuredImage {
                        node {
                          sourceUrl
                          altText
                        }
                      }
                    }
                  }
                }
              `,
      variables: {
        uri: uri,
      },
    }),
  });
  const { data } = await response.json();
  return data;
}

export async function getAllUris() {
  const response = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllUris {
              terms {
                nodes {
                  uri
                }
              }
              posts(first: 100) {
                nodes {
                  uri
                }
              }
            }
            `,
    }),
  });

  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes);
    }, [])
    .map((node) => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return {
        params: {
          uri: trimmedURI,
        },
      };
    });

  return uris;
}

export async function getPricing() {
  const sitePricingQueryRes = await fetch(import.meta.env.WP_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
        pageBy(uri: "/pricing") {
          id
          pricing {
            services {
              details
              serviceName
            }
          }
        }
      }
              `,
    }),
  });
  const { data } = await sitePricingQueryRes.json();
  return data;
}
