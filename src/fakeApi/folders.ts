import { Folder, mockFolders } from '../mock/folders';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchFolders = async (): Promise<Folder[]> => {
  await delay(1000); 
  return mockFolders;
};
