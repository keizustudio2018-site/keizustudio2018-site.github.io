// ===== Scene data =====
const SCENES = [
  {
    id: 'taisho',
    en: '1912 – 1926',
    zh: '大正浪漫',
    cover: 'images/taisho/dsc-1541_orig.jpg',
    images: [
      'images/taisho/dsc-1541_orig.jpg',
      'images/taisho/dsc-1548_orig.jpg',
      'images/taisho/dsc-1549_orig.jpg',
      'images/taisho/dsc-1433_orig.jpg',
      'images/taisho/dsc-1531_orig.jpg',
      'images/taisho/09_orig.png'
    ],
    desc: [
      '大正時代（1912–1926），日本史上年號最短的時代。戰爭後的各種意識抬頭以及西洋化，體現在時尚、建築上面，因此又稱「大正浪漫」。',
      '學院長從小就非常喜歡大正風格，當日式碰上西洋化真的美的沒話說。左側有一片超大片彩色玻璃窗，右側則有一面日式牆，氛圍獨特。'
    ],
    notes: [
      '要搬動任何家具請告知現場部員',
      '窗戶很脆弱要小心推拉',
      '此棚比較難吹到冷氣，太熱可以跟部員說一聲',
      '棚內設有攝影機請勿以身試法',
      '木板地為實木，穿跟鞋時請勿重踩導致壓痕'
    ]
  },
  {
    id: 'yoshiwara',
    en: '1617 – 1946',
    zh: '吉原遊廓',
    cover: 'images/yoshiwara/dsc-2234_orig.jpg',
    images: [
      'images/yoshiwara/dsc-2234_orig.jpg',
      'images/yoshiwara/dsc-1561_1_orig.jpg',
      'images/yoshiwara/img-0401-2_orig.jpg',
      'images/yoshiwara/img-0418-2_1_orig.jpg',
      'images/yoshiwara/img-0432-2_1_orig.jpg',
      'images/yoshiwara/01_11_orig.png'
    ],
    desc: [
      '江戶時代起源，男人的樂園。那是一個屬於時代的悲歌及浪漫。',
      '金箔門雖然不是專業打造，也是一手辛苦完成的。牆上繪有楓葉、彼岸花、櫻花、菊花、金魚等日本歷史元素花卉。左邊有面圓窗，窗簾可拉開拍攝；右邊則是連同天花板做花飾金牆造型。'
    ],
    notes: [
      '金箔門、花飾金牆、圓窗牆、紅柵欄，只能輕靠拍攝',
      '紅柵欄、左側拉門可自由拉動，請勿暴力甩門',
      '榻榻米禁止穿尖跟的鞋子踩在上面',
      '木板地為實木，穿跟鞋時請勿重踩導致壓痕'
    ]
  },
  {
    id: 'xiaoyaxuan',
    en: 'CHINESE-STYLE STUDY',
    zh: '宵雅軒',
    cover: 'images/xiaoyaxuan/01-round-window.jpg',
    images: [
      'images/xiaoyaxuan/01-round-window.jpg',
      'images/xiaoyaxuan/02-study-corner.jpg',
      'images/xiaoyaxuan/03-floral-corner.jpg',
      'images/xiaoyaxuan/04-day-night.jpg',
      'images/xiaoyaxuan/05-details.jpg',
      'images/xiaoyaxuan/06-model.jpg'
    ],
    desc: [
      '第一章：我重生了。',
      '前一秒，我還是二十一世紀某間攝影棚裡的苦命小編——熬夜改稿、修圖、剪片到凌晨三點，好不容易回到租屋處倒頭就睡。再睜開眼時，眼前卻不是熟悉的天花板。',
      '暖黃燈火靜靜搖曳，輕紗自樑上垂落，花影映在木窗之間；書架上擺滿卷軸與古籍，茶席尚有餘溫，空氣裡瀰漫著淡淡花香。我沉默了許久，最後不得不接受一個事實——我穿越了，而且穿進了一本古早修仙小說。',
      '按照原著劇情，我只是個活不過二十章的炮灰女配。面對即將到來的愛恨情仇、仙魔大戰與修羅場，我當機立斷做出決定：遠離主角，遠離紛爭，躺平保命。於是我拒絕了第一宗門的邀請，當所有人震驚地看著我時，只淡淡說出一句：「我要去宵雅軒。」',
      '全場譁然。傳聞中的宵雅軒，沒有驚世神功，也沒有絕世神器，有的只是花開正好的庭院、溫暖的燈火、書卷與茶香。有人在這裡品茗論道，有人在這裡等待故人，有人初次相逢，也有人留下難忘的故事。夜幕低垂時，燈光映照著屏風與花影，彷彿時光都慢了下來——而這裡，也成了我最想停留的地方。',
      '🌙 宵雅軒——一處藏於燈火之中的雅室。適合古風、漢服、旗袍、民初、大正浪漫與東方奇幻題材拍攝，推開門的瞬間，故事便已開始。✨'
    ],
    notes: [
      '棚景內有瓷器裝飾及道具，拍攝時請注意周遭環境',
      '榻榻米床的長矮凳踏板請踩中間，僅踩左右其中一側，容易受力不平衡而翹起',
      '自行移動傢俱佈置前請先向櫃台詢問確認，撤場後請復歸原始狀態',
      '榻榻米床區後方落地窗為「自然光線」，效果會因天候或時間而有所不同，可拍出如圖中的效果',
      '提供道具（不收費）：紙傘、象棋、圍棋、武術刀（圍棋桌可翻面變成象棋桌），請愛護使用，如操作不當造成道具或棚景毀損，將酌收毀損費用'
    ]
  },
  {
    id: 'heya',
    en: 'SEOUL ROOM',
    zh: '首爾房',
    cover: 'images/heya/img-20240619-150332_orig.jpg',
    images: [
      'images/heya/img-20240619-150332_orig.jpg',
      'images/heya/img-20240619-144536_orig.jpg',
      'images/heya/img-20240619-141921_orig.jpg',
      'images/heya/img-20240619-142122_orig.jpg',
      'images/heya/img-20240623-152544_orig.jpg',
      'images/heya/img-20240623-154420_orig.jpg'
    ],
    desc: [
      '全新首爾房，因應這幾年的風格轉換重新調整再出發，著重在多元場景改照，一般人像跟網拍都可以輕鬆駕馭。',
      '自然光推薦：陽光充足的天氣裡，上午 10～11 點、下午 1～3 點會有陽光灑進。'
    ],
    notes: [
      '傢俱都可以移動，移動時請注意不要刮傷地板，歸還時請恢復原狀',
      '房間內有許多拍攝用小物品，請小心不要損壞',
      '所有道具及傢俱，歸還時物歸原位',
      '床單為白底，請不要整個臉下去蹭床單，若有明顯沾到妝的痕跡，會酌收 500 元床鋪清潔費'
    ]
  },
  {
    id: 'hygge',
    en: 'DAYLIGHT & FIREPLACE',
    zh: 'HYGGE日光',
    cover: 'images/hygge/img-0829-2_orig.jpg',
    images: [
      'images/hygge/img-0829-2_orig.jpg',
      'images/hygge/05_6_orig.png',
      'images/hygge/02_10_orig.png',
      'images/hygge/01_13_orig.png',
      'images/hygge/975119_orig.jpg',
      'images/hygge/dsc-8951_orig.jpg',
      'images/hygge/dsc-8949_orig.jpg'
    ],
    desc: [
      '落地窗區：想讓大家有個陽光充足的好窗景，基本沒有擺設太多東西，讓大家好好享用美好的日光時刻。',
      '壁爐區：溫暖靜謐的角落，適合北歐風、居家感的拍攝主題。',
      '自然光推薦：陽光充足的天氣裡，上午 10～11 點、下午 1～3 點會有陽光灑進。'
    ],
    notes: [
      '左邊方格窗可開闔拍攝，窗戶為實木製作，請小心開闔',
      '搬移道具請勿用拖移的方式，避免地板刮痕',
      '所有道具及傢俱，歸還時物歸原位',
      '窗景外的毛地毯區，請勿穿鞋子或拖鞋踩進去'
    ]
  },
  {
    id: 'mourning',
    en: 'REQUIEM',
    zh: '悼夜之詩',
    cover: 'images/mourning/20_orig.jpg',
    images: [
      'images/mourning/20_orig.jpg',
      'images/mourning/21_orig.jpg',
      'images/mourning/24_orig.png',
      'images/mourning/22-2_orig.jpg',
      'images/mourning/23-2_orig.jpg',
      'images/mourning/25_orig.jpg'
    ],
    desc: [
      '夜色無聲落下，黑百合花兒交錯低喃，未署名的詩詞化作微弱迴響，緩緩沉入悼夜。那些被輕喚的字句，在沉寂裡悄然安放。'
    ],
    notes: [
      '此棚景備有兩盞專屬聚光燈，請拍攝後立即關閉，避免燈殼過熱融損',
      '黑白合花「僅能」抽取鐵桶內的拍攝使用，其他區域勿亂拔花卉',
      '勿站立至樓梯最高層，避免危險',
      '現場鋪設鏡面紙非常脆弱，勿穿著高跟鞋款直接在鏡面紙上走動（若有嚴重毀損會酌收修繕費 300～1000 元不等）'
    ]
  },
  {
    id: 'black',
    en: 'BLACK STUDIO',
    zh: '黑棚',
    cover: 'images/black/dsc-1490_orig.jpg',
    images: [
      'images/black/dsc-1490_orig.jpg',
      'images/black/dsc-1739_1_orig.jpg'
    ],
    desc: [
      '提供大家可以拍攝光影素背感覺的空間。牆壁為手工刷塗黑背，拍攝時背景可能沒辦法到非常純黑的感覺，但色光打在牆壁上也是有另一種不同風味。'
    ],
    notes: [
      '上方有木架可掛東西拍攝，兩旁也有黑色布簾，有需要都可以拉起來拍攝',
      '棚燈為共用器材，使用前請先詢問部員',
      '若使用個人燈具，請務必向部員借用腳套，避免刮傷地板'
    ]
  },
  {
    id: 'vanity',
    en: 'VANITY ROOM',
    zh: '梳妝室',
    cover: 'images/vanity/dsc-1504_1_orig.jpg',
    images: [
      'images/vanity/dsc-1504_1_orig.jpg',
      'images/vanity/dsc-1506_orig.jpg',
      'images/vanity/dsc-1507_orig.jpg',
      'images/vanity/01_10_orig.png',
      'images/vanity/02_7_orig.png'
    ],
    desc: [
      '梳妝鏡台完全是私心打造，仿造電影內明星後台的樣子。為了讓大家妝容不色偏，有大量自然光灑進，梳妝台的燈也非常明亮。',
      '梳妝室內有 2 間更衣室、一片大落地窗，同時備有彩妝備品、雜誌供使用及參考，也設有沙發讓攝影師可以坐著休息。',
      '可預約時段：上午 9:30～晚上 19:00（最晚進場時間 17:30）。特別出租：商業攝影、婚紗攝影、新娘秘書／試妝、商業代妝、人像外拍、造型師作品皆可租借梳妝台，$250／HR／一桌2人座，每個時段至多開放兩桌。'
    ],
    notes: [
      '梳妝室僅備有桌上型小型垃圾桶，較大型垃圾請找部員協助回收或丟棄',
      '室內所有化妝品、保養品、雜誌等皆為凱茲所有，請勿任意侵占帶走',
      '換裝後請勿將行李堆置梳妝室，凱茲備有置物架供暫放行李',
      '若要在此區拍攝，請使用第一桌梳妝台，以不影響其他客人為原則',
      '單租梳妝方案時，梳妝室禁止相機拍攝或側拍錄影（手機可）'
    ]
  },
  {
    id: 'bgfabric',
    en: 'BACKGROUND FABRIC',
    zh: '背景布區',
    cover: 'images/bgfabric/img-1148_orig.jpg',
    images: [
      'images/bgfabric/img-1148_orig.jpg',
      'images/bgfabric/img-1163_orig.jpg',
      'images/bgfabric/img-1134_orig.jpg',
      'images/bgfabric/img-1161_orig.jpg',
      'images/bgfabric/img-1169_orig.jpg',
      'images/bgfabric/img-1173_orig.jpg'
    ],
    desc: [
      '提供白、粉、綠、酒紅、鐵灰共 5 色背景紙，適合簡約人像、網拍等拍攝需求。',
      '額外費用：若使用共棚制入場，每次使用 $100／次，在租棚時間內不限使用次數。'
    ],
    notes: [
      '部分顏色會有容易卡住放不下來的狀況，需要踩階梯上去將紙的底部先拉一段下來'
    ]
  }
];

// ===== Render scene grid =====
const grid = document.getElementById('sceneGrid');
SCENES.forEach(scene => {
  const card = document.createElement('div');
  card.className = 'scene-card';
  card.innerHTML = `
    <img src="${scene.cover}" alt="${scene.zh}" loading="lazy">
    <div class="scene-card-label">
      <span class="scene-card-en">${scene.en}</span>
      <span class="scene-card-zh">${scene.zh}</span>
    </div>
  `;
  card.addEventListener('click', () => openModal(scene));
  grid.appendChild(card);
});

// ===== Modal =====
const modal = document.getElementById('sceneModal');
const modalGallery = document.getElementById('modalGallery');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalNotes = document.getElementById('modalNotes');

function openModal(scene) {
  modalEyebrow.textContent = scene.en;
  modalTitle.textContent = scene.zh;
  modalGallery.innerHTML = scene.images.map((src, i) => `<img src="${src}" alt="${scene.zh}" loading="lazy" data-index="${i}">`).join('');
  modalDesc.innerHTML = scene.desc.map(p => `<p>${p}</p>`).join('');
  modalNotes.innerHTML = scene.notes.map(n => `<li>${n}</li>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  modalGallery.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openLightbox(scene.images, Number(img.dataset.index)));
  });
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

// ===== Image lightbox (enlarge photo within scene gallery) =====
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCounter = document.getElementById('lightboxCounter');
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  renderLightbox();
  lightbox.classList.add('open');
}
function renderLightbox() {
  lightboxImg.src = lightboxImages[lightboxIndex];
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}
function closeLightbox() {
  lightbox.classList.remove('open');
}
function lightboxStep(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  renderLightbox();
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => lightboxStep(-1));
document.getElementById('lightboxNext').addEventListener('click', () => lightboxStep(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('open')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxStep(-1);
    if (e.key === 'ArrowRight') lightboxStep(1);
  } else if (e.key === 'Escape') {
    closeModal();
  }
});

// ===== Accordion =====
document.querySelectorAll('.acc-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

// ===== Mobile nav =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { mainNav.classList.remove('open'); });
});

// ===== FB / IG nav dropdown =====
const navCtaWrap = document.getElementById('navCtaWrap');
const navCtaToggle = document.getElementById('navCtaToggle');
navCtaToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = navCtaWrap.classList.toggle('open');
  navCtaToggle.setAttribute('aria-expanded', isOpen);
});
document.addEventListener('click', e => {
  if (!navCtaWrap.contains(e.target)) {
    navCtaWrap.classList.remove('open');
    navCtaToggle.setAttribute('aria-expanded', false);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    navCtaWrap.classList.remove('open');
    navCtaToggle.setAttribute('aria-expanded', false);
  }
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
