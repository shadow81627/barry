<template>
  <div class="notification">
    <transition-group name="list-complete">
      <div
        v-for="(notification, index) in notifications"
        :key="notification.message"
        :class="`[ notification__item notification--${notification.type} ]`"
        class="list-complete-item"
      >
        <button class="[ notification__close ] close" @click="close(index)">
          <i class="fa fa-times" aria-hidden="true" />
        </button>
        <h4>{{ notification.type }}</h4>
        {{ notification.message }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notifications;
    },
  },
  methods: {
    close(index) {
      this.$store.notifications.close(index);
    },
  },
};
</script>
