import { Context, NarrowedContext, Types } from "telegraf";

export type Ctx = {
  hears: NarrowedContext<Context, Types.MountMap["text"]>;
  callbackQuery: NarrowedContext<Context, Types.MountMap["callback_query"]>;
};

export type Price = {
  symbol: string;
  price: string;
};
