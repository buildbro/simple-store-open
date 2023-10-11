<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-5">
                <img src="@/assets/img/login.jpg" alt="" />
            </div>
            <div class="col-7">
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control"  v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Sign up</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { createUser } from '@/firebase';
export default {
    name: "RegView",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            createUser({email: this.email, password: this.password})
            .then((user) => {
                alert("Registration successful!")
            }).catch((error) => {
                console.log(JSON.stringify(error));
                alert(error.code);
            });
            
        }
    }
}
</script>