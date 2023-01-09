---
title: 🎨 Custom Icons
tags:
  - Docker
  - Container
  - Container Engine
  - Icons
  - Path
  - Custom
  - Customization
  - Custom icons
  - Apps
---

# Custom Icons

## How are icons requested?
The icons used in Homarr are automatically requested from the [dashboard-icons](https://github.com/walkxhub/dashboard-icons) repo.

Icons are requested in the following way:

1. Get the name you entered
2. Replace " " with "-" (to make it compatible with the link)
3. Convert to lowercase
4. Interpolate `{name}` in the link: `https://cdn.jsdelivr.net/gh/walkxhub/dashboard-icons/png/{name}.png`

If the name of the app you are trying to use is not recgonized as an icon you can still use the icon search function to find the icon you want or put in **any link that returns an image** or even add your own custom icons.

![firefox_vCMTN5meLp](https://user-images.githubusercontent.com/71191962/170118033-a72ea587-4df0-43dd-8b7e-e0e7bae45dc6.gif)

## Adding your own icon(s)
### 1. Mounting the icon folder
Mount the `/app/public/icons` folder of your docker container.

![image](https://user-images.githubusercontent.com/71191962/170479022-2f4176c8-9efc-496c-b419-2fc116cc3082.png)

### 2. Adding custom icons
Add any icon(s) to the folder. If you're using unRAID, connect using SMB or (S-)FTP.

### 3. Restart your docker container
Currently, a restart of the Homarr container is required to being able to load icons from the frontend. Simply restart it after adding your desired icons to the folder.

### 4. Use your icons for apps
Access the icon(s) using `/icons/name.png` or `/icons/name.svg`.

![image](https://user-images.githubusercontent.com/71191962/170479159-5df02aa0-683a-44f2-bdcf-4f58585655dd.png)

:::info

If you're unable to load your cusotom icons, make sure that you've set the permissions correctly. Running ``chmod 755 /app/public/icons -R`` might resolve the issue.

:::
