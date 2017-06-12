class Basket {
  constructor(rules) {
    this.items = {};
    this.rules = rules;
  }

  add(item) {
    if (!this.items[item]) {
      this.items[item] = 0;
    }

    this.items[item]++;
  }

  total() {
    let total = 0;

    for (let key in this.items) {

      if (this.rules[key].rule) {
        total += this.rules[key].rule(this.items[key], this.rules[key].price)

      } else {
        total += this.rules[key].price * this.items[key];
      }
    }

    return total;
  }
}

export default Basket;
