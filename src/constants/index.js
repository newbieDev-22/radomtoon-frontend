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

export const mockImgStatsBar =
  "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/bmt7dsxiwpfjlnxpcazs";
export const mockDataStatsBar = [
  { id: 1, amount: 28888, title: "projects supported" },
  { id: 2, amount: 10000000, title: "towards ideas", currency: "THB" },
  { id: 3, amount: 400000, title: "contributions" },
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

export const PROVINCE_MAP_MAPPING = {
  1: "AmnatCharoen",
  2: "AngThong",
  3: "Bangkok",
  4: "BuengKan",
  5: "Buriram",
  6: "Chachoengsao",
  7: "Chainat",
  8: "Chaiyaphum",
  9: "Chanthaburi",
  10: "ChiangMai",
  11: "ChiangRai",
  12: "Chonburi",
  13: "Chumphon",
  14: "Kalasin",
  15: "KampaengPhet",
  16: "Kanchanaburi",
  17: "KhonKaen",
  18: "Krabi",
  19: "Lampang",
  20: "Lamphun",
  21: "Loei",
  22: "Lopburi",
  23: "MaeHongSon",
  24: "MahaSarakham",
  25: "Mukdahan",
  26: "NakhonNayok",
  27: "NakhonPathom",
  28: "NakhonPhanom",
  29: "NakhonRatchasima",
  30: "NakhonSawan",
  31: "NakhonSiThammarat",
  32: "Nan",
  33: "Narathiwat",
  34: "NongBuaLamphu",
  35: "NongKhai",
  36: "Nonthaburi",
  37: "PathumThani",
  38: "Pattani",
  39: "Phangnga",
  40: "Phatthalung",
  41: "Phayao",
  42: "Phetchabun",
  43: "Phetchaburi",
  44: "Phichit",
  45: "Phitsanulok",
  46: "PhraNakhonSiAyudhya",
  47: "Phrae",
  48: "Phuket",
  49: "Prachinburi",
  50: "PrachuapKhilikhan",
  51: "Ranong",
  52: "Ratchaburi",
  53: "Rayong",
  54: "RoiEt",
  55: "SaKaeo",
  56: "SakonNakhon",
  57: "SamutPrakarn",
  58: "SamutSakhon",
  59: "SamutSongkham",
  60: "Saraburi",
  61: "Satun",
  62: "SiSaket",
  63: "Singburi",
  64: "Songkhla",
  65: "Sukhothai",
  66: "Suphanburi",
  67: "SuratThani",
  68: "Surin",
  69: "Tak",
  70: "Trang",
  71: "Trad",
  72: "UbonRatchathani",
  73: "UdonThani",
  74: "UthaiThani",
  75: "Uttaradit",
  76: "Yala",
  77: "Yasothon",
};

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

export const CATEGORIES_TYPE_MAP_NAME = {
  1: "ART",
  2: "COMICS",
  3: "CRAFTS",
  4: "DANCE",
  5: "DESIGN",
  6: "FASHION",
  7: "FILM",
  8: "GAMES",
  9: "MUSIC",
  10: "TECHNOLOGY",
};
export const CATEGORIES_HUE_MAP = {
  1: "hue-rotate-0",
  2: "hue-rotate-30",
  3: "hue-rotate-60",
  4: "hue-rotate-90",
  5: "-hue-rotate-30",
  6: "-hue-rotate-60",
  7: "-hue-rotate-90",
  8: "-hue-rotate-15",
  9: "hue-rotate-15",
  10: "hue-rotate-180",
};
export const CATEGORIES_HUE_RESET = {
  1: "hue-rotate-0",
  2: "-hue-rotate-30",
  3: "-hue-rotate-60",
  4: "-hue-rotate-90",
  5: "hue-rotate-30",
  6: "hue-rotate-60",
  7: "hue-rotate-90",
  8: "hue-rotate-15",
  9: "-hue-rotate-15",
  10: "-hue-rotate-180",
};

export const MIN_DEADLINE_DAYS = 15;

export const MILESTONE_STATUS = {
  1: "Planning",
  2: "Prototype",
  3: "Production",
};

export const MONTH_NAME_MAP = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
