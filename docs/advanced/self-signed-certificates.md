---
title: 🔀 Proxies and Certificates
tags:
  - Certificates
  - Reverse Proxy
  - CA
  - Cert Checks
  - Security
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Proxies and Certificates



## Allowing self signed certificates
Some users may come across a barrier, where they're unable to receive a 200 response from the Ping widget for some apps, while using self-signed certificates or a local certificate authory.

:::note What's going on?

Homarr is trying to communicate to your apps via the integrations.
It usually doesn't matter if Homarr is running on ``http`` or ``https``.
Your apps have a self-signed certificate - Homarr will recognize that the certificate was signed by an unknown authority and requests will be blocked.

:::

Sadly, you can't add your self-signed certificates to Homarr yet.
But you can deactivate the rejection for unauthorizes TLS requests.
Simply add the ``NODE_TLS_REJECT_UNAUTHORIZED`` environment variable and set it to ``0``.

<Tabs>
  <TabItem value="docker_run" label="Example with Docker Run" default>

```bash title=Terminal
docker run  \
  --name homarr \
  --restart unless-stopped \
  -p 7575:7575 \
  -v ./homarr/configs:/app/data/configs \
  -v ./homarr/icons:/app/public/icons \
  -e NODE_TLS_REJECT_UNAUTHORIZED=0 \
  -d ghcr.io/ajnart/homarr:latest
```

  </TabItem>
  <TabItem value="docker_compose" label="Example with Docker Compose">

```yml title=docker-compose.yml
version: '3'
#---------------------------------------------------------------------#
#                Homarr -  A homepage for your server.                #
#---------------------------------------------------------------------#
apps:
  homarr:
    container_name: homarr
    image: ghcr.io/ajnart/homarr:latest
    restart: unless-stopped
    volumes:
      - ./homarr/configs:/app/data/configs
      - ./homarr/icons:/app/public/icons
    environment:
      NODE_TLS_REJECT_UNAUTHORIZED: 0
    ports:
      - '7575:7575'
```

  </TabItem>
</Tabs>

