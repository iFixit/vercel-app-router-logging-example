# Vercel app router logging minimum reproducible example

Demonstrates the differences in logging behavior between the Next.js app router and pages router.

The app router page is available at `/app-router`. The pages router page is available at `/pages-router`.

Notice that the two `console.log()` statements in the pages router produce one log entry in Vercel's log dashboard.The app router produces one log entry for the request, and one log entry per `console.log()` statement.

| Screenshots of Vercel logs  |
| ------------- |
| ![image](https://github.com/iFixit/vercel-app-router-logging-example/assets/52104630/6b91dcca-56b9-4e94-a0cc-d124db6dce88)  |
| ![image](https://github.com/iFixit/vercel-app-router-logging-example/assets/52104630/b3e67ca0-9f7d-426b-b8cf-5e103ce333aa)  |
| ![image](https://github.com/iFixit/vercel-app-router-logging-example/assets/52104630/73ef4167-f406-45ec-9ded-4fb636af8e90)  |
| ![image](https://github.com/iFixit/vercel-app-router-logging-example/assets/52104630/d9d7e8e7-c441-4193-a4ac-1bc915330aa6)  |
| ![image](https://github.com/iFixit/vercel-app-router-logging-example/assets/52104630/4a1dbeab-0326-460c-b7d8-ed69e0ef9f25)  |

## Local development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It requires Node.js 18.18.0 and pnpm 8.12.0. `nvm use` is supported.

- Run the development server with `pnpm dev`.

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
