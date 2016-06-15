# ![spacetrucker][logo-url] #

[![Build Status][travis-image]][travis-url]

Card-logic turn-based spacetrucking game. Very early in development.

## Planned features ##

 * Simplified "galaxy" map: a connected graph where every node is star, planet and spacedock, all in one.
 * "Cards": there's few base classes for game-entities (Player, Ship), and these can be affected by attached Cards. A Card can be something like a piece of equipment, a pending contract, random events, etc. Cards can also have cards attached onto them, e.g. an Engine card (attached to a Ship), can have a Muffler attached to it, and the Muffler can have a "Material: Adamantium" in turn.
 * Players should be able to travel the galaxy with their ships, accept spacetrucking contracts, customize their ship and personal equipment, experience random events depending on circumstances (like encountering a ghost spaceship in a frontier system)
 * More planned features TBD

## Install ##

 * `git clone`
 * `npm install`
 * Not much to do yet

## Running tests ##

```bash
npm test
```

## Contributing ##

Feel free to raise issues and send PRs. Make sure the tests run.

## License ##

## License

MIT - see [LICENSE][license-url]

[logo-url]: https://github.com/claudiorodriguez/spacetrucker/blob/master/docs/assets/spacetrucker.png
[license-url]: ./LICENSE
[travis-image]: https://travis-ci.org/claudiorodriguez/spacetrucker.svg?branch=master
[travis-url]: https://travis-ci.org/claudiorodriguez/spacetrucker
