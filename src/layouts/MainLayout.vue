<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row bg-light text-grey-8 items-center">
      <q-toolbar>
        <q-btn flat dense round size="lg" icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div class="row items-center q-py-md">
            <div class="col-12 col-md-6 col-lg-4" v-if="$q.screen.lt.md ? '' : 'hidden'">
              <q-input rounded standout bottom-slots v-model="text" label="Search">
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-6 col-lg-8 text-right">
              <q-btn
                flat
                dense
                class="bg-primary text-white"
                size="18px"
                icon="light_mode"
                aria-label="Notifications"
                @click="toggleNotifications"
              />
              <q-btn flat dense size="18px" icon="dark_mode" />
            </div>
          </div>
        </q-toolbar-title>
        <q-btn class="text-grey-8 bg-white round-10 font-18 font-w-400" padding="6px 12px" label="AED">
          <q-icon name="arrow_drop_down" />

          <q-menu>
            <!-- <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list> -->
          </q-menu>
        </q-btn>
        <q-btn flat dense size="18px" icon="notifications" />
        <q-item clickable v-ripple class="text-secondary">
        <q-item-section v-if="$q.screen.xs ? '' : 'hidden'"><div class="font-w-500">Ibrahim Ahmad</div> <div class="font-w-400 text-accent">Al Tayer Motors UAE</div> </q-item-section>
        <q-item-section avatar>
          <q-avatar square>
            <img src="image.svg">
          </q-avatar>
        </q-item-section>
        <q-menu class="text-secondary menu">
          <q-list style="min-width: 160px">
            <q-item clickable v-close-popup>
              <q-item-section> Ibrahim Ahmad <br><span class="text-accent">Manager</span></q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar square>
                  <img width="20px" src="icons/profile.svg">
                </q-avatar>
              </q-item-section>
              <q-item-section><div class="font-w-500 text-left">Profile</div></q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar square>
                  <img width="20px" src="icons/setting.svg">
                </q-avatar>
              </q-item-section>
              <q-item-section><div class="font-w-500 text-left">Setting</div></q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section><q-btn flat class="bg-primary text-white text-capitalize" padding="4px 10px" label="Log out"/></q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer class="q-pr-md" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label class="font-kaushan text-primary" header>
          <q-img width="80px" src="icons/car-logo-1.svg" />
          Auto Dealer Solution
        </q-item-label>
        <q-item-label class="font-w-500 font-16 bg-info padding radius-right">
          <q-img width="30px" src="icons/company-1.svg" />
          <span class="q-ml-lg">Al Tayer Motors UAE</span>
        </q-item-label>
        <div class="font-w-500 q-px-md q-py-sm font-16 q-mt-md">
          Select Showroom
        </div>
        <q-item-section>
          <q-select outlined bottom-slots v-model="selectedOption" class="custom-select" :options="options" dropdown-icon="keyboard_arrow_down" :dense="dense" :options-dense="denseOpts">
        <template v-slot:prepend>
          <q-icon name="img:icons/company.svg"/>
        </template>
      </q-select>
        </q-item-section>
        <q-item-label class="font-w-500 font-16 padding q-mt-md">
          <q-img width="30px" class="" src="icons/dashboard.svg" />
          <span class="q-ml-lg">Dashboard</span>
        </q-item-label>
        <q-expansion-item
        class="q-mt-sm"
          v-for="(link, index) in linksList"
          :key="index"
          :default-opened="index === 0"
          :header-class="expandedIndex === index ? 'bg-info' : ''"
          @update:model-value="(val) => expandedIndex = val ? index : null"
        >
          <template v-slot:header="">
            <q-item-section avatar>
              <q-avatar>
                <q-icon size="30px" :name="link.icon" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="font-w-500"> {{ link.title }} </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              <q-item clickable v-for="(caption, idx) in Array.isArray(link.caption) ? link.caption : [link.caption]" :key="idx" :to="caption.to || '#'" @click="setActiveLink(link)">
                <q-item-section avatar>
                  <q-icon :name="caption.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ caption.text }}</q-item-label>
                </q-item-section>
              </q-item>
              <div class="row justify-center">
                <q-btn :href="link.link" target="_blank" no-caps color="primary" label="Add Showroom  +" padding="4px 18px" rounded class="q-mt-md text-capitalize" />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <EssentialLink />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
{
    title: 'Showroom Management',
    caption: [
      { icon: 'img:icons/chip.svg', text: 'Showroom Information', to:'/showroominformation' },
      { icon: 'img:icons/chip.svg', text: 'Showroom User' },
      { icon: 'img:icons/chip.svg', text: 'Showroom Payment Info' },
    ],
    icon: 'img:icons/showroom.svg',
    link: 'https://quasar.dev',
  },
  {
    title: 'Inventory Management',
    caption: { icon: 'code', text: 'USA Development' },
    icon: 'img:icons/inventory.svg',
    link: 'https://quasar.dev'
  },
  {
    title: 'Vendor Management',
    caption: [
      { icon: 'code', text: 'Github Repository' },
      { icon: 'mail', text: 'Github Repository' },
      { icon: 'code', text: 'Github Repository' },
    ],
    icon: 'img:icons/vendor.svg',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Car Management ',
    caption: { icon: 'chat', text: 'Join Discord' },
    icon: 'img:icons/car.svg',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Expense Management',
    caption: { icon: 'record_voice_over', text: 'Quasar Forum' },
    icon: 'img:icons/expense.svg',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Settings',
    caption: { icon: 'rss_feed', text: 'Follow on Twitter' },
    icon: 'img:icons/setting1.svg',
    link: 'https://twitter.quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  data() {
    return {
      linksList,
      leftDrawerOpen: false,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      selectedOption: 'Dubai Development',
      expandedIndex: 0,
      activeLink: null
    }
  },

  methods: {
  toggleLeftDrawer () {
    this.leftDrawerOpen = !this.leftDrawerOpen
  },

  isActiveLink(link) {
    // You can define your active condition here. For example, when the link is clicked:
    return this.activeLink === link.link
  },

  setActiveLink(link) {
    this.activeLink = link.link
  }
}

})
</script>
<style scoped>
::v-deep(.q-item__label--header) {
  padding: 16px 0px 16px 4px !important;
}
.q-field--with-bottom {
  padding: 0px;
}
.round-10 {
  border-radius: 10px;
  border: 1px solid #dddbdb;
}
.menu .q-item__section--side > .q-avatar {
    font-size: 20px;
}
 .menu .q-item__section--avatar {
    color: inherit;
    min-width: 15px;
}
::v-deep(.q-field--outlined .q-field__control) {
    border-radius: 0px 28px 28px 0px !important;
    height: 48px !important;
    padding: 0 16px;
    background-color: #2169CF;
}
::v-deep(.q-expansion-item .q-item) {
  border-radius: 0px 28px 28px 0px;
  height: 48px!important;
  padding: 4px 8px !important;
}
::v-deep(.q-expansion-item__toggle-icon) {
  font-size: 32px !important;
}
:deep(.custom-select  .q-select__dropdown-icon){font-size: 32px !important; color: white;}

.radius-right {
  border-radius: 0px 28px 28px 0px !important;
}
.padding {
  height: 48px;
  padding: 10px 16px;
}
</style>
