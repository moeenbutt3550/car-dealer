<template>
  <q-dialog v-model="confirm" persistent>
    <q-card class="radius-15px">
      <q-card-section class="q-py-none q-px-none">
        <div class="bg-red-8 text-white">
          <h6 class="q-py-sm q-pl-lg text-weight-medium q-my-none">
            Delete {{ title }}
          </h6>
        </div>
        <div class="q-mx-md text-h6 text-weight-regular text-grey-9 q-pt-md">
          Are you sure you want to delete this
          {{ title?.toLowerCase() ?? "record" }}
        </div>
      </q-card-section>
      <q-card-actions align="right" class="q-pt-lg q-pb-md q-pr-md">
        <q-btn
          unelevated
          size="12px"
          class="bg-grey-4 btn-radius text-grey-8 text-capitalize"
          @click="$emit('cancel')"
          icon="close"
          label="Cancel"
        />
        <q-btn
          unelevated
          size="12px"
          class="bg-red-8 btn-radius text-white text-capitalize q-ml-md"
          :loading="btnLoading"
          icon="delete"
          @click="$emit('delete')"
          label=" Delete"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "GeneralDeletePopup",
  props: {
    title: String,
    btnLoading: Boolean,
  },
  emits: ["delete", "cancel"],
  data() {
    return {
      confirm: true,
    };
  },
};
</script>
<style scoped>
.q-card__actions .q-btn--rectangle {
  padding: 0 18px;
}
</style>
