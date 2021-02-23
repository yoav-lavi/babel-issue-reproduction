import { getBrowserInformation } from "./index";

describe("", () => {
  it("should ", () => {
    const browserInformation = getBrowserInformation(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
    );

    console.log({ browserInformation });
  });
});
