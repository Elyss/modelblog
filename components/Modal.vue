<template>
  <!-- Teleport renders this content into the <body> tag -->
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <!-- Slot for modal content -->
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  // Use v-model binding (modelValue + update:modelValue) for control
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue'])

// Close the modal by emitting a change to false
function close() {
  emits('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it sits on top */
}

.modal-content {
  background: #fff;
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 4px;
  min-width: 300px;
  max-width: 90%;
}

</style>
