#!/bin/bash
cd /var/www/html/lancers_hive/frontend/lancer-frontend
tar -xzf lancershive_frontend.tar.gz
rm -rf lancershive_frontend.tar.gz
cp env .env
ls
