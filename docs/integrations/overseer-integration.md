---
tags:
  - Widgets
  - Integration
  - Overseerr
  - Jellyseerr
  - Movies
  - Series
  - Media
  - Management
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 👀 Overseerr

The [Overseerr](https://overseerr.dev/) integration will enable you to request movies and series directly from your Homarr dashboard.

![](images/overseerr/search-select.png)

After choosing the correct type, you can search for content:

![](images/overseerr/search-show.png)

It displays, which content is already in your Overseerr library and links availble content directly to your [Plex](https://www.plex.tv/) or [Jellyfin](https://jellyfin.org/) instance.

## Initial setup
### Installation of Media Server
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

### Installation of Media requester

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

### Add your application in Homarr
If your instance of Overseerr or Jellyseerr is up and running, it's time to add it to your dashboard.
Simply select the correct type from the integration tab when editing the application:

![](images/overseerr/add-application.png)

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

## Searching for a movie / series
To search for a movie or series, simply press ``CTRL`` + ``K`` or click into the search box.
Then, type ``!os`` (with a space at the end) and enter, what you want to search for.

The integration will display, what content is already available in your media library.

## Seasons selection
If you're selecting a series, you'll be asked what seasons you want to request:

![season selector](images/overseerr/widget-overseerr-season-select.jpg)