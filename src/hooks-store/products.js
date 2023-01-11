import { initalStore } from "./store";

const configStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const prodIndex = currentState.products.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initalStore(actions, {
    products: [
      {
        id: 1,
        title: "Book of knowledge",
        description: "A Good Book",
        isFavorite: false,
      },
      {
        id: 2,
        title: "Book of ignorence",
        description: "Written by the stupidist author: Ward",
        isFavorite: false,
      },
      {
        id: 3,
        title: "Book of Love",
        description:
          "People love each other in this book , spoilers : the MC dies ",
        isFavorite: false,
      },
      {
        id: 4,
        title: "The book of the dead",
        description: "A book where all the charcters are dead",
        isFavorite: false,
      },
    ],
  });
};

export default configStore;
