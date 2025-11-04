import json
import re

def load_translations():
    """Load manual translations from translations.json"""
    try:
        with open('translations.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('descriptions', {})
    except FileNotFoundError:
        print("⚠️ Warning: translations.json not found, will use Vietnamese for descriptionEn")
        return {}

def convert_gdrive_link(url):
    """Convert various Google Drive URL formats to direct view URL"""
    if 'drive.google.com' in url:
        # Handle /file/d/{id}/view format
        if '/file/d/' in url:
            file_id = url.split('/file/d/')[1].split('/')[0]
        # Handle open?id={id} format
        elif 'open?id=' in url:
            file_id = url.split('open?id=')[1].split('&')[0]
        # Handle other id= formats
        elif 'id=' in url:
            file_id = url.split('id=')[1].split('&')[0]
        else:
            return url
        # Use thumbnail API which works better with CORS and permissions
        return f"https://drive.google.com/thumbnail?id={file_id}&sz=w1000"
    return url

def escape_string(s):
    """Escape all special characters for TypeScript strings"""
    s = s.replace('\\', '\\\\')  # Escape backslashes first
    s = s.replace('\n', '\\n')   # Escape newlines
    s = s.replace('\r', '\\r')   # Escape carriage returns
    s = s.replace("'", "\\'")    # Escape single quotes
    s = s.replace('"', '\\"')    # Escape double quotes
    return s

def get_translation(item_id, vietnamese_text, translations):
    """Get English translation from translations dict"""
    item_key = str(item_id)
    if item_key in translations:
        trans = translations[item_key]
        # Always return English translation if item ID exists
        return trans.get('en', vietnamese_text)
    # Fallback to Vietnamese if no translation found
    print(f"⚠️ Warning: No translation found for item ID {item_id}")
    return vietnamese_text

def translate_to_english_OLD_FUNCTION(text):
    """OLD AUTOMATIC TRANSLATION - NOT USED ANYMORE
    Translate Vietnamese text to English, preserving Chinese characters"""
    
    # Multi-word phrases (translate first to avoid conflicts)
    text = text.replace('đồng tiền', 'coin')
    text = text.replace('tiền đồng', 'copper coin')
    text = text.replace('tiền giấy', 'paper money')
    text = text.replace('tiền kim loại', 'metal coin')
    text = text.replace('tiền cổ', 'ancient coin')
    text = text.replace('loại tiền', 'type of currency')
    text = text.replace('hệ thống tiền tệ', 'monetary system')
    text = text.replace('cho đúc', 'ordered to mint')
    text = text.replace('được đúc', 'was minted')
    text = text.replace('được lưu hành', 'was circulated')
    text = text.replace('làm tiền giả', 'counterfeiting money')
    text = text.replace('nhà vua', 'the king')
    text = text.replace('người Việt', 'Vietnamese people')
    text = text.replace('dân tộc Việt Nam', 'Vietnamese nation')
    text = text.replace('niên hiệu', 'era name')
    text = text.replace('hình tròn', 'round shape')
    text = text.replace('lỗ vuông', 'square hole')
    text = text.replace('mặt trước', 'obverse side')
    text = text.replace('mặt sau', 'reverse side')
    text = text.replace('chữ Hán', 'Chinese characters')
    text = text.replace('khi xưa', 'in ancient times')
    text = text.replace('thời kỳ', 'period')
    text = text.replace('giai đoạn', 'phase')
    text = text.replace('triều đại', 'dynasty')
    text = text.replace('triều đình', 'royal court')
    text = text.replace('buôn bán', 'trading')
    text = text.replace('giao thương', 'commerce')
    text = text.replace('ra đời', 'was created')
    text = text.replace('cho đến nay', 'until now')
    text = text.replace('hiện tại', 'currently')
    text = text.replace('tuy nhiên', 'however')
    text = text.replace('mặc dù', 'although')
    text = text.replace('dựa trên', 'based on')
    text = text.replace('trong đó', 'in which')
    text = text.replace('đối xứng', 'symmetrical')
    text = text.replace('cân chỉnh', 'balanced')
    text = text.replace('khác nhau', 'different')
    text = text.replace('phổ biến', 'popular')
    text = text.replace('quan trọng', 'important')
    text = text.replace('độc lập', 'independence')
    text = text.replace('tự chủ', 'autonomy')
    text = text.replace('không còn', 'no longer')
    text = text.replace('bất kỳ', 'any')
    text = text.replace('còn sót lại', 'remaining')
    text = text.replace('nhà nghiên cứu', 'researchers')
    text = text.replace('nhà khảo cổ học', 'archaeologists')
    text = text.replace('đường kính', 'diameter')
    text = text.replace('ở giữa', 'in the center')
    text = text.replace('trên mặt', 'on the surface')
    text = text.replace('tuần tự', 'sequentially')
    text = text.replace('từ trên xuống dưới', 'from top to bottom')
    text = text.replace('từ phải sang trái', 'from right to left')
    text = text.replace('từ trái sang phải', 'from left to right')
    text = text.replace('ý nghĩa', 'meaning')
    text = text.replace('ước muốn', 'wish')
    text = text.replace('mong muốn', 'desire')
    text = text.replace('thiên hạ', 'the world')
    text = text.replace('đất nước', 'country')
    text = text.replace('xã hội', 'society')
    text = text.replace('kinh tế', 'economy')
    text = text.replace('chính trị', 'politics')
    text = text.replace('ngoại giao', 'diplomacy')
    text = text.replace('văn hóa', 'culture')
    text = text.replace('lịch sử', 'history')
    text = text.replace('phát triển', 'development')
    text = text.replace('hưng thịnh', 'prosperity')
    text = text.replace('phồn vinh', 'flourishing')
    text = text.replace('thái bình', 'peace')
    text = text.replace('yên ổn', 'stability')
    text = text.replace('kim loại', 'metal')
    text = text.replace('vũ khí', 'weapons')
    text = text.replace('chính sách', 'policy')
    text = text.replace('người dân', 'people')
    text = text.replace('dân chúng', 'populace')
    text = text.replace('tin dùng', 'trusted')
    text = text.replace('thất bại', 'failed')
    text = text.replace('kế thừa', 'inherited')
    text = text.replace('ghi chép', 'recorded')
    text = text.replace('phác họa', 'sketched')
    text = text.replace('tranh luận', 'debate')
    text = text.replace('tranh cãi', 'controversy')
    text = text.replace('chính xác', 'accurate')
    text = text.replace('họa tiết', 'patterns')
    text = text.replace('mệnh giá', 'denomination')
    text = text.replace('phân biệt', 'distinguish')
    text = text.replace('tập trung', 'concentrate')
    text = text.replace('toàn bộ', 'entire')
    text = text.replace('thu hồi', 'withdraw')
    text = text.replace('ban hành', 'promulgate')
    text = text.replace('tàng trữ', 'hoard')
    text = text.replace('sử dụng', 'use')
    text = text.replace('vi phạm', 'violate')
    text = text.replace('phát hiện', 'discovered')
    text = text.replace('quan niệm', 'concept')
    text = text.replace('con người', 'people')
    text = text.replace('biểu tượng', 'symbol')
    text = text.replace('thể hiện', 'represent')
    text = text.replace('góp phần', 'contribute')
    text = text.replace('khẳng định', 'affirm')
    text = text.replace('nền', 'foundation of')
    text = text.replace('các lĩnh vực', 'fields of')
    text = text.replace('đã xác lập', 'established')
    text = text.replace('ba loại', 'three types')
    text = text.replace('bốn chữ', 'four characters')
    text = text.replace('hai chữ', 'two characters')
    text = text.replace('một trong những', 'one of the')
    text = text.replace('đánh giá cao', 'highly valued')
    text = text.replace('kỹ thuật', 'technique')
    text = text.replace('chất lượng', 'quality')
    text = text.replace('dày dặn', 'thick')
    text = text.replace('sắc nét', 'sharp')
    text = text.replace('gọn gàng', 'neat')
    text = text.replace('lên ngôi', 'ascended the throne')
    text = text.replace('thực hiện', 'implemented')
    text = text.replace('phục vụ', 'serve')
    text = text.replace('đời sống', 'life')
    text = text.replace('cũng như', 'as well as')
    text = text.replace('tồn tại', 'exist')
    text = text.replace('vương triều', 'royal dynasty')
    text = text.replace('ngàn đời', 'thousands of generations')
    text = text.replace('hậu thế', 'future generations')
    text = text.replace('giống như', 'similar to')
    text = text.replace('truyền thống', 'traditional')
    text = text.replace('thông thường', 'ordinary')
    text = text.replace('nhu cầu', 'demand')
    text = text.replace('trao đổi', 'exchange')
    text = text.replace('số lượng', 'quantity')
    text = text.replace('vai trò', 'role')
    text = text.replace('giữ', 'hold')
    text = text.replace('rộng rãi', 'widely')
    text = text.replace('thưởng', 'reward')
    text = text.replace('ban cho', 'grant to')
    text = text.replace('có công', 'meritorious')
    text = text.replace('cai trị', 'rule')
    text = text.replace('giành', 'gain')
    text = text.replace('ngoài', 'besides')
    text = text.replace('cạnh', 'edge')
    text = text.replace('các', 'the')
    text = text.replace('những', 'the')
    text = text.replace('nhằm', 'in order to')
    text = text.replace('để', 'to')
    text = text.replace('cho', 'for')
    text = text.replace('của', 'of')
    text = text.replace('với', 'with')
    text = text.replace('từ', 'from')
    text = text.replace('đến', 'to')
    text = text.replace('trên', 'on')
    text = text.replace('dưới', 'under')
    text = text.replace('trong', 'in')
    text = text.replace('ở', 'at')
    text = text.replace('về', 'about')
    text = text.replace('này', 'this')
    text = text.replace('đó', 'that')
    text = text.replace('khi', 'when')
    text = text.replace('thời', 'time')
    text = text.replace('năm', 'year')
    text = text.replace('đời', 'era')
    text = text.replace('sau', 'after')
    text = text.replace('trước', 'before')
    text = text.replace('nay', 'now')
    text = text.replace('lại', 'again')
    text = text.replace('cũng', 'also')
    text = text.replace('và', 'and')
    text = text.replace('hay', 'or')
    text = text.replace('hoặc', 'or')
    text = text.replace('nhưng', 'but')
    text = text.replace('mà', 'which')
    text = text.replace('nên', 'so')
    text = text.replace('đã', 'have')
    text = text.replace('được', 'was')
    text = text.replace('là', 'is')
    text = text.replace('có', 'has')
    text = text.replace('do', 'by')
    text = text.replace('bởi', 'by')
    text = text.replace('như', 'like')
    text = text.replace('nào', 'which')
    text = text.replace('ai', 'who')
    text = text.replace('gì', 'what')
    text = text.replace('đâu', 'where')
    text = text.replace('sao', 'why')
    text = text.replace('bao giờ', 'when')
    text = text.replace('nào', 'any')
    text = text.replace('một', 'one')
    text = text.replace('hai', 'two')
    text = text.replace('ba', 'three')
    text = text.replace('bốn', 'four')
    text = text.replace('năm', 'five')
    text = text.replace('không', 'not')
    text = text.replace('chưa', 'not yet')
    text = text.replace('còn', 'still')
    text = text.replace('đã', 'already')
    text = text.replace('sẽ', 'will')
    text = text.replace('cần', 'need')
    text = text.replace('phải', 'must')
    text = text.replace('nên', 'should')
    text = text.replace('rất', 'very')
    text = text.replace('quá', 'too')
    text = text.replace('lắm', 'much')
    text = text.replace('nhiều', 'many')
    text = text.replace('ít', 'few')
    text = text.replace('hơn', 'more')
    text = text.replace('nhất', 'most')
    text = text.replace('bằng', 'by')
    text = text.replace('theo', 'according to')
    text = text.replace('giữa', 'between')
    text = text.replace('cùng', 'together')
    text = text.replace('riêng', 'separate')
    text = text.replace('chung', 'common')
    text = text.replace('khác', 'different')
    text = text.replace('giống', 'similar')
    text = text.replace('mới', 'new')
    text = text.replace('cũ', 'old')
    text = text.replace('lớn', 'big')
    text = text.replace('nhỏ', 'small')
    text = text.replace('dài', 'long')
    text = text.replace('ngắn', 'short')
    text = text.replace('cao', 'high')
    text = text.replace('thấp', 'low')
    text = text.replace('to', 'large')
    text = text.replace('đẹp', 'beautiful')
    text = text.replace('xấu', 'ugly')
    text = text.replace('tốt', 'good')
    text = text.replace('xấu', 'bad')
    text = text.replace('mạnh', 'strong')
    text = text.replace('yếu', 'weak')
    text = text.replace('nhanh', 'fast')
    text = text.replace('chậm', 'slow')
    
    # Single words that commonly remain
    text = text.replace('tiền', 'currency')
    text = text.replace('đúc', 'minted')
    text = text.replace('lưu hành', 'circulated')
    text = text.replace('phát hành', 'issued')
    text = text.replace('vua', 'king')
    text = text.replace('đồng', 'copper')
    text = text.replace('vẽ', 'drawn')
    text = text.replace('ghi', 'inscribed')
    text = text.replace('viết', 'written')
    text = text.replace('đọc', 'read')
    text = text.replace('chéo', 'diagonally')
    text = text.replace('xuống', 'down')
    text = text.replace('sang', 'across')
    text = text.replace('tờ', 'note')
    text = text.replace('quan', 'mandarin')
    text = text.replace('bị', 'be')
    text = text.replace('coi', 'considered')
    text = text.replace('nhà', 'house')
    text = text.replace('khoảng', 'about')
    text = text.replace('vào', 'in')
    text = text.replace('bắt đầu', 'begin')
    text = text.replace('kết thúc', 'end')
    text = text.replace('ra', 'out')
    text = text.replace('vào', 'into')
    text = text.replace('lên', 'up')
    text = text.replace('đi', 'go')
    text = text.replace('đứng', 'stand')
    text = text.replace('ngồi', 'sit')
    text = text.replace('nằm', 'lie')
    text = text.replace('chạy', 'run')
    text = text.replace('bay', 'fly')
    
    return text

# Load data
with open('structured_data.json', 'r', encoding='utf-8') as f:
    periods_data = json.load(f)

# Load manual translations
translations = load_translations()
print(f"📚 Loaded {len(translations)} translations from translations.json")

# Translations
period_trans = {
    'Thời phong kiến (970–1884)': ('Feudal Period (970-1884)', 'The feudal period of Vietnam from 970 to 1884, marking the birth and development of the nation\\\'s first independent monetary system with unique coins bearing Vietnamese royal seals.'),
    'Thời Pháp thuộc (1885–1954)': ('French Colonial Period (1885-1954)', 'Period under French colonial rule, with the introduction of the Indochinese piastre currency system combining Eastern and Western monetary characteristics.'),
    'Sau Cách mạng tháng Tám (1945–1975)': ('Post-August Revolution (1945-1975)', 'Period following the August Revolution, marked by the issuance of independent Vietnamese currency in both North and South Vietnam during the resistance war.'),
    'Thời kì thống nhất và đổi mới (1975 - nay)': ('Reunification and Renovation Period (1975-present)', 'Modern period from reunification to present, with currency developing towards modernization, adopting polymer technology, and international integration.')
}

timeline_trans = {
    'Nhà Đinh (970)': ('Dinh Dynasty (970)', '970-980'),
    'Nhà Tiền Lê (984)': ('Early Le Dynasty (984)', '984-1009'),
    'Nhà Lý (1010)': ('Ly Dynasty (1010)', '1010-1225'),
    'Nhà hồ': ('Ho Dynasty', '1400-1407'),
    'Hậu Lê – Mạc – Lê Trung Hưng': ('Later Le - Mac - Le Revival', '1428-1789'),
    'Tây Sơn': ('Tay Son Dynasty', '1778-1802'),
    ' Nguyễn': ('Nguyen Dynasty', '1802-1945'),
    '1885–1906': ('Early Colonial Period (1885-1906)', '1885-1906'),
    '1906-1930': ('Golden Age of Indochina Currency (1906-1930)', '1906-1930'),
    '1930-1945': ('Economic Crisis and Japanese Occupation (1930-1945)', '1930-1945'),
    '1945-1954': ('Dual Currency System (1945-1954)', '1945-1954'),
    '1945–1951': ('Uncle Ho\\\'s Currency (1945-1951)', '1945-1951'),
    '1951-1954': ('National Bank of Vietnam (1951-1954)', '1951-1954'),
    '1954–1975': ('North and South Vietnam (1954-1975)', '1954-1975'),
    '1990 - nay': ('Modern Polymer Era (1990-present)', '1990-2025'),
    'Giai đoạn Sau Thống Nhất ( 1975–1978)': ('Post-Reunification Period (1975-1978)', '1975-1978'),
    '1985-1988': ('Currency Reform 1985-1988', '1985-1988')
}

# Generate TS
ts = """import type { Period } from '../types';

/**
 * Dữ liệu lịch sử tiền tệ Việt Nam
 * Vietnamese Currency History Data
 * Cấu trúc: Period (Thời kỳ) -> Timeline (Mốc thời gian) -> Item (Vật phẩm)
 */
export const sampleCurrencyData: Period[] = [
"""

pid = 1
global_item_id = 1  # Track item ID across all periods and timelines
for period in periods_data:
    pname = period['name']
    pname_en, pdesc_en = period_trans.get(pname, (pname, 'Historical period of Vietnamese currency development.'))
    
    if '970' in pname and '1884' in pname:
        pdesc = 'Thời kỳ phong kiến Việt Nam, đánh dấu sự ra đời và phát triển của hệ thống tiền tệ độc lập đầu tiên với các đồng tiền mang ấn tín hoàng gia Việt Nam.'
    elif '1885' in pname and '1954' in pname:
        pdesc = 'Giai đoạn chịu sự cai trị của thực dân Pháp, với sự ra đời của hệ thống tiền tệ Đông Dương kết hợp đặc điểm phương Đông và phương Tây.'
    elif '1945' in pname and '1975' in pname:
        pdesc = 'Giai đoạn sau Cách mạng tháng Tám, đánh dấu sự ra đời của tiền tệ độc lập ở cả miền Bắc và miền Nam trong cuộc kháng chiến.'
    elif '1975' in pname:
        pdesc = 'Thời kỳ hiện đại từ thống nhất đến nay, tiền tệ phát triển theo hướng hiện đại hóa với công nghệ polymer và hội nhập quốc tế.'
    else:
        pdesc = 'Giai đoạn phát triển quan trọng trong lịch sử tiền tệ Việt Nam.'
    
    ts += f"""  {{
    id: 'period-{pid}',
    name: '{escape_string(pname)}',
    nameEn: '{escape_string(pname_en)}',
    description: '{escape_string(pdesc)}',
    descriptionEn: '{pdesc_en}',
    timelines: [
"""
    
    tid = 1
    for timeline in period['timelines']:
        tname = timeline['name']
        tname_en, trange = timeline_trans.get(tname, (tname, ''))
        
        if not trange:
            years = re.findall(r'\d{3,4}', tname)
            if len(years) >= 2:
                trange = f"{years[0]}-{years[1]}"
                syear, eyear = int(years[0]), int(years[1])
            elif len(years) == 1:
                trange = years[0]
                syear, eyear = int(years[0]), int(years[0]) + 50
            else:
                trange, syear, eyear = "Unknown", 1000, 2000
        else:
            years = re.findall(r'\d{3,4}', trange)
            syear, eyear = (int(years[0]), int(years[1])) if len(years) >= 2 else (1000, 2000)
        
        ts += f"""      {{
        id: 'timeline-{pid}-{tid}',
        name: '{escape_string(tname)}',
        nameEn: '{tname_en}',
        timeRange: '{trange}',
        startYear: {syear},
        endYear: {eyear},
        items: [
"""
        
        iid = 1
        for item in timeline['items']:
            desc = escape_string(item['description'])
            # Use manual translation from translations.json
            desc_en = get_translation(global_item_id, item['description'], translations)
            desc_en = escape_string(desc_en)
            
            imgs = ',\n              '.join([f"'{convert_gdrive_link(img)}'" for img in item['images']])
            
            ts += f"""          {{
            id: 'item-{pid}-{tid}-{iid}',
            images: [
              {imgs}
            ],
            description: '{desc}',
            descriptionEn: '{desc_en}'
          }},
"""
            iid += 1
            global_item_id += 1
        
        ts += """        ],
      },
"""
        tid += 1
    
    ts += """    ],
  },
"""
    pid += 1

ts += """];
"""

with open('src/data/sampleData.ts', 'w', encoding='utf-8') as f:
    f.write(ts)

print(f"✅ Generated sampleData.ts successfully!")
print(f"📊 Total periods: {pid - 1}")

# Test the convert function
test_urls = [
    "https://drive.google.com/file/d/1Zi0xWmop7qroAaf0ztGU1kJvXfK6xY9f/view?usp=sharing",
    "https://drive.google.com/open?id=1sgiXxz3AMrEmF-0tXLPxF6U-eKHoLvk4&usp=drive_copy"
]
print("\n🧪 Testing URL conversion:")
for url in test_urls:
    print(f"  {url}")
    print(f"  → {convert_gdrive_link(url)}\n")
