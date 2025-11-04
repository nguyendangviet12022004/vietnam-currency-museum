import csv
import json

# Đọc CSV
data = []
with open('data.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        data.append(row)

# Nhóm dữ liệu theo Period và Timeline
periods = {}
current_period = None
current_timeline = None

for row in data:
    period_name = row['Thời kì'].strip() if row['Thời kì'] else None
    timeline_name = row['Thời gian'].strip() if row['Thời gian'] else None
    image = row['Ảnh '].strip() if row['Ảnh '] else None
    description = row['Mô tả thông tin '].strip() if row['Mô tả thông tin '] else None
    
    # Nếu có period mới
    if period_name:
        current_period = period_name
        if current_period not in periods:
            periods[current_period] = {}
    
    # Nếu có timeline mới
    if timeline_name and current_period:
        current_timeline = timeline_name
        if current_timeline not in periods[current_period]:
            periods[current_period][current_timeline] = []
    
    # Thêm item vào timeline hiện tại
    if image and description and current_period and current_timeline:
        # Xử lý multiple images (separated by space)
        images = [img.strip() for img in image.split() if img.strip().endswith('.jpg') or img.strip().endswith('.png') or img.strip().endswith('.webp')]
        
        periods[current_period][current_timeline].append({
            'images': images,
            'description': description
        })

# In kết quả
print(json.dumps(periods, ensure_ascii=False, indent=2))
