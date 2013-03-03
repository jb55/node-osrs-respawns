
# osrs-respawns

Respawn timers for \[Old School\] RuneScape

## Usage

```js
var getServers = require('osrs-servers')
  , respawns   = require('osrs-respawns')
  , _          = require('underscore');

getServers(function(err, servers){
  var name = "Old School 3";
  var world = _(servers).find(function(server){ return server.name == name; });
  var respawn = respawns.rocks.rune(world.users);

  setTimeout(function(){
    console.log("Rune ore respawned on " + name);
  }, respawn);
});
```



