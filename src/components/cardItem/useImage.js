import { ref } from 'vue';

export default function (props) {
  const img = ref(null);
  fetch(props.item.img).then((res) => {
    res.arrayBuffer().then((buffer) => {
      const image = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
      );
      img.value = `data:image/jpeg;base64,${image}`;
    });
  });
  return { img };
}
