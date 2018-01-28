'use strict'

class GameObjectConfig {
  constructor (game, x, y, asset, enablePhysics) {
    this.game = game
    this.x = x
    this.y = y
    this.asset = asset
    this.enablePhysics = enablePhysics
  }
}

export default GameObjectConfig
