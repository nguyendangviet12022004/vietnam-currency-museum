import csv
import json

# Read CSV
data = []
with open('data.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        data.append(row)

# Group data by Period and Timeline
periods = []
current_period = None
current_timeline = None

for row in data:
    period_name = row['Thời kì'].strip() if row['Thời kì'] else None
    timeline_name = row['Thời gian'].strip() if row['Thời gian'] else None
    link = row['Link'].strip() if row['Link'] else None
    description = row['Mô tả thông tin '].strip() if row['Mô tả thông tin '] else None
    
    # If new period
    if period_name:
        current_period = {
            'name': period_name,
            'timelines': []
        }
        periods.append(current_period)
    
    # If new timeline
    if timeline_name and current_period:
        current_timeline = {
            'name': timeline_name,
            'items': []
        }
        current_period['timelines'].append(current_timeline)
    
    # Add item to current timeline
    if link and description and current_period and current_timeline:
        # Parse multiple links (separated by space)
        images = [l.strip() for l in link.split() if l.strip().startswith('http')]
        
        if images:  # Only add if we have valid image links
            current_timeline['items'].append({
                'images': images,
                'description': description
            })

# Print result
print(json.dumps(periods, ensure_ascii=False, indent=2))
