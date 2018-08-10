export default class Fans {
  constructor() {
    this.fans = this.getFans();
  }

  getFans() {
    try {
      const storedFans = JSON.parse(localStorage.getItem('fans'));
      return (storedFans) ? storedFans : [];
    } catch (err) {
      return [];
    }
  }

  saveFan(fan) {
    const foundFanIndex = this.fans.findIndex((existingFan) => existingFan.name === fan.name);
    if (foundFanIndex > -1) {
      this.fans[foundFanIndex] = fan;
    } else {
      this.fans.push(fan);
    }

    localStorage.setItem('fans', JSON.stringify(this.fans));
  }
}