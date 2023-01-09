# Icon Cache

Homarr automatically requests external icons from links. If you do not have access to the internet at all time or want to reduce network traffic, you can use a local cache.
A cache retrieves the pictures from the external source, stores them on your local disk and will tell Homarr to send those pictures instead of the external ones.

Although Homarr has no automatic caching, you can still achieve this behavior using a shell script, which does this job for you.

## Icon Cache Script

To run the script, you need to open the terminal which has access to Homarr's directory. Usually, this is on your host machine or inside your docker container / volume.
Replace ``/Volumes/docker/homarr`` with your directory of Homarr.

:::

warn

Make a backup, before you execute any scripts, in case anything breaks!

::: 

```
pathToHomarr="/Volumes/docker/homarr"

configFile="${pathToHomarr}/configs/default.json"; iconCacheDir="${pathToHomarr}/icons/cache"; mkdir -p $iconCacheDir;
cat $configFile | grep cdn.jsdelivr.net | cut -d'"' -f 4 | while read -r line; do echo "Processing $(basename $line)"; curl -o $iconCacheDir/$(basename $line) $line; done
sed -i ".`date +%F`.bak" "s%https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png%/icons/cache%g" $configFile
echo "Done! Relaunch the docker container to update Homarr."
```


### Fix Incorrect URL

On the 07.01.2022, the old icon repository of Homarr has been permanently deleted. All old icons links pointing to this repository may not work. This has been fixed in version ``0.10.7``, but for all services you've created prior to this version, a migration is required. **Version 0.11 of Homarr will ship with an automatic updater for the old URLs. We recommend to wait until 0.11 is released**, but you can migrate them manually as well:
```
pathToHomarr="/Volumes/docker/homarr"

configFile="${pathToHomarr}/configs/default.json"; 
sed -i '' "s% walkxhub%walkxcode%g" $configFile
```
