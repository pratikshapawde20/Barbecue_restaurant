
"use strict";

/* THE GRILL — ABOUT PAGE */

const translations = {
  ko: {
    announcement: "좋은 음식 · 따뜻한 불판 · 소중한 사람들과 함께",

    navHomeKo: "홈",
    navHomeEn: "Home",
    navMenuKo: "메뉴",
    navMenuEn: "Menu",
    navAboutKo: "우리 이야기",
    navAboutEn: "Our Story",
    navContactKo: "오시는 길",
    navContactEn: "Location",
    navReserveKo: "예약하기",
    navReserveEn: "Reservation ↗",

    heroEyebrow: "OUR STORY · 우리의 이야기",
    heroTitle: "더 그릴, 맛으로 이어지는 이야기",
    heroSubtitle: "The Grill, A Story of Great Taste",
    heroDescription:
      "좋은 음식과 따뜻한 환대, 그리고 함께하는 시간.\n더 그릴은 식사 이상의 특별한 순간을 소중히 생각합니다.",
    discover: "우리 이야기 알아보기",
    signature1: "좋은 음식,",
    signature2: "좋은 사람들,",
    signature3: "더 그릴.",

    storyEyebrow: "THE HEART OF THE GRILL",
    storyTitle: "한 끼의 식사에\n마음을 담습니다.",
    storyEnglishTitle: "More Than a Meal",
    storyP1:
      "한국에서 식사는 단순히 배를 채우는 시간이 아닙니다. 가족과 친구가 둘러앉고, 이야기를 나누고, 하루의 기쁨을 함께 나누는 소중한 시간입니다.",
    storyP2:
      "더 그릴은 이러한 한국의 식문화와 함께하는 즐거움에서 영감을 얻습니다. 맛있는 음식, 편안한 분위기, 따뜻한 환대로 여러분의 식사 시간이 오래 기억되기를 바랍니다.",
    storyP3:
      "특별한 기념일부터 평범한 저녁까지, 소중한 사람들과 함께하는 순간을 더 맛있고 따뜻하게 만들어 갑니다.",
    quote: "좋은 음식은 사람과 사람 사이의 거리를 좁혀 줍니다.",
    quoteEnglish: "Good food brings people closer.",
    imageLabel1: "THE ART OF KOREAN BBQ",
    imageCaption1: "불 위에서 완성되는 깊은 맛",

    experienceEyebrow: "WHAT MAKES A MOMENT SPECIAL",
    experienceTitle: "더 그릴이 소중히 여기는 세 가지",
    experienceDescription:
      "한국의 식탁에서 영감을 받은 맛, 정성, 그리고 함께하는 기쁨.",

    value1Kicker: "TASTE · 맛",
    value1Title: "맛에 대한 정성",
    value1English: "Made for the Love of Food",
    value1Text:
      "한국식 바비큐의 풍미와 다채로운 음식의 매력을 소중히 여기며, 한 끼 한 끼에 정성을 담습니다.",

    value2Kicker: "HOSPITALITY · 환대",
    value2Title: "따뜻한 환대",
    value2English: "A Place to Feel Welcome",
    value2Text:
      "처음 방문하는 분도 편안하게 식사할 수 있도록 친절하고 배려하는 분위기를 소중히 생각합니다.",

    value3Kicker: "TOGETHERNESS · 함께",
    value3Title: "함께하는 행복",
    value3English: "Better When Shared",
    value3Text:
      "가족, 친구, 동료와 둘러앉아 나누는 음식과 대화. 함께하는 순간이 식사를 더욱 특별하게 만듭니다.",

    cultureEyebrow: "THE BEAUTY OF KOREAN DINING",
    cultureTitle: "나누는 마음이\n한국 식문화의 아름다움입니다.",
    cultureEnglish: "A Culture of Sharing",
    cultureText:
      "여러 반찬을 함께 나누고, 고기가 익어 가는 동안 이야기를 나누고, 마지막 한 입까지 함께 즐기는 식사. 더 그릴은 음식을 통해 사람들을 이어 주는 한국 식문화의 따뜻한 매력을 소중히 생각합니다.",
    exploreMenu: "메뉴 둘러보기",

    promiseEyebrow: "OUR PROMISE",
    promiseTitle: "음식에는 마음을,\n손님에게는 정성을.",
    promiseEnglish: "Thoughtful Food. Heartfelt Hospitality.",

    promise1Title: "음식에 대한 존중",
    promise1Text:
      "재료와 조리 과정에 관심을 기울이고, 음식이 주는 즐거움을 소중히 여깁니다.",
    promise2Title: "사람을 위한 배려",
    promise2Text:
      "다양한 손님의 취향과 필요를 존중하며, 편안한 식사 경험을 지향합니다.",
    promise3Title: "함께 만드는 추억",
    promise3Text:
      "일상의 식사도 특별한 날의 식사도 즐거운 추억으로 남기를 바랍니다.",

    closingEyebrow: "COME GATHER AROUND OUR TABLE",
    closingTitle: "다음 맛있는 순간은\n더 그릴에서.",
    closingText: "소중한 사람들과 함께하는 식사를 계획해 보세요.",
    closingReserve: "예약하기",
    closingMenu: "메뉴 보기",

    footerLocation: "매장 위치",
    footerCall: "전화 문의",
    footerHome: "홈",
    footerMenu: "메뉴",
    footerAbout: "우리 이야기",
    footerContact: "오시는 길",
    footerReserve: "예약하기",
    copyright: "모든 권리 보유.",
    footerTagline: "좋은 음식, 행복한 순간.",

    chatLauncher: "메뉴 도우미",
    chatTitle: "더 그릴 메뉴 도우미",
    chatStatus: "메뉴 안내 도우미",
    chatWelcome:
      "안녕하세요! 더 그릴 메뉴 도우미입니다. 😊\n재료, 메뉴, 매운맛, 채식 옵션에 관해 질문해 주세요.",
    quickIngredients: "재료 안내",
    quickSpicy: "매운 메뉴",
    quickVegetarian: "채식 메뉴",
    quickAllergens: "알레르기",
    chatPlaceholder: "메뉴에 관해 물어보세요...",
    chatDisclaimer:
      "자동 안내 도우미입니다. 실제 메뉴와 알레르기는 매장에 확인해 주세요.",

    answerIngredients:
      "메뉴 예시로는 삼겹살, 소갈비, 불고기, 잡채, 김치찌개 등이 있습니다. 이는 한국 음식의 예시이며, 더 그릴의 실제 판매 메뉴를 모두 나타내는 것은 아닙니다. 현재 메뉴와 재료는 매장에 확인해 주세요.",
    answerSpicy:
      "매콤한 불고기나 닭갈비는 한국 음식의 예시입니다. 실제 판매 여부와 매운 정도는 직원에게 확인해 주세요.",
    answerVegetarian:
      "채소 반찬이나 샐러드가 있을 수 있지만, 육수와 소스에 동물성 재료가 들어갈 수 있습니다. 완전한 채식 식사가 가능한지 매장에 문의해 주세요.",
    answerAllergens:
      "알레르기가 있다면 직원에게 반드시 알려 주세요. 간장, 밀, 참깨, 달걀, 해산물 등의 성분과 조리 환경을 확인해 주세요. 교차 접촉을 방지할 수 있는지는 매장에 확인해야 합니다.",
    answerAvailability:
      "현재 실시간 메뉴 재고를 확인할 수는 없습니다. 실제 판매 메뉴는 매장에 전화 +82 42-300-0448로 문의해 주세요.",
    answerReservation:
      "예약 페이지에서 날짜, 시간, 인원과 연락처를 입력해 요청해 주세요. 매장에서 확인하기 전까지 예약은 확정되지 않습니다.",
    answerHours:
      "제공된 정보에 따르면 매장은 오전 11시에 영업을 시작합니다. 방문 날짜의 영업시간은 +82 42-300-0448로 확인해 주세요.",
    answerLocation:
      "주소는 대전광역시 유성구 갑동 327, 19번지입니다. 자세한 위치는 오시는 길 페이지에서 확인해 주세요.",
    answerPrice:
      "현재 확인된 메뉴 가격표가 없습니다. 최신 가격은 매장에 문의해 주세요.",
    answerThanks:
      "감사합니다! 더 그릴에서 즐거운 식사 시간을 보내시길 바랍니다. 😊",
    answerDefault:
      "메뉴, 재료, 매운맛, 채식 옵션 또는 알레르기에 관해 질문해 주세요. 실제 메뉴와 예약 정보는 매장에 확인해 주세요."
  },

  en: {
    announcement: "GOOD FOOD · LIVE FIRE · GREAT COMPANY",

    navHomeKo: "Home",
    navHomeEn: "Home",
    navMenuKo: "Menu",
    navMenuEn: "Menu",
    navAboutKo: "Our Story",
    navAboutEn: "Our Story",
    navContactKo: "Location",
    navContactEn: "Location",
    navReserveKo: "Reserve",
    navReserveEn: "Reservation ↗",

    heroEyebrow: "OUR STORY · 우리의 이야기",
    heroTitle: "The Grill, A Story of Great Taste",
    heroSubtitle: "A Korean Table. A Shared Story.",
    heroDescription:
      "Great food, warm hospitality and time spent together.\nAt The Grill, we believe the best meals become meaningful moments.",
    discover: "Discover Our Story",
    signature1: "Good food,",
    signature2: "good people,",
    signature3: "The Grill.",

    storyEyebrow: "THE HEART OF THE GRILL",
    storyTitle: "Every meal deserves\nsomething heartfelt.",
    storyEnglishTitle: "More Than a Meal",
    storyP1:
      "In Korean dining culture, a meal can be much more than a way to satisfy hunger. It is a chance for family and friends to gather, exchange stories and share the little joys of everyday life.",
    storyP2:
      "The Grill draws inspiration from this spirit of togetherness. We value delicious food, a welcoming atmosphere and thoughtful hospitality that help make time around the table memorable.",
    storyP3:
      "From special celebrations to an ordinary evening out, we hope every meal shared with the people you care about feels a little warmer and more meaningful.",
    quote: "Good food brings people closer.",
    quoteEnglish: "A table is better when shared.",
    imageLabel1: "THE ART OF KOREAN BBQ",
    imageCaption1: "Rich flavours over the fire",

    experienceEyebrow: "WHAT MAKES A MOMENT SPECIAL",
    experienceTitle: "Three things we hold close",
    experienceDescription:
      "Inspired by Korean dining: flavour, thoughtful care and the joy of sharing.",

    value1Kicker: "TASTE · FLAVOUR",
    value1Title: "A love of good food",
    value1English: "Made for the Love of Food",
    value1Text:
      "We celebrate the appeal of Korean barbecue and the variety of Korean cuisine, with a thoughtful approach to every meal.",

    value2Kicker: "HOSPITALITY · WELCOME",
    value2Title: "Warm hospitality",
    value2English: "A Place to Feel Welcome",
    value2Text:
      "We value a friendly, considerate atmosphere where first-time visitors and familiar guests can feel comfortable.",

    value3Kicker: "TOGETHERNESS · CONNECTION",
    value3Title: "The joy of sharing",
    value3English: "Better When Shared",
    value3Text:
      "Food and conversation bring families, friends and colleagues together. Sharing the moment is part of what makes a meal special.",

    cultureEyebrow: "THE BEAUTY OF KOREAN DINING",
    cultureTitle: "Sharing is at the heart\nof Korean dining.",
    cultureEnglish: "A Culture of Sharing",
    cultureText:
      "Passing around banchan, chatting while the barbecue cooks and enjoying the meal together are familiar pleasures of Korean dining. We appreciate the way food can bring people together and create a sense of connection.",
    exploreMenu: "Explore the Menu",

    promiseEyebrow: "OUR PROMISE",
    promiseTitle: "Thoughtful food.\nHeartfelt hospitality.",
    promiseEnglish: "Thoughtful Food. Heartfelt Hospitality.",

    promise1Title: "Respect for food",
    promise1Text:
      "We value the ingredients, preparation and small details that contribute to an enjoyable meal.",
    promise2Title: "Consideration for people",
    promise2Text:
      "We aim to respect different tastes and needs and create a comfortable dining experience.",
    promise3Title: "Memories made together",
    promise3Text:
      "We hope everyday dinners and special celebrations alike become happy memories.",

    closingEyebrow: "COME GATHER AROUND OUR TABLE",
    closingTitle: "Your next delicious moment\nstarts at The Grill.",
    closingText: "Plan a meal and make time for the people who matter.",
    closingReserve: "Reserve a Table",
    closingMenu: "Explore the Menu",

    footerLocation: "Our Location",
    footerCall: "Call the Restaurant",
    footerHome: "Home",
    footerMenu: "Menu",
    footerAbout: "Our Story",
    footerContact: "Location",
    footerReserve: "Reservation",
    copyright: "All rights reserved.",
    footerTagline: "Good food. Happy moments.",

    chatLauncher: "Menu Assistant",
    chatTitle: "The Grill Menu Assistant",
    chatStatus: "Menu information assistant",
    chatWelcome:
      "Hello and welcome to The Grill! 😊\nAsk me about Korean food, ingredients, spice levels or vegetarian options.",
    quickIngredients: "Ingredients",
    quickSpicy: "Spicy dishes",
    quickVegetarian: "Vegetarian",
    quickAllergens: "Allergens",
    chatPlaceholder: "Ask about the menu...",
    chatDisclaimer:
      "Automated menu guide. Please confirm actual dishes and allergens with restaurant staff.",

    answerIngredients:
      "Examples of Korean dishes include samgyeopsal (pork belly), beef short ribs, bulgogi, japchae and kimchi stew. These are examples of Korean cuisine, not a verified list of The Grill's available dishes. Please ask the restaurant about its current menu and ingredients.",
    answerSpicy:
      "Spicy bulgogi and dakgalbi are examples of Korean dishes with a spicy flavour. Ask staff about actual availability and spice levels.",
    answerVegetarian:
      "Vegetable sides or salads may be available, but broths and sauces can contain animal-derived ingredients. Please contact the restaurant to check whether a fully vegetarian meal can be prepared.",
    answerAllergens:
      "Please inform restaurant staff about any allergies. Ask them to check ingredients such as soy, wheat, sesame, eggs and seafood, as well as preparation practices. Confirm directly whether cross-contact can be prevented.",
    answerAvailability:
      "I cannot check live menu stock. Please call +82 42-300-0448 to confirm which dishes are currently available.",
    answerReservation:
      "Visit the reservation page and enter your date, time, party size and contact details. Your booking is not confirmed until the restaurant confirms it.",
    answerHours:
      "The supplied information lists an 11:00 AM opening time. Please call +82 42-300-0448 to verify the hours for your visit.",
    answerLocation:
      "The supplied address is 19beonji 327 Gap-dong, Yuseong District, Daejeon, South Korea. Visit the Location page for directions.",
    answerPrice:
      "I don't have a verified current menu price list. Please contact the restaurant for current prices.",
    answerThanks:
      "You're welcome! We hope you enjoy a wonderful meal at The Grill. 😊",
    answerDefault:
      "Ask me about Korean food, ingredients, spice levels, vegetarian options or allergens. Please confirm actual menu and reservation details with the restaurant."
  }
};

/* LANGUAGE SWITCH */

const languageSelect = document.getElementById("language");
let currentLanguage = "ko";

function translate(key) {
  return translations[currentLanguage][key] ??
    translations.en[key] ??
    key;
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ko";

  document.documentElement.lang = currentLanguage;
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[currentLanguage][key];

    if (translated !== undefined) {
      // These translations are authored in this file.
      // User-entered chatbot text is always rendered with textContent.
      element.textContent = translated;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translated = translations[currentLanguage][key];

    if (translated !== undefined) {
      element.placeholder = translated;
    }
  });

  document.title = currentLanguage === "ko"
    ? "우리 이야기 | 더 그릴 — 대전 한국식 바비큐"
    : "Our Story | The Grill — Korean BBQ in Daejeon";

  try {
    localStorage.setItem("the-grill-language", currentLanguage);
    localStorage.setItem("the-grill-menu-language", currentLanguage);
  } catch (error) {
    // Language switching works even if storage is unavailable.
  }

  document.getElementById("chatLauncher").setAttribute(
    "aria-label",
    currentLanguage === "ko" ? "메뉴 도우미 열기" : "Open menu assistant"
  );

  document.getElementById("closeChat").setAttribute(
    "aria-label",
    currentLanguage === "ko" ? "채팅 닫기" : "Close chat"
  );

  // Update the initial chatbot greeting if no conversation has started.
  if (chatMessages.children.length === 1 &&
      chatMessages.firstElementChild.classList.contains("bot-message")) {
    chatMessages.firstElementChild.querySelector(".message-bubble").textContent =
      translate("chatWelcome");
  }
}

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

let preferredLanguage = "ko";

try {
  preferredLanguage =
    localStorage.getItem("the-grill-language") ||
    localStorage.getItem("the-grill-menu-language") ||
    "ko";
} catch (error) {
  preferredLanguage = "ko";
}

/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeNavigation() {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute(
    "aria-label",
    currentLanguage === "ko" ? "메뉴 열기" : "Open navigation"
  );
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? (currentLanguage === "ko" ? "메뉴 닫기" : "Close navigation")
      : (currentLanguage === "ko" ? "메뉴 열기" : "Open navigation")
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("click", (event) => {
  if (
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeNavigation();
  }
});

/* SCROLL REVEAL ANIMATIONS */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -25px 0px"
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* MENU CHAT ASSISTANT */

const chatLauncher = document.getElementById("chatLauncher");
const chatPanel = document.getElementById("chatPanel");
const closeChatButton = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const quickQuestions = document.getElementById("quickQuestions");

function openChat() {
  chatPanel.hidden = false;
  chatLauncher.setAttribute("aria-expanded", "true");
  chatInput.focus({ preventScroll: true });
}

function closeChat() {
  chatPanel.hidden = true;
  chatLauncher.setAttribute("aria-expanded", "false");
  chatLauncher.focus({ preventScroll: true });
}

chatLauncher.addEventListener("click", () => {
  if (chatPanel.hidden) {
    openChat();
  } else {
    closeChat();
  }
});

closeChatButton.addEventListener("click", closeChat);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    closeChat();
  }
});

function addChatMessage(message, sender = "bot") {
  const row = document.createElement("div");
  row.className = sender === "user"
    ? "message user-message"
    : "message bot-message";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  // Never interpret customer messages as HTML.
  bubble.textContent = message;

  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getMenuAnswer(question) {
  const q = question.toLowerCase();

  const includesAny = (...terms) =>
    terms.some((term) => q.includes(term));

  if (includesAny(
    "allerg", "알레르기", "알러지", "gluten", "글루텐",
    "peanut", "땅콩", "sesame", "참깨"
  )) {
    return translate("answerAllergens");
  }

  if (includesAny(
    "vegetarian", "vegan", "채식", "비건",
    "고기 없는", "고기없이"
  )) {
    return translate("answerVegetarian");
  }

  if (includesAny(
    "spicy", "hot", "매운", "매워", "맵나요",
    "chili", "chilli", "고추"
  )) {
    return translate("answerSpicy");
  }

  if (includesAny(
    "ingredient", "ingredients", "재료", "성분",
    "contain", "들어가", "무엇으로"
  )) {
    return translate("answerIngredients");
  }

  if (includesAny(
    "available", "availability", "sold out",
    "있나요", "판매", "재고", "현재 메뉴"
  )) {
    return translate("answerAvailability");
  }

  if (includesAny(
    "reservation", "reserve", "booking", "book a table",
    "예약", "자리"
  )) {
    return translate("answerReservation");
  }

  if (includesAny(
    "opening", "hours", "open", "close",
    "영업", "시간", "몇 시"
  )) {
    return translate("answerHours");
  }

  if (includesAny(
    "address", "location", "directions", "where",
    "주소", "위치", "어디"
  )) {
    return translate("answerLocation");
  }

  if (includesAny("price", "cost", "how much", "가격", "얼마")) {
    return translate("answerPrice");
  }

  if (includesAny("thank", "감사", "고마워")) {
    return translate("answerThanks");
  }

  if (includesAny(
    "menu", "dish", "food", "meat", "pork", "beef",
    "chicken", "kimchi", "불고기", "삼겹살",
    "고기", "음식", "메뉴", "닭갈비", "잡채"
  )) {
    return translate("answerIngredients");
  }

  return translate("answerDefault");
}

function sendChatMessage(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;

  addChatMessage(cleanMessage, "user");

  const answer = getMenuAnswer(cleanMessage);

  window.setTimeout(() => {
    addChatMessage(answer, "bot");
  }, 220);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (!message) return;

  chatInput.value = "";
  sendChatMessage(message);
});

quickQuestions.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.question;

    const prompts = {
      ko: {
        ingredients: "어떤 재료가 들어가나요?",
        spicy: "매운 메뉴가 있나요?",
        vegetarian: "채식 메뉴가 있나요?",
        allergens: "알레르기 정보를 알려주세요."
      },
      en: {
        ingredients: "What ingredients are used?",
        spicy: "Which dishes are spicy?",
        vegetarian: "Do you have vegetarian options?",
        allergens: "Can you tell me about allergens?"
      }
    };

    openChat();
    sendChatMessage(prompts[currentLanguage][key]);
  });
});

/* FOOTER YEAR */

document.getElementById("year").textContent =
  new Date().getFullYear();

/* APPLY SAVED LANGUAGE AFTER INITIALIZATION */

applyLanguage(preferredLanguage);
