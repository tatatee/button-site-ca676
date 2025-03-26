import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/pages/resources.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function Page() {
  const data = await getPageData();

  return (
    <div>
      <h1>{data?.title || 'Resources'}</h1>
      <p>Setup</p>
    </div>
  );
}
