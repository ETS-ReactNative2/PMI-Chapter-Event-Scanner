import produce from "immer";
import {} from "./constants";

export const initialState = {};

const scanPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    }
  });

export default scanPageReducer;
