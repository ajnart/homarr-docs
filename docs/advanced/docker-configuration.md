---
title: 🐳 Docker Configuration
tags:
  - Configuration
  - Docker
  - Advanced
---

Homarr offers a Docker Container, which can be run on any compatible system, such as Unraid, Kubernetes and many more systems! Our Docker container is based on the ``node:16-alpine`` image and serves per standard on the port `7575`.

---

## Environment Variables

Homarr offers a few environment variables, which can be used to configure the container.

| Environment Variable | Description                                                 | Examples           |
| -------------------- | ----------------------------------------------------------- | ------------------ |
| ``BASE_URL``         | Allows you to change the base URL you use to access Homarr  | homarr.example.com |
| ``PASSWORD``         | Allows you to set a password for Password protection        | -                  |
| ``PORT``             | Allows you to change the default port Homarr uses to deploy | ``1234``           |

---

## Timezone Settings

Some users might experience wrong dates/times in their [Calendar](/docs/widgets/calendar-widget). This is because the Calendar is using the server-side time. Although you should always set your host machine to your local time zone, you should specify the timezone for Homarr to ensure that the timezone is always set correctly.

### Set Timezone in Docker
You can set the timezone using the ``--tz`` when running ``docker run``.

**Example:**
```bash
docker run  \
  --name homarr \
  --restart unless-stopped \
  --tz Europe/Paris \
  -p 7575:7575 \
  -v <your-path>/homarr/configs:/app/data/configs \
  -v <your-path>/homarr/icons:/app/public/icons \
  -d ghcr.io/ajnart/homarr:latest
```

### Set Timezone in Docker Compose
If you're using docker-compose, you can add the following to your ``docker-compose.yml`` file:
```yaml
environment:
  - TZ=America/Denver
```

:::tip

Unsure what your timezone is? You can find yours on [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Simply copy the value of the column "TZ database name".

:::

---

Please note that this should work on nearly all systems. Check out these two amazing articles by howtogeek on timezones in containers:
- [How to Handle Timezones in Docker Containers](https://www.howtogeek.com/devops/how-to-handle-timezones-in-docker-containers/)
- [What Is Podman and How Does It Differ from Docker?](https://www.howtogeek.com/devops/what-is-podman-and-how-does-it-differ-from-docker/)
