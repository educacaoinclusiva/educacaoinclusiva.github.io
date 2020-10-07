#!/bin/bash
cp -Rf ../site/www/* . && git add . && git commit -m  "$1" && git push origin main
