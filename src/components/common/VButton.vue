<template>
  <button :class="{'btn_active': active}" class="btn">
    <CheckIcon v-if="active" class="btn__icon" />
    <slot />
  </button>
</template>

<script>
import CheckIcon from '@/components/icons/CheckIcon.vue';

export default {
  components: {
    CheckIcon,
  },
  name: 'VButton',
  props: {
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  min-width: 118px;
  height: 48px;
  border: 0;
  outline: none;
  background-color: $btn_color;
  color: $text_light_color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: $btn_color_hover;
  }
  &:disabled {
    background-color: $btn_color_disabled;
    cursor: not-allowed;
  }
  &_active {
    background-color: $btn_color_active;
  }
  &__icon {
    margin-right: 7px;
  }
}
</style>
