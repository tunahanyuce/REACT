//mutfak

const counterReducer = (
  state = { sayaç: 0, yazi: "basliyor" },
  { type, payload1 }
) => {
  switch (type) {
    case "INCREASE":
      return;

    default:
      return state;
  }
};

export default counterReducer;
