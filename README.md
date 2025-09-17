# nekobu's Flavor Text

A little project meant to play around with and learn REST APIs by building something personally useful to me. Still a work in progress.

The API is hosted on [Vercel](https://vercel.com), and is available at [ft.asoulless.space/api/flavor](https://ft.asoulless.space/api/flavor) and [flavor-text.vercel.app/api/flavor](https://flavor-text.vercel.app/api/flavor). Sending a GET request (by doing `curl https://ft.asoulless.space/api/flavor`, for example) will send you back a random string of text from [this JSON array](./data/text.json). If you would like to change or add your own phrases, I recommend forking this repository, and editing that JSON array.

# AI Disclosure
Given the controversial nature of generative AI and its usage, I want to try and be transparent about how I'm using generative AI for this project.

I've made use of [Claude](https://claude.ai) to help with debugging and trying to get the API up and running. I've made sure to try and describe how it was used to help me with each file.

# Deployment
I personally haven't tried these platforms (save for Vercel); all of these I got from using Claude. Please open up an issue if something goes wrong.

## [Vercel](https://vercel.com) (using Vercel Functions)
Import the GitHub repository, and have Vercel look at the root for the project. It should use the `/api` folder.
<sup>I'm kinda writing that for myself who had an issue with this when I was trying to get this up and running at first.</sup>

## [Railway](https://railway.com/)
Import the repository. It should detect Express.js automatically. The configuration file is at [the root of the project](./railway.toml).

## [Render](https://render.com/)
Import the repository. It should use `npm start` to run it.

## Docker
You can see the Dockerfile [here](./dockerfile), and use this command to start it:
```bash
docker build -t flavor-api . && docker run -p 3000:3000 flavor-api
```

## Bare Metal (if you just want to run the code on your own computer/server)
Clone the repository
```bash
git clone https://github.com/nekorubu/flavor-text.git
```
Move into the folder
```bash
cd flavor-text/
```
Install the dependencies and start it
```bash
npm install && npm start
```

# Inspiration
While I've been using these phrases for years now, the idea for implementing these random phrases mainly comes from [Advice Slip](https://adviceslip.com/). The phrases themselves are mainly references and funny little phrases.
