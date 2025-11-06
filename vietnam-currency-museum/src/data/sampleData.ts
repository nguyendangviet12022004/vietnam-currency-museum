import type { Period } from '../types';

/**
 * Dữ liệu lịch sử tiền tệ Việt Nam
 * Vietnamese Currency History Data
 * Cấu trúc: Period (Thời kỳ) -> Timeline (Mốc thời gian) -> Item (Vật phẩm)
 */
export const sampleCurrencyData: Period[] = [
  {
    id: 'period-1',
    name: 'Thời phong kiến (970–1884)',
    nameEn: 'Feudal Period (970-1884)',
    description: 'Thời kỳ phong kiến Việt Nam, đánh dấu sự ra đời và phát triển của hệ thống tiền tệ độc lập đầu tiên với các đồng tiền mang ấn tín hoàng gia Việt Nam.',
    descriptionEn: 'The feudal period of Vietnam from 970 to 1884, marking the birth and development of the nation\'s first independent monetary system with unique coins bearing Vietnamese royal seals.',
    timelines: [
      {
        id: 'timeline-1-1',
        name: 'Nhà Đinh (970)',
        nameEn: 'Dinh Dynasty (970)',
        timeRange: '970-980',
        startYear: 970,
        endYear: 980,
        items: [
          {
            id: 'item-1-1-1',
            images: [
              '/images/Nhà Đinh 1.jpg'
            ],
            description: '(太平興寶) là tên gọi đồng tiền đầu tiên của Việt Nam do nhà Đinh là một triều đại của người Việt cho đúc bắt đầu từ năm 970. Tiền Thái Bình hưng bảo ra đời góp phần khẳng định nền độc lập tự chủ của dân tộc Việt Nam trên các lĩnh vực kinh tế, chính trị, ngoại giao, văn hóa mà Đinh Tiên Hoàng đã xác lập',
            descriptionEn: '(太平興寶) Thái Bình Hưng Bảo is the name of Vietnam\'s first coin minted by the Đinh Dynasty, the first Vietnamese dynasty, beginning in 970. The birth of Thái Bình Hưng Bảo coins helped affirm the foundation of Vietnam\'s independence and autonomy in economic, political, diplomatic, and cultural fields established by Emperor Đinh Tiên Hoàng.'
          },
          {
            id: 'item-1-1-2',
            images: [
              '/images/Nhà Đinh 2.jpg'
            ],
            description: 'Các nhà khảo cổ học đã phát hiện ra rằng đồng tiền Thái Bình Hưng Bảo có ba loại khác nhau, với đường kính khoảng 22 mm và có lỗ vuông ở giữa. Mặt sau (lưng) của đồng tiền có chữ Đinh',
            descriptionEn: 'Archaeologists have discovered that Thái Bình Hưng Bảo coins exist in three different types, with a diameter of approximately 22mm and a square hole in the center. The reverse side of the coin bears the character \'Đinh\'.'
          },
          {
            id: 'item-1-1-3',
            images: [
              '/images/Nhà Đinh 3.jpg'
            ],
            description: 'Trên mặt đồng tiền ghi bốn chữ Hán “Thái Bình Hưng Bảo”-“太平興寶” đọc chéo,tuần tự từ trên xuống dưới,từ phải sang trái.Trong đó,hai chữ “Thái Bình”-“太平” là chỉ niên hiệu vua,với hàm ý thể hiện ước muốn thiên hạ được thái bình,yên ổn. Còn hai chữ “Hưng Bảo”-“興寶” với chữ Hưng trên đồng tiền đi đôi với chữ Bảo đã nói lên mong muốn cho đất nước,xã hội,kinh tế được hưng thịnh,phát triển',
            descriptionEn: 'The obverse of the coin is inscribed with four Chinese characters \'Thái Bình Hưng Bảo\' (太平興寶) read diagonally, sequentially from top to bottom, right to left. Among them, the two characters \'Thái Bình\' (太平) indicate the emperor\'s era name, expressing the wish for the world to be peaceful and stable. The other two characters \'Hưng Bảo\' (興寶), with \'Hưng\' paired with \'Bảo\' on the coin, express the desire for the country, society, and economy to prosper and develop.'
          },
          {
            id: 'item-1-1-4',
            images: [
              '/images/Nhà Đinh 4.jpg'
            ],
            description: 'Có tranh luận về việc chữ “大” (Đại) hay “太” (Thái) mới là chữ chính xác trên tiền — mặc dù niên hiệu là “Thái Bình”. Nhưng chữ “Thái”-“太” trên tiền lại không có nét chấm hay phẩy dưới chữ “Đại”- “大” nên việc đọc tên tiền là Thái Bình hay Đại Bình cho đến nay vẫn còn nhiều tranh cãi',
            descriptionEn: 'There is debate about whether the character \'大\' (Đại) or \'太\' (Thái) is the accurate one on the coin — although the era name is \'Thái Bình\'. However, the character \'Thái\' (太) on the coin lacks the dot or stroke below the character \'Đại\' (大), so the reading of the coin name as either Thái Bình or Đại Bình remains controversial to this day.'
          },
        ],
      },
      {
        id: 'timeline-1-2',
        name: 'Nhà Tiền Lê (984)',
        nameEn: 'Early Le Dynasty (984)',
        timeRange: '984-1009',
        startYear: 984,
        endYear: 1009,
        items: [
          {
            id: 'item-1-2-1',
            images: [
              '/images/Nhà Tiền Lê 1.jpg'
            ],
            description: 'Tiền cổ Thiên Phúc Trấn Bảo là loại tiền được cho đúc và lưu hành dưới đời vua Lê Đại Hành triều đại nhà Tiền Lê.Đây được coi là loại tiền thứ hai của người Việt sau loại tiền Thái Bình Hưng Bảo do nhà Đinh cho đúc trước đó.',
            descriptionEn: 'Thiên Phúc Trấn Bảo ancient coins are currency minted and circulated during the reign of King Lê Đại Hành of the Early Lê Dynasty. This is considered the second Vietnamese currency after the Thái Bình Hưng Bảo coins minted by the Đinh Dynasty.'
          },
          {
            id: 'item-1-2-2',
            images: [
              '/images/Nhà Tiền Lê 2.jpg'
            ],
            description: 'Tiền Thiên Phúc Trấn Bảo-天福鎮寶 được đúc và lưu hành dưới triều đại Tiền Lê có dạng hình tròn lỗ vuông thể hiện quan niệm “trời tròn đất vuông” của con người khi xưa',
            descriptionEn: 'Thiên Phúc Trấn Bảo (天福鎮寶) coins minted and circulated during the Early Lê Dynasty have a round shape with a square hole, representing the ancient concept of \'round heaven and square earth\'.'
          },
          {
            id: 'item-1-2-3',
            images: [
              '/images/Nhà Tiền Lê 3.jpg'
            ],
            description: 'Mặt trước của đồng tiền có ghi bốn chữ “Thiên Phúc Trấn Bảo”-“天福鎮寶” được đọc chéo,tuần tự từ trên xuống dưới,từ phải qua trái.Trong đó hai chữ “Thiên Phúc”-“天福” là chỉ niên hiệu của nhà vua với ý nghĩa là “Trời ban phúc”.Hai chữ còn lại “Trấn Bảo”-“鎮寶” dùng để chỉ loại tiền',
            descriptionEn: 'The obverse of the coin is inscribed with four characters \'Thiên Phúc Trấn Bảo\' (天福鎮寶) read diagonally, sequentially from top to bottom, right to left. Among them, the two characters \'Thiên Phúc\' (天福) indicate the emperor\'s era name meaning \'Heaven grants blessings\'. The remaining two characters \'Trấn Bảo\' (鎮寶) denote the type of currency.'
          },
        ],
      },
      {
        id: 'timeline-1-3',
        name: 'Nhà Lý (1010)',
        nameEn: 'Ly Dynasty (1010)',
        timeRange: '1010-1225',
        startYear: 1010,
        endYear: 1225,
        items: [
          {
            id: 'item-1-3-1',
            images: [
              '/images/Nhà Lý 1.jpg'
            ],
            description: 'Khi lên ngôi vua Lý Thái Tổ đã cho thực hiện một trong những chính sách về kinh tế đó chính là đúc tiền phục vụ cho đời sống buôn bán,giao thương trong nước cũng như để thể hiện sự tồn tại của vương triều cho ngàn đời hậu thế.Tên tiền là “Thuận Thiên Đại Bảo”-“順 天 大 寶”',
            descriptionEn: 'Upon ascending the throne, King Lý Thái Tổ implemented one of the economic policies which was to mint currency to serve domestic trading and commerce as well as to demonstrate the dynasty\'s existence for thousands of future generations. The currency was named \'Thuận Thiên Đại Bảo\' (順天大寶).'
          },
          {
            id: 'item-1-3-2',
            images: [
              '/images/Nhà Lý 2.jpg'
            ],
            description: 'Tiền đồng do vua Lý Thái Tổ cho đúc có dạng hình tròn,lỗ vuông nhằm biểu tượng cho nhân quan vũ trụ của con người khi ấy là “trời tròn đất vuông”.Trên mặt trước của đồng tiền có ghi bốn chữ Hán đối xứng cân chỉnh ở các cạnh của lỗ vuông,đọc chéo',
            descriptionEn: 'The copper coins minted by King Lý Thái Tổ have a round shape with a square hole, symbolizing the ancient worldview of \'round heaven and square earth\'. The obverse of the coin is inscribed with four symmetrically balanced Chinese characters around the edges of the square hole, read diagonally.'
          },
          {
            id: 'item-1-3-3',
            images: [
              '/images/Nhà Lý 3.jpg'
            ],
            description: 'Hai chữ “Thuận Thiên”-“順 天” là niên hiệu của vua,con hai chữ”大 寶” là thể hiện đồng tiền có giá trị to',
            descriptionEn: 'The two characters \'Thuận Thiên\' (順天) represent the emperor\'s era name, while the other two characters \'大寶\' signify that the coin has great value.'
          },
        ],
      },
      {
        id: 'timeline-1-4',
        name: 'Nhà hồ',
        nameEn: 'Ho Dynasty',
        timeRange: '1400-1407',
        startYear: 1400,
        endYear: 1407,
        items: [
          {
            id: 'item-1-4-1',
            images: [
              '/images/Thông Bảo Hội Sao vẽ lại.jpg',
              '/images/Thông Bảo Hội Sao vẽ lại 2.jpg'
            ],
            description: '\"Thông Bảo Hội Sao\" là tiền giấy đầu tiên của Việt Nam, do Hồ Quý Ly ban hành vào năm 1396.\n\nTriều đình ra lệnh thu hồi toàn bộ tiền đồng và cấm dân chúng tàng trữ hay sử dụng tiền đồng; ai vi phạm bị coi như làm tiền giả.\n\nTiền giấy được in với các họa tiết khác nhau để phân biệt mệnh giá: Tờ 10 đồng vẽ rêu, 30 đồng vẽ sóng, 1 tiền vẽ mây, 2 tiền vẽ rùa, 3 tiền vẽ lân, 5 tiền vẽ phượng, và 1 quan vẽ rồng.\n\nChính sách này nhằm tập trung kim loại đồng để đúc vũ khí. Tuy nhiên, tiền giấy không được người dân tin dùng và chính sách này đã thất bại, không được triều đại sau kế thừa.\n\nHiện tại không còn bất kỳ tờ tiền \"Thông Bảo Hội Sao\" nào còn sót lại. Tuy nhiên, dựa trên các ghi chép lịch sử, các nhà nghiên cứu đã phác họa lại.',
            descriptionEn: '\'Thông Bảo Hội Sao\' was Vietnam\'s first paper money, promulgated by Hồ Quý Ly in 1396.\n\nThe court ordered the withdrawal of all copper coins and prohibited people from hoarding or using copper coins; violators were treated as counterfeiters.\n\nThe paper money was printed with different patterns to distinguish denominations: 10-đồng notes depicted moss, 30-đồng waves, 1-tiền clouds, 2-tiền turtles, 3-tiền unicorns, 5-tiền phoenixes, and 1-quan dragons.\n\nThis policy aimed to concentrate copper metal for weapon production. However, the paper money was not trusted by the people and this policy failed, not adopted by subsequent dynasties.\n\nCurrently, no \'Thông Bảo Hội Sao\' notes remain. However, based on historical records, researchers have recreated sketches.'
          },
        ],
      },
      {
        id: 'timeline-1-5',
        name: 'Hậu Lê – Mạc – Lê Trung Hưng',
        nameEn: 'Later Le - Mac - Le Revival',
        timeRange: '1428-1789',
        startYear: 1428,
        endYear: 1789,
        items: [
          {
            id: 'item-1-5-1',
            images: [
              '/images/Cảnh Hưng Thông Bảo.jpg',
              '/images/Hồng Đức Thông Bảo (洪德通寶).jpg'
            ],
            description: '\"Cảnh Hưng Thông Bảo\" (景興通寶) là loại tiền đồng được đúc và lưu hành phổ biến dưới thời vua Lê Hiển Tông, niên hiệu Cảnh Hưng (1740–1786) thuộc triều Lê Trung Hưng.\n\nĐây là loại tiền kim loại phổ biến nhất trong thời kỳ này, có hình tròn, lỗ vuông ở giữa, đúc bằng đồng.\n\nMặt trước của đồng tiền có bốn chữ Hán \"Cảnh Hưng Thông Bảo\".\n\nNgoài tiền lưu hành thông thường, triều đại này cũng đúc các đồng tiền thưởng (loại tiền lớn, hiếm) để ban cho những người có công.\n\n\"Hồng Đức Thông Bảo\" (洪德通寳) là đồng tiền được đúc dưới thời vua Lê Thánh Tông (niên hiệu Hồng Đức, 1470-1497), giai đoạn thịnh trị nhất của triều Hậu Lê (thường gọi là \"Hồng Đức Thịnh Trị\").\n\nĐây là một trong những đồng tiền được đánh giá cao về mặt kỹ thuật đúc và chất lượng đồng. Tiền thường dày dặn, chữ viết sắc nét, gọn gàng.\n\nGiống như các loại tiền truyền thống, tiền có hình tròn, lỗ vuông ở giữa, mặt trước có 4 chữ Hán \"Hồng Đức Thông Bảo\".\n\nDo được đúc trong thời kỳ đất nước phát triển rực rỡ, kinh tế phồn vinh, nhu cầu trao đổi lớn nên tiền Hồng Đức Thông Bảo được đúc với số lượng nhiều và được lưu hành rộng rãi, giữ vai trò quan trọng trong hệ thống tiền tệ thời Hậu Lê.',
            descriptionEn: '\'Cảnh Hưng Thông Bảo\' (景興通寶) was a copper coin minted and widely circulated during the reign of King Lê Hiển Tông, era name Cảnh Hưng (1740–1786) of the Lê Restoration Dynasty.\n\nThis was the most common metal currency of this period, round in shape with a square hole in the center, cast in copper.\n\nThe obverse of the coin bears four Chinese characters \'Cảnh Hưng Thông Bảo\'.\n\nBesides regular circulating currency, this dynasty also minted reward coins (large, rare coins) to grant to meritorious individuals.\n\n\'Hồng Đức Thông Bảo\' (洪德通寳) was a coin minted during the reign of King Lê Thánh Tông (era name Hồng Đức, 1470-1497), the most prosperous period of the Later Lê Dynasty (commonly known as \'Hồng Đức Prosperity\').\n\nThis is one of the coins highly valued for its minting technique and copper quality. The coins are typically thick, with sharp, neat inscriptions.\n\nLike traditional currencies, the coin has a round shape with a square hole in the center, with four Chinese characters \'Hồng Đức Thông Bảo\' on the obverse.\n\nMinted during a period of brilliant national development, flourishing economy, and high demand for exchange, Hồng Đức Thông Bảo coins were produced in large quantities and widely circulated, playing an important role in the Later Lê monetary system.'
          },
        ],
      },
      {
        id: 'timeline-1-6',
        name: 'Tây Sơn',
        nameEn: 'Tay Son Dynasty',
        timeRange: '1778-1802',
        startYear: 1778,
        endYear: 1802,
        items: [
          {
            id: 'item-1-6-1',
            images: [
              '/images/Tây Sơn 2 .jpg',
              '/images/Tây Sơn 1.jpg'
            ],
            description: 'Mục đích: Khẳng định chính quyền mới, thay thế tiền Lê – Nguyễn trước đó.\n\nChất liệu: Chủ yếu đồng, ít kẽm (do khan hiếm đồng); vàng, bạc chỉ dùng để thưởng công hoặc nghi lễ.\n\nHình dạng: Tròn, lỗ vuông giữa; đúc thủ công, nét chữ khắc nổi hơi thô.\n\nNiên hiệu: Thái Đức thông bảo, Quang Trung thông bảo/đại bảo, Cảnh Thịnh thông bảo/đại bảo, Bảo Hưng thông bảo.\n\nĐặc điểm: Kích thước không đều, số lượng lớn, lưu hành rộng ở miền Trung và Bắc Trung Bộ.\n(Nguồn: Báo Thanh Niên, Báo Thời Báo Ngân Hàng, Bảo tàng Lịch sử Quốc gia)',
            descriptionEn: 'Purpose: To affirm the new government, replacing the previous Lê-Nguyễn currency.\n\nMaterials: Primarily copper, some silver or zinc coins.\n\nCharacteristics: Tây Sơn coins had high uniformity, with sharp inscriptions. Some coins had quite distinctive and rare forms.'
          },
        ],
      },
      {
        id: 'timeline-1-7',
        name: 'Nguyễn',
        nameEn: 'Nguyễn',
        timeRange: '1000-2000',
        startYear: 1000,
        endYear: 2000,
        items: [
          {
            id: 'item-1-7-1',
            images: [
              '/images/Nhà Nguyễn 1.jpg',
              '/images/Nhà Nguyễn 2.jpg'
            ],
            description: 'Hoàn cảnh: Vua cuối cùng triều Nguyễn, phát hành tiền tượng trưng song song với tiền Đông Dương.\n\nChất liệu: Có đủ đồng – bạc – vàng.\n\nBảo Đại thông bảo (đồng) → lưu hành.\n\nBảo Đại bảo giám (bạc, vàng) → dùng trong lễ nghi, thưởng công.\n\nĐặc điểm: Dập máy tinh xảo, chữ “保大通寳” rõ nét, viền đều; có bản trang trí rồng phượng.\n\nÝ nghĩa: Là đồng tiền phong kiến cuối cùng trước khi Việt Nam chuyển sang thời kỳ hiện đại (sau 1945).\n(Nguồn: Báo Dân Việt, Báo Mới, Bảo tàng TP.HCM)',
            descriptionEn: 'Context: The last emperor of the Nguyễn Dynasty issued symbolic currency in parallel with Indochinese currency.\n\nMaterials: Mainly zinc or copper alloy.\n\nCharacteristics: Bảo Đại coins typically had poor quality, easily corroded due to economic difficulties and political instability.'
          },
        ],
      },
    ],
  },
  {
    id: 'period-2',
    name: 'Thời Pháp thuộc (1885–1954)',
    nameEn: 'French Colonial Period (1885-1954)',
    description: 'Giai đoạn chịu sự cai trị của thực dân Pháp, với sự ra đời của hệ thống tiền tệ Đông Dương kết hợp đặc điểm phương Đông và phương Tây.',
    descriptionEn: 'Period under French colonial rule, with the introduction of the Indochinese piastre currency system combining Eastern and Western monetary characteristics.',
    timelines: [
      {
        id: 'timeline-2-1',
        name: '1885–1906',
        nameEn: 'Early Colonial Period (1885-1906)',
        timeRange: '1885-1906',
        startYear: 1885,
        endYear: 1906,
        items: [
          {
            id: 'item-2-1-1',
            images: [
              '/images/Dong bac Dong Duong 1900.jpg'
            ],
            description: 'Tên tiền: Piastre de Commerce / Piastre de l’Indochine (đầu kỳ)\nĐơn vị: 1 piastre = 100 cent (hoặc centime).\nCơ quan phát hành: Ngân hàng Đông Dương (Banque de l’Indochine – BIC)\nĐặc điểm:\n\nNăm 1885, đồng piastre bạc đầu tiên lưu hành chính thức khắp Đông Dương (thay thế tiền địa phương Nam – Bắc Kỳ).\n\nTiền bạc 0.900, nặng 27,2156 g, hình Nữ thần Tự do ngồi, tượng trưng cho Cộng hòa Pháp.\n\nSong song, có tiền đồng, sapèque, cent (đục lỗ, ghi Hán – Pháp – Quốc ngữ).\n\nChưa có tiền giấy phổ biến, giao dịch chủ yếu bằng bạc và đồng.\n\nMục đích: thống nhất hệ tiền tệ giữa các xứ (Nam, Trung, Bắc, Lào, Campuchia).\n\n→ Giai đoạn hình thành hệ thống tiền tệ thuộc địa, còn mang nặng yếu tố kim loại và hình tượng “Pháp hóa”.',
            descriptionEn: 'Currency name: Piastre de Commerce / Piastre de l\'Indochine (early period)\nUnit: 1 piastre = 100 cents (or cent, xu)\nMaterials:\nSilver coins (metal currency): Initially contained silver, denominations of 1, 1/2, 1/4, 1/10 piastre.\nCopper, nickel, zinc (subsidiary coins): Small coins (1, 5, 10 cents)\nPaper money: Banknotes (denominations of 1, 5, 10, 20, 100, 500 piastre, printed in France or Saigon).\n\nFrench Indochinese currency was the monetary system applied by French colonizers in the Indochina colonies (Vietnam, Laos, Cambodia) from the late 19th century to the mid-20th century.'
          },
        ],
      },
      {
        id: 'timeline-2-2',
        name: '1906-1930',
        nameEn: 'Golden Age of Indochina Currency (1906-1930)',
        timeRange: '1906-1930',
        startYear: 1906,
        endYear: 1930,
        items: [
          {
            id: 'item-2-2-1',
            images: [
              '/images/Tien giay 1906-1930.png'
            ],
            description: 'Tên tiền: Piastre de l’Indochine\nĐơn vị: Piastre – Cent.\nCơ quan phát hành: Ngân hàng Đông Dương (BIC).\nĐặc điểm:\n\nLần đầu xuất hiện tiền giấy quy mô lớn, in tại Paris hoặc Hà Nội.\n\nTrên tiền có hình ba thiếu nữ Đông Dương (Việt, Lào, Khmer) – biểu tượng văn hóa bản xứ dưới ảnh hưởng Pháp.\n\nTiền giấy và tiền kim loại cùng lưu hành song song.\n\nCó đủ mệnh giá: 1, 5, 20, 100, 500 piastre.\n\nChữ trên tiền bằng Pháp, Hán, Quốc ngữ, Khmer, Lào.\n\nTiền xu vẫn duy trì nhưng dần giảm hàm lượng bạc do khủng hoảng giá bạc (nhất là sau Thế chiến I).\n\n→ Giai đoạn vàng của đồng Đông Dương, phản ánh quyền lực tài chính của Pháp ở Viễn Đông.',
            descriptionEn: 'Currency name: Piastre de l\'Indochine\nUnit: Piastre – Cent.\nIssuing authority: Bank of Indochina (BIC - Banque de l\'Indochine), established in 1875, responsible for issuing banknotes and coins.\nDesign: Impressions of colonial imagery, landscapes, French symbols.'
          },
        ],
      },
      {
        id: 'timeline-2-3',
        name: '1930-1945',
        nameEn: 'Economic Crisis and Japanese Occupation (1930-1945)',
        timeRange: '1930-1945',
        startYear: 1930,
        endYear: 1945,
        items: [
          {
            id: 'item-2-3-1',
            images: [
              '/images/Tien giay 1906-1930.png'
            ],
            description: 'Tên tiền: Piastre Đông Dương\nCơ quan phát hành: Banque de l’Indochine (vẫn do Pháp kiểm soát, sau đó Nhật chiếm).\nĐặc điểm:\n\nẢnh hưởng khủng hoảng kinh tế 1929–1933, giá bạc rớt mạnh → Pháp giảm độ bạc, thay bằng niken, đồng, nhôm.\n\nNhiều mẫu tiền mới (20 cent, 10 cent, 5 cent) bằng hợp kim, tiền nhôm xuất hiện.\n\n1940–1945, Nhật chiếm Đông Dương → cho phép lưu hành tiền quân phiệt Nhật (yen Đông Dương) song song với piastre.\n\nMất ổn định tiền tệ, lạm phát tăng, người dân tích trữ bạc và vàng.\n\n→ Giai đoạn suy yếu của đồng Đông Dương, bị chiến tranh và chiếm đóng làm mất giá trị thực.',
            descriptionEn: 'Currency name: Indochinese Piastre\nIssuing authority: Banque de l\'Indochine (still controlled by France, later gradually transferring issuance rights to local governments).\nDesign: Banknotes emphasizing nationalism (e.g., Indochina maps, agricultural imagery...).\nCharacteristics: This period saw overlap between French Indochinese currency and Japanese \'military currency notes\' (when Japan occupied Indochina).'
          },
        ],
      },
      {
        id: 'timeline-2-4',
        name: '1945-1954',
        nameEn: 'Dual Currency System (1945-1954)',
        timeRange: '1945-1954',
        startYear: 1945,
        endYear: 1954,
        items: [
          {
            id: 'item-2-4-1',
            images: [
              '/images/1945-1954 song hanh.jpg'
            ],
            description: 'Tên tiền: Piastre Đông Dương (Pháp) và Giấy bạc Việt Minh\nCơ quan phát hành:\n\nVùng Pháp kiểm soát: Banque de l’Indochine và Cục Quản lý tiền tệ Pháp.\n\nVùng kháng chiến: Chính phủ Việt Minh phát hành “Giấy bạc Cụ Hồ” (Việt Nam Dân chủ Cộng hòa).\nĐặc điểm:\n\nPháp vẫn in piastre bằng niken – đồng, nhôm và tiền giấy in ở Paris, Sài Gòn.\n\nViệt Minh phát hành tiền “đồng Việt Nam” để thay thế piastre trong vùng tự do.\n\nSau Hiệp định Genève 1954, Pháp rút, hệ thống piastre Đông Dương chấm dứt hoàn toàn, thay bằng tiền quốc gia riêng ở Việt Nam, Lào, Campuchia.\n\n→ Giai đoạn cuối cùng, đánh dấu sự sụp đổ của hệ thống tiền thuộc địa Pháp và sự ra đời của tiền tệ độc lập.',
            descriptionEn: 'Currency name: Indochinese Piastre (French) and Việt Minh Banknotes\nIssuing authority:\n\nFrench-controlled areas: Banque de l\'Indochine\nViệt Minh-controlled areas: Việt Minh Bank\nUnit:\n\nPiastre (French Indochinese) existed parallel to Đồng Việt Minh (revolutionary government)\nCharacteristics:\n\nTwo currency systems existed in parallel.\nViệt Minh currency was typically printed with simple quality and design, issued in liberated areas.'
          },
        ],
      },
    ],
  },
  {
    id: 'period-3',
    name: 'Sau Cách mạng tháng Tám (1945–1975)',
    nameEn: 'Post-August Revolution (1945-1975)',
    description: 'Giai đoạn sau Cách mạng tháng Tám, đánh dấu sự ra đời của tiền tệ độc lập ở cả miền Bắc và miền Nam trong cuộc kháng chiến.',
    descriptionEn: 'Period following the August Revolution, marked by the issuance of independent Vietnamese currency in both North and South Vietnam during the resistance war.',
    timelines: [
      {
        id: 'timeline-3-1',
        name: '1945–1951',
        nameEn: 'Uncle Ho\'s Currency (1945-1951)',
        timeRange: '1945-1951',
        startYear: 1945,
        endYear: 1951,
        items: [
          {
            id: 'item-3-1-1',
            images: [
              '/images/1945-1951 (1).jpg',
              '/images/1945-1951 (2).jpg'
            ],
            description: '-Giấy bạc Việt Nam Dân chủ Cộng hòa – “Giấy bạc Cụ Hồ”\n\n-Ngày phát hành đầu tiên: 31/1/1946.\n\n-Cơ quan phát hành: Bộ Tài chính Việt Nam Dân chủ Cộng hòa.\n\n-Tên gọi thường dùng: Giấy bạc Cụ Hồ (vì có in chân dung Chủ tịch Hồ Chí Minh).\n\n-Chất liệu: Giấy, in thủ công tại chiến khu (chủ yếu là Việt Bắc).\n\n-Mệnh giá: 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng.\n\n-Đặc điểm thiết kế:\n+ Mặt trước: Chân dung Hồ Chí Minh, dòng chữ “Việt Nam Dân chủ Cộng hòa”.\n+ Mặt sau: Hoa văn dân tộc, số sê-ri, chữ ký Bộ trưởng Tài chính.\n+ Có ký hiệu “A”, “B”, “C”… để phân biệt từng đợt in.\n- Mục đích:\n+ Thay thế tiền Đông Dương của Pháp.\n+ Gây quỹ cho chính quyền kháng chiến.\n+ Tạo niềm tin vào nền tài chính độc lập.',
            descriptionEn: '-Democratic Republic of Vietnam Banknotes – \'Uncle Ho\'s Currency\'\n\n-First issue date: January 31, 1946.\n\n-Issuing authority: Government of the Democratic Republic of Vietnam (Ho Chi Minh Government).\n\n-Unit: Đồng (VND)\n\n-Design:\nBanknotes featuring simple style, associated with the image of President Ho Chi Minh and national symbols (golden star, rice...).\nBanknotes in various denominations: 1, 5, 10, 20, 50, 100, 200 đồng.\n\n-Materials:\nInitially printed on cotton paper, later gradually switched to regular paper due to wartime conditions.'
          },
        ],
      },
      {
        id: 'timeline-3-2',
        name: '1951-1954',
        nameEn: 'National Bank of Vietnam (1951-1954)',
        timeRange: '1951-1954',
        startYear: 1951,
        endYear: 1954,
        items: [
          {
            id: 'item-3-2-1',
            images: [
              '/images/1951-1954 (1).jpg',
              '/images/1951-1954(2).jpg',
              '/images/1951-1954 (3).jpg',
              '/images/1951-1954 (4).jpg',
              '/images/1951-1954 (5).jpg'
            ],
            description: 'Bối cảnh:\n- Đến năm 1951, cuộc kháng chiến chống Pháp bước vào giai đoạn phát triển.\n- Cần có một cơ quan tài chính – ngân hàng thống nhất, có chức năng phát hành tiền, huy động vốn và quản lý tài chính cho cả nước.\n- Vì vậy, ngày 6/5/1951, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Ngân hàng Quốc gia Việt Nam.\n\nĐặc điểm của tiền Ngân hàng Quốc gia Việt Nam (1951–1954)\n- Cơ quan phát hành: Ngân hàng Quốc gia Việt Nam.\n- Đơn vị tiền tệ: Đồng Việt Nam.\n- Chất liệu: Giấy in kỹ hơn, màu sắc đa dạng hơn so với giai đoạn 1946.\n-Các mệnh giá:\n+ 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng, 200 đồng, 500 đồng.\n-Hình ảnh trên tiền:\n+ Hồ Chí Minh, Quốc huy, công nhân – nông dân – bộ đội, cảnh sản xuất, kháng chiến.\n-Khu vực sử dụng:\n+Chủ yếu lưu hành ở vùng tự do kháng chiến (miền Bắc),\n+Ở vùng tạm chiếm của Pháp vẫn dùng đồng Đông Dương.\n-Kỹ thuật in:\n+Một số bản in được thực hiện ở Trung Quốc do điều kiện kháng chiến.\n+Màu sắc và chất lượng in cải thiện đáng kể so với giai đoạn đầu.',
            descriptionEn: 'Context:\n- By 1951, the resistance war against France entered a development phase.\n- Need for an official currency issuing authority → establishment of the National Bank of Vietnam (predecessor of the State Bank of Vietnam).\n\nCharacteristics:\n- Banknotes maintained a rustic style, prominently featuring images of President Ho Chi Minh, soldiers, workers, farmers.\n- Denominations: 100, 200, 500, 1000, 5000, 10,000 đồng.\n- Currency printed at printing facilities in liberated areas and some foreign locations (China).'
          },
        ],
      },
      {
        id: 'timeline-3-3',
        name: '1954–1975',
        nameEn: 'North and South Vietnam (1954-1975)',
        timeRange: '1954-1975',
        startYear: 1954,
        endYear: 1975,
        items: [
          {
            id: 'item-3-3-1',
            images: [
              '/images/1951-1954 (6).jpg',
              '/images/50dongluuniemnhnn2001.webp',
              '/images/200-dong-1970.webp',
              '/images/500-dong-1970.webp',
              '/images/bo-tien-giay-nam-1951-do-ngan-hang-quoc-gia-viet-nam-tien-than-cua-ngan-hang-nha-nuoc-hien-nay-phat-hanh-10385078.jpg',
              '/images/mot-dong-tien-giai-doan-1959-1978-10402569.jpg'
            ],
            description: 'Tiền Ngân hàng Quốc gia Việt Nam (1955–1975)\nTên tiền: Đồng Việt Nam (VNĐ)\nNgày phát hành: Đợt đầu phát hành sau cải cách tiền tệ năm 1959, thay thế tiền kháng chiến (1946–1954).\nCơ quan phát hành: Ngân hàng Quốc gia Việt Nam (từ 1960 đổi tên thành Ngân hàng Nhà nước Việt Nam).\nKhu vực lưu hành: Toàn miền Bắc Việt Nam và một số vùng giải phóng tại miền Nam.\n\nCác mệnh giá:\n- 1 đồng, 2 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng.\n- Một số đợt sau có phát hành thêm mệnh giá 200 đồng (năm 1972).\n\nChất liệu và kỹ thuật in:\n- Giấy tốt hơn so với giai đoạn kháng chiến, in tại Nhà in Ngân hàng hoặc tại Trung Quốc – Liên Xô.\n- Màu sắc rõ, họa tiết tinh xảo hơn.\n\nHình ảnh trên tiền:\n- Mặt trước: Hình Chủ tịch Hồ Chí Minh, Quốc huy Việt Nam Dân chủ Cộng hòa.\n- Mặt sau: Hình ảnh sản xuất công – nông nghiệp, nhà máy, nông dân, bộ đội, biểu trưng cho công cuộc xây dựng CNXH.\n\nThông tin trên tiền:\n- Có dòng chữ “Ngân hàng Quốc gia Việt Nam” (trước 1960) hoặc “Ngân hàng Nhà nước Việt Nam” (sau 1960).\n- Ghi rõ mệnh giá bằng chữ và số, có ký hiệu in nổi, số sê-ri đỏ.',
            descriptionEn: 'National Bank of Vietnam Currency (1955–1975)\nCurrency name: Vietnamese Đồng (VND)\nIssue date: First issued in 1946 (associated with Uncle Ho\'s Banknotes), then continuously issued until 1975.\nIssuing authority: National Bank of Vietnam (established May 6, 1951).\nUnit: Đồng (VND)\nDesign:\n- Image of President Ho Chi Minh as central feature on many banknotes.\n- Images of workers, farmers, soldiers, revolutionary symbols (hammer and sickle, golden star, rice).\n- Dominant colors: blue, red, yellow, brown.\nMaterial: Paper, with some polymer currency after 1970.\nDenominations: 100, 200, 500, 1000, 5000, 10,000 đồng (and other denominations after 1975).'
          },
          {
            id: 'item-3-3-2',
            images: [
              '/images/vietnam-50-dong-1985-p97.webp',
              '/images/tien-viet-nam-cong-hoa-2.jpg',
              '/images/20140731_151252.jpg'
            ],
            description: 'Tiền Việt Nam Cộng hòa (1955–1975)\nTên tiền: Đồng Việt Nam (đôi khi gọi là Đồng VNCH hoặc Đồng Sài Gòn).\nNgày phát hành: 22/9/1955 (chính thức lưu hành thay đồng Đông Dương với tỷ lệ 1 đồng VNCH = 1 đồng Đông Dương).\nCơ quan phát hành: Ngân hàng Quốc gia Việt Nam (National Bank of Vietnam), trụ sở tại Sài Gòn.\nKhu vực lưu hành: Toàn miền Nam Việt Nam (từ vĩ tuyến 17 trở vào).\n\nCác mệnh giá:\nGiai đoạn đầu (1955–1963): 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng, 200 đồng, 500 đồng.\nGiai đoạn sau (1964–1975): có thêm 1000 đồng, 5000 đồng, 10.000 đồng.\n\nChất liệu và kỹ thuật in:\n- In tại các xưởng ở Mỹ, Anh, Nhật, hoặc Philippines với công nghệ hiện đại.\n- Giấy cotton cao cấp, có sợi chống giả, watermark.\n- Màu sắc tươi sáng, thiết kế theo phong cách phương Tây.\n\nHình ảnh trên tiền:\n- Mặt trước: Chân dung các nhân vật lịch sử Việt Nam (Ngô Quyền, Trần Hưng Đạo, Nguyễn Huệ, v.v.), đôi khi là hình ảnh lãnh đạo đương thời.\n- Mặt sau: Danh lam thắng cảnh, công trình kiến trúc (Chợ Bến Thành, cầu Trường Tiền, đền Ngọc Sơn, cảnh đồng ruộng, tàu bay, v.v.).',
            descriptionEn: 'Republic of Vietnam Currency (1955–1975)\nCurrency name: Vietnamese Đồng (sometimes called South Vietnamese Đồng or Saigon Đồng)\nIssuing authority: National Bank of Vietnam (South)\nUnit: Đồng (VND)\nDesign:\n- More modern style, using many bright colors.\n- Images of architectural works, southern landscapes (city theater, port bridges, agriculture...).\n- Printed with Latin and Hán Nôm scripts.\nMaterial: Paper, copper and nickel coins.\nDenominations: From 1, 5, 10, 20, 50, 100, 200, 500, 1000, 5000, 10,000 đồng.'
          },
        ],
      },
    ],
  },
  {
    id: 'period-4',
    name: 'Thời kì thống nhất và đổi mới (1975 - nay)',
    nameEn: 'Reunification and Renovation Period (1975-present)',
    description: 'Thời kỳ hiện đại từ thống nhất đến nay, tiền tệ phát triển theo hướng hiện đại hóa với công nghệ polymer và hội nhập quốc tế.',
    descriptionEn: 'Modern period from reunification to present, with currency developing towards modernization, adopting polymer technology, and international integration.',
    timelines: [
      
      {
        id: 'timeline-4-2',
        name: 'Giai đoạn Sau Thống Nhất ( 1975–1978)',
        nameEn: 'Post-Reunification Period (1975-1978)',
        timeRange: '1975-1978',
        startYear: 1975,
        endYear: 1978,
        items: [
          {
            id: 'item-4-2-1',
            images: [
              '/images/Bộ Tiền Thống Nhất.jpg',
              '/images/Tiền Giải Phóng.jpg'
            ],
            description: 'Đây là quá trình hợp nhất hệ thống tiền tệ của hai miền sau khi đất nước thống nhất.\n\nTại sao phải đổi tiền?\n\nSau ngày 30 tháng 4 năm 1975, Việt Nam đã thống nhất về mặt lãnh thổ, nhưng về kinh tế, vẫn tồn tại hai hệ thống tiền tệ song song:\n\nMiền Bắc: Sử dụng tiền \"Đồng\" của Việt Nam Dân chủ Cộng hòa.\n\nMiền Nam: Vẫn đang lưu hành tiền của chế độ Việt Nam Cộng hòa.\n\nMột quốc gia thống nhất không thể có hai đồng tiền. Việc hợp nhất tiền tệ là bước đi tất yếu để thống nhất hoàn toàn đất nước về mặt kinh tế và nhà nước.\n\nDiễn biến:\n\nBước 1 (1975 - \"Tiền Giải phóng\"): Ngay sau khi tiếp quản, Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam đã phát hành \"tiền Giải phóng\" (còn gọi là \"tiền Ngân hàng Việt Nam\") ở miền Nam để thay thế đồng tiền của chế độ cũ. Đây là một bước đệm chuyển tiếp.\n\nBước 2 (1978 - \"Đồng Thống nhất\"): Nhà nước tiến hành một cuộc đổi tiền quy mô lớn trên cả nước để thu hồi toàn bộ tiền ở miền Bắc và \"tiền Giải phóng\" ở miền Nam, thay thế bằng một loại tiền duy nhất gọi là \"Đồng\" (thường được gọi là \"Đồng Thống nhất\"). Từ thời điểm này, cả nước Việt Nam chỉ sử dụng chung một đơn vị tiền tệ.',
            descriptionEn: 'This was the process of unifying the currency systems of the two regions after national reunification.\n\nWhy change currency?\n\n- The two regions used two different currencies: the North used Democratic Republic of Vietnam đồng, the South used Republic of Vietnam đồng.\n\n- Need to establish a unified currency system.\n\nExchange method:\n\n- Exchange rate: 1 Northern đồng = 0.8 Southern đồng (later adjusted) → 1 unified đồng.\n\n- Issue new unified currency: Banknotes marked \'State Bank of Vietnam\' (instead of National Bank of Vietnam).'
          },
        ],
      },
      {
        id: 'timeline-4-3',
        name: '1985-1988',
        nameEn: 'Currency Reform 1985-1988',
        timeRange: '1985-1988',
        startYear: 1985,
        endYear: 1988,
        items: [
          {
            id: 'item-4-3-1',
            images: [
              '/images/tien-viet-nam-1985-tien-tem-gia-re.jpg'
            ],
            description: 'Đây là một trong những nỗ lực cải cách kinh tế quan trọng (và thất bại) ngay trước thềm Đổi Mới 1986. Việc đổi tiền 10:1 chỉ là một phần của một kế hoạch lớn hơn.\n\nTại sao phải đổi tiền? (Bối cảnh)\n\nNền kinh tế Việt Nam lúc này đang trong tình trạng khủng hoảng nghiêm trọng, cơ chế \"bao cấp\" bộc lộ nhiều yếu kém.\n\nLạm phát phi mã: Lạm phát ở mức ba con số, đồng tiền mất giá cực kỳ nhanh chóng. Việc cầm tiền với mệnh giá quá lớn nhưng sức mua lại quá nhỏ gây bất tiện và thể hiện sự bất ổn của kinh tế.\n\nMục tiêu của cải cách \"Giá - Lương - Tiền\": Nhà nước muốn xóa bỏ cơ chế bao cấp, tính toán lại toàn bộ hệ thống giá cả (Giá), cải cách hệ thống lương (Lương), và phát hành đồng tiền mới (Tiền) để ổn định kinh tế.\n\nDiễn biến (Việc đổi 10 đồng cũ = 1 đồng mới):\n\nĐây về bản chất là một hành động \"xóa bớt số 0\" trên đồng tiền.\n\nMục đích là làm cho đồng tiền có giá trị \"gọn\" hơn, hy vọng ổn định tâm lý thị trường và kiểm soát lạm phát.\n\nKết quả: Cuộc cải cách này đã thất bại. Việc đổi tiền không giải quyết được gốc rễ của lạm phát (sản xuất không phát triển), mà việc in thêm tiền mới để trả lương theo hệ thống mới đã lập tức gây ra một đợt siêu lạm phát còn nghiêm trọng hơn trong các năm 1986-1988.\n\nÝ nghĩa: Thất bại của cuộc cải cách \"Giá - Lương - Tiền\" 1985 chính là một trong những lý do cấp bách, đẩy nhanh quyết tâm của Việt Nam phải tiến hành công cuộc Đổi Mới toàn diện vào năm 1986.',
            descriptionEn: 'This was one of the important (and failed) economic reform attempts just before the Đổi Mới (Renovation) of 1986.\n\nReasons for currency change:\n\n- High inflation, rapidly escalating prices.\n\n- Currency devaluation, economic stagnation.\n\nExchange method:\n\n- Exchange rate: 10 old đồng = 1 new đồng.\n\n- Exchange limit: Each person could only exchange a certain amount (e.g., 2 million old đồng).\n\nResults:\n\n- Currency change did not solve fundamental economic problems.\n\n- Inflation continued to rise.\n\n- People lost confidence in the currency.'
          },
        ],
      },
      {
        id: 'timeline-4-1',
        name: '1990 - nay',
        nameEn: 'Modern Polymer Era (1990-present)',
        timeRange: '1990-2025',
        startYear: 1990,
        endYear: 2025,
        items: [
          {
            id: 'item-4-1-1',
            images: [
              '/images/z560502567814974d8823de8a67e853e84e960ec232224-4852.jpg'
            ],
            description: 'Trước thời kỳ Việt Nam sử dụng tiền polymer là các tờ tiền giấy cotton có mệnh giá 10.000 và 20.000 được in năm 1990, tờ 50.000 được phát hành từ 15/10/1994 còn tờ 100.000 từ ngày 1/9/2000.\n\nNgày phát hành: 02/5/1992\n\n- Kích thước 120mm x 59mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: nâu đen.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 100 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Hình ảnh tháp Phổ Minh. Mệnh giá 100 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: 'Before Vietnam\'s polymer currency period, there were cotton paper banknotes in denominations of 10,000 and 20,000 đồng.\n\nSubsequently, Vietnam began using polymer currency from 2003, with the first polymer note being the 10,000 đồng, aiming to increase durability and better counterfeit resistance.'
          },
          {
            id: 'item-4-1-2',
            images: [
              '/images/100d-800x800.jpg'
            ],
            description: '- Ngày phát hành: 30/9/1987\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy phát hành: Cotton.\n\n- Màu sắc: nâu đỏ.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 200 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Phong cảnh: Sản xuất nông nghiệp. Mệnh giá 200 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Issue date: September 30, 1987\n\n- Dimensions: 130mm x 65mm.\n\n- Paper material: Cotton.\n\n- Color: Reddish brown.\n\n- Content: President Ho Chi Minh, leader\'s image printed on the obverse.'
          },
          {
            id: 'item-4-1-3',
            images: [
              '/images/200_e32d8.webp'
            ],
            description: '- Ngày phát hành: 15/8/1989\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: đỏ sen.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\nMặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Cảng Hải Phòng. Mệnh giá 500 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Issue date: August 15, 1989\n\n- Dimensions: 130mm x 65mm.\n\n- Paper: Cotton.\n\n- Color: Lotus red.\n\n- Content: President Ho Chi Minh, leader\'s image printed on the obverse.'
          },
          {
            id: 'item-4-1-4',
            images: [
              '/images/s-l1600.webp'
            ],
            description: '- Ngày phát hành: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: Tím.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 1.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh khu vực khai thác gỗ. Mệnh giá 1.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Issue date: October 20, 1989\n\n- Dimensions: 134mm x 65mm.\n\n- Paper: Cotton.\n\n- Color: Purple.\n\n- Content: President Ho Chi Minh, leader\'s image printed on the obverse.'
          },
          {
            id: 'item-4-1-5',
            images: [
              '/images/s-l1600 (1).webp'
            ],
            description: '- Ngày phát hành: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: nâu sẫm.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 2.000 đồng bằng chữ và số - Hoa văn dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Phong cảnh: Xưởng dệt. Mệnh giá 2.000 đồng bằng chữ và số - Hoa văn dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Issue date: October 20, 1989\n\n- Dimensions: 134mm x 65mm.\n\n- Paper: Cotton.\n\n- Color: Dark brown.\n\n- Content: President Ho Chi Minh, leader\'s image printed on the obverse.'
          },
          {
            id: 'item-4-1-6',
            images: [
              '/images/s-l1600 (2).webp'
            ],
            description: '- Ngày phát hành: 15/01/1993\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: xanh đậm.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 5.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Nhà máy Thủy điện Trị An. Mệnh giá 5.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Issue date: January 15, 1993\n\n- Dimensions: 134mm x 65mm.\n\n- Paper: Cotton.\n\n- Color: Dark blue.\n\n- Content: President Ho Chi Minh, leader\'s image printed on the obverse.'
          },
          {
            id: 'item-4-1-7',
            images: [
              '/images/s-l1600 (3).webp'
            ],
            description: '- Ngày phát hành: 30/8/2006\n\n- Kích thước: 132mm x 60mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể:Màu nâu đậm trên nền màu vàng xanh.\n\n- Nội dung mặt trước:Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 10.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Cảnh khai thác dầu khí - Mệnh giá 10.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: August 30, 2006\n\n- Dimensions: 132mm x 60mm.\n\n- Material: Polymer.\n\n- Overall color: Green.\n\n- Obverse: Portrait of President Ho Chi Minh.\n\n- Reverse: Image of President Ho Chi Minh\'s stilt house at the President Ho Chi Minh Memorial Site.'
          },
          {
            id: 'item-4-1-8',
            images: [
              '/images/s-l1600 (4).webp'
            ],
            description: '- Ngày phát hành: 17/5/2006\n\n- Kích thước: 136mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu xanh lơ đậm.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 20.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Chùa Cầu, Hội An, Quảng Nam - Mệnh giá 20.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: May 17, 2006\n\n- Dimensions: 136mm x 65mm.\n\n- Material: Polymer.\n\n- Overall color: Blue.\n\n- Obverse: Portrait of President Ho Chi Minh.\n\n- Reverse: Image of the One Pillar Pagoda in Hanoi.'
          },
          {
            id: 'item-4-1-9',
            images: [
              '/images/s-l1600 (5).webp'
            ],
            description: '- Ngày phát hành: 17/12/2003\n\n- Kích thước: 140mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu nâu tím đỏ.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 50.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Huế - Mệnh giá 50.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: December 17, 2003\n\n- Dimensions: 140mm x 65mm.\n\n- Material: Polymer.\n\n- Overall color: Orange.\n\n- Obverse: Portrait of President Ho Chi Minh.\n\n- Reverse: Image of the Temple of Literature – Imperial Academy.'
          },
          {
            id: 'item-4-1-10',
            images: [
              '/images/s-l1600 (6).webp'
            ],
            description: '- Ngày phát hành: 01/9/2004\n\n- Kích thước: 144mm x 65mm.\n\n-Giấy in: giấy Polymer, có độ bền cao, không ảnh hưởng đến môi trường, có yếu tố bảo an đặc biệt như cửa sổ trong suốt, có hình ẩn hoặc hình dập nổi trong cửa sổ.\n\n-Màu sắc: Nhìn tổng thể hoa văn trang trí và nội dung mặt trước và mặt sau màu xanh lá cây đậm.\n\n-Nội dung mặt trước: Dòng chữ \"Cộng hòa xã hội chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 100.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n-Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh văn miếu - Quốc Tử giám - Mệnh giá 100.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: September 1, 2004\n\n- Dimensions: 144mm x 65mm.\n\n- Material: Polymer paper, highly durable, difficult to counterfeit and moisture-resistant.\n\n- Overall color: Green, obverse features Uncle Ho\'s portrait on the left.\n\n- Reverse: Image of Kim Lien Memorial Site, Uncle Ho\'s birthplace.'
          },
          {
            id: 'item-4-1-11',
            images: [
              '/images/s-l1600 (7).webp'
            ],
            description: '- Ngày phát hành: 30/8/2006\n\n- Kích thước: 148mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Đỏ nâu.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 200.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh vịnh Hạ Long - Mệnh giá 200.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: August 30, 2006\n\n- Dimensions: 148mm x 65mm.\n\n- Material: Polymer.\n\n- Overall color: Red-brown.\n\n- Obverse: Portrait of President Ho Chi Minh.\n\n- Reverse: Image of the seaport in Hai Phong.'
          },
          {
            id: 'item-4-1-12',
            images: [
              '/images/s-l1600 (8).webp'
            ],
            description: '- Ngày phát hành: 17/12/2003\n\n- Kích thước: 152mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu lơ tím sẫm.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh nhà Chủ tịch Hồ Chí Minh ở Kim Liên - Mệnh giá 500.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Issue date: December 17, 2003\n\n- Dimensions: 152mm x 65mm.\n\n- Material: Polymer.\n\n- Overall color: Purple.\n\n- Obverse: Portrait of President Ho Chi Minh.\n\n- Reverse: Image of the Hanoi Opera House.'
          },
        ],
      },
    ],
  },
];
