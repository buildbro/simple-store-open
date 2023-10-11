<template>
  <main>
    <div class="container mt-4">
      <div class="row">
        <div class="text-center mt-4" v-if="inventoryData.data.length<1">
          <h3>No Item</h3>
          <p>Your store is currently empty, Goto <a href="./dashboard">Dashboard</a>.</p>
        </div>
        <div class="col-4 mb-3" v-for="item in inventoryData.data" :id="item.id">
          <div class="card">
            <img :src="item.imageURL" alt="">
            <div class="card-body">
              <h4>
                <RouterLink :to="getItemUrl(item)">{{ item.itemName }}</RouterLink>
              </h4>
              <p><span>&#8358; </span>{{ item.price }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import { loadInventory, currentUser } from '@/firebase';
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const inventoryData = reactive({ data: '' });
    const user = currentUser();

    onMounted(async () => {
      inventoryData.data = await loadInventory();
    })
    return { inventoryData, user };
  },
  methods: {
    getItemUrl(item) {
      return `/detail/${item.id}`
    }
  }
}

</script>
