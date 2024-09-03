<template>
  <slot />
  <AppFooter />
</template>

<script lang="ts" setup></script>

<style>
  ::-webkit-scrollbar-button {
    display: none;
  }

  /* Customize the scrollbar track */
  ::-webkit-scrollbar-track {
    background: #c7c7c7; /* Change this to your desired track color */
    border-radius: 10px; /* Rounded corners for the track */
  }

  /* Customize the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background: #f08a38; /* Change this to your desired thumb color */
    /* background: #ea8007;; Change this to your desired thumb color */
    border-radius: 10px; /* Rounded corners for the thumb */
  }

  /* Additional styling for the scrollbar thumb on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b46321; /* Darker color when hovering over the thumb */
  }

  /* General scrollbar styling */
  ::-webkit-scrollbar {
    width: 12px; /* Set the width of the scrollbar */
    height: 12px; /* Set the height of the scrollbar (for horizontal scrollbars) */
  }

  /* Optional: scrollbar corner styling (where two scrollbars might meet) */
  ::-webkit-scrollbar-corner {
    background: #f0f0f0; /* Change this to match the track color */
  }
</style>

