<template>
  <div>
    <div class="form-label-group">
      <input
        id="inputEmail"
        type="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        data-op-id="0"
      />
      <label for="inputEmail">Email address</label>
    </div>
    <div class="form-label-group">
      <textarea
        id="inputEmail"
        type="email"
        class="form-control"
        placeholder=" "
        required
        autofocus
        data-op-id="0"
      />
      <label for="inputEmail" style="background: white;border:none;"
        >How will you enjoy summer?</label
      >
      <!-- <span>0 / 25 Words</span> -->
    </div>
  </div>
</template>

<style scoped>
.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > textarea,
.form-label-group > label,
.form-label-group > span {
  /* height: 3.125rem; */
  padding: 0.75rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group > span {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown),
.form-label-group textarea:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-label-group textarea:not(:placeholder-shown) {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label,
.form-label-group textarea:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

.form-label-group input:not(:placeholder-shown) ~ label,
.form-label-group textarea:not(:placeholder-shown) ~ span {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
