export PATH="./node_modules/.bin/:$PATH"

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./dist

# redirect CNAME
# echo 'codelabs.iotex.io' > CNAME


git add -A
git commit -m 'Deploy files'

# push files
 git push -f git@github.com:JChouCode/jchou-blog.git master:gh-pages