<template>
  <div>
    <!-- Section Heading -->
    <h2 class="section-heading">Server News & Events</h2>

    <!-- Upcoming Events Section -->
    <div class="upcoming-events card">
      <h3 class="sub-heading">Upcoming Events</h3>
      <div class="event-card-content">
        <p><strong>Heist:</strong> Grand Finale</p>
        <p><strong>Date:</strong> 20th Sep</p>
        <p><strong>Details:</strong> The biggest heist in RP history</p>
      </div>
    </div>

    <!-- Patch Notes Section -->
    <div class="patch-notes card">
      <h3 class="sub-heading">Patch Notes</h3>
      <div class="patch-card-content">
        <p><strong>Version:</strong> 1.3.0</p>
        <p><strong>New Features:</strong> Updated vehicle handling, new heist system</p>
      </div>
    </div>

    <!-- Roleplay Announcements Section -->
    <div class="rp-announcements card">
      <h3 class="sub-heading">Roleplay Announcements</h3>
      <div class="announcement-card-content">
        <p><strong>New Story Arc:</strong> Rise of the Raven</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Specific styles for event cards and content layout */
.event-card-content, .patch-card-content, .announcement-card-content {
  color: #333; /* Ensure all text is dark and readable */
}

.card p {
  margin: 0 0 10px 0;
}
</style>
