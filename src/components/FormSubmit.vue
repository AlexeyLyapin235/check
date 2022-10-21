<template>
  <div>
    <MyTitle><slot></slot></MyTitle>
    <SubmitButton @click="this.$emit('submitForm',$event)">{{ submitSlot }}</SubmitButton>
  </div>
</template>

<script>
import MyTitle from "./UI/MyTitle.vue";
import SubmitButton from "./UI/SubmitButton.vue";
export default {
  props: {
    title: String,
    submitSlot: String,
  },
  name: "FormSubmit",
  components: {  MyTitle, SubmitButton },
  methods: {
  
  },
};
</script>

<style></style>