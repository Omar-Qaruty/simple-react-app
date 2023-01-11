import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useCustomStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionName, payload) => {
    const newState = actions[actionName](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initalStore = (devActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...devActions };
};
