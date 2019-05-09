<template>
  <div class="entry-form">
    <h4>{{ $t('emailshare.form.heading') }}</h4>
    <form autocomplete="off" novalidate @submit.prevent="send()">
      <div v-for="(v, index) in $v.friends.$each.$iter" :key="index" class="ff-modal__item">
        <FormField
          v-model.trim="v.first_name.$model"
          v-bind="{
            id: `first_name-${index}`,
            type: 'text',
            placeholder: $t('emailshare.form.first_name'),
          }"
          :state="v.first_name.$dirty ? !v.first_name.$error : null"
          @input="v.first_name.$touch()"
        />
        <FormField
          v-model.trim="v.last_name.$model"
          v-bind="{
            id: `last_name-${index}`,
            type: 'text',
            placeholder: $t('emailshare.form.last_name'),
          }"
          :state="v.last_name.$dirty ? !v.last_name.$error : null"
          @input="v.last_name.$touch()"
        />
        <FormField
          v-model.trim="v.email.$model"
          v-bind="{
            id: `email-${index}`,
            type: 'email',
            placeholder: $t('emailshare.form.email'),
          }"
          :state="v.email.$dirty ? !v.email.$error : null"
          @input="v.email.$touch()"
        />

        <span v-show="friends.length > 1" class="ff-modal__remove" @click="removeFriend(index)">
          <i class="fa fa-trash-o" />
        </span>
      </div>

      <span v-show="friends.length < 3" class="ff-modal__add" @click="addFriend()"
        >[+] {{ $t('emailshare.form.add') }}</span
      >

      <button type="submit" class="[ btn btn--green ] [ entry-form__cta ]">
        <span v-if="!ctaLoading">{{ $t('emailshare.form.submit') }}</span>
        <i v-else class="fa fa-circle-o-notch fa-spin fa-fw" />
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

import axios from 'axios';
import EventBus from '@/assets/js/EventBus.js';

import FormField from '@/components/FormField/FormField.vue';

export default {
  components: {
    FormField,
  },
  mixins: [validationMixin],
  validations: {
    friends: {
      required,
      minLength: minLength(3),
      $each: {
        first_name: {
          required,
          minLength: minLength(2),
        },
        last_name: {
          required,
          minLength: minLength(2),
        },
        email: {
          required,
          email,
          minLength: minLength(2),
        },
      },
    },
  },
  data: function() {
    return {
      entrant: this.$store.state.entrant,
      friends: [
        {
          first_name: null,
          last_name: null,
          email: null,
        },
      ],
      ctaLoading: false,
    };
  },
  methods: {
    addFriend() {
      if (this.friends.length < 3) {
        const clone = {
          first_name: null,
          last_name: null,
          email: null,
        };
        this.friends.push(clone);
      }
    },
    removeFriend(index) {
      this.friends.splice(index, 1);
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
        })
        .catch(error => {
          EventBus.$emit('notification', {
            type: 'error',
            message: 'Error submitting entry.',
          });
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    },
  },
};
</script>
