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
    let stringArray = string.split(' ')
    let capFirst = stringArray[0].toUpperCase()
    console.log(capFirst)
  //takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word
  }
}