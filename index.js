import "./translation";
import { api } from "./data";

(async function () {
  // Binding
  const searchInputElement = document.getElementById("search-input");
  const searchLangElement = document.getElementById("search-lang");
  const searchButtonElement = document.getElementById("search-button");
  const firstLangElement = document.getElementById("first-lang");
  const secondLangElement = document.getElementById("second-lang");
  const searchSuggestionElement = document.getElementById("search-suggestion");
  const wordDataElement = document.getElementById("word-data");
  const wordNotFoundElement = document.getElementById("word-not-found");

  // Node
  const searchSuggestionItemNode = document
    .getElementById("search-suggestion-item")
    .cloneNode();
  const wordDataInfoNode = document
    .getElementById("word-data-info")
    .cloneNode();
  const wordDataDefinitionNode = document
    .getElementById("word-data-definition")
    .cloneNode();
  const wordDataExampleNode = document
    .getElementById("word-data-example")
    .cloneNode();

  // Functions
  const getCurrentDictionary = () => {
    const lang1 = searchLangElement.value;
    const lang2 = sessionStorage.getItem("lang");

    return `${lang1}-${lang2}`;
  };

  // Event Listening
  // update the search placeholder
  searchLangElement.addEventListener("change", () => {
    searchInputElement.attributes.placeholder.value =
      searchLangElement.selectedOptions[0].dataset.placeholder;
  });
  searchLangElement.dispatchEvent(new Event("change"));

  // update the interface language
  [firstLangElement, secondLangElement].forEach((e) =>
    e.addEventListener("click", () => {
      sessionStorage.setItem("lang", e.dataset.langId);
      window.location.reload();
    }),
  );

  // update search suggestions
  searchInputElement.addEventListener("input", () => {
    searchSuggestionElement.innerHTML = "";
    const input = searchInputElement.value;
    const dict = getCurrentDictionary();
    const words = api(dict, input, "sw");

    for (let word of words) {
      const searchSuggestionItemElement = searchSuggestionItemNode.cloneNode();
      searchSuggestionItemElement.addEventListener("click", () => {
        searchInputElement.value = searchSuggestionItemElement.textContent;
        searchButtonElement.dispatchEvent(new Event("click"));
      });
      searchSuggestionItemElement.textContent = word[0];
      searchSuggestionElement.appendChild(searchSuggestionItemElement);
    }
  });

  // return result of the searching
  searchButtonElement.addEventListener("click", () => {
    const input = searchInputElement.value;
    const dict = getCurrentDictionary();
    wordDataElement.innerHTML = "";

    // We fetch data
    searchButtonElement.classList.add("is-loading");
    const word = api(dict, input);
    searchButtonElement.classList.remove("is-loading");

    if (word) {
      const wordDataInfoElement = wordDataInfoNode.cloneNode();
      const wordElement = document.createElement("span");
      wordElement.textContent = word.name;
      wordElement.className = "title is-1";
      const spaceElement = document.createElement("span");
      spaceElement.innerHTML = "&nbsp;&nbsp;";
      const wordInfoElement = document.createElement("span");
      wordInfoElement.textContent = word.nature;

      wordDataInfoElement.appendChild(wordElement);
      wordDataInfoElement.appendChild(spaceElement);
      wordDataInfoElement.appendChild(wordInfoElement);
      wordDataElement.appendChild(wordDataInfoElement);

      for (let meaning of word.meanings) {
        const wordDataDefinitionElement = wordDataDefinitionNode.cloneNode();
        wordDataDefinitionElement.textContent = meaning.definition;

        wordDataElement.appendChild(document.createElement("br"));
        wordDataElement.appendChild(wordDataDefinitionElement);

        for (let example of meaning.examples) {
          const wordDataExampleElement = wordDataExampleNode.cloneNode();
          wordDataExampleElement.textContent = example;

          wordDataElement.appendChild(wordDataExampleElement);
        }
      }
    } else {
      wordDataElement.appendChild(wordNotFoundElement);
    }
  });

  // Hidden by default
  searchSuggestionElement.innerHTML = "";
  wordDataElement.innerHTML = "";
})();
