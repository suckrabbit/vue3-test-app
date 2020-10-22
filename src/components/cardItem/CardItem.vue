<template>
  <div :class="{ 'card-item_sold': item.sold }" class="card-item">
    <div :style="{ backgroundImage: `url(${img})` }" class="card-item__image" />
    <div class="card-info">
      <h2>«{{ item.title }}» {{ item.author }}</h2>
      <div class="card-shopping">
        <h3 v-if="item.sold">Продана на аукционе</h3>
        <template v-else>
          <div class="card-price">
            <h5
              v-if="item.oldPrice"
              class="card-price__price card-price__price_old"
            >
              {{ item.oldPrice }} {{ item.currency }}
            </h5>
            <h3 class="card-price__price">
              {{ item.currentPrice }} {{ item.currency }}
            </h3>
          </div>
          <VButton :active="inTheCart" @click="addToCart">{{
            inTheCart ? 'В корзине' : 'Купить'
          }}</VButton>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/common/VButton.vue';
import useShopping from './useShopping';
import useImage from './useImage';

export default {
  name: 'CardItem',
  components: {
    VButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  setup(props, args) {
    return { ...useImage(props), ...useShopping(props, args) };
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  height: 328px;
  color: $text_main_color;
  width: $card_item_width;
  border: $border_main;
  display: flex;
  flex-direction: column;
  &_sold {
    opacity: 0.5;
  }
  &__image {
    height: 160px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
.card-info {
  padding: 24px;
  padding-top: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-shopping {
  margin-top: auto;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-price {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__price {
    margin: 0;
    &_old {
      text-decoration: line-through;
      color: $text_disable_color;
    }
  }
}
</style>
