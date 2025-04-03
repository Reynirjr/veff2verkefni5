#!/bin/bash

# Check if we have the required environment variable
if [ -z "$DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN" ]; then
  echo "Warning: DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN is not set. Skipping schema generation."
else
  echo "Attempting to generate schema with provided token..."
  # Try to generate schema, but continue if it fails
  bash scripts/generateschema.sh || echo "Schema generation failed, but continuing build"
fi

# Run the Next.js build
npm run next build
