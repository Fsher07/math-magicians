import operate from "../logic/operate";

describe("operate", () => {
  test("check math operations", () => {
    expect(operate(3,3,'+')).toEqual('6');
  });
  test("check math operations", () => {
    expect(operate(3,0,'÷')).toBe("Can't divide by 0.");
  });
});