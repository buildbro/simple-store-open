<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-5">
                <img src="@/assets/img/login.jpg" alt="" />
            </div>
            <div class="col-7">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email"
                            aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { userLogin } from '@/firebase';
export default {
    name: "LogiView",
    setup() {
        const image = "https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1692619401~exp=1692620001~hmac=fdb75feef1c8493773b054af3de0faf3dfb6d56d832934dd347b708fd9954d6c";
        return { image };
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            const router = this.$router;
            userLogin({email: this.email, password: this.password})
            .then((user)=> {
                router.push({name: "home"});
            })
            .catch((error) => {
                alert(error.code);
            });
        }
    }
}
</script>