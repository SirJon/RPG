import { createSlice } from '@reduxjs/toolkit';
import { MAX_LEVEL_SKILL } from '../../constants/constants';

const initialState = {
  index: 0,
  skills: {
    stealth: 0,
    archery: 0,
  }
};

const dexteritySlice = createSlice({
  name: "force",
  initialState,
  reducers: {
    changeDexterity(state, action) {
      state.index = action.payload;
    },
    changeDexterityStealth(state) {
      if (((state.skills.power + 1) <= state.index) && ((state.skills.power + 1) <= MAX_LEVEL_SKILL)) {
        state.skills.power = state.skills.power + 1;
      } else if (state.index <= MAX_LEVEL_SKILL) {
        state.skills.power = state.index;
      }
    },
  },
});

export const {
  changeDexterity,
  changeDexterityStealth,
} = dexteritySlice.actions;

export default dexteritySlice.reducer;