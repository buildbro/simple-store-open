<script>
import { RouterLink, RouterView } from 'vue-router'
import { currentUser } from '@/firebase';

export default {
  name: "App",
  setup() {
    const user = currentUser();
    return { user }
  }

}
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
          <RouterLink to="/" class="navbar-brand">Simple Store</RouterLink>

          <div v-if="user == null" class="d-flex">
              <RouterLink to="/login" class="me-2 nav-link">Login</RouterLink>
              <RouterLink to="/register" class="nav-link">Register</RouterLink>
          </div>
          <ul class="navbar-nav" v-else>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                {{ user.email }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><RouterLink to="/logout">Logout</RouterLink></li>
              </ul>
            </li>
          </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
