<template>
  <div class="entry-form">
    <form novalidate @submit.prevent="submitForm">
      <h2>{{ $t('entry.form.heading') }}</h2>

      <FormField
        v-model.trim="form.entry_text"
        v-bind="{
          id: 'entry_text',
          type: 'textarea',
          label: $t('entry.form.entry_text.label'),
          placeholder: $t('entry.form.entry_text.placeholder'),
          'valid-feedback': null,
          'invalid-feedback': null,
          required: true,
        }"
        :state="$v.form.entry_text.$dirty ? !$v.form.entry_text.$error : null"
        :maxlength="8000"
        rows="4"
        @input="$v.form.entry_text.$touch()"
      >
        <template #description>
          <b-form-text :text-variant="wordCountColor">
            <span :class="{ 'font-weight-bold': countWords(form.entry_text) > 25 }">{{
              currentWordCountText
            }}</span>
          </b-form-text>
        </template>
      </FormField>

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
          v-show="this.form.country_iso === 'AU'"
          v-model.trim="form.postcode"
          v-bind="{
            id: 'postcode',
            type: 'text',
            placeholder: $t('entry.form.postcode.placeholder'),
          }"
          class="col-12 col-md-4"
          :disabled="form.country_iso !== 'AU'"
          :required="form.country_iso === 'AU'"
          pattern="\d*"
          :maxlength="4"
          :state="$v.form.postcode.$dirty ? !$v.form.postcode.$error : null"
          @input="$v.form.postcode.$touch()"
        />
      </div>

      <FormField id="dob">
        <Birthday
          id="dob"
          v-model="form.dob"
          :months="$t('entry.form.dob.month.options')"
          :day-placeholder="$t('entry.form.dob.day.placeholder')"
          :month-placeholder="$t('entry.form.dob.month.placeholder')"
          :year-placeholder="$t('entry.form.dob.year.placeholder')"
          :state="$v.form.dob.$dirty ? !$v.form.dob.$error : null"
          @change="$v.form.dob.$touch()"
        />
      </FormField>

      <FormField
        v-bind="{
          id: 'opt_in',
          type: 'checkbox',
          value: 1,
        }"
        class="checkbox m-0"
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
        class="checkbox m-0"
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

      <small class="text-muted" v-html="$t('entry.form.teq_opt_in_info')" />

      <button
        type="submit"
        class="[ btn btn--green ] [ entry-form__cta ]"
        :disabled="ctaLoading"
        :class="{ disabled: ctaLoading }"
      >
        <span v-if="!ctaLoading">{{ $t('entry.form.submit') }}</span>
        <i v-else class="fa fa-circle-o-notch fa-spin fa-fw" />
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minValue, requiredIf, maxLength } from 'vuelidate/lib/validators';

import { mapMutations } from 'vuex';

import FormField from '@/components/FormField/FormField.vue';
import Birthday from '@/components/FormModules/Birthday';

import EventBus from '@/assets/js/EventBus.js';

import axios from 'axios';

const wordLimit = param => value => value.trim().split(' ').length < param;

export default {
  components: {
    FormField,
    Birthday,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      entry_text: {
        required,
        wordLimit: wordLimit(50),
        maxlength: maxLength(8000),
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
        requiredIf: requiredIf(function(value) {
          return this.form.country_iso === 'AU';
        }),
      },
      dob: {
        required,
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
        postcode: null,
        hash: null,
        entry_text: '',
        dob: null,
        opt_in: 0,
        teq_opt_in: 0,
      },
    };
  },
  computed: {
    currentWordCountText: function() {
      // display word count text
      return `${
        this.form.entry_text.length === 0 ? this.$n(0) : this.countWords(this.form.entry_text)
      } / ${this.$n(25)} ${this.$t('entry.form.word_count')}`;
    },
    wordCountColor: function() {
      // Set word count description display color based on word count
      if (this.$v.form.entry_text.$dirty) {
        if (this.$v.form.entry_text.$error) {
          return 'danger';
        }
        return this.countWords(this.form.entry_text) > 25 ? 'warning' : 'success';
      }
      return 'muted';
    },
  },
  methods: {
    ...mapMutations(['setEntrant']),
    async submitForm(event) {
      event.preventDefault();
      const vm = this;
      this.ctaLoading = true;

      this.$gtm.pushEvent({
        event: 'formSubmission',
        formType: 'Competition Entry',
        formValid: false,
      });

      this.$v.form.$touch();

      if (!this.$v.form.$error) {
        this.$gtm.pushEvent({
          event: 'formSubmission',
          formType: 'Competition Entry',
          formValid: true,
        });
        const url = `${process.env.API_BASE_URL}/api/enter`;

        await axios
          .post(url, this.form)
          .then(response => {
            console.log(response);
            // Set entrant in vuex store
            this.$store.commit('setEntrant', { ...this.form, hash: response.data.hash });

            // Set other levels tag for teq opt in
            if (vm.form.teq_opt_in === 1) {
              _ol('setTag', 'TEQOptIn', 1, 'numeric', function() {});
            }
            _ol('setTag', 'TEQOptIn', 0, 'numeric', function() {});

            // Trigger event
            EventBus.$emit('entry-confirmed', true);
            EventBus.$emit('notification', {
              type: 'success',
              message: 'Entry successful.',
            });
            this.$router.push(this.localePath('confirm'));
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
          })
          .finally(function() {
            vm.ctaLoading = false;
          });
      }
      this.ctaLoading = false;
    },
    countWords(words) {
      return words.trim().split(' ').length;
    },
  },
};
</script>

<style scoped>
.checkbox {
  color: #a2b8c1;
}
</style>
