import { createSlice } from '@reduxjs/toolkit';
import { MAX_LEVEL_SKILL } from '../../constants/constants';

const initialState = {
  index: 0,
  skills: {
    power: 0
  }
};

const forceSlice = createSlice({
  name: "force",
  initialState,
  reducers: {
    changeForce(state, action) {
      state.index = action.payload;
    },
    upForcePower(state) {
      if (((state.skills.power + 1) <= state.index) && ((state.skills.power + 1) <= MAX_LEVEL_SKILL)) {
        state.skills.power = state.skills.power + 1;
      } else if (state.index <= MAX_LEVEL_SKILL) {
        state.skills.power = state.index;
      }
    },
  },
});

export const {
  changeForce,
  upForcePower,
} = forceSlice.actions;

export default forceSlice.reducer;