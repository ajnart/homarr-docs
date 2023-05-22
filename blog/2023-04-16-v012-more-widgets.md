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

## Edit mode password
We've added a setting to disable editing completely. This will allow you to restrict edit access without password-protection.
use the `EDIT_MODE_PASSWORD` ENV variable to set a password for edit mode. 
turn on `DISABLE_EDIT_MODE=TRUE` to disable edit mode on startup.


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
Since some have lost their changes, by refreshing the page in the edit mode. We've added a popup that will ask you to confirm you want to reload the page :

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

**Full Changelog**: https://github.com/ajnart/homarr/compare/v0.11.5...v0.12.0