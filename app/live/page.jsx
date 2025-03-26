import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/live/stream.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function LivestreamPage() {
  const data = await getPageData();

  return (
    <div>
      <h1>{data?.title || 'Button Cam'}</h1>
      {/* Embed youtube stream, link to be stored in the stream.json file */}
      <p>Check what the buttons are up to!</p>
    </div>
  );
}
