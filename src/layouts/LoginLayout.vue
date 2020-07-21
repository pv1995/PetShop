<template>
  <q-layout view="hHh lpR fff">
    <q-page-container>
      <q-page class="login height-100">
          <div class="row items-center height-100">
              <div class="col-6 height-100 q-pa-lg">
                  <div class="logo q-pa-md text-center q-py-xl cursor-pointer" @click="goToHome">
                      <q-avatar color="primary" size="100px">
                          <img src="statics/paw-white.png" style="height:55px;width:55px"/>
                      </q-avatar>
                      <div class="text-h4 text-primary text-weight-bold">PetStop</div>
                  </div>
                  <div class="tag-line q-py-xl q-pa-md q-px-xl">
                      <div class="q-py-xl">
                        <div class="text-h2 text-primary text-weight-bolder q-py-md">One</div>
                        <div class="text-h2 text-primary text-weight-bolder q-py-md">Stop</div>
                        <div class="text-h2 text-primary text-weight-bolder q-py-md">Solution</div>
                        <div class="text-h5 text-primary text-uppercase q-py-md">for all your pet needs</div>
                      </div>
                  </div>
              </div>
              <div class="col-6 bg-primary height-100 right-col">
                <q-card class="login-card q-mt-xl">
                    <q-tabs v-model="tab" class="text-primary">
                        <q-tab label="Login" name="login" />
                        <q-tab label="Register" name="register" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="login">
                            <q-card-section>
                                <q-btn style="background: #DD4B39; color: white" label="Sign in with google" class="full-width" @click="social_login('google')"/>
                            </q-card-section>
                            <q-card-section>
                                <q-form
                                class="q-gutter-md"
                                
                                >
                                    <q-input
                                        
                                        v-model="log.emailAddress"
                                        label="Email*"
                                        hint="The email you used to register with us."
                                        lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type your email']"
                                    />

                                    <q-input
                                        type="password"
                                        v-model="log.password"
                                        label="Password *"
                                        hint="Your secret password!"
                                        lazy-rules
                                        :rules="[
                                        val => val !== null && val !== '' || 'Please type your password'
                                        ]"
                                    />

                                    <div>
                                        <q-btn label="Login" type="submit" color="primary" @click="login"/>
                                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                                    </div>
                                </q-form>
                                <q-btn flat label="Forgot your password?" color="primary" dense class="q-mt-md" style="font-size:10px"/>
                            </q-card-section>
                        </q-tab-panel>

                        <q-tab-panel name="register">
                            <q-card-section>
                                <q-btn style="background: #DD4B39; color: white" label="Register with google" class="full-width" />
                            </q-card-section>
                            <q-card-section>
                                <q-form
                                class="q-gutter-md"
                                
                                >
                                    <q-input
                                        
                                        v-model="reg.name"
                                        label="Full name *"
                                        hint="Please tell us your name."
                                        lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type your full name']"
                                    />
                                    <q-input
                                        
                                        v-model="reg.email"
                                        label="E-mail Address *"
                                        hint="Please tell us your email."
                                        lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type your email']"
                                    />
                                    <q-input
                                        
                                        v-model="reg.username"
                                        label="Username*"
                                        hint="Please choose a username."
                                        lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please choose a username']"
                                    />

                                    <q-input
                                        type="password"
                                        v-model="reg.password"
                                        label="Password *"
                                        hint="Your secret password!"
                                        lazy-rules
                                        :rules="[
                                        val => val !== null && val !== '' || 'Please type your password'
                                        ]"
                                    />

                                    <q-input
                                        type="password"
                                        v-model="reg.re_password"
                                        label="Re-type Password *"
                                        hint="Your password again, please!"
                                        lazy-rules
                                        :rules="[
                                        val => val !== null && val !== '' || 'Please re-type your password'
                                        ]"
                                    />

                                    <div>
                                        <q-btn label="Register" type="submit" color="primary" @click="register"/>
                                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                                    </div>
                                </q-form>
                            </q-card-section>
                            <q-dialog v-model="password_mismatch">
                                <q-card>
                                    <q-card-section>
                                        <div class="text-h6">Your passwords do not match!</div>
                                        <div class="q-mt-md text-body1">Please try again!</div>
                                    </q-card-section>

                                    <q-card-actions align="right">
                                        <q-btn flat label="OK" color="primary" v-close-popup />
                                    </q-card-actions>
                                </q-card>
                            </q-dialog>
                        </q-tab-panel>
                    </q-tab-panels>
                    
                </q-card>
              </div>
          </div>
      </q-page>
    </q-page-container>
    <!-- <footer-lower /> -->
  </q-layout>
</template>

<script>

export default {
  data () {
    return {
        tab: "login",
        password_mismatch: false,
        log: {
            emailAddress: "",
            password: ""
        },
        reg: {
            name: "Shubham Prasanna",
            email: "shubham@webelves.co",
            username: "shubham",
            password: "marshal",
            re_password: "marshal"
        }
    }
  },
  methods: {
      goToHome() {
          this.$router.push("/")
      },
      register() {
          if(this.reg.password === this.reg.re_password) {
              var payload = {
                  name: this.reg.name,
                  email: this.reg.email,
                  password: this.reg.password
              }
              this.$store.dispatch('user/register', payload)
          }
          else {
              this.password_mismatch = true;
          }
      },
      login() {
          this.$store.dispatch('user/login', this.log);
      },
      social_login(type) {
          this.$store.dispatch('user/social_authenticate', type)
      }
  }
}
</script>
<style lang="stylus" scoped>
.right-col
    box-shadow 5px 0 5px -5px #ffe067

.logo
    width 200px

.login-card
    width 500px;
    margin 0 auto
    margin-top 10rem !important
</style>
