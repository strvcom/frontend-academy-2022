#!/bin/bash

set -e

# Prepare output dir.
rm -Rf public/_dev/architecture
mkdir -p public/_dev/architecture

# Create default map.
depcruise -c depcruise-config.js --output-type dot src | dot -T svg | depcruise-wrap-stream-in-html > public/_dev/architecture/index.html

# Create leveled charts.
for ((i = 2; i <= 6; i++)); 
do 
   depcruise -c depcruise-config.js --collapse $i --output-type dot src | dot -T svg | depcruise-wrap-stream-in-html > public/_dev/architecture/$i.html
done
