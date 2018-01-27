'use strict'

/**
 * This class is to contain the onUp and onDown callbacks registered
 * to a key.
 *
 * Idk how I feel about this class
 */
class KeyListenerCallbacks {
  /**
   * @param {Function} onUp - the function to call when the key is released passing the sprite
   * @param {Function} onDown - the function to call when the key is pressed passing the sprite
   */
  constructor (onDown, onUp) {
    this.onUp = onUp
    this.onDown = onDown
  }
}

export default KeyListenerCallbacks
