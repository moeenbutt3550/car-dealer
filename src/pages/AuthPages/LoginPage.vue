<template>
  <q-page>
  <div class="row">
    <div class="col-12 col-md-6 bg-login">
      <div class="row justify-center q-mt-xl q-pt-lg">
        <div class="col-12 col-md-8 radius  q-mt-xl">
          <div class="bg-white q-pb-lg q-mt-xl">
            <q-item class="font-36 font-w-600 q-px-lg">
          <q-item-section avatar>
            <q-avatar size="120px" rounded>
              <img src="icons/car-logo-1.svg">
            </q-avatar>
            <q-item-label>Unlock</q-item-label>
            <q-item-label>Your Auto Mobile Solution</q-item-label>
            <q-item-label caption class="font-24">You will never know everything.
              But you will know more...</q-item-label>
          </q-item-section>
        </q-item>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-xl">
     <div class="row justify-center q-my-md q-py-lg">
      <div class="col-12 col-md-9">
        <q-item class="text-center">
        <q-item-section class="font-w-600 font-24">Car Auto Mobile Solution</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar size="60px" rounded>
            <img src="icons/hand.svg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Hey, Hello</q-item-label>
          <q-item-label caption>Enter the information you entered while registering</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="font-15 font-w-500">
          <div class="q-py-md text-light-grey font-18">
            <p>Email Address</p>
            <q-input filled v-model="text" label="Email" type="email" :dense="dense" />
          </div>
          <div class="text-light-grey font-18">
            <p>Password</p>
            <q-input v-model="password" label="Password" filled :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
          </div>
          <div class="q-mt-sm">
            <q-btn flat padding="0px" to="/auth/forgetpassword" no-caps class="text-primary float-right">
              Forgot Password?
            </q-btn>
          </div>
          <div class="q-mt-md">
            <q-btn flat label="Login" no-caps class="full-width bg-primary text-white" />
          </div>
        </q-item-section>
      </q-item>
      </div>
     </div>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  data() {
    return {
      isPwd: true,
    }
  },
}
</script>
<style scoped>
.bg-login {
  background-image: url('bg-login.svg') !important;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
