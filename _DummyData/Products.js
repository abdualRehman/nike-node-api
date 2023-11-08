const exploreItems = [
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/23fd8e65-c6a5-4b03-98e4-4a6281bd5592/nike-just-do-it.jpg",
    alt: "explore-section",
    targetAudience: "Women",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/df231f4d-b556-49d2-832d-368a167697c5/nike-just-do-it.jpg",
    alt: "explore-section",
    targetAudience: "Men",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/953a6d65-c55e-43e1-89d2-e5cb1630aba7/nike-just-do-it.jpg",
    alt: "explore-section",
    targetAudience: "Kids",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/e6747725-2d8d-4338-b49b-bb680304b8d1/nike-just-do-it.jpg",
    alt: "explore-section",
    targetAudience: "Teens",
  },
];

const mensProducts = [
  {
    id: 0,
    name: "Nike Dunk Low Retro",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-dd36JB.png",
  },
  {
    id: 1,
    name: "Nike Dunk Low",
    price: 119.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/56e981d8-dc93-46d6-9f5f-1eaae1b4bafc/dunk-low-shoes-nF8W1z.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-GjGXSP.png",
  },
];

const newFeaturedProducts = [
  {
    id: 0,
    name: "Jordan True Flight",
    price: 65.95,
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/329f1771-196d-40a2-83be-c045974bf685/jordan-true-flight-older-shoes-QtbhRW.png",
  },
  {
    id: 1,
    name: "Nike Dunk Low",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b81dc45-116d-42ce-9d49-5a7c5c9bfa16/dunk-low-shoes-15mQNw.png",
  },
  {
    id: 2,
    name: "Nike Air Max Plus",
    price: 184.95,
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d81dd32a-e2a9-4737-82c8-1becedb7ae2f/air-max-plus-shoes.png",
  },
];

const showcaseImages = (images = [
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e87becc6-39ec-4696-b6d3-3345fd332088/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/01b76518-46d8-4cc0-877f-a569679b293c/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/868a71f5-8f8c-4aa3-aa00-e6cc74b57083/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4fc35e3a-f247-4ce0-8824-2d99cfc70ca2/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5e60be74-ddb5-4460-9236-1a87cb80f15c/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0a64954f-2b96-4c96-84b0-2b3d739f1ab1/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1324c833-0b91-41e3-a964-e68142c92655/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ffe4ba4d-a090-4a44-83bc-a088659dd312/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5bd4911b-7a65-4bd7-a207-67fbe191ea22/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f03a2722-c557-4fa1-8f0a-89a7c6a96177/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba5b9d7a-32ec-4642-8400-6b01e92fa111/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4eb868c-4f69-4b33-910d-a4c590c565a2/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e0398a23-8fee-45f1-bfaa-3db160d6dfc7/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c422ea00-5c77-46c8-865e-0d12edb1fa5c/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
  {
    original:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/748758bb-ce09-4749-969d-07235d9421fb/jordan-true-flight-younger-shoes-jjVD9L.png",
    thumbnail:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b8247b60-2a42-480b-b30e-bf7618d80268/jordan-true-flight-younger-shoes-jjVD9L.png",
  },
]);

const sportItems = [
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Running",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/5027a28c-3984-4287-94d1-ee6198238ce9/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Football",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/be13cfe4-b5a9-4c26-bee0-b716e98b099d/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Basketball",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/b4722f0f-c0e4-4a1b-8050-9f026ef947e9/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Training",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/5f432ab0-7ed1-48b9-b8c8-9eb3f5dcb63d/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Tennis",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/11550514-c82b-46b2-afd8-e5dd62698371/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Dance",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/ed6efa3d-bb62-4d41-89f1-49d01418fe49/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Yoga",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Skateboarding",
  },
];

const weatherClothing = [
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/26688ed0-7fa0-4a0b-915f-25b31d0152b0/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Running Shoes",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/5555c8b6-8872-4bcc-aac5-e15a9497f781/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Running Clothing",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/ed96d4de-ea50-4e0e-98a6-5134aaf352c9/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Cold Weather",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/9b13e501-3ffe-455b-a586-daa6efb859de/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Rainy Weather",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/9ee65605-240c-4023-867b-5f3a40f73b7c/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Jackets",
  },
  {
    link: "/ComingSoon",
    imgSrc:
      "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/bf7333fb-8ecb-4394-bb0f-05b8a7cbb946/nike-just-do-it.jpg",
    alt: "NikeApparel",
    title: "Trail Running",
  },
];
const womenProducts = [
  {
    id: 0,
    name: "Nike Dunk Low Retro",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-shoes-N9Vjbn.png",
  },
  {
    id: 1,
    name: "Nike Dunk Low",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-dd36JB.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    price: 109.95,
    imageSrc:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/28862ef5-d0f9-488c-9d37-702cd834ea2f/air-force-1-07-shoe-KfVcH8.png",
  },
];

const ads = [
  {
    name: "15% OFF SELECTED BRAS AND LEGGINGS",
    description:
      "Pair bras and leggings. Use code MIX23 on selected styles*. Valid til 12 October 9am CEST",
  },
  {
    name: "Winter Wear",
    description: "Get Ready for Cold and Rainy Weather Shop",
  },
  {
    name: "Shop All New Arrivals",
    description: "Shop",
  },
  {
    name: "Free Delivery & Returns",
    description:
      "Nike Members get free delivery and free 30-day returns. Learn More Join Us",
  },
];

// Create an object to hold all the data arrays
const data = {
  exploreItems,
  mensProducts,
  newFeaturedProducts,
  showcaseImages,
  sportItems,
  weatherClothing,
  womenProducts,
  ads,
};

module.exports = data;
