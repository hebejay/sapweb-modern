#!/usr/bin/env bash
# deploy.sh — Deploy the modern sapweb to Vercel
# Usage: ./deploy.sh

set -euo pipefail

echo "🚀 Iron-Man Sky — Vercel Deploy Script"
echo ""

# Check for vercel CLI
if ! command -v vercel &>/dev/null; then
  echo "📦 Installing Vercel CLI..."
  npm install -g vercel
fi

echo "📤 Deploying to Vercel..."
cd "$(dirname "$0")"
vercel --prod

echo ""
echo "✅ Done! Your site is live."
