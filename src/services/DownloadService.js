/**
 * @param {Blob} file - The file to download
*/
export function DownloadFile(file) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = 'Comisiones_Temporales.xlsx';
  document.body.appendChild(a);
  a.click();
  
  document.body.removeChild(a);
}