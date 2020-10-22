<template>
  <div class="header">
    <img alt="logo" src="@/assets/logo.svg" />
    <div class="header-routes">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.to"
        class="header__route"
        >{{ route.name }}</router-link
      >
    </div>
    <div id="headerSide" class="header-side-container" />
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
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
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: $header_height;
  border-bottom: $border_main;
  background-color: $background_main_color;
  display: flex;
  align-items: center;
  &-routes {
    display: flex;
    padding: 0 24px;
  }
  &__route {
    color: $text_main_color;
    text-decoration: none;
    padding: 0 24px;
    @include setFont("Merriweather-Light", 14px);
    line-height: 21px;
  }
  &-side-container {
    margin-left: auto;
  }
}
</style>
