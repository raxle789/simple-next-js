"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";

const makeStore = () => store;

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
