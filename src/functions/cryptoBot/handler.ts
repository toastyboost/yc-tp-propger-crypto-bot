import { Telegraf, session } from "telegraf";
import { Handler } from "@yandex-cloud/function-types";

const token = process.env.CRYPTO_BOT_TOKEN || "";

export const cryptoBot = new Telegraf(token);

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
