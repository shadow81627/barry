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
          placeholder: $t('entry.form.entry_text.placeholder'),
          'valid-feedback': currentWordCount,
          'invalid-feedback': currentWordCount,
          required: true,
        }"
        :state="$v.form.entry_text.$dirty ? !$v.form.entry_text.$error : null"
        @input="$v.form.entry_text.$touch()"
      />

      <FormField
        v-model.trim="form.first_name"
        v-bind="{
          id: 'first_name',
          type: 'text',
          placeholder: $t('entry.form.first_name.placeholder'),
          'valid-feedback': $t('entry.form.first_name.valid-feedback'),
          'invalid-feedback': $t('entry.form.first_name.invalid-feedback'),
          required: true,
        }"
        :state="$v.form.first_name.$dirty ? !$v.form.first_name.$error : null"
        @input="$v.form.first_name.$touch()"
      />

      <FormField
        v-model.trim="form.last_name"
        v-bind="{
          id: 'last_name',
          type: 'text',
          placeholder: $t('entry.form.last_name.placeholder'),
          'valid-feedback': $t('entry.form.last_name.valid-feedback'),
          'invalid-feedback': $t('entry.form.last_name.invalid-feedback'),
          required: true,
        }"
        :state="$v.form.last_name.$dirty ? !$v.form.last_name.$error : null"
        @input="$v.form.last_name.$touch()"
      />

      <FormField
        v-model.trim="form.email"
        v-bind="{
          id: 'email',
          type: 'email',
          placeholder: $t('entry.form.email.placeholder'),
          'valid-feedback': $t('entry.form.email.valid-feedback'),
          'invalid-feedback': $t('entry.form.email.invalid-feedback'),
          required: true,
        }"
        :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
        @input="$v.form.email.$touch()"
      />

      <div class="form-row">
        <FormField
          v-model.trim="form.country_iso"
          v-bind="{
            id: 'country_iso',
            type: 'select',
            placeholder: $t('entry.form.country_iso.placeholder'),
            'valid-feedback': $t('entry.form.country_iso.valid-feedback'),
            'invalid-feedback': $t('entry.form.country_iso.invalid-feedback'),
            options: countries,
            required: true,
          }"
          class="col form-select"
          :state="$v.form.country_iso.$dirty ? !$v.form.country_iso.$error : null"
          @input="$v.form.country_iso.$touch()"
        />
        <FormField
          v-show="this.$store.state.currentFormData.country_iso === 'AU'"
          v-model.trim="form.postcode"
          v-bind="{
            id: 'postcode',
            type: 'text',
            placeholder: $t('entry.form.postcode.placeholder'),
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
          :state="$v.form.postcode.$dirty ? !$v.form.postcode.$error : null"
          @input="$v.form.postcode.$touch()"
        />
      </div>

      <div class="form-row">
        <label for="dob" class="col-12 col-sm-3">
          {{ $t('entry.form.dob.placeholder') }}
        </label>
        <FormField id="day" name="day" type="text" placeholder="Day" class="col-4 col-sm-3" />
        <FormField id="month" name="month" type="text" placeholder="Month" class="col-4 col-sm-3" />
        <FormField
          id="year"
          name="year"
          type="number"
          maxlength="4"
          minlength="4"
          pattern="\d*"
          placeholder="Year"
          class="col-4 col-sm-3"
        />
      </div>

      <FormField
        v-bind="{
          id: 'opt_in',
          type: 'checkbox',
          value: 1,
        }"
        class="checkbox"
        :state="$v.form.opt_in.$dirty ? !$v.form.opt_in.$error : null"
      >
        <b-form-checkbox
          id="opt_in"
          v-model="form.opt_in"
          name="opt_in"
          :value="1"
          :unchecked-value="0"
          :state="$v.form.opt_in.$dirty ? !$v.form.opt_in.$error : null"
          @change="$v.form.opt_in.$touch()"
        >
          <span v-html="$t('entry.form.opt_in')" />
        </b-form-checkbox>
      </FormField>

      <FormField
        v-bind="{
          id: 'opt_in',
          type: 'checkbox',
          value: 1,
        }"
        class="checkbox"
        :state="$v.form.opt_in.$dirty ? !$v.form.opt_in.$error : null"
      >
        <b-form-checkbox
          id="teq_opt_in"
          v-model="form.teq_opt_in"
          name="teq_opt_in"
          :value="1"
          :unchecked-value="0"
          :state="$v.form.teq_opt_in.$dirty ? !$v.form.teq_opt_in.$error : null"
          @change="$v.form.teq_opt_in.$touch()"
        >
          <span v-html="$t('entry.form.teq_opt_in')" />
        </b-form-checkbox>
      </FormField>

      <button type="submit" class="[ btn btn--green ] [ entry-form__cta ]">
        <span v-if="!ctaLoading">{{ $t('entry.form.submit') }}</span>
        <i v-else class="fa fa-circle-o-notch fa-spin fa-fw" />
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minValue, maxValue, requiredIf } from 'vuelidate/lib/validators';

import { mapMutations } from 'vuex';

import FormField from '@/components/FormField/FormField.vue';

import EventBus from '@/assets/js/EventBus.js';

import axios from 'axios';

const wordLimit = param => value => value.trim().split(' ').length <= param;

export default {
  components: {
    FormField,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      entry_text: {
        required,
        wordLimit: wordLimit(25),
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: {
        required,
        email,
      },
      country_iso: {
        required,
      },
      postcode: {
        required: requiredIf(function(value) {
          return this.$store.state.currentFormData.country_iso === 'AU';
        }),
        minValue: minValue(200),
        maxValue: maxValue(9999),
      },
      opt_in: {
        required,
        minValue: minValue(1),
      },
      teq_opt_in: {},
    },
  },
  data() {
    return {
      countries: this.$store.state.countries,
      ctaLoading: false,
      form: {
        locale: this.$store.state.i18n.locale,
        secret: process.env.API_SECRET,
        first_name: null,
        last_name: null,
        email: null,
        country_iso: '',
        hash: null,
        entry_text: '',
        dob: '1904-02-31',
        opt_in: 0,
        teq_opt_in: 0,
      },
    };
  },
  computed: {
    currentWordCount: function() {
      return `${
        this.$store.state.currentFormData.entry_text.length === 0
          ? this.$n(0)
          : this.$store.state.currentFormData.entry_text.trim().split(' ').length
      } / ${this.$n(25)} ${this.$t('entry.form.word_count')}`;
    },
  },
  methods: {
    ...mapMutations(['setEntrant']),
    submitForm(event) {
      event.preventDefault();
      this.$store.commit('setFormSubmitted', true);

      this.$v.form.$touch();

      if (!this.$v.form.$error) {
        const url = `${process.env.API_BASE_URL}/api/enter`;

        axios
          .post(url, this.form)
          .then(response => {
            console.log(response);
            // Set entrant in vuex store
            this.$store.commit('setEntrant', { ...this.form, hash: response.data.hash });

            // Trigger event
            EventBus.$emit('entry-confirmed', true);
            this.$router.push(this.localePath('confirmation'));
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
      }
    },
  },
};
</script>

<style scoped>
.checkbox {
  color: #a2b8c1;
}
</style>
