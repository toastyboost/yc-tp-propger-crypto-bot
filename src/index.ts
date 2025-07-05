import { Handler } from "@yandex-cloud/function-types";

import { headers } from "#/libs/constants";

export const lambda: Handler.Http = async (e) => {
  const body = {
    ping: e.requestContext.requestTime,
  };

  try {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(body),
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: String(e),
    };
  }
};
