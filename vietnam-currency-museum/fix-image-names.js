import fs from 'fs';

// Đọc file CSV
const csvContent = fs.readFileSync('[MLN122]_Sản phẩm sáng tạo - Thu thập data.csv', 'utf-8');

// Parse CSV
const rows = [];
let currentRow = [];
let currentField = '';
let inQuotes = false;

for (let i = 0; i < csvContent.length; i++) {
  const char = csvContent[i];
  const nextChar = csvContent[i + 1];
  
  if (char === '"' && nextChar === '"') {
    currentField += '"';
    i++;
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

console.log(`📋 Parsed ${rows.length} rows`);

// Tạo mapping từ file ID -> tên file đúng
const correctMapping = new Map();

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const imageNames = row[2]?.trim() || '';
  const links = row[4]?.trim() || '';
  
  if (!imageNames || !links) continue;
  
  // Extract image files
  const imageFiles = [];
  const matches = imageNames.matchAll(/[^,\n]+?\.(jpg|png|webp)/gi);
  for (const match of matches) {
    const filename = match[0].trim();
    if (filename) {
      imageFiles.push(filename);
    }
  }
  
  const linkList = links.split(/\s+/).filter(l => l.includes('drive.google.com'));
  
  for (let j = 0; j < Math.min(imageFiles.length, linkList.length); j++) {
    const link = linkList[j];
    const fileName = imageFiles[j];
    
    const idMatch = link.match(/[\/=]([a-zA-Z0-9_-]{25,})/);
    if (idMatch) {
      const fileId = idMatch[1];
      correctMapping.set(fileId, fileName);
      console.log(`  ${fileId} -> ${fileName}`);
    }
  }
}

console.log(`\n✅ Found ${correctMapping.size} correct mappings`);

// Đọc sampleData.ts
const sampleDataPath = 'src/data/sampleData.ts';
let content = fs.readFileSync(sampleDataPath, 'utf-8');

// Tạo mapping ngược: từ old path -> correct path dựa trên file ID
const oldToNew = new Map();

correctMapping.forEach((correctFileName, fileId) => {
  // Pattern cũ có thể là nhiều dạng
  // Từ lần chạy trước, ta biết file ID đã được replace thành /images/xxx.jpg
  // Ta cần tìm trong content xem có pattern nào match với file ID này không
  
  // Nhưng vấn đề là content hiện tại không còn file ID
  // Vì vậy ta cần dùng chiến thuật khác:
  // Đọc xem item nào có image path không đúng, thay thế theo thứ tự
});

// Chiến lược mới: parse lại sampleData.ts và thay thế từng item theo thứ tự
// Vì CSV và sampleData theo cùng thứ tự

// Tạo list tất cả tên file đúng theo thứ tự
const correctFiles = [];
for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const imageNames = row[2]?.trim() || '';
  
  if (!imageNames) continue;
  
  const matches = imageNames.matchAll(/[^,\n]+?\.(jpg|png|webp)/gi);
  for (const match of matches) {
    const filename = match[0].trim();
    if (filename) {
      correctFiles.push(filename);
    }
  }
}

console.log(`\n📝 Total ${correctFiles.length} files in order:`);
correctFiles.forEach((f, i) => console.log(`  ${i + 1}. ${f}`));

// Thay thế trong sampleData.ts theo thứ tự
let fileIndex = 0;
const imagePathRegex = /'\/images\/[^']+'/g;

content = content.replace(imagePathRegex, (match) => {
  if (fileIndex < correctFiles.length) {
    const newPath = `'/images/${correctFiles[fileIndex]}'`;
    console.log(`Replace ${match} -> ${newPath}`);
    fileIndex++;
    return newPath;
  }
  return match;
});

fs.writeFileSync(sampleDataPath, content, 'utf-8');

console.log(`\n🎉 Hoàn thành! Đã thay thế ${fileIndex} image paths`);
console.log(`📁 Hãy đặt tất cả ảnh vào thư mục: public/images/`);
