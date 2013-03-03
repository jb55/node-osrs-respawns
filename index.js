
var rocks = module.exports.rocks = {};

rocks.runite = rocks.rune = function(players) {
  return 1500000 - players * 375;
}

rocks.adamantite = rocks.adamant = function(players) {
  return 480000 - players * 120;
}

rocks.mithril = rocks.mith = function(players) {
  return 240000 - players * 60;
}
