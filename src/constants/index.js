export const STATUS_PRODUCT_THEME = {
  PENDING: {
    text: "Waiting approval",
    bg: "bg-yellow-300",
    color: "text-yellow-400",
  },
  IN_PROGRESS: {
    text: "Project in progress",
    bg: "bg-creator-normal",
    color: "text-creator-saturate",
  },
  REJECTED: { text: "Rejected", bg: "bg-orange-300", color: "text-orange-500" },
  FAILED: { text: "Failed", bg: "bg-red-300", color: "text-red-500" },
  SUCCESS: { text: "Success", bg: "bg-green-300", color: "text-green-400" },
  DRAFTING: { text: "Drafting project", bg: "bg-gray-300", color: "text-gray-400" },
};

export const STATUS_PRODUCT = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
  DRAFTING: "DRAFTING",
};

export const widthMap = {
  small: "w-[300px]",
  medium: "w-80",
  large: "w-96",
};

export const heightMap = {
  small: "h-48",
  medium: "h-60",
  large: "h-[260px]",
};

export const colorMap = {
  primary: "hover:bg-blue-500",
  secondary: "hover:bg-green-500",
  danger: "hover:bg-red-500",
};

export const progressBar = {
  small: "w-32",
  medium: "w-48",
  large: "w-32",
};

export const textMap = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-lg",
};

export const bgBtnMap = {
  "radomtoon-dark": "bg-radomtoon-dark ",
  "radomtoon-bright": "bg-radomtoon-bright",
  "creator-normal": "bg-creator-normal",
  "creator-saturate": "bg-creator-saturate",
  "supporter-normal": "bg-supporter-normal",
  "supporter-saturate": "bg-supporter-saturate",
  white: "bg-white ",
  black: "bg-black ",
  red: "bg-red-300 hover:bg-red-500",
  green: "bg-green-300 hover:bg-green-500",
  yellow: "bg-yellow-300 hover:bg-yellow-500",
  none: "bg-none ",
};

export const borderBtnMap = {
  "radomtoon-dark": "border-radomtoon-dark ",
  "radomtoon-bright": "border-radomtoon-bright",
  "creator-normal": "border-creator-normal",
  "creator-saturate": "border-creator-saturate",
  "supporter-normal": "border-supporter-normal",
  "supporter-saturate": "border-supporter-saturate",
  white: "border-white ",
  black: "border-black ",
  red: "border-red-300 hover:border-red-500",
  green: "border-green-300 hover:border-green-500",
  none: "border-none ",
};

export const DELIVERY_STATUS = {
  PENDING: "PENDING",
  DELIVERED: "DELIVERED",
};

export const colorBtnMap = {
  "creator-normal": "bg-creator-normal",
  "creator-saturate": "bg-creator-saturate",
  "supporter-normal": "bg-supporter-normal",
  "supporter-saturate": "bg-supporter-saturate",
  white: "text-white hover:text-supporter-saturate",
  black: "text-black ",
};

export const widthBtnMap = {
  full: "w-full",
  40: "w-40",
  60: "w-60",
  20: "w-20",
};

export const heightBtnMap = {
  none: "",
  full: "h-full",
  11: "h-11",
  14: "h-14",
  20: "h-20",
  60: "h-60",
};

export const USER_ROLE = {
  GUEST: "GUEST",
  SUPPORTER: "SUPPORTER",
  CREATOR: "CREATOR",
  ADMIN: "ADMIN",
};

export const subPageMap = {
  STORY: "STORY",
  MILESTONE: "MILESTONE",
  REWARD: "REWARD",
  FORUM: "FORUM",
};

export const geoDataMap = {
  AMNATCHAROEN: "AMNATCHAROEN",
  ANGTHONG: "ANGTHONG",
  BANGKOK: "BANGKOK",
  BURIRAM: "BURIRAM",
  CHACHOENGSAO: "CHACHOENGSAO",
  CHAINAT: "CHAINAT",
  CHAIYAPHUM: "CHAIYAPHUM",
  CHANTHABURI: "CHANTHABURI",
  CHIANGMAI: "CHIANGMAI",
  CHIANGRAI: "CHIANGRAI",
  CHONBURI: "CHONBURI",
  CHUMPHON: "CHUMPHON",
  KALASIN: "KALASIN",
  KAMPAENGPHET: "KAMPAENGPHET",
  KANCHANABURI: "KANCHANABURI",
  KHONKAEN: "KHONKAEN",
  KRABI: "KRABI",
  LAMPANG: "LAMPANG",
  LAMPHUN: "LAMPHUN",
  LOEI: "LOEI",
  LOPBURI: "LOPBURI",
  MAEHONGSON: "MAEHONGSON",
  MAHASARAKHAM: "MAHASARAKHAM",
  MUKDAHAN: "MUKDAHAN",
  NAKHONNAYOK: "NAKHONNAYOK",
  NAKHONPATHOM: "NAKHONPATHOM",
  NAKHONPHANOM: "NAKHONPHANOM",
  NAKHONRATCHASIMA: "NAKHONRATCHASIMA",
  NAKHONSAWAN: "NAKHONSAWAN",
  NAKHONSITHAMMARAT: "NAKHONSITHAMMARAT",
  NAN: "NAN",
  NARATHIWAT: "NARATHIWAT",
  NONGBUALAMPHU: "NONGBUALAMPHU",
  NONGKHAI: "NONGKHAI",
  NONTHABURI: "NONTHABURI",
  PATHUMTHANI: "PATHUMTHANI",
  PATTANI: "PATTANI",
  PHACHINBURI: "PHACHINBURI",
  PHANGNGA: "PHANGNGA",
  PHATTHALUNG: "PHATTHALUNG",
  PHAYAO: "PHAYAO",
  PHETCHABUN: "PHETCHABUN",
  PHETCHABURI: "PHETCHABURI",
  PHICHIT: "PHICHIT",
  PHITSANULOK: "PHITSANULOK",
  PHRANAKHONSIAYUDHYA: "PHRANAKHONSIAYUDHYA",
  PHRAE: "PHRAE",
  PHUKET: "PHUKET",
  PRACHUAPKHILIKHAN: "PRACHUAPKHILIKHAN",
  RANONG: "RANONG",
  RATCHABURI: "RATCHABURI",
  RAYONG: "RAYONG",
  ROIET: "ROIET",
  SAKAEO: "SAKAEO",
  SAKONNAKHON: "SAKONNAKHON",
  SAMUTPRAKARN: "SAMUTPRAKARN",
  SAMUTSAKHON: "SAMUTSAKHON",
  SAMUTSONGKHAM: "SAMUTSONGKHAM",
  SARABURI: "SARABURI",
  SATUN: "SATUN",
  SISAKET: "SISAKET",
  SINGBURI: "SINGBURI",
  SONGKHLA: "SONGKHLA",
  SUKHOTHAI: "SUKHOTHAI",
  SUPHANBURI: "SUPHANBURI",
  SURATTHANI: "SURATTHANI",
  SURIN: "SURIN",
  TAK: "TAK",
  TRAD: "TRAD",
  TRANG: "TRANG",
  UBONRATCHATHANI: "UBONRATCHATHANI",
  UDONTHANI: "UDONTHANI",
  UTHAITHANI: "UTHAITHANI",
  UTTARADIT: "UTTARADIT",
  YALA: "YALA",
  YASOTHON: "YASOTHON",
};

export const mockImage =
  "https://i.kickstarter.com/assets/044/665/040/4701c73df8b68838ac143981ab5aa350_original.jpg?anim=false&fit=cover&gravity=auto&height=576&origin=ugc&q=92&width=1024&sig=Icl7GqhaIdWe9RTm9tgYXQvkIktgy3wTpAhAI75efqQ%3D";
export const mockAvatar = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";
export const mockProjectName = "Project name";
export const mockCreatorName = "creator name";
export const daysLeft = 23;
export const loopCard = 6;
export const mockVid = "https://www.youtube.com/watch?v=TRGxbp-jlCs";
export const mockContent = `  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`;

export const mockImgStatsBar =
  "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs";
export const mockDataStatsBar = [
  { id: 1, amount: 28888, title: "projects supported" },
  { id: 2, amount: 10000000, title: "towards ideas", currency: "THB" },
  { id: 3, amount: 400000, title: "contributions" },
];


export const PROVINCE_LIST = [
  "Amnat Charoen",
  "Ang Thong",
  "Bangkok",
  "Bueng Kan",
  "Buri Ram",
  "Chachoengsao",
  "Chai Nat",
  "Chaiyaphum",
  "Chanthaburi",
  "Chiang Mai",
  "Chiang Rai",
  "Chonburi",
  "Chumphon",
  "Kalasin",
  "Kamphaeng Phet",
  "Kanchanaburi",
  "Khon Kaen",
  "Krabi",
  "Lampang",
  "Lamphun",
  "Loei",
  "Lopburi",
  "Mae Hong Son",
  "Maha Sarakham",
  "Mukdahan",
  "Nakhon Nayok",
  "Nakhon Pathom",
  "Nakhon Phanom",
  "Nakhon Ratchasima",
  "Nakhon Sawan",
  "Nakhon Si Thammarat",
  "Nan",
  "Narathiwat",
  "Nong Bua Lam Phu",
  "Nong Khai",
  "Nonthaburi",
  "Pathum Thani",
  "Pattani",
  "Phangnga",
  "Phatthalung",
  "Phayao",
  "Phetchabun",
  "Phetchaburi",
  "Phichit",
  "Phitsanulok",
  "Phra Nakhon Si Ayutthaya",
  "Phrae",
  "Phuket",
  "Prachin Buri",
  "Prachuap Khiri Khan",
  "Ranong",
  "Ratchaburi",
  "Rayong",
  "Roi Et",
  "Sa Kaeo",
  "Sakon Nakhon",
  "Samut Prakan",
  "Samut Sakhon",
  "Samut Songkhram",
  "Saraburi",
  "Satun",
  "Si Sa Ket",
  "Sing Buri",
  "Songkhla",
  "Sukhothai",
  "Suphan Buri",
  "Surat Thani",
  "Surin",
  "Tak",
  "Trang",
  "Trat",
  "Ubon Ratchathani",
  "Udon Thani",
  "Uthai Thani",
  "Uttaradit",
  "Yala",
  "Yasothon",
];

export const PROVINCE_MAP = [
  { id: 1, name: "Amnat Charoen" },
  { id: 2, name: "Ang Thong" },
  { id: 3, name: "Bangkok" },
  { id: 4, name: "Bueng Kan" },
  { id: 5, name: "Buri Ram" },
  { id: 6, name: "Chachoengsao" },
  { id: 7, name: "Chai Nat" },
  { id: 8, name: "Chaiyaphum" },
  { id: 9, name: "Chanthaburi" },
  { id: 10, name: "Chiang Mai" },
  { id: 11, name: "Chiang Rai" },
  { id: 12, name: "Chonburi" },
  { id: 13, name: "Chumphon" },
  { id: 14, name: "Kalasin" },
  { id: 15, name: "Kamphaeng Phet" },
  { id: 16, name: "Kanchanaburi" },
  { id: 17, name: "Khon Kaen" },
  { id: 18, name: "Krabi" },
  { id: 19, name: "Lampang" },
  { id: 20, name: "Lamphun" },
  { id: 21, name: "Loei" },
  { id: 22, name: "Lopburi" },
  { id: 23, name: "Mae Hong Son" },
  { id: 24, name: "Maha Sarakham" },
  { id: 25, name: "Mukdahan" },
  { id: 26, name: "Nakhon Nayok" },
  { id: 27, name: "Nakhon Pathom" },
  { id: 28, name: "Nakhon Phanom" },
  { id: 29, name: "Nakhon Ratchasima" },
  { id: 30, name: "Nakhon Sawan" },
  { id: 31, name: "Nakhon Si Thammarat" },
  { id: 32, name: "Nan" },
  { id: 33, name: "Narathiwat" },
  { id: 34, name: "Nong Bua Lam Phu" },
  { id: 35, name: "Nong Khai" },
  { id: 36, name: "Nonthaburi" },
  { id: 37, name: "Pathum Thani" },
  { id: 38, name: "Pattani" },
  { id: 39, name: "Phangnga" },
  { id: 40, name: "Phatthalung" },
  { id: 41, name: "Phayao" },
  { id: 42, name: "Phetchabun" },
  { id: 43, name: "Phetchaburi" },
  { id: 44, name: "Phichit" },
  { id: 45, name: "Phitsanulok" },
  { id: 46, name: "Phra Nakhon Si Ayutthaya" },
  { id: 47, name: "Phrae" },
  { id: 48, name: "Phuket" },
  { id: 49, name: "Prachin Buri" },
  { id: 50, name: "Prachuap Khiri Khan" },
  { id: 51, name: "Ranong" },
  { id: 52, name: "Ratchaburi" },
  { id: 53, name: "Rayong" },
  { id: 54, name: "Roi Et" },
  { id: 55, name: "Sa Kaeo" },
  { id: 56, name: "Sakon Nakhon" },
  { id: 57, name: "Samut Prakan" },
  { id: 58, name: "Samut Sakhon" },
  { id: 59, name: "Samut Songkhram" },
  { id: 60, name: "Saraburi" },
  { id: 61, name: "Satun" },
  { id: 62, name: "Si Sa Ket" },
  { id: 63, name: "Sing Buri" },
  { id: 64, name: "Songkhla" },
  { id: 65, name: "Sukhothai" },
  { id: 66, name: "Suphan Buri" },
  { id: 67, name: "Surat Thani" },
  { id: 68, name: "Surin" },
  { id: 69, name: "Tak" },
  { id: 70, name: "Trang" },
  { id: 71, name: "Trat" },
  { id: 72, name: "Ubon Ratchathani" },
  { id: 73, name: "Udon Thani" },
  { id: 74, name: "Uthai Thani" },
  { id: 75, name: "Uttaradit" },
  { id: 76, name: "Yala" },
  { id: 77, name: "Yasothon" },
];

export const IS_CREATOR_ACCEPT_STATUS = {
  PENDING: 1,
  ACCEPTED: 2,
};

export const APPROVAL_STATUS_ID = {
  PENDING: 1,
  FAILED: 2,
  SUCCESS: 3,
};

export const PRODUCT_STATUS = {
  PENDING: "PENDING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
};

export const PRODUCT_STATUS_ID = {
  PENDING: 1,
  FAILED: 2,
  SUCCESS: 3,
};
export const CATEGORIES_TYPE = [
  { id: 1, name: "ART" },
  { id: 2, name: "COMICS" },
  { id: 3, name: "CRAFTS" },
  { id: 4, name: "DANCE" },
  { id: 5, name: "DESIGN" },
  { id: 6, name: "FASHION" },
  { id: 7, name: "FILM" },
  { id: 8, name: "GAMES" },
  { id: 9, name: "MUSIC" },
  { id: 10, name: "TECHNOLOGY" },
];

export const MIN_DEADLINE_DAYS = 15;
