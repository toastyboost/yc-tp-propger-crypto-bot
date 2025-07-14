import { replySettings } from "#libs/constants";
import { cryptoBot } from "./handler";

import { Ctx } from "./types";

/* default commands */

export const start = (ctx: Ctx["hears"]) => {
  ctx.reply(`Привет, ${ctx.from.first_name}!`, replySettings);
};

/* custom commands */

export const tickers = async (ctx: Ctx["hears"]) => {};

export const price = async (ctx: Ctx["hears"]) => {};

/* init commands */

cryptoBot.start(start);

cryptoBot.command("/tickers", tickers);
cryptoBot.command("/price", tickers);
