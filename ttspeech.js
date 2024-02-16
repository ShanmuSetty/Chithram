// -------------------------------Text To Speech-----------------------------------
if ("speechSynthesis" in window) {
  let utterance = null;
  let isTTSenabled = true;

  function readSelectedText() {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0 && isTTSenabled) {
      let lang = detectLanguage(selectedText);
      utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = lang;
      utterance.rate = 0.8; // Adjust the rate as needed
      utterance.pitch = 1; // Normal pitch
      utterance.volume = 1; // Full volume
      window.speechSynthesis.speak(utterance);
    }
  }

  function detectLanguage(text) {
    if (text.match(/[\u0900-\u097F]/)) return "hi-IN"; // Hindi
    if (text.match(/[a-zA-Z]/)) return "en-US"; // English
    if (text.match(/[áéíóúüñ]/)) return "es-ES"; // Spanish
    if (text.match(/[àâçéèêëîïôûùüÿñ]/)) return "fr-FR"; // French
    if (text.match(/[\u3040-\u30FF]/)) return "ja-JP"; // Japanese
    if (text.match(/[\u0C00-\u0C7F]/)) return "te-IN"; // Telugu
    if (text.match(/[\u0600-\u06FF]/)) return "ar-SA"; // Arabic
    if (text.match(/[\u0530-\u058F]/)) return "hy-AM"; // Armenian
    if (text.match(/[\u0400-\u04FF]/)) return "az-AZ"; // Azerbaijani
    if (text.match(/[\u0100-\u017F]/)) return "eu-ES"; // Basque
    if (text.match(/[\u0400-\u04FF]/)) return "be-BY"; // Belarusian
    if (text.match(/[\u0980-\u09FF]/)) return "bn-IN"; // Bengali
    if (text.match(/[\u0100-\u017F]/)) return "bs-BA"; // Bosnian
    if (text.match(/[\u0400-\u04FF]/)) return "bg-BG"; // Bulgarian
    if (text.match(/[\u1E00-\u1EFF]/)) return "ca-ES"; // Catalan
    if (text.match(/[\u0400-\u04FF]/)) return "ceb"; // Cebuano
    if (text.match(/[\u1200-\u137F]/)) return "chr"; // Chichewa
    if (text.match(/[\u4E00-\u9FFF]/)) return "zh-CN"; // Chinese (Simplified)
    if (text.match(/[\u4E00-\u9FFF]/)) return "zh-TW"; // Chinese (Traditional)
    if (text.match(/[\u0100-\u017F]/)) return "co"; // Corsican
    if (text.match(/[\u0100-\u017F]/)) return "hr-HR"; // Croatian
    if (text.match(/[\u0100-\u017F]/)) return "cs-CZ"; // Czech
    if (text.match(/[\u00C0-\u00FF]/)) return "da-DK"; // Danish
    if (text.match(/[\u0100-\u017F]/)) return "nl-NL"; // Dutch
    if (text.match(/[a-zA-Z]/)) return "en-US"; // English
    if (text.match(/[a-zA-Z]/)) return "eo-EO"; // Esperanto
    if (text.match(/[\u0100-\u017F]/)) return "et-EE"; // Estonian
    if (text.match(/[a-zA-Z]/)) return "tl-PH"; // Filipino
    if (text.match(/[\u0100-\u017F]/)) return "fi-FI"; // Finnish
    if (text.match(/[àâçéèêëîïôûùüÿñ]/)) return "fr-FR"; // French
    if (text.match(/[\u0100-\u017F]/)) return "fy-NL"; // Frisian
    if (text.match(/[\u0100-\u017F]/)) return "gl-ES"; // Galician
    if (text.match(/[\u10A0-\u10FF]/)) return "ka-GE"; // Georgian
    if (text.match(/[äöüßÄÖÜ]/)) return "de-DE"; // German
    if (text.match(/[\u0391-\u03A9]/)) return "el-GR"; // Greek
    if (text.match(/[\u0A80-\u0AFF]/)) return "gu-IN"; // Gujarati
    if (text.match(/[\u0900-\u097F]/)) return "ht-HT"; // Haitian Creole
    if (text.match(/[\u1200-\u137F]/)) return "ha"; // Hausa
    if (text.match(/[\u0900-\u097F]/)) return "haw"; // Hawaiian
    if (text.match(/[\u0590-\u05FF]/)) return "he-IL"; // Hebrew
    if (text.match(/[\u0900-\u097F]/)) return "hi-IN"; // Hindi
    if (text.match(/[\u0D80-\u0DFF]/)) return "hmn"; // Hmong
    if (text.match(/[\u0100-\u017F]/)) return "hu-HU"; // Hungarian
    if (text.match(/[\u0100-\u017F]/)) return "is-IS"; // Icelandic
    if (text.match(/[\u1E00-\u1EFF]/)) return "ig"; // Igbo
    if (text.match(/[\u0100-\u017F]/)) return "id-ID"; // Indonesian
    if (text.match(/[\u0100-\u017F]/)) return "ga-IE"; // Irish
    if (text.match(/[\u0100-\u017F]/)) return "it-IT"; // Italian
    if (text.match(/[\u3040-\u30FF]/)) return "ja-JP"; // Japanese
    if (text.match(/[\u0100-\u017F]/)) return "jv-ID"; // Javanese
    if (text.match(/[\u0C80-\u0CFF]/)) return "kn-IN"; // Kannada
    if (text.match(/[\u0400-\u04FF]/)) return "kk-KZ"; // Kazakh
    if (text.match(/[\u1780-\u17FF]/)) return "km-KH"; // Khmer
    if (text.match(/[\uAC00-\uD7AF]/)) return "ko-KR"; // Korean
    if (text.match(/[\u0400-\u04FF]/)) return "ku-TR"; // Kurdish (Kurmanji)
    if (text.match(/[\u0400-\u04FF]/)) return "ky-KG"; // Kyrgyz
    if (text.match(/[\u0E00-\u0E7F]/)) return "lo-LA"; // Lao
    if (text.match(/[A-Za-z]/)) return "la"; // Latin
    if (text.match(/[\u0100-\u017F]/)) return "lv-LV"; // Latvian
    if (text.match(/[\u0100-\u017F]/)) return "lt-LT"; // Lithuanian
    if (text.match(/[\u0100-\u017F]/)) return "lb-LU"; // Luxembourgish
    if (text.match(/[\u0400-\u04FF]/)) return "mk-MK"; // Macedonian
    if (text.match(/[\u0400-\u04FF]/)) return "mg-MG"; // Malagasy
    if (text.match(/[\u0E00-\u0E7F]/)) return "ms-MY"; // Malay
    if (text.match(/[\u0D00-\u0D7F]/)) return "ml-IN"; // Malayalam
    if (text.match(/[\u0100-\u017F]/)) return "mt-MT"; // Maltese
    if (text.match(/[\u0100-\u017F]/)) return "mi"; // Maori
    if (text.match(/[\u0900-\u097F]/)) return "mr-IN"; // Marathi
    if (text.match(/[\u1800-\u18AF]/)) return "mn-MN"; // Mongolian
    if (text.match(/[\u1000-\u109F]/)) return "my-MM"; // Myanmar (Burmese)
    if (text.match(/[\u0900-\u097F]/)) return "ne-NP"; // Nepali
    if (text.match(/[\u0100-\u017F]/)) return "no-NO"; // Norwegian
    if (text.match(/[\u0600-\u06FF]/)) return "ps"; // Pashto
    if (text.match(/[\u0600-\u06FF]/)) return "fa-IR"; // Persian
    if (text.match(/[\u0100-\u017F]/)) return "pl-PL"; // Polish
    if (text.match(/[\u0100-\u017F]/)) return "pt-PT"; // Portuguese
    if (text.match(/[\u0A80-\u0AFF]/)) return "pa-IN"; // Punjabi
    if (text.match(/[\u0100-\u017F]/)) return "ro-RO"; // Romanian
    if (text.match(/[\u0400-\u04FF]/)) return "ru-RU"; // Russian
    if (text.match(/[\u0100-\u017F]/)) return "sm"; // Samoan
    if (text.match(/[a-zA-Z]/)) return "gd"; // Scottish Gaelic
    if (text.match(/[\u0400-\u04FF]/)) return "sr-RS"; // Serbian
    if (text.match(/[\u1800-\u18AF]/)) return "st"; // Sesotho
    if (text.match(/[\u0500-\u052F]/)) return "sn"; // Shona
    if (text.match(/[\u0900-\u097F]/)) return "sd"; // Sindhi
    if (text.match(/[\u0900-\u097F]/)) return "si-LK"; // Sinhala
    if (text.match(/[\u0100-\u017F]/)) return "sk-SK"; // Slovak
    if (text.match(/[\u0100-\u017F]/)) return "sl-SI"; // Slovenian
    if (text.match(/[\u0100-\u017F]/)) return "so-SO"; // Somali
    if (text.match(/[áéíóúüñ]/)) return "es-ES"; // Spanish
    if (text.match(/[\u0100-\u017F]/)) return "su"; // Sundanese
    if (text.match(/[\u0100-\u017F]/)) return "sw"; // Swahili
    if (text.match(/[\u0100-\u017F]/)) return "sv-SE"; // Swedish
    if (text.match(/[\u0400-\u04FF]/)) return "tg"; //
    if (text.match(/[\u0400-\u04FF]/)) return "tg"; // Tajik
    if (text.match(/[\u0B80-\u0BFF]/)) return "ta-IN"; // Tamil
    if (text.match(/[\u0C00-\u0C7F]/)) return "te-IN"; // Telugu
    if (text.match(/[\u0E00-\u0E7F]/)) return "th-TH"; // Thai
    if (text.match(/[\u0100-\u017F]/)) return "tr-TR"; // Turkish
    if (text.match(/[\u0400-\u04FF]/)) return "uk-UA"; // Ukrainian
    if (text.match(/[\u0900-\u097F]/)) return "ur-PK"; // Urdu
    if (text.match(/[\u0400-\u04FF]/)) return "uz-UZ"; // Uzbek
    if (text.match(/[\u0100-\u017F]/)) return "vi-VN"; // Vietnamese
    if (text.match(/[\u0100-\u017F]/)) return "cy-GB"; // Welsh
    if (text.match(/[\u0100-\u017F]/)) return "xh"; // Xhosa
    if (text.match(/[\u0590-\u05FF]/)) return "yi"; // Yiddish
    if (text.match(/[\u00C0-\u00FF]/)) return "yo-NG"; // Yoruba
    if (text.match(/[\u0100-\u017F]/)) return "zu-ZA"; // Zulu
  }

  function stopSpeaking() {
    if (utterance) {
      window.speechSynthesis.cancel();
    }
  }

  document.addEventListener("mouseup", readSelectedText);
  document.addEventListener("click", function (event) {
    let selectedText = window.getSelection().toString();
    if (!selectedText && event.target !== document) {
      stopSpeaking();
    }
  });

  document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
      isTTSenabled = !isTTSenabled;
      if (!isTTSenabled) {
        stopSpeaking();
      }
    });
} else {
  console.log("not supported");
}
