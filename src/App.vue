<template>
  <div class="app">
    <router-view name="header" class="header" />
    <main class="main">
      <router-view name="content" />
    </main>
    <router-view name="footer" />
  </div>
</template>

<style lang="scss">
@import 'assets/scss/font_style';
@import 'assets/scss/normalize';

* {
  @include setFont('Merriweather-Regular', 14px);
  line-height: 21px;
}
.app {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main {
    display: flex;
    flex: 1;
    overflow-y: auto;
    background-color: $background_main_color;
  }
}
.main,
.header,
.footer {
  padding: 0 15px;
}

@media (min-width: 575.98px) {
  .main,
  .header,
  .footer {
    padding: 0 calc(50vw - 270px);
  }
}

@media (min-width: 767.98px) {
  .main,
  .header,
  .footer {
    padding: 0 calc(50vw - 360px);
  }
}

@media (min-width: 991.98px) {
  .main,
  .header,
  .footer {
    padding: 0 calc(50vw - 480px);
  }
}

@media (min-width: 1199.98px) {
  .main,
  .header,
  .footer {
    padding: 0 calc(50vw - 620px);
  }
}
</style>
