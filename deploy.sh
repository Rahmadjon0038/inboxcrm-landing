#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Pulling latest code (if this is a git checkout)"
if [ -d .git ]; then
  git pull
fi

echo "==> Building and starting mycompanysite-frontend"
docker compose build
docker compose up -d

echo "==> Cleaning up dangling images"
docker image prune -f

echo "==> Done. Site is up on port 3600."
docker compose ps
