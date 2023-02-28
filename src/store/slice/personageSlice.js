import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: ``,
  force: `0`,
  dexterity: `0`,
  intellect: `0`,
  charisma: `0`,
};

const personageSlice = createSlice({
  name: "personage",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeForce(state, action) {
      state.force = action.payload;
    },
    changeDexterity(state, action) {
      state.dexterity = action.payload;
    },
    changeIntellect(state, action) {
      state.intellect = action.payload;
    },
    changeCharisma(state, action) {
      state.charisma = action.payload;
    },
  },
});

export const { 
  changeName, 
  changeForce, 
  changeDexterity, 
  changeIntellect, 
  changeCharisma 
} = personageSlice.actions;

export default personageSlice.reducer;