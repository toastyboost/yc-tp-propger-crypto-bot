import { replySettings } from "#libs/constants";
import { api } from "./api";

import { Ctx } from "./types";

/* default commands */

export const start = (ctx: Ctx["hears"]) => {
  ctx.reply(`Привет, ${ctx.from.first_name}!`, replySettings);
};

/* custom commands */

export const tickers = async (ctx: Ctx["hears"]) => {
  const prices = await api.getPrices();
  const tickers = prices.map((price) => price.symbol).slice(0, 10);
  const reply = tickers.join("");

  ctx.reply(reply, replySettings);
};

export const price = async () => {};
