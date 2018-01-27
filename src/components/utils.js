'use strict'

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export {
  capitalize,
  centerGameObjects
}
