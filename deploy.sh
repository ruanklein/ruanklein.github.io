#!/usr/bin/env bash

echo '=> Removendo arquivos antigos: rm -rf dist'
rm -rf dist

echo '=> Gerando build de produção: yarn build'
yarn build || exit 1

echo '=> Enviando arquivos para o servidor'
rsync -av --delete dist/ ruan@aldebaran:/home/ruan/hosted/home/www