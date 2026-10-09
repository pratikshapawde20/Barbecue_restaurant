
"use strict";

const translations = {
  en: {
    announcement: "GOOD FOOD · LIVE FIRE · GREAT COMPANY",
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "Our Story",
    navContact: "Location",
    navBook: "Book a Table ↗",

    heroEyebrow: "THE GRILL MENU",
    heroTitle: "A special menu at The Grill<br><em>Our Signature Menu</em>",
    heroDescription: "Discover Korean BBQ prepared with fresh ingredients and thoughtful care.",
    heroButton: "Explore the Menu",

    catAll: "All Menu",
    catMeat: "Meat",
    catSides: "Sides",
    catMeals: "Meals",
    catDrinks: "Drinks",

    menuEyebrow: "MADE FOR THE TABLE",
    menuTitle: "Good food, better together.",
    menuDescription: "Explore grilled favourites and Korean-inspired flavours made for sharing.",

    meatHeading: "Grilled Meats",
    meatSub: "Premium cuts, grilled to perfection.",

    tagPopular: "Popular Favourite",
    tagPremium: "Premium Selection",
    tagShare: "Made for Sharing",

    porkName: "Samgyeopsal",
    porkDesc: "Enjoy Korean-style pork belly, grilled until golden with a rich, savoury flavour and satisfying texture.",
    porkIngredients: "Pork. Ask restaurant staff to confirm seasonings, accompaniments and potential allergens.",

    beefName: "Beef Short Rib",
    beefDesc: "A flavourful beef barbecue choice with a satisfying texture and rich grilled taste.",
    beefIngredients: "Beef. Confirm the exact cut, country of origin and any marinades with the restaurant.",

    bulgogiName: "Marinated Beef Bulgogi",
    bulgogiDesc: "Korean-style beef with a savoury, gently sweet marinade, prepared for a delicious barbecue meal.",
    bulgogiIngredients: "Beef and marinade. Ask about soy, wheat and other potential allergens.",

    spicyPorkName: "Spicy Pork Bulgogi",
    spicyPorkDesc: "Tender pork with a spicy Korean-inspired seasoning for a bold, satisfying flavour.",
    spicyPorkIngredients: "Pork and spicy seasoning. Confirm chilli ingredients and potential allergens with staff.",

    chickenName: "Dakgalbi",
    chickenDesc: "A hearty Korean-style chicken dish featuring savoury seasoning and a satisfying spicy kick.",
    chickenIngredients: "Chicken and seasoning. Confirm the actual preparation and allergen information with staff.",

    platterName: "Special Grill Platter",
    platterDesc: "A sharing platter featuring an assortment of barbecue favourites for a meal with family or friends.",
    platterIngredients: "The selection may vary. Ask staff to confirm the meats, quantities and possible cross-contact.",

    kimchiName: "Kimchi Pancake",
    kimchiDesc: "A Korean-style savoury pancake inspired by kimchi's distinctive tangy flavour.",
    kimchiIngredients: "Kimchi and batter. Ask about wheat, eggs and other possible allergens.",

    saladName: "Fresh Vegetable Salad",
    saladDesc: "A refreshing vegetable accompaniment that adds freshness and balance to your barbecue meal.",
    saladIngredients: "Vegetables and dressing. Confirm dressing ingredients and possible allergens.",

    japchaeName: "Japchae",
    japchaeDesc: "Korean glass noodles paired with vegetables for a delicious combination of texture and flavour.",
    japchaeIngredients: "Glass noodles, vegetables and seasoning. Ask about soy, sesame and other allergens.",

    noodlesName: "Korean Cold Noodles",
    noodlesDesc: "A refreshing noodle dish that offers a cool and satisfying finish to a Korean barbecue meal.",
    noodlesIngredients: "Noodles and broth. Ask about buckwheat, wheat and broth ingredients.",

    stewName: "Kimchi Stew",
    stewDesc: "A comforting Korean-style stew inspired by the rich, tangy flavour of kimchi.",
    stewIngredients: "Kimchi and broth. Confirm meat, seafood and stock ingredients with staff.",

    riceName: "Steamed Rice",
    riceDesc: "Warm steamed rice, a classic accompaniment to grilled meats and Korean stews.",
    riceIngredients: "Rice. Ask about preparation practices and possible cross-contact.",

    softDrinkName: "Soft Drinks",
    softDrinkDesc: "A selection of refreshing drinks to enjoy alongside your meal.",
    softDrinkIngredients: "Available choices and ingredients should be confirmed with restaurant staff.",

    teaName: "Traditional Tea",
    teaDesc: "A soothing tea option to enjoy before or after your Korean barbecue meal.",
    teaIngredients: "Tea selection and serving options may vary. Please ask the restaurant.",

    ingredientsLabel: "Ingredients & allergen information",
    disclaimer: "Menu items, prices, ingredients, origin information and allergen details shown here are examples. Please confirm current offerings and prices directly with the restaurant.",

    sidebarEyebrow: "THE GRILL PROMISE",
    sidebarTitle: "Fresh ingredients,<br>flavours to share.",
    sidebarText: "Good food begins with care. We want every gathering around the table to feel special.",

    promise1Title: "Thoughtful Preparation",
    promise1Text: "Every meal deserves care and attention.",
    promise2Title: "The Joy of Sharing",
    promise2Text: "A welcoming table for family and friends.",
    promise3Title: "Korean Barbecue",
    promise3Text: "A delicious meal built around the grill.",

    sidebarCtaTitle: "Make room for<br>a special meal.",
    sidebarCtaText: "Reserve a table for your next gathering.",
    sidebarCtaButton: "Reserve a Table",

    bannerKorean: "GOOD MOMENTS ARE BETTER SHARED",
    bannerTitle: "Bring everyone together.<br><em>Reserve your next meal.</em>",
    bannerText: "Enjoy a memorable meal with your favourite people at The Grill.",
    reserveButton: "Make a Reservation",
    callButton: "Call the Restaurant",

    footerAddress: "19beonji 327 Gap-dong, Yuseong District, Daejeon, South Korea",
    footerHours: "Opens at 11:00 AM. Please call to confirm closing time.",
    copyright: "All rights reserved.",
    footerTagline: "Good moments are better shared."
  },

  ko: {
    announcement: "좋은 음식 · 따뜻한 불판 · 소중한 사람들과 함께",
    navHome: "홈",
    navMenu: "메뉴",
    navAbout: "우리 이야기",
    navContact: "오시는 길",
    navBook: "예약하기 ↗",

    heroEyebrow: "더 그릴 메뉴",
    heroTitle: "더 그릴의 특별한 메뉴<br><em>시그니처 메뉴</em>",
    heroDescription: "신선한 재료와 정성스러운 손길로 준비한 한국식 바비큐를 만나보세요.",
    heroButton: "메뉴 둘러보기",

    catAll: "전체 메뉴",
    catMeat: "고기류",
    catSides: "사이드 메뉴",
    catMeals: "식사류",
    catDrinks: "음료",

    menuEyebrow: "함께 나누는 식탁",
    menuTitle: "좋은 음식, 함께하는 즐거움.",
    menuDescription: "정성스럽게 준비한 구이 메뉴와 다채로운 한국의 맛을 만나보세요.",

    meatHeading: "고기류",
    meatSub: "정성껏 구워 더욱 맛있는 고기.",

    tagPopular: "인기 메뉴",
    tagPremium: "프리미엄",
    tagShare: "함께 즐기는 메뉴",

    porkName: "삼겹살",
    porkDesc: "노릇하게 구운 돼지고기의 고소한 풍미와 쫄깃한 식감을 즐기는 대표적인 한국식 바비큐입니다.",
    porkIngredients: "돼지고기. 양념과 곁들임 재료, 알레르기 유발 성분은 직원에게 확인해 주세요.",

    beefName: "소갈비살",
    beefDesc: "풍부한 풍미와 만족스러운 식감을 즐길 수 있는 소고기 바비큐 메뉴입니다.",
    beefIngredients: "소고기. 실제 부위와 원산지, 양념 성분은 매장에 확인해 주세요.",

    bulgogiName: "양념 소불고기",
    bulgogiDesc: "감칠맛과 은은한 단맛이 어우러지는 양념으로 준비한 한국식 소불고기입니다.",
    bulgogiIngredients: "소고기와 양념. 간장, 밀 등 알레르기 유발 성분을 직원에게 확인해 주세요.",

    spicyPorkName: "매콤 돼지불고기",
    spicyPorkDesc: "매콤한 한국식 양념과 부드러운 돼지고기가 어우러져 풍부한 맛을 선사합니다.",
    spicyPorkIngredients: "돼지고기와 매콤한 양념. 고추 및 알레르기 유발 성분을 직원에게 확인해 주세요.",

    chickenName: "닭갈비",
    chickenDesc: "한국식 양념으로 맛을 더한 닭고기의 매콤하고 든든한 풍미를 즐겨 보세요.",
    chickenIngredients: "닭고기와 양념. 실제 조리 방법과 알레르기 정보는 직원에게 확인해 주세요.",

    platterName: "모둠 한판",
    platterDesc: "가족이나 친구들과 함께 다양한 바비큐 메뉴를 나누어 즐기기 좋은 모둠 메뉴입니다.",
    platterIngredients: "고기 구성은 달라질 수 있습니다. 실제 구성과 중량, 교차 접촉 가능성을 확인해 주세요.",

    kimchiName: "김치전",
    kimchiDesc: "김치 특유의 새콤한 풍미를 바삭하고 고소한 전으로 즐겨 보세요.",
    kimchiIngredients: "김치와 반죽. 밀, 달걀 등 알레르기 유발 성분을 직원에게 확인해 주세요.",

    saladName: "신선한 채소 샐러드",
    saladDesc: "바비큐와 함께 즐기기 좋은 산뜻한 채소 메뉴로 식탁에 신선함을 더합니다.",
    saladIngredients: "채소와 드레싱. 드레싱 성분과 알레르기 유발 성분을 확인해 주세요.",

    japchaeName: "잡채",
    japchaeDesc: "쫄깃한 당면과 다채로운 채소가 어우러지는 한국식 잡채입니다.",
    japchaeIngredients: "당면, 채소 및 양념. 간장, 참깨 등 알레르기 유발 성분을 확인해 주세요.",

    noodlesName: "냉면",
    noodlesDesc: "시원하고 깔끔하게 즐기기 좋은 한국식 면 요리로 식사를 산뜻하게 마무리해 보세요.",
    noodlesIngredients: "면과 육수. 메밀, 밀 및 육수 재료를 직원에게 확인해 주세요.",

    stewName: "김치찌개",
    stewDesc: "김치의 깊고 새콤한 풍미를 따뜻하게 즐기는 한국식 찌개입니다.",
    stewIngredients: "김치와 육수. 고기, 해산물 및 육수 재료는 직원에게 확인해 주세요.",

    riceName: "공기밥",
    riceDesc: "구운 고기와 한국식 찌개에 곁들이기 좋은 따뜻한 밥입니다.",
    riceIngredients: "쌀. 조리 환경과 교차 접촉에 관한 사항은 직원에게 문의해 주세요.",

    softDrinkName: "음료",
    softDrinkDesc: "식사와 함께 시원하게 즐기기 좋은 다양한 음료입니다.",
    softDrinkIngredients: "판매 중인 음료 종류와 성분은 직원에게 확인해 주세요.",

    teaName: "전통차",
    teaDesc: "식사 전후에 여유롭게 즐기기 좋은 차 메뉴입니다.",
    teaIngredients: "차 종류와 제공 방식은 매장에 확인해 주세요.",

    ingredientsLabel: "재료 및 알레르기 정보",
    disclaimer: "표시된 메뉴, 가격, 재료, 원산지 및 알레르기 정보는 예시입니다. 실제 판매 메뉴와 가격은 매장에 확인해 주세요.",

    sidebarEyebrow: "더 그릴의 약속",
    sidebarTitle: "신선한 재료,<br>함께 나누는 맛.",
    sidebarText: "좋은 음식은 정성에서 시작됩니다. 함께하는 모든 순간이 특별하도록 준비합니다.",

    promise1Title: "정성스러운 준비",
    promise1Text: "한 끼 한 끼 소중하게 준비합니다.",
    promise2Title: "함께하는 즐거움",
    promise2Text: "가족과 친구가 모이는 따뜻한 식탁.",
    promise3Title: "한국식 바비큐",
    promise3Text: "불판 위에서 완성되는 즐거운 식사.",

    sidebarCtaTitle: "함께 즐기는<br>특별한 식사.",
    sidebarCtaText: "소중한 사람들과의 자리를 예약해 보세요.",
    sidebarCtaButton: "테이블 예약",

    bannerKorean: "맛있는 순간, 함께하는 행복",
    bannerTitle: "모두 함께 모여<br><em>다음 식사를 예약하세요.</em>",
    bannerText: "더 그릴에서 소중한 사람들과 특별한 식사를 즐겨보세요.",
    reserveButton: "예약하기",
    callButton: "매장에 전화하기",

    footerAddress: "대전광역시 유성구 갑동 327, 19번지",
    footerHours: "오전 11시에 영업을 시작합니다. 마감 시간은 전화로 확인해 주세요.",
    copyright: "모든 권리 보유.",
    footerTagline: "맛있는 순간, 함께하는 행복."
  }
};

/* Language switching */

const languageSelect = document.getElementById("language");

function setLanguage(language) {
  const lang = language === "en" ? "en" : "ko";
  const dictionary = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.innerHTML = dictionary[key];
    }
  });

  languageSelect.value = lang;

  document.title = lang === "ko"
    ? "메뉴 | 더 그릴 - 대전 한국식 바비큐"
    : "Menu | The Grill Korean BBQ - Daejeon";

  try {
    localStorage.setItem("the-grill-menu-language", lang);
  } catch (error) {
    // The language switch works even if browser storage is unavailable.
  }
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

let initialLanguage = "ko";

try {
  initialLanguage =
    localStorage.getItem("the-grill-menu-language") ||
    localStorage.getItem("the-grill-language") ||
    "ko";
} catch (error) {
  initialLanguage = "ko";
}

setLanguage(initialLanguage);

/* Category filters */

const categoryButtons = document.querySelectorAll(".category-btn");
const dishCards = document.querySelectorAll(".dish-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    categoryButtons.forEach((item) => {
      const active = item === button;

      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    dishCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;
    });
  });
});

/* Mobile navigation */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});

/* Footer year */

document.getElementById("year").textContent =
  new Date().getFullYear();
