<template>
    <div>
        <input  v-model="value">
    </div>
    </template>
    <script>
    export default {
        name:"MyInput",
        inheritAttrs: false,
        props:{
            modelValue:String
        },
        emits: ['update:modelValue'],
        computed: {
        value: {
          get() {
            return this.modelValue
          },
          set(value) {
            this.$emit('update:modelValue', value.trim())
          }
        }
      }
    
    }
    </script>
    