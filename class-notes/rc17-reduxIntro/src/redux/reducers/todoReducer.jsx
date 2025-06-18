const initial = {
  yapilacaklar: [
    { id: 1, task: "Redux çalışıyoruz", completed: false },
    { id: 2, task: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "":
      return;

    default:
      return state;
  }
};

export default todoReducer;
