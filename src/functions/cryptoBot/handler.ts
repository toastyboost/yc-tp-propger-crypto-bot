import { Telegraf } from "telegraf";
import { Handler } from "@yandex-cloud/function-types";

export const cryptoBot = new Telegraf(
  `0000000000:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
);

export const cryptoBotHandler: Handler.Http = async function (event, ctx) {
  const { body } = event;
  const { requestId } = ctx;

  try {
    const msg = JSON.parse(body as string) || "";

    await cryptoBot.handleUpdate(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        requestId,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
