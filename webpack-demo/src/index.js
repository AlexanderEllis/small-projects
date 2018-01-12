import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Do something with lodash, but now from locally installjed
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

  return element;
}

document.body.appendChild(component());

