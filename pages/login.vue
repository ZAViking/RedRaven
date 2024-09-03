<script setup="ts">
    // import type { FormError, FormSubmitEvent } from '#ui/types'
    import { ref, reactive } from 'vue'
    // import { createClient } from '@supabase/supabase-js'

    // export const supabase = createClient(supabaseUrl, supabaseKey)

    const state = reactive({
      email: '',
      password: '',
      error: ''
    })

    // const supabaseUrl = useRuntimeConfig().supabaseUrl
    // const supabaseAnonKey = useRuntimeConfig().supabaseAnonKey

    // const supabase = createClient(supabaseUrl, supabaseAnonKey)


    // const supabase = createClient(
    //   this.$config.supabaseUrl,
    //   this.$config.supabaseAnonKey
    // )


    // export const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // console.log('Supabase URL:', process.env.SUPABASE_URL);
    // console.log('Supabase Key:', process.env.SUPABASE_ANON_KEY);

</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput 
            v-model="state.email" 
            placeholder="Enter your email"
            class="input-field"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput 
            v-model="state.password" 
            type="password" 
            placeholder="Enter your password"
            class="input-field"
          />
        </UFormGroup>

        <div class="login-actions">
          <UButton type="submit" class="login-button">
            Login
          </UButton>

          <UButton 
            type="button" 
            @click="" 
            class="discord-login"
            >
            <!-- @click="loginWithDiscord"  -->
            Login with Discord
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>

<style setup>
.login-container {
  min-height: 77.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6; /* Tailwind's bg-gray-100 equivalent */
}

.login-box {
  background-color: rgb(0, 0, 0);
  padding: 2rem;
  border-radius: 0.5rem; /* Tailwind's rounded-lg equivalent */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Tailwind's shadow-md equivalent */
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.input-field {
  width: 100%;
  padding: 1.0rem;
  border: 1px solid #ffffff; /* Tailwind's border-gray-300 equivalent */
  border-radius: 0.375rem; /* Tailwind's rounded-md equivalent */
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-field:focus {
  border-color: #ffffff; /* Tailwind's border-blue-500 equivalent */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); /* Tailwind's ring-blue-200 equivalent */
  outline: none;
}

.login-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.login-button {
  background-color: #3b82f6; /* Tailwind's bg-blue-600 equivalent */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* Tailwind's rounded-md equivalent */
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #2563eb; /* Tailwind's bg-blue-700 equivalent */
}

.discord-login {
  color: #0062ff; /* Tailwind's text-blue-600 equivalent */
  text-decoration: underline;
  transition: color 0.2s;
}

.discord-login:hover {
  color: #2563eb; /* Tailwind's text-blue-800 equivalent */
}
</style>
