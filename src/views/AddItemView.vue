<template>
    <div class="container mt-4">
        <RouterLink to="./" class="btn btn-secondary mb-2">&LeftArrow; Back</RouterLink>
        <h2>Add New</h2>
        <form @submit.prevent="add">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Item name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="itemName"
                    aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="price">
            </div>
            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="quantity">
            </div>

            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <textarea :rows="3" cols="16" class="form-control" id="exampleInputPassword1" v-model="description"></textarea>
            </div>

            
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Image URL</label>
                <input type="file" class="form-control" @change="onFileChange">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
</template>

<script>
import { createItem, uploadFile } from '@/firebase';
export default {
    name: "AddItemView",
    data() {
        return {
            itemName: "",
            price: "",
            description: "",
            quantity: "",
            imageUrl: ""
        }
    },
    methods: {
        add() {
            const item = {
                itemName: this.itemName,
                description: this.description,
                price: this.price,
                qty: this.quantity,
                imageURL: this.imageUrl
            }

            createItem(item);
        },

        onFileChange(event) {
            const file = event.target.files[0];

            uploadFile(file).then((fileUrl) => {
                this.imageUrl = fileUrl;
            });
        }
    }
}
</script>