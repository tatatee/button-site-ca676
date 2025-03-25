import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/pages/quail.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function AboutPage() {
  const data = await getPageData();

  return (
    <div>
      <h1>{data?.title || 'Quails'}</h1>
      {/* Add other content from your quail json files here */}
      <p>This is the quail page.</p>
    </div>
  );
}
