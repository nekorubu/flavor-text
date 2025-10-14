# nekobu's Flavor Text

A little project meant to play around with and learn REST APIs by building something personally useful to me. Still a work in progress.

The API is hosted on [Vercel](https://vercel.com), and is available at [ft.asoulless.space/api/flavor](https://ft.asoulless.space/api/flavor). [flavor-text.vercel.app/api/flavor](https://flavor-text.vercel.app/api/flavor) hosts the testing version ~~for when I make 30,000 pushes trying to get something to work lol~~. Sending a GET request (by doing `curl https://ft.asoulless.space/api/flavor`, for example) will send you back a random string of text from [this JSON array](./data/text.json).

If you would like to deploy your own version, I recommend looking at this repository's ["hostable" branch](https://github.com/nekorubu/flavor-text/tree/hostable).

# AI Disclosure
Given the controversial nature of generative AI and its usage, I want to try and be transparent about how I'm using generative AI for this project.

I've made use of [Claude](https://claude.ai) to help with debugging and trying to get the API up and running. I've made sure to try and describe how it was used to help me with each file.

# API endpoints
## `/api/flavor`
Returns back a random phrase. I'm thinking of implementing a way for users to request specific ones by an ID, but that'll hopefully come later.

## `/api/health`
A ~~vibe~~ health check endpoint. Simply returns back a JSON if everything's good and you sent a GET request.

# Inspiration
While I've been using these phrases for years now, the idea for implementing these random phrases mainly comes from [Advice Slip](https://adviceslip.com/). The phrases themselves are mainly references and funny little phrases.