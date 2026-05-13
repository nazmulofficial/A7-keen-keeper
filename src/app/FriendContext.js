"use client";

import toast from "react-hot-toast";

import {
  createContext,
  useContext,
  useState,
} from "react";

const FriendContext = createContext();

export function FriendProvider({ children }) {

  const [interactions, setInteractions] =
    useState([]);

  const addInteraction = (
    friendName,
    type
  ) => {

    const newInteraction = {
      id: Date.now(),
      friendName,
      type,
      date: new Date().toLocaleDateString(),
    };

    // SAVE DATA
    setInteractions((prev) => [
      newInteraction,
      ...prev,
    ]);
    // SHOW TOAST
    toast.success(
      `${type} with ${friendName}`
    );
  };
  return (
    <FriendContext.Provider
      value={{
        interactions,
        addInteraction,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}
export const useFriends = () =>
  useContext(FriendContext);