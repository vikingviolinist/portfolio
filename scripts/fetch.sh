echo "Fetching repos from GitHub..."
curl https://api.github.com/users/vikingviolinist/repos?per_page=60 -o data/repos.json
