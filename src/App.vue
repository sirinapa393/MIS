<template>
  <body>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </body>
</template>

<style scoped>
body {
  background-color: #e1f8ff00;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: right;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  border-radius: 2.5rem;
}

nav a:hover {
  background-color: rgba(250, 235, 215, 0.638);
  border-radius: 2.5rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: rgb(255, 184, 141);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: right;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
