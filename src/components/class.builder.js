'use strict'

class ClassBuilder {
  constructor (superclass) {
    this.superclass = superclass
  }

  mixin (...mixins) {
    return mixins.reduce((_curClass, Mixin) => {
      return Mixin(_curClass)
    }, this.superclass)
  }
}

let parent = (superclass) => {
  return new ClassBuilder(superclass)
}

export default parent
