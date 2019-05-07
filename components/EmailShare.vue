<template>
  <div class="entry-form">
    <h4>{{ $t('emailshare.form.heading') }}</h4>
    <form autocomplete="off" novalidate @submit.prevent="send()">
      <div v-for="(friend, index) in friends" :key="index" class="ff-modal__item">
        <FormField
          v-bind="{
            id: `first_name-${index}`,
            type: 'text',
            placeholder: $t('emailshare.form.first_name'),
          }"
        />
        <FormField
          v-bind="{
            id: `last_name-${index}`,
            type: 'text',
            placeholder: $t('emailshare.form.last_name'),
          }"
        />
        <FormField
          v-bind="{
            id: `email-${index}`,
            type: 'email',
            placeholder: $t('emailshare.form.email'),
          }"
        />

        <span v-show="friends.length > 1" class="ff-modal__remove" @click="removeFriend(index)">
          <i class="fa fa-trash-o" />
        </span>
      </div>

      <span v-show="friends.length < 3" class="ff-modal__add" @click="addFriend()"
        >[+] {{ $t('emailshare.form.add') }}</span
      >

      <FormField
        v-bind="{
          id: 'submit',
          type: 'submit',
          value: $t('emailshare.form.submit'),
        }"
      />
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import axios from 'axios';
import event from '@/assets/js/EventBus.js';

import FormField from '@/components/FormField/FormField.vue';

export default {
  components: {
    FormField,
  },
  data() {
    return {
      entrant: this.$store.state.currentFormData,
      friends: this.$store.state.friends,
      ctaLoading: false,
    };
  },
  methods: {
    ...mapMutations(['addFriend', 'removeFriend']),
    validateBeforeSubmit(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.send();
        }
      });
    },
    send() {
      this.ctaLoading = true;

      const url = `${process.env.API_BASE_URL}/api/email_share`;

      axios
        .post(url, {
          secret: process.env.API_SECRET,
          hash: this.entrant.hash,
          friend: this.friends,
        })
        .then(response => {
          if (response.data.success) {
            // Reset
            this.friends = [
              {
                first_name: null,
                last_name: null,
                email: null,
              },
            ];

            this.ctaLoading = false;
            event.$emit('notification', {
              type: 'success',
              message: 'Forward to friend successful.',
            });
          } else {
            event.$emit('notification', {
              type: 'error',
              message: 'Error processing event data.',
            });
          }
        });
    },
  },
};
</script>
