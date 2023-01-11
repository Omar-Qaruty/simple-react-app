import { TOGGLE_FAV } from "../actions/products";

const initalState = {
  products: [
    {
      id: 1,
      title: "ward",
      description: "I am the worst   ",
      isFavorite: false,
    },
    {
      id: 2,
      title: "ward",
      description: "I am Not the worst",
      isFavorite: false,
    },
    {
      id: 3,
      title: "ward",
      description: "I maybe  the worst",
      isFavorite: false,
    },
    {
      id: 4,
      title: "ward",
      description: "am I  the worst   ",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
