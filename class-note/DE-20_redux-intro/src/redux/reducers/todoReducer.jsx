const initial={ gorevler: [{ id: 0, text: "Work on Redux" }] }
const todoReducer = (
  state = initial,
  action
) => {
  switch (action.type) {
    case "EKLE":
      return {
        gorevler: [...state.gorevler, { id: 5, text: action.payload }],
      };

case 'TEMIZLE':

  return initial
  ;

    default:
      return state;
  }
};

export default todoReducer;
