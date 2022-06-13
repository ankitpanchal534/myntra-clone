let categoryImage = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/48f59438-2806-47c5-bc44-e6b6882865c71653643704628-QL_Watches.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2d883965-5d34-4bf8-99e2-b263c8920d651653643704260-QL_GroomingEssentials.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/306481ec-1b07-46a5-81f9-210fa4ee21481653643704251-QL_Fragrances.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/77eee7e0-9638-4ddc-8726-b0ea0f9d9d591653643704145-QL_ActivewearW.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9c3501e3-22b0-47b0-b60a-2de70f3c8f951653643704178-QL_Bras_Briefs.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d3d0683b-3616-40c4-89d8-5fd3273ac80d1653643704226-QL_Flip-Flops.jpg",
];
const mappedImages = categoryImage.map((item, index) => {
  return `<div class="category-table" key=${index} >
                  <img src=${item}  />  
              </div>`;
});
//
document.querySelector(".category-table").innerHTML = mappedImages;
let categoryImage2 = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/d1b24c63-35f0-4800-8673-e404eff3678c1653371609502-BudgetBuys_Loungewear.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/80fc29d1-16f6-4043-82ce-35e4db4ebbf31653371609520-BudgetBuys_Makeup.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b16a87f-4bdb-4349-bfd2-25cb3114d8741653371609559-BudgetBuys_Shampoos_Conditioners.jpg",
];
const mappedImages2 = categoryImage2.map((item, index) => {
  return `<div class="category-table-2" key=${index} >
                    <img src=${item} class="category-table-image" />  
                </div>`;
});
//
document.querySelector(".category-table-2").innerHTML = mappedImages2;
let bestOfClothing = [
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d21dcf05-a081-4f98-be1a-ab1d7f6bac261653557668623-Sassafras.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d45fc4ac-1bbd-4cf2-8126-9a3791f64f731653557668275-Berrylush.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/336fb662-c6c6-46ef-9738-7beaf8eec6b61653557668660-Street_9.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/75a972cb-d3c3-42a8-909f-6ff87aa2d4781653557668722-Vero_Moda.jpg",
  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5ed1bde8-f82a-427b-a71b-a38ec997c9031653557668365-Forever_21.jpg",
];
const bestOfClothing1 = bestOfClothing.map((item, index) => {
  return `<div class="bestOfClothing1" key=${index} >
                    <img src=${item} class="bestOfClothing1-card" />  
                </div>`;
});
//
document.querySelector(".bestOfClothing1").innerHTML = bestOfClothing1;
