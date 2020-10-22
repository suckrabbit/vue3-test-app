<template>
  <div class="footer">
    <img alt="logo" src="@/assets/logo.svg" />
    <div class="footer-routes">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.to"
        class="footer__route"
        >{{ route.name }}</router-link
      >
    </div>
    <div class="footer-contacts">
      <div class="footer-contacts__item">
        <PhoneIcon class="footer-contacts__icon" />
        <span>{{ contacts.phone }}</span>
      </div>
      <div class="footer-contacts__item">
        <PinIcon class="footer-contacts__icon" />
        <span>{{ contacts.address }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import PinIcon from '@/components/icons/PinIcon.vue';

export default {
  name: 'TheFooter',
  components: {
    PhoneIcon,
    PinIcon,
  },
  setup() {
    const routes = [
      {
        name: 'Каталог',
        to: '/',
      },
      {
        name: 'Доставка',
        to: '/',
      },
      {
        name: 'Оплата',
        to: '/',
      },
      {
        name: 'Контакты',
        to: '/',
      },
      {
        name: 'О галерее',
        to: '/',
      },
    ];
    const contacts = computed(() => useStore().state.contacts);
    return {
      routes,
      contacts,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  height: $footer_height;
  background-color: $background_helper_color;
  display: flex;
  align-items: center;
  color: $text_helper_color;
  &-routes {
    display: flex;
    padding: 0 24px;
  }
  &__route {
    color: inherit;
    text-decoration: none;
    padding: 0 24px;
    @include setFont('Merriweather-Light', 14px);
    line-height: 21px;
    white-space: nowrap;
  }
  &-contacts {
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
    &__item {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }
    &__icon {
      margin-right: 9px;
    }
  }
}
@media (max-width: 991.98px) {
  .footer-routes {
    display: none;
  }
}
</style>
