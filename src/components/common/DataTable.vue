<template>
  <div>
    <div class="col-12 shadow-8 bg-white q-pa-sm radius-10px">
      <q-table
        :grid="$q.screen.lt.md ? true : false"
        :card-class="$q.screen.lt.md ? 'bg-primary text-white' : ''"
        :filter="filter"
        :rows="data"
        :columns="columns"
        row-key="id"
        :loading="loading"
        :separator="$q.platform.is.desktop ? separator : 'none'"
        binary-state-sort
        @row-click="rowClicked"
        @applyBackEndSearch="applyBackEndSearch ? applyBackEndSearch : ''"
        :hide-pagination="isHiddenPagination"
        :rows-per-page-options="[perPage]"
        :isFrontFilter="isFrontFilter"
        class="shadow-0"
        table-class="text-grey-9"
        :class="$q.screen.lt.md ? 'overflow-word-break' : ''"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for="col in props.cols"
              class="bg-red-1 color-dak-grey"
              :key="col"
              :align="col.align"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:top-right v-if="isFrontFilter && searchInput">
          <q-input
            outlined
            class="bordered-light-grey"
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
            @input="applyBackEndSearch"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:top-right v-else-if="searchInput">
          <q-input
            class="bordered-light-grey"
            dense
            debounce="300"
            v-model="form.searchText"
            placeholder="Search"
            @update:model-value="applyBackEndSearch"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-image="props">
          <q-td :props="props">
            <img
              alt="image"
              class="rounded-borders"
              height="50px"
              width="50px"
              :style="props.col.style"
              :src="props.row[props.col.field]"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="buttonclass">
            <q-btn
              v-for="action in actions"
              :key="action.event"
              dense
              class="q-m-5"
              :color="action.color"
              @click="$emit(action.event, props)"
              :icon="action.icon"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-toggle="props">
          <q-td :props="props">
            <q-toggle
              :model-value="props.row[props.col.field]"
              @update:model-value="$emit('toggle', props)"
            />
          </q-td>
        </template>
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 text-grey-7">
            <q-card flat bordered>
              <q-card-section class="">
                <div v-for="col in props.cols" :key="col.name">
                  <div class="q-my-none font-size-16 text-bold">
                    {{ col.label }}
                  </div>
                  <img
                    v-if="col.name == 'image'"
                    :src="props.row[col.field]"
                    alt="Image"
                    class="rounded-borders img-fluid"
                    height="150px"
                    width="150px"
                  />

                  <span v-else-if="typeof col.field == 'function'">
                    {{ col.field(props.row) }}
                  </span>

                  <q-card-actions v-else-if="col.name == 'actions'">
                    <q-btn
                      class="q-mt-sm"
                      v-for="action in actions"
                      :key="action.event"
                      push
                      :color="action.color"
                      @click="$emit(action.event, props)"
                      :icon="action.icon"
                    />
                  </q-card-actions>

                  <div class="font-size-14 text-wrap" v-else>
                    {{ props.row[col.field] }}
                  </div>
                </div>
              </q-card-section>
              <q-separator />
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
    <!--    Pagination starts here-->
    <div class="col-12" v-if="paginate_data">
      <p class="float-right q-ma-md">
        {{ paginate_data.from ? paginate_data.from : 0 }} to
        {{ paginate_data.to ? paginate_data.to : 0 }} of
        {{ paginate_data.total }}
      </p>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-if="paginate_data.total > 10"
          :model-value="paginate_data.current_page"
          :max="paginate_data.last_page"
          :min="1"
          :max-pages="5"
          color="primary"
          :boundary-numbers="false"
          boundary-links
          :to-fn="changePaginationPage"
        />
      </div>
    </div>
    <!--    Pagination ends here-->
    <ActionsPopup
      :actions="actions"
      :visible="actionsDialog"
      @actionClicked="actionClicked"
      @isModalVisible="isModalVisible"
    />
  </div>
</template>

<script>
import ActionsPopup from "components/common/ActionsPopup.vue";
import useApiRequest from "src/composables/useApiRequest";
export default {
  name: "DataTable",
  components: { ActionsPopup },
  props: {
    title: {
      type: String,
      default: "",
    },
    isFrontFilter: {
      type: Number,
      default: 1,
    },
    isHiddenPagination: {
      type: Boolean,
      default: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: null,
      required: true,
    },
    paginate_data: {
      type: Object,
      default: null,
    },
    separator: {
      type: String,
      default: "horizontal",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Array,
      default: function () {
        return [];
      },
    },
    url: {
      type: String,
      default: null,
    },
    searchInput: Boolean,
  },
  data() {
    return {
      actionsDialog: false,
      current_page: 1,
      selectedId: 0,
      filter: "",
      filterBackEnd: "",
      pagination: {
        rowsPerPage: [10],
      },
      form: {
        page: null,
        per_page: 10,
        searchText: "",
      },
    };
  },
  created() {
    if (this.$route.query.page) {
      this.form.page = Number(this.$route.query.page);
    } else {
      this.form.page = 1;
    }
  },
  methods: {
    rowClicked(event, row) {
      if (this.$q.screen.lt.md && this.actions.length) {
        this.actionsDialog = true;
        this.selectedId = row.id;
      }
    },
    isModalVisible(val) {
      this.actionsDialog = val;
    },
    actionClicked(event) {
      this.actionsDialog = false;
      const action = event.target.offsetParent.getAttribute("data-event");
      this.$emit(action, { row: { id: this.selectedId } });
    },
    applyBackEndSearch(event) {
      this.$emit("applyBackEndSearch", event);
    },
    changePaginationPage(page_number) {
      return this.$route.path + "?page=" + page_number;
    },
    async search() {
      let data = {
        method: "get",
        url:
          this.url +
          "?page=" +
          this.form.page +
          "&searchText=" +
          this.form.searchText,
      };
      const res = await useApiRequest(data);
      this.$emit("newData", res);
    },
  },
};
</script>
<style lang="scss" scoped>
.overflow-word-break {
  overflow-wrap: break-word;
}
:deep(.q-table tbody) :hover {
  background-color: #fff8f8;
  color: #c10015;
}
:deep(.q-table tbody .q-btn, .q-icon) :hover {
  background-color: #f3f9ff00;
  color: #ffff;
}
.q-card__actions--horiz > .q-btn-item + .q-btn-item,
.q-card__actions--horiz > .q-btn-group + .q-btn-item,
.q-card__actions--horiz > .q-btn-item + .q-btn-group {
  margin-left: 0px;
}
.q-card__actions {
  padding: 0px;
}
.text-wrap {
  word-break: break-all;
}
</style>
