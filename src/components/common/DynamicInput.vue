<template>
  <q-input
    :model="modelValue"
    :placeholder="inputField.placeholder"
    filled
    :rules="inputField.required ? [val => !!val || inputField.label+ ' field Required'] : []"
  />
</template>

<script>
export default {
  props: {
    modelValue: String, // This binds to v-model in parent
    inputField: {
      type: Object,
      required: true
    }
  },
};
</script>
