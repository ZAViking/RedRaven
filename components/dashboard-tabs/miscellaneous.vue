<template>
  <div>
    <!-- Section Heading -->
    <h2 class="section-heading">Miscellaneous Features</h2>

    <!-- Job & Crafting XP Section -->
    <div class="job-xp card">
      <h3 class="sub-heading">Job & Crafting XP</h3>
      <div class="xp-bar-content">
        <p><strong>Mining:</strong> Level 3</p>
        <!-- Progress bar for mining XP (75% to next level) -->
        <progress value="75" max="100" class="xp-progress-bar"></progress>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling for progress bar */
.xp-progress-bar {
  width: 100%;
  height: 20px;
  appearance: none;
}

.xp-progress-bar::-webkit-progress-bar {
  background-color: #f3f4f6; /* Light gray background for progress bar */
  border-radius: 10px;
}

.xp-progress-bar::-webkit-progress-value {
  background-color: #ff0000; /* Red progress bar fill */
  border-radius: 10px;
}

/* For Firefox */
.xp-progress-bar::-moz-progress-bar {
  background-color: #ff0000; /* Red progress bar fill */
  border-radius: 10px;
}
</style>
