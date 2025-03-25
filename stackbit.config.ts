import { defineStackbitConfig, GitContentSource, SiteMapEntry } from '@stackbit/types';

export default defineStackbitConfig({
  "stackbitVersion": "~0.6.0",
  "nodeVersion": "18",
  "ssgName": "nextjs",
  "contentSources": [
    new GitContentSource({
      "rootPath": __dirname,
      "contentDirs": ["content"],
      "models": [
        {
          "name": "Page",
          "type": "page",
          "urlPath": "/{slug}",
          "filePath": "content/pages/{slug}.json",
          "fields": [{ "name": "title", "type": "string", "required": true }],
        },
        {
          "name": "Quail",
          "type": "object",
          "label": "Quail",
          "fields": [
            { "name": "name", "type": "string", "label": "Name" },
            { "age": "date", "label": "Age", "name": "age" },
            {
              "name": "images",
              "type": "list",
              "label": "Images",
              "items": { "type": "image", "label": "Image" },
            },
            { "name": "notes", "type": "string", "label": "Notes" },
            { "name": "plumage", "type": "string", "label": "Plumage" },
            { "name": "sex", "type": "string", "label": "Sex" },
            {
              "name": "genetics",
              "type": "list",
              "label": "Genetics",
              "items": { "type": "string" },
            },
            {
              "name": "myStock",
              "type": "boolean",
              "label": "From My Stock",
            },
            // Add other quail attributes as needed
          ],
        },
        {
          "name": "Post",
          "type": "object",
          "label": "Post",
          "fields": [
            { "name": "title", "type": "string", "label": "Title" },
            { "name": "date", "type": "date", "label": "Date" },
            { "name": "content", "type": "markdown", "label": "Content" },
            // add other post attributes as needed
          ],
        },
        // Add other models (records, calendar) as needed
      ],
    }),
  ],
  "siteMap": ({ documents, models }) => {
    return documents
      .map((document) => {
        return {
          "stableId": document.id,
          "urlPath": `/${document.modelName.toLowerCase()}/${document.id}`,
          "document": document,
          "isHomePage": false,
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  },
  "postInstallCommand": "npm i --no-save @stackbit/types",
});
