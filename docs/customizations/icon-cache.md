# Icon Cache

Homarr automatically loads icons for many services, though directly links to an external server. To reduce network requests and use homarr offline, a local cache can be used.

Homarr has no automatic icon caching. The script below can be used to update an icon cache.

## Icon Cache Script

On a system with access to the homarr directory, run the following script. First update the variable with the path to homarr's docker directory.

```
pathToHomarr="/Volumes/docker/homarr"

configFile="${pathToHomarr}/configs/default.json"; iconCacheDir="${pathToHomarr}/icons/cache"; mkdir -p $iconCacheDir;
cat $configFile | grep cdn.jsdelivr.net | cut -d'"' -f 4 | while read -r line; do echo "Processing $(basename $line)"; curl -o $iconCacheDir/$(basename $line) $line; done
sed -i ".`date +%F`.bak" "s%https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png%/icons/cache%g" $configFile
echo "Done! Relaunch the docker container to update Homarr."
```


### Fix Incorrect URL

Ensure your remote icons are loading, the icon URL must be valid for this script to work. If you're not yet on **v0.11** and need to fix your config file, first run:
```
pathToHomarr="/Volumes/docker/homarr"

configFile="${pathToHomarr}/configs/default.json"; 
sed -i '' "s% walkxhub%walkxcode%g" $configFile
```
