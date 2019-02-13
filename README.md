


# Novicell Helpers
**Reusable JS Utility Helpers that are frequently used by Novicell**

## Usage

Written in pure Vanilla JS, it has *no dependencies*. It's easy to use with novicell-front end setup (or any es6 compatible build setup).

### Install with npm

```bash
npm install novicell-helpers
```

## Setup

Using tree shaking concept, import the needed function into your JS:

**JS**
```javascript
import { helperName } from 'novicell-helpers'
```

## Example

```javascript

import { toggleClass } from 'novicell-helpers'

const button = document.querySelector('.button');
const siteNavigation = document.querySelector('.navigation');

button.addEventListener('click', function() {
    toggleClass(siteNavigation, 'toggle-me');
});

```

## Options
```javascript

buttonsWithLink();
findAncestor(element, className); // finds ancestor
toggleClass(el, className); // toggles class forth and back
hasClass(element, className); // checks element has class
isVisible(element); // returns a bool depending if element is visible in the viewport
accordionAnimate(element) // Animation of any height closing/opening subelement. Second optional argument is the opening list class, by default it's js-accordion

```
[accordionAnimate Codepen](https://codepen.io/ankeris/pen/RvBoqK)

## Contribution

Looking to contribute something? Here's how you can help. Please take a moment to review our [contribution guidelines](https://github.com/Novicell/novicell-frontend/wiki/Contribution-guidelines) in order to make the contribution process easy and effective for everyone involved.

## License

The Novicell Frontend is licensed under the MIT license. (http://opensource.org/licenses/MIT)