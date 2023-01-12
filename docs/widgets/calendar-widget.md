---
title: 📆 Calendar
tags:
  - Widgets
  - Integration
  - Configuration
---


The calendar Widget will use [Integrations](/docs/integrations) to display upcoming content.
It can display content from [Sonarr](/docs/integrations#sonarr), [Radarr](/docs/integrations#radarr), [Lidarr](/docs/integrations#lidarr) and [Readarr](/docs/integrations#readarr).

---

## Adding the widget
Please check out our documentation on [how to add a widget](/docs/introduction/after-the-installation#adding-widgets).

---

## Adding integrations to the widget

Please make sure to select the appropriate integration type for your app, so the calendar widget can communicate with it:

![](./img/calendar/widget-calendar-integration-sonarr-example.png)

Then, enter your API key and click on the save button:

![](./img/calendar/sonarr-configure-credentials.gif)

*You can retrieve your API token from the settings pages of your \*arr applications.*

---

## Using the widget

The calendar widget will display a calendar with indicators for upcoming releases:

![Screenshot showing multiple indicators](./img/calendar/widget-calendar-indicators.png)

:::info

Homarr will only load the previous, current and next month from your integrations. This means, releases in 2+ / 2- months will not be loaded and visible in the calendar.

:::


### Colors of indicators and their meaning

All indicators in the calendar have a specific color depending on their app:

| Color         | Integration | Project link                                 |
| ------------- | ----------- | -------------------------------------------- |
| 🔴 *(red)*    | Readarr     | [Readarr project link](https://readarr.com/) |
| 🟡 *(yellow)* | Radarr      | [Radarr project link](https://radarr.video/) |
| 🟢 *(green)*  | Lidarr      | [Lidarr project link](https://lidarr.audio/) |
| 🔵 *(blue)*   | Sonarr      | [Sonarr project link](https://sonarr.tv/)    |

### Release information

All days with indicators will be clickable and will open a popup with detailed information about the releases on this day:

![Screenshot showing pop-up of day information](./img/calendar/widget-calendar-day-information.png)

:::info

We have noticed, that the scrollbar is on some devices poorly visible.
We'll fix this in a future update of Homarr.

:::

#### Release Poster
Homarr will load the images from your integration, for example Sonarr.
It filters trough all images of the release and takes the first match, that is of the cover-type ``poster``.

:::warning

Some Adblockers are preventing Homarr from loading your posters. This is a [well known issue](/docs/community/known-issues.md) in our community. To solve this issue, please disable your adblocker for Homarr.

:::


## Configuration

| Configuration        | Description | Values | Default Value |
| -------------------- | ----------- | ------ | ------------- |
| Start week on sunday | Determines, if the calendar week should start on Sunday. If deactivated, Week will start on Monday. | yes / no | no |

![configuration of the calendar widget](./img/calendar/widget-calendar-configuration.png)

:::tip

Check out our documentation on [editing tiles](/docs/introduction/after-the-installation#organizing-and-re-arranging-your-dashboard).

:::
