---
title: ☔ Weather
sidebar_position: 1
tags:
  - Widgets
  - Weather
  - Geolocation
  - Forecast
---

# ☔ Weather Widget

The Weather Widget uses your location to display the current, highest and lowest temperature. The Widget uses [open-meteo.com](https://open-meteo.com) to retrieve weather data.

The Widget **does not request your browsers location**, you must specify a location yourself using the Widget's settings.

## Activate the Widget
Please read our documentation on [how to enable a widget](index.md#activating-a-widget).

## Configuration

| Configuration         | Description | Values | Default Value |
| --------------------- | ----------- | ------ | ------------- |
| Display in Fahrenheit | Displays the temperature in °F. | yes / no | no |
| Current Location | Location name. Can be pretty much anything and should be as percise as possible. | - | - |

![configuration of the weather widget](images/weather/widget-weather-configuration.png)

<details>
  <summary>I am having issues / false data with the weather. What can I do?</summary>
  <div>
    <div>If your location does not have a unique name or the displayed data is wrong, take these steps to fix it:
    <ul><li>Go to <a href="https://open-meteo.com/en/docs/geocoding-api">open-meteo</a> api documentation and enter your location</li><li>Adjust your search query until the first result is the correct location</li><li>Copy the search query and paste it into the <code>Current location</code> field in the configuration.</li></ul><br/>We suggest you to check whether the displayed data is equal to the data of your local weather station.</div>
  </div>
</details>

:::tip

Check out our documentation on [how to configure a widget](index.md#configure-a-widget).

:::

## Screenshots

![weather widget in light mode](images/weather/widget-weather-light-mode.png)

![weather widget in dark mode](images/weather/widget-weather-dark-mode.png)