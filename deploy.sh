#!/bin/bash
# Script to deploy CLAUDE.md to main branch and trigger Vercel deployment

echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes..."
git pull origin main

echo "Merging documentation branch..."
git merge claude/add-claude-documentation-3KkCA --no-edit

echo "Pushing to main (this will trigger Vercel deployment)..."
git push origin main

echo "✅ Done! Vercel should deploy automatically in 1-2 minutes."
echo "Check deployment at: https://vercel.com/your-dashboard"
