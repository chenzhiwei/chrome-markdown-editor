#!/bin/bash

base=$(cd $(dirname $0) && pwd)
RM=$(which rm)
CP=$(which cp)
MKDIR=$(which mkdir)
SED=$(which sed)

extension() {
    dir="$base/Extension"
    $RM -rf "$dir"
    $MKDIR -p "$dir"
    $CP -rf $base/{emoji,icon,index.css,index.html,index.js,js/event.js,lib,manifest.json} "$dir"
}

extension
