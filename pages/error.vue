<template>
    <NuxtLayout>
      <div class="prose">
        <h1>Dang</h1>
              <p>
                <strong>{{ error.message }}</strong>
              </p>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
        <p>
              Go back to your 
              <a @click="handleError">
                dashboard.
              </a>
            </p>
      </div>
    </NuxtLayout>
  </template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/dashboard',
  });
};
</script>