---
title: 💻 Layout
tags:
  - Configuration
  - Customization
  - Theming
---

Using the layout settings, you can customize the apperance and layout of your Homarr instance.

![](img/layout/customize-layout.gif)

---

## Sidebars

There are two sidebars available: ``right`` and ``left``.
Sidebars are additional spaces, that you can fill with apps or widgets - they do not support categories though.

---

## Search Bar

An optional search bar can be added to your dashboard.
It enables you to search for:
- Search results on the web
- Torrents on https://www.torrentdownloads.pro/
- Youtube Videos
- Overseerr / Jellyseerr items
- The apps on your dashboard

![](img/layout/search-box-switch.png)

---

## Docker Integration

The [docker integration](/docs/integrations#🐳-docker) enables you to interact with your docker containers.
Please note, that it [requires some initial setup](/docs/integrations#🐳-docker).

---

## Pings
If you activate Pings, Homarr will send a HTTP/-S request to all your services on the page load.
When the response code matches the expected status code, the ping indicator will be green. Otherwise, it will be red.

![](img/layout/pings.png)

Example of an ping indicator:

![](img/layout/example-ping.png)
