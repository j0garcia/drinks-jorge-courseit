const Drink = require("./../models/drinkModel");

class drinkService {
  getDrinkByName(name) {
    const query = Drink.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = drinkService;