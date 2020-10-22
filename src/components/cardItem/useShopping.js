import { computed } from 'vue';

export default function (props, { emit }) {
  const inTheCart = computed(() => props.cart.includes(props.item.id));
  const addToCart = () => {
    emit(
      'update:cart',
      inTheCart.value
        ? props.cart.filter((id) => id !== props.item.id)
        : [...props.cart, props.item.id],
    );
  };
  return { inTheCart, addToCart };
}
