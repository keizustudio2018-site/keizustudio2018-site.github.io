#!/bin/bash
set -e
BASE="https://keizustudio2018.weebly.com/uploads/1/2/1/5/121512385"
DEST="/Users/sandytzeng/Downloads/SD_agent/keizu_studio_site/images"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

dl() {
  local folder="$1"
  local file="$2"
  if [ ! -f "$DEST/$folder/$file" ]; then
    curl -sS -A "$UA" -o "$DEST/$folder/$file" "$BASE/$file" && echo "OK  $folder/$file" || echo "FAIL $folder/$file"
  fi
}

# home / hero
dl home 01_6_orig.png
dl home 01_5_orig.png
dl home 02_3_orig.png
dl home 03-2_orig.png
dl home dsc-9939_2_orig.jpg
dl home img-0847-2_1_orig.jpg
dl home img-0829-4_orig.jpg
dl home dsc-1504_2_orig.jpg
dl home dsc-1490_2_orig.jpg
dl home img-0432-2_orig.jpg

# vanity
dl vanity dsc-1504_1_orig.jpg
dl vanity dsc-1506_orig.jpg
dl vanity dsc-1507_orig.jpg
dl vanity 01_10_orig.png
dl vanity 02_7_orig.png

# taisho
dl taisho dsc-1548_orig.jpg
dl taisho dsc-1549_orig.jpg
dl taisho dsc-1541_orig.jpg
dl taisho dsc-1433_orig.jpg
dl taisho dsc-1531_orig.jpg
dl taisho 09_orig.png

# yoshiwara
dl yoshiwara dsc-2234_orig.jpg
dl yoshiwara dsc-1561_1_orig.jpg
dl yoshiwara img-0401-2_orig.jpg
dl yoshiwara img-0418-2_1_orig.jpg
dl yoshiwara img-0432-2_1_orig.jpg
dl yoshiwara 01_11_orig.png

# heya (seoul room)
dl heya 01_orig.jpg
dl heya img-20240619-144536_orig.jpg
dl heya img-20240619-150332_orig.jpg
dl heya img-20240619-141921_orig.jpg
dl heya img-20240619-142122_orig.jpg
dl heya 02_orig.jpg

# hygge
dl hygge img-0829-2_orig.jpg
dl hygge 05_6_orig.png
dl hygge 02_10_orig.png
dl hygge 01_13_orig.png
dl hygge 975119_orig.jpg
dl hygge dsc-8951_orig.jpg
dl hygge dsc-8949_orig.jpg

# mourning-nigh
dl mourning 20_orig.jpg
dl mourning 21_orig.jpg
dl mourning 24_orig.png
dl mourning 22-2_orig.jpg
dl mourning 23-2_orig.jpg
dl mourning 25_orig.jpg

# black
dl black dsc-1490_orig.jpg
dl black dsc-1739_1_orig.jpg

# bgfabric
dl bgfabric img-1148_orig.jpg
dl bgfabric img-1163_orig.jpg
dl bgfabric img-1134_orig.jpg
dl bgfabric img-1161_orig.jpg
dl bgfabric img-1169_orig.jpg
dl bgfabric img-1173_orig.jpg

echo "----- DONE -----"
