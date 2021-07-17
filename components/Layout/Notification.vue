<template>
  <div class="notification">
    <transition-group name="list-complete">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
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
import EventBus from '@/assets/js/EventBus.js';

export default {
  data: function() {
    return {
      notifications: [],
    };
  },
  mounted: function() {
    // Listening to event notification from app
    EventBus.$on('notification', this.add);
  },
  methods: {
    add: function(message) {
      // Keep a maximum of 5 messages displayed
      if (this.notifications.length >= 5) {
        this.notifications.shift();
      }

      // Push to message to notifications array
      this.notifications.push(message);

      const self = this;

      // Self close earliest notification after 8 secs
      const timer = global.setInterval(function() {
        if (self.notifications.length > 0) {
          setTimeout(function() {
            self.notifications.shift();
          }, 5000);
        } else {
          global.clearInterval(timer);
        }
      }, 5000);
    },
    close: function(index) {
      this.notifications.splice(index, 1);
    },
  },
};
</script>
