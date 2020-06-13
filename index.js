class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return
  }
  static titleize(string){
    let nonCapitalizeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for
', 'at', 'by', 'from']
    let newString = string.split(' ').forEach(word => !nonCapitalizeWords.includes(word)
    return newString
  }
}
