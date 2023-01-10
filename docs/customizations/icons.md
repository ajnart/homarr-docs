---
title: 🟣 Icons
tags:
  - Configuration
  - Customization
  - Icons
---


## Icon search
Icons in Homarr are automatically requested from the [dashboard-icons](https://github.com/walkxcode/dashboard-icons) repo. If you're unable to find the icon you're looking for, you can [add your own icons](#add-your-own-icons).

![firefox_vCMTN5meLp](https://user-images.githubusercontent.com/71191962/170118033-a72ea587-4df0-43dd-8b7e-e0e7bae45dc6.gif)

---

## Add your own icons

### Mounting the icons folder
If you haven't already mounted the icons folder, please go back to the [installation docs](/docs/introduction/installation) and follow the instructions for mounting the icons folder.

### Adding your icons
Add your icons to the icons folder. The icons should be named after the app name. For example, if you want to add an icon for the app `plex`, the icon should be named `plex.png` or `plex.svg`.


### Using your icons
Access the icon(s) using `/icons/name.png` or `/icons/name.svg`.

![image](https://user-images.githubusercontent.com/71191962/170479159-5df02aa0-683a-44f2-bdcf-4f58585655dd.png)

:::caution

A restart is required for the icons to be loaded.

:::

:::info

If icons are not loading, make sure Homarr has the correct permissions to access the icons folder.
Running `sudo chmod -R 777 /path/to/icons` should fix the issue.

:::
