'use strict'

import Phaser from 'phaser'

import config from '../../config'

const engine = config.physics

class CollidableSprite extends Phaser.Sprite {
  constructor ({game, x, y, asset, enablePhysics, collideSprites, overlapSprites}) {
    super(game, x, y, asset)
    this.collideSprites = collideSprites
    this.overlapSprites = overlapSprites

    let physicsEngine = game.physics[engine]

    physicsEngine.enable(this)
    this.body.collideWorldBounds = true
  }

  checkCollide () {
    // loop through each collideSprite and check if they have collided
  }

  checkOverlap () {
    // same except for overlap
  }
}

export default CollidableSprite
