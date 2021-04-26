import reducer from "reducers/Application";

describe("Application Reducer", () => {
  it("throws an error with an unsupported type", () => {
    expect(() => reducer({}, { type: null })).toThrowError(
      /Tried to reduce with unsupported action type/i
    );
  });
});
