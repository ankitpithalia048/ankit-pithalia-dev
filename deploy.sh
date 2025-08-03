#!/usr/bin/env bash

set -e  # Exit immediately on error

# Optional: Print each command (for debugging)
# set -x

echo "📦 Installing dependencies..."
npm install

echo "🛠️  Building the project..."
npm run build

DEPLOY_DIR=".deploy-temp"

echo "📁 Creating temporary deploy directory..."
rm -rf "$DEPLOY_DIR"
mkdir "$DEPLOY_DIR"
cp -r dist/* "$DEPLOY_DIR/"

echo "🌿 Switching to gh-pages branch..."
git fetch origin

if git show-ref --verify --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git reset --hard
fi

# Confirm we are on gh-pages
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "gh-pages" ]]; then
  echo "❌ Failed to switch to gh-pages branch."
  exit 1
fi

echo "🧹 Cleaning old files in gh-pages branch..."
git rm -rf . > /dev/null 2>&1 || true
git clean -fd

echo "📤 Copying new build from $DEPLOY_DIR..."
cp -r "../$DEPLOY_DIR/"* .

echo "🚫 Creating .nojekyll to disable Jekyll processing..."
touch .nojekyll

echo "📝 Committing and pushing changes..."
git add .
git commit -m "Deploy to GitHub Pages: $(date '+%Y-%m-%d %H:%M:%S')" || echo "⚠️  No changes to commit."
git push origin gh-pages --force

echo "🧹 Cleaning up temp files and switching back to main..."
cd ..
rm -rf "$DEPLOY_DIR"
git checkout main

echo "✅ Deployment complete!"
echo "🌍 Visit: https://ankitpithalia048.github.io/ankit-pithalia-dev/"
