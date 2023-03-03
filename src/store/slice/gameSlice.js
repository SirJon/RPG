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
      const {
        force: {
          base,
          skills: {
            power,
          },
        },
      } = state;
      if (((power + STEP) <= base) && ((power + STEP) <= MAX_LEVEL_SKILL)) {
        state.force.skills.power = state.force.skills.power + STEP;
      }
    },

    changeDexterity(state, action) {
      const { payload } = action;
      const {
        dexterity: {
          base,
          skills: {
            stealth,
            archery
          }
        }
      } = state;
      if (payload < base && stealth > base - STEP && base - STEP >= MIN_LEVEL) {
        state.dexterity.skills.stealth = state.dexterity.base - STEP;
      };
      if (payload < base && archery > base - STEP && base - STEP >= MIN_LEVEL) {
        state.dexterity.skills.archery = state.dexterity.base - STEP;
      };
      payload < MIN_LEVEL
        ? state.dexterity.base = MIN_LEVEL
        : state.dexterity.base = payload;

      if (payload >= 0) {
        state.options.evasion = EVASION + payload;
      };

      changeEnergy(state);
    },
    upStealth(state) {
      const {
        dexterity: {
          base,
          skills: {
            stealth,
          }
        }
      } = state;
      if (((stealth + STEP) <= base) && ((stealth + STEP) <= MAX_LEVEL_SKILL)) {
        state.dexterity.skills.stealth = state.dexterity.skills.stealth + STEP;
      };
    },
    upArchery(state) {
      const {
        dexterity: {
          base,
          skills: {
            archery,
          }
        }
      } = state;
      if (((archery + STEP) <= base) && ((archery + STEP) <= MAX_LEVEL_SKILL)) {
        state.dexterity.skills.archery = state.dexterity.skills.archery + STEP;
      };
    },

    changeIntellect(state, action) {
      const { payload } = action;
      const {
        intellect: {
          base,
          skills: {
            learnability,
            survival,
            medicine,
          }
        }
      } = state;
      if (payload < base && learnability > base - STEP && base - STEP >= MIN_LEVEL) {
        state.intellect.skills.learnability = state.intellect.base - STEP;
      };
      if (payload < base && survival > base - STEP && base - STEP >= MIN_LEVEL) {
        state.intellect.skills.survival = state.intellect.base - STEP;
      };
      if (payload < base && medicine > base - STEP && base - STEP >= MIN_LEVEL) {
        state.intellect.skills.medicine = state.intellect.base - STEP;
      };
      payload < MIN_LEVEL
        ? state.intellect.base = MIN_LEVEL
        : state.intellect.base = payload;

      changeEnergy(state);
    },
    upLearnability(state) {
      const {
        intellect: {
          base,
          skills: {
            learnability,
          }
        }
      } = state;
      if (((learnability + STEP) <= base) && ((learnability + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.learnability = state.intellect.skills.learnability + STEP;
      };
    },
    upSurvival(state) {
      const {
        intellect: {
          base,
          skills: {
            survival,
          }
        }
      } = state;
      if (((survival + STEP) <= base) && ((survival + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.survival = state.intellect.skills.survival + STEP;
      };
    },
    upMedicine(state) {
      const {
        intellect: {
          base,
          skills: {
            medicine,
          }
        }
      } = state;
      if (((medicine + STEP) <= base) && ((medicine + STEP) <= MAX_LEVEL_SKILL)) {
        state.intellect.skills.medicine = state.intellect.skills.medicine + STEP;
      };
    },

    changeCharisma(state, action) {
      const { payload } = action;
      const {
        charisma: {
          base,
          skills: {
            intimidation,
            insight,
            appearance,
            manipulation,
          }
        }
      } = state;
      if (payload < base && intimidation > base - STEP && base - STEP >= MIN_LEVEL) {
        state.charisma.skills.intimidation = state.charisma.base - STEP;
      };
      if (payload < base && insight > base - STEP && base - STEP >= MIN_LEVEL) {
        state.charisma.skills.insight = state.charisma.base - STEP;
      };
      if (payload < base && appearance > base - STEP && base - STEP >= MIN_LEVEL) {
        state.charisma.skills.appearance = state.charisma.base - STEP;
      };
      if (payload < base && manipulation > base - STEP && base - STEP >= MIN_LEVEL) {
        state.charisma.skills.manipulation = state.charisma.base - STEP;
      };
      payload < MIN_LEVEL
        ? state.charisma.base = MIN_LEVEL
        : state.charisma.base = payload;
    },
    upIntimidation(state) {
      const {
        charisma: {
          base,
          skills: {
            intimidation,
          }
        }
      } = state;
      if (((intimidation + STEP) <= base) && ((intimidation + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.intimidation = state.charisma.skills.intimidation + STEP;
      };
    },
    upInsight(state) {
      const {
        charisma: {
          base,
          skills: {
            insight,
          }
        }
      } = state;
      if (((insight + STEP) <= base) && ((insight + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.insight = state.charisma.skills.insight + STEP;
      };
    },
    upAppearance(state) {
      const {
        charisma: {
          base,
          skills: {
            appearance,
          }
        }
      } = state;
      if (((appearance + STEP) <= base) && ((appearance + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.appearance = state.charisma.skills.appearance + STEP;
      };
    },
    upManipulation(state) {
      const {
        charisma: {
          base,
          skills: {
            manipulation,
          }
        }
      } = state;
      if (((manipulation + STEP) <= base) && ((manipulation + STEP) <= MAX_LEVEL_SKILL)) {
        state.charisma.skills.manipulation = state.charisma.skills.manipulation + STEP;
      };
    },

    getDamage(state) {
      const {
        force: {
          base,
        },
        options: {
          damage
        }
      } = state;
      if ((base + LIFE - damage) > MIN_LEVEL) {
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