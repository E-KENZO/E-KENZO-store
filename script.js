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
  if (selected.dataset.km) selected.textContent = next === "km" ? selected.dataset.km : selected.dataset.en;
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
  selectionBox.hidden = false;
  selectionBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}));
const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
let objectUrls = [];
imageUpload.addEventListener("change", () => {
  objectUrls.forEach(URL.revokeObjectURL); objectUrls = []; imagePreview.replaceChildren();
  Array.from(imageUpload.files || []).forEach(file => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file); objectUrls.push(url);
    const card = document.createElement("div"); card.className = "preview-item";
    const img = document.createElement("img"); img.src = url; img.alt = file.name;
    const caption = document.createElement("p"); caption.textContent = file.name;
    card.append(img, caption); imagePreview.append(card);
  });
});
window.addEventListener("beforeunload", () => objectUrls.forEach(URL.revokeObjectURL));


// Robux package selection + demo username-check popup (API not connected yet).
const robuxCards = document.querySelectorAll(".robux-card");
const robuxOrder = document.getElementById("robuxOrder");
const chosenRobux = document.getElementById("chosenRobux");
const chosenPrice = document.getElementById("chosenPrice");
const robloxUsernameForm = document.getElementById("robloxUsernameForm");
const robloxUsername = document.getElementById("robloxUsername");
const robuxPopup = document.getElementById("robuxPopup");
const popupMessage = document.getElementById("popupMessage");
const popupPackage = document.getElementById("popupPackage");
const popupPrice = document.getElementById("popupPrice");
let currentRobuxPackage = null;

robuxCards.forEach(card => {
  card.addEventListener("click", () => {
    robuxCards.forEach(item => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    card.classList.add("selected");
    card.setAttribute("aria-pressed", "true");
    currentRobuxPackage = {
      amount: card.dataset.amount,
      price: card.dataset.price
    };
    chosenRobux.textContent = Number(currentRobuxPackage.amount).toLocaleString() + " Robux";
    chosenPrice.textContent = currentRobuxPackage.price;
    robuxOrder.hidden = false;
    robuxOrder.scrollIntoView({ behavior: "smooth", block: "center" });
    robloxUsername.focus({ preventScroll: true });
  });
});

function closeRobuxPopup() {
  robuxPopup.hidden = true;
}
document.getElementById("closeRobuxPopup").addEventListener("click", closeRobuxPopup);
robuxPopup.addEventListener("click", event => {
  if (event.target === robuxPopup) closeRobuxPopup();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeRobuxPopup();
});

robloxUsernameForm.addEventListener("submit", event => {
  event.preventDefault();
  const username = robloxUsername.value.trim();
  if (!currentRobuxPackage) {
    alert("សូមជ្រើសរើសកញ្ចប់ Robux ជាមុនសិន។");
    return;
  }
  if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) {
    robloxUsername.setCustomValidity("Username ត្រូវមាន 3–20 តួអក្សរ និងប្រើតែអក្សរ លេខ ឬ _ ។");
    robloxUsername.reportValidity();
    robloxUsername.setCustomValidity("");
    return;
  }
  popupPackage.textContent = Number(currentRobuxPackage.amount).toLocaleString() + " Robux";
  popupPrice.textContent = currentRobuxPackage.price;
  popupMessage.textContent = `បានទទួល Username "${username}"។ នៅពេលនេះ វេបសាយមិនទាន់បានឆែកថា Username នេះមាននៅលើ Roblox ពិតប្រាកដទេ។`;
  robuxPopup.hidden = false;
});

document.getElementById("continueRobux").addEventListener("click", () => {
  closeRobuxPopup();
  const username = robloxUsername.value.trim();
  const message = `សួស្តី E-KENZO Store ខ្ញុំចង់បញ្ជាទិញ ${currentRobuxPackage.amount} Robux។ Username: ${username}។ តម្លៃដែលបង្ហាញ: ${currentRobuxPackage.price}។ សូមបញ្ជាក់តម្លៃ និងវិធីបង់ប្រាក់។`;
  window.open("https://t.me/EkenZoshop?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
});
(() => {
  const slider = document.getElementById("kenzoSlider");
  const track = document.getElementById("kenzoTrack");

  if (!slider || !track) return;

  const slides = [...track.querySelectorAll(".kenzo-slide")];
  const dotsBox = document.getElementById("kenzoDots");
  const prev = document.getElementById("kenzoPrev");
  const next = document.getElementById("kenzoNext");

  if (!slides.length) return;

  let index = 0;
  let timer;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "kenzo-dot";
    dot.setAttribute("aria-label", `Go to image ${i + 1}`);
    dot.addEventListener("click", () => {
      show(i);
      restart();
    });
    dotsBox.appendChild(dot);
    return dot;
  });

  function show(newIndex, animate = true) {
    index = (newIndex + slides.length) % slides.length;

    track.style.transition = animate
      ? "transform .55s cubic-bezier(.22,.75,.25,1)"
      : "none";

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function restart() {
    clearInterval(timer);
    if (slides.length > 1) {
      timer = setInterval(() => show(index + 1), 4000);
    }
  }

  prev.addEventListener("click", () => {
    show(index - 1);
    restart();
  });

  next.addEventListener("click", () => {
    show(index + 1);
    restart();
  });

  slider.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX = event.clientX;
    startY = event.clientY;
    dragging = true;
    track.style.transition = "none";
  });

  slider.addEventListener("pointerup", event => {
    if (!dragging) return;
    dragging = false;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      show(index + (dx < 0 ? 1 : -1));
      restart();
    } else {
      show(index);
    }
  });

  function cancelDrag() {
    if (!dragging) return;
    dragging = false;
    show(index);
  }

  slider.addEventListener("pointercancel", cancelDrag);
  slider.addEventListener("lostpointercapture", cancelDrag);

  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", restart);

  show(0, false);
  restart();
})();
      
(() => {
  const slider = document.getElementById("kenzoSlider");
  const track = document.getElementById("kenzoTrack");
  const prev = document.getElementById("kenzoPrev");
  const next = document.getElementById("kenzoNext");
  const dotsBox = document.getElementById("kenzoDots");

  if (!slider || !track || !dotsBox) return;

  const slides = Array.from(track.querySelectorAll(".kenzo-slide"));
  if (slides.length < 2) return;

  let index = 0;
  let timer;
  let startX = 0;
  let moved = false;

  dotsBox.innerHTML = "";

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "kenzo-dot";
    dot.setAttribute("aria-label", `Go to banner ${i + 1}`);
    dot.addEventListener("click", () => showSlide(i));
    dotsBox.appendChild(dot);
    return dot;
  });

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, n) => {
      dot.classList.toggle("active", n === index);
      dot.setAttribute("aria-current", n === index ? "true" : "false");
    });
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(index + 1), 4000);
  }

  function restartAuto() {
    startAuto();
  }

  prev?.addEventListener("click", () => {
    showSlide(index - 1);
    restartAuto();
  });

  next?.addEventListener("click", () => {
    showSlide(index + 1);
    restartAuto();
  });

  slider.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    moved = false;
  });

  slider.addEventListener("pointerup", (e) => {
    const distance = e.clientX - startX;
    if (Math.abs(distance) > 45) {
      moved = true;
      showSlide(index + (distance < 0 ? 1 : -1));
      restartAuto();
    }
  });

  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", startAuto);
  slider.addEventListener("touchstart", () => clearInterval(timer), { passive: true });
  slider.addEventListener("touchend", startAuto, { passive: true });

  showSlide(0);
  startAuto();
})();
                    
