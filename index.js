class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return
  }
  static titleize(string){
    return string.split(' ').forEach(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
}
