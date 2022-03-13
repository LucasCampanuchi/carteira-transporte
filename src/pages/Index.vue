<template>
  <q-page class="flex flex-center">
    <div class="row justify-center" style="width: 100%;">
      <div class="col-lg-8 col-md-10 col-xs-11 q-ma-md">
        <q-card class="card-bg text-black ">
          <q-form
            @submit="submit"
          >
            <div>
              <q-card-section class="text-h6">
                <div class="row">
                  <div class="text-h6">EMITIR CARTEIRINHA</div>
                </div>
              </q-card-section>
              <q-card-section class="q-pa-sm ">
                <input class="file-input" type="file" @input="pickFile" ref="fileInput" name="resume" @click="selectImage">
                <q-list class="row justify-center">
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <q-item-section>
                      <q-input color="bg-grey-6" dense v-model="name" label="Nome" />
                    </q-item-section>
                  </q-item>
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <q-item-section>
                      <q-input color="bg-grey-6" dense v-model="address" label="Endereço" />
                    </q-item-section>
                  </q-item>
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <q-item-section>
                      <q-input
                        dense
                        v-model="phoneNumber"
                        label="Telefone"
                        mask="(##) #####-####"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <q-item-section>
                      <q-input
                        dense
                        v-model="course"
                        label="Curso"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-actions full-width>
                <div class="col-12" style="justify-content: right; display: flex;">
                  <q-btn class="text-capitalize bg-primary text-white q-ma-md" @click="generate()" style="width: 120px;" :label="tela === 0 ? 'PRÓXIMO' : tela === 1 ? 'CALCULAR' : tela === 2 ? 'SALVAR' : 'ENVIAR'"/>
                </div>
              </q-card-actions>
            </div>
            </q-form>
          </q-card>

        </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import pdfGeneration from '../tools/pdf_generator'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      base64: '',
      name: '',
      address: '',
      phoneNumber: '',
      course: ''
    }
  },
  methods: {
    generate () {
      pdfGeneration.generate(
        this.name.toUpperCase(),
        this.address.toUpperCase(),
        this.phoneNumber,
        this.course.toUpperCase(),
        this.base64
      )
    },

    pickFile () {
      const input = this.$refs.fileInput
      const file = input.files
      this.fileName = file[0].name

      if (file && file[0]) {
        const reader = new FileReader()

        reader.onload = () => {
          this.base64 = reader.result
          console.log(reader.result)
        }

        reader.readAsDataURL(file[0])
      }
    }
  }
})
</script>
