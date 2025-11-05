import fs from 'fs';

// Đọc file CSV
const csvContent = fs.readFileSync('[MLN122]_Sản phẩm sáng tạo - Thu thập data.csv', 'utf-8');

// Parse CSV thủ công
const rows = [];
let currentRow = [];
let currentField = '';
let inQuotes = false;

for (let i = 0; i < csvContent.length; i++) {
  const char = csvContent[i];
  const nextChar = csvContent[i + 1];
  
  if (char === '"' && nextChar === '"') {
    currentField += '"';
    i++; // Skip next quote
  } else if (char === '"') {
    inQuotes = !inQuotes;
  } else if (char === ',' && !inQuotes) {
    currentRow.push(currentField);
    currentField = '';
  } else if (char === '\n' && !inQuotes) {
    currentRow.push(currentField);
    if (currentRow.some(f => f.trim())) {
      rows.push(currentRow);
    }
    currentRow = [];
    currentField = '';
  } else if (char !== '\r') {
    currentField += char;
  }
}

if (currentField || currentRow.length > 0) {
  currentRow.push(currentField);
  if (currentRow.some(f => f.trim())) {
    rows.push(currentRow);
  }
}

console.log(`📋 Parsed ${rows.length} rows from CSV`);

// Tạo mapping từ Google Drive file ID -> tên file ảnh
const imageMapping = new Map();

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const imageNames = row[2]?.trim() || ''; // Cột "Ảnh"
  const links = row[4]?.trim() || ''; // Cột "Link"
  
  if (!imageNames || !links) continue;
  
  // Tách nhiều ảnh - split bằng pattern trước mỗi tên file
  const imageFiles = [];
  
  // Dùng regex để tìm tất cả patterns: text.jpg hoặc text.png hoặc text.webp
  // Cho phép tên file có khoảng trắng và ký tự đặc biệt
  const matches = imageNames.matchAll(/[^,\n]+?\.(jpg|png|webp)/gi);
  for (const match of matches) {
    const filename = match[0].trim();
    if (filename) {
      imageFiles.push(filename);
    }
  }
  
  // Tách nhiều links
  const linkList = links.split(/\s+/).filter(l => l.includes('drive.google.com'));
  
  // Map từng link với file tương ứng
  for (let j = 0; j < Math.min(imageFiles.length, linkList.length); j++) {
    const link = linkList[j];
    const fileName = imageFiles[j];
    
    // Extract file ID từ Google Drive URL
    const idMatch = link.match(/[\/=]([a-zA-Z0-9_-]{25,})/);
    if (idMatch) {
      const fileId = idMatch[1];
      imageMapping.set(fileId, fileName);
      console.log(`  ${fileId} -> ${fileName}`);
    }
  }
}

console.log(`\n✅ Tìm thấy ${imageMapping.size} mappings`);

// Đọc sampleData.ts
const sampleDataPath = 'src/data/sampleData.ts';
let content = fs.readFileSync(sampleDataPath, 'utf-8');

// Thay thế URLs
let replacedCount = 0;
imageMapping.forEach((fileName, fileId) => {
  const oldUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  const newPath = `/images/${fileName}`;
  
  if (content.includes(oldUrl)) {
    content = content.replaceAll(oldUrl, newPath);
    replacedCount++;
    console.log(`✅ Replaced: ${fileId} -> ${fileName}`);
  }
});

// Lưu file
fs.writeFileSync(sampleDataPath, content, 'utf-8');

console.log(`\n🎉 Hoàn thành! Đã thay thế ${replacedCount} URLs`);
console.log(`📁 Hãy đặt tất cả ảnh vào thư mục: public/images/`);
console.log(`   Ví dụ: public/images/Nhà Đinh 1.jpg`);
