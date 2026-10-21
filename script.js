"use strict";
const translations = {
  km: {
    navHome:"ទំព័រដើម",navServices:"សេវាកម្ម Roblox",navRobux:"ព័ត៌មាន Robux",navGallery:"រូបភាពរបស់ខ្ញុំ",navContact:"ទាក់ទងយើង",
    heroEyebrow:"ROBLOX • GAMING • CREATIVE",heroTitle:'សូមស្វាគមន៍មកកាន់ <span class="accent">E-KENZO STORE</span>',heroText:"ជ្រើសរើសសេវាកម្ម Roblox របស់អ្នក ឬមើលព័ត៌មាន Robux ពីប្រភពផ្លូវការ។",robloxBtn:"🎮 មើលកញ្ចប់ Roblox",officialBtn:"Roblox ផ្លូវការ ↗",disclaimer:"E-KENZO Store ជាសេវាកម្មឯករាជ្យ មិនមានទំនាក់ទំនងជាមួយ Roblox Corporation ទេ។",
    servicesEyebrow:"CHOOSE YOUR SERVICE",servicesTitle:"ជ្រើសរើសកញ្ចប់សេវាកម្ម",servicesText:"ចុចប៊ូតុងជ្រើសរើសនៅកញ្ចប់ដែលអ្នកចង់បាន រួចទាក់ទងតាម Telegram។",pkg1Title:"ជំនួយ Roblox",pkg1Text:"ជំនួយព័ត៌មាន និងការណែនាំទូទៅអំពីការប្រើ Roblox។",pkg2Title:"រូបភាព Gaming",pkg2Text:"រចនា Avatar, Profile, Banner និង Thumbnail សម្រាប់ហ្គេម។",pkg3Title:"Avatar និង Branding",pkg3Text:"រចនារូបសញ្ញា និងរូបភាពផ្ទាល់ខ្លួនសម្រាប់ Profile។",chooseBtn:"ជ្រើសរើសកញ្ចប់",popular:"ពេញនិយម",selectedLabel:"កញ្ចប់ដែលបានជ្រើសរើស",selectedHelp:"សូមទាក់ទងយើងតាម Telegram ដើម្បីសួរព័ត៌មាន និងតម្លៃ។",contactBtn:"ទាក់ទងតាម Telegram ↗",officialEyebrow:"OFFICIAL INFORMATION",robuxTitle:"ព័ត៌មាន Robux ផ្លូវការ",robuxText:"សូមពិនិត្យជម្រើស និងតម្លៃ Robux នៅគេហទំព័រ Roblox ផ្លូវការ។ តម្លៃអាចខុសគ្នាតាមប្រទេស និងគណនី។",robuxLink:"មើល Robux ផ្លូវការ ↗",galleryEyebrow:"YOUR IMAGES",galleryTitle:"ជ្រើសរើសរូបពីទូរស័ព្ទ",galleryText:"ចុចប្រអប់ខាងក្រោម ដើម្បីជ្រើសរើសរូបភាពពី Android របស់អ្នក។",uploadTitle:"ចុចទីនេះដើម្បីជ្រើសរើសរូបភាព",uploadHint:"គាំទ្រ JPG, PNG និង WebP",uploadNote:"រូបភាពបង្ហាញជាមុននៅលើឧបករណ៍នេះប៉ុណ្ណោះ មិនបានបង្ហោះទៅអ៊ីនធឺណិតទេ។",contactEyebrow:"LET'S TALK",contactTitle:"តើអ្នកត្រូវការជំនួយទេ?",contactText:"ចុចប៊ូតុងខាងក្រោម ដើម្បីទាក់ទង E-KENZO Store តាម Telegram។",footerText:"សេវាកម្មឯករាជ្យ មិនត្រូវបានឧបត្ថម្ភ ឬគ្រប់គ្រងដោយ Roblox Corporation ទេ。"
  },
  en: {
    navHome:"Home",navServices:"Roblox Services",navRobux:"Robux Info",navGallery:"My Images",navContact:"Contact",
    heroEyebrow:"ROBLOX • GAMING • CREATIVE",heroTitle:'Welcome to <span class="accent">E-KENZO STORE</span>',heroText:"Choose a Roblox service or visit the official source for Robux information.",robloxBtn:"🎮 Browse Roblox Packages",officialBtn:"Official Roblox ↗",disclaimer:"E-KENZO Store is independent and is not affiliated with Roblox Corporation.",
    servicesEyebrow:"CHOOSE YOUR SERVICE",servicesTitle:"Choose a Service Package",servicesText:"Choose a package below, then contact us on Telegram.",pkg1Title:"Roblox Help",pkg1Text:"General information and guidance for using Roblox.",pkg2Title:"Gaming Graphics",pkg2Text:"Custom avatars, profile images, banners and gaming thumbnails.",pkg3Title:"Avatar & Branding",pkg3Text:"Custom logos and personal profile artwork.",chooseBtn:"Choose Package",popular:"POPULAR",selectedLabel:"Selected package",selectedHelp:"Contact us on Telegram to ask about details and pricing.",contactBtn:"Contact on Telegram ↗",officialEyebrow:"OFFICIAL INFORMATION",robuxTitle:"Official Robux Information",robuxText:"Check Robux options and prices on the official Roblox website. Prices may vary by country and account.",robuxLink:"View Official Robux ↗",galleryEyebrow:"YOUR IMAGES",galleryTitle:"Choose Images From Your Phone",galleryText:"Tap the box below to select images from your Android phone.",uploadTitle:"Tap here to choose images",uploadHint:"JPG, PNG and WebP supported",uploadNote:"Images are previewed on this device only and are not uploaded to the internet.",contactEyebrow:"LET'S TALK",contactTitle:"Need help?",contactText:"Tap below to contact E-KENZO Store on Telegram.",footerText:"Independent service. Not sponsored or operated by Roblox Corporation."
  }
};
let language = "km";
const languageBtn = document.getElementById("languageBtn");
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key] !== undefined) el.innerHTML = translations[next][key];
  });
  languageBtn.textContent = next === "km" ? "English" : "ខ្មែរ";
  languageBtn.setAttribute("aria-label", next === "km" ? "Switch to English" : "ប្ដូរទៅភាសាខ្មែរ");
  const selected = document.getElementById("selectedPackage");
  if (selected && selected.dataset.km) selected.textContent = next === "km" ? selected.dataset.km : selected.dataset.en;
}
languageBtn.addEventListener("click", () => setLanguage(language === "km" ? "en" : "km"));
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") !== "true";
  menuBtn.setAttribute("aria-expanded", String(open));
  navMenu.classList.toggle("open", open);
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
const selectionBox = document.getElementById("selectionBox");
const selectedPackage = document.getElementById("selectedPackage");
const orderTelegram = document.getElementById("orderTelegram");
document.querySelectorAll(".select-package").forEach(button => button.addEventListener("click", () => {
  const km = button.dataset.packageKm; const en = button.dataset.packageEn;
  selectedPackage.dataset.km = km; selectedPackage.dataset.en = en;
  selectedPackage.textContent = language === "km" ? km : en;
  const message = language === "km" ? `សួស្តី E-KENZO Store ខ្ញុំចាប់អារម្មណ៍លើកញ្ចប់៖ ${km}` : `Hello E-KENZO Store, I'm interested in: ${en}`;
  orderTelegram.href = "https://t.me/EkenZoshop?text=" + encodeURIComponent(message);
  if (selectionBox) { selectionBox.hidden = false; selectionBox.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
}));
const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
let objectUrls = [];
imageUpload && imageUpload.addEventListener("change", () => {
  objectUrls.forEach(URL.revokeObjectURL); objectUrls = []; if (imagePreview) imagePreview.replaceChildren();
  Array.from(imageUpload.files || []).forEach(file => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file); objectUrls.push(url);
    const card = document.createElement("div"); card.className = "preview-item";
    const img = document.createElement("img"); img.src = url; img.alt = file.name;
    const caption = document.createElement("p"); caption.textContent = file.name;
    card.append(img, caption); if (imagePreview) imagePreview.append(card);
  });
});
window.addEventListener("beforeunload", () => objectUrls.forEach(URL.revokeObjectURL));


