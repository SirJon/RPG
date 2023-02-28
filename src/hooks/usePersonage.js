import { useSelector } from "react-redux";

export const usePersonage = () => useSelector((state) => state.personage);