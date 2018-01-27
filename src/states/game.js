'use strict'

import Phaser from 'phaser'

import { GlidingGirl } from '../sprites'

class Game extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.glidingGirl = new GlidingGirl({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      enablePhysics: true
    })

    this.game.add.existing(this.glidingGirl)
    console.log('added gliding girl')
  }
}

export default Game
