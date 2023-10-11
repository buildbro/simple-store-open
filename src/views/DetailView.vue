<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-5">
                                <img :src="ItemData.data.imageURL" alt="Photo">
                            </div>
                            <div class="col-7">
                                <h3>{{ ItemData.data.itemName }}</h3>
                                <p>{{ ItemData.data.description }}</p>
                                <strong><span>&#8358;</span>{{ ItemData.data.price }}</strong>
                                <form @submit.prevent="placeOrder">
                                    <div class="qty-box">
                                        <label>Quantity</label>
                                        <input type="number" id="" value="1" class="form-control me-2 ms-2"
                                            style="max-width: 60px; display: inline;">
                                        <input type="hidden" :value="ItemData.data.id">
                                        <span>/ {{ ItemData.data.qty }}</span>
                                    </div>
                                    <input type="submit" class="btn btn-primary" value="Buy">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h1>Location</h1>
                        <h6>Makurdi, Nigeria</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getSingleItem, createOrder, currentUser } from '@/firebase';
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
export default {
    name: "DetailView",
    data() {
        const route = useRoute();
        const id = route.params.id;
        return {
            itemId: id
        }
    },
    setup() {

        const ItemData = reactive({ data: '' });

        onMounted(async () => {
            const route = useRoute();
            const id = route.params.id;
            const item = await getSingleItem(id);

            ItemData.data = item;
        })

        return { ItemData }
    },

    methods: {
        placeOrder() {
            const orderData = {
                itemId: this.itemId
            };
            createOrder(orderData);
        }
    }
}
</script>