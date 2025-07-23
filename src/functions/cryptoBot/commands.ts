import { replySettings } from "#libs/constants";

import { api } from "./api";
import { Ctx } from "./types";

export const start = (ctx: Ctx["hears"]) => {
  const reply: string[] = [];

  reply.push(`Привет, ${ctx.from.first_name}!`);
  reply.push(`\n\n`);
  reply.push(`Вам доступны команды:`);
  reply.push(`\n\n`);
  reply.push(`/tickers Показать доступные токены`);
  reply.push(`\n`);
  reply.push(`/price <ticker> Найти цену по тикеру`);

  const message = reply.join("");

  ctx.reply(message, replySettings);
};

export const tickers = async (ctx: Ctx["hears"]) => {
  const prices = await api.getPrices();

  const tickers = prices.map((price) => price.symbol).slice(0, 10);

  const rows: string[] = [];

  for (const ticker of tickers) {
    rows.push(ticker);
    rows.push(`\n`);
  }

  const message = rows.join("");

  ctx.reply(message, replySettings);
};

export const price = async (ctx: Ctx["hears"]) => {
  const arg = ctx.message.text.split(" ").slice(1)[0];

  const prices = await api.getPrices();

  const result = prices.find((price) => price.symbol === arg);

  if (result) return ctx.reply(result.price, replySettings);

  return ctx.reply("Тикер не найден", replySettings);
};
