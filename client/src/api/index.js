export default class Fans {
  getFans() {
    try {
      const storedFans = JSON.parse(localStorage.getItem('fans'));
      return (storedFans) ? storedFans : [];
    } catch (err) {
      return [];
    }
  }

  getFanByName(name) {
    return this.getFans().find((fan) => fan.name === name);
  }

  saveFan(fan) {
    const fans = this.getFans();
    const foundFanIndex = fans.findIndex((existingFan) => existingFan.name === fan.name);
    if (foundFanIndex > -1) {
      fans[foundFanIndex] = fan;
    } else {
      fans.push(fan);
    }

    localStorage.setItem('fans', JSON.stringify(fans));
  }
}