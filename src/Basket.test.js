import Basket from './Basket';

const RULES = {
  twoForOne: function (numberOfItems, price) {
    numberOfItems = Math.round(numberOfItems / 2);

    return numberOfItems * price;
  },

  fiftyPennyDiscount: function (numberOfItems, price) {
    if (numberOfItems >= 3) {
      price -= 0.50;
    }

    return numberOfItems * price;
  }
};

const PRICING_RULES = {
  FR1: {
    price: 3.11,
    rule: RULES.twoForOne
  },
  SR1: {
    price: 5.00,
    rule: RULES.fiftyPennyDiscount
  },
  CF1: {
    price: 11.23
  }
};


describe('Basket', () => {
  let basket;

  beforeEach(() => {
    basket = new Basket(PRICING_RULES);
  });

  it('can get an total of 0 when no products was added', () => {
    expect(basket.total()).toEqual(0);
  });

  it('returns the price of a strawbery when only adding a strawbery', () => {
    basket.add('SR1');

    expect(basket.total()).toEqual(5);
  });
  it('returns the price of a fruit tea when only adding a fruit tea', () => {
    basket.add('FR1');

    expect(basket.total()).toEqual(3.11);
  });
  it('returns the price of a coffee when only adding a coffee', () => {
    basket.add('CF1');

    expect(basket.total()).toEqual(11.23);
  });


  it('adds both strawbery and coffee when adding those 2 items', () => {
    basket.add('SR1');
    basket.add('CF1');

    expect(basket.total()).toEqual(16.23);
  });
  it('adds both strawbery and fruit tea when adding those 2 items', () => {
    basket.add('SR1');
    basket.add('FR1');

    expect(basket.total()).toEqual(8.11);
  });
  it('gets a price discount when buying 3 strawberries', () => {
    basket.add('SR1');
    basket.add('SR1');
    basket.add('SR1');

    expect(basket.total()).toEqual(13.5);
  });
  it('gets a 1 bought get 1 free discount when buying fruit tea', () => {
    basket.add('FR1');
    basket.add('FR1');

    expect(basket.total()).toEqual(3.11);
  });

  describe('Test Data', () => {
    it('passes test 1', () => {
      basket.add('FR1');
      basket.add('SR1');
      basket.add('FR1');
      basket.add('CF1');

      expect(basket.total()).toEqual(19.34);
    });

    it('passes test 1', () => {
      basket.add('FR1');
      basket.add('FR1');

      expect(basket.total()).toEqual(3.11);
    });

    it('passes test 1', () => {
      basket.add('SR1');
      basket.add('SR1');
      basket.add('FR1');
      basket.add('SR1');

      expect(basket.total()).toEqual(16.61);
    });
  });
});
