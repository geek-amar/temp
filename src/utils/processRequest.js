/**
 * Global network request handler
 * @param {string} url url to fetch
 * @param {Request} options fetch options
 * @returns {Promise<any>}
 */
export default async function processRequest(url, options) {
  try {
    const ts = Date.now();
    const method = options?.method || "GET";
    const endpoint = url.match(
      /((?!\S+\s)?\S*[/].*?(?:\S+\s)?\S*[/])([\s\S]*)/
    )[2];

    const response = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        "Content-Type": "application/json",
      },
    });

    console.groupCollapsed(
      `%c ${method}${response.status}: ${Date.now() - ts}ms /${endpoint}`,
      "background: #E1A200; color: #000"
    );
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const errResponse = await response.json();
      throw new Error(errResponse.message);
    }
  } catch (err) {
    throw new Error(err.message);
  } finally {
    console.groupEnd();
  }
}
