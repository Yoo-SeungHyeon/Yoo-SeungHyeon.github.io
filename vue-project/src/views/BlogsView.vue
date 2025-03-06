<template>
  <div>
    <br>
    <sl-card class="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      <p id="card_p">해당 카드는 임시 카드로 고양이가 참 귀엽습니다.</p>
    </sl-card>
  </div>
</template>

<script setup>
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/card/card.js';
</script>

<style scoped>
.card-image {
        max-width: 300px;
}

#card_p {
        font-size: 20px;
        font-family: 'Nanum31';
}
</style>