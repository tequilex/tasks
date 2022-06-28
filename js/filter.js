const string = 'Привет! Как дела?';

const wowelsMassive = ['а','у','о','ы','э','я','ю','ё','и','е']

const getWowels = stringToFilter => {
  let extractedWowels = '';

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (wowelsMassive.includes(currentLetter)) {
      extractedWowels = extractedWowels + currentLetter;
    }
  }

  return extractedWowels;
}

console.log(getWowels(string))