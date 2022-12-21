#!/bin/bash

mkdir -p ~/.ssh
chmod 700 ~/.ssh
eval $(ssh-agent -s)
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
ssh-add <(echo "$1")

scp -oStrictHostKeyChecking=no -r build/* taxfreeoffice@172.24.56.1:/home/taxfreeoffice/www
