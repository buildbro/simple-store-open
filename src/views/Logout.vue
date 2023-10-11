<script>
import { logout } from '@/firebase';

export default {
    name: "Logout",
    setup() {
        const router = this.$router;
        logout()
    }
}
</script>