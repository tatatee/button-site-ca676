import fs from 'fs/promises';
import path from 'path';
import { CardsGrid } from 'components/cards-grid';

async function getPageData() {
  const filePath = path.join(process.cwd(), 'content/quails/quail-2.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function Page() {
  const data = await getPageData();

  return (
      <main className="flex flex-col gap-8 sm:gap-16">
          <section className="flex flex-col gap-4">
              This is where the quail cards are displayed
          </section>
          {/* !!cards?.length && <CardsGrid cards={cards} /> */}
      </main>
  );
}
