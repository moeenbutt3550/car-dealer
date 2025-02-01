/<template>
  <q-page class="bg-light-sky">
<div class="row q-px-lg q-py-lg">
  <div class="col-12 font-20 font-w-700 text-grey">Create Company </div>
  <div class="col-12 q-mt-lg">
    <q-card class="my-card" flat bordered>
        <q-item>

          <q-item-section>
            <q-item-label class="font-20 font-w-700 text-grey">Company Information</q-item-label>
          </q-item-section>
          <q-item-section>
            <div>
              <q-btn class="float-right" no-caps color="primary" padding="4px 8px" icon-right="arrow_forward" label="Next Step" />
            </div>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <div class="col-12 col-md-2">
                <div class="row justify-center">
                  <q-avatar size="178px" square>
                    <img src="logo.png">
                  </q-avatar>
                  <q-btn class="text-capitalize q-mt-md" color="deep-purple-9" no-caps label="upload logo"/>
                </div>
              </div>
              <div class="col-md-8 col-12">
                <div class="row q-col-gutter-md">
                  <div class="col-6">
                    <q-input outlined v-model="text" label="Label (stacked)" stack-label :dense="dense" />
                    looop used
                  </div>
                </div>
              </div>
            </div>

          </q-card-section>

        </q-card-section>
      </q-card>
    <div class="row justify-center">
    </div>
  </div>
</div>
  </q-page>
</template>

<script setup>
//
</script>
<style scoped>

</style>
