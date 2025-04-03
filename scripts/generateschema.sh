export $(grep -v '^#' .env.local | xargs)

echo "Generating schema using token: $DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN"

gql.tada generate schema https://graphql.datocms.com \
  --header "X-Exclude-Invalid: true" \
  --header "Authorization: $DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN"
