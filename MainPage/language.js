const eng = document.getElementById("btn_en");
const chn = document.getElementById("btn_ch");

function setLanguage() {
  eng.addEventListener("click", () => {
    $("[data-localize]").localize("language", { language: "en" });
  });
  chn.addEventListener("click", () => {
    $("[data-localize]").localize("language", { language: "cn" });
  });
}

function getLanguage() {
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.substr(0, 2);
  if (lang == "zh") {
    $("[data-localize]").localize("language", { language: "cn" });
    console.log(lang);
  } else {
    $("[data-localize]").localize("language", { language: "en" });
    console.log(lang);
  }
}

getLanguage();
setLanguage();
