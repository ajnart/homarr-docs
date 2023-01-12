---
title: 🐛 Known Issues
sidebar_position: 2
tags:
  - Community
  - Help
---

Here we keep track of the currently known issues of Homarr, reported by our community or the developers.

## 🚨 Adblocker will break and block the posters of TV shows
Many popular ad-blockers will block the posters of TV-shows in your [calendar](/docs/widgets/calendar-widget).

### Indicators
- Posters are not loading correctly
- Posters are replaced with some content from the ad-blocker

### Resolution
Please disable your ad-block for Homarr.
Most blockers will offer a switch, where you can disable them for Homarr only.

## 🚨 Docker container requires a restart after making modifications to the icons
If you are using [custom icons](/docs/customizations/icons), you might be unable to get them working in the apps.

### Indicators
- You've mounted the configuration path of Homarr
- You've uploaded / copied icons in the correct folder, [specified in our documentation](/docs/customizations/icons#adding-your-own-icons)
- You've used the icons in the apps, but they don't display

### Resolution
For the time being, restart your docker container after adding / making any changes to your icons.
