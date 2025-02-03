/
<template>
  <q-page class="bg-light-sky">
    <div class="row q-px-lg q-py-lg">
      <div class="col-12 font-20 font-w-700 text-grey">Create Company</div>
      <div class="col-12 q-mt-lg">
        <q-card class="" flat bordered>
          <q-item>
            <q-item-section>
              <q-item-label class="font-20 font-w-700 text-grey">Create Company User</q-item-label>
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
          <div class="q-py-md" :class="$q.screen.gt.md ? 'q-px-xl' : 'q-px-md'">
            <div
              class="row justify-center q-py-xl"
            :class="$q.screen.gt.md ? 'q-px-xl' :'q-px-sm'"
              >
            <div class="col-12 col-md-10 col-lg-10 col-xl-7">
              <div class="row q-col-gutter-lg">
                <div class="col-12 col-sm-6 ">
                  <div class="">
                  <p>E-mail Address</p>
                  <q-input filled class="bg-light-sky radius" v-model="text" label="Email" />
                </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="">
                  <p>User Role </p>
                  <q-input filled class="bg-light-sky radius" v-model="text" label="User Role" />
                </div>
                </div>
                <div class="col-12 col-sm-4">
                  <div class="">
                  <p>User Name</p>
                  <q-input filled class="bg-light-sky radius" v-model="text" label="User Name" />
                </div>
                </div>
                <div class="col-12 col-sm-4">
                  <div class="">
                  <p>Password</p>
                  <q-input filled class="bg-light-sky radius" v-model="text" label="Password" />
                </div>
                </div>
                <div class="col-12 col-sm-4">
                  <div class="">
                  <p>User Limit</p>
                  <q-input filled class="bg-light-sky radius" v-model="text" label="User Limit" />
                </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Hr Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Sale Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Account Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">IT Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Marketing Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Loan Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">IT Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Marketing Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <p class="font-18 font-w-400">Loan Department</p>
                  <div class="row radius bg-light-sky q-px-sm q-py-md">
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="View" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Add" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Edit" />
                    </div>
                    <div class="col-12">
                      <q-checkbox v-model="val" size="lg" class="text-grey radius font-16 font-w-400" label="Delete" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 q-mt-lg">
                <q-btn
                  class="float-right q-ml-md"
                  no-caps
                  color="primary"
                  padding="6px 8px"
                  icon-right="arrow_forward"
                  label="Next Step"
                  to="/createcompanyuser"
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

    }
  },
}
</script>
<style scoped lang="scss">
p {
  margin-bottom: 8px;
}
.radius {
  border-radius: 6px !important;
}
</style>
