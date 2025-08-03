#!/usr/bin/env bash

set -e  # Exit on error

echo "📦 Installing dependencies..."
npm install

echo "🛠️  Building the project..."
npm run build

# Save full path of current directory
PROJECT_DIR=$(pwd)
DEPLOY_DIR="$PROJECT_DIR/../.deploy-temp"

echo "📁 Creating temporary deploy directory at $DEPLOY_DIR..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -r dist/* "$DEPLOY_DIR/"

echo "🌿 Switching to gh-pages branch..."
git fetch origin

if git show-ref --verify --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git reset --hard
fi

echo "🧹 Cleaning old files in gh-pages branch..."
git rm -rf . > /dev/null 2>&1 || true
git clean -fd

echo "📤 Copying new build from $DEPLOY_DIR..."
cp -r "$DEPLOY_DIR/"* .

echo "🚫 Creating .nojekyll to disable Jekyll processing..."
touch .nojekyll

echo "📝 Committing and pushing changes..."
git add .
git commit -m "Deploy to GitHub Pages: $(date '+%Y-%m-%d %H:%M:%S')" || echo "⚠️  No changes to commit."
git push origin gh-pages --force

echo "🧹 Cleaning up temp files and switching back to main..."
git checkout main
rm -rf "$DEPLOY_DIR"

echo "✅ Deployment complete!"
echo "🌍 Visit: https://ankitpithalia048.github.io/ankit-pithalia-dev/"
