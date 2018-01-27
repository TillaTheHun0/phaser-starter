'use strict'

/**
 * This file is only responsible for loading our Phaser.Game and
 * instantiating a new instance of it, thus starting the game.
 *
 * In the event of a Cordova environment, it waits until the deviceready
 * event is fired and then starts the boot state
 */

import Game from './main'

// Start the game
window.game = new Game()
