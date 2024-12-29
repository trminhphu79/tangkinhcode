#!/bin/bash

# Define repository URLs
BITBUCKET_REMOTE="https://phutran79@bitbucket.org/lelinh781/code-cultivation.git"
GITHUB_REMOTE="https://github.com/trminhphu79/tangkinhcode.git"

# Fetch the latest updates from both remotes
echo "Fetching updates from Bitbucket..."
git fetch $BITBUCKET_REMOTE
echo "Fetching updates from GitHub..."
git fetch $GITHUB_REMOTE

# Stage all changes
echo "Staging changes..."
git add .

# Commit changes
echo "Committing changes..."
read -p "Enter commit message: " commitMessage
git commit -m "$commitMessage"

# Push to Bitbucket
echo "Pushing to Bitbucket..."
git push $BITBUCKET_REMOTE

# Push to GitHub
echo "Pushing to GitHub..."
git push $GITHUB_REMOTE

echo "Code has been successfully pushed to both repositories!"