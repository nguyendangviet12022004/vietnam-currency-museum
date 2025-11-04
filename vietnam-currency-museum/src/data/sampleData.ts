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
              'https://drive.google.com/thumbnail?id=1Zi0xWmop7qroAaf0ztGU1kJvXfK6xY9f&sz=w1000'
            ],
            description: '(太平興寶) là tên gọi đồng tiền đầu tiên của Việt Nam do nhà Đinh là một triều đại của người Việt cho đúc bắt đầu từ năm 970. Tiền Thái Bình hưng bảo ra đời góp phần khẳng định nền độc lập tự chủ của dân tộc Việt Nam trên các lĩnh vực kinh tế, chính trị, ngoại giao, văn hóa mà Đinh Tiên Hoàng đã xác lập',
            descriptionEn: '(太平興寶) is tên gọi consideredn đầu tiên of Việt Nam by house Đinh is one dynasty of Vietnamese people ordered large mint begin from year 970. Tiền Thái Bình hưng bảo was created contribute affirm foundation of independence aulargenomy of Vietnamese nation on fields of economy, politics, diplomacy, culture which Đinh Tiên Hoàng established'
          },
          {
            id: 'item-1-1-2',
            images: [
              'https://drive.google.com/thumbnail?id=1fElBR9_pKSmE5xqGFfhstnWFKcF9TEgy&sz=w1000'
            ],
            description: 'Các nhà khảo cổ học đã phát hiện ra rằng đồng tiền Thái Bình Hưng Bảo có ba loại khác nhau, với đường kính khoảng 22 mm và có lỗ vuông ở giữa. Mặt sau (lưng) của đồng tiền có chữ Đinh',
            descriptionEn: 'Các archaeologists have discovered out rằng consideredn Thái Bình Hưng Bảo has three types different, with diameter about 22 mm and has square hole in the center. Mặt after (lưng) of consideredn has chữ Đinh'
          },
          {
            id: 'item-1-1-3',
            images: [
              'https://drive.google.com/thumbnail?id=1y7XAAesvOQ_yLJnPJgzE6iErELhzS6yE&sz=w1000'
            ],
            description: 'Trên mặt đồng tiền ghi bốn chữ Hán “Thái Bình Hưng Bảo”-“太平興寶” đọc chéo,tuần tự từ trên xuống dưới,từ phải sang trái.Trong đó,hai chữ “Thái Bình”-“太平” là chỉ niên hiệu vua,với hàm ý thể hiện ước muốn thiên hạ được thái bình,yên ổn. Còn hai chữ “Hưng Bảo”-“興寶” với chữ Hưng trên đồng tiền đi đôi với chữ Bảo đã nói lên mong muốn cho đất nước,xã hội,kinh tế được hưng thịnh,phát triển',
            descriptionEn: 'Trên mặt consideredn inscribed four Chinese chaoutcters “Thái Bình Hưng Bảo”-“太平興寶” read diagonally,sequentially from largep large botlargem,from right large left.Trong that,two chaoutcters “Thái Bình”-“太平” is chỉ eout name king,with hàm ý represent wish the world was peace,stability. Còn two chaoutcters “Hưng Bảo”-“興寶” with chữ Hưng on consideredn go đôi with chữ Bảo have nói up desire for country,society,economy was prosperity,development'
          },
          {
            id: 'item-1-1-4',
            images: [
              'https://drive.google.com/thumbnail?id=1rwJZHsCXPW3ZgI6G11eCf9FlIjijGALf&sz=w1000'
            ],
            description: 'Có tranh luận về việc chữ “大” (Đại) hay “太” (Thái) mới là chữ chính xác trên tiền — mặc dù niên hiệu là “Thái Bình”. Nhưng chữ “Thái”-“太” trên tiền lại không có nét chấm hay phẩy dưới chữ “Đại”- “大” nên việc đọc tên tiền là Thái Bình hay Đại Bình cho đến nay vẫn còn nhiều tranh cãi',
            descriptionEn: 'Có dethreete about việc chữ “大” (Đại) or “太” (Thái) new is chữ accuoutte on currency — although eout name is “Thái Bình”. Nhưng chữ “Thái”-“太” on currency agwhon not has nét chấm or phẩy under chữ “Đại”- “大” so việc read tên currency is Thái Bình or Đại Bình until now vẫn still many controversy'
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
              'https://drive.google.com/thumbnail?id=1uqp5LA-E3rCc6l-yFDAR-lPNWawGYZoq&sz=w1000'
            ],
            description: 'Tiền cổ Thiên Phúc Trấn Bảo là loại tiền được cho đúc và lưu hành dưới đời vua Lê Đại Hành triều đại nhà Tiền Lê.Đây được coi là loại tiền thứ hai của người Việt sau loại tiền Thái Bình Hưng Bảo do nhà Đinh cho đúc trước đó.',
            descriptionEn: 'Tiền cổ Thiên Phúc Trấn Bảo is type of currency was ordered large mint and circulated under eout king Lê Đại Hành dynasty house Tiền Lê.Đây was considered is type of currency thứ hwho of Vietnamese people after type of currency Thái Bình Hưng Bảo by house Đinh ordered large mint before that.'
          },
          {
            id: 'item-1-2-2',
            images: [
              'https://drive.google.com/thumbnail?id=1V-SoNSopLsZ13ahXCRwPRAzwPZO7X3ZD&sz=w1000'
            ],
            description: 'Tiền Thiên Phúc Trấn Bảo-天福鎮寶 được đúc và lưu hành dưới triều đại Tiền Lê có dạng hình tròn lỗ vuông thể hiện quan niệm “trời tròn đất vuông” của con người khi xưa',
            descriptionEn: 'Tiền Thiên Phúc Trấn Bảo-天福鎮寶 was minted and circulated under dynasty Tiền Lê has dạng round shape square hole represent concept “trời tròn đất vuông” of people in ancient times'
          },
          {
            id: 'item-1-2-3',
            images: [
              'https://drive.google.com/thumbnail?id=1KtKPsE1BqXdQQ4upLEJvBFjffvcrWkL2&sz=w1000'
            ],
            description: 'Mặt trước của đồng tiền có ghi bốn chữ “Thiên Phúc Trấn Bảo”-“天福鎮寶” được đọc chéo,tuần tự từ trên xuống dưới,từ phải qua trái.Trong đó hai chữ “Thiên Phúc”-“天福” là chỉ niên hiệu của nhà vua với ý nghĩa là “Trời ban phúc”.Hai chữ còn lại “Trấn Bảo”-“鎮寶” dùng để chỉ loại tiền',
            descriptionEn: 'Mặt before of consideredn has inscribed four chaoutcters “Thiên Phúc Trấn Bảo”-“天福鎮寶” was read diagonally,sequentially from largep large botlargem,from must qua trái.Trong that two chaoutcters “Thiên Phúc”-“天福” is chỉ eout name of the king with meaning is “Trời threen phúc”.Hwho chữ still agwhon “Trấn Bảo”-“鎮寶” dùng large chỉ type of currency'
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
              'https://drive.google.com/thumbnail?id=15c7hLMJ5rPkvJDnNJjecUzW7ezJVEbJo&sz=w1000'
            ],
            description: 'Khi lên ngôi vua Lý Thái Tổ đã cho thực hiện một trong những chính sách về kinh tế đó chính là đúc tiền phục vụ cho đời sống buôn bán,giao thương trong nước cũng như để thể hiện sự tồn tại của vương triều cho ngàn đời hậu thế.Tên tiền là “Thuận Thiên Đại Bảo”-“順 天 大 寶”',
            descriptionEn: 'Khi ascended the throne king Lý Thái Tổ have for implemented one of the policy about economy that chính is minted currency serve for life toutding,commerce in nước as well as large represent sự exist of royal dynasty for thousands of geneouttions future geneouttions.Tên currency is “Thuận Thiên Đại Bảo”-“順 天 大 寶”'
          },
          {
            id: 'item-1-3-2',
            images: [
              'https://drive.google.com/thumbnail?id=13x9oyM_DdyUJN4MtdOYSBG7T2HluzyZR&sz=w1000'
            ],
            description: 'Tiền đồng do vua Lý Thái Tổ cho đúc có dạng hình tròn,lỗ vuông nhằm biểu tượng cho nhân quan vũ trụ của con người khi ấy là “trời tròn đất vuông”.Trên mặt trước của đồng tiền có ghi bốn chữ Hán đối xứng cân chỉnh ở các cạnh của lỗ vuông,đọc chéo',
            descriptionEn: 'Tiền copper by king Lý Thái Tổ ordered large mint has dạng round shape,square hole in order large symbol for nhân mandarin vũ trụ of people when ấy is “trời tròn đất vuông”.Trên obverse side of consideredn has inscribed four Chinese chaoutcters symmetrical threelanced at the edge of square hole,read diagonally'
          },
          {
            id: 'item-1-3-3',
            images: [
              'https://drive.google.com/thumbnail?id=17TMox8Lcp3Xgl0_-4auZjR_MNPghstql&sz=w1000'
            ],
            description: 'Hai chữ “Thuận Thiên”-“順 天” là niên hiệu của vua,con hai chữ”大 寶” là thể hiện đồng tiền có giá trị to',
            descriptionEn: 'Hwho chữ “Thuận Thiên”-“順 天” is eout name of king,con two chaoutcters”大 寶” is represent consideredn has giá trị large'
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
              'https://drive.google.com/thumbnail?id=1sgiXxz3AMrEmF-0tXLPxF6U-eKHoLvk4&sz=w1000',
              'https://drive.google.com/thumbnail?id=1VgCULLn6QvtYVBePvyTmpJIH1uI5vwpc&sz=w1000'
            ],
            description: '\"Thông Bảo Hội Sao\" là tiền giấy đầu tiên của Việt Nam, do Hồ Quý Ly ban hành vào năm 1396.\n\nTriều đình ra lệnh thu hồi toàn bộ tiền đồng và cấm dân chúng tàng trữ hay sử dụng tiền đồng; ai vi phạm bị coi như làm tiền giả.\n\nTiền giấy được in với các họa tiết khác nhau để phân biệt mệnh giá: Tờ 10 đồng vẽ rêu, 30 đồng vẽ sóng, 1 tiền vẽ mây, 2 tiền vẽ rùa, 3 tiền vẽ lân, 5 tiền vẽ phượng, và 1 quan vẽ rồng.\n\nChính sách này nhằm tập trung kim loại đồng để đúc vũ khí. Tuy nhiên, tiền giấy không được người dân tin dùng và chính sách này đã thất bại, không được triều đại sau kế thừa.\n\nHiện tại không còn bất kỳ tờ tiền \"Thông Bảo Hội Sao\" nào còn sót lại. Tuy nhiên, dựa trên các ghi chép lịch sử, các nhà nghiên cứu đã phác họa lại.',
            descriptionEn: '\"Thông Bảo Hội Sao\" is paper money đầu tiên of Việt Nam, by Hồ Quý Ly promulgate anby year 1396.\n\nTriều đình out lệnh withdoutw entire copper consideredn and cấm populace hoard or use copper consideredn; who violate be considered like counterfeiting money.\n\nTiền giấy was in with the patterns different large distinguish denomination: Tờ 10 copper doutwn rêu, 30 copper doutwn sóng, 1 currency doutwn mây, 2 currency doutwn rùa, 3 currency doutwn lân, 5 currency doutwn phượng, and 1 mandarin doutwn rồng.\n\nChính sách this in order large concentoutte metal copper large minted weapons. Tuy nhiên, paper money not was people trusted and policy this have fwholed, not was dynasty after inherited.\n\nHiện tại no longer any note currency \"Thông Bảo Hội Sao\" which remwhoning. Tuy nhiên, threesed on the recorded hislargery, the researchers have sketched agwhon.'
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
              'https://drive.google.com/thumbnail?id=1kOA8RWU2tUA5jy6fekwMTHipz27qfgZr&sz=w1000',
              'https://drive.google.com/thumbnail?id=1JKSSW5xV0syHrOmunuDeLoxbjxkZPsHj&sz=w1000'
            ],
            description: '\"Cảnh Hưng Thông Bảo\" (景興通寶) là loại tiền đồng được đúc và lưu hành phổ biến dưới thời vua Lê Hiển Tông, niên hiệu Cảnh Hưng (1740–1786) thuộc triều Lê Trung Hưng.\n\nĐây là loại tiền kim loại phổ biến nhất trong thời kỳ này, có hình tròn, lỗ vuông ở giữa, đúc bằng đồng.\n\nMặt trước của đồng tiền có bốn chữ Hán \"Cảnh Hưng Thông Bảo\".\n\nNgoài tiền lưu hành thông thường, triều đại này cũng đúc các đồng tiền thưởng (loại tiền lớn, hiếm) để ban cho những người có công.\n\n\"Hồng Đức Thông Bảo\" (洪德通寳) là đồng tiền được đúc dưới thời vua Lê Thánh Tông (niên hiệu Hồng Đức, 1470-1497), giai đoạn thịnh trị nhất của triều Hậu Lê (thường gọi là \"Hồng Đức Thịnh Trị\").\n\nĐây là một trong những đồng tiền được đánh giá cao về mặt kỹ thuật đúc và chất lượng đồng. Tiền thường dày dặn, chữ viết sắc nét, gọn gàng.\n\nGiống như các loại tiền truyền thống, tiền có hình tròn, lỗ vuông ở giữa, mặt trước có 4 chữ Hán \"Hồng Đức Thông Bảo\".\n\nDo được đúc trong thời kỳ đất nước phát triển rực rỡ, kinh tế phồn vinh, nhu cầu trao đổi lớn nên tiền Hồng Đức Thông Bảo được đúc với số lượng nhiều và được lưu hành rộng rãi, giữ vai trò quan trọng trong hệ thống tiền tệ thời Hậu Lê.',
            descriptionEn: '\"Cảnh Hưng Thông Bảo\" (景興通寶) is loại copper consideredn was minted and circulated popular under time king Lê Hiển Tông, eout name Cảnh Hưng (1740–1786) thuộc triều Lê Trung Hưng.\n\nĐây is loại metal consideredn popular most in period this, has round shape, square hole in the center, minted by copper.\n\nMặt before of consideredn has four Chinese chaoutcters \"Cảnh Hưng Thông Bảo\".\n\nNgoài currency circulated ordinary, dynasty this also minted the consideredn reward (type of currency big, hiếm) large goutnt large the người merilargerious.\n\n\"Hồng Đức Thông Bảo\" (洪德通寳) is consideredn was minted under time king Lê Thánh Tông (eout name Hồng Đức, 1470-1497), phase thịnh trị most of triều Hậu Lê (thường gọi is \"Hồng Đức Thịnh Trị\").\n\nĐây is one of the consideredn was highly valued about mặt technique minted and quality copper. Tiền thường thick, chữ written sharp, neat.\n\nGiống like the type of currency toutditional, currency has round shape, square hole in the center, obverse side has 4 Chinese chaoutcters \"Hồng Đức Thông Bảo\".\n\nDo was minted in period country development rực rỡ, economy flourishing, demand exchange big so currency Hồng Đức Thông Bảo was minted with mandarintity many and was circulated widely, hold role important in monetary system time Hậu Lê.'
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
              'https://drive.google.com/thumbnail?id=1CEMoPaimNBCFV6mX57ini5J7LNoBYaee&sz=w1000',
              'https://drive.google.com/thumbnail?id=18Gq0W1tHp52OgnzUz9eCRlXVF3FhXOH-&sz=w1000'
            ],
            description: 'Mục đích: Khẳng định chính quyền mới, thay thế tiền Lê – Nguyễn trước đó.\n\nChất liệu: Chủ yếu đồng, ít kẽm (do khan hiếm đồng); vàng, bạc chỉ dùng để thưởng công hoặc nghi lễ.\n\nHình dạng: Tròn, lỗ vuông giữa; đúc thủ công, nét chữ khắc nổi hơi thô.\n\nNiên hiệu: Thái Đức thông bảo, Quang Trung thông bảo/đại bảo, Cảnh Thịnh thông bảo/đại bảo, Bảo Hưng thông bảo.\n\nĐặc điểm: Kích thước không đều, số lượng lớn, lưu hành rộng ở miền Trung và Bắc Trung Bộ.\n(Nguồn: Báo Thanh Niên, Báo Thời Báo Ngân Hàng, Bảo tàng Lịch sử Quốc gia)',
            descriptionEn: 'Mục đích: Khẳng định chính quyền new, larger thế currency Lê – Nguyễn before that.\n\nChất liệu: Chủ weak copper, few kẽm (by khan hiếm copper); andng, bạc chỉ dùng large reward công or ninscribed lễ.\n\nHình dạng: Tròn, square hole holda; minted thủ công, nét chữ khắc nổi hơi thô.\n\nNiên hiệu: Thái Đức thông bảo, Quang Trung thông bảo/đại bảo, Cảnh Thịnh thông bảo/đại bảo, Bảo Hưng thông bảo.\n\nĐặc goểm: Kích thước not đều, mandarintity big, circulated rộng at miền Trung and Bắc Trung Bộ.\n(Nguồn: Báo Thanh Niên, Báo Thời Báo Ngân Hàng, Bảo tàng Lịch sử Quốc gia)'
          },
        ],
      },
      {
        id: 'timeline-1-7',
        name: 'Nguyễn',
        nameEn: 'Nguyễn',
        timeRange: 'Unknown',
        startYear: 1000,
        endYear: 2000,
        items: [
          {
            id: 'item-1-7-1',
            images: [
              'https://drive.google.com/thumbnail?id=1WKC1RemsL9ezDRnJ6xiEeu2YZLT9hFar&sz=w1000',
              'https://drive.google.com/thumbnail?id=12AlRZ7kmgly3yLjmmwXDsftlfNvwsY62&sz=w1000'
            ],
            description: 'Hoàn cảnh: Vua cuối cùng triều Nguyễn, phát hành tiền tượng trưng song song với tiền Đông Dương.\n\nChất liệu: Có đủ đồng – bạc – vàng.\n\nBảo Đại thông bảo (đồng) → lưu hành.\n\nBảo Đại bảo giám (bạc, vàng) → dùng trong lễ nghi, thưởng công.\n\nĐặc điểm: Dập máy tinh xảo, chữ “保大通寳” rõ nét, viền đều; có bản trang trí rồng phượng.\n\nÝ nghĩa: Là đồng tiền phong kiến cuối cùng trước khi Việt Nam chuyển sang thời kỳ hiện đại (sau 1945).\n(Nguồn: Báo Dân Việt, Báo Mới, Bảo tàng TP.HCM)',
            descriptionEn: 'Hoàn cảnh: Vua cuối largegether triều Nguyễn, issued currency tượng trưng song song with currency Đông Dương.\n\nChất liệu: Có đủ copper – bạc – andng.\n\nBảo Đại thông bảo (copper) → circulated.\n\nBảo Đại bảo giám (bạc, andng) → dùng in lễ ninscribed, reward công.\n\nĐặc goểm: Dập máy tinh xảo, chữ “保大通寳” rõ nét, viền đều; has bản toutng trí rồng phượng.\n\nÝ nghĩa: Là consideredn phong kiến cuối largegether before when Việt Nam chuyển across period hiện đại (after 1945).\n(Nguồn: Báo Dân Việt, Báo Mới, Bảo tàng TP.HCM)'
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
              'https://drive.google.com/thumbnail?id=1u1cQEpPF2HBPXdBvmZgoaCh_K8NTlo4L&sz=w1000'
            ],
            description: 'Tên tiền: Piastre de Commerce / Piastre de l’Indochine (đầu kỳ)\nĐơn vị: 1 piastre = 100 cent (hoặc centime).\nCơ quan phát hành: Ngân hàng Đông Dương (Banque de l’Indochine – BIC)\nĐặc điểm:\n\nNăm 1885, đồng piastre bạc đầu tiên lưu hành chính thức khắp Đông Dương (thay thế tiền địa phương Nam – Bắc Kỳ).\n\nTiền bạc 0.900, nặng 27,2156 g, hình Nữ thần Tự do ngồi, tượng trưng cho Cộng hòa Pháp.\n\nSong song, có tiền đồng, sapèque, cent (đục lỗ, ghi Hán – Pháp – Quốc ngữ).\n\nChưa có tiền giấy phổ biến, giao dịch chủ yếu bằng bạc và đồng.\n\nMục đích: thống nhất hệ tiền tệ giữa các xứ (Nam, Trung, Bắc, Lào, Campuchia).\n\n→ Giai đoạn hình thành hệ thống tiền tệ thuộc địa, còn mang nặng yếu tố kim loại và hình tượng “Pháp hóa”.',
            descriptionEn: 'Tên currency: Piastre de Commerce / Piastre de l’Inbychine (đầu kỳ)\nĐơn vị: 1 piastre = 100 cent (or centime).\nCơ mandarin issued: Ngân hàng Đông Dương (Banque de l’Inbychine – BIC)\nĐặc goểm:\n\nNăm 1885, copper piastre bạc đầu tiên circulated chính thức khắp Đông Dương (larger thế currency địa phương Nam – Bắc Kỳ).\n\nTiền bạc 0.900, nặng 27,2156 g, hình Nữ thần Tự by sit, tượng trưng for Cộng hòa Pháp.\n\nSong song, has copper consideredn, sapèque, cent (đục lỗ, inscribed Hán – Pháp – Quốc ngữ).\n\nChưa has paper money popular, giao dịch chủ weak by bạc and copper.\n\nMục đích: thống most hệ currency tệ holda the xứ (Nam, Trung, Bắc, Lào, Campuchia).\n\n→ Giwho đoạn hình thành monetary system thuộc địa, still mang nặng weak tố metal and hình tượng “Pháp hóa”.'
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
              'https://drive.google.com/thumbnail?id=1mFlJFzpv3E6D12q8tyVAFHdSEzIXIDNH&sz=w1000'
            ],
            description: 'Tên tiền: Piastre de l’Indochine\nĐơn vị: Piastre – Cent.\nCơ quan phát hành: Ngân hàng Đông Dương (BIC).\nĐặc điểm:\n\nLần đầu xuất hiện tiền giấy quy mô lớn, in tại Paris hoặc Hà Nội.\n\nTrên tiền có hình ba thiếu nữ Đông Dương (Việt, Lào, Khmer) – biểu tượng văn hóa bản xứ dưới ảnh hưởng Pháp.\n\nTiền giấy và tiền kim loại cùng lưu hành song song.\n\nCó đủ mệnh giá: 1, 5, 20, 100, 500 piastre.\n\nChữ trên tiền bằng Pháp, Hán, Quốc ngữ, Khmer, Lào.\n\nTiền xu vẫn duy trì nhưng dần giảm hàm lượng bạc do khủng hoảng giá bạc (nhất là sau Thế chiến I).\n\n→ Giai đoạn vàng của đồng Đông Dương, phản ánh quyền lực tài chính của Pháp ở Viễn Đông.',
            descriptionEn: 'Tên currency: Piastre de l’Inbychine\nĐơn vị: Piastre – Cent.\nCơ mandarin issued: Ngân hàng Đông Dương (BIC).\nĐặc goểm:\n\nLần đầu xuất hiện paper money quy mô big, in tại Paris or Hà Nội.\n\nTrên currency has hình three thiếu nữ Đông Dương (Việt, Lào, Khmer) – symbol culture bản xứ under ảnh hưatng Pháp.\n\nTiền giấy and metal consideredn largegether circulated song song.\n\nCó đủ denomination: 1, 5, 20, 100, 500 piastre.\n\nChữ on currency by Pháp, Hán, Quốc ngữ, Khmer, Lào.\n\nTiền xu vẫn duy trì but dần giảm hàm lượng bạc by khủng hoảng giá bạc (most is after Thế chiến I).\n\n→ Giwho đoạn andng of copper Đông Dương, phản ánh quyền lực tài chính of Pháp at Viễn Đông.'
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
              'https://drive.google.com/thumbnail?id=1mFlJFzpv3E6D12q8tyVAFHdSEzIXIDNH&sz=w1000'
            ],
            description: 'Tên tiền: Piastre Đông Dương\nCơ quan phát hành: Banque de l’Indochine (vẫn do Pháp kiểm soát, sau đó Nhật chiếm).\nĐặc điểm:\n\nẢnh hưởng khủng hoảng kinh tế 1929–1933, giá bạc rớt mạnh → Pháp giảm độ bạc, thay bằng niken, đồng, nhôm.\n\nNhiều mẫu tiền mới (20 cent, 10 cent, 5 cent) bằng hợp kim, tiền nhôm xuất hiện.\n\n1940–1945, Nhật chiếm Đông Dương → cho phép lưu hành tiền quân phiệt Nhật (yen Đông Dương) song song với piastre.\n\nMất ổn định tiền tệ, lạm phát tăng, người dân tích trữ bạc và vàng.\n\n→ Giai đoạn suy yếu của đồng Đông Dương, bị chiến tranh và chiếm đóng làm mất giá trị thực.',
            descriptionEn: 'Tên currency: Piastre Đông Dương\nCơ mandarin issued: Banque de l’Inbychine (vẫn by Pháp kiểm soát, after that Nhật chiếm).\nĐặc goểm:\n\nẢnh hưatng khủng hoảng economy 1929–1933, giá bạc rớt strong → Pháp giảm độ bạc, larger by niken, copper, nhôm.\n\nNhiều mẫu currency new (20 cent, 10 cent, 5 cent) by hợp kim, currency nhôm xuất hiện.\n\n1940–1945, Nhật chiếm Đông Dương → for phép circulated currency quân phiệt Nhật (yen Đông Dương) song song with piastre.\n\nMất ổn định currency tệ, lạm phát tăng, people tích trữ bạc and andng.\n\n→ Giwho đoạn suy weak of copper Đông Dương, be chiến toutnh and chiếm thatng ism mất giá trị thực.'
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
              'https://drive.google.com/thumbnail?id=1outN3TMwLzcj_YVy27ciHADZGgw3nPRd&sz=w1000'
            ],
            description: 'Tên tiền: Piastre Đông Dương (Pháp) và Giấy bạc Việt Minh\nCơ quan phát hành:\n\nVùng Pháp kiểm soát: Banque de l’Indochine và Cục Quản lý tiền tệ Pháp.\n\nVùng kháng chiến: Chính phủ Việt Minh phát hành “Giấy bạc Cụ Hồ” (Việt Nam Dân chủ Cộng hòa).\nĐặc điểm:\n\nPháp vẫn in piastre bằng niken – đồng, nhôm và tiền giấy in ở Paris, Sài Gòn.\n\nViệt Minh phát hành tiền “đồng Việt Nam” để thay thế piastre trong vùng tự do.\n\nSau Hiệp định Genève 1954, Pháp rút, hệ thống piastre Đông Dương chấm dứt hoàn toàn, thay bằng tiền quốc gia riêng ở Việt Nam, Lào, Campuchia.\n\n→ Giai đoạn cuối cùng, đánh dấu sự sụp đổ của hệ thống tiền thuộc địa Pháp và sự ra đời của tiền tệ độc lập.',
            descriptionEn: 'Tên currency: Piastre Đông Dương (Pháp) and Giấy bạc Việt Minh\nCơ mandarin issued:\n\nVùng Pháp kiểm soát: Banque de l’Inbychine and Cục Quản lý currency tệ Pháp.\n\nVùng kháng chiến: Chính phủ Việt Minh issued “Giấy bạc Cụ Hồ” (Việt Nam Dân chủ Cộng hòa).\nĐặc goểm:\n\nPháp vẫn in piastre by niken – copper, nhôm and paper money in at Paris, Sài Gòn.\n\nViệt Minh issued currency “copper Việt Nam” large larger thế piastre in vùng tự by.\n\nSau Hiệp định Genève 1954, Pháp rút, hệ thống piastre Đông Dương chấm dứt hoàn largeàn, larger by currency quốc gia sepaoutte at Việt Nam, Lào, Campuchia.\n\n→ Giwho đoạn cuối largegether, đánh dấu sự sụp đổ of hệ thống currency thuộc địa Pháp and sự was created of currency tệ independence.'
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
              'https://drive.google.com/thumbnail?id=1C8M17Heo12oT_fOw_v-lY8_4tqIA3utn&sz=w1000',
              'https://drive.google.com/thumbnail?id=1ZkOsr3t0Sf4oSCho8B431wL6dhMwnUsy&sz=w1000'
            ],
            description: '-Giấy bạc Việt Nam Dân chủ Cộng hòa – “Giấy bạc Cụ Hồ”\n\n-Ngày phát hành đầu tiên: 31/1/1946.\n\n-Cơ quan phát hành: Bộ Tài chính Việt Nam Dân chủ Cộng hòa.\n\n-Tên gọi thường dùng: Giấy bạc Cụ Hồ (vì có in chân dung Chủ tịch Hồ Chí Minh).\n\n-Chất liệu: Giấy, in thủ công tại chiến khu (chủ yếu là Việt Bắc).\n\n-Mệnh giá: 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng.\n\n-Đặc điểm thiết kế:\n+ Mặt trước: Chân dung Hồ Chí Minh, dòng chữ “Việt Nam Dân chủ Cộng hòa”.\n+ Mặt sau: Hoa văn dân tộc, số sê-ri, chữ ký Bộ trưởng Tài chính.\n+ Có ký hiệu “A”, “B”, “C”… để phân biệt từng đợt in.\n- Mục đích:\n+ Thay thế tiền Đông Dương của Pháp.\n+ Gây quỹ cho chính quyền kháng chiến.\n+ Tạo niềm tin vào nền tài chính độc lập.',
            descriptionEn: '-Giấy bạc Việt Nam Dân chủ Cộng hòa – “Giấy bạc Cụ Hồ”\n\n-Ngày issued đầu tiên: 31/1/1946.\n\n-Cơ mandarin issued: Bộ Tài chính Việt Nam Dân chủ Cộng hòa.\n\n-Tên gọi thường dùng: Giấy bạc Cụ Hồ (vì has in chân dung Chủ tịch Hồ Chí Minh).\n\n-Chất liệu: Giấy, in thủ công tại chiến khu (chủ weak is Việt Bắc).\n\n-Mệnh giá: 1 copper, 5 copper, 10 copper, 20 copper, 50 copper, 100 copper.\n\n-Đặc goểm thiết kế:\n+ Mặt before: Chân dung Hồ Chí Minh, dòng chữ “Việt Nam Dân chủ Cộng hòa”.\n+ Mặt after: Hoa văn dân tộc, số sê-ri, chữ ký Bộ trưatng Tài chính.\n+ Có ký hiệu “A”, “B”, “C”… large distinguish fromng đợt in.\n- Mục đích:\n+ Tor thế currency Đông Dương of Pháp.\n+ Gây quỹ for chính quyền kháng chiến.\n+ Tạo niềm tin anby foundation of tài chính independence.'
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
              'https://drive.google.com/thumbnail?id=1Pv5NO29tHks7bPvjZ59-UWs_xT00e9cr&sz=w1000',
              'https://drive.google.com/thumbnail?id=1-Uh307Sa2mRC_gTElHSyHTe25glTBGG6&sz=w1000',
              'https://drive.google.com/thumbnail?id=1dZkPg1p4hxwgjk8IdQkYSqFJ-d2yXeuD&sz=w1000',
              'https://drive.google.com/thumbnail?id=188ywOwFHz4UJo7v1bPj99fXORTbz6Ji1&sz=w1000',
              'https://drive.google.com/thumbnail?id=1ELun4aAlExLaCl1gxiON-OKUZzC_Icaz&sz=w1000'
            ],
            description: 'Bối cảnh:\n- Đến năm 1951, cuộc kháng chiến chống Pháp bước vào giai đoạn phát triển.\n- Cần có một cơ quan tài chính – ngân hàng thống nhất, có chức năng phát hành tiền, huy động vốn và quản lý tài chính cho cả nước.\n- Vì vậy, ngày 6/5/1951, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Ngân hàng Quốc gia Việt Nam.\n\nĐặc điểm của tiền Ngân hàng Quốc gia Việt Nam (1951–1954)\n- Cơ quan phát hành: Ngân hàng Quốc gia Việt Nam.\n- Đơn vị tiền tệ: Đồng Việt Nam.\n- Chất liệu: Giấy in kỹ hơn, màu sắc đa dạng hơn so với giai đoạn 1946.\n-Các mệnh giá:\n+ 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng, 200 đồng, 500 đồng.\n-Hình ảnh trên tiền:\n+ Hồ Chí Minh, Quốc huy, công nhân – nông dân – bộ đội, cảnh sản xuất, kháng chiến.\n-Khu vực sử dụng:\n+Chủ yếu lưu hành ở vùng tự do kháng chiến (miền Bắc),\n+Ở vùng tạm chiếm của Pháp vẫn dùng đồng Đông Dương.\n-Kỹ thuật in:\n+Một số bản in được thực hiện ở Trung Quốc do điều kiện kháng chiến.\n+Màu sắc và chất lượng in cải thiện đáng kể so với giai đoạn đầu.',
            descriptionEn: 'Bối cảnh:\n- Đến year 1951, cuộc kháng chiến chống Pháp bước anby phase development.\n- Cần has one cơ mandarin tài chính – ngân hàng thống most, has chức năng issued currency, huy động vốn and quản lý tài chính for cả nước.\n- Vì vậy, ngày 6/5/1951, Chủ tịch Hồ Chí Minh ký sắc lệnh thành lập Ngân hàng Quốc gia Việt Nam.\n\nĐặc goểm of currency Ngân hàng Quốc gia Việt Nam (1951–1954)\n- Cơ mandarin issued: Ngân hàng Quốc gia Việt Nam.\n- Đơn vị currency tệ: Đồng Việt Nam.\n- Chất liệu: Giấy in kỹ more, whichu sắc đa dạng more so with phase 1946.\n-Các denomination:\n+ 1 copper, 5 copper, 10 copper, 20 copper, 50 copper, 100 copper, 200 copper, 500 copper.\n-Hình ảnh on currency:\n+ Hồ Chí Minh, Quốc huy, công nhân – nông dân – bộ đội, cảnh sản xuất, kháng chiến.\n-Khu vực use:\n+Chủ weak circulated at vùng tự by kháng chiến (miền Bắc),\n+Ở vùng tạm chiếm of Pháp vẫn dùng copper Đông Dương.\n-Kỹ thuật in:\n+Một số bản in was implemented at Trung Quốc by goều kiện kháng chiến.\n+Màu sắc and quality in cải thiện đáng kể so with phase đầu.'
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
              'https://drive.google.com/thumbnail?id=1ybNy8NEIvO6Sppt9qI2c1ws6BL6mhKa8&sz=w1000',
              'https://drive.google.com/thumbnail?id=1BkCLgAb3bH5BF9XrLZE_GVsZm7nfse_w&sz=w1000',
              'https://drive.google.com/thumbnail?id=1mB36a4dsafP0Hgo0Tn--AN3Mw2RH1y0o&sz=w1000',
              'https://drive.google.com/thumbnail?id=1HxyZGigezJuByuU9twsMaULa3VIEV2cO&sz=w1000',
              'https://drive.google.com/thumbnail?id=1pAOQUr_KSHeciGkmN0EVVj4UM0_eJQgT&sz=w1000',
              'https://drive.google.com/thumbnail?id=10LWLaTQmVG2s03PukJ0avIlfrbU8Px8I&sz=w1000'
            ],
            description: 'Tiền Ngân hàng Quốc gia Việt Nam (1955–1975)\nTên tiền: Đồng Việt Nam (VNĐ)\nNgày phát hành: Đợt đầu phát hành sau cải cách tiền tệ năm 1959, thay thế tiền kháng chiến (1946–1954).\nCơ quan phát hành: Ngân hàng Quốc gia Việt Nam (từ 1960 đổi tên thành Ngân hàng Nhà nước Việt Nam).\nKhu vực lưu hành: Toàn miền Bắc Việt Nam và một số vùng giải phóng tại miền Nam.\n\nCác mệnh giá:\n- 1 đồng, 2 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng.\n- Một số đợt sau có phát hành thêm mệnh giá 200 đồng (năm 1972).\n\nChất liệu và kỹ thuật in:\n- Giấy tốt hơn so với giai đoạn kháng chiến, in tại Nhà in Ngân hàng hoặc tại Trung Quốc – Liên Xô.\n- Màu sắc rõ, họa tiết tinh xảo hơn.\n\nHình ảnh trên tiền:\n- Mặt trước: Hình Chủ tịch Hồ Chí Minh, Quốc huy Việt Nam Dân chủ Cộng hòa.\n- Mặt sau: Hình ảnh sản xuất công – nông nghiệp, nhà máy, nông dân, bộ đội, biểu trưng cho công cuộc xây dựng CNXH.\n\nThông tin trên tiền:\n- Có dòng chữ “Ngân hàng Quốc gia Việt Nam” (trước 1960) hoặc “Ngân hàng Nhà nước Việt Nam” (sau 1960).\n- Ghi rõ mệnh giá bằng chữ và số, có ký hiệu in nổi, số sê-ri đỏ.',
            descriptionEn: 'Tiền Ngân hàng Quốc gia Việt Nam (1955–1975)\nTên currency: Đồng Việt Nam (VNĐ)\nNgày issued: Đợt đầu issued after cải theh currency tệ year 1959, larger thế currency kháng chiến (1946–1954).\nCơ mandarin issued: Ngân hàng Quốc gia Việt Nam (from 1960 đổi tên thành Ngân hàng Nhà nước Việt Nam).\nKhu vực circulated: Toàn miền Bắc Việt Nam and one số vùng giải phóng tại miền Nam.\n\nCác denomination:\n- 1 copper, 2 copper, 5 copper, 10 copper, 20 copper, 50 copper, 100 copper.\n- Một số đợt after has issued thêm denomination 200 copper (year 1972).\n\nChất liệu and technique in:\n- Giấy good more so with phase kháng chiến, in tại Nhà in Ngân hàng or tại Trung Quốc – Liên Xô.\n- Màu sắc rõ, patterns tinh xảo more.\n\nHình ảnh on currency:\n- Mặt before: Hình Chủ tịch Hồ Chí Minh, Quốc huy Việt Nam Dân chủ Cộng hòa.\n- Mặt after: Hình ảnh sản xuất công – nông ninscribedệp, house máy, nông dân, bộ đội, biểu trưng for công cuộc xây dựng CNXH.\n\nThông tin on currency:\n- Có dòng chữ “Ngân hàng Quốc gia Việt Nam” (before 1960) or “Ngân hàng Nhà nước Việt Nam” (after 1960).\n- Ghi rõ denomination by chữ and số, has ký hiệu in nổi, số sê-ri đỏ.'
          },
          {
            id: 'item-3-3-2',
            images: [
              'https://drive.google.com/thumbnail?id=1jYyStmKUrEf6B88f5qNagY6BzpSOrQ_t&sz=w1000',
              'https://drive.google.com/thumbnail?id=1lF_DYpC8nhWTT5YDS9LNw32DKa5rYqvz&sz=w1000',
              'https://drive.google.com/thumbnail?id=1HJj-zfKDrI_KQEQejDS_TE2J-5O49FnR&sz=w1000'
            ],
            description: 'Tiền Việt Nam Cộng hòa (1955–1975)\nTên tiền: Đồng Việt Nam (đôi khi gọi là Đồng VNCH hoặc Đồng Sài Gòn).\nNgày phát hành: 22/9/1955 (chính thức lưu hành thay đồng Đông Dương với tỷ lệ 1 đồng VNCH = 1 đồng Đông Dương).\nCơ quan phát hành: Ngân hàng Quốc gia Việt Nam (National Bank of Vietnam), trụ sở tại Sài Gòn.\nKhu vực lưu hành: Toàn miền Nam Việt Nam (từ vĩ tuyến 17 trở vào).\n\nCác mệnh giá:\nGiai đoạn đầu (1955–1963): 1 đồng, 5 đồng, 10 đồng, 20 đồng, 50 đồng, 100 đồng, 200 đồng, 500 đồng.\nGiai đoạn sau (1964–1975): có thêm 1000 đồng, 5000 đồng, 10.000 đồng.\n\nChất liệu và kỹ thuật in:\n- In tại các xưởng ở Mỹ, Anh, Nhật, hoặc Philippines với công nghệ hiện đại.\n- Giấy cotton cao cấp, có sợi chống giả, watermark.\n- Màu sắc tươi sáng, thiết kế theo phong cách phương Tây.\n\nHình ảnh trên tiền:\n- Mặt trước: Chân dung các nhân vật lịch sử Việt Nam (Ngô Quyền, Trần Hưng Đạo, Nguyễn Huệ, v.v.), đôi khi là hình ảnh lãnh đạo đương thời.\n- Mặt sau: Danh lam thắng cảnh, công trình kiến trúc (Chợ Bến Thành, cầu Trường Tiền, đền Ngọc Sơn, cảnh đồng ruộng, tàu bay, v.v.).',
            descriptionEn: 'Tiền Việt Nam Cộng hòa (1955–1975)\nTên currency: Đồng Việt Nam (đôi when gọi is Đồng VNCH or Đồng Sài Gòn).\nNgày issued: 22/9/1955 (chính thức circulated larger copper Đông Dương with tỷ lệ 1 copper VNCH = 1 copper Đông Dương).\nCơ mandarin issued: Ngân hàng Quốc gia Việt Nam (National Bank of Vietnam), trụ sat tại Sài Gòn.\nKhu vực circulated: Toàn miền Nam Việt Nam (from vĩ tuyến 17 toutt anby).\n\nCác denomination:\nGiwho đoạn đầu (1955–1963): 1 copper, 5 copper, 10 copper, 20 copper, 50 copper, 100 copper, 200 copper, 500 copper.\nGiwho đoạn after (1964–1975): has thêm 1000 copper, 5000 copper, 10.000 copper.\n\nChất liệu and technique in:\n- In tại the xưatng at Mỹ, Anh, Nhật, or Philippines with công nghệ hiện đại.\n- Giấy cotlargen high cấp, has sợi chống giả, watermark.\n- Màu sắc tươi sáng, thiết kế according large phong theh phương Tây.\n\nHình ảnh on currency:\n- Mặt before: Chân dung the nhân vật hislargery Việt Nam (Ngô Quyền, Trần Hưng Đạo, Nguyễn Huệ, v.v.), đôi when is hình ảnh lãnh đạo đương time.\n- Mặt after: Danh lam thắng cảnh, công trình kiến trúc (Chợ Bến Thành, cầu Trường Tiền, đền Ngọc Sơn, cảnh copper ruộng, tàu threey, v.v.).'
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
              'https://drive.google.com/thumbnail?id=1UqwrYNgibYyFQoztid5p7HXlWKGhvgz6&sz=w1000'
            ],
            description: 'Trước thời kỳ Việt Nam sử dụng tiền polymer là các tờ tiền giấy cotton có mệnh giá 10.000 và 20.000 được in năm 1990, tờ 50.000 được phát hành từ 15/10/1994 còn tờ 100.000 từ ngày 1/9/2000.\n\nNgày phát hành: 02/5/1992\n\n- Kích thước 120mm x 59mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: nâu đen.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 100 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Hình ảnh tháp Phổ Minh. Mệnh giá 100 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: 'Trước period Việt Nam use currency polymer is the note paper money cotlargen has denomination 10.000 and 20.000 was in year 1990, note 50.000 was issued from 15/10/1994 still note 100.000 from ngày 1/9/2000.\n\nNgày issued: 02/5/1992\n\n- Kích thước 120mm x 59mm.\n\n- Giấy in: Cotlargen.\n\n- Màu sắc: nâu đen.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 100 copper by chữ and số – Hình toutng trí dân gian & patterns lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Hình ảnh tháp Phổ Minh. Mệnh giá 100 copper by chữ and số – Hình toutng trí dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-2',
            images: [
              'https://drive.google.com/thumbnail?id=19AiTBxzRgBU172HSeZyJ0pAAsnMTXa5v&sz=w1000'
            ],
            description: '- Ngày phát hành: 30/9/1987\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy phát hành: Cotton.\n\n- Màu sắc: nâu đỏ.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 200 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Phong cảnh: Sản xuất nông nghiệp. Mệnh giá 200 đồng bằng chữ và số – Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Ngày issued: 30/9/1987\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy issued: Cotlargen.\n\n- Màu sắc: nâu đỏ.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy.- Chân dung Chủ tịch Hồ Chí Minh – Mệnh giá 200 copper by chữ and số – Hình toutng trí dân gian & patterns lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” – Phong cảnh: Sản xuất nông ninscribedệp. Mệnh giá 200 copper by chữ and số – Hình toutng trí dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-3',
            images: [
              'https://drive.google.com/thumbnail?id=1sVmc1C1ZoHAH4Ebk35knf4Bl6xSxtkqp&sz=w1000'
            ],
            description: '- Ngày phát hành: 15/8/1989\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: đỏ sen.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\nMặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Cảng Hải Phòng. Mệnh giá 500 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Ngày issued: 15/8/1989\n\n- Kích thước: 130mm x 65mm.\n\n- Giấy in: Cotlargen.\n\n- Màu sắc: đỏ sen.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.\n\nMặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Cảng Hải Phòng. Mệnh giá 500 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-4',
            images: [
              'https://drive.google.com/thumbnail?id=1DhA80LBK44whL5d6dIOMO1U4vHCQ8Ca9&sz=w1000'
            ],
            description: '- Ngày phát hành: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: Tím.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 1.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh khu vực khai thác gỗ. Mệnh giá 1.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Ngày issued: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotlargen.\n\n- Màu sắc: Tím.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 1.000 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh khu vực khwho thác gỗ. Mệnh giá 1.000 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-5',
            images: [
              'https://drive.google.com/thumbnail?id=1ou4D-EFUXhbb3rnCSkgKJ4M1hM-j7nIw&sz=w1000'
            ],
            description: '- Ngày phát hành: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: nâu sẫm.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 2.000 đồng bằng chữ và số - Hoa văn dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Phong cảnh: Xưởng dệt. Mệnh giá 2.000 đồng bằng chữ và số - Hoa văn dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Ngày issued: 20/10/1989\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotlargen.\n\n- Màu sắc: nâu sẫm.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 2.000 copper by chữ and số - Hoa văn dân gian & patterns lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Phong cảnh: Xưatng dệt. Mệnh giá 2.000 copper by chữ and số - Hoa văn dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-6',
            images: [
              'https://drive.google.com/thumbnail?id=1t99MGKqNCe4hdEd9ypbp6IfgbfUa7f61&sz=w1000'
            ],
            description: '- Ngày phát hành: 15/01/1993\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotton.\n\n- Màu sắc: xanh đậm.\n\n- Nội dung mặt trước: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 5.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Nhà máy Thủy điện Trị An. Mệnh giá 5.000 đồng bằng chữ và số - Hình trang trí dân gian & họa tiết lưới hiện đại.',
            descriptionEn: '- Ngày issued: 15/01/1993\n\n- Kích thước: 134mm x 65mm.\n\n- Giấy in: Cotlargen.\n\n- Màu sắc: xanh đậm.\n\n- Nội dung obverse side: Dòng chữ “Cộng hòa Xã hội Chủ nghĩa Việt Nam”. Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 5.000 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.\n\n- Mặt bên: Dòng chữ “Ngân hàng Nhà nước Việt Nam” - Hình ảnh Nhà máy Thủy goện Trị An. Mệnh giá 5.000 copper by chữ and số - Hình toutng trí dân gian & patterns lưới hiện đại.'
          },
          {
            id: 'item-4-1-7',
            images: [
              'https://drive.google.com/thumbnail?id=1EGwbOPtcjg4Jhy3-bc2jVH9Lv2FZ_-hu&sz=w1000'
            ],
            description: '- Ngày phát hành: 30/8/2006\n\n- Kích thước: 132mm x 60mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể:Màu nâu đậm trên nền màu vàng xanh.\n\n- Nội dung mặt trước:Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 10.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Cảnh khai thác dầu khí - Mệnh giá 10.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 30/8/2006\n\n- Kích thước: 132mm x 60mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể:Màu nâu đậm on foundation of whichu andng xanh.\n\n- Nội dung obverse side:Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 10.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n- Nội dung reverse side:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Cảnh khwho thác dầu khí - Mệnh giá 10.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
          {
            id: 'item-4-1-8',
            images: [
              'https://drive.google.com/thumbnail?id=139kIJxVcocwINVasQdYf_bBlZhCSF0fy&sz=w1000'
            ],
            description: '- Ngày phát hành: 17/5/2006\n\n- Kích thước: 136mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu xanh lơ đậm.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 20.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Chùa Cầu, Hội An, Quảng Nam - Mệnh giá 20.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 17/5/2006\n\n- Kích thước: 136mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu xanh lơ đậm.\n\n- Nội dung obverse side: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 20.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n- Nội dung reverse side: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Chùa Cầu, Hội An, Quảng Nam - Mệnh giá 20.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
          {
            id: 'item-4-1-9',
            images: [
              'https://drive.google.com/thumbnail?id=1d-yMl22paNYN8sJO9zI3o4wKSttDBhou&sz=w1000'
            ],
            description: '- Ngày phát hành: 17/12/2003\n\n- Kích thước: 140mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu nâu tím đỏ.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 50.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Huế - Mệnh giá 50.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 17/12/2003\n\n- Kích thước: 140mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu nâu tím đỏ.\n\n- Nội dung obverse side: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 50.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n- Nội dung reverse side: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh Huế - Mệnh giá 50.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
          {
            id: 'item-4-1-10',
            images: [
              'https://drive.google.com/thumbnail?id=1f71M0IWdwH3hRS8Y0Q2WUwIxVHEo_UNP&sz=w1000'
            ],
            description: '- Ngày phát hành: 01/9/2004\n\n- Kích thước: 144mm x 65mm.\n\n-Giấy in: giấy Polymer, có độ bền cao, không ảnh hưởng đến môi trường, có yếu tố bảo an đặc biệt như cửa sổ trong suốt, có hình ẩn hoặc hình dập nổi trong cửa sổ.\n\n-Màu sắc: Nhìn tổng thể hoa văn trang trí và nội dung mặt trước và mặt sau màu xanh lá cây đậm.\n\n-Nội dung mặt trước: Dòng chữ \"Cộng hòa xã hội chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 100.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n-Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh văn miếu - Quốc Tử giám - Mệnh giá 100.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 01/9/2004\n\n- Kích thước: 144mm x 65mm.\n\n-Giấy in: giấy Polymer, has độ bền high, not ảnh hưatng large môi trường, has weak tố bảo an đặc biệt like cửa sổ in suốt, has hình ẩn or hình dập nổi in cửa sổ.\n\n-Màu sắc: Nhìn tổng thể hoa văn toutng trí and nội dung obverse side and reverse side whichu xanh lá cây đậm.\n\n-Nội dung obverse side: Dòng chữ \"Cộng hòa society chủ nghĩa Việt Nam\" - Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 100.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n-Nội dung reverse side: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh văn miếu - Quốc Tử giám - Mệnh giá 100.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
          {
            id: 'item-4-1-11',
            images: [
              'https://drive.google.com/thumbnail?id=19OnY5CLKZLKtiQENm3KwWTZh0XPfkLD8&sz=w1000'
            ],
            description: '- Ngày phát hành: 30/8/2006\n\n- Kích thước: 148mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Đỏ nâu.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 200.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh vịnh Hạ Long - Mệnh giá 200.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 30/8/2006\n\n- Kích thước: 148mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Đỏ nâu.\n\n- Nội dung obverse side: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 200.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n- Nội dung reverse side:Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh vịnh Hạ Long - Mệnh giá 200.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
          {
            id: 'item-4-1-12',
            images: [
              'https://drive.google.com/thumbnail?id=1p-U3ZlhZmqQqFqI71qp2oy6Vxoyq_gIn&sz=w1000'
            ],
            description: '- Ngày phát hành: 17/12/2003\n\n- Kích thước: 152mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu lơ tím sẫm.\n\n- Nội dung mặt trước: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.\n\n- Nội dung mặt sau: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh nhà Chủ tịch Hồ Chí Minh ở Kim Liên - Mệnh giá 500.000 đồng bằng chữ và số - Hình trang trí hoa văn dân tộc và hoa văn lưới hiện đại.',
            descriptionEn: '- Ngày issued: 17/12/2003\n\n- Kích thước: 152mm x 65mm.\n\n- Giấy in: Polymer.\n\n- Màu sắc tổng thể: Màu lơ tím sẫm.\n\n- Nội dung obverse side: Dòng chữ \"Cộng hòa Xã hội Chủ nghĩa Việt Nam\" Quốc huy - Chân dung Chủ tịch Hồ Chí Minh - Mệnh giá 500.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.\n\n- Nội dung reverse side: Dòng chữ \"Ngân hàng Nhà nước Việt Nam\" - Phong cảnh house Chủ tịch Hồ Chí Minh at Kim Liên - Mệnh giá 500.000 copper by chữ and số - Hình toutng trí hoa văn dân tộc and hoa văn lưới hiện đại.'
          },
        ],
      },
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
              'https://drive.google.com/thumbnail?id=1z_an3v_SsPL-etd8zvWNq4pNuKpA2r9h&sz=w1000',
              'https://drive.google.com/thumbnail?id=18MrzWUmi6VC9prUk6z6cl0aVMTZuFMUO&sz=w1000'
            ],
            description: 'Đây là quá trình hợp nhất hệ thống tiền tệ của hai miền sau khi đất nước thống nhất.\n\nTại sao phải đổi tiền?\n\nSau ngày 30 tháng 4 năm 1975, Việt Nam đã thống nhất về mặt lãnh thổ, nhưng về kinh tế, vẫn tồn tại hai hệ thống tiền tệ song song:\n\nMiền Bắc: Sử dụng tiền \"Đồng\" của Việt Nam Dân chủ Cộng hòa.\n\nMiền Nam: Vẫn đang lưu hành tiền của chế độ Việt Nam Cộng hòa.\n\nMột quốc gia thống nhất không thể có hai đồng tiền. Việc hợp nhất tiền tệ là bước đi tất yếu để thống nhất hoàn toàn đất nước về mặt kinh tế và nhà nước.\n\nDiễn biến:\n\nBước 1 (1975 - \"Tiền Giải phóng\"): Ngay sau khi tiếp quản, Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam đã phát hành \"tiền Giải phóng\" (còn gọi là \"tiền Ngân hàng Việt Nam\") ở miền Nam để thay thế đồng tiền của chế độ cũ. Đây là một bước đệm chuyển tiếp.\n\nBước 2 (1978 - \"Đồng Thống nhất\"): Nhà nước tiến hành một cuộc đổi tiền quy mô lớn trên cả nước để thu hồi toàn bộ tiền ở miền Bắc và \"tiền Giải phóng\" ở miền Nam, thay thế bằng một loại tiền duy nhất gọi là \"Đồng\" (thường được gọi là \"Đồng Thống nhất\"). Từ thời điểm này, cả nước Việt Nam chỉ sử dụng chung một đơn vị tiền tệ.',
            descriptionEn: 'Đây is largeo trình hợp most monetary system of hwho miền after when country thống most.\n\nTại why must đổi currency?\n\nSau ngày 30 tháng 4 year 1975, Việt Nam have thống most about mặt lãnh thổ, but about economy, vẫn exist hwho monetary system song song:\n\nMiền Bắc: Sử dụng currency \"Đồng\" of Việt Nam Dân chủ Cộng hòa.\n\nMiền Nam: Vẫn đang circulated currency of chế độ Việt Nam Cộng hòa.\n\nMột quốc gia thống most not thể has hwho consideredn. Việc hợp most currency tệ is bước go tất weak large thống most hoàn largeàn country about mặt economy and house nước.\n\nDiễn biến:\n\nBước 1 (1975 - \"Tiền Giải phóng\"): Ngay after when tiếp quản, Chính phủ Cách mạng lâm time Cộng hòa miền Nam Việt Nam have issued \"currency Giải phóng\" (still gọi is \"currency Ngân hàng Việt Nam\") at miền Nam large larger thế consideredn of chế độ old. Đây is one bước đệm chuyển tiếp.\n\nBước 2 (1978 - \"Đồng Thống most\"): Nhà nước tiến hành one cuộc đổi currency quy mô big on cả nước large withdoutw entire currency at miền Bắc and \"currency Giải phóng\" at miền Nam, larger thế by one type of currency duy most gọi is \"Đồng\" (thường was gọi is \"Đồng Thống most\"). Từ time goểm this, cả nước Việt Nam chỉ use common one đơn vị currency tệ.'
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
              'https://drive.google.com/thumbnail?id=1DMQl9d_fyocluRi_Wfo2rPoIPOPeUH7X&sz=w1000'
            ],
            description: 'Đây là một trong những nỗ lực cải cách kinh tế quan trọng (và thất bại) ngay trước thềm Đổi Mới 1986. Việc đổi tiền 10:1 chỉ là một phần của một kế hoạch lớn hơn.\n\nTại sao phải đổi tiền? (Bối cảnh)\n\nNền kinh tế Việt Nam lúc này đang trong tình trạng khủng hoảng nghiêm trọng, cơ chế \"bao cấp\" bộc lộ nhiều yếu kém.\n\nLạm phát phi mã: Lạm phát ở mức ba con số, đồng tiền mất giá cực kỳ nhanh chóng. Việc cầm tiền với mệnh giá quá lớn nhưng sức mua lại quá nhỏ gây bất tiện và thể hiện sự bất ổn của kinh tế.\n\nMục tiêu của cải cách \"Giá - Lương - Tiền\": Nhà nước muốn xóa bỏ cơ chế bao cấp, tính toán lại toàn bộ hệ thống giá cả (Giá), cải cách hệ thống lương (Lương), và phát hành đồng tiền mới (Tiền) để ổn định kinh tế.\n\nDiễn biến (Việc đổi 10 đồng cũ = 1 đồng mới):\n\nĐây về bản chất là một hành động \"xóa bớt số 0\" trên đồng tiền.\n\nMục đích là làm cho đồng tiền có giá trị \"gọn\" hơn, hy vọng ổn định tâm lý thị trường và kiểm soát lạm phát.\n\nKết quả: Cuộc cải cách này đã thất bại. Việc đổi tiền không giải quyết được gốc rễ của lạm phát (sản xuất không phát triển), mà việc in thêm tiền mới để trả lương theo hệ thống mới đã lập tức gây ra một đợt siêu lạm phát còn nghiêm trọng hơn trong các năm 1986-1988.\n\nÝ nghĩa: Thất bại của cuộc cải cách \"Giá - Lương - Tiền\" 1985 chính là một trong những lý do cấp bách, đẩy nhanh quyết tâm của Việt Nam phải tiến hành công cuộc Đổi Mới toàn diện vào năm 1986.',
            descriptionEn: 'Đây is one of the nỗ lực cải theh economy important (and fwholed) ngay before thềm Đổi Mới 1986. Việc đổi currency 10:1 chỉ is one phần of one kế hoạch big more.\n\nTại why must đổi currency? (Bối cảnh)\n\nNền economy Việt Nam lúc this đang in tình trạng khủng hoảng ninscribedêm trọng, cơ chế \"threeo cấp\" bộc lộ many weak kém.\n\nLạm phát phi mã: Lạm phát at mức three con số, consideredn mất giá cực kỳ fast chóng. Việc cầm currency with denomination largeo big but sức mua agwhon largeo small gây bất tiện and represent sự bất ổn of economy.\n\nMục tiêu of cải theh \"Giá - Lương - Tiền\": Nhà nwish xóa bỏ cơ chế threeo cấp, tính largeán agwhon entire hệ thống giá cả (Giá), cải theh hệ thống lương (Lương), and issued consideredn new (Tiền) large ổn định economy.\n\nDiễn biến (Việc đổi 10 copper old = 1 copper new):\n\nĐây about bản chất is one hành động \"xóa bớt số 0\" on consideredn.\n\nMục đích is ism for consideredn has giá trị \"gọn\" more, hy vọng ổn định tâm lý thị trường and kiểm soát lạm phát.\n\nKết quả: Cuộc cải theh this have fwholed. Việc đổi currency not giải quyết was gốc rễ of lạm phát (sản xuất not development), which việc in thêm currency new large trả lương according large hệ thống new have lập tức gây out one đợt siêu lạm phát still ninscribedêm trọng more in the year 1986-1988.\n\nÝ nghĩa: Thất bại of cuộc cải theh \"Giá - Lương - Tiền\" 1985 chính is one of the lý by cấp bách, đẩy fast quyết tâm of Việt Nam must tiến hành công cuộc Đổi Mới largeàn diện anby year 1986.'
          },
        ],
      },
    ],
  },
];
