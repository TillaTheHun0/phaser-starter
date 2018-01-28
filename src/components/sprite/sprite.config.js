'use strict'

import GameObjectConfig from '../game.object.config'

class SpriteConfig extends GameObjectConfig {
  constructor (game, x, y, asset, enablePhysics, collideHandlers, overlapHandlers, collideDirections) {
    super(game, x, y, asset, enablePhysics)
    this.collideSprites = collideHandlers
    this.overlapHandlers = overlapHandlers
    this.collideDirections = collideDirections
  }
}

export default SpriteConfig
