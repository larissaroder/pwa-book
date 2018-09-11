 <template>
    <div id="app">
      <header>
      </header>
      <main>
        <div class="wrapper">
          <div class="books">
              <book v-for="list in lists" :key="list.imageUrl" :list="list"></book>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import data from '../db.json';
import Book from '../components/Book';

export default {
  name: 'app',
  components: {
  'book': Book
  },
  data() {
    return {
      lists: []
    }
  },
  created() {
    this.lists = data;
  }
}
</script>

 <style scoped lang="css">
  .books {
    display: flex;
    flex-direction: column;
    padding: 3px;
  }
  .book:hover {
      transform: translateY(-0.5em);
      background: #EBEBEB;
  }
  img {
      display: block;
      width: 100%;
  }
  @media only screen and (min-width: 900px) {
    .books {
      flex-direction: row;
    }
  }
</style>
