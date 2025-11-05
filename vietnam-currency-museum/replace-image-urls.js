import fs from 'fs';

// Đọc file CSV
const csvPath = '[MLN122]_Sản phẩm sáng tạo - Thu thập data.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Trích xuất tất cả tên file ảnh
const imageFiles = csvContent.match(/[^\s,]+\.(jpg|png|webp)/gi) || [];

// Trích xuất tất cả Google Drive links
const driveLinks = csvContent.match(/https:\/\/drive\.google\.com\/[^\s,)]+/gi) || [];

console.log(`📋 Tìm thấy ${imageFiles.length} file ảnh và ${driveLinks.length} links`);

// Tạo mapping
const imageMapping = new Map();

driveLinks.forEach((link) => {
  // Extract file ID
  const idMatch = link.match(/[\/=]([a-zA-Z0-9_-]{20,})/);
  if (idMatch) {
    const fileId = idMatch[1];
    
    // Tìm tên file tương ứng trong văn bản gần link này
    const linkIndex = csvContent.indexOf(link);
    const before = csvContent.substring(Math.max(0, linkIndex - 200), linkIndex);
    
    // Tìm tên file gần nhất trước link
    const nearbyFiles = before.match(/[^\s,]+\.(jpg|png|webp)/gi);
    if (nearbyFiles && nearbyFiles.length > 0) {
      const fileName = nearbyFiles[nearbyFiles.length - 1];
      imageMapping.set(fileId, fileName);
      console.log(`  ${fileId} -> ${fileName}`);
    }
  }
});

console.log('📋 Tìm thấy mapping cho', imageMapping.size, 'ảnh:');
imageMapping.forEach((filename, id) => {
  console.log(`  ${id} -> ${filename}`);
});

// Đọc file sampleData.ts
const sampleDataPath = 'src/data/sampleData.ts';
let sampleDataContent = fs.readFileSync(sampleDataPath, 'utf-8');

// Thay thế tất cả Google Drive URLs bằng local paths
let replacedCount = 0;
imageMapping.forEach((filename, fileId) => {
  const googleDrivePattern = new RegExp(`https://drive\\.google\\.com/thumbnail\\?id=${fileId}&sz=w1000`, 'g');
  const localPath = `/images/${filename}`;
  
  const matches = sampleDataContent.match(googleDrivePattern);
  if (matches) {
    sampleDataContent = sampleDataContent.replace(googleDrivePattern, localPath);
    replacedCount += matches.length;
    console.log(`✅ Thay thế: ${fileId} -> ${localPath}`);
  }
});

// Lưu file đã được update
fs.writeFileSync(sampleDataPath, sampleDataContent, 'utf-8');

console.log(`\n✨ Hoàn thành! Đã thay thế ${replacedCount} URLs trong sampleData.ts`);
console.log('📁 Vui lòng đặt tất cả ảnh vào thư mục: public/images/');
