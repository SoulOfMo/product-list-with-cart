# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/assets/images/screenshot.png)

### Links

- Solution URL: [Solution](https://github.com/SoulOfMo/product-list-with-cart)
- Live Site URL: [Live Site](https://productlistwith-cart.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- SCSS

### What I learned

While building this project, I learned the importance of **keeping shared data in sync**.

Initially, both the menu and the cart managed their own item quantities, which caused inconsistencies. I fixed this by making the **cart the single source of truth** and **deriving menu quantities from the cart state** instead of duplicating the state.

```js
const quantity = cart.find((i) => i.id === item.id)?.quantity || 0;
```

This approach keeps the UI consistent, prevents bugs, and make state updates easier to reason about.

### Continued development

## Author

- Frontend Mentor - [@SoulOfMo](https://www.frontendmentor.io/profile/SoulOfMo)
- Twitter - [@morin_sultan](https://x.com/morin_sultan)

## Acknowledgments
