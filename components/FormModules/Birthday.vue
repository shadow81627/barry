<template>
  <div class="form-row">
    <label for="dob" class="col-12 col-sm-3 col-form-label">
      {{ $t('entry.form.dob.placeholder') }}
    </label>
    <SelectInput
      id="month"
      v-model="month"
      name="month"
      type="number"
      placeholder="Month"
      class="col-4 col-sm-3"
      :options="months"
      @input="$emit('input', dob)"
    />
    <SelectInput
      id="day"
      v-model="day"
      name="day"
      placeholder="Day"
      class="col-4 col-sm-3"
      :options="days"
      @input="$emit('input', dob)"
    />
    <BaseInput
      id="year"
      v-model="year"
      name="year"
      type="number"
      :maxvalue="4"
      minvalue="4"
      pattern="\d*"
      placeholder="Year"
      class="col-4 col-sm-3"
      trim
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
      type: String,
    },
  },
  data: () => ({
    // day: new Date().getDay(),
    // month: new Date().getMonth(),
    // year: new Date().getFullYear() - 18,
    day: '',
    month: '',
    year: null,
    months: 12,
  }),
  computed: {
    days() {
      return this.daysInMonth(this.month, this.year);
    },
    dob() {
      const dob = new Date(this.year, this.month, this.day);
      console.log(dob);
      return dob;
    },
  },
  methods: {
    daysInMonth(month, year = 1904) {
      // Use 1 for January, 2 for February, etc.
      return new Date(year, month, 0).getDate();
    },
  },
};
</script>
