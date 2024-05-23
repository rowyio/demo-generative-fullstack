# Generative Full Stack App - Guess the prompt Game App

This demo app showcases how you can generate a full stack app using AI.

- Generative UI using v0 by Vercel
- Generative backend APIs and functions using [BuildShip](https://buildship.com/)

Full tutorial video on how this app was generated here
[![Frame 203524](https://github.com/rowyio/Generative-Full-Stack/assets/307298/a37205b6-a66e-43ba-a5b6-fc0c07f8eefe)](https://www.youtube.com/watch?v=lYxUbITSAVc)

LIVE Demo of the generated app: https://generative-full-stack.vercel.app/

## Generative UI with v0 by Vercel

- Head to [v0](https://v0.dev/) by Vercel
- Describe the app you want to build
- Iterare refine and deploy when it looks as you expect

## Generative Backend API using BuildShip

- Create an account here: [BuildShip](https://buildship.com/?ref=v0)
- Add an API trigger
- Explore nodes and add the nodes for your usecase or generate logic blocks using AI
- Test the API with sample values
- Click Ship

## Quickstart

### Backend: Clone BuildShip Templates

Get Random: This is the first workflow for the 'Guess the Prompt' game. It generates a unique scene using GPT and then generates an image of this scene with DALL·E.  
[Remix Template.](https://buildship.app/remix?template=guess-the-prompt-game-get-random)

Get Score: This is the final workflow for the 'Guess the Prompt' game. It accepts the user's guessed prompt, generates an image for it using DALL·E, and then calculates the similarity score between the guessed prompt and the original prompt.  
[Remix Template.](https://buildship.app/remix?template=guess-the-prompt-game-get-score)

### v0 Frontend

Clone repo:

```bash
git clone git@github.com:rowyio/Generative-Full-Stack.git
```

Install dependencies:

```bash
npm install
```

Environment variables:

```bash
mv .env.local.example .env.local
```

Set `NEXT_PUBLIC_GET_RANDOM_PROMPT_WORKFLOW` to the endpoint url of your `Get Random` workflow.

Set `NEXT_PUBLIC_GET_SCORE_WORKFLOW` to the endpoint url of your `Get Score` workflow.

Run app:

```bash
npm run dev
```
