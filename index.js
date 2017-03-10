function createElement(tagName) {
  const _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const children = arguments[2]
  const className = _props.className
  const htmlFor = _props.htmlFor
  const props = _objectWithoutProperties(_props, ['className', 'htmlFor'])

  let element = document.createElement(tagName)

  const childrenElements = getChildren(children)

  childrenElements.map((childrenElement) => {
    appendChild(element, childrenElement)
  })

  if (htmlFor) {
    element.setAttribute('for', htmlFor)
  }

  if (className) {
    element.setAttribute('class', className)
  }

  element = addAttributesAndHandlers(element, props)

  return element
}

// This function was taken from Babel, for rest parameters to work
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getChildren(children) {
  if (typeof children === 'string') {
    return [document.createTextNode(children)]
  } else if (Array.isArray(children)) {
    return children
  } else if (children) {
    return [children]
  } else {
    return []
  }
}

function appendChild(parent, child) {
  parent.appendChild(child)
  return parent
}

function addAttributesAndHandlers(element, props) {
  for (const prop in props) {
    if (isHandlerFunction(prop)) {
      element[prop.toLowerCase()] = props[prop]
      continue
    }
    
    if (hasEmptyValue(props[prop])) {
      continue
    }
    
    element.setAttribute(prop, props[prop])
  }

  return element
}

function isHandlerFunction(prop) {
  return prop.indexOf('on') === 0
}

function hasEmptyValue(propValue) {
  return propValue === null || propValue === undefined
}

module.exports = createElement
