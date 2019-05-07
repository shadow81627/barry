<template>
  <div style="padding: 0.25rem 0.75rem;font-size: 1.25rem;line-height: 1;">
    <input id="menu-33" v-b-toggle="'nav-collapse'" type="checkbox" />
    <label for="menu-33" class="m-0">
      <div class="menu-btn">
        <div class="menu-btn-part" />
        <div class="menu-btn-part" />
        <div class="menu-btn-part" />
      </div>
    </label>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

#menu-33 {
  display: none;
}

.menu-btn {
  transition: all 0.6s;
  position: relative;
  width: 43px;
  height: 43px;
  border-radius: 100%;
  cursor: pointer;

  &-part {
    width: 23px;
    height: 4px;
    position: absolute;
    background: white;
    right: 0;
    margin: auto;
    left: 0;
    border-radius: 1px;
    transition: all 0.6s cubic-bezier(0.5, 0, 0.4, 1.9);
    width: 23px;
    top: calc(50% - ((8px)) + -2px);

    &:nth-of-type(1) {
      top: calc(50% - ((8px)) + -2px);
      width: 23px;
    }

    &:nth-of-type(2) {
      top: calc(50% - ((8px)) + 4px);
      width: 17px;
    }

    &:nth-of-type(3) {
      top: calc(50% - ((8px)) + 10px);
      width: 11px;
    }
  }
}

:not(.collapsed) + label .menu-btn {
  transform: scale(1) rotate(180deg);
}

:not(.collapsed) + label .menu-btn .menu-btn-part:nth-of-type(1) {
  transform: rotate(45deg);
  width: 23px !important;
  top: calc(50% - (2px)) !important;
  background: black;
}

:not(.collapsed) + label .menu-btn .menu-btn-part:nth-of-type(2) {
  left: 18px !important;
  opacity: 0;
}

:not(.collapsed) + label .menu-btn .menu-btn-part:nth-of-type(3) {
  transform: rotate(-45deg);
  width: 23px !important;
  top: calc(50% - (2px)) !important;
  background: black;
}
</style>
