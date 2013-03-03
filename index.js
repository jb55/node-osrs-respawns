
var rocks = module.exports.rocks = {};

rocks.runite = rocks.rune = function(population) {
  return 1500 - ((3 * population) / 8);
}

rocks.adamantite = rocks.adamant = function(population) {
  return 48 - ((3 * population) / 25);
}

rocks.mithril = rocks.mith = function(population) {
  return 240 - ((3 * population) / 50);
}
