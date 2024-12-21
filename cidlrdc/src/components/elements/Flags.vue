<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';

interface Flag {
  src: string;
  left: string; // Position of the flag
  direction: string; // Animation direction
}

export default defineComponent({
  name: 'FlagAnimation',
  setup() {
    const flags = reactive<Flag[]>([
      {
        src: '/src/assets/drc.gif',
        left: '-100%', // Initial position for left flag
        direction: '100%', // Move to the right
      },
      {
        src: '/src/assets/aus.gif',
        left: '100%', // Initial position for right flag
        direction: '-100%', // Move to the left
      },
    ]);

    const animateFlag = (flag: Flag) => {
      const resetPosition = flag.left === '-100%' ? '100%' : '-100%';
      flag.left = resetPosition;

      setTimeout(() => {
        flag.left = flag.direction; // Move the flag in the desired direction
      }, 0);
    };

    const animateFlags = () => {
      flags.forEach((flag) => {
        setInterval(() => {
          animateFlag(flag);
        }, 1000); // Repeat animation every 1 seconds
      });
    };

    onMounted(() => {
      animateFlags();
    });

    return {
      flags,
    };
  },
});

</script>

<template>
    <div class="container-top">
    <!-- Flag elements -->
    <div
      class="flag top-left"
      v-for="(flag, index) in flags"
      :key="index"
      :style="{ left: flag.left }"
    >
      <img :src="flag.src" :alt="`Flag ${index + 1}`" />
    </div>
  </div>
</template>

<style scoped>
/* Top Navbar Styling */
.container-top {
  background: goldenrod;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  overflow: hidden; /* Prevent flags from appearing outside the container */
}

.container-top .flag img {
  height: 36px; /* Adjust as needed */
  width: auto;
}

.container-top .flag {
  display: inline-block;
  position: absolute; /* Allow movement with left property */
  z-index: 998; /* Ensure they are above other elements */
  top: 20%; /* Center vertically */
  transform: translateY(-50%); /* Adjust vertical alignment */
  transition: left 15s linear; /* Smooth animation for flag movement */
}

.top-left {
  left: 10px; /* Starting distance from the left edge */
}

.top-right {
  right: 10px; /* Starting distance from the right edge */
}

</style>