/
<template>
  <q-page class="bg-light-sky">
    <div class="row q-py-lg" :class="$q.screen.gt.sm ? 'q-px-lg' : 'q-px-sm'">
      <div class="col-12 font-20 font-w-700 text-grey">Create Company</div>
      <div class="col-12 q-mt-lg">
        <q-card class="" flat bordered>
          <q-item class="q-py-md">
            <q-item-section>
              <q-item-label class="font-20 font-w-700 text-grey">Payment & Package</q-item-label>
            </q-item-section>
            <q-item-section>
              <div>
                <q-btn
                  class="float-right font-16"
                  no-caps
                  color="primary"
                  padding="4px 20px"
                  label="Finsih & Save"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator />
          <div class="q-py-md" :class="$q.screen.gt.xs ? 'q-px-xl' : 'q-px-sm'">
            <div
              class="row q-col-gutter-lg justify-center font-18 font-w-400 text-light-black q-py-xl"
              :class="$q.screen.gt.sm ? 'q-px-xl' : ''"
            >
              <div class="col-12 col-lg-12 col-xl-10">
                <div
                  class="row q-col-gutter-md justify-end"
                  :class="$q.screen.gt.sm ? 'q-px-xl' : ''"
                >
                  <div class="col-12 font-w-400">Select the Package</div>
                  <div class="col-12 col-lg-6">
                    <q-select
                      filled
                      class="bg-light-sky font-16 icon-size radius"
                      dropdown-icon="keyboard_arrow_down"
                      v-model="model"
                      :options="options"
                      label="Free (Basic)"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <q-select
                          class="bg-light-sky font-16 icon-size radius"
                          filled
                          dropdown-icon="keyboard_arrow_down"
                          v-model="model"
                          :options="['Monthly', 'Weekly', 'Yearly']"
                          label="Monthly"
                        />
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-15 font-w-500 radius"
                          placeholder="AED 210"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 q-mt-xl">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox class="radius" v-model="right" label="HR Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky radius font-16 font-w-500"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6" :class="$q.screen.gt.md ? 'q-mt-xl' : ''">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="IT Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6" :class="$q.screen.gt.md ? 'q-my-md' : ''">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Insurance" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6" :class="$q.screen.gt.md ? 'q-my-md' : ''">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Maintenance Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Sale Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Logistic Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6" :class="$q.screen.gt.md ? 'q-my-md' : ''">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Marketing Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6" :class="$q.screen.gt.md ? 'q-my-md' : ''">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="Finance Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="HR Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row q-col-gutter-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky radius q-px-sm q-py-sm font-15">
                          <q-checkbox v-model="right" label="HR Department" />
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-16 font-w-500 radius"
                          placeholder="AED 15"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 q-mt-md">
                    <div class="row q-col-gutter-x-md">
                      <div class="col-8 col-lg-9">
                        <div class="bg-light-sky font-w-600 radius q-px-md q-py-md font-15">
                          Total Amount
                        </div>
                      </div>
                      <div class="col-4 col-lg-3">
                        <q-input
                          filled
                          class="text-center bg-light-sky font-w-500 radius"
                          :class="$q.screen.gt.md ? 'font-18' : 'font-15'"
                          placeholder="AED 150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row q-col-gutter-md q-mt-lg" :class="$q.screen.gt.sm ? 'q-px-xl' : ''">
                  <div class="col-12 font-16 font-w-400">Payment Method</div>
                  <div class="col-12 col-lg-6">
                    <q-select
                      filled
                      class="bg-light-sky font-16 icon-size radius"
                      dropdown-icon="keyboard_arrow_down"
                      v-model="model"
                      :options="['Check', 'Cash', 'Card']"
                      label="Payment Mode"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="q-px-sm q-py-sm font-15">
                      <q-checkbox v-model="right" label="Invoice Generate " />
                    </div>
                  </div>
                  <div class="col-12 q-mt-lg">
                    <q-btn class="font-16 q-px-lg" :class="$q.screen.xs ? 'full-width' : ''" no-caps label="Back" to="/createcompanyuser" />
                    <q-btn
                      class="float-right q-ml-md"
                      :class="$q.screen.xs ? 'full-width q-my-md' : ''"
                      no-caps
                      color="primary"

                      label="Finish & Save"
                    />
                    <q-btn
                      class="bg-light-grey float-right"
                      :class="$q.screen.xs ? 'full-width' : ''"
                      no-caps
                      padding="6px 20px"
                      label="Cancel"
                    />
                  </div>
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
      right: false,
    }
  },
}
</script>
<style scoped lang="scss">
.radius {
  border-radius: 6px !important;
}
.box {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-card {
  width: 100%;
  max-width: 240px;
  box-shadow: none;
}
p {
  margin-bottom: 8px;
}
:deep(.q-checkbox__bg) {
  border: 1px solid currentColor !important;
  border-radius: 4px !important;
}
:deep(.q-checkbox__svg) {
  padding: 2px !important;
}
:deep(.icon-size .q-select__dropdown-icon) {
  font-size: 32px !important;
}
:deep(.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input) {
  text-align: center;
}
:deep(.q-field--filled .q-field__control) {
  background-color: #ebf1f4 !important;
}
</style>
