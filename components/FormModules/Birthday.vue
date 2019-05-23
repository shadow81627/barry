<template>
  <div class="form-row">
    <label for="dob" class="col-12 col-sm-3 col-form-label">
      {{ $t('entry.form.dob.placeholder') }}
    </label>
    <SelectInput
      id="day"
      v-model="day"
      name="day"
      :placeholder="dayPlaceholder"
      class="col-4 col-sm-3"
      :options="days"
      :state="state"
      @input="$emit('input', dob)"
    />
    <SelectInput
      id="month"
      v-model="month"
      name="month"
      type="number"
      :placeholder="monthPlaceholder"
      class="col-4 col-sm-3"
      :options="months"
      :state="state"
      @input="$emit('input', dob)"
    />
    <BaseInput
      id="year"
      v-model="year"
      name="year"
      type="text"
      :maxlength="4"
      minlength="4"
      pattern="\d*"
      :placeholder="yearPlaceholder"
      class="col-4 col-sm-3"
      trim
      :state="state"
      @input="$emit('input', dob)"
    />
  </div>
</template>

<script>
import BaseInput from '@/components/FormModules/BaseInput';
import SelectInput from '@/components/FormModules/SelectInput';

export default {
  components: {
    BaseInput,
    SelectInput,
  },
  extends: BaseInput,
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Date],
    },
    state: { type: Boolean },
    dayPlaceholder: { type: String, default: 'Day' },
    monthPlaceholder: { type: String, default: 'Month' },
    yearPlaceholder: { type: String, default: 'Year' },
    months: {
      type: Array,
      default: () => [
        { value: 1, text: 'January' },
        { value: 2, text: 'Febuary' },
        { value: 3, text: 'March' },
        { value: 4, text: 'April' },
        { value: 5, text: 'May' },
        { value: 6, text: 'June' },
        { value: 7, text: 'July' },
        { value: 8, text: 'August' },
        { value: 9, text: 'September' },
        { value: 10, text: 'October' },
        { value: 11, text: 'November' },
        { value: 12, text: 'December' },
      ],
    },
  },
  data: () => ({
    // day: new Date().getDay(),
    // month: new Date().getMonth(),
    // year: new Date().getFullYear() - 18,
    day: '',
    month: '',
    year: null,
  }),
  computed: {
    days() {
      return this.daysInMonth(this.month, this.year);
    },
    dob() {
      if (this.year && this.month && this.day) {
        const temp = `${this.year}-${this.month
          .toString()
          .padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`;
        console.log(temp);
        return temp;
      }
      return null;
    },
    inputs() {
      return [
        {
          id: 'month',
          model: this.month,
          name: 'month',
          type: 'number',
          placeholder: 'Month',
          options: 12,
        },
      ];
    },
  },
  methods: {
    daysInMonth(month, year = 1904) {
      return new Date(year, month, 0).getDate();
    },
  },
};
</script>
