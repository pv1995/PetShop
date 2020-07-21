<template>
<div class="q-px-md q-pt-xl q-pb-md">
 <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="bg-primary text-white shadow-2"
 >
        <q-tab name="breeds" label="BREEDS" /> 
        <q-tab name="vaccine" label="HEALTH AWARENESS" />
        <q-tab name="diet" label="DIETARY REQUIREMENTS" />
        
        
      </q-tabs>
      <q-separator />
        <div class="q-pa-sm">
            <q-tab-panels
            v-model="tab"
            animated
            transition-prev="scale"
            transition-next="scale"
            class="text-blue-10 text-center"
            >
                <q-tab-panel name="breeds">
                    <q-scroll-area style="height:85vh">
                    <div class="text-h3">
                        Breeds
                    </div>
                    <div class="q-pa-md">
                    <div class="row">
                      <div class="col-md-2 text-h6">
                      FILTERS 
                      </div>
                      <div class="col-md-10">
                          <div class="row">
                              <div class="q-pa-sm col-md-4" v-for='(card,index) in dogBreeds' :key='index'>
                                  <dog-card :breed='card' @clickfordetails='gotoPetDetail' />
                              </div>
                              <div class="q-pa-lg pageination-style">
                              <q-pagination
                              v-model="current"
                              :max="5"
                              :direction-links="true"
                              >
                              </q-pagination>
                              </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    </q-scroll-area>
          </q-tab-panel>
          <q-tab-panel name="vaccine">
               <q-scroll-area style="height:85vh">
           
          <div class="q-pb-xl tab-style">
            <div class="q-px-lg q-pb-xl">
                
            <p class="text-h4"> 7 Common Diseases To Look Out For!</p>
            <div class="q-pa-sm col-md-4" v-for='(disease,index) in dogDiseases' :key='index'>
    
            <q-tabs
                  v-model="tab1"
                  inline-label
                  
                  align="justify"
                  indicator-color="themeorange"
                  class="text-themeorange"
            >
                    <q-tab :name='disease.tabname' :label='disease.name' /> 
            </q-tabs>   
            <q-separator />
            <q-tab-panels
              v-model="tab1"
              animated
              transition-prev="scale"
              transition-next="scale"
              class="text-center"
              >
                  <q-tab-panel :name='disease.tabname'>
                      {{disease.content}}
                  </q-tab-panel>
            </q-tab-panels>
        <!-- <q-separator /> -->
        </div>

    <q-timeline layout='loose'>
      <q-timeline-entry heading>
        Vaccination Schedule 
        <br>
        
      </q-timeline-entry>

      <q-timeline-entry
        title="6 to 8 weeks"
        subtitle=""
        side="left"
        color="themeorange"
      >
        <div class="text-h7">
          Recommended Vaccinations : Distemper, measles, parainfluenza
          <br>
          Optional Vaccinations : Bordatella
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="10 to 12 weeks"
        subtitle=""
        side="right"
        color="themeorange"
      >
        <div class="text-h7">
          Recommended Vaccinations : DHPP (vaccines for distemper, adenovirus [hepatitis], parainfluenza, and parvovirus)
          <br>
          Optional Vaccinations : Coronavirus, Leptospirosis, Bordatella, Lyme disease
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="12 to 24 weeks"
        subtitle=""
        side="left"
        color="themeorange"
      >
        <div>
          Recommended Vaccinations : Rabies
          <br>
          Optional Vaccinations : None
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="14 to 16 weeks"
        subtitle=""
        side="right"
        color="themeorange"
      >
        <div>
          Recommended Vaccinations : DHPP
          <br>
          Optional Vaccinations : Coronavirus, Lyme disease, Leptospirosis
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="12 to 16 months"
        subtitle=""
        side="left"
        
        color='themeorange'
      >
        <div>
          Recommended Vaccinations : Rabies, DHPP
          <br>
          Optional Vaccinations : Coronavirus, Leptospirosis, Boradetella, Lyme disease 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Every 1 to 2 years"
        subtitle=""
        side="right"
        color="themeorange"
      >
        <div>
          Recommended Vaccinations : DHPP
          <br>
          Optional Vaccinations : Coronavirus, Leptospirosis, Bordetella, Lyme disease
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Every 1 to 3 years"
        subtitle=""
        side="left"
        color="themeorange"
      >
        <div>
          Recommended Vaccinations : Rabies (as required by law)
          <br>
          Optional Vaccinations : None
        </div>
      </q-timeline-entry>
    </q-timeline>
            </div>
            <div class="q-pb-md">
            <div class="text-h4 q-pb-md"> Deworming Schedule ...</div>
            <p class="text-h7">
               * Every 2 weeks until 3 months of age, starting at 2 weeks old. <br>
               * Once a month from 3 to 6 months of age. <br>
               * After 6 months, follow adult recommendations. Also after six months, use a heartworm preventative medication that is effective against hookworms and roundworms. <br>
            </p>
           </div>
            </div>
           
        </q-scroll-area>


          </q-tab-panel>
          <q-tab-panel name="diet">
            <q-scroll-area style="height:85vh">
            <div class="text-h3">Take Care of Your Pup's Diet </div>
            <div>
            <diet-card />
            </div>
            </q-scroll-area>
          </q-tab-panel>
       </q-tab-panels>
       </div>
</div>

    
</template>
<script>
import DogCard from "../components/pet101/BreedCard.vue";   
// import ExpansionBand from '../components/ExpansionBand.vue'; 
import DietCard from "../components/pet101/DietCard.vue"; 
export default {
  created() {
    this.$store.dispatch('pet101/getPetBreeds');
  },
  computed: {
    dogBreeds() {
      return this.$store.getters['pet101/getDogBreeds'];
    }
  },
    methods:{
        gotoPetDetail(breedName){
            console.log(breedName)
            this.$router.push({name:'BreedDetails', params: {name: breedName}})
        }
    },
     data () {
    return {
      tab: 'breeds',
      tab1: 'disease',
      OrangeColor:'#FFB677',
      step: 1,
      current: 1,
      dogCard: [
                {
                    id: 1,
                    img: "../statics/GSD.jpg",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                },
                {
                    id: 2,
                    img: "",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                },
                {
                    id: 3,
                    img: "",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                },
                {
                    id: 4,
                    img: "",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                },
                {
                    id: 5,
                    img: "",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                },
                {
                    id: 6,
                    img: "",
                    name: "German Shepherd",
                    family: "DOGGO 1"
                }

            ],
       dogDiseases : [
                {
                    id: 1,
                    tabname: "Parasites",
                    name: "1. Intestinal Parasites",
                    content: "Many puppies get intestinal parasites, such as roundworms or hookworms, early in life. Symptoms include loose stool and an upset stomach. 'A lot of puppies get them from their mother in the milk,' says Dr. Travis Anderson, a veterinarian at The Uptown Veterinarian in Minneapolis, Minnesota. 'Most puppies have them almost from birth and we usually just treat puppies right away.' The vet can offer an oral drug to paralyze the worms and enable your puppy to pass them in his poop. To prevent them, provide monthly heartworm medications that also treat and control intestinal parasites."
                },
                 {
                    id: 2,
                    tabname: "Parvovirus",
                    name: "2. Parvovirus",
                    content: "The virus is highly contagious and can be caught from direct or indirect contact with contaminated feces. Look for bloody diarrhea, vomiting and a loss of appetite. If you notice those symptoms, offer comfort care and get antibiotics to prevent secondary infections. However, you can easily avoid parvovirus by getting your puppy vaccinated. And if your puppy's mom has been vaccinated, she can pass on some of her protection against this disease to her babies through her milk."
                },
                {
                    id: 3,
                    tabname: "Coccidia",
                    name: "3. Coccidia",
                    content: "This parasite, which is usually found in standing water, can infest your puppy's gastrointestinal tract and the cells inside, Dr. Anderson says. Your puppy may get this if he wasn't living in a sanitary environment after birth. Symptoms include diarrhea, blood in the stool or dehydration. The vet can offer a drug to kill the parasite. Looking to avoid this illness altogether? Keep your puppy's water and environment sanitary and squeaky clean."
                },
                {
                    id: 4,
                    tabname: "Distemper",
                    name: "4. Canine Distemper",
                    content: "Carried by unvaccinated dogs and raccoons, distemper can cause nerve damage or weight loss and is dangerous without treatment. Dogs don't get colds, so if you notice your puppy has a runny nose, loss of appetite or stops eating altogether, get him to the vet. According to the American Veterinary Medical Association, there's no drug available to treat canine distemper, so comfort care is your best option. Provide lots of fluids, keep infected dogs away from healthy pups and pamper your dog with warmth and comfort. Vets recommend vaccinating your puppy."
                },
                {
                    id: 5,
                    tabname: "Heartworm",
                    name: "5. Heartworm Disease",
                    content: "If a pesky mosquito bites a dog with heartworm several houses down, it can pass the worm on to your pet if the bug then bites your dog. It takes up to six or seven months before your puppy shows signs of illness. Heartworms can cause heart failure and lung disease and are potentially deadly. You want to watch for fatigue, decrease in appetite and weight loss. To avoid this, give your dog a monthly heartworm preventative pill. If you see symptoms, get your dog to the vet as soon as possible, where the doctor will determine the best form of treatment. Your dog will probably receive medication to kill the heartworms, along with potential hospitalization and exercise restriction, according to the American Society for the Prevention of Cruelty to Animals (ASPCA)."
                },
                {
                    id: 6,
                    tabname: "Kennel",
                    name: "6. Kennel Cough",
                    content: "While this illness can strike any dog, Dr. Anderson says puppies are more vulnerable to kennel cough. According to the ASPCA, this is bronchitis and the closest your puppy will get to mimicking the human common cold. Your dog will have a persistent dry, honking cough. See your veterinarian for an antibiotic, offer supportive care (no stress or junk food for your little guy!) and keep your sick dog away from his puppy friends until he's better. A vaccination is available."
                },
                {
                    id: 7,
                    tabname: "Hypoglycemia",
                    name: "7. Hypoglycemia",
                    content: "Small dogs can end up with low blood sugar if they don't eat enough, Dr. Anderson says. Monitor your puppy's eating habits, especially while she's young enough to prevent it. If your dog has hypoglycemia, she may show signs of lethargy and possibly have seizures. When caring for your suffering dog, offer a proper diet and possibly diabetes medication provided by a vet"
                },


            ]
    }
  },
    
    components: {
        "dog-card": DogCard,
        // "disease-card": ExpansionBand,
        "diet-card": DietCard
    }
}
</script>
<style lang="stylus" >
// $
.pageination-style
    position: inherit;
    margin: 0 auto;

.tab-style
    padding-left: 150px;
    padding-right: 150px;
</style>
