import { replySettings } from "#libs/constants";
import { cryptoBot } from "./handler";

import { Ctx } from "./types";

/* default commands */

export const start = (ctx: Ctx["hears"]) => {
  ctx.reply(`Привет, ${ctx.from.first_name}!`, replySettings);
};

cryptoBot.start(start);

/* custom commands */
