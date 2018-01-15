'use strict'

import _ from 'lodash'

import Phaser from 'phaser'

/**
 * This class if for Sprites that are able to be controlled
 * via key inputs
 */
class ControlableSprite extends Phaser.Sprite {
  constructor ({ game, x, y, asset, keyMap }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    //  This will create a new object called "cursors", inside it will contain 4 objects: up, down, left and right.
    //  These are all Phaser.Key objects, so anything you can do with a Key object you can do with these.
    this._cursor = game.input.keyboard.createCursorKeys()

    this._establishStandardControls(keyMap)
    this._establishUniqueControls(keyMap)
  }

  /**
   * Adds a custom control key for this instance.
   *
   * @param {Phaser.KeyCode} key - the Phaser.KeyCode for the key that we are binding to
   * @param {*} callback - the call function to call when the event is triggered
   */
  addControl (key, callback) {
    let _key = this.game.input.keyboard.addKey(key)
    let _cb = callback.bind(this)

    // Remove any listener that is already attached to this key
    _key.forget()

    // Add the new listener
    _key.onDown.add(_cb)
  }

  /**
   * This will set up any listeners for common input controls, such as arrow keys
   * up, down, left, right
   *
   * @param {Object} keyMap: object containing up, down, left, right keys
   */
  _establishStandardControls ({up, down, left, right}) {
    let cursors = this._cursors

    up = up.bind(this)
    down = down.bind(this)
    left = left.bind(this)
    right = right.bind(this)

    cursors.up.onDown.add(up)
    cursors.down.onDown.add(down)
    cursors.left.onDown.add(left)
    cursors.right.onDown.add(right)
  }

  _establishUniqueControls (keyMap) {
    let _kmap = _.omit(keyMap, ['up', 'down', 'left', 'right'])

    // No unique controls so just return
    if (_.isEmpty(_kmap)) {
      return
    }

    _.forEach(_kmap, (value, key) => {
      return this.addControl(key, value)
    })
  }
}

export default ControlableSprite
