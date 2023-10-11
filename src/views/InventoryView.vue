<template>
    <div class="container mt-4">
        <RouterLink to="./" class="btn btn-secondary mb-2">&LeftArrow; Back</RouterLink>
        <h2>Inventory</h2>

        <div class="list-container">
            <div v-for="item in inventoryData.data" :id="item.id" class="mb-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-8">
                                <h4 class="me-auto">{{ item.itemName }}</h4>
                                <p>{{ item.description }}</p>
                            </div>
                            <div class="col-4 text-end">
                                <RouterLink :to="getItemUrl(item.id)" target='_blank' class="btn btn-primary me-1">View</RouterLink>
                                <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { adminLoadInventory, deleteItem } from '@/firebase';
import { onMounted, reactive } from "vue";

export default {
    setup() {

        const inventoryData = reactive({data: ''});

        onMounted(async () => {
            inventoryData.data = await adminLoadInventory();
        });

        return { inventoryData };
    },
    data() {

    },
    methods: {
        getItemUrl(id) {
            return `/detail/${id}`
        },

        deleteItem(id) {
           deleteItem(id);
        }
    }
}
</script>