import ExcelJS from 'exceljs';

export const downloadExcel = (data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');
  worksheet.addRow(Object.keys(data[0]));
  data.forEach((item) => {
    worksheet.addRow(Object.values(item));
  });
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.xlsx';
    link.click();
  });
};