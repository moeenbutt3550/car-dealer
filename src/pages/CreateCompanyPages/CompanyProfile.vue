/
<template>
  <q-page class="bg-light-sky">
    <div class="row q-px-lg q-py-lg">
      <div class="col-12 font-20 font-w-700 text-grey">Create Company</div>
      <div class="col-12 q-mt-lg">
        <q-card class="" flat bordered>
          <q-item>
            <q-item-section>
              <q-item-label class="font-20 font-w-700 text-grey">Company Profile</q-item-label>
            </q-item-section>
            <q-item-section>
              <div>
                <q-btn
                  class="float-right font-16"
                  no-caps
                  color="primary"
                  padding="4px 20px"
                  label="Update"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator />
          <div class="q-py-md" :class="$q.screen.sm ? 'q-px-xl' : ''">
            <div
              class="row q-col-gutter-lg justify-center q-px-xl font-18 font-w-400 text-light-black q-py-xl"
            >
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>Company ID</p>
                  <q-input filled v-model="text" label="Company ID" />
                </div>
                <div class="q-mt-lg">
                  <p>Showroom Limit</p>
                  <q-input filled v-model="text" label="Showroom Limit" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="">
                  <p>Company Name</p>
                  <q-input filled v-model="text" label="Company Name" />
                </div>
                <div class="q-mt-lg">
                  <p>Address</p>
                  <q-input filled v-model="text" label="Address" />
                </div>
              </div>
              <div class="col-12 col-sm-8 col-md-8 col-lg-3">
                <div class="row" :class="$q.screen.lt.lg ? 'justify-center' : 'justify-end'">
                  <q-card class="my-card">
                    <q-img height="150px" src="logo.png"> </q-img>
                    <div class="text-center">
                      <q-btn
                        class="text-capitalize q-mt-md purplebtn"
                        padding="4px 22px"
                        no-caps
                        label="upload logo"
                      />
                    </div>
                  </q-card>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>City</p>
                  <q-input filled v-model="text" label="City" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>State/Province</p>
                  <q-input filled v-model="text" label="State/Province" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>Postal Code</p>
                  <q-input filled v-model="text" label="Postal Code" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>Country</p>
                  <q-input filled v-model="text" label="Country" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="">
                  <p>Company Mobile No.</p>
                  <q-input filled v-model="text" label="Company Mobile No." />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="">
                  <p>Contact No</p>
                  <q-input filled v-model="text" label="Contact No" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="">
                  <p>Whats App No.</p>
                  <q-input filled v-model="text" label="Whats App No." />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="">
                  <p>Contact Person</p>
                  <q-input filled v-model="text" label="Contact Person" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>Title</p>
                  <q-input filled v-model="text" label="Title" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="">
                  <p>Mobile No.</p>
                  <q-input filled v-model="text" label="Mobile No." />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="">
                  <p>Email</p>
                  <q-input filled v-model="text" label="Email" />
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6">
                <div class="">
                  <p>Website (URL)</p>
                  <q-input filled v-model="text" label="URL" />
                </div>
              </div>
              <div class="col-12">
                <q-btn
                  class="float-right q-ml-md"
                  no-caps
                  color="primary"
                  padding="6px 8px"
                  icon-right="arrow_forward"
                  label="Next Step"
                />
                <q-btn
                  class="bg-light-grey float-right"
                  no-caps
                  padding="6px 20px"
                  label="Cancel"
                />
              </div>
            </div>

          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      formFields: [
        {
          label: 'Company Name',
          model: 'companyName',
          placeholder: 'Enter company name',
          required: true,
        },
        {
          label: 'Numbers of Showroom',
          model: 'showroomCount',
          placeholder: 'Enter number of showrooms',
        },
        {
          label: 'Company Address',
          type: 'group',
          fields: [
            { model: 'address.street', placeholder: 'Street / Address' },
            { model: 'address.city', placeholder: 'City' },
            { model: 'address.state', placeholder: 'State/Province' },
            { model: 'address.country', placeholder: 'Country' },
          ],
        },
        { label: 'Phone No.', model: 'phone', placeholder: 'Enter phone number', required: true },
        { label: 'Mobile No', model: 'mobile', placeholder: 'Enter mobile number' },
        { label: 'Website (URL)', model: 'website', placeholder: 'www.' },
        { label: 'Email Address', model: 'email', placeholder: 'Enter email', required: true },
      ],
      formData: {
        companyName: '',
        showroomCount: '',
        address: {
          street: '',
          city: '',
          state: '',
          country: '',
        },
        phone: '',
        mobile: '',
        website: '',
        email: '',
      },
    }
  },
}
</script>
<style scoped lang="scss">
.my-card {
  width: 100%;
  max-width: 240px;
  box-shadow: none;
}
p {
  margin-bottom: 8px;
}
.purplebtn {
  background-color: #735dff !important;
  color: white;
}
</style>
