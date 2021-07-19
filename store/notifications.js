export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const state = () => ({
  list: [],
});
export const getters = {
  findNotificationById: state => id => {
    return state.list.find(notification => notification.id === id);
  },
};
export const mutations = {
  [ADD_NOTIFICATION](state, payload) {
    state.list = [...state.list, { ...payload, id: Symbol('notification') }];
  },
  [REMOVE_NOTIFICATION](state, payload) {
    const index = payload;
    const list = [...state.list];
    if (index) {
      state.list.splice(index, 1);
    } else {
      list.shift();
    }
    state.list = [...list];
    return state.list;
  },
};
export const actions = {
  async add(
    {
      state: { list },
      commit,
    },
    data,
  ) {
    // Keep a maximum of 5 messages displayed
    if (list.length >= 5) {
      commit(REMOVE_NOTIFICATION);
    }
    commit(ADD_NOTIFICATION, data);
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        // commit(REMOVE_NOTIFICATION);
        resolve();
      }, 4000),
    );
  },
  close({ commit }, index) {
    commit(REMOVE_NOTIFICATION, index);
  },
};
