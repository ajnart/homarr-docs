---
sidebar_position: 2
tags:
  - Installation
  - Getting started
  - Quick start
  - Docker
  - Unraid
  - Docker-Compose
  - Source
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🚀 Installation

Homarr can be installed trough 3 different methods. For most users, [the installation using Docker](#-installation-using-docker) will be sufficient and the easiest.

## 🐋 Installation using Docker

Docker is a free Software that isolates Homarr using containers. Using Docker, you can run Homarr on any supported plattform (including Windows and Raspberry Pi), without running any installers or linux knowledge.

### Initial Installation

To add the Homarr container via Docker, simply run the following command in your terminal.

```bash
docker run  \
  --name homarr \
  --restart unless-stopped \
  -p 7575:7575 \
  -v <your-path>/homarr/configs:/app/data/configs \
  -v <your-path>/homarr/icons:/app/public/icons \
  -d ghcr.io/ajnart/homarr:latest
```

:::note

Docker will mount the configuration files and icons to your host machine. Please make sure to replace ``<your-path>`` from the docker run command with your desired storage location. The path must be absolute.

:::

### Updating Homarr
To updae Homarr, you must remove your container first. Make sure that you've mounted your data and that you have access to it, so your configuration doesn't get lost.

Run ``docker rm homarr`` to remove the container.
Then, update the Homarr image (requires network connection): ``docker pull ghcr.io/ajnart/homarr:latest``.
After that, run the same command as before when you installed Homarr.

This process can get tideous, if you update frequently. Thus, we recommend [the installation using docker-compose](#-installation-using-docker-compose-or-portainer) for more experienced users.

## 🐋 Installation using Docker Compose or Portainer

For advanced users, we recommend installation using ``docker-compose`` or [Portainer](https://www.portainer.io/).

```yml title="docker-compose.yml"
version: '3'
#---------------------------------------------------------------------#
#                Homarr -  A homepage for your server.                #
#---------------------------------------------------------------------#
services:
  homarr:
    container_name: homarr
    image: ghcr.io/ajnart/homarr:latest
    restart: unless-stopped
    volumes:
      - ./homarr/configs:/app/data/configs
      - ./homarr/icons:/app/public/icons
    ports:
      - '7575:7575'
```

If you're not using Portainer, you can start the service using ``docker-compose up -d`` in the same directory.

## 🛒 Install from the Unraid Community App Store
You can install Unraid without ``docker run`` and ``docker-compose``, directly from your Unraid Web Dashboard.

### Install the Comunity Apps Plugin

First, you need to install the Community Apps Plugin, if you haven't already done so.

<a
  href="https://forums.unraid.net/topic/38582-plug-in-community-applications/"
  style={{
    backgroundColor: 'var(--ifm-color-primary)',
    borderRadius: '2px',
    color: '#fff',
    padding: '0.4rem 2rem',
    textDecoration: 'none'
  }}>
  Open Installation Guide
</a>

<br/>
<br/>

:::tip
If you're unsure whether you have the plugin installed or not, search for this tab in the navigation:

![](img/unraid-navigation-app-manager.png)
:::

### Install Homarr from the Community Apps
Next, click on ``Apps``, wait until the page has fully loaded and then search for ``Homarr`` in the search box.

![](img/unraid-apps-homarr.png)

Click on Install and adjust the settings to your liking.
After you click submit, Unraid will automatically start the installation. You can find Homarr under the tab "Docker" afterwards.

## 💻 Building from source
:::tip

Installing from source is not recommended, if you don't know what you're doing and/or are not planning to make changes to the source code, please install Homarr using [Docker](#-installation-using-docker).

:::

<Tabs>
  <TabItem value="orange" label="Yarn Package Manager" default>
    <ul>
      <li>Clone the Repository using <code>git clone https://github.com/ajnart/homarr.git</code></li>
      <li>Enter the created directory using <code>cd homarr</code></li>
      <li>Install all dependencies using <code>yarn install</code></li>
      <li>Build the source using <code>yarn build</code></li>
      <li>Start the NextJS web server using <code>yarn start</code></li>
    </ul>
  </TabItem>
  <TabItem value="apple" label="NPM Package Manager">
    <ul>
      <li>Clone the Repository using <code>git clone https://github.com/ajnart/homarr.git</code></li>
      <li>Enter the created directory using <code>cd homarr</code></li>
      <li>Install all dependencies using <code>npm install</code></li>
      <li>Build the source using <code>npm build</code></li>
      <li>Start the NextJS web server using <code>npm start</code></li>
    </ul>
  </TabItem>
</Tabs>

## Troubleshooting your Installation

If you are having trouble getting Homarr to install properly on your system, check out our [FAQ page](https://homarr-docs.vercel.app/docs/community/frequently-asked-questions).
When you are still not able to get Homarr up and running, contact us on [our official Discord](https://discord.gg/aCsmEV5RgA)