<template>
    <footer class="footer">
        <p>&copy; 2024 Car and Category Search. All rights reserved.</p>
        <p>&trade; by Duncan Smokey.</p>
    </footer>
</template>
  
  <style lang="css">
  /* Container for the entire page */
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Content area should take all available space */
  .content {
    flex-grow: 1;
  }
  
  /* Footer styling */
  .footer {
    background-color: #444;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 0.9em;
    border-top: 1px solid #333;
    width: 100%; /* Ensure the footer takes full width */
    position: bottom; /* Sticky footer at the bottom */
    bottom: 0;
  }
  </style>
  