#!/usr/bin/env bash

set -e  # Exit immediately on error

echo "📦 Installing dependencies..."
npm install

echo "🛠️  Building the project..."
npm run build

# Store absolute path to project root
PROJECT_ROOT=$(pwd)

echo "📁 Creating temp-deploy directory..."
rm -rf temp-deploy
mkdir temp-deploy
cp -r dist/* temp-deploy/

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
git rm -rf . || true
git clean -fd || true

echo "📤 Copying new build from temp-deploy..."
cp -r "$PROJECT_ROOT/temp-deploy/"* .

echo "🚫 Creating .nojekyll to disable Jekyll processing..."
touch .nojekyll

echo "📝 Committing and pushing changes..."
git add .
git commit -m "Deploy to GitHub Pages: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit."
git push origin gh-pages --force

echo "🧹 Cleaning up temp files and switching back to main..."
git checkout main
rm -rf "$PROJECT_ROOT/temp-deploy"

echo "✅ Deployment complete!"
echo "🌍 Visit: https://ankitpithalia048.github.io/ankit-pithalia-dev/"
