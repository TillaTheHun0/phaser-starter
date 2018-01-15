'use strict'

import ControlableSprite from '../base/controlable.sprite'

const ASSET = 'glidingGirl'

class GlidingGirl extends ControlableSprite {
  constructor (config) {
    config.asset = ASSET

    // TODO: Add the keyMap to config object to be passed to the ControlableSprite contructor

    super(config)
    this.anchor.setTo(0.5)
  }

  update () {

  }
}

export default GlidingGirl
