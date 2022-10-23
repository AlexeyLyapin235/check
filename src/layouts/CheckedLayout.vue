<template>
  <div class="home">
    <div v-if="!state">
      <form-submit @submitForm="submit" submitSlot="Submit"
        >Hello User</form-submit
      >
    </div>
    <div v-if="state && !check">
      <form-submit @submitForm="this.check = true" submitSlot="Submit">
        Your Code:
        <span>{{ code }}</span>
      </form-submit>
    </div>
    <div v-if="check">
      <my-input v-model="myCode" />
      <form-submit @submitForm="checkMyCode" submitSlot="Check">
        Your Code:
        <span>{{ code }}</span>
      </form-submit>
      <p v-if="text != ''">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import FormSubmit from "../components/FormSubmit.vue";
import MyInput from "../components/UI/input/MyInput.vue";
import { getRandomIntInclusive } from "../utils/index.js";
export default {
  name: "CheckedLayout",
  components: {
    FormSubmit,
    MyInput
  },
  data() {
    return {
      code: [],
      state: false,
      check: false,
      myCode: "",
      text: "",
    };
  },
  methods: {
    submit() {
      this.code = [];
      for (let i = 0; i < 5; i++) {
        this.code.push(getRandomIntInclusive(0, 9));
      }
      this.code = this.code.join("-");
      this.state = true;
    },
    
    checkMyCode() {
      if (this.myCode !== "") {
        this.code === this.myCode || this.code.split('-').join('') === this.myCode
          ? (this.text = "Код верный")
          : (this.text = "Код не верный");
      }
      
    },
  },
 
};
</script>