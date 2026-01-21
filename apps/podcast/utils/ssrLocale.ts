import { join } from 'path'
import fs from "fs";

const ssrLocale = ({
  fileName,
}: {
  fileName: string;
}) => {
  const directory = join(process.cwd(), `public/locales/es/${fileName}`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(directory, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('File not found.');
      return false;
    } else {
      throw err;
    }
  }
  fileContents = JSON.parse(fileContents);
  return fileContents;
};
export default ssrLocale;
