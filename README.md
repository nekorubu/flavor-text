# nekobu's Flavor Text: the "hostable" branch
This is where all of the files are for those who would like to deploy this API themselves. This version lacks the website that's available on the main version hosted on Vercel.

# AI Disclosure
I've made use of [Claude](https://claude.ai) to help with debugging and trying to get the API up and running, as well as with the [deployment instructions](#deployment), as I haven't personally tried these platforms (save for Vercel). Please open up an issue if something goes wrong.

# API endpoints
The endpoints are the same here as in the [main branch](https://github.com/nekorubu/flavor-text/tree/main#api-endpoints), save for the one listed below

## `/` [not included in Vercel Functions version]
Returns information about the endpoints available. It's basically a JSON version of this section.

# Deployment
## [Vercel](https://vercel.com) (using Vercel Functions)
Import the GitHub repository, and have Vercel look at the root for the project. It should use the `/api` folder.
<sup>I'm kinda writing that for myself who had an issue with this when I was trying to get this up and running at first.</sup>

## [Railway](https://railway.com/)
Import the repository, and set the branch connected to your GitHub Autodeploys to the "hostable" branch. It should detect Express.js automatically. The configuration file is at [the root of the project](./railway.toml).

## [Render](https://render.com/)
Import the repository and set the branch to the "hostable" one. It should use `npm start` to run it.

## Docker
You can see the Dockerfile [here](./dockerfile), and use this command to start it:
```bash
docker build -t flavor-api . && docker run -p 3000:3000 flavor-api
```

## Bare Metal (if you just want to run the code on your own computer/server)
Clone the repository
```bash
# The "-b hostable" flag is used to skip having to switch to that branch
git clone -b hostable https://github.com/nekorubu/flavor-text.git
```
Move into the folder
```bash
cd flavor-text/
```
Install the dependencies and start it
```bash
npm install && npm start
```
