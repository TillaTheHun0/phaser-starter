'use strict'

import { UP, DOWN, LEFT, RIGHT } from '../direction'

// Collidable Mixin
let Collidable = (superclass) => {
  return class extends superclass {
    constructor (config) {
      super(config)
      let {game, collideHandlers, overlapHandlers, collideDirections} = config
      this.collideHandlers = collideHandlers || []
      this.overlapHandlers = overlapHandlers || []
      this.collideDirections = collideDirections || [DOWN, UP, LEFT, RIGHT]

      // enable physics on this
      game.physics.arcade.enable(this)

      // Check collision on each direction
      this.collideDirections.forEach((cd) => {
        this.body.checkCollision[cd] = true
      })

      // Bind handlers to this
      this.collideHandlers.forEach((ch) => {
        ch.callback.bind(this)
      })

      // Bind handlers to this
      this.overlapHandlers.forEach((oh) => {
        oh.callback.bind(this)
      })
    }

    checkCollision () {
      this.collideHandlers.forEach((ch) => {
        this.game.physics.arcade.collide(this, ch.sprite, ch.callback, ch.process, this)
      })
    }

    checkOverlaps () {
      this.overlapHandlers.forEach((oh) => {
        this.game.physics.arcade.overlap(this, oh.sprite, oh.callback, oh.process, this)
      })
    }
  }
}

export default Collidable
