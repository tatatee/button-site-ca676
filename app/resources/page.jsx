import fs from 'fs/promises';
import path from 'path';

export default async function Page() {
  return (
    <div>
      <h1>{data?.title || 'Resources'}</h1>
      <p>Setup</p>
    </div>
  );
}
