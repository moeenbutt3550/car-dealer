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
                <q-btn class="float-right" no-caps color="primary" padding="4px 8px" icon-right="arrow_forward" :label="$q.screen.gt.xs ? 'Next Step' : ''" />
              </div>
            </q-item-section>
          </q-item>

          <q-separator />

            <div class="row justify-center q-mt-md q-py-md q-px-md">
              <div class="col-12 col-md-8 col-lg-3">
                <div class="row text-center">
                  <div class="col-12">
                    <q-avatar size="178px" square>
                      <q-img src="logo.png"/>
                    </q-avatar>
                  </div>
                  <div class="col-12">
                    <q-btn class="text-capitalize q-mt-md" color="deep-purple-9" no-caps label="upload logo"/>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-10 col-lg-9">
                <div class="row q-col-gutter-md">
                  <template v-for="(field, index) in formFields" :key="index">
                    <div v-if="field.type === 'group'" class="col-12">
                      <div class="text-bold q-mb-md">{{ field.label }}</div>
                      <div class="row q-col-gutter-md">
                        <div v-for="(subField, subIndex) in field.fields" :key="subIndex" class="col-12 col-sm-6">
                          <DynamicInput v-model="formData[subField.model]" :inputField="subField" />
                        </div>
                      </div>
                    </div>
                    <div v-else class="col-12 col-sm-6">
                      <div class="text-bold q-mb-md">{{ field.label }}</div>
                      <DynamicInput v-model="formData[field.model]" :inputField="field" />
                    </div>
                  </template>
                </div>
              </div>
            </div>


        </q-card>
        <div class="row justify-center">
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import DynamicInput from "components/common/DynamicInput.vue";

export default {
  components: {DynamicInput},
  data(){
    return {
      formFields:[
        { label: "Company Name", model: "companyName", placeholder: "Enter company name", required: true },
        { label: "Numbers of Showroom", model: "showroomCount", placeholder: "Enter number of showrooms" , },
        { label: "Company Address", type: "group", fields: [
            { model: "address.street", placeholder: "Street / Address" },
            { model: "address.city", placeholder: "City" },
            { model: "address.state", placeholder: "State/Province" },
            { model: "address.country", placeholder: "Country" }
          ]
        },
        { label: "Phone No.", model: "phone", placeholder: "Enter phone number", required: true },
        { label: "Mobile No", model: "mobile", placeholder: "Enter mobile number" },
        { label: "Website (URL)", model: "website", placeholder: "www." },
        { label: "Email Address", model: "email", placeholder: "Enter email", required: true }
      ],
      formData:{
        companyName: "",
        showroomCount: "",
        address: {
          street: "",
          city: "",
          state: "",
          country: ""
        },
        phone: "",
        mobile: "",
        website: "",
        email: ""
      }
    }
  },
}

</script>
<style scoped lang="scss">

</style>
