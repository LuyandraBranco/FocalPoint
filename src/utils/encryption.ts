export function encryptData(data: any): string {
    const stringifiedData = JSON.stringify(data);
    return btoa(stringifiedData);
  }
  
  export function decryptData(encryptedData: string): any {
    const decrypted = atob(encryptedData);
    return JSON.parse(decrypted);
  }
  