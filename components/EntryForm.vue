<template>
  <div class="entry-form">
    <form novalidate @submit.prevent="submitForm">
      <h2>{{ $t('entry.form.heading') }}</h2>
      <p>{{ $t('entry.form.cta') }}</p>

      <FormField
        v-model.trim="form.entry_text"
        v-bind="{
          id: 'entry_text',
          type: 'textarea',
          placeholder: $t('entry.form.entry_text'),
          required: true,
        }"
      />

      <div class="text-right">
        <b-form-text id="overlay" class="word-count"
          >{{
            this.$store.state.currentFormData.entry_text.length === 0
              ? $n(0)
              : this.$store.state.currentFormData.entry_text.trim().split(' ').length
          }}
          / {{ $n(25) }} {{ $t('entry.form.word_count') }}</b-form-text
        >
      </div>

      <FormField
        v-model.trim="form.first_name"
        v-bind="{
          id: 'first_name',
          type: 'text',
          placeholder: $t('entry.form.first_name'),
          required: true,
        }"
        :state="$v.form.first_name.$dirty ? !$v.form.first_name.$error : null"
      />

      <FormField
        v-model.trim="form.last_name"
        v-bind="{
          id: 'last_name',
          type: 'text',
          placeholder: $t('entry.form.last_name'),
          required: true,
        }"
        :state="$v.form.last_name.$dirty ? !$v.form.last_name.$error : null"
      />

      <FormField
        v-model.trim="form.email"
        v-bind="{
          id: 'email',
          type: 'email',
          placeholder: $t('entry.form.email'),
          required: true,
        }"
      />

      <div class="form-row">
        <FormField
          v-bind="{
            id: 'country_iso',
            type: 'select',
            placeholder: $t('entry.form.country_iso'),
            options: countries,
            required: true,
          }"
          class="col-12 col-md-8 form-select"
        />
        <FormField
          v-bind="{
            id: 'postcode',
            type: 'text',
            placeholder: $t('entry.form.postcode'),
          }"
          class="col-12 col-md-4"
          :disabled="this.$store.state.currentFormData.country_iso !== 'AU'"
          :change="
            this.$store.commit({
              type: 'setFormDataById',
              id: 'postcode',
              value:
                this.$store.state.currentFormData.country_iso !== 'AU'
                  ? ''
                  : this.$store.state.currentFormData.postcode,
            })
          "
          :required="this.$store.state.currentFormData.country_iso === 'AU'"
          pattern="\d*"
          maxlength="4"
        />
      </div>

      <div class="form-row">
        <label for="dob" class="col-12 col-sm-3">
          Birthday
        </label>
        <FormField id="day" name="day" type="text" placeholder="Day" class="col-4 col-sm-3" />
        <FormField id="month" name="month" type="text" placeholder="Month" class="col-4 col-sm-3" />
        <FormField id="year" name="year" type="text" placeholder="Year" class="col-4 col-sm-3" />
      </div>

      <FormField
        v-bind="{
          id: 'opt_in',
          type: 'checkbox',
          options: [{ text: $t('entry.form.opt_in'), value: '1', required: true }],
        }"
        class="checkbox"
      />

      <FormField
        v-bind="{
          id: 'teq_opt_in',
          type: 'checkbox',
          options: [{ text: $t('entry.form.partner_opt_in'), value: '1' }],
        }"
        class="checkbox"
      />

      <FormField
        v-bind="{
          id: 'submit',
          type: 'submit',
          value: $t('entry.form.submit'),
        }"
      />
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

import { mapActions, mapMutations } from 'vuex';
import FormField from '@/components/FormField/FormField.vue';

import EventBus from '@/assets/js/EventBus.js';

import axios from 'axios';

export default {
  components: {
    FormField,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      entry_text: {
        required,
        // word_count,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        email,
        required: required,
      },
    },
  },
  data() {
    return {
      countries: this.$store.state.countries,
      states: this.$store.state.states,
      ctaLoading: false,
      form: {
        first_name: null,
        last_name: null,
        email: null,
        country_iso: '',
        hash: null,
        entry_text: '',
        dob: '',
      },
    };
  },
  methods: {
    ...mapActions(['validate', 'submit', 'fetchSchema']),
    ...mapMutations(['setCurrentFormData']),
    async submitForm(event) {
      event.preventDefault();
      this.$store.commit('setFormSubmitted', true);

      this.$v.form.$touch();

      // // Collect form field values
      // const formObject = {};
      // new FormData(event.target).forEach((value, key) => {
      //   formObject[key] = value;
      // });
      // formObject.secret = process.env.API_SECRET;
      // formObject.opt_in = formObject.opt_in ? 1 : 0;

      // // Set currentformdata
      // this.$store.commit('setCurrentFormData', formObject);

      const valid = await this.validate();

      if (valid) {
        // await this.submit();

        // const url = `${process.env.API_BASE_URL}/api/enter`;

        this.submit()
          // .post(url, formObject)
          .then(response => {
            console.log(response);
            // Trigger event
            EventBus.$emit('entry-confirmed', true);
            this.$router.push(this.localePath('confirmation'));
          })
          .catch(error => {
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
      }
    },
    enterCompetition() {
      this.ctaLoading = true;

      // Set API secret
      this.entrant.secret = process.env.API_SECRET;
      this.entrant.opt_in = this.entrant.opt_in ? 1 : 0;

      const url = `${process.env.API_BASE_URL}/api/enter`;

      axios.post(url, this.entrant).then(response => {
        this.ctaLoading = false;

        if (response.data.success) {
          // Set entrant's hash
          this.entrant.hash = response.data.hash;

          // Save entrant modal in store
          this.$store.state.entrant = this.entrant;

          // Trigger event
          EventBus.$emit('entry-confirmed', true);
        } else {
          EventBus.$emit('notification', {
            type: 'error',
            message: 'Error submitting entry.',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.checkbox {
  color: #a2b8c1;
}
</style>
