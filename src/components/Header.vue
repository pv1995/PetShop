<template>
  <div class="header">
    <q-header class="no-shadow">
      <q-toolbar class="secondary-bg no-shadow">
        <q-toolbar-title class="primary-color text-weight-bolder cursor-pointer">
          PetStop
          <q-avatar square class="font-25">
            <img src="statics/paw.png">
          </q-avatar>
        </q-toolbar-title>
        <q-space/>
        <q-btn-dropdown
          flat
          dense
          stretch
          class="primary-color"
          label="Services"
          no-caps
          @click="showSecondHeader = !showSecondHeader"
        />
        <q-btn flat stretch class="primary-color" label="Roadmap" no-caps/>
        <q-btn flat stretch class="primary-color" label="About Us" no-caps/>
        <q-btn flat stretch class="primary-color" label="Contact Us" no-caps @click="goToContact"/>
        <q-btn flat stretch class="primary-color" label="FAQ" no-caps @click="goToFAQ"/>
        <q-btn
          flat
          dense
          stretch
          icon="person"
          class="primary-color"
          label="Sign in / Register"
          @click="goToLogin"
          no-caps
        />
      </q-toolbar>
    </q-header>
    <div class="mt-50" v-if="showSecondHeader">
      <q-toolbar class="primary-bg text-white justify-center">
        <q-btn flat label="Pet Shop" class="q-mx-xl text-primary" no-caps @click="goToShop"/>
        <q-btn flat label="Pet 101" class="q-mx-xl text-primary" no-caps @click="gotoPet101"/>
        <q-btn flat label="Pet Social" class="q-mx-xl text-primary" no-caps/>
        <q-btn flat label="Pet Training" class="q-mx-xl text-primary" no-caps @click="goToTraining"/>
      </q-toolbar>
    </div>
  </div>
</template>
<script>
import { QAvatar } from "quasar";

export default {

  components: {
    QAvatar
  },
  data() {
    return {
      showSecondHeader: true
    };
  },
  methods: {
    goToShop() {
      this.$router.push("/shop");
    },
    goToFAQ() {
      this.$router.push("/faq");
    },
    goToContact() {
      this.$router.push("/contactus");

    },
    gotoPet101(){
      this.$router.push({name:'Pet101'});
    },
    goToLogin() {
        this.$router.push("/login");
    },
    goToTraining() {
      this.$router.push('/training');
    }
}
};

</script>
<style lang="stylus" scoped>
.font-25 {
  font-size: 25px;
}
</style>
