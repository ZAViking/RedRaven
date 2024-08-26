<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useRouter } from 'vue-router'

const supabaseUrl="https://ytiebogxacxkojflncmo.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aWVib2d4YWN4a29qZmxuY21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMzE4NzEsImV4cCI6MjAzOTgwNzg3MX0.ZaefiBZF7fdA3RtMCd3InnQQ9gJCZzW7bRNU_yumjYE"

// Initialize Supabase client (use your own Supabase URL and Key)
// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const router = useRouter()

const state = reactive({
  email: '',
  password: '',
  error: ''
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  event.preventDefault()
  const { email, password } = state

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      state.error = error.message
    } else {
      state.error = ''
      // Redirect to the dashboard or home page after successful login
      router.push('/dashboard')
    }
  } catch (error) {
    console.error('Error logging in:', error)
    state.error = 'An error occurred during login'
  }
}
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
