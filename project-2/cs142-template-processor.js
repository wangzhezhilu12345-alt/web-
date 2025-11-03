class cs142templateprofessor {
  constructor(template) {
    this.template = template;
  }
  fillIn(dictionary) {
    let str = this.template;
    for (let key of dictionary) {
      let re = new RegExp("\\{\\{" + key + "\\}\\}");
      str = str.replace(re, dictionary[key]);
    }
    return str;
  }
}

//so foooooooooooool method
