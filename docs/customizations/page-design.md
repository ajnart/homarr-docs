---
title: Page Design
tags:
  - Title
  - Page
  - Meta
  - Background
---

# Customize Page Title

You can change the page title to whatever you like.
Open settings by clicking the settings cog on the top right, and switch to the tab "Customizations".
Then, enter your custom title in the input field:

![homarr input field for custom title](./img/customizations-custom-title-setting.png)

Press ``Save`` to apply your changes. After that, the page title will change.

# Custom Background

To add a custom Homarr background, open the settings at the top right and click on the Tab "Customization".

:::tip

If you are using Docker, mount the path ``/app/public/`` and put the background inside of a folder called ``img``.

:::

Then, define your background in the input field:

![homarr background settings](./img/customizations-custom-background-setting.png)

Example with a custom background:

![homarr with custom background](./img/customizations-custom-background-dashboard.png)

# Random Backgrounds

Using [Unplash](https://unsplash.com)'s public API, you are also able to set your Homarr background to a random image from their dataset by putting their URL directly in Homarr's background input field:

`https://source.unsplash.com/featured/`

:::tip
 [Topics](https://unsplash.com/t) can also be used to filter the results: `?nature,nature`
:::

Example with a random background using topics:

![homarr with random unplash background](./img/customizations-custom-background-unplash.png)