import { createSlice } from '@reduxjs/toolkit';
import { MAX_LEVEL_SKILL, MIN_LEVEL, STEP } from '../../constants/constants';
const LIFE = 3;
const EVASION = 10;

const initialState = {
  name: ``,
  options: {
    life: LIFE,
    evasion: EVASION,
    energy: 0,
    damage: 0,
  },
  force: {
    base: MIN_LEVEL,
    skills: {
      power: MIN_LEVEL
    },
  },
  dexterity: {
    base: MIN_LEVEL,
    skills: {
      stealth: MIN_LEVEL,
      archery: MIN_LEVEL,
    }
  },
  intellect: {
    base: MIN_LEVEL,
    skills: {
      learnability: MIN_LEVEL,
      survival: MIN_LEVEL,
      medicine: MIN_LEVEL,
    }
  },
  charisma: {
    base: MIN_LEVEL,
    skills: {
      intimidation: MIN_LEVEL,
      insight: MIN_LEVEL,
      appearance: MIN_LEVEL,
      manipulation: MIN_LEVEL,
    }
  },
};

const changeEnergy = (state) => {
  state.options.energy = state.intellect.base + state.dexterity.base;
};

const changeLife = (state) => {
  state.options.life = state.force.base + LIFE - state.options.damage;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {

    changeName(state, action) {
      state.name = action.payload;
    },

    changeForce(state, action) {
      const { payload } = action;
      const {
        options: {
          damage,
        },
        force: {
          base,
          skills: {
            power
          }
        }
       } = state;
      if (payload < base && power > base - STEP && base - STEP >= MIN_LEVEL) {
        state.force.skills.power = state.force.base - STEP;
      };
      payload < MIN_LEVEL
        ? state.force.base = MIN_LEVEL
        : state.force.base = payload;
      base + LIFE - damage < MIN_LEVEL
        ? state.options.life = MIN_LEVEL
        : changeLife(state);
    },
    upForcePower(state) {
      if (((state.force.skills.power + STEP) <= state.force.base) && ((state.force.skills.power + STEP) <= MAX_LEVEL_SKILL)) {
        state.force.skills.power = state.force.skills.power + STEP;
      }
    },

    changeDexterity(state, action) {
      if (action.payload < state.dexterity.base && state.dexterity.skills.stealth > state.dexterity.base - STEP && state.dexterity.base - STEP >= MIN_LEVEL) {
        state.dexterity.skills.stealth = state.dexterity.base - STEP;
      };
      if (action.payload < state.dexterity.base && state.dexterity.skills.archery > state.dexterity.base - STEP && state.dexterity.base - STEP >= MIN_LEVEL) {
        state.dexterity.skills.archery = state.dexterity.base - STEP;
      };
      action.payload < MIN_LEVEL
        ? state.dexterity.base = MIN_LEVEL
        : state.dexterity.base = action.payload;

      if (action.payload >= 0) {
        state.options.evasion = EVASION + action.payload;
      };

      changeEnergy(state);
    },
    upStealth(state) {
      if (((state.dexterity.skills.stealth + STEP) <= state.dexterity.base) && ((state.dexterity.skills.stealth + STEP) <= MAX_LEVEL_SKILL)) {
        state.dexterity.skills.stealth = state.dexterity.skills.stealth + STEP;
      };
    },
    upArchery(state) {
      if (((state.dexterity.skills.archery + STEP) <= state.dexterity.base) && ((state.dexterity.skills.archery + STEP) <= MAX_LEVEL_SKILL)) {
        state.dexterity.skills.archery = state.dexterity.skills.archery + STEP;
      };
    },

    changeIntellect(state, action) {
      if (action.payload < state.intellect.base && state.intellect.skills.learnability > state.intellect.base - STEP && state.intellect.base - STEP >= MIN_LEVEL) {
        state.intellect.skills.learnability = state.intellect.base - STEP;
      };
      if (action.payload < state.intellect.base && state.intellect.skills.survival > state.intellect.base - STEP && state.intellect.base - STEP >= MIN_LEVEL) {
        state.intellect.skills.survival = state.intellect.base - STEP;
      };
      if (action.payload < state.intellect.base && state.intellect.skills.medicine > state.intellect.base - STEP && state.intellect.base - STEP >= MIN_LEVEL) {
        state.intellect.skills.medicine = state.intellect.base - STEP;
      };
      action.payload < MIN_LEVEL
        ? state.intellect.base = MIN_LEVEL
        : state.intellect.base = action.payload;

      changeEnergy(state);
    },
    upLearnability(state) {
      if (((state.intellect.skills.learnability + STEP) <= state.intellect.base) && ((state.intellect.skills.learnability + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.learnability = state.intellect.skills.learnability + STEP;
      };
    },
    upSurvival(state) {
      if (((state.intellect.skills.survival + STEP) <= state.intellect.base) && ((state.intellect.skills.survival + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.survival = state.intellect.skills.survival + STEP;
      };
    },
    upMedicine(state) {
      if (((state.intellect.skills.medicine + STEP) <= state.intellect.base) && ((state.intellect.skills.medicine + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.medicine = state.intellect.skills.medicine + STEP;
      };
    },

    changeCharisma(state, action) {
      if (action.payload < state.charisma.base && state.charisma.skills.intimidation > state.charisma.base - STEP && state.charisma.base - STEP >= MIN_LEVEL) {
        state.charisma.skills.intimidation = state.charisma.base - STEP;
      };
      if (action.payload < state.charisma.base && state.charisma.skills.insight > state.charisma.base - STEP && state.charisma.base - STEP >= MIN_LEVEL) {
        state.charisma.skills.insight = state.charisma.base - STEP;
      };
      if (action.payload < state.charisma.base && state.charisma.skills.appearance > state.charisma.base - STEP && state.charisma.base - STEP >= MIN_LEVEL) {
        state.charisma.skills.appearance = state.charisma.base - STEP;
      };
      if (action.payload < state.charisma.base && state.charisma.skills.manipulation > state.charisma.base - STEP && state.charisma.base - STEP >= MIN_LEVEL) {
        state.charisma.skills.manipulation = state.charisma.base - STEP;
      };
      action.payload < MIN_LEVEL
        ? state.charisma.base = MIN_LEVEL
        : state.charisma.base = action.payload;
    },
    upIntimidation(state) {
      if (((state.charisma.skills.intimidation + STEP) <= state.charisma.base) && ((state.charisma.skills.intimidation + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.intimidation = state.charisma.skills.intimidation + STEP;
      };
    },
    upInsight(state) {
      if (((state.charisma.skills.insight + STEP) <= state.charisma.base) && ((state.charisma.skills.insight + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.insight = state.charisma.skills.insight + STEP;
      };
    },
    upAppearance(state) {
      if (((state.charisma.skills.appearance + STEP) <= state.charisma.base) && ((state.charisma.skills.appearance + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.appearance = state.charisma.skills.appearance + STEP;
      };
    },
    upManipulation(state) {
      if (((state.charisma.skills.manipulation + STEP) <= state.charisma.base) && ((state.charisma.skills.manipulation + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.manipulation = state.charisma.skills.manipulation + STEP;
      };
    },

    getDamage(state) {
      if ((state.force.base + LIFE - state.options.damage) > MIN_LEVEL) {
        state.options.damage = state.options.damage + STEP;
      };
      changeLife(state);
    },

    uploadNewPersonage(state, action) {
      return action.payload;
    }
  },
});

export const {
  changeName,

  changeForce,
  upForcePower,

  changeDexterity,
  upStealth,
  upArchery,

  changeIntellect,
  upLearnability,
  upSurvival,
  upMedicine,

  changeCharisma,
  upIntimidation,
  upInsight,
  upAppearance,
  upManipulation,

  getDamage,

  uploadNewPersonage,
} = gameSlice.actions;

export default gameSlice.reducer;