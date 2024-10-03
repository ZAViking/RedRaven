<template>
  <div class="login-container">
      <!-- Image above the login box -->
      <img src="@/assets/images/redravenName_05KT.png" alt="Red Raven Logo" class="logo-image">
      
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
      <!-- Slogan below the login box -->
      <p class="slogan">Final Resting Place</p>
  </div>
</template>

<script setup>
  const router = useRouter();
  const state = reactive({
      email: '',
      password: '',
      errors: {
          email: '',
          password: '',
      },
  });

  function validate () {
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

  function onSubmit  () {
      if (validate()) {
          const mockEmail = 'Th3Ghost@gmail.com';
          const mockPassword = 'Sherlock123';

          if (state.email === mockEmail && state.password === mockPassword) {
              console.log('Mock login successful');
              router.push('/dashboard');
          } else {
              state.errors.password = 'Incorrect email or password';
              console.log('Mock login failed');
          }
      } else {
          console.log('Validation failed');
      }
  };

  function loginWithDiscord () {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: 'https://redraven-rp.vercel.app/dashboard'
        }
      })
  };
</script>

<style scoped>
  .login-container {
      min-height: 77.5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #0d0d0d; /* Darker shade of black */
  }

  .logo-image {
      max-width: 500px; /* Reducing the size of the image */
      height: auto;
      margin-bottom: 1rem;
  }

  .login-box {
      background-color: #1a1a1a; /* Dark grayish black */
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px rgba(255, 0, 0, 0.2); /* Red shadow for an epic effect */
      max-width: 400px;
      width: 100%;
      text-align: center;
      border: 2px solid #ff0000; /* Red border */
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
      border-radius: 0.375rem;
      background-color: #262626; /* Dark background for inputs */
      color: white;
      transition: border-color 0.2s, box-shadow 0.2s;
  }

  .input-field:focus {
      border-color: #ff4d4d; /* Lighter red on focus */
      box-shadow: 0 0 0 3px rgba(255, 77, 77, 0.3); /* Red focus shadow */
      outline: none;
  }

  .login-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
  }

  .login-button {
      background-color: #ff0000; /* Red button */
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s;
  }

  .login-button:hover {
      background-color: #cc0000; /* Darker red on hover */
  }

  .discord-login {
      background-color: #ffffff; /* White button */
      color: #ff0000; /* Red text */
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s;
  }

  .discord-login:hover {
      background-color: #e6e6e6; /* Slight gray hover for the Discord button */
  }

  p.text-red-500 {
      color: #ff4d4d; /* Lighter red for error messages */
  }

  /* Slogan styling */
  .slogan {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #ffffff;
    font-style: italic;
    text-align: center;
  }
</style>
