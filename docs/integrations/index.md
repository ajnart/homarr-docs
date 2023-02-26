---
title: Integrations
tags:
  - Widgets
  - Integration
  - Configuration
  - Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Homarr will integrate with a ton of different apps on your system.

<!-- no toc -->
- [Torrent Clients](#torrent-clients)
  - [Deluge](#deluge)
  - [Transmission](#transmission)
  - [qBittorrent](#qbittorrent-integration)
- [Usenet Clients](#usenet-clients)
  - [SABnzbd](#sabnzbd)
  - [NZBGet](#nzbget)
- [Collection Managers](#collection-managers)
  - [Sonarr](#sonarr) (series)
  - [Radarr](#radarr) (movies)
  - [Lidarr](#lidarr) (music)
  - [Readarr](#readarr) (books)
- [Media Servers](#media-servers)
	- [Jellyfin](#jellyfin)
	- [Plex](#plex)
- [Dash.](#dash)
- [Overseer & Jellyseerr](#overseerr--jellyseerr) (media requests)
- [Docker](#docker)

:::caution

Homarr usually does not suport ``beta``, ``alpha`` or older legacy versions of integrations, because new versions often contain breaking API changes.
We will not support these, because the underyling API often changes frequently and would require much attention for very little outcome.

:::

## Torrent Clients

Homarr supports a total of 3 Torrent clients.
You can use them to display your torrents directly on your dashboard and see if you are leeching / seeding.

### Deluge
The Deluge integration is used by the following widgets:

- [Torrent](/docs/widgets/torrent-widget)
- [Download Speed](/docs/widgets/download-speed-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| Password | Private | Used for authenticating with the Deluge service |

  </div>
</details>

### Transmission
The Transmission integration is used by the following widgets:

- [Torrent](/docs/widgets/torrent-widget)
- [Download Speed](/docs/widgets/download-speed-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| Username | Private | Username used for authentication |
| Password | Private | Password used for authentication |

  </div>
</details>

### qBittorrent Integration
The qBittorrent integration is used by the following widgets:

- [Torrent](/docs/widgets/torrent-widget)
- [Download Speed](/docs/widgets/download-speed-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| Username | Private | Username used for authentication |
| Password | Private | Password used for authentication |

  </div>
</details>

Please note the known issue with qBittorrent:
[qBittorrent webUI showing Unauthorized](./../community/known-issues.md#🚨-qbittorrent-webui-showing-unauthorized)

---

## Usenet Clients

### SABnzbd

The [SABnzbd](https://sabnzbd.org/) integration directly communicates with your download client and enables you to view and control your downloads directly from Homarr.
You can use this integration from the [Usenet Widget](/docs/widgets/usenet-widget).

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

### NZBGet

The [NZBGet](https://nzbget.net/) integration directly communicates with your download client and enables you to view and control your downloads directly from Homarr.
You can use this integration from the [Usenet Widget](/docs/widgets/usenet-widget).

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| Username | Private | Username used for authentication |
| Password | Private | Password used for authentication |

  </div>
</details>

---

## Collection Managers
### Sonarr

Homarr will integrate the shows of your [Sonarr](https://sonarr.tv/) calendars in the [Calendar Widget](/docs/widgets/calendar-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

### Radarr

Homarr will integrate the shows of your [Radarr](https://radarr.video/) calendars in the [Calendar Widget](/docs/widgets/calendar-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

### Lidarr

Homarr will integrate the shows of your [Lidarr](https://lidarr.audio/) calendars in the [Calendar Widget](/docs/widgets/calendar-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

### Readarr

Homarr will integrate the shows of your [Readarr](https://readarr.com/) calendars in the [Calendar Widget](/docs/widgets/calendar-widget)

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

---

## Media Servers
Homarr can integrate with your media servers for better control over what's going on.

:::tip

Note, that we recommend you to create seperate accounts for better security.
Only grant access to the libraries, that must be accessed by Homarr, and remove unnessesary permissions.

Since all media servers do not expose the same information, Homarr might be unable to display certain information for servers.

:::

You may add multiple media servers, also of different kinds, to your dashboard.

### Jellyfin
The Jellyfin integration enables you to view the active sessions, using the [Media Server widget](../widgets/media-server), on your dashboard.

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| Username | Private | Username used for authentication |
| Password | Private | Password used for authentication |

  </div>
</details>

### Plex
The Plex integration enables you to view the active sessions, using the [Media Server widget](../widgets/media-server), on your dashboard.

<details>
  <summary>
  Available configuration options
  </summary>
  <div>


| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

---

## Dash.

The Dash. integration can be used to monitor the performance and used system resources of your machine.
Dash. will be used in the [Dash.](/docs/widgets/dashdot-widget)

---

## Overseerr & Jellyseerr
The [Overseerr](https://overseerr.dev/) integration will enable you to request movies and series directly from your Homarr dashboard.

![](img/overseerr/search-select.png)

After choosing the correct type, you can search for content:

![](img/overseerr/search-show.png)

It displays, which content is already in your Overseerr library and links availble content directly to your [Plex](https://www.plex.tv/) or [Jellyfin](https://jellyfin.org/) instance.

<details>
  <summary>
  Available configuration options
  </summary>
  <div>

| Field    | Type    | Description |
| -------- | ------- | ----------- |
| ApiToken | Private | Token used for authentication |

  </div>
</details>

### Initial setup
#### Installation of Media Server
The Overseer integration supports both Overseer and Jellyseer, a fork of Overseer compatible with Jellyfin.

<Tabs groupId="media-server">
  <TabItem value="plex" label="🎬 Plex Media Server">
    <p>
      Install Plex on your machine using your preferred installation method: <a href="https://www.plex.tv/">https://www.plex.tv/</a><br/>
      We recommend the installation using Docker for the easiest and fastest installation.
    </p>
  </TabItem>
  <TabItem value="jellyfin" label="🎬 Jellyfin Media Server">
    <p>
      Install Jellyfin on your machine using your preferred installation method: <a href="https://jellyfin.org/docs/general/administration/installing.html">https://jellyfin.org/docs/general/administration/installing.html</a><br/>
      We recommend the installation using Docker for the easiest and fastest installation.
    </p>
  </TabItem>
</Tabs>

#### Installation of Media requester

<Tabs groupId="media-server">
  <TabItem value="plex" label="🎬 Plex Media Server">
    <p>
      After you have your Plex instance up and running, you must install Overseer as your media request application. Please read the official documentation of how to install Overseerr on your machine: <a href="https://docs.overseerr.dev/getting-started/installation">https://docs.overseerr.dev/getting-started/installation</a>.
    </p>
  </TabItem>
  <TabItem value="jellyfin" label="🎬 Jellyfin Media Server">
    <p>
      Oficially, Jellyfin is not supported by Overseerr. This is why Jellyfin users must use a fork of the official Overseerr project, which was modified to work with Jellyfin: <a href="https://github.com/bignuto/jellyseer">https://github.com/bignuto/jellyseer</a>.<br/>
      We recommend the installation using Docker for the easiest and fastest installation.
    </p>
  </TabItem>
</Tabs>

#### Add your application in Homarr
If your instance of Overseerr or Jellyseerr is up and running, it's time to add it to your dashboard.
Simply select the correct type from the integration tab when editing the application:

![](img/overseerr/add-application.png)

<Tabs groupId="media-server">
  <TabItem value="plex" label="🎬 Plex Media Server">
    <p>
      Select <code>Overseerr</code> in the app type for your Overseerr app.<br/>
      Fill our the field <code>Api token</code> with from the link below, when having <code>Overseerr</code> as the app type selected.
    </p>
  </TabItem>
  <TabItem value="jellyfin" label="🎬 Jellyfin Media Server">
    <p>
      Select <code>Jellyseerr</code> in the app type for your Jellyseer app.<br/>
      Fill our the field <code>Api token</code> with from the link below, when having <code>Jellyseerr</code> as the app type selected.
    </p>
  </TabItem>
</Tabs>

### Searching for a movie / series
To search for a movie or series, simply press ``CTRL`` + ``K`` or click into the search box.
Then, type ``!os`` (with a space at the end) and enter, what you want to search for.

The integration will display, what content is already available in your media library.

### Seasons selection
If you're selecting a series, you'll be asked what seasons you want to request:

![season selector](img/overseerr/widget-overseerr-season-select.jpg)

---

## Docker

Homarr allows you to interact with Docker containers running on your system.

You can **restart**, **stop**, **start**, **refresh** and **remove** containers as well as **add** them to the Homarr dashboard

![Docker Core Features](https://user-images.githubusercontent.com/190136/180496007-8456e486-a864-4510-b91f-fabf74df020c.png)

Additonally, if you have a lot of containers you can search and filter them by **container** or **image** name

![Contailer and Image Search](https://user-images.githubusercontent.com/190136/180496391-12a9a1c6-a54b-4d22-98ea-a5eb3a93fce4.png)

View the state of each container (**created**, **running** or **stopped**)

![Container States](https://user-images.githubusercontent.com/190136/180598244-61c1db95-ed04-48c9-9577-2bd5ebff3ae9.png)

And also check what ports the container has exposed (container port:external port)

![Exposed Ports](https://user-images.githubusercontent.com/190136/180598308-b24c7e83-e278-4556-a177-143fdd347f28.png)


### Before you begin
In order for Homarr to be able to interact with your Docker instance you must tell Homarr the path to your Docker socket.  You do this by adding the following to the Docker command when you first run Homarr:

`-v /var/run/docker.sock:/var/run/docker.sock`

If you are running Docker Desktop on Windows 10, use the following path to your Docker socket:

`-v //var/run/docker.sock:/var/run/docker.sock`
