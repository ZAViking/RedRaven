<template>
  <div>
    <!-- Section Heading -->
    <h2 class="section-heading">Factions/Gang Information</h2>

    <!-- Faction Stats Section -->
    <div class="faction-stats card">
      <h3 class="sub-heading">Faction Stats</h3>
      <div class="faction-card-content">
        <p><strong>Name:</strong> Red Ravens</p>
        <p><strong>Members:</strong> 12</p>
        <p><strong>Territory:</strong> Downtown</p>
        <p><strong>Earnings:</strong> $500,000</p>
      </div>
    </div>

    <!-- Leaderboards Section -->
    <div class="leaderboards card">
      <h3 class="sub-heading">Leaderboards</h3>
      <div class="leaderboard-card-content">
        <p><strong>Faction:</strong> Red Ravens</p>
        <p><strong>Rank:</strong> 1</p>
        <p><strong>Power:</strong> 9000</p>
      </div>

      <!-- Leaderboard Table -->
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Rank</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player1</td>
            <td>1</td>
            <td>9000</td>
          </tr>
          <tr>
            <td>Player2</td>
            <td>2</td>
            <td>8500</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800&display=swap');
/* Leaderboard-specific table styling */
.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.leaderboard-table th, .leaderboard-table td {
  border: 1px solid #ff0000;
  padding: 10px;
  text-align: left;
  color: #333; /* Ensure text inside the table cells is dark */
}

.leaderboard-table th {
  background-color: #333;
  color: white;
}

.leaderboard-table td {
  background-color: #f9fafb; /* Light background for the table cells */
  color: #333; /* Dark text color for table cells */
}

/* Ensure all text inside cards is dark */
.faction-card-content p,
.leaderboard-card-content p {
  color: #333; /* Dark text for paragraphs inside cards */
}

.section-heading {
  font-family: 'Roboto', sans-serif; /* Replace with your preferred font */
  font-weight: 800; /* ExtraBold weight */
  font-style: italic; /* Italic style */
  color: black;
}

/* Ensure h3 sub-headings are properly styled with dark text */
.sub-heading {
  color: #ff0000 !important; /* Red color for subheadings */
}
</style>
