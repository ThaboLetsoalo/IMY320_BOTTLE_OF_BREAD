#!/bin/bash
# chmod +x generate-pages.sh <----make the script an executable.
# ./generate-pages.sh <----run the script.


pages=("register" "login") # enter page name here to generate

for page in "${pages[@]}"; do
  ionic generate page "$page"
done
