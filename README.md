# Ruby-React Site Starter

Clone the repo.
## Setting the project up
`bundle install`
`cd client && npm i`
`cd ..`
``

## Development

`bin/rake start`

## Deployment

Update `config/secrets.yml` with app key:
`bin/rake secret | pbcopy`

Create a new heroku app:

`heroku create <yourappname>`

Add build packs for heroku:

`heroku buildpacks:add heroku/nodejs --index 1`
`heroku buildpacks:add heroku/ruby --index 2`


Do the git stuff:

`git init`
`git add . && git commit -m "Initial commit"`
`git push -u origin master`
`git push heroku master`
`heroku run rake db:seed`