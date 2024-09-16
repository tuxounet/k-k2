import { run } from "./bin";

describe("index", () => {
  test("showing help", async () => {
    const processExit = jest
      .spyOn(process, "exit")
      .mockImplementation((code?: number) => undefined as never);
    run([
      "/usr/local/bin/node",
      "/Users/krux/repos/github.com/k2/dist/bin.js",
      "help",
    ]);
    expect(processExit).toHaveBeenCalledWith(1);
    processExit.mockRestore();
  });
});
