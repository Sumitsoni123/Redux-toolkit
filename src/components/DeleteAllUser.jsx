import React from "react";
import { useDispatch } from "react-redux";
import { removeAllUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(removeAllUsers())
  }
  
  return (
    <button onClick={() => deleteAllUsers()}>DeleteAllUser</button>  
  )
};