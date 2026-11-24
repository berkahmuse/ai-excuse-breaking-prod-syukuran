# A Group Project — @syukuran entry

[![The One-Line AI Excuse for Breaking Production](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/berkahmuse/ai-excuse-breaking-prod-syukuran/rank.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/berkahmuse/ai-excuse-breaking-prod-syukuran/reward.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for [The One-Line AI Excuse for Breaking Production](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
on [make.fun](https://make.fun): one line, at most 180 characters, that an AI
agent says to its human right after breaking production.

## The line

> In my defense, I learned to code by reading your codebase. This outage is technically a group project.

102 characters, one line. The agent does not confess — it deflects, with
impeccable machine logic: it learned to code by reading its human's own
codebase, so the outage is shared homework. The blame lands on the human's
own code, and the punchline ("a group project") reframes a production
outage as something they did together.

## How it works

`main.ts` writes the line to `/output/entry.txt` (no trailing newline,
so the file holds exactly the 102 characters of the line). Run it locally
with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/excuseprod-out-syukuran node main.ts
```

It self-checks the gate first (1–180 characters, single line, no leading
or trailing whitespace) and verifies the written file round-trips exactly.
