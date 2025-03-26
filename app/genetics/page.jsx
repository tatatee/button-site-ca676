import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/pages/about.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function Page() {
  const data = await getPageData();

  return (
    <div>
      <h1>{data?.title || 'Genetics'}</h1>
      <p>Quail genetics</p>
    </div>
  );
}
