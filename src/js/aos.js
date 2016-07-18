/**
 * *******************************************************
 * AOS (Animate on scroll) - wowjs alternative
 * made to animate elements on scroll in both directions
 * *******************************************************
 */

import styles from './../sass/aos.scss';

// Modules & helpers
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

import observe from './libs/observer';

import detect from './helpers/detector';
import handleScroll from './helpers/handleScroll';
import prepare from './helpers/prepare';
import elements from './helpers/elements';

/**
 * Private variables
 */
let $aosElements = [];
let initialized = false;

// Detect not supported browsers (<=IE9)
// http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
const browserNotSupported = document.all && !window.atob;

/**
 * Default options
 */
let options = {
  offset: 120,
  delay: 0,
  easing: 'ease',
  duration: 400,
  disable: false,
  once: false,
  startEvent: 'DOMContentLoaded'
};

/**
 * Refresh AOS
 */
const refresh = function refresh(initialize = false, initialClass = '') {
  // Allow refresh only when it was first initialized on startEvent
  if (initialize) initialized = true;

  if (initialized) {
    // Extend elements objects in $aosElements with their positions
    $aosElements = prepare($aosElements, options, initialClass);
    // Perform scroll event, to refresh view and show/hide elements
    handleScroll($aosElements, options.once);

    return $aosElements;
  }
};

/**
 * Hard refresh
 * create array with new elements and trigger refresh
 */
const refreshHard = function refreshHard() {
  $aosElements = elements();
  refresh();
};

/**
 * Disable AOS
 * Remove all attributes to reset applied styles
 */
const disable = function() {
  $aosElements.forEach(function(el, i) {
    el.node.removeAttribute('data-aos');
    el.node.removeAttribute('data-aos-easing');
    el.node.removeAttribute('data-aos-duration');
    el.node.removeAttribute('data-aos-delay');
  });
};


/**
 * Check if AOS should be disabled based on provided setting
 */
const isDisabled = function(optionDisable) {
  return optionDisable === true ||
  (optionDisable === 'mobile' && detect.mobile()) ||
  (optionDisable === 'phone' && detect.phone()) ||
  (optionDisable === 'tablet' && detect.tablet()) ||
  (typeof optionDisable === 'function' && optionDisable() === true);
};

/**
 * Initializing AOS
 * - Create options merging defaults with user defined options
 * - Set attributes on <body> as global setting - css relies on it
 * - Attach preparing elements to options.startEvent,
 *   window resize and orientation change
 * - Attach function that handle scroll and everything connected to it
 *   to window scroll event and fire once document is ready to set initial state
 */
const init = function init(settings, initialClass = '') {
  options = Object.assign(options, settings);

  // Create initial array with elements -> to be fullfilled later with prepare()
  $aosElements = elements();

  /**
   * Don't init plugin if option `disable` is set
   * or when browser is not supported
   */
  if (isDisabled(options.disable) || browserNotSupported) {
    return disable();
  }

  /**
   * Set global settings on body, based on options
   * so CSS can use it
   */
/*  document.querySelector('body').setAttribute('data-aos-easing', options.easing);
  document.querySelector('body').setAttribute('data-aos-duration', options.duration);
  document.querySelector('body').setAttribute('data-aos-delay', options.delay);
*/
  /**
   * Handle initializing
   */
  if (options.startEvent === 'DOMContentLoaded' &&
    ['complete', 'interactive'].indexOf(document.readyState) > -1) {
    // Initialize AOS if default startEvent was already fired
    refresh(true, initialClass);
  } else {
    // Listen to options.startEvent and initialize AOS
    document.addEventListener(options.startEvent, function() {
      refresh(true, initialClass);
    });
  }

  /**
   * Refresh plugin on window resize or orientation change
   */
  window.addEventListener('resize', debounce(refresh, 50, true));
  window.addEventListener('orientationchange', debounce(refresh, 50, true));

  /**
   * Handle scroll event to animate elements on scroll
   */
  window.addEventListener('scroll', throttle(() => {
    handleScroll($aosElements, options.once);
  }, 99));

  /**
   * Watch if nodes are removed
   * If so refresh plugin
   */
  document.addEventListener('DOMNodeRemoved', (event) => {
    const el = event.target;
    if (el && el.nodeType === 1 && el.hasAttribute && el.hasAttribute('data-aos')) {
      debounce(refreshHard, 50, true)
    }
  });

  /**
   * Observe [aos] elements
   * If something is loaded by AJAX
   * it'll refresh plugin automatically
   */
  observe('[data-aos]', refreshHard);

  return $aosElements;
};

/**
 * Export Public API
 */

module.exports = {
  init,
  refresh,
  refreshHard
};
