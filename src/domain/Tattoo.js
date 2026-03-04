export default class Tattoo {
  constructor(name, style, imageUrl) {
    this.name = name;
    this.style = style;
    this.imageUrl = imageUrl;
  }

  getDisplayName() {
    return `${this.name} (${this.style.charAt(0).toUpperCase() + this.style.slice(1)})`;
  }
}
