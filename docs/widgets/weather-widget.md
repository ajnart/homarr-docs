---
title: ☔ Weather
tags:
  - Widgets
  - Configuration
---

The Weather Widget uses your location to display the current, highest and lowest temperature. The Widget uses [open-meteo.com](https://open-meteo.com) to retrieve weather data.

The Widget **does not request your browsers location**, you must specify a location yourself using the Widget's settings.

---

## Adding the widget
Please check out our documentation on [how to add a widget](/docs/introduction/after-the-installation#adding-widgets).

---

## Configuration

| Configuration         | Description | Values | Default Value |
| --------------------- | ----------- | ------ | ------------- |
| Display in Fahrenheit | Displays the temperature in °F. | yes / no | no |
| Current Location | Location name. Can be pretty much anything and should be as percise as possible. | - | - |

![configuration of the weather widget](./img/weather/widget-weather-configuration.png)

<details>
  <summary>I am having issues / false data with the weather. What can I do?</summary>
  <div>
    <div>If your location does not have a unique name or the displayed data is wrong, take these steps to fix it:
    <ul><li>Go to <a href="https://open-meteo.com/en/docs/geocoding-api">open-meteo</a> api documentation and enter your location</li><li>Adjust your search query until the first result is the correct location</li><li>Copy the search query and paste it into the <code>Current location</code> field in the configuration.</li></ul><br/>We suggest you to check whether the displayed data is equal to the data of your local weather station.</div>
  </div>
</details>

:::tip

Check out our documentation on [editing tiles](/docs/introduction/after-the-installation#organizing-and-re-arranging-your-dashboard).

:::

---

## Screenshots

![weather widget in light mode](./img/weather/widget-weather-light-mode.png)

![weather widget in dark mode](./img/weather/widget-weather-dark-mode.png)
