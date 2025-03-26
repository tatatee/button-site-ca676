import fs from 'fs/promises';
import path from 'path';

export default async function Page() {
  return (
    <div>
      <h1>{data?.title || 'Genetics'}</h1>
      <p>Quail genetics</p>
    </div>
  );
}
