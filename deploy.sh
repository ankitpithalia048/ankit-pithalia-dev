#!/usr/bin/env bash

# Exit on any error
set -e

# Build the project
echo "🛠️  Building project..."
npm install
npm run build

# Go to a temp deployment directory
echo "🚚 Preparing deployment directory..."
rm -rf temp-deploy
mkdir temp-deploy
cp -r dist/* temp-deploy/

# Switch to gh-pages branch (create if doesn't exist)
echo "🌿 Switching to gh-pages branch..."
git fetch
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git reset --hard
fi

# Clean everything in gh-pages
echo "🧹 Cleaning old files..."
git rm -rf . > /dev/null 2>&1 || true
rm -rf *

# Copy from temp-deploy to current branch
echo "📦 Copying new build..."
cp -r ../temp-deploy/* .

#
