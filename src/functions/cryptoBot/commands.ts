import { replySettings } from "#libs/constants";

import { api } from "./api";
import { cryptoBot } from "./handler";
import { Ctx } from "./types";

/* default commands */

export const start = (ctx: Ctx["hears"]) => {
  const reply: string[] = [];

  reply.push(`Привет, ${ctx.from.first_name}!`);
  reply.push(`<br />`);
  reply.push(`Вам доступны команды:`);
  reply.push(`<br />`);

  const message = reply.join("");

  ctx.reply(message, replySettings);
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

  const message = reply.join("");

  ctx.reply(message, replySettings);
};

export const price = async (ctx: Ctx["hears"]) => {
  const arg = ctx.message.text.split(" ").slice(1)[0];

  const prices = await api.getPrices();

  const result = prices.find((price) => price.symbol === arg);

  if (result) {
    return ctx.reply(result.price, replySettings);
  }
  return ctx.reply("Тикер не найден", replySettings);
};

cryptoBot.command("tickers", tickers);
cryptoBot.command("price", tickers);
