import vueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example-2";
import Bookables from "./bookable/Bookables";

const routes = [
    {
        path : "/" ,
        component : ExampleComponent ,
        name : "home" ,
    },
    {
        path : "/second" ,
        component : Example2 ,
        name : "second" ,
    },
    {
        path : "/bookables" ,
        component : Bookables ,
        name : "bookable" ,
    },
];

const router = new vueRouter({
    routes ,
    mode : "history" ,
});

export default router ;
