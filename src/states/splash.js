'use strict'

import Phaser from 'phaser'
import { centerGameObjects } from '../components/utils'

class Splash extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('glidingGirl', '../../assets/images/player-placeholder.png')
  }

  create () {
    this.state.start('game')
  }
}

export default Splash
