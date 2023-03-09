/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
      currentDropDownButton.setAttribute('aria-expanded', 'false');
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
      currentDropDownButton.setAttribute('aria-expanded', 'true');
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var dropDownToggles = document.querySelectorAll('#nav-bar-content .dropdown-toggle');

  for (var i = 0; i < dropDownToggles.length; i++) {
    dropDownToggles[i].addEventListener('click', openMenu, false);
  }

  document.querySelector('.navbar-toggler')
    .addEventListener('click', toggleNavigation, false);

  const getFontSize = () => {
    const root = document.getElementById('root');
    return parseFloat(window.getComputedStyle(root, null).getPropertyValue('font-size'));
  }

  const setFontSize = (fontSize) => {
    const root = document.getElementById('root');
    root.style.fontSize = `${fontSize}px`;
  }

  // Font increase / decrease buttons
  document.querySelector('#font-increase-button')
    .addEventListener('click', () => {
      const fontSize = getFontSize();
      setFontSize(fontSize + 1);
    }, false);

  document.querySelector('#font-decrease-button')
    .addEventListener('click', () => {
      const fontSize = getFontSize();
      setFontSize(fontSize - 1);
    }, false);

}, false);


document.onkeydown = function(event) {
  event = event || window.event;

  // ESC key
  if (event.keyCode == 27) {
    let menu, toggle;
    if (event.target.className === 'nav-link dropdown-toggle' ) {
      menu = event.target.nextElementSibling;
      toggle = event.target;
    }
    else if (event.target.parentNode.parentNode.classList.contains('show')) {
      menu = event.target.parentNode.parentNode.previousElementSibling;
      toggle = event.target.parentNode.parentNode;
    }
    toggle.setAttribute('aria-expanded', 'false')
    menu.classList.remove('show')
    toggle.focus()
  }

  // SPACE key
  if (event.keyCode === 32) {
    if (event.target.className === 'nav-link dropdown-toggle' ) {
      event.target.setAttribute('aria-expanded', 'true');
      event.target.nextElementSibling.classList.add('show')
      event.preventDefault()
    } else if (event.target.href) {
      event.target.click()
    }
  }

  // TAB key
  if (event.which === 9) {
    if (!event.target.parentNode.parentNode.classList.contains('show')) {
      document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu').forEach((node) => {
        node.classList.remove('show');
      })
      document.querySelectorAll('#nav-bar-content .dropdown .dropdown-toggle').forEach((node) => {
        node.ariaExpanded = 'false';
      })
    }
  }
};
