/* =========================================================
   İBO'NUN YERİ - YÖNETİLEBİLİR MENÜ VERİ DOSYASI

   Fiyat değiştirmek için:
   price:"600 ₺" yazan yerleri değiştir.

   Görsel değiştirmek için:
   image:"...jpg" satırını değiştir.

   Fiyatlar hiçbir dilde çevrilmez. Her zaman TL kalır.
========================================================= */

const TEXT = {
  tr: {
    heroTitle: "Aynı Sofrada, Aynı Lezzet.",
    heroText: "Geleneksel meyhane ruhunu, sıcak sohbet ve özenle hazırlanan lezzetlerle yaşatıyoruz.",
    heroButton: "Menüye Göz At",
    menuTitle: "MENÜ",
    menuSub: "Başlıklara dokunarak içerikleri açabilirsiniz.",
    openHint: "Görüntüle"
  },
  en: {
    heroTitle: "Same Table, Same Taste.",
    heroText: "We keep the traditional meyhane spirit alive with warm conversation and carefully prepared flavors.",
    heroButton: "View Menu",
    menuTitle: "MENU",
    menuSub: "Tap a heading to view its contents.",
    openHint: "View"
  },
  ar: {
    heroTitle: "المائدة نفسها، النكهة نفسها.",
    heroText: "نحافظ على روح الميهانة التقليدية بأجواء دافئة ونكهات محضّرة بعناية.",
    heroButton: "عرض القائمة",
    menuTitle: "القائمة",
    menuSub: "اضغط على العنوان لعرض التفاصيل.",
    openHint: "عرض"
  }
};

/* =========================================================
   GÖRSELLER
========================================================= */
const IMG = {
  meze: {
    sosluPatlican: "soslu-patlican.jpg",
    havucTarator: "havuc-tarator.jpg",
    zeytinyagliFasulye: "zeytinyagli-fasulye.jpg",
    zeytinyagliBorulce: "zeytinyagli-borulce.jpg",
    patlicanSalatasi: "patlican-salatasi.jpg",
    kabakBorani: "kabak-borani.jpg",
    bosnakHaydari: "bosnak-haydari.jpg",
    humus: "humus.jpg",
    kerevizSalatasi: "kereviz-salatasi.jpg",
    pancarSalatasi: "pancar-salatasi.jpg",
    paziKavurma: "pazi-kavurma.jpg",
    zeytinyagliBarbunya: "zeytinyagli-barbunya.jpg",
    saksuka: "saksuka.jpg",
    tazeFasulyeKavurma: "taze-fasulye-kavurma.jpg",
    karisikKizartma: "karisik-kizartma.jpg"
  },
  sutlac: "sutlac.png"
};

/* =========================================================
   MENÜ VERİLERİ / FİYATLAR
========================================================= */
const MENU_DATA = [
  {
    id: "mezeler",
    title: { tr:"MEZELER", en:"APPETIZERS", ar:"المقبلات" },
    items: [
      {
        name:{tr:"Soslu Patlıcan", en:"Eggplant with Sauce", ar:"باذنجان بالصلصة"},
        desc:{tr:"Patlıcan, domates, zeytinyağı, tuz, sarımsak, salça.", en:"Eggplant, tomato, olive oil, salt, garlic and tomato paste.", ar:"باذنجان، طماطم، زيت زيتون، ملح، ثوم ومعجون طماطم."},
        price:"150 ₺",
        image:IMG.meze.sosluPatlican
      },
      {
        name:{tr:"Havuç Tarator", en:"Carrot Tarator", ar:"طرطور الجزر"},
        desc:{tr:"Havuç, sarımsak, süzme yoğurt, çiçek yağı.", en:"Carrot, garlic, strained yogurt and vegetable oil.", ar:"جزر، ثوم، لبن مصفى وزيت نباتي."},
        price:"150 ₺",
        image:IMG.meze.havucTarator
      },
      {
        name:{tr:"Zeytinyağlı Fasulye", en:"Green Beans in Olive Oil", ar:"فاصوليا بزيت الزيتون"},
        desc:{tr:"Fasulye, domates, zeytinyağı, tuz, sarımsak, kuru soğan.", en:"Green beans, tomato, olive oil, salt, garlic and onion.", ar:"فاصوليا، طماطم، زيت زيتون، ملح، ثوم وبصل."},
        price:"150 ₺",
        image:IMG.meze.zeytinyagliFasulye
      },
      {
        name:{tr:"Zeytinyağlı Börülce", en:"Black-Eyed Peas in Olive Oil", ar:"لوبيا بزيت الزيتون"},
        desc:{tr:"Börülce, taze soğan, turşu, dereotu, maydanoz, sumak, nar ekşisi, zeytinyağı.", en:"Black-eyed peas, spring onion, pickles, dill, parsley, sumac, pomegranate sour and olive oil.", ar:"لوبيا، بصل أخضر، مخلل، شبت، بقدونس، سماق، دبس رمان وزيت زيتون."},
        price:"150 ₺",
        image:IMG.meze.zeytinyagliBorulce
      },
      {
        name:{tr:"Patlıcan Salatası (Söğürme)", en:"Roasted Eggplant Salad", ar:"سلطة الباذنجان المشوي"},
        desc:{tr:"Köz patlıcan, köz kapya biber, yeşil biber, sarımsak, dereotu, maydanoz, zeytinyağı.", en:"Roasted eggplant, roasted red pepper, green pepper, garlic, dill, parsley and olive oil.", ar:"باذنجان مشوي، فلفل أحمر مشوي، فلفل أخضر، ثوم، شبت، بقدونس وزيت زيتون."},
        price:"150 ₺",
        image:IMG.meze.patlicanSalatasi
      },
      {
        name:{tr:"Kabak Borani", en:"Zucchini Borani", ar:"بوراني الكوسا"},
        desc:{tr:"Kabak, süzme yoğurt, tuz, sarımsak, zeytinyağı.", en:"Zucchini, strained yogurt, salt, garlic and olive oil.", ar:"كوسا، لبن مصفى، ملح، ثوم وزيت زيتون."},
        price:"150 ₺",
        image:IMG.meze.kabakBorani
      },
      {
        name:{tr:"Boşnak Haydari", en:"Bosnian Haydari", ar:"حيدري بوسني"},
        desc:{tr:"Pırasa, süzme yoğurt, sarımsak, çiçek yağı, fıstık.", en:"Leek, strained yogurt, garlic, vegetable oil and peanuts.", ar:"كراث، لبن مصفى، ثوم، زيت نباتي وفستق."},
        price:"150 ₺",
        image:IMG.meze.bosnakHaydari
      },
      {
        name:{tr:"Humus", en:"Hummus", ar:"حمص"},
        desc:{tr:"Nohut, tahin, limon, tuz, sarımsak, çiçek yağı, kimyon.", en:"Chickpeas, tahini, lemon, salt, garlic, vegetable oil and cumin.", ar:"حمص، طحينة، ليمون، ملح، ثوم، زيت نباتي وكمون."},
        price:"150 ₺",
        image:IMG.meze.humus
      },
      {
        name:{tr:"Kereviz Salatası", en:"Celery Salad", ar:"سلطة الكرفس"},
        desc:{tr:"Kereviz, turşu, süzme yoğurt, mısır, tuz, nane, karabiber, maydanoz.", en:"Celery, pickles, strained yogurt, corn, salt, mint, black pepper and parsley.", ar:"كرفس، مخلل، لبن مصفى، ذرة، ملح، نعناع، فلفل أسود وبقدونس."},
        price:"150 ₺",
        image:IMG.meze.kerevizSalatasi
      },
      {
        name:{tr:"Pancar Salatası", en:"Beetroot Salad", ar:"سلطة الشمندر"},
        desc:{tr:"Pancar, tuz, sarımsak.", en:"Beetroot, salt and garlic.", ar:"شمندر، ملح وثوم."},
        price:"150 ₺",
        image:IMG.meze.pancarSalatasi
      },
      {
        name:{tr:"Pazı Kavurma", en:"Roasted Chard", ar:"سلق مقلي"},
        desc:{tr:"Pazı, kuru soğan, sarımsak, çiçek yağı.", en:"Chard, onion, garlic and vegetable oil.", ar:"سلق، بصل، ثوم وزيت نباتي."},
        price:"150 ₺",
        image:IMG.meze.paziKavurma
      },
      {
        name:{tr:"Zeytinyağlı Barbunya", en:"Barbunya Beans in Olive Oil", ar:"فاصوليا بربونيا بزيت الزيتون"},
        desc:{tr:"Barbunya fasulye, kuru soğan, zeytinyağı, tuz, salça, domates, havuç, sarımsak.", en:"Barbunya beans, onion, olive oil, salt, tomato paste, tomato, carrot and garlic.", ar:"فاصوليا بربونيا، بصل، زيت زيتون، ملح، معجون طماطم، طماطم، جزر وثوم."},
        price:"150 ₺",
        image:IMG.meze.zeytinyagliBarbunya
      },
      {
        name:{tr:"Şakşuka", en:"Shakshuka", ar:"شكشوكة"},
        desc:{tr:"Patlıcan, kabak, havuç, patates, yeşil biber, yoğurt, pul biber.", en:"Eggplant, zucchini, carrot, potato, green pepper, yogurt and chili flakes.", ar:"باذنجان، كوسا، جزر، بطاطس، فلفل أخضر، لبن وفلفل حار."},
        price:"150 ₺",
        image:IMG.meze.saksuka
      },
      {
        name:{tr:"Taze Fasulye Kavurma", en:"Roasted Fresh Beans", ar:"فاصوليا خضراء مقلية"},
        desc:{tr:"Fasulye, kuru soğan, zeytinyağı, sarımsak, tuz, karabiber.", en:"Fresh beans, onion, olive oil, garlic, salt and black pepper.", ar:"فاصوليا خضراء، بصل، زيت زيتون، ثوم، ملح وفلفل أسود."},
        price:"150 ₺",
        image:IMG.meze.tazeFasulyeKavurma
      },
      {
        name:{tr:"Karışık Kızartma", en:"Mixed Fried Vegetables", ar:"خضار مقلية مشكلة"},
        desc:{tr:"Patlıcan, yeşil biber, çiçek yağı, yoğurt.", en:"Eggplant, green pepper, vegetable oil and yogurt.", ar:"باذنجان، فلفل أخضر، زيت نباتي ولبن."},
        price:"150 ₺",
        image:IMG.meze.karisikKizartma
      },
      { name:{tr:"Beyaz Peynir", en:"Feta Cheese", ar:"جبنة بيضاء"}, desc:{tr:"Klasik meyhane peyniri.", en:"Classic meyhane cheese.", ar:"جبنة بيضاء تقليدية."}, price:"200 ₺" }
    ]
  },
  {
    id: "kirmizi-etler",
    title: { tr:"KIRMIZI ETLER", en:"RED MEATS", ar:"اللحوم الحمراء" },
    items: [
      { name:{tr:"Et Izgara", en:"Grilled Meat", ar:"لحم مشوي"}, desc:{tr:"Kuzu eti. Kızarmış domates ve biber ile servis edilir.", en:"Lamb meat served with fried tomatoes and peppers.", ar:"لحم غنم يقدم مع طماطم وفلفل مقلي."}, price:"600 ₺" },
      { name:{tr:"Et Şiş", en:"Meat Shish", ar:"شيش لحم"}, desc:{tr:"Marine edilmiş kuzu eti. Kızarmış domates ve biber ile servis edilir.", en:"Marinated lamb served with fried tomatoes and peppers.", ar:"لحم غنم متبل يقدم مع طماطم وفلفل مقلي."}, price:"600 ₺" },
      { name:{tr:"Et Kavurma", en:"Roasting Meat", ar:"لحم مقلي"}, desc:{tr:"Kuzu eti; domates, biber ve soğan ile tavada pişirilir.", en:"Lamb cooked in a pan with tomatoes, peppers and onions.", ar:"لحم غنم مطهو مع طماطم وفلفل وبصل."}, price:"600 ₺" },
      { name:{tr:"Izgara Köfte", en:"Grilled Meatballs", ar:"كفتة مشوية"}, desc:{tr:"Kızarmış domates ve biber ile servis edilir.", en:"Served with fried tomatoes and peppers.", ar:"تقدم مع طماطم وفلفل مقلي."}, price:"500 ₺" },
      { name:{tr:"Dana Bonfile", en:"Beef Tenderloin", ar:"فيليه بقري"}, desc:{tr:"Lütfen sorunuz.", en:"Please ask.", ar:"يرجى السؤال."}, price:"750 ₺" }
    ]
  },
  {
    id: "beyaz-etler",
    title: { tr:"BEYAZ ETLER", en:"WHITE MEATS", ar:"اللحوم البيضاء" },
    items: [
      { name:{tr:"Tavuk Izgara", en:"Grilled Chicken", ar:"دجاج مشوي"}, desc:{tr:"Kızarmış domates ve biber ile servis edilir.", en:"Served with fried tomatoes and peppers.", ar:"يقدم مع طماطم وفلفل مقلي."}, price:"400 ₺" },
      { name:{tr:"Tavuk Şiş", en:"Chicken Skewers", ar:"شيش دجاج"}, desc:{tr:"Marine edilmiş tavuk eti. Kızarmış domates ve biber ile servis edilir.", en:"Marinated chicken served with fried tomatoes and peppers.", ar:"دجاج متبل يقدم مع طماطم وفلفل مقلي."}, price:"450 ₺" },
      { name:{tr:"Tavuk Kavurma", en:"Roasted Chicken", ar:"دجاج مقلي"}, desc:{tr:"Kızarmış domates ve biber ile servis edilir.", en:"Served with fried tomatoes and peppers.", ar:"يقدم مع طماطم وفلفل مقلي."}, price:"450 ₺" }
    ]
  },
  {
    id: "balik",
    title: { tr:"GÜNLÜK BALIK", en:"DAILY FISH", ar:"سمك اليوم" },
    items: [
      { name:{tr:"Izgara Balık", en:"Grilled Fish", ar:"سمك مشوي"}, desc:{tr:"Çeşitli yeşillikler, soğan ve limon ile servis edilir.", en:"Served with various greens, onion and lemon.", ar:"يقدم مع خضار متنوعة وبصل وليمون."}, price:"400 ₺" },
      { name:{tr:"Tavada Balık", en:"Pan-Fried Fish", ar:"سمك مقلي"}, desc:{tr:"Çeşitli yeşillikler, soğan ve limon ile servis edilir.", en:"Served with various greens, onion and lemon.", ar:"يقدم مع خضار متنوعة وبصل وليمون."}, price:"450 ₺" },
      { name:{tr:"Balık Buğlama", en:"Steamed Fish", ar:"سمك مطهو بالبخار"}, desc:{tr:"Balık, domates, sarımsak, yeşil biber, zeytinyağı ve tereyağı ile pişirilir.", en:"Fish cooked with tomatoes, garlic, green pepper, olive oil and butter.", ar:"سمك مطهو مع طماطم وثوم وفلفل أخضر وزيت زيتون وزبدة."}, price:"450 ₺" }
    ]
  },
  {
    id: "salatalar",
    title: { tr:"SALATALAR", en:"SALADS", ar:"السلطات" },
    items: [
      { name:{tr:"Çoban Salatası", en:"Shepherd Salad", ar:"سلطة الراعي"}, desc:{tr:"Domates, soğan, yeşil biber, maydanoz.", en:"Tomato, onion, green pepper and parsley.", ar:"طماطم، بصل، فلفل أخضر وبقدونس."}, price:"200 ₺" },
      { name:{tr:"Yeşil Salata", en:"Green Salad", ar:"سلطة خضراء"}, desc:{tr:"Marul, taze soğan, roka, maydanoz.", en:"Lettuce, spring onion, arugula and parsley.", ar:"خس، بصل أخضر، جرجير وبقدونس."}, price:"200 ₺" },
      { name:{tr:"Kaşık Salatası", en:"Spoon Salad", ar:"سلطة ناعمة"}, desc:{tr:"İnce doğranmış domates, yeşil biber ve soğan.", en:"Finely chopped tomato, green pepper and onion.", ar:"طماطم وفلفل أخضر وبصل مفروم ناعماً."}, price:"200 ₺" },
      { name:{tr:"Piyaz", en:"Bean Salad", ar:"بياز"}, desc:{tr:"Marul, soğan, tane fasulye, maydanoz.", en:"Lettuce, onion, beans and parsley.", ar:"خس، بصل، فاصوليا وبقدونس."}, price:"200 ₺" }
    ]
  },
  {
    id: "soguk-icecekler",
    title: { tr:"SOĞUK İÇECEKLER", en:"COLD DRINKS", ar:"المشروبات الباردة" },
    items: [
      { name:{tr:"Coca Cola", en:"Coca Cola", ar:"كوكا كولا"}, desc:{tr:"270 ml", en:"270 ml", ar:"270 ml"}, price:"50 ₺" },
      { name:{tr:"Coca Cola Zero", en:"Coca Cola Zero", ar:"كوكا كولا زيرو"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"50 ₺" },
      { name:{tr:"Fanta", en:"Fanta", ar:"فانتا"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"50 ₺" },
      { name:{tr:"Sprite", en:"Sprite", ar:"سبرايت"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"50 ₺" },
      { name:{tr:"Fuse Tea", en:"Fuse Tea", ar:"آيس تي"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"50 ₺" },
      { name:{tr:"Meyve Suyu", en:"Juice", ar:"عصير"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"50 ₺" },
      { name:{tr:"Taze Sıkılmış Meyve Suyu", en:"Fresh Juice", ar:"عصير طازج"}, desc:{tr:"250 ml", en:"250 ml", ar:"250 ml"}, price:"150 ₺" },
      { name:{tr:"Ayran", en:"Ayran", ar:"عيران"}, desc:{tr:"500 ml", en:"500 ml", ar:"500 ml"}, price:"30 ₺" },
      { name:{tr:"Su Küçük", en:"Small Water", ar:"ماء صغير"}, desc:{tr:"500 ml", en:"500 ml", ar:"500 ml"}, price:"25 ₺" },
      { name:{tr:"Su Büyük", en:"Large Water", ar:"ماء كبير"}, desc:{tr:"1.5 L", en:"1.5 L", ar:"1.5 L"}, price:"50 ₺" }
    ]
  },
  {
    id: "alkollu-icecekler",
    title: { tr:"ALKOLLÜ İÇECEKLER", en:"ALCOHOLIC BEVERAGES", ar:"المشروبات الكحولية" },
    items: [
      { name:{tr:"Yeni Rakı Gold 100 CL", en:"Yeni Rakı Gold 100 CL", ar:"يني راكي غولد 100 CL"}, desc:{tr:"", en:"", ar:""}, price:"2.350 ₺" },
      { name:{tr:"Yeni Rakı Gold 70 CL", en:"Yeni Rakı Gold 70 CL", ar:"يني راكي غولد 70 CL"}, desc:{tr:"", en:"", ar:""}, price:"1.850 ₺" },
      { name:{tr:"Yeni Rakı Gold 50 CL", en:"Yeni Rakı Gold 50 CL", ar:"يني راكي غولد 50 CL"}, desc:{tr:"", en:"", ar:""}, price:"1.450 ₺" },
      { name:{tr:"Yeni Rakı Gold 35 CL", en:"Yeni Rakı Gold 35 CL", ar:"يني راكي غولد 35 CL"}, desc:{tr:"", en:"", ar:""}, price:"1.100 ₺" },
      { name:{tr:"Yeni Rakı Gold 20 CL", en:"Yeni Rakı Gold 20 CL", ar:"يني راكي غولد 20 CL"}, desc:{tr:"", en:"", ar:""}, price:"750 ₺" },
      { name:{tr:"Yeni Rakı Gold Duble", en:"Yeni Rakı Gold Double", ar:"يني راكي غولد دبل"}, desc:{tr:"", en:"", ar:""}, price:"300 ₺" },
      { name:{tr:"Yeni Rakı Tekirdağ Göbek 100 CL", en:"Yeni Rakı Tekirdağ Göbek 100 CL", ar:"يني راكي تكيرداغ غوبك 100 CL"}, desc:{tr:"", en:"", ar:""}, price:"3.000 ₺" },
      { name:{tr:"Yeni Rakı Tekirdağ Göbek 70 CL", en:"Yeni Rakı Tekirdağ Göbek 70 CL", ar:"يني راكي تكيرداغ غوبك 70 CL"}, desc:{tr:"", en:"", ar:""}, price:"2.250 ₺" },
      { name:{tr:"Yeni Rakı Tekirdağ Göbek 50 CL", en:"Yeni Rakı Tekirdağ Göbek 50 CL", ar:"يني راكي تكيرداغ غوبك 50 CL"}, desc:{tr:"", en:"", ar:""}, price:"1.750 ₺" },
      { name:{tr:"Yeni Rakı Tekirdağ Göbek 35 CL", en:"Yeni Rakı Tekirdağ Göbek 35 CL", ar:"يني راكي تكيرداغ غوبك 35 CL"}, desc:{tr:"", en:"", ar:""}, price:"1.250 ₺" },
      { name:{tr:"Yeni Rakı Tekirdağ Göbek Duble", en:"Yeni Rakı Tekirdağ Göbek Double", ar:"يني راكي تكيرداغ غوبك دبل"}, desc:{tr:"", en:"", ar:""}, price:"350 ₺" },
      { name:{tr:"Efes 50 CL", en:"Efes Beer 50 CL", ar:"إيفس 50 CL"}, desc:{tr:"", en:"", ar:""}, price:"150 ₺" },
      { name:{tr:"Tuborg Malt 50 CL", en:"Tuborg Malt 50 CL", ar:"توبورغ مالت 50 CL"}, desc:{tr:"", en:"", ar:""}, price:"150 ₺" },
      { name:{tr:"Carlsberg 50 CL", en:"Carlsberg 50 CL", ar:"كارلسبرغ 50 CL"}, desc:{tr:"", en:"", ar:""}, price:"200 ₺" }
    ]
  },
  {
    id: "saraplar",
    title: { tr:"ŞARAPLAR", en:"WINES", ar:"النبيذ" },
    items: [
      { name:{tr:"Kırmızı Şarap - Kavaklıdere Selection Kadeh", en:"Red Wine - Kavaklıdere Selection Glass", ar:"نبيذ أحمر - كافاكليديري سيليكشن كأس"}, desc:{tr:"", en:"", ar:""}, price:"500 ₺" },
      { name:{tr:"Kırmızı Şarap - Kavaklıdere Selection Şişe", en:"Red Wine - Kavaklıdere Selection Bottle", ar:"نبيذ أحمر - كافاكليديري سيليكشن زجاجة"}, desc:{tr:"", en:"", ar:""}, price:"2.000 ₺" },
      { name:{tr:"Kırmızı Şarap - Kavaklıdere Angora Kadeh", en:"Red Wine - Kavaklıdere Angora Glass", ar:"نبيذ أحمر - كافاكليديري أنغورا كأس"}, desc:{tr:"", en:"", ar:""}, price:"300 ₺" },
      { name:{tr:"Kırmızı Şarap - Kavaklıdere Angora Şişe", en:"Red Wine - Kavaklıdere Angora Bottle", ar:"نبيذ أحمر - كافاكليديري أنغورا زجاجة"}, desc:{tr:"", en:"", ar:""}, price:"1.200 ₺" },
      { name:{tr:"Beyaz Şarap - Kavaklıdere Selection Kadeh", en:"White Wine - Kavaklıdere Selection Glass", ar:"نبيذ أبيض - كافاكليديري سيليكشن كأس"}, desc:{tr:"", en:"", ar:""}, price:"500 ₺" },
      { name:{tr:"Beyaz Şarap - Kavaklıdere Selection Şişe", en:"White Wine - Kavaklıdere Selection Bottle", ar:"نبيذ أبيض - كافاكليديري سيليكشن زجاجة"}, desc:{tr:"", en:"", ar:""}, price:"2.000 ₺" },
      { name:{tr:"Beyaz Şarap - Kavaklıdere Angora Kadeh", en:"White Wine - Kavaklıdere Angora Glass", ar:"نبيذ أبيض - كافاكليديري أنغورا كأس"}, desc:{tr:"", en:"", ar:""}, price:"300 ₺" },
      { name:{tr:"Beyaz Şarap - Kavaklıdere Angora Şişe", en:"White Wine - Kavaklıdere Angora Bottle", ar:"نبيذ أبيض - كافاكليديري أنغورا زجاجة"}, desc:{tr:"", en:"", ar:""}, price:"1.200 ₺" }
    ]
  },
  {
    id: "atistirmaliklar",
    title: { tr:"ATIŞTIRMALIK SICAKLAR", en:"HOT SNACKS", ar:"مقبلات ساخنة" },
    items: [
      { name:{tr:"Patates Kızartması", en:"French Fries", ar:"بطاطس مقلية"}, desc:{tr:"", en:"", ar:""}, price:"150 ₺" },
      { name:{tr:"Kaygana", en:"Kaygana", ar:"كاياجانا"}, desc:{tr:"Beyaz un, yumurta, taze soğan, süt veya su.", en:"Flour, egg, spring onion, milk or water.", ar:"دقيق، بيض، بصل أخضر، حليب أو ماء."}, price:"150 ₺" },
      { name:{tr:"Pirinç Pilavı", en:"Rice Pilaf", ar:"أرز"}, desc:{tr:"", en:"", ar:""}, price:"150 ₺" }
    ]
  },
  {
    id: "tatlilar",
    title: { tr:"TATLILAR", en:"DESSERTS", ar:"الحلويات" },
    items: [
      { name:{tr:"Sütlaç", en:"Rice Pudding", ar:"أرز بالحليب"}, desc:{tr:"Güveç kapta geleneksel sütlaç.", en:"Traditional rice pudding served in a clay bowl.", ar:"أرز بالحليب تقليدي يقدم في وعاء فخاري."}, price:"200 ₺", image:IMG.sutlac }
    ]
  }
];

/* =========================================================
   UYGULAMA KODU - normalde buraya dokunmana gerek yok
========================================================= */
let currentLang = "tr";

const languageScreen = document.getElementById("languageScreen");
const app = document.getElementById("app");
const accordionRoot = document.getElementById("accordionRoot");
const categoryPills = document.getElementById("categoryPills");

function t(value){
  if(typeof value === "string") return value;
  return value[currentLang] || value.tr || "";
}

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", lang === "ar");
  languageScreen.classList.add("is-hidden");
  app.classList.remove("is-hidden");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.getElementById("heroTitle").textContent = TEXT[lang].heroTitle;
  document.getElementById("heroText").textContent = TEXT[lang].heroText;
  document.getElementById("heroButton").textContent = TEXT[lang].heroButton;
  document.getElementById("menuTitle").textContent = TEXT[lang].menuTitle;
  document.getElementById("menuSub").textContent = TEXT[lang].menuSub;

  renderCategoryPills();
  renderMenu();
}

function renderCategoryPills(){
  categoryPills.innerHTML = MENU_DATA.map((section, index) => `
    <button class="category-pill ${index === 0 ? "active" : ""}" data-target="${section.id}">
      ${t(section.title)}
    </button>
  `).join("");

  document.querySelectorAll(".category-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if(target){
        target.scrollIntoView({behavior:"smooth", block:"start"});
        openSection(btn.dataset.target);
      }
    });
  });
}

function renderMenu(){
  accordionRoot.innerHTML = MENU_DATA.map((section, index) => `
    <article class="menu-section ${index === 0 ? "open" : ""}" id="${section.id}">
      <button class="section-toggle" type="button" data-section="${section.id}">
        <div>
          <h3>${t(section.title)}</h3>
          <span class="hint">${TEXT[currentLang].openHint}</span>
        </div>
        <span class="arrow">⌄</span>
      </button>
      <div class="section-panel">
        <div class="items-grid">
          ${section.items.map(itemTemplate).join("")}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".section-toggle").forEach(btn => {
    btn.addEventListener("click", () => openSection(btn.dataset.section));
  });
}

function itemTemplate(item){
  const hasImage = Boolean(item.image);
  return `
    <div class="menu-item ${hasImage ? "has-image" : ""}">
      ${hasImage ? `<img src="${item.image}" alt="${t(item.name)}">` : ""}
      <span class="price">${item.price}</span>
      <div class="item-body">
        <div class="item-title">${t(item.name)}</div>
        ${t(item.desc) ? `<div class="item-desc">${t(item.desc)}</div>` : ""}
      </div>
    </div>
  `;
}

function openSection(sectionId){
  document.querySelectorAll(".menu-section").forEach(section => {
    section.classList.toggle("open", section.id === sectionId);
  });
  document.querySelectorAll(".category-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.target === sectionId);
  });
}

// Dil seçim ekranındaki butonlar
document.querySelectorAll(".lang-choice").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Üstteki dil değiştirme butonları
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
