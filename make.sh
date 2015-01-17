#!/bin/bash

base=$(cd $(dirname $0) && pwd)
RM=$(which rm)
CP=$(which cp)
MKDIR=$(which mkdir)
SED=$(which sed)

app() {
    dir="$base/App"
    $RM -rf "$dir"
    $MKDIR -p "$dir"
    $CP -rf $base/{css,icon,lib,js/background.js,js/app.js} "$dir"
    $CP -f $base/manifest.app.json "$dir/manifest.json"
    $CP -f $base/index.html "$dir"
    $SED -i 's/custom.js/app.js/g' $dir/index.html
}

extension() {
    dir="$base/Extension"
    $RM -rf "$dir"
    $MKDIR -p "$dir"
    $CP -rf $base/{css,icon,lib,js/event.js,js/extension.js} "$dir"
    $CP -f $base/{index.html,manifest.json} "$dir"
    $SED -i 's/custom.js/extension.js/g' $dir/index.html
}

app
extension
