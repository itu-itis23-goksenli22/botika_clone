import {
  HeroSlide,
  TrustLogo,
  CaseStudy,
  Testimonial,
  NavItem,
  NavDropdownItem,
} from "@/types";

export const CDN_BASE = "https://cdn.prod.website-files.com";

export const LOGO_URL = `${CDN_BASE}/66fa67b1f207f846cd05b5a1/673461d1bc7cd6d49fca54d4_logo-black.png`;

export const NAV_PRODUCT_ITEMS: NavItem[] = [
  { label: "Model galerisi", href: "/models" },
  { label: "Model \u00fczerinde", href: "/products/on-model" },
  { label: "D\u00fcz y\u00fczey", href: "/products/flat-lay-photos" },
  { label: "Manken", href: "/products/mannequin-photography" },
  { label: "Video", href: "/products/ai-fashion-video" },
];

export const NAV_SOLUTIONS_ITEMS: NavItem[] = [
  { label: "\u00dcretim maliyetlerini d\u00fc\u015f\u00fcr", href: "/solutions/cut-production-costs" },
  { label: "Pazara daha h\u0131zl\u0131 \u00e7\u0131k", href: "/solutions/get-to-market-faster" },
  {
    label: "Edit\u00f6ryel olu\u015ftur",
    href: "/solutions/create-editorials",
  },
  { label: "\u00c7e\u015fitlili\u011fi art\u0131r", href: "/solutions/increase-diversity" },
];

export const NAV_RESOURCES_ITEMS: NavItem[] = [
  { label: "Yard\u0131m merkezi", href: "https://help.fashnai.co/en/" },
  { label: "Blog", href: "/resources/thethread" },
  { label: "Vaka \u00e7al\u0131\u015fmalar\u0131", href: "/resources/case-studies" },
  { label: "SSS", href: "/resources/faqs" },
];

export const NAV_DROPDOWNS: NavDropdownItem[] = [
  { label: "\u00dcr\u00fcn", items: NAV_PRODUCT_ITEMS },
  { label: "\u00c7\u00f6z\u00fcmler", items: NAV_SOLUTIONS_ITEMS },
  { label: "Kaynaklar", items: NAV_RESOURCES_ITEMS },
];

// Hero background images (crossfade on right side)
export const HERO_IMAGES = [
  `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697a477243698bd80d9638ea_Botika_Home_AIGeneratedModels_Header_2.avif`,
  `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697a477204a3b878ec0e95b1_Botika_Home_AIGeneratedModels_Header_6.avif`,
];

// Product showcase section images
export const PRODUCT_SHOWCASE_IMAGES = {
  onModel: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697622ede64a222537322295_Botika_Homepage_OnModel.avif`,
  flatLay: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697622ed431f97eb3c5bc02d_Botika_Homepage_FlayLay.avif`,
  mannequin: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697622ed85b2ab77257fbcc6_Botika_Homepage_Mannaquin.avif`,
};

// Quality section images (crossfade between two model images)
export const QUALITY_IMAGES = {
  models: [
    `${CDN_BASE}/66fa67b1f207f846cd05b5a1/69773c0f27660a2d39ac7ec9_Botika_Homepage_WhiteCurlyAIModel.avif`,
    `${CDN_BASE}/66fa67b1f207f846cd05b5a1/69773c05e94e992c715a0315_Botika_Homepage_BruneteAIModel.avif`,
  ],
  creatorProgram: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/697623e2c1bb8c1db4a9c872_Botika_Homepage_BotikaCreatorProgram.avif`,
};

// Video teaser for Product Showcase
export const VIDEO_TEASER_URL = "https://botika-prod-public.b-cdn.net/website/video-teaser.mp4";

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1aba6f75e6997aa01475_Botika_Homepage_Client_Forever21.avif`,
    brand: "Forever 21",
    alt: "Forever 21 AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1abaab7d5eb267387995_Botika_Homepage_Client_PerryEllis.avif`,
    brand: "Perry Ellis",
    alt: "Perry Ellis AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/69843784a0cc58c8ebf8d877_Heliot_AImodel_Example.avif`,
    brand: "Heliot Emil",
    alt: "Heliot Emil AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1aba91a13a0bfec750c4_Botika_Homepage_Client_Jordache.avif`,
    brand: "Jordache",
    alt: "Jordache AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1aba2b34deb3ac23e9bf_Botika_Homepage_Client_Tobi.avif`,
    brand: "Tobi",
    alt: "Tobi AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1aba2b34deb3ac23e9c3_Botika_Homepage_Client_Edikted.avif`,
    brand: "Edikted",
    alt: "Edikted AI model",
  },
  {
    image: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/694d1aba357b875e39fac185_Botika_Homepage_Client_NilandMon.avif`,
    brand: "NIL+MON",
    alt: "NIL+MON AI model",
  },
];

export const TRUST_LOGOS: TrustLogo[] = [
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/6995aae6dd6be51c377b954e_Forever-21-logo.avif`,
    alt: "Forever 21",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bbfce66f40e1da7eb2fdc_Perry_ellis_logo.avif`,
    alt: "Perry Ellis",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bbf907fc04de85facae16_Jordache_logo.avif`,
    alt: "Jordache",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/698435f0a494ebbeaa5dbb55_HELIOT%20EMIL%20TM.avif`,
    alt: "Heliot Emil",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bbff4c547fee6a2a91b8e_blvck_logo.avif`,
    alt: "BLVCK",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bc00584ac058cb43f4def_NilMon_logo.avif`,
    alt: "NIL+MON",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bc05629c0f17c65757916_Lare_DoTeU_Logo.avif`,
    alt: "Lare DoTeU",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/67717959de847249fa995457_Botika_CocoMaternity.avif`,
    alt: "Coco Maternity",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/694bbf48e703275bb827048c_New_Me_Logo.avif`,
    alt: "New Me",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/67717898cc6be30fdadfae65_Botika_JoCo.avif`,
    alt: "Jo+Co",
    width: 120,
    height: 40,
  },
  {
    src: `${CDN_BASE}/66faa4f99edc33598569d98f/677178fc3779394afaf1deb1_Botika_Meotine.avif`,
    alt: "Meotine",
    width: 120,
    height: 40,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    headline: "Daha az harca, daha \u00e7ok \u00fcret",
    stat: "-90%",
    statLabel: "Jordache",
    description:
      "B\u00fct\u00e7enizi \u015fi\u015firmeden st\u00fcdyo kalitesinde moda \u00e7ekimleri olu\u015fturun. AI modeller, \u00fcretim masraflar\u0131 olmadan ayn\u0131 profesyonel g\u00f6r\u00fcn\u00fcm\u00fc sunar.",
    supportingText:
      "Jordache, fashnai.co\u2019nun yapay zekas\u0131yla \u00fcretim maliyetlerini d\u00fc\u015f\u00fcrd\u00fc ve binlerce dolar tasarruf etti.",
    caseStudyUrl: "/resources/case-studies/jordache",
    images: [
      `${CDN_BASE}/66fa67b1f207f846cd05b5a1/6976234b19f15454d464dac5_Botika_HomePage_CutProductionCosts.avif`,
    ],
    reversed: false,
  },
  {
    headline: "Daha h\u0131zl\u0131 hareket et. Daha ak\u0131ll\u0131 lansman yap",
    stat: "40X",
    statLabel: "JUAN & ME",
    description:
      "\u00dcretim d\u00f6ng\u00fclerinizi h\u0131zland\u0131r\u0131n ve yeni koleksiyonlar\u0131 g\u00fcnler i\u00e7inde teslim edin. Moda ekipleri art\u0131k kaliteden \u00f6d\u00fcn vermeden g\u00f6r\u00fcn\u00fcmleri g\u00fcncelleyebilir ve her zamankinden daha h\u0131zl\u0131 hareket edebilir.",
    supportingText:
      "JUAN & ME, g\u00f6rsel \u00fcretim s\u00fcresini 6 haftadan 24 saate d\u00fc\u015f\u00fcrd\u00fc",
    caseStudyUrl: "/resources/case-studies/juan-and-me",
    images: [
      `${CDN_BASE}/66fa67b1f207f846cd05b5a1/6976234b086075b0811ad678_Botika_HomePage_GetToMarketFaster.avif`,
    ],
    reversed: true,
  },
  {
    headline: "Tasar\u0131mla gelen kapsay\u0131c\u0131l\u0131k",
    stat: "+150%",
    statLabel: "TO art\u0131\u015f\u0131",
    description:
      "AI ile olu\u015fturulan modellerle kapsay\u0131c\u0131l\u0131\u011f\u0131 sergileyin \u2013 ten rengi, v\u00fccut tipi ve tarzda \u00e7e\u015fitlilik \u2013 b\u00f6ylece g\u00f6rselleriniz her yerde ger\u00e7ek m\u00fc\u015fterileri yans\u0131ts\u0131n.",
    supportingText:
      "Farkl\u0131 modeller kullanarak daha fazla m\u00fc\u015fteriye ula\u015fmak i\u00e7in elde edilen TO art\u0131\u015f\u0131.",
    caseStudyUrl: "/resources/case-studies/get-dressed-collective",
    images: [
      `${CDN_BASE}/66fa67b1f207f846cd05b5a1/6976234bc173726a3281e3e5_Botika_HomePage_IncreaseDiversity.avif`,
    ],
    reversed: false,
  },
  {
    headline: "Edit\u00f6ryeller art\u0131k kolay",
    stat: "4X",
    statLabel: "NIL+MON",
    description:
      "fashnai.co, kreatif ekiplerin kampanya fikirlerini hayata ge\u00e7irmesini sa\u011flar. Yerle\u015fik tutarl\u0131l\u0131k ve esneklikle \u00f6l\u00e7ekte moda g\u00f6rselleri \u00fcretin.",
    quote:
      "\u201Cfashnai.co\u2019yu kullanmaya ba\u015flad\u0131\u011f\u0131m\u0131zdan beri nihayet koordinasyon yerine yarat\u0131c\u0131l\u0131\u011fa odaklanabiliyoruz ve modern modan\u0131n gerektirdi\u011fi kesintisiz esneklikle \u00e7al\u0131\u015fabiliyoruz.\u201D",
    quoteAuthor: "Michael Walter, Y\u00f6netici Direkt\u00f6r, NIL+MON",
    caseStudyUrl: "/resources/case-studies/nil-mon",
    images: [
      `${CDN_BASE}/66fa67b1f207f846cd05b5a1/6976234b84e6fbece572e594_Botika_HomePage_Editorials.avif`,
    ],
    reversed: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "\u201Cfashnai.co\u2019yu kullanmaya ba\u015flad\u0131\u011f\u0131m\u0131zdan beri nihayet koordinasyon yerine yarat\u0131c\u0131l\u0131\u011fa odaklanabiliyoruz ve modern modan\u0131n gerektirdi\u011fi kesintisiz esneklikle \u00e7al\u0131\u015fabiliyoruz.\u201D",
    author: "Michael Walter",
    title: "Y\u00f6netici Direkt\u00f6r",
    company: "NIL+MON",
    photo: `${CDN_BASE}/66fa67b1f207f846cd05b5a1/69396a48791388c6ceab75bc_Ellipse%2080.avif`,
  },
];
