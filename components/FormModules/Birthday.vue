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
    day: '',
    month: '',
    year: null,
  }),
  computed: {
    days() {
      return this.daysInMonth(this.month - 1, this.year);
    },
    dob() {
      if (this.year && this.month && this.day && !isNaN(Number(this.year))) {
        const tempDate = new Date(this.year, this.month - 1, this.day);
        if (tempDate) {
          return `${tempDate.getFullYear()}-${(tempDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${tempDate
            .getDate()
            .toString()
            .padStart(2, '0')}`;
        }
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
      if (!isNaN(Number(this.year))) {
        return new Date(year, month, 0).getDate();
      }
      return new Date(1904, month, 0).getDate();
    },
    formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
  },
};
</script>
