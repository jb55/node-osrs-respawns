
# osrs-respawns

Respawn timers for \[Old School\] RuneScape

## Usage

```js
var getServers = require('osrs-servers')
  , respawns   = require('osrs-respawns')
  , _          = require('underscore')._;

getServers(function(err, servers){
  var name = "Old School 3";
  var world = _(servers).find(function(server){ return server.name == name; });
  var respawn = respawns.rocks.rune(world.players);

  setTimeout(function(){
    console.log("Runite rock respawned on " + name);
  }, respawn * 1000);
});
```



