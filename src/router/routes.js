import Landing from "../pages/Landing.vue";
import ProductList from "../pages/ProductList.vue";
import Categories from "../pages/shop/Categories.vue";
import FAQ from "../pages/FAQ.vue";
import ContactUs from "../pages/ContactUs.vue";
import Pet101 from "../pages/Pet101Landing.vue";
import AllDogs from "../pages/AllDogs.vue";
import AllCats from "../pages/AllCats.vue";
import PetTrainingLanding from '../pages/training/PetTrainingLanding.vue';
import BreedDetails from "../pages/BreedDetails.vue";
import ProductDetail from "../pages/shop/ProductDetail.vue"
import Favorites from "../pages/shop/Favorites.vue"
import Cart from "../pages/shop/Cart.vue"
import LessonPacks from '../pages/training/LessonPacks.vue';
import Pack from '../pages/training/Pack.vue'
import Lesson from '../pages/training/Lesson.vue'

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: Landing
      },
      {
        path: "/faq",
        component: FAQ
      },
      {
        path: "/contactus",
        component: ContactUs
      },
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
  },
  {
    path: "/shop",
    component: () => import("layouts/ShopLayout.vue"),
    children: [
      { path: '', component: () => import('pages/shop/ShopLanding.vue') },
      {
        path: '/shop/categories',
        component: Categories
      },
      {
        path: '/shop/product/:id',
        component: ProductDetail
      },
      {
        path: '/shop/favorites',
        component: Favorites
      },
      {
        path: '/shop/cart',
        component: Cart
      }
    ]
  },
  {
    path: "/pet101",
    component: () => import("layouts/Pet101Layout.vue"),  
    children: [
      { path: "", component: Pet101, name:"Pet101" },
      { path: "/alldogs", component: AllDogs, name:"AllDogs" },
      { path: "/allcats", component: AllCats, name:"AllCats" },
      { path: "/breeddetails/:name", component: BreedDetails, name:"BreedDetails" }
    ]
  },
  {
    path: "/training",
    component: () => import("layouts/PetTrainingLayout.vue"),
    children: [
      {path: "",component: PetTrainingLanding, name: "PetTrainingLanding"},
      {path: "/packs", component: LessonPacks, name: "LessonPacks"},
      {path: "/pack/:id", component: Pack, name: "Pack"},
      {path: "/lesson/:id", component: Lesson, name: "Lesson"}
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
