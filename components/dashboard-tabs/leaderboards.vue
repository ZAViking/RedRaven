<template>
  <div>
    <!-- Section Heading -->
    <h2 class="section-heading">Leaderboards</h2>

    <!-- Top Players Section -->
    <div class="top-players card">
      <h3 class="sub-heading">Top Players (Wealth)</h3>
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Wealth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player1</td>
            <td>$1,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Leaderboard-specific table styling */
.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}


</style>
