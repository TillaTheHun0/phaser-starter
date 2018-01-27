'use strict'

class SpriteConfig {
  constructor (game, x, y, asset, enablePhysics, collideSprites) {
    this.game = game
    this.x = x
    this.y = y
    this.asset = asset
    this.enablePhysics = enablePhysics
    this.collideSprites = collideSprites
  }
}

export default SpriteConfig
