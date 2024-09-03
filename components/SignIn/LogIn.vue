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
            <p v-if="state.errors.email" class="text-red-500">{{ state.errors.email }}</p>
          </UFormGroup>
  
          <UFormGroup label="Password" name="password">
            <UInput 
              v-model="state.password" 
              type="password" 
              placeholder="Enter your password"
              class="input-field"
            />
            <p v-if="state.errors.password" class="text-red-500">{{ state.errors.password }}</p>
          </UFormGroup>
  
          <div class="login-actions">
            <UButton type="submit" class="login-button">
              Login
            </UButton>
  
            <UButton 
              type="button" 
              @click="loginWithDiscord" 
              class="discord-login"
            >
              Login with Discord
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
</template>

<script setup lang="ts">
    // import { ref } from 'vue';
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';  // Assuming you might want to navigate after login

    const router = useRouter();

    const state = reactive({
    email: '',
    password: '',
    errors: {
        email: '',
        password: '',
    },
    });

    const validate = () => {
    let isValid = true;
    state.errors.email = '';
    state.errors.password = '';

    if (!state.email) {
        state.errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        state.errors.email = 'Please enter a valid email';
        isValid = false;
    }

    if (!state.password) {
        state.errors.password = 'Password is required';
        isValid = false;
    } else if (state.password.length < 6) {
        state.errors.password = 'Password must be at least 6 characters long';
        isValid = false;
    }

    return isValid;
    };

    const onSubmit = () => {
    if (validate()) {
        // Mock credentials for testing
        const mockEmail = 'Th3Ghost@gmail.com';
        const mockPassword = 'R3dR@ven@123';

        if (state.email === mockEmail && state.password === mockPassword) {
        console.log('Mock login successful');
        // Redirect or proceed to next step
        router.push('/dashboard');  // Example redirect after login
        } else {
        state.errors.password = 'Incorrect email or password';
        console.log('Mock login failed');
        }
    } else {
        console.log('Validation failed');
    }
    };

    const loginWithDiscord = () => {
    console.log('Login with Discord clicked');
    };
</script>

<style scoped>
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
    color: #ffffff;
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


