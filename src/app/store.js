import { configureStore } from "@reduxjs/toolkit";
import tipReducer from "../features/tip/tipSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    tip: tipReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
