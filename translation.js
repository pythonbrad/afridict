var data = {
  en: {
    home_label: "Home",
    feature_label: "Features",
    dark_theme_label: "dark",
    light_theme_label: "light",
    search_button_label: "Search",
    not_found: "Not found.",
  },
  fr: {
    home_label: "Page d'acceuil",
    feature_label: "Fonctionalités",
    dark_theme_label: "Sombre",
    light_theme_label: "Clair",
    search_button_label: "Rechercher",
    not_found: "Non trouvé.",
  },
};

(() => {
  var lang = sessionStorage.getItem("lang") || "en";
  sessionStorage.setItem("lang", lang);

  Object.values(document.getElementsByTagName("*")).forEach((e) => {
    if (e.dataset.textId) {
      e.textContent = data[lang][e.dataset.textId];
    }
  });
})();
