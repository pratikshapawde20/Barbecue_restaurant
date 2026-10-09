
"use strict";

/*
  THE GRILL — RESERVATION PAGE
  Files: reservation.html, reservation.css, reservation.js

  IMPORTANT:
  Replace RESTAURANT_EMAIL with the restaurant's verified email
  before publishing the reservation service.
*/

const RESTAURANT_EMAIL = "REPLACE_WITH_RESTAURANT_EMAIL@example.com";

const words = {
  ko: {
    announcement: "좋은 음식 · 따뜻한 불판 · 소중한 사람들과 함께",
    navHome: "홈",
    navMenu: "메뉴",
    navAbout: "우리 이야기",
    navContact: "오시는 길",
    navBook: "예약하기 ↗",

    heroEyebrow: "좋은 순간을 위한 테이블",
    heroTitle: "좋은 사람들과 함께하는<br>특별한 식사.<em>A seat at our table.</em>",
    heroDescription: "소중한 사람들과의 시간을 더 특별하게.<br>더 그릴에서 다음 식사를 예약해 보세요.",
    heroButton: "예약 시작하기",

    sectionEyebrow: "고객님을 위한 테이블",
    sectionTitle: "예약하고, 편안하게 즐기세요.",
    sectionDescription: "아래 정보를 작성해 주세요. 예약 요청을 보내면 매장에서 확인 후 연락드립니다.",
    reservationLabel: "RESERVATION",

    formTitle: "테이블 예약",
    formSubtitle: "방문 계획을 알려주세요.",
    nameLabel: "이름 *",
    namePlaceholder: "성함을 입력해 주세요",
    phoneLabel: "전화번호 *",
    phonePlaceholder: "+82 ...",
    emailLabel: "이메일 *",
    emailPlaceholder: "your@email.com",
    dateLabel: "예약 날짜 *",
    timeLabel: "예약 시간 *",
    timePlaceholder: "시간 선택",
    guestsLabel: "인원 *",
    occasionLabel: "방문 목적",
    occasionRegular: "일반 식사",
    occasionBirthday: "생일",
    occasionAnniversary: "기념일",
    occasionBusiness: "비즈니스 모임",
    occasionFamily: "가족 모임",
    occasionOther: "기타",
    requestsLabel: "특별 요청 사항",
    requestsPlaceholder: "알레르기, 좌석 요청 또는 기타 사항을 알려주세요.",
    consentText: "예약 요청 처리를 위해 입력한 연락처 정보가 사용되는 것에 동의합니다. *",
    submitButton: "예약 요청 보내기",
    formNote: "요청 제출만으로 예약이 확정되지는 않습니다. 매장의 확인을 기다려 주세요.",

    photoEyebrow: "더 그릴에 오신 것을 환영합니다",
    photoTitle: "맛있는 순간을<br>함께 나누세요.",
    infoEyebrow: "매장 방문 안내",
    infoTitle: "매장 안내",
    addressLabel: "주소",
    phoneInfoLabel: "전화 문의",
    hoursLabel: "영업 안내",
    hoursText: "오전 11시 오픈. 마감 시간은 매장에 문의해 주세요.",
    directionsButton: "길 찾기",

    helpTitle: "메뉴가 궁금하신가요?",
    helpText: "메뉴 도우미에게 재료, 매운맛, 메뉴 정보를 물어보세요.",
    chatOpen: "메뉴 도우미 열기",

    stepsEyebrow: "간단하고 세심한 예약",
    stepsTitle: "예약은 간단하게, 식사는 특별하게.",
    step1Title: "예약 정보 입력",
    step1Text: "날짜, 시간, 인원과 연락처를 입력해 주세요.",
    step2Title: "매장 확인",
    step2Text: "매장에서 예약 가능 여부를 확인하고 연락드립니다.",
    step3Title: "함께 즐기기",
    step3Text: "확인된 예약 시간에 방문해 맛있는 식사를 즐겨보세요.",

    copyright: "모든 권리 보유.",
    footerTagline: "맛있는 순간, 함께하는 행복.",

    chatLauncher: "메뉴 도우미",
    chatTitle: "더 그릴 메뉴 도우미",
    chatOnline: "메뉴 안내 도우미",
    chatWelcome: "안녕하세요! 더 그릴 메뉴 도우미입니다. 😊\n재료, 메뉴, 매운맛, 채식 옵션에 관해 질문해 주세요.",
    quickIngredients: "재료 안내",
    quickSpicy: "매운 메뉴",
    quickVegetarian: "채식 메뉴",
    quickAllergens: "알레르기",
    chatPlaceholder: "메뉴에 관해 물어보세요...",
    chatSend: "↑",
    chatDisclaimer: "메뉴 안내용 자동 도우미입니다. 실제 메뉴와 알레르기는 매장에 확인해 주세요.",

    missingEmail: "예약 이메일 주소가 아직 설정되지 않았습니다. 전화 +82 42-300-0448로 예약을 문의해 주세요.",
    successTitle: "예약 요청을 준비했습니다.",
    successBody: "이메일 앱에서 내용을 확인하고 보내기를 눌러 주세요. 매장에서 확인하기 전까지 예약은 확정되지 않습니다.",
    errorTitle: "입력 내용을 확인해 주세요.",
    invalidDate: "오늘 이후의 날짜를 선택해 주세요.",
    emailNotConfigured: "예약 이메일이 아직 설정되지 않았습니다. 전화로 문의해 주세요.",
    mailSubject: "더 그릴 예약 요청",
    mailIntro: "안녕하세요, 더 그릴에 예약을 요청합니다.",
    mailName: "이름",
    mailPhone: "전화번호",
    mailEmail: "이메일",
    mailDate: "예약 날짜",
    mailTime: "예약 시간",
    mailGuests: "인원",
    mailOccasion: "방문 목적",
    mailRequests: "특별 요청",
    mailClosing: "예약 가능 여부를 확인해 주시면 감사하겠습니다.",

    answerIngredients: "메뉴 예시로는 삼겹살, 소갈비살, 양념 소불고기, 닭갈비, 잡채, 김치찌개 등이 있습니다. 실제 판매 메뉴와 재료는 매장에 확인해 주세요.",
    answerSpicy: "매콤 돼지불고기와 닭갈비는 매운 메뉴의 예시입니다. 매운 정도와 실제 판매 여부는 직원에게 확인해 주세요.",
    answerVegetarian: "채소 샐러드나 채소 반찬이 있을 수 있지만, 채식 메뉴와 육수·소스의 성분은 확인이 필요합니다. 완전한 채식 식사가 가능한지 매장에 문의해 주세요.",
    answerAllergens: "알레르기가 있다면 예약 요청란에 꼭 적어 주세요. 간장, 밀, 참깨, 달걀, 해산물 등 재료와 조리 환경을 직원에게 확인해 주세요. 교차 접촉을 완전히 방지할 수 있는지는 매장에서 확인해야 합니다.",
    answerAvailability: "현재 실시간 메뉴 재고나 예약 가능 여부를 확인할 수는 없습니다. 전화 +82 42-300-0448로 문의해 주세요.",
    answerReservation: "예약 양식에 날짜, 시간, 인원, 연락처를 입력해 요청해 주세요. 매장에서 예약을 확인하기 전까지는 확정 예약이 아닙니다.",
    answerHours: "매장은 오전 11시에 영업을 시작하는 것으로 안내되어 있습니다. 해당 날짜의 영업 여부와 마감 시간은 전화 +82 42-300-0448로 확인해 주세요.",
    answerLocation: "매장 주소는 대전광역시 유성구 갑동 327, 19번지입니다. 페이지의 '길 찾기' 버튼을 눌러 지도에서 확인해 주세요.",
    answerPrice: "메뉴 가격은 달라질 수 있으며 현재 가격표를 확인할 수 없습니다. 최신 가격은 매장에 문의해 주세요.",
    answerThanks: "감사합니다! 더 그릴에서 즐거운 식사 시간을 보내시길 바랍니다. 😊",
    answerDefault: "메뉴, 재료, 매운맛, 채식 옵션 또는 알레르기에 관해 질문해 주세요. 예약과 영업시간은 +82 42-300-0448로 확인할 수 있습니다."
  },

  en: {
    announcement: "GOOD FOOD · LIVE FIRE · GREAT COMPANY",
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "Our Story",
    navContact: "Location",
    navBook: "Book a Table ↗",

    heroEyebrow: "A TABLE FOR GOOD MOMENTS",
    heroTitle: "A special meal<br>with your favourite people.<em>A seat at our table.</em>",
    heroDescription: "Make time together feel more special.<br>Reserve your next meal at The Grill.",
    heroButton: "Start Your Reservation",

    sectionEyebrow: "YOUR TABLE AWAITS",
    sectionTitle: "Reserve your table and relax.",
    sectionDescription: "Fill in your details. The restaurant will review your request and contact you.",
    reservationLabel: "RESERVATION",

    formTitle: "Reserve a Table",
    formSubtitle: "Tell us about your visit.",
    nameLabel: "Full name *",
    namePlaceholder: "Enter your full name",
    phoneLabel: "Phone number *",
    phonePlaceholder: "+82 ...",
    emailLabel: "Email address *",
    emailPlaceholder: "your@email.com",
    dateLabel: "Reservation date *",
    timeLabel: "Reservation time *",
    timePlaceholder: "Choose a time",
    guestsLabel: "Number of guests *",
    occasionLabel: "Occasion",
    occasionRegular: "Regular dining",
    occasionBirthday: "Birthday",
    occasionAnniversary: "Anniversary",
    occasionBusiness: "Business meeting",
    occasionFamily: "Family gathering",
    occasionOther: "Other",
    requestsLabel: "Special requests",
    requestsPlaceholder: "Tell us about allergies, seating requests or other needs.",
    consentText: "I agree that my contact details may be used to handle this reservation request. *",
    submitButton: "Send Reservation Request",
    formNote: "Submitting a request does not confirm a booking. Please wait for confirmation from the restaurant.",

    photoEyebrow: "WELCOME TO THE GRILL",
    photoTitle: "Share a delicious<br>moment together.",
    infoEyebrow: "VISIT US",
    infoTitle: "Restaurant Information",
    addressLabel: "Address",
    phoneInfoLabel: "Call the restaurant",
    hoursLabel: "Opening hours",
    hoursText: "Opens at 11:00 AM. Please call to confirm closing time.",
    directionsButton: "Get Directions",

    helpTitle: "Curious about the menu?",
    helpText: "Ask our menu assistant about dishes, ingredients and spice levels.",
    chatOpen: "Open Menu Assistant",

    stepsEyebrow: "SIMPLE & THOUGHTFUL",
    stepsTitle: "Easy to request. Special to enjoy.",
    step1Title: "Share your details",
    step1Text: "Enter your date, time, party size and contact details.",
    step2Title: "Wait for confirmation",
    step2Text: "The restaurant will check availability and contact you.",
    step3Title: "Enjoy your meal",
    step3Text: "Visit at your confirmed time and enjoy a meal together.",

    copyright: "All rights reserved.",
    footerTagline: "Good moments are better shared.",

    chatLauncher: "Menu Assistant",
    chatTitle: "The Grill Menu Assistant",
    chatOnline: "Menu information assistant",
    chatWelcome: "Hello and welcome to The Grill! 😊\nAsk me about ingredients, dishes, spice levels or vegetarian options.",
    quickIngredients: "Ingredients",
    quickSpicy: "Spicy dishes",
    quickVegetarian: "Vegetarian",
    quickAllergens: "Allergens",
    chatPlaceholder: "Ask about our menu...",
    chatSend: "↑",
    chatDisclaimer: "Automated menu guide. Please confirm actual dishes and allergen information with restaurant staff.",

    missingEmail: "The restaurant email has not been configured yet. Please call +82 42-300-0448 to enquire about your reservation.",
    successTitle: "Your reservation request is ready.",
    successBody: "Review the details in your email app and press Send. Your booking is not confirmed until the restaurant confirms it.",
    errorTitle: "Please check your information.",
    invalidDate: "Please select today or a future date.",
    emailNotConfigured: "The reservation email has not been configured. Please contact the restaurant by phone.",
    mailSubject: "The Grill Reservation Request",
    mailIntro: "Hello, I would like to request a reservation at The Grill.",
    mailName: "Name",
    mailPhone: "Phone",
    mailEmail: "Email",
    mailDate: "Date",
    mailTime: "Time",
    mailGuests: "Number of guests",
    mailOccasion: "Occasion",
    mailRequests: "Special requests",
    mailClosing: "Please let me know if this reservation is available.",

    answerIngredients: "Menu examples include samgyeopsal (pork belly), beef short rib, marinated beef bulgogi, dakgalbi, japchae and kimchi stew. Please confirm the actual menu and ingredients with the restaurant.",
    answerSpicy: "Spicy pork bulgogi and dakgalbi are examples of spicy Korean dishes. Ask staff about the spice level and current availability.",
    answerVegetarian: "A vegetable salad or vegetable side dishes may be available, but their broths, dressings and sauces need to be checked. Contact the restaurant to confirm whether a fully vegetarian meal can be prepared.",
    answerAllergens: "Please mention allergies in your reservation request. Ask staff about ingredients such as soy, wheat, sesame, eggs and seafood, as well as food preparation and cross-contact. The restaurant must confirm whether your needs can be accommodated safely.",
    answerAvailability: "I cannot check live menu stock or reservation availability. Please call +82 42-300-0448 to confirm.",
    answerReservation: "Complete the reservation form with your date, time, party size and contact details. It is not a confirmed booking until the restaurant confirms it.",
    answerHours: "The restaurant is listed as opening at 11:00 AM. Please call +82 42-300-0448 to confirm opening and closing times for your chosen date.",
    answerLocation: "The restaurant address is 19beonji 327 Gap-dong, Yuseong District, Daejeon, South Korea. Use the Get Directions button to view the map.",
    answerPrice: "Menu prices may change, and I do not have a verified current price list. Please contact the restaurant for current prices.",
    answerThanks: "You're welcome! We hope you have a wonderful meal at The Grill. 😊",
    answerDefault: "Ask me about dishes, ingredients, spice levels, vegetarian options or allergens. For bookings and opening hours, call +82 42-300-0448."
  }
};

/* ---------------- LANGUAGE SWITCH ---------------- */

const languageSelect = document.getElementById("language");
const html = document.documentElement;

let currentLanguage = "ko";

function t(key) {
  return words[currentLanguage][key] || words.en[key] || key;
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ko";

  html.lang = currentLanguage;
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (words[currentLanguage][key] !== undefined) {
      element.innerHTML = words[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (words[currentLanguage][key] !== undefined) {
      element.placeholder = words[currentLanguage][key];
    }
  });

  document.title = currentLanguage === "ko"
    ? "예약 | 더 그릴 · 대전 한국식 바비큐"
    : "Reservation | The Grill · Korean BBQ Daejeon";

  // Keep the language selection consistent with the menu page.
  try {
    localStorage.setItem("the-grill-language", currentLanguage);
    localStorage.setItem("the-grill-menu-language", currentLanguage);
  } catch (error) {
    // Language switching still works without browser storage.
  }

  // Update the accessible chat button labels.
  document.getElementById("chatLauncher").setAttribute(
    "aria-label",
    currentLanguage === "ko" ? "메뉴 도우미 열기" : "Open menu assistant"
  );

  document.getElementById("chatLauncher").setAttribute(
    "aria-expanded",
    String(!document.getElementById("chatPanel").hidden)
  );
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

let savedLanguage = "ko";

try {
  savedLanguage =
    localStorage.getItem("the-grill-language") ||
    localStorage.getItem("the-grill-menu-language") ||
    "ko";
} catch (error) {
  savedLanguage = "ko";
}

setLanguage(savedLanguage);

/* ---------------- MOBILE NAVIGATION ---------------- */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeNavigation() {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
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
  if (window.innerWidth > 760) closeNavigation();
});

/* ---------------- RESERVATION FORM ---------------- */

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");
const dateInput = document.getElementById("date");

// Use the visitor's local date for the earliest selectable date.
const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;

function showFormMessage(message, isError = false) {
  formMessage.hidden = false;
  formMessage.classList.toggle("error", isError);
  formMessage.textContent = message;
}

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.reportValidity()) return;

  if (dateInput.value < localToday) {
    showFormMessage(t("invalidDate"), true);
    dateInput.focus();
    return;
  }

  const data = new FormData(reservationForm);

  const reservation = {
    name: String(data.get("name") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    email: String(data.get("email") || "").trim(),
    date: String(data.get("date") || ""),
    time: String(data.get("time") || ""),
    guests: String(data.get("guests") || ""),
    occasion: String(data.get("occasion") || ""),
    requests: String(data.get("requests") || "").trim()
  };

  if (!reservation.name || !reservation.phone || !reservation.email) {
    showFormMessage(t("errorTitle"), true);
    return;
  }

  if (
    !RESTAURANT_EMAIL ||
    RESTAURANT_EMAIL.includes("REPLACE_WITH") ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(RESTAURANT_EMAIL)
  ) {
    showFormMessage(
      t("missingEmail") + " " + t("emailNotConfigured"),
      true
    );
    return;
  }

  const subject = t("mailSubject");

  const body = [
    t("mailIntro"),
    "",
    `${t("mailName")}: ${reservation.name}`,
    `${t("mailPhone")}: ${reservation.phone}`,
    `${t("mailEmail")}: ${reservation.email}`,
    `${t("mailDate")}: ${reservation.date}`,
    `${t("mailTime")}: ${reservation.time}`,
    `${t("mailGuests")}: ${reservation.guests}`,
    `${t("mailOccasion")}: ${reservation.occasion}`,
    `${t("mailRequests")}: ${reservation.requests || "-"}`,
    "",
    t("mailClosing")
  ].join("\n");

  const mailto =
    "mailto:" + encodeURIComponent(RESTAURANT_EMAIL) +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  showFormMessage(t("successTitle") + " " + t("successBody"));

  const emailLink = document.createElement("a");
  emailLink.href = mailto;
  emailLink.textContent = currentLanguage === "ko"
    ? "이메일 앱 열기"
    : "Open email app";
  emailLink.style.display = "inline-block";
  emailLink.style.marginTop = "8px";

  formMessage.appendChild(document.createElement("br"));
  formMessage.appendChild(emailLink);

  // Open the visitor's configured email application.
  window.location.href = mailto;
});

/* ---------------- CHATBOT UI ---------------- */

const chatLauncher = document.getElementById("chatLauncher");
const chatPanel = document.getElementById("chatPanel");
const closeChatButton = document.getElementById("closeChat");
const openChatFromCard = document.getElementById("openChatFromCard");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const quickQuestions = document.getElementById("quickQuestions");

function openChat() {
  chatPanel.hidden = false;
  chatLauncher.setAttribute("aria-expanded", "true");

  // Focus the input after opening, without disrupting mobile scrolling.
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
openChatFromCard.addEventListener("click", openChat);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    closeChat();
  }
});

function addMessage(text, sender = "bot") {
  const row = document.createElement("div");
  row.className = sender === "user"
    ? "message user-message"
    : "message bot-message";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  // Use textContent to prevent user-entered HTML from executing.
  bubble.textContent = text;

  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function answerQuestion(question) {
  const q = question.toLowerCase();

  const has = (...terms) => terms.some((term) => q.includes(term));

  // Check specific topics before the general menu fallback.
  if (has("allerg", "알레르기", "알러지", "gluten", "글루텐", "peanut", "땅콩")) {
    return t("answerAllergens");
  }

  if (has("vegetarian", "vegan", "채식", "비건", "고기 없는", "고기없이")) {
    return t("answerVegetarian");
  }

  if (has("spicy", "hot", "매운", "맵나요", "맵", "고추", "chili", "chilli")) {
    return t("answerSpicy");
  }

  if (has("ingredient", "재료", "성분", "무엇으로", "뭐가 들어", "contain")) {
    return t("answerIngredients");
  }

  if (has("available", "availability", "sold out", "재고", "판매", "있나요", "가능한 메뉴")) {
    return t("answerAvailability");
  }

  if (has("reservation", "reserve", "booking", "book a table", "예약", "자리")) {
    return t("answerReservation");
  }

  if (has("opening", "hours", "open", "close", "시간", "영업", "몇 시")) {
    return t("answerHours");
  }

  if (has("address", "location", "direction", "where", "주소", "위치", "어디")) {
    return t("answerLocation");
  }

  if (has("price", "cost", "how much", "가격", "얼마")) {
    return t("answerPrice");
  }

  if (has("thank", "감사", "고마워")) {
    return t("answerThanks");
  }

  if (has("menu", "dish", "food", "eat", "meat", "pork", "beef", "chicken",
    "kimchi", "불고기", "삼겹살", "고기", "음식", "메뉴", "닭갈비", "잡채", "김치찌개")) {
    return t("answerIngredients");
  }

  return t("answerDefault");
}

function sendChatMessage(message) {
  const clean = message.trim();
  if (!clean) return;

  addMessage(clean, "user");

  const reply = answerQuestion(clean);

  // A local scripted assistant, not a connected live AI or restaurant database.
  window.setTimeout(() => {
    addMessage(reply, "bot");
  }, 250);
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

/* ---------------- FOOTER YEAR ---------------- */

document.getElementById("year").textContent =
  new Date().getFullYear();
