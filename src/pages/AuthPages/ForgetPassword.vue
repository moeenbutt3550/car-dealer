<template>
  <q-page>
  <div class="row flex flex-center">
    <div class="col-12 col-md-6 bg-login flex flex-center" :class="$q.screen.xs ? 'order-last' : ''">
      <div class="row justify-center q-pt-lg q-pb-xl q-px-md">
        <div class="col-12 col-md-8 radius bg-white q-pt-xl q-pb-lg q-px-lg">
          <q-item class="font-36 font-w-600 q-px-lg">
        <q-item-section avatar>
          <q-avatar size="120px" rounded>
            <img src="icons/car-logo-1.svg">
          </q-avatar>
          <q-item-label>Unlock</q-item-label>
          <q-item-label>Your Auto Mobile Solution</q-item-label>
          <q-item-label caption class="font-24 text-primary">You will never know everything.
            But you will know more...</q-item-label>
        </q-item-section>
      </q-item>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-xl" :class="$q.screen.xs ? 'order-first' : ''">
     <div class="row justify-center q-my-md q-py-lg">
      <div class="col-12 col-md-9">
        <div class="text-center">
          <q-avatar size="100px" rounded>
            <img src="icons/forget.svg">
          </q-avatar>
        </div>
      <div>

        <div class="q-px-md">
          <div class="font-24 font-w-500 text-center q-py-lg">Forgot Password?</div>
          <div class="font-15 font-w-400 text-grey" caption>Enter the email address you used when you joined and we'll send you instructions to reset your password.</div>
          <div class="font-15 font-w-400 text-grey q-pt-lg" caption>For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</div>
        </div>
      </div>
      <q-item>
        <q-item-section class="font-15 font-w-500">
          <div class="q-py-md text-light-grey font-18">
            <p>Email Address</p>
            <q-input filled v-model="text" label="Enter Your Email Address" class="bg-light-sky" type="email" :dense="dense" />
          </div>
          <div class="q-mt-md">
            <q-btn flat label="Send Reset Instructions" size="lg" no-caps class="full-width bg-primary text-white" />
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
  position: relative;
  background-image: url('bg-login.svg') !important;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}


.bg-login::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #2169CF;
  z-index: 1;
}
:deep(.q-field--filled .q-field__control) {
  background-color: #ebf1f4 !important;
}
</style>
