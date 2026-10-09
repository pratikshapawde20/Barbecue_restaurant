
"use strict";

/* THE GRILL — CONTACT PAGE */

const translations = {
  ko: {
    announcement: "좋은 음식, 따뜻한 마음, 함께하는 순간",
    brandSubtitle: "한국식 바비큐 다이닝",
    navHome: "홈",
    navMenu: "메뉴",
    navAbout: "우리 이야기",
    navContact: "오시는 길",
    navReserve: "예약하기 ↗",

    heroEyebrow: "WE WOULD LOVE TO HEAR FROM YOU",
    heroTitle: "언제든지\n편하게 연락해 주세요.",
    heroText: "예약 문의부터 메뉴에 관한 질문까지,\n더 그릴이 정성껏 안내해 드립니다.",
    heroButton: "연락처 알아보기",
    heroNote: "DAEJEON · SOUTH KOREA",

    introEyebrow: "LET'S CONNECT",
    introTitle: "좋은 식사의 시작은\n편안한 소통입니다.",
    introText: "방문을 계획하고 계신가요? 위치를 확인하거나, 예약 및 메뉴에 대해 궁금한 점이 있다면 연락해 주세요. 여러분의 방문을 기다립니다.",

    locationKicker: "FIND US",
    locationTitle: "매장 위치",
    locationText: "대전광역시 유성구 갑동",
    directions: "길찾기",

    phoneKicker: "SAY HELLO",
    phoneTitle: "전화 문의",
    phoneText: "예약 및 방문 관련 문의",
    phoneNote: "영업시간과 예약 가능 여부를 전화로 확인해 주세요.",
    callNow: "지금 전화하기",

    hoursKicker: "PLAN YOUR VISIT",
    hoursTitle: "영업 안내",
    hoursText: "편안한 식사를 위한 방문 안내",
    openingLabel: "영업 시작",
    openingValue: "오전 11:00",
    statusLabel: "운영 상태",
    statusValue: "방문 전 확인",
    hoursNote: "요일별 영업시간은 매장에 확인해 주세요.",

    mapEyebrow: "COME FIND YOUR TABLE",
    mapTitle: "대전에서 만나요.",
    mapText: "지도에서 위치를 확인하고 더 그릴로 방문해 주세요.",
    visitEyebrow: "YOUR NEXT MEAL",
    visitTitle: "따뜻한 식탁이 기다립니다.",
    visitText: "친구, 가족, 소중한 사람들과 함께 한국 음식의 즐거움을 나눠 보세요.",
    visitAddress: "대전광역시 유성구 갑동",
    openMaps: "Google 지도 열기",
    mapDisclaimer: "지도 핀의 정확한 위치는 방문 전에 확인해 주세요.",

    formEyebrow: "DROP US A MESSAGE",
    formTitle: "무엇이 궁금하신가요?",
    formText: "아래 양식으로 문의 내용을 작성해 주세요. 예약은 예약 페이지에서도 요청할 수 있습니다.",
    formPromise: "여러분의 소중한 방문과 의견에 감사드립니다.",
    formLabel: "CONTACT FORM",
    requiredNote: "* 필수 입력 항목",
    nameLabel: "이름 *",
    namePlaceholder: "이름을 입력해 주세요",
    emailLabel: "이메일 *",
    emailPlaceholder: "email@example.com",
    phoneLabel: "전화번호 (선택)",
    phonePlaceholder: "연락 가능한 전화번호",
    topicLabel: "문의 유형 *",
    topicPlaceholder: "문의 유형을 선택해 주세요",
    topicGeneral: "일반 문의",
    topicReservation: "예약 문의",
    topicMenu: "메뉴 및 재료",
    topicAllergy: "알레르기 문의",
    topicGroup: "단체 방문",
    topicOther: "기타",
    messageLabel: "문의 내용 *",
    messagePlaceholder: "궁금하신 내용을 자유롭게 작성해 주세요.",
    privacyText: "문의 처리를 위한 개인정보 이용에 동의합니다. *",
    submitButton: "이메일 문의 작성하기",
    formDisclaimer: "이 양식은 이메일 초안을 준비합니다. 전송은 이메일 앱에서 직접 완료해야 합니다.",
    feedbackInvalid: "필수 항목을 모두 확인해 주세요.",
    feedbackPrivacy: "개인정보 이용 동의 항목을 체크해 주세요.",
    feedbackEmail: "이메일 주소를 확인해 주세요.",
    feedbackReady: "이메일 초안을 준비했습니다. 아래 버튼을 눌러 이메일 앱에서 전송을 완료해 주세요.",
    feedbackOpen: "이메일 작성 열기",
    feedbackFallback: "이메일 앱을 열 수 없다면 아래 내용을 복사해 이메일로 보내 주세요.",
    emailSubject: "The Grill — Customer Enquiry",
    topicNames: {
      general: "일반 문의",
      reservation: "예약 문의",
      menu: "메뉴 및 재료",
      allergy: "알레르기 문의",
      group: "단체 방문",
      other: "기타"
    },

    bannerEyebrow: "SOMETHING DELICIOUS AWAITS",
    bannerTitle: "다음 식사는\n더 그릴에서.",
    bannerText: "소중한 사람들과 함께할 시간을 계획해 보세요.",
    bannerButton: "예약 페이지로 이동",

    footerTagline: "좋은 음식, 행복한 순간.",
    footerExplore: "둘러보기",
    footerContact: "문의 및 연락처",
    footerDirections: "위치 확인 ↗",
    copyright: "모든 권리 보유.",
    footerContactLink: "문의하기"
  },

  en: {
    announcement: "GOOD FOOD, WARM HOSPITALITY, MOMENTS TO SHARE",
    brandSubtitle: "Korean BBQ Dining",
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "Our Story",
    navContact: "Location",
    navReserve: "Reservation ↗",

    heroEyebrow: "WE WOULD LOVE TO HEAR FROM YOU",
    heroTitle: "We'd love to\nhear from you.",
    heroText: "From reservation enquiries to menu questions,\nThe Grill is here to help.",
    heroButton: "Explore Contact Details",
    heroNote: "DAEJEON · SOUTH KOREA",

    introEyebrow: "LET'S CONNECT",
    introTitle: "Every great meal\nstarts with a conversation.",
    introText: "Planning a visit? Need directions, reservation information or details about our menu? Get in touch. We look forward to welcoming you.",

    locationKicker: "FIND US",
    locationTitle: "Our Location",
    locationText: "Gap-dong, Yuseong District, Daejeon",
    directions: "Get Directions",

    phoneKicker: "SAY HELLO",
    phoneTitle: "Call the Restaurant",
    phoneText: "Enquiries about visits and reservations",
    phoneNote: "Please call to verify opening hours and reservation availability.",
    callNow: "Call Now",

    hoursKicker: "PLAN YOUR VISIT",
    hoursTitle: "Opening Information",
    hoursText: "Helpful information for your visit",
    openingLabel: "Opening time",
    openingValue: "11:00 AM",
    statusLabel: "Today's status",
    statusValue: "Please confirm",
    hoursNote: "Please contact the restaurant for opening hours on your chosen day.",

    mapEyebrow: "COME FIND YOUR TABLE",
    mapTitle: "Meet us in Daejeon.",
    mapText: "Check the map and plan your visit to The Grill.",
    visitEyebrow: "YOUR NEXT MEAL",
    visitTitle: "A welcoming table awaits.",
    visitText: "Enjoy the spirit of Korean food with friends, family and the people who matter to you.",
    visitAddress: "Gap-dong, Yuseong District, Daejeon",
    openMaps: "Open Google Maps",
    mapDisclaimer: "Please verify the exact map pin before travelling.",

    formEyebrow: "DROP US A MESSAGE",
    formTitle: "How can we help?",
    formText: "Use the form below to prepare your enquiry. You can also request a table through our reservation page.",
    formPromise: "Thank you for your interest and for considering a visit.",
    formLabel: "CONTACT FORM",
    requiredNote: "* Required fields",
    nameLabel: "Full Name *",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address *",
    emailPlaceholder: "email@example.com",
    phoneLabel: "Phone Number (Optional)",
    phonePlaceholder: "Your contact number",
    topicLabel: "Enquiry Type *",
    topicPlaceholder: "Select an enquiry type",
    topicGeneral: "General Enquiry",
    topicReservation: "Reservation",
    topicMenu: "Menu and Ingredients",
    topicAllergy: "Allergy Information",
    topicGroup: "Group Visit",
    topicOther: "Other",
    messageLabel: "Your Message *",
    messagePlaceholder: "Tell us how we can help...",
    privacyText: "I consent to the use of my details to handle this enquiry. *",
    submitButton: "Prepare Email Enquiry",
    formDisclaimer: "This form prepares an email draft. You must complete sending it from your email application.",
    feedbackInvalid: "Please check that all required fields are completed.",
    feedbackPrivacy: "Please tick the consent checkbox before continuing.",
    feedbackEmail: "Please check your email address.",
    feedbackReady: "Your email draft is ready. Use the link below to open your email application and send it.",
    feedbackOpen: "Open Email Draft",
    feedbackFallback: "If your email application does not open, copy the message below and email it to the restaurant.",
    emailSubject: "The Grill — Customer Enquiry",
    topicNames: {
      general: "General Enquiry",
      reservation: "Reservation",
      menu: "Menu and Ingredients",
      allergy: "Allergy Information",
      group: "Group Visit",
      other: "Other"
    },

    bannerEyebrow: "SOMETHING DELICIOUS AWAITS",
    bannerTitle: "Your next meal\nstarts at The Grill.",
    bannerText: "Make time for a meal with the people who matter.",
    bannerButton: "Visit Reservations",

    footerTagline: "Good food. Happy moments.",
    footerExplore: "EXPLORE",
    footerContact: "CONTACT",
    footerDirections: "Find Us ↗",
    copyright: "All rights reserved.",
    footerContactLink: "Contact Us"
  }
};

const languageSelect = document.getElementById("language");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const messageText = document.getElementById("messageText");
const characterCount = document.getElementById("characterCount");

let currentLanguage = "ko";

function t(key) {
  return translations[currentLanguage][key] ?? key;
}

/* LANGUAGE SWITCH */

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ko";

  document.documentElement.lang = currentLanguage;
  document.body.lang = currentLanguage;
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = t(key);

    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (t(key)) {
      element.placeholder = t(key);
    }
  });

  document.title = currentLanguage === "ko"
    ? "문의하기 | 더 그릴"
    : "Contact Us | The Grill";

  document.querySelector('meta[name="description"]').content =
    currentLanguage === "ko"
      ? "대한민국 대전 더 그릴의 연락처, 위치, 방문 및 예약 안내를 확인하세요."
      : "Contact The Grill in Daejeon, South Korea, for location and reservation information.";

  document.getElementById("menuToggle").setAttribute(
    "aria-label",
    currentLanguage === "ko" ? "메뉴 열기" : "Open navigation"
  );

  try {
    localStorage.setItem("the-grill-language", currentLanguage);
    localStorage.setItem("the-grill-menu-language", currentLanguage);
  } catch (error) {
    // Language switching still works if storage is unavailable.
  }

  // Keep the selected language when validation feedback is visible.
  if (!formFeedback.hidden) {
    const feedbackType = formFeedback.dataset.feedbackType;
    if (feedbackType === "ready") {
      showEmailPreview();
    } else if (feedbackType) {
      showFeedback(t(feedbackType), feedbackType);
    }
  }
}

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

/* MOBILE NAVIGATION */

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
  menuToggle.setAttribute(
    "aria-label",
    open
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
  if (window.innerWidth > 760) closeNavigation();
});

/* SCROLL ANIMATIONS */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* MESSAGE CHARACTER COUNTER */

function updateCharacterCount() {
  characterCount.textContent = messageText.value.length;
}

messageText.addEventListener("input", updateCharacterCount);

/* CONTACT FORM */

let lastFormData = null;

function showFeedback(message, type) {
  formFeedback.replaceChildren();
  formFeedback.dataset.feedbackType = type;

  const text = document.createElement("p");
  text.textContent = message;
  formFeedback.appendChild(text);

  formFeedback.hidden = false;
}

function getEmailBody(data) {
  return [
    "The Grill — Customer Enquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Enquiry type: ${data.topic}`,
    "",
    "Message:",
    data.message
  ].join("\n");
}

function showEmailPreview() {
  if (!lastFormData) return;

  formFeedback.replaceChildren();
  formFeedback.dataset.feedbackType = "ready";

  const intro = document.createElement("p");
  intro.textContent = t("feedbackReady");
  formFeedback.appendChild(intro);

  const subject = encodeURIComponent(t("emailSubject"));
  const body = encodeURIComponent(getEmailBody(lastFormData));

  // The supplied screenshots contain a phone number but no email address.
  // Do not invent a restaurant email address.
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:?subject=${subject}&body=${body}`;
  emailLink.textContent = t("feedbackOpen");
  emailLink.className = "email-draft-link";
  emailLink.style.display = "inline-block";
  emailLink.style.marginTop = "10px";
  emailLink.style.marginBottom = "10px";
  emailLink.style.textDecoration = "underline";
  emailLink.style.fontWeight = "700";

  formFeedback.appendChild(emailLink);

  const fallback = document.createElement("p");
  fallback.textContent = t("feedbackFallback");
  fallback.style.marginTop = "10px";
  formFeedback.appendChild(fallback);

  const preview = document.createElement("textarea");
  preview.readOnly = true;
  preview.value = getEmailBody(lastFormData);
  preview.rows = 8;
  preview.setAttribute("aria-label", "Email message preview");
  preview.style.width = "100%";
  preview.style.marginTop = "10px";
  preview.style.padding = "10px";
  preview.style.border = "1px solid #deded4";
  preview.style.background = "#fff";
  preview.style.color = "#252923";
  preview.style.fontSize = "12px";
  preview.style.resize = "vertical";

  formFeedback.appendChild(preview);

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent =
    currentLanguage === "ko" ? "문의 내용 복사" : "Copy Enquiry";

  copyButton.style.marginTop = "10px";
  copyButton.style.padding = "9px 14px";
  copyButton.style.border = "1px solid #176d68";
  copyButton.style.borderRadius = "3px";
  copyButton.style.background = "#e5f0eb";
  copyButton.style.color = "#10534f";
  copyButton.style.cursor = "pointer";

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(preview.value);
      copyButton.textContent =
        currentLanguage === "ko" ? "복사 완료" : "Copied";
    } catch (error) {
      preview.focus();
      preview.select();

      copyButton.textContent =
        currentLanguage === "ko"
          ? "텍스트를 선택했습니다. 복사해 주세요."
          : "Text selected. Please copy it.";
    }
  });

  formFeedback.appendChild(copyButton);
  formFeedback.hidden = false;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    showFeedback(t("feedbackInvalid"), "invalid");
    return;
  }

  if (!document.getElementById("privacyConsent").checked) {
    showFeedback(t("feedbackPrivacy"), "privacy");
    return;
  }

  const email = document.getElementById("email").value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFeedback(t("feedbackEmail"), "email");
    return;
  }

  const topicValue = document.getElementById("topic").value;

  lastFormData = {
    name: document.getElementById("fullName").value.trim(),
    email,
    phone: document.getElementById("phone").value.trim(),
    topic: translations[currentLanguage].topicNames[topicValue] || topicValue,
    message: messageText.value.trim()
  };

  showEmailPreview();
  formFeedback.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

/* FOOTER YEAR */

document.getElementById("year").textContent = new Date().getFullYear();

/* RESTORE LANGUAGE */

let savedLanguage = "ko";

try {
  savedLanguage =
    localStorage.getItem("the-grill-language") ||
    localStorage.getItem("the-grill-menu-language") ||
    "ko";
} catch (error) {
  savedLanguage = "ko";
}

applyLanguage(savedLanguage);
updateCharacterCount();
