const shape = require('./Shape');

class Square extends shape {
    render() {
        return `<svg height="300" width="300" xlmns="http://www.w3.org/2000/svg">
        <square cx="150" cy="150" r="150" fills"${this.color}" />
        <text fill="${this.textColor}" font size ="75" x="115" y="150">${this.text}</text>
        </svg>`
    }
}
module.exports = Square;