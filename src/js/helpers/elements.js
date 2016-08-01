/**
 * Generate initial array with elements as objects
 * This array will be extended later with elements attributes values
 * like 'position'
 */
const createArrayWithElements = function (elements) {
  elements = elements || document.querySelectorAll('[data-aosaa]');
  let finalElements = [];

  [].forEach.call(elements, function(el, i) {
    finalElements.push({
      node: el
    });
  });

  return finalElements;
};

export default createArrayWithElements;
