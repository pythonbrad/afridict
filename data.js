export const api = (dict, input, mode) => {
  var words = data[dict] || {};
  var input = input.toLowerCase();

  // Startwith
  if (mode == "sw") {
    return Object.entries(words)
      .filter((word) => word[0].toLowerCase().startsWith(input))
      .slice(0, 7);
  }
  // Equal
  else {
    return words[input];
  }
};

export const data = {
  "sw-fr": {
    "": {
      name: "",
      lang: "fr-sw",
      nature: "",
      meanings: [
        {
          definition: "",
          examples: [],
          synonyms: [],
          confers: [],
          antonyms: [],
          plurials: [],
          litteratures: [],
          homonyms: [],
          others: [],
        },
      ],
    },
  },
};
