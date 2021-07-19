export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const state = () => ({
  notifications: [],
});
export const getters = {
  findNotificationById: state => id => {
    return state.notifications.find(notification => notification.id === id);
  },
};
export const mutations = {
  [ADD_NOTIFICATION](state, payload) {
    state.notifications = [...state.notifications, { ...payload, id: Symbol('notification') }];
  },
  [REMOVE_NOTIFICATION](state, payload) {
    const index = payload;
    const notifications = [...state.notifications];
    if (index) {
      state.notifications.splice(index, 1);
    } else {
      notifications.shift();
    }
    state.notifications = [...notifications];
    return state.notifications;
  },
};
export const actions = {
  async add(
    {
      state: { notifications },
    },
    data,
  ) {
    // Keep a maximum of 5 messages displayed
    if (notifications.length >= 5) {
      commit(REMOVE_NOTIFICATION);
    }
    commit(ADD_NOTIFICATION, data);
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
    dispatch(REMOVE_NOTIFICATION);
  },
  close({ commit }, index) {
    commit(REMOVE_NOTIFICATION, index);
  },
};
