<template>
  <div class="book">
    <div>
      <img :src="list.imageUrl" :alt="list.title">
      <h4>{{ list.title }}</h4>
      <p>{{ list.description }}</p>
    </div>
  </div>
</template>

 <script>
    export default {
    props: ['list'],
    name: 'book'
    }
</script>

 <style scoped lang="css">
  .book {
    background: #F5F5F5;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    transition: all 100ms ease-in-out;
  }
  .book:hover {
    transform: translateY(-0.5em);
    background: #EBEBEB;
  }
  img {
    display: block;
    width: 100%;
  }
</style>