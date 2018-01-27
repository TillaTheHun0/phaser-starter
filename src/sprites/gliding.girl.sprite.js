'use strict'

import { ControllableSprite } from './base'
import { Sprite } from '../components'

const { SpriteConfig } = Sprite

const ASSET = 'glidingGirl'

class GlidingGirl extends ControllableSprite {
  /**
   * @param {SpriteConfig} config - the SpriteConfig object
   */
  constructor ({game, x, y, enablePhysics, collideSprites}) {
    let spriteConfig = new SpriteConfig(game, x, y, ASSET, enablePhysics, collideSprites)
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
    console.log('Calculating Deceleration and Applying...')
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
