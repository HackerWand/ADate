/*
 * Author: hackerwand
 * Email: heipi@hackerwand.com
 * Link: https://www.slippersclown.com
 * Date: Fri Jan 03 2020
 */
class ADate extends Date {
  get frame () {
    let month = this.getMonth() + 1
    let date = this.getDate()
    let hours = this.getHours()
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()

    return {
      y: (this.getFullYear() + '').substr(2, 2),
      Y: this.getFullYear(),
      m: month,
      M: month < 10 ? '0' + month : month,
      d: date,
      D: date < 10 ? '0' + date : date,
      h: hours,
      H: hours < 10 ? '0' + hours : hours,
      i: minutes,
      I: minutes < 10 ? '0' + minutes : minutes,
      s: seconds,
      S: seconds < 10 ? '0' + seconds : seconds
    }
  }

  constructor() {
    super(...arguments)
  }

  sameDate (date) {
    return date && this.sameYear(date) && this.sameMonth(date) && date.getDate() === this.getDate()
  }

  sameMonth (date) {
    return date && this.sameYear(date) && date.getMonth() === this.getMonth()
  }

  sameYear (date) {
    return date && date.getFullYear() === this.getFullYear()
  }

  copy () {
    return new ADate(this.getTime())
  }

  compare (date, tag) {
    if (!date || !(date instanceof Date)) {
      return undefined
    }

    let index = 'ymdhis'.indexOf(tag.toLowerCase())

    if (!(date instanceof ADate)) {
      date = new ADate(date.getTime())
    }

    if (index !== 0) {
      index = 4 + index * 2
    } else {
      index = 4
    }

    let left = parseInt(this.format().substr(0, index))
    let right = parseInt(date.format().substr(0, index))

    if (left < right) {
      return -1
    } else if (left === right) {
      return 0
    } else {
      return 1
    }
  }

  compute (tag, quantity) {
    const tags = ['Y', 'M', 'D', 'H', 'I', 'S']
    let index = tags.findIndex(v => tag.toUpperCase() === v)
    if (index === undefined) {
      return null
    }
    let d = this.format(tags.join(',')).split(',').map((v, i) => {
      return i === index ? (parseInt(v) + quantity) : parseInt(v)
    })
    d[1] -= 1
    return new ADate(...d)
  }

  format (str = 'YMDHIS') {
    const frame = this.frame
    return str.split('').map(char => frame[char] !== undefined ? frame[char] : char).join('')
  }
}
