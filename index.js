class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
;  //takes in a string and capitalizes the first letter.
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ']/g, '');
  //takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces
  }

  static titleize(string) {
    const words = string.toLowerCase().split(" ");
    let newWords = words.map(word => {
    if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
      return word[0].toUpperCase() + word.slice(1)
    } else {
      return word
    }
  }).join(" ")
  return newWords[0].toUpperCase() + newWords.slice(1)
  }
}