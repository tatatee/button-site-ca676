import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/pages/about.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function AboutPage() {
  const data = await getPageData();

  return (
    <div>
      <h1>{data?.title || 'About'}</h1>
      {/* Add other content from your about.json file here */}
      <p>This is the about us page.</p>
    </div>
  );
}
