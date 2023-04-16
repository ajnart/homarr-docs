---
title: "We present: Homarr 0.12 - The fastest homarr version ever!"
authors:
  - name: ajnart
    title: Owner
    url: https://github.com/ajnart
    image_url: https://avatars.githubusercontent.com/u/49837342?v=4
  - name: Manicraft1001
    title: Contributor
    url: https://github.com/manuel-rw
    image_url: https://avatars.githubusercontent.com/u/30572287?v=4
  - name: Walkx
    title: Contributor
    url: https://github.com/walkxcode
    image_url: https://avatars.githubusercontent.com/u/71191962?v=4
  - name: Meierschlumpf
    title: Contributor
    url: https://github.com/Meierschlumpf
    image_url: https://avatars.githubusercontent.com/u/63781622?v=4
tags: [homarr, update, breaking changes, version, dnd, documentation]
---

## Multiple widgets of the same type
**It's finally here!** You can decorate your dashboard now with as many widgets as you want.
This applies to all widgets, but in the case of the IFrame widget, it enables you to:
- Integrate as many websites as you want
- Integrate monitoring tools like Grafana, Splunk or Elasticsearch
- Integrate your services (for example Sonarr, Radarr and Overseerr) directly into Homarr

![](https://media.discordapp.net/attachments/988335098493542410/1094665745226539168/update-teaser.png?width=1046&height=666)

## 😎 Blazingly fast
We've implemented a new caching system, that will cache all data in your browser, meaning that Homarr will load within milliseconds, as if it was *powered by rust and blazingly fast* !!!

## Media request widgets (Overseerr & Jellyseerr)
We've implemented a new widget, that displays a history of all requests.
You can't approve from the widget yet, but we plan to add this in the future.

![image](https://user-images.githubusercontent.com/30572287/231829411-f61f03e9-79a0-45fc-9a87-94d69ea3ea84.png)

## Multiple RSS feeds
You can now consume multiple RSS feeds at the same time:

![image](https://user-images.githubusercontent.com/30572287/231829886-69133a84-3ae7-4fa3-a6d2-c582f4cc9eea.png)

## Tab refresh / close confirmation
Since some have lost their changes, by refreshing the page in the edit mode, we've implemented a popup that will ask your browser to confirm the page change from the user:

![image](https://user-images.githubusercontent.com/30572287/231823776-9cbb12d4-3cb3-422e-b2e8-f9917bb3f8cc.png)

## Environment variable for default theme
You can now set the default color scheme using environment variables:

``DEFAULT_COLOR_SCHEME`` = ``[dark, light]``

## Global error catching for widgets
Previously, widgets were able to crash your entire dashboard and just a blank page would be displayed.
Now, users will still be able to use their dashboard and an information message will be displayed instead.

## Migration to Mantine V6
We've migrated Mantine to version 6. This will bring some upstream changes for responsiveness and usability.

## Fix width and height in the calender
In 0.11.5 and previous versions, the calender scaled really bad if the widget was resized.
Now, the calendar will fill out the entire available space and scale nicely with your dashboard.

![](https://cdn.discordapp.com/attachments/988335098493542410/1095416419816067175/homarr-calendar-scaling.gif)

## Performance improvements
We now use several methods to improve performance and reduce network requests.
Homarr will load now within milliseconds and cache data in your browser.

## Docker Socket via TCP
Previously, it was not possible to mount sockets via TCP (eg. ``tcp://traefik-docker-socket-proxy:2375``).
Now, you can use the following environment variables to configure this:

- ``DOCKER_HOST``
- ``DOCKER_PORT``

## What's Changed
* 🚑 Fix URL malformed by @manuel-rw in https://github.com/ajnart/homarr/pull/743
* 🐛 Fix StatusCode not being used properly by @ajnart in https://github.com/ajnart/homarr/pull/750
* Update bug.yml by @manuel-rw in https://github.com/ajnart/homarr/pull/756
* Turbo cache by @ajnart in https://github.com/ajnart/homarr/pull/767
* ✨ Add beforeunload hook by @manuel-rw in https://github.com/ajnart/homarr/pull/762
* ✨ Add widget error boundary by @manuel-rw in https://github.com/ajnart/homarr/pull/753
* ✨ Environment variable for default color scheme #237 by @manuel-rw in https://github.com/ajnart/homarr/pull/744
* 🚑 Fix RSS widget crash by @manuel-rw in https://github.com/ajnart/homarr/pull/742
* ✨ Add a simple keybind viewer in about menu #751 by @ajnart in https://github.com/ajnart/homarr/pull/775
* ✨ Make integrations fields required by @ajnart in https://github.com/ajnart/homarr/pull/770
* Edit mode password modal by @ajnart in https://github.com/ajnart/homarr/pull/748
* ✨ Add TV show name in media info and style changes by @ajnart in https://github.com/ajnart/homarr/pull/779
* Mantine v6 by @ajnart in https://github.com/ajnart/homarr/pull/771
* Format code with prettier by @deepsource-autofix in https://github.com/ajnart/homarr/pull/784
* ✅ Add vitest and initial tests by @manuel-rw in https://github.com/ajnart/homarr/pull/766
* ✨ Add support for proxied docker #758 by @ajnart in https://github.com/ajnart/homarr/pull/768
* Replace short hand type conversions with function calls by @deepsource-autofix in https://github.com/ajnart/homarr/pull/783
* 💄 Style and usability improvements to RSS widget by @ajnart in https://github.com/ajnart/homarr/pull/780
* Allow multiple widgets of same type by @Meierschlumpf in https://github.com/ajnart/homarr/pull/788
* ✨ Add localstorage caching with React Query by @ajnart in https://github.com/ajnart/homarr/pull/798
* 🚑 Fix sidebar ribbons breakpoint by @manuel-rw in https://github.com/ajnart/homarr/pull/799
* ✨ Add console warn if apps are missing properties by @ajnart in https://github.com/ajnart/homarr/pull/769
* ✨ Add overseerr widget by @manuel-rw in https://github.com/ajnart/homarr/pull/796
* Rss multiple feeds by @ajnart in https://github.com/ajnart/homarr/pull/797
* 📝 Fix images in Documentation by @walkxcode in https://github.com/ajnart/homarr/pull/804
* 💄 Dynamic calender dimensions by @manuel-rw in https://github.com/ajnart/homarr/pull/807
* ♻️ Fix default img paths by @manuel-rw in https://github.com/ajnart/homarr/pull/806
* ✅ Add tests for media request widget by @manuel-rw in https://github.com/ajnart/homarr/pull/805
* New Crowdin updates by @ajnart in https://github.com/ajnart/homarr/pull/733

## New Contributors
* @deepsource-autofix made their first contribution in https://github.com/ajnart/homarr/pull/784

**Full Changelog**: https://github.com/ajnart/homarr/compare/v0.11.5...v0.12.0