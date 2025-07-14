import { Telegraf } from "telegraf";
import { Handler } from "@yandex-cloud/function-types";
import { start, tickers } from "./commands";

export const cryptoBot = new Telegraf(
  `7890757533:AAE_XQ0A1qbE8C0tcDSzzrbeuEd_cYcvFvw`
);

export const cryptoBotHandler: Handler.Http = async function (e) {
  try {
    const msg = JSON.parse(e.body as string) || "";
    console.log(msg, "msg");
    await cryptoBot.handleUpdate(msg);

    return {
      statusCode: 200,
      body: "",
    };
  } catch (e) {
    console.log(e, "1");
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};

/* init commands */

cryptoBot.start(start);

cryptoBot.command("tickers", tickers);
cryptoBot.command("price", tickers);
