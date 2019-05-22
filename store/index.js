// Form select input options
import countries from '@/assets/json/countries.json';

export const state = {
  entrant: {
    secret: process.env.API_SECRET,
    first_name: null,
    last_name: null,
    email: null,
    country_iso: '',
    hash: null,
    entry_text: '',
    dob: '1904-02-25',
    opt_in: 0,
  },

  countries,

  // Form submitted true display all form field messages ~formDirty
  formSubmitted: false,
  // Set of validation for form fields, returned by the subforms-api
  serverValidation: [],

  cookieAccepted: localStorage.getItem('cookieAccepted') || false,
};

export const mutations = {
  setCookieAccepted(currentState, cookieAccepted) {
    const newState = currentState;
    localStorage.setItem('cookieAccepted', true);
    newState.cookieAccepted = cookieAccepted;
  },
  addMessage(currentState, messages) {
    const newState = currentState;
    if (messages) {
      newState.messages = { ...currentState.messages, ...messages };
    } else {
      newState.messages = {};
    }
  },
  setServerValidation(currentState, serverValidation) {
    const newState = currentState;
    if (serverValidation) {
      newState.serverValidation = serverValidation;
    } else {
      newState.serverValidation = [];
    }
  },
  setEntrant(currentState, currentEntrant) {
    const newState = currentState;
    if (currentEntrant) {
      newState.entrant = currentEntrant;
    } else {
      newState.currentEntrant = {};
    }
  },
  addFriend(currentState) {
    const newState = currentState;
    if (currentState.friends.length < 3) {
      const clone = {
        first_name: null,
        last_name: null,
        email: null,
      };
      newState.friends.push(clone);
    }
  },
  removeFriend(currentState, index) {
    const newState = currentState;
    newState.friends.splice(index, 1);
  },
};

export const actions = {
  async setServerValidation({ commit }, payload) {
    await commit('setServerValidation', payload);
  },
};
