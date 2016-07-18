/* Clearing variables */

import calculateOffset from './calculateOffset';

const prepare = function ($elements, options, initialClass = '') {
  $elements.forEach((el, i) => {
    el.node.classList.add(initialClass + '');
    el.position = calculateOffset(el.node, options.offset);
  });

  return $elements;
};

export default prepare;
