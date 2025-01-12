import Excel from 'exceljs';

const workbook = new Excel.Workbook();
workbook.creator = 'Sistema_Lc_Reyes_Cia';
workbook.created = new Date();

// Private Function
function UseWorkBook() {
  workbook.lastModifiedBy = globalThis.localStorage.getItem('username') || 'System';
  workbook.modified = new Date();
  workbook.lastPrinted = new Date();
  return workbook;
}

// Public Functions
/**
 * @param {string} nameSheet - The name sheet
 * @param {Excel.TableColumnProperties[]} columns - The columns of sheet  
 * @param {any[][]} rows - The rows of sheet
 * @returns {Promise<Blob>}
*/
export async function CreateDataSheet(nameSheet, columns, rows) {   
  const workbook = UseWorkBook();
  const sheet = workbook.addWorksheet(nameSheet);
  try {
    sheet.addTable({
      name: nameSheet.replace(/\s+/g, '_'),
      ref: 'A1',
      headerRow: true,
      totalsRow: true,
      style: {
        theme: 'TableStyleDark3',
        showRowStripes: true,
      },
      columns,
      rows
    });

    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    return blob;
  } catch (error) {
    console.error(error);
  } finally {
    workbook.removeWorksheet(sheet.id);
  }
}