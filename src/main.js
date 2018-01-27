import 'pixi'
import 'p2'
import Phaser from 'phaser'

import config from './config'

import {
  Boot as BootState,
  Splash as SplashState,
  Game as GameState
} from './states'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('boot', BootState, false)
    this.state.add('splash', SplashState, false)
    this.state.add('game', GameState, false)

    // Immiediatley start the boot state
    if (!window.cordova) {
      this.state.start('boot')
    } else {
      let app = {
        initialize: function () {
          document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
          )
        },

        // deviceready Event Handler
        //
        onDeviceReady: function () {
          this.receivedEvent('deviceready')
          // When the device is ready, start Phaser Boot state.
          this.state.start('boot')
        },

        receivedEvent: function (id) {
          console.log('Received Event: ' + id)
        }
      }

      app.initialize()
    }
  }

  create () {
    //  We're going to be using physics, so enable the Arcade Physics system
    this.physics.startSystem(Phaser.Physics.ARCADE)
  }
}

export default Game
