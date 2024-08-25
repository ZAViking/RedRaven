<template>
    <div>
        <h1>Welcome to the homepage</h1>
    </div>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
                <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Add your styles here */
    h1 {
    color: #2c3e50;
    }
</style>