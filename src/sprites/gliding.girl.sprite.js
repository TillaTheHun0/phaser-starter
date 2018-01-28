'use strict'

import Phaser from 'phaser'

import * as Components from '../components'

const {
  parent,
  Mixin: { Controllable },
  Sprite: { SpriteConfig },
  Direction: { UP, DOWN, LEFT, RIGHT }
} = Components

const ASSET = 'glidingGirl'

class GlidingGirl extends parent(Phaser.Sprite).mixin(Controllable) {
  /**
   * @param {SpriteConfig} config - the SpriteConfig object
   */
  constructor ({game, x, y}) {
    let enablePhysics = true // enable physics on gliding girl

    let collideHandlers = [] // figure out how to set these automatically based whats in the game
    let overlapHandlers = [] // figure out how to set these automatically based whats in the game
    let collideDirections = [UP, DOWN, LEFT, RIGHT]

    let spriteConfig = new SpriteConfig(game, x, y, ASSET, enablePhysics, collideHandlers, overlapHandlers, collideDirections)
    super(spriteConfig)
    this.deceleration = 10
    this.acceleration = 5
  }

  update () {
    super.update()
    // Do some other stuff here maybe?
  }

  _rightPressed () {
    // add more
    this.body.velocity.x += this.acceleration
  }

  _leftPressed () {
    // add more
    this.body.velocity.x -= this.acceleration
  }

  _downPressed () {
    // do nothing for now
  }

  _upPressed () {
    // add more
  }

  _default () {
    // -1 or +1
    let sign = this.body.velocity.x / Math.abs(this.body.velocity.x)

    // Apply deceleration
    this.body.velocity.x -= (this.deceleration * sign)

    let afterSign = this.body.velocity.x / Math.abs(this.body.velocity.x)

    // Crossed over 0 so set to 0
    if (sign !== afterSign) {
      this.body.velocity.x = 0
    }
  }
}

export default GlidingGirl
