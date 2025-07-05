#!/bin/bash

# Exposing all exercise branches in the main branch: b=begin, e=end letters suggesting b:work_by_subscriber e:suggested solution by Ella

# Get a list of all remote number-named branches (excluding main and HEAD)
branches=$(git branch -r | grep -E 'origin/[0-9]{2}_[0-9]{2}[be]' | sed 's|origin/||')

for branch in $branches; do
  echo "Processing branch: $branch"

  # Checkout main and pull latest
  git checkout main
  git pull origin main

  # Create a temp worktree for the branch to extract its files
  tempdir=$(mktemp -d)
  git worktree add "$tempdir" "origin/$branch"

  # Make a directory named after the branch in the main repo
  targetdir="$branch"
  mkdir -p "$targetdir"

  # Copy all files from the branch (excluding .git) into the target directory
  rsync -a --exclude='.git' "$tempdir"/ "$targetdir"/

  # Clean up the worktree
  git worktree remove "$tempdir" --force

  # Add the new directory to git
  git add "$targetdir"

  # Commit the addition
  git commit -m "Merge branch $branch into main under $targetdir"

done

# Push all changes to origin/main
git push origin main

echo "All branches merged into main as subdirectories!"
