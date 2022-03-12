<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <input class="file-input" type="file" @input="pickFile" ref="fileInput" name="resume" @click="selectImage">
    <q-btn @click="a">Teste</q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import pdfGeneration from '../tools/pdf_generator'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      base64: ''
    }
  },
  methods: {
    a () {
      pdfGeneration.generate('Lucas', 'Avenida, 18', '1699999111111', 'Ciência da Computação', this.base64)
    },

    pickFile () {
      const input = this.$refs.fileInput
      const file = input.files
      this.fileName = file[0].name

      if (file && file[0]) {
        const reader = new FileReader()

        reader.onload = () => {
          this.base64 = reader.result
        }

        reader.readAsDataURL(file[0])
      }
    }
  }
})
</script>
