<template>
<div class='q-pa-xl height-100'>
<div class='row primary-bg'>
    <div class='col-md-6'>
        <div class='q-pa-xl secondary-color form-heading'>
            <p class='text-h4'> Give us a shout,<br>
                We'll make you a believer.
            </p>
            <div class='row'>
               <div class='col-md-6 q-py-md q-pr-md'>
                   <q-input standout dense filled class='secondary-bg primary-color text-h6' v-model="name" type="text" label="Name">
                    </q-input>
               </div>
               <div class='col-md-6 q-py-md'>
                    <q-input standout dense filled class='secondary-bg primary-color text-h6' v-model="email" type="email" label="E-Mail">
                    </q-input>
               </div>
              
            </div>
            <div> 
                <q-input
                standout
                v-model="text"
                filled
                dense
                label="Message"
                type="textarea"
                class='secondary-bg primary-color text-h6'
                />
            </div>
            <div class='q-pt-md q-pb-xl'>
                 <q-btn :ripple="{ center: true }" color="white" text-color="primary" label="Reach Us" class='blug-bg-button'  />
            </div>
        </div>
       
    </div>
     <div class='col-md-6'>
            Image
        </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" >
.form-heading
    padding-top 10rem
    padding-left 5rem

.blug-bg-button
    border-radius 0px
    box-shadow none
</style>
