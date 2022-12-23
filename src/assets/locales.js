export const langsList = {
  RU: 0,
  "O'ZB": 1,
  ENG: 2,
};

const checkFebDaysCount = () => {
    const year = new Date().getFullYear()
    const leap = new Date(year, 1, 29).getDate() === 29;
    return leap ? 29 : 28
}

export const globalLocales = {
  signIn: {
    header: [
      'Выберите ЭЦП-ключ для <br/> входа в систему',
      'Tizimga kirish kalitini <br/> tanlang',
      'Select the digital key for <br/> authorization',
    ],
    inn: ['ИНН', 'JShShIR', 'ITN'],
    pinfl: ['ПИНФЛ', 'STIR', 'PINI'],
  },
  logIn: {
    heading: [
      'Регистрация суммы <br/> TaxFree иностранного гражданина',
      'Chet el fuqarosini <br/> TaxFree summasini ro’yxatga olish',
      "Registration of a foreign <br/> citizen's TaxFree amount",
    ],
    formLabel: ['Номер телефона', 'Telefon raqam', 'Phone number'],
    buttonLabel: ['Подтвердить', 'Davom etish', 'Confirm'],
  },
  passportScan: {
    heading: [
      'Идентификация иностранного <br/> гражданина',
      'Chet el fuqarosining shaxsini <br/> tasdiqlash',
      'Confirmation of the identity of a <br/> foreign citizen',
    ],
    mainHeading: [
      'Положите документ, подтверждающий вашу личность <br/> в открытом виде на устройство сканирования',
      'Shaxsingizni tasdiqlovchi xujjatni ochiq holda <br/> skanerlash qurilmasiga qo`ying',
      'Put a document confirming your identity in an <br/> open form on the scanner',
    ],
  },
  ticketScan: {
    heading: [
      'Проверка посадочного талона <br/> иностранного гражданина',
      'Chet el fuqarosining  bort <br/> talonini tekshirish',
      'Foreign citizen <br/> boarding ticket check',
    ],
    mainHeading: [
      'Пожалуйста, предъявите ваш посадочный талон',
      'Iltimos, bort taloningizni ko`rsating',
      'Please show your boarding pass',
    ],
  },
  infoPage: {
    heading: ['Личные данные', "Ma'lumot", 'Personal info'],
    fio: ['ФИО', 'FISh', ''],
    passport: ['Паспорт', 'Passport', 'Passport'],
    visa: ['Visa', 'Visa', 'Visa'],
    status: ['Статус', 'Holati', 'Status'],
    overall: ['Общая сумма покупок', 'Jami xaridlar summasi', 'Total purchase amount'],
    checksCount: ['Количество чеков', 'Cheklar soni', 'Number of checks'],
    countedSum: [
      'Расчетная сумма кешбека',
      'Keshbek hisoblangan summasi ',
      'Estimated cahcback amount',
    ],
    approvedSum: [
      'Подтверждено к начислению',
      'To’lovga tasdiqlangan',
      'Confirmed for payment',
    ],
    formLabel: [
      'Наименование товара/ИКПУ-код',
      'Mahsulot nomi/MXIK kodi',
      'Name of product/PSIC code',
    ],
    controls: {
      all: ['Все', 'Hammasi', 'All'],
      approved: ['Подтверждено', 'Tasdiqlngan', 'Confirmed'],
      declined: ['Отказано', 'Rad etilgan', 'Declined'],
    },
    table: {
      productName: ['Наименование товара', 'Mahsulot nomi', 'Name of product'],
      fiscalNum: ['ИКПУ', 'MXIK', 'PSIC'],
      price: ['Стоимость', 'Mahsulot narxi', 'Price'],
      tfSum: ['Сумма Tax Free', 'Tax Free summasi', 'Tax Free amount'],
      available: ['Доступность', 'Mavjudligi', 'Availability'],
    },
  },
  stats: {
    sum: ['Сумма Tax Free', 'Tax Free summasi', 'Tax Free amount'],
    count: ['Количество пользователей', 'Foydalanuvchilar soni', 'Users count'],
    statuses: {
      all: ['Итого TaxFree', 'Jami rasmiylashtirilgan', 'Overall TaxFree'],
      approved: ['Подтверждено', "To'liq tasdiqlangan", 'Confirmed'],
      partly: ['Подтверждено частично', 'Jarayon tugatilmagan', 'Partly confirmed'],
      declined: ['Отказано', "Tasdig'ini topmagan", 'Declined'],
      overdue: ['Просрочено', 'Muddati o’tib ketgan', 'Overdue'],
      notHandled: ['Не обработано', 'Murojaat etilmagan', 'Not addressed'],
    },
    ticketScan: {
        heading: [
            "Проверка посадочного талона <br/> иностранного гражданина",
            "Chet el fuqarosining  bort <br/> talonini tekshirish",
            "Foreign citizen <br/> boarding ticket check"
        ],
        mainHeading: [
            "Пожалуйста, предъявите ваш посадочный талон",
            "Iltimos, bort taloningizni ko`rsating",
            "Please show your boarding pass"
        ]
    },
    infoPage: {
        heading: [
            "Личные данные",
            "Ma'lumot",
            "Personal info"
        ],
        fio: [
            "ФИО",
            "FISh",
            ""
        ],
        passport: [
            "Паспорт",
            "Passport",
            "Passport"
        ],
        visa: [
            "Visa",
            "Visa",
            "Visa"
        ],
        status: [
            "Статус",
            "Holati",
            "Status"
        ],
        overall: [
            "Общая сумма покупок",
            "Jami xaridlar summasi",
            "Total purchase amount"
        ],
        checksCount: [
            "Количество чеков",
            "Cheklar soni",
            "Number of checks"
        ],
        countedSum: [
            "Расчетная сумма кешбека",
            "Keshbek hisoblangan summasi ",
            "Estimated cahcback amount"
        ],
        approvedSum: [
            "Подтверждено к начислению",
            "To’lovga tasdiqlangan",
            "Confirmed for payment"
        ],
        formLabel: [
            "Наименование товара/ИКПУ-код",
            "Mahsulot nomi/MXIK kodi",
            "Name of product/PSIC code"
        ],
        controls: {
            all: [
                "Все",
                "Hammasi",
                "All"
            ],
            approved: [
                "Подтверждено",
                "Tasdiqlngan",
                "Confirmed"
            ],
            declined: [
                "Отказано",
                "Rad etilgan",
                "Declined"
            ]
        },
        table: {
            productName: [
                "Наименование товара",
                "Mahsulot nomi",
                "Name of product"
            ],
            fiscalNum: [
                "ИКПУ",
                "MXIK",
                "PSIC"
            ],
            price: [
                "Стоимость",
                "Mahsulot narxi",
                "Price"
            ],
            tfSum: [
                "Сумма Tax Free",
                "Tax Free summasi",
                "Tax Free amount"
            ],
            available: [
                "Доступность",
                "Mavjudligi",
                "Availability"
            ]
        }
    },
    interactive: {
        download: [
            "Скачать",
            "Yuklash",
            "Download"
        ],
        selectFormat: [
            "Выберите формат",
            "Formatni tanlang",
            "Select format"
        ]
    },
    months: [
        { days: 31, month: ["Январь", "Yanvar", "January"] },
        { days: checkFebDaysCount , month: ["Февраль", "Fevral", "February"] },
        { days: 31, month: ["Март", "Mart", "March"] },
        { days: 30, month: ["Апрель", "Aprel", "April"] },
        { days: 31, month: ["Май", "May", "May"] },
        { days: 30, month: ["Июнь", "Iyun", "June"] },
        { days: 31, month: ["Июль", "Iyul", "July"] },
        { days: 31, month: ["Август", "Avgust", "August"] },
        { days: 30, month: ["Сентябрь", "Sentabr", "September"] },
        { days: 31, month: ["Октябрь", "Oktabr", "October"] },
        { days: 30, month: ["Ноябрь", "Noyabr", "November"] },
        { days: 31, month: ["Декабрь", "Dekabr", "December"] }
    ],
    sum: [
        "Сумма Tax Free",
        "Tax Free summasi",
        "Tax Free amount"
    ],
    count: [
        "Количество пользователей",
        "Foydalanuvchilar soni",
        "Users count"
    ],
    statuses: {
        all: [
            "Итого введено",
            "Jami rasmiylashtirilgan",
            "Overall TaxFree"
        ],
        approved: [
            "Полностью подтверждено",
            "To'liq tasdiqlangan",
            "Fully confirmed"
        ],
        partly: [
            "Процесс не завершен",
            "Jarayon tugatilamagan",
            "Partly confirmed"
        ],
        declined: [
            "Не подтверждено",
            "Tasdig’ini topmaganlar",
            "Declined"
        ],
        overdue: [
            "Просрочено",
            "Muddati o’tib ketgan",
            "Overdue"
        ],
        notHandled: [
            "Не обработано",
            "Murojaat etilmagan",
            "Not addressed"
        ]
    },
    phoneLabel: [
        "Номер телефона",
        "Telefon raqami",
        "Phone number"
    ],
    yearLabel: [
        "Год",
        "Yil",
        "Year"
    ],
    monthLabel: [
        "Месяц",
        "Oy",
        "Month"
    ],
    dayLabel: [
        "День",
        "Kun",
        "Day"
    ],
    
    table: {
        fio: [
            "ФИО",
            "FISh",
            ""
        ],
        phone: [
            "Номер телефона",
            "Telefon raqami",
            "Phone number"
        ],
        card: [
            "Номер карты",
            "Karta raqami",
            "Card number"
        ],
        productPrice: [
            "Стоимость товара",
            "Mahsulot narxi",
            "Product price"
        ],
        count: [
            "Количество",
            "Tovarlar soni",
            "Сount"
        ],
        status: [
            "Статус",
            "Holati",
            "Status"
        ],
    },
    checkPrint: {
        print: [
            "Распечатать",
            "Chop etish",
            "Print"
        ],
    },
  },
  checkPrint: {
    print: ['Распечатать', 'Chop etish', 'Print'],
  },

  tabs: {
    listing: ['Регистрация чеков', "Ro'yxatga olish", 'Invoices registration'],
    stats: ['Статистика', 'Statistike', 'Statistics'],
  },

    header: {
        pinfl: [
            "ПИНФЛ",
            "JShShIR",
            "PINI"
        ]
    },
    footer: {
        help: [
            "Помощь и поддержка",
            "Yordam va qo'llab-quvvatlash",
            "Help&Support"
        ],
        copyright: [
            `© ${new Date().getFullYear()} Государственный налоговый комитет.`,
            `© ${new Date().getFullYear()} Davlat soliq qoʻmitasi.`,
            `© ${new Date().getFullYear()} State Tax Committee.`
        ],
        description: [
            "Электронные налоговые услуги: портал электронных <br/> государственных услуг налоговых органов.",
            "Elektron soliq xizmatlari: soliq organlarining <br/> elektron davlat xizmatlari portali.",
            "Electronic tax services: portal of electronic <br/> public services of tax authorities."
        ]
    },

    notifications: {
        loadingError: [
            "Ошибка загрузки данных",
            "Ma'lumot yuklash xatoligi yuz berdi",
            "Data loading error"
        ],
        universalError: [
            "Возникла непредвиденная ошибка",
            "Kutilmagan xatolik yuz berdi",
            "An unexpected error has occurred"
        ],
        invalidNumber: [
            "Введен некорректный номер",
            "Yaroqsiz raqam kiritildi",
            "Invalid number entered"
        ],
        documentProcessingStarted: [
            "Сканирование документа начато",
            "Hujjatni skanerlash boshlanmoqda",
            "Document scanning started"
        ],
        documentProcessingFinished: [
            "Сканирование документа завершено",
            "Hujjatlar ьгммфафйшнфедш skanerlandi",
            "Document scanning completed"
        ],
        regulaScannerUnavailable: [
            "Сканер Regula не обнаружен!",
            "Regula skaneri ulanmagan!",
            "Regula scanner not find!"
        ]
    }
}
