import fs from 'fs/promises';
import path from 'path';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/pages/quails.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function QuailPage() {
  const data = await getPageData();

  return (
      <main className="flex flex-col gap-8 sm:gap-16">
        <h1>{data?.title || 'Quails'}</h1>
          <section className="flex flex-col gap-4">
              This is where the quail cards are displayed
          </section>
          {/* !!cards?.length && <CardsGrid cards={cards} /> */}
      </main>
  );
}
