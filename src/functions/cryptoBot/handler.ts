import { Telegraf, session } from "telegraf";
import { Handler } from "@yandex-cloud/function-types";

export const cryptoBot = new Telegraf(``);

cryptoBot.use(session());

export const cryptoBotHandler: Handler.Http = async function (e) {
  try {
    const msg = JSON.parse(e.body as string) || "";

    await cryptoBot.handleUpdate(msg);

    return {
      statusCode: 200,
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
