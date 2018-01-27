'use strict'

import _ from 'lodash'

import Phaser from 'phaser'

// import CollidableSprite from '../base/collidable.sprite'

const UP = 'up'
const DOWN = 'down'
const LEFT = 'left'
const RIGHT = 'right'

/**
 * This class if for Sprites that are able to be controlled
 * via key inputs
 */
class ControllableSprite extends Phaser.Sprite {
  constructor (spriteConfig) {
    let { game, x, y, asset, enablePhysics } = spriteConfig
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    if (enablePhysics) {
      game.physics.arcade.enable(this)
    }

    //  This will create a new object called "cursors", inside it will contain 4 objects: up, down, left and right.
    //  These are all Phaser.Key objects, so anything you can do with a Key object you can do with these.
    this._cursor = game.input.keyboard.createCursorKeys()
  }

  update () {
    // check for collision and overlaps
    super.update()

    this.checkUp()
    this.checkDown()
    this.checkLeft()
    this.checkRight()

    if (this._controlling) {
      // reset controlling flag
      this._controlling = false
      return
    }

    this._default()
  }

  /**
   * Adds a custom key listener for this instance.
   *
   * TODO: idk if this should on the Sprite or the game. Need to research more.
   *
   * @param {Phaser.KeyCode} keyCode - the Phaser.KeyCode for the key that we are binding to
   * @param {KeyListenerCallback} - the callbacks to attach to the key
   */
  addKeyListener (keyCode, onUp, onDown) {
    if (!this._listeners) {
      this._listeners = {}
    }

    let _key = this._listeners[keyCode] ? this._listeners[keyCode] : this.game.input.keyboard.addKey(keyCode)
    let _onDownCb = onUp.bind(this)
    let _onUpCb = onDown.bind(this)

    // Remove any listener that is already attached to this key
    _key.forget()

    // Add the new listener
    _key.onDown.add(_onDownCb)

    if (onUp) {
      _key.onUp.add(_onUpCb)
    }

    this._listeners[keyCode] = _key
  }

  checkUp () {
    return this._checkDirection(UP)
  }

  checkDown () {
    return this._checkDirection(DOWN)
  }

  checkLeft () {
    return this._checkDirection(LEFT)
  }

  checkRight () {
    return this._checkDirection(RIGHT)
  }

  /**
   * Checks if the direction is pressed on the cursor.
   * If it is pressed, the corresponding onDown callback is called.
   *
   * Otherwise (the key is released), if an onUp callback is specified, it is called.
   *
   * @param {UP|DOWN|LEFT|RIGHT} direction - the direction to check
   */
  _checkDirection (direction) {
    if (this._cursor[direction].isDown) {
      this[`_${direction}Pressed`]()
      // set controlling flag
      this._controlling = true
      return
    }

    // Call released method
    this[`_${direction}Released`]()
  }

  _setKeyListeners (keyMap) {
    let _kmap = _.omit(keyMap, ['up', 'down', 'left', 'right'])

    // No unique controls so just return
    if (_.isEmpty(_kmap)) {
      return
    }

    _.forEach(_kmap, (keyListenerCallbacks, key) => {
      return this.addKeyListener(key, keyListenerCallbacks)
    })
  }

  _upPressed () {}
  _upReleased () {}
  _downPressed () {}
  _downReleased () {}
  _leftPressed () {}
  _leftReleased () {}
  _rightPressed () {}
  _rightReleased () {}
  _default () {}
}

export default ControllableSprite
