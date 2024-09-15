<template>
  <div>
    <!-- App Header -->
    <AppHeader />
    
    <!-- Navbar -->
    <Navbar />

    <!-- Whitelist Application Form -->
    <div class="application-form">
      <h2 class="application-form-heading">Whitelist Application Form</h2>

      <form @submit.prevent="handleSubmit">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" placeholder="Enter your name" required />
        </div>

        <!-- Age Field -->
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" v-model="formData.age" placeholder="Enter your age" required />
        </div>

        <!-- In-Game Experience Field -->
        <div class="form-group">
          <label for="experience">In-Game Experience</label>
          <textarea id="experience" v-model="formData.experience" placeholder="Describe your in-game experience" required></textarea>
        </div>

        <!-- Additional Information Field -->
        <div class="form-group">
          <label for="additional-info">Additional Information</label>
          <textarea id="additional-info" v-model="formData.additionalInfo" placeholder="Provide any other information (optional)"></textarea>
        </div>

        <!-- Submit Button -->
        <UButton label="Submit Application" type="submit" class="submit-button" />
      </form>
    </div>
    <br>
    <br>

    <!-- Success Notification -->
    <UAlert
      v-if="showAlert"
      icon="i-heroicons-information-circle"
      color="green"
      variant="subtle"
      title="Application submitted successfully!"
      :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'red', variant: 'link', padded: false, onclick: () => {closeAlert()}}"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1284819485437464586/IBDb3TpxblZhnbrbKiHTv3gQgbEfKeEWGrtYpgNGgMQgqXdya-l-sAYNObnlbzpsqlTO'

// Form Data
const formData = ref({
  name: '',
  age: '',
  experience: '',
  additionalInfo: ''
})

// Alert control
const showAlert = ref(false)

// Handle form submission
const handleSubmit = async () => {
  try {
    // Post message to Discord webhook
    await axios.post(webhookUrl, {
      content: `**New whitelist application submitted**:\n- **Name**: ${formData.value.name}\n- **Age**: ${formData.value.age}\n- **Experience**: ${formData.value.experience}\n- **Additional Info**: ${formData.value.additionalInfo || 'N/A'}`
    })

    // Show success alert
    showAlert.value = true

    // Optionally reset form fields
    formData.value.name = ''
    formData.value.age = ''
    formData.value.experience = ''
    formData.value.additionalInfo = ''
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

// Handle alert close
function closeAlert() {
  showAlert.value = false
}
</script>

<style scoped>
.application-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  color: black;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

.submit-button {
  background-color: #ff1e00;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #a04545;
}
</style>
