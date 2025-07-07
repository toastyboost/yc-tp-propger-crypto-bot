import { replySettings } from "#libs/constants";

import { Ctx } from "./types";

export const start = async (ctx: Ctx["hears"]) => {
  try {
    const msg = [];

    msg.push(`Привет, ${ctx.from.first_name}!`);

    const text = msg.join("");

    ctx.reply(text, replySettings);
  } catch (err) {
    throw err;
  }
};
