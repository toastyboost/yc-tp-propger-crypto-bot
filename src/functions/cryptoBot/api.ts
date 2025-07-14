import { Price } from "./types";

const CRYPTO_API_URL = "https://api.binance.com/api/v3/ticker/price";

const headers = {
  "content-type": "application/json",
};

export const api = {
  getPrices: async () => {
    try {
      const data = await fetch(CRYPTO_API_URL, {
        headers,
        method: "GET",
      });

      const prices = (await data.json()) as Price[];

      return prices;
    } catch (error) {
      throw error;
    }
  },
};
