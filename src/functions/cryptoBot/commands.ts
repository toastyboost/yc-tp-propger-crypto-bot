import { replySettings } from "#libs/constants";
import { api } from "./api";
import { cryptoBot } from "./handler";

import { Ctx } from "./types";

/* default commands */

export const start = (ctx: Ctx["hears"]) => {
  ctx.reply(`Привет, ${ctx.from.first_name}!`, replySettings);
};

cryptoBot.start(start);

/* custom commands */

export const tickers = async (ctx: Ctx["hears"]) => {
  const prices = await api.getPrices();

  const tickers = prices.map((price) => price.symbol).slice(0, 10);

  const reply: string[] = [];

  for (const ticker of tickers) {
    reply.push(ticker);
    reply.push(`\n`);
  }

  ctx.reply(reply.join(""), replySettings);
};

export const price = async () => {};

cryptoBot.command("tickers", tickers);
cryptoBot.command("price", tickers);
