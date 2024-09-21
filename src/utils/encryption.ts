import { TaskType } from "@/@types/TaskType";

export function encryptData(data: TaskType[]): string {
  const stringifiedData = JSON.stringify(data);
  return btoa(stringifiedData);
}

export function decryptData(encryptedData: string): TaskType[] {
  const decrypted = atob(encryptedData);
  return JSON.parse(decrypted) as TaskType[];
}
