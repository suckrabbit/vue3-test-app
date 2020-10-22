<template>
  <div class="paintings">
    <h1 class="paintings-title">Картины эпохи Возрождения</h1>
    <div class="paintings-list">
      <CardItem v-for="item in paintings" :key="item.id" :item="item" v-model:cart="cart" />
    </div>
    <teleport to="#headerSide">
      <div class="search-field">
        <VInput v-model="search" placeholder="Поиск по названию картины" />
        <VButton>Найти</VButton>
      </div>
    </teleport>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';

import CardItem from '@/components/cardItem/CardItem.vue';
import VButton from '@/components/common/VButton.vue';
import VInput from '@/components/common/VInput.vue';

export default {
  components: {
    CardItem,
    VButton,
    VInput,
  },
  name: 'PagePaintings',
  setup() {
    const search = ref('');
    const cart = ref([]);
    const items = [
      {
        id: 1,
        author: 'Сандро Боттичелли',
        title: 'Рождение Венеры',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/350px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
        oldPrice: 2000000,
        currentPrice: 1000000,
        currency: '$',
        sold: false,
      },
      {
        id: 2,
        author: 'Леонардо да Винчи',
        title: 'Тайная вечеря',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/350px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
        oldPrice: null,
        currentPrice: 3000000,
        currency: '$',
        sold: false,
      },
      {
        id: 3,
        author: 'Микеланджело',
        title: 'Сотворение Адама',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/God2-Sistine_Chapel.png/1200px-God2-Sistine_Chapel.png',
        oldPrice: 6000000,
        currentPrice: 5000000,
        currency: '$',
        sold: false,
      },
      {
        id: 4,
        author: 'Рембрандт',
        title: 'Урок анатомии',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anatomy_Lesson_by_Dr._F._Ruysch_1670_Adriaen_Backer.jpg/350px-Anatomy_Lesson_by_Dr._F._Ruysch_1670_Adriaen_Backer.jpg',
        oldPrice: null,
        currentPrice: 5000000,
        currency: '$',
        sold: true,
      },
    ];
    const paintings = computed(
      () => items.filter(
        ({ author, title }) => (author + title).toLowerCase().includes(search.value.toLowerCase()),
      ),
    );
    watch(search, (current, prev) => {
      console.log(current, prev);
    });
    return { search, paintings, cart };
  },
};
</script>

<style lang="scss" scoped>
.paintings {
  width: 100%;
}
.paintings-title {
  padding-top: 45px;
  padding-bottom: 39px;
}
.paintings-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, $card_item_width);
  grid-gap: 32px;
  justify-content: space-between;
  margin: 0 auto;
}
.search-field {
  display: flex;
  .text-input {
    width: 294px;
    border-right: 0;
  }
}
</style>
