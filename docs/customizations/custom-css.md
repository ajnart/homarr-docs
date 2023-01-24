---
title: ✨ Custom CSS
tags:
  - Configuration
  - Customization
  - Theming
---

To further customize your dashboard, you can add your own CSS rules to Homarr. This can be used to change virtually any aspect of the dashboard, from the color of the background to the size of the font.

---

## Adding custom CSS rules

To add custom CSS rules, go to the Customizations tab in the settings menu. There you can find a text field where you can enter your CSS rules.

![homarr custom css settings](./img/customizations-custom-css-setting.png)

also here is a CSS for a blurred background with safari support.
### NOTE: the added -webkit line is so that safari can use the css blur, as blur will not carry over too mobile devices using safari

![Screenshot 2023-01-23 195726](https://user-images.githubusercontent.com/49504228/214198394-9e052f10-2afb-4bbb-9c6e-3e26a21f86fd.png)


After entering your rules, click on the "Submit" button to save your changes. You can now directly see the result of your customizations on the dashboard.

### Example

![homarr custom css result](./img/customizations-custom-css-result.png)


![homarr custom css result]
---

## Finding the class names of elements

When writing CSS you will be required to use class names to select the elements you want to customize. To find the class names of the elements you want to customize, you can use the browser's developer tools. To open the developer tools, right-click on the page and select "Inspect" or "Inspect Element" from the context menu.

![context menu](./img/customizations-custom-css-context-menu.png)

This opens up the DevTools of your browser. In the DevTools, you can find the Element Picker in the top left corner. Click on the Element Picker to activate it.

![selector mode](./img/customizations-custom-css-element-selector.png)

Now you can hover over the elements you want to customize. The element you are hovering over will be highlighted. If you click on the element, the DevTools will show you the classname of the element.

![element highlighted](./img/customizations-custom-css-element-highlight.png)

Finally, select the classname of the element you want to customize and add it to your CSS rules.

![element classname](./img/customizations-custom-css-classname.png)

---

## Additional resources

If you want to learn more about CSS, you can find a lot of resources on the internet. Here are some of the best ones:

- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [W3Schools](https://www.w3schools.com/css/)
