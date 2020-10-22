<template>
  <input
    :value="modelValue"
    type="text"
    class="text-input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-input {
  border: $border_main;
  background: transparent;
  outline: none;
  height: 48px;
  padding: 13px 15px;
  color: $text_main_color;
  @include setFont("Merriweather-Regular", 14px);
  line-height: 21px;
}
</style>
