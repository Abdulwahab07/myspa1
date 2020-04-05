<template>
    <div>
        <BookableListItem :title="bookable1.title" :content="bookable1.content" :price="1000000"></BookableListItem>
        <BookableListItem :title="bookable2.title" :content="bookable2.content" :price="1300000"></BookableListItem>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components :{
        BookableListItem ,
    },
    data() {
        return {
            bookable1: {
                title : "Very Expensive Villa",
                content : "A Very Expensive Villa Content"
            },
            bookable2: {
                title : "Semi Expensive Villa" ,
                content : "A Semi Expensive Villa Content"
            }

        };
    },

    created() {
        console.log('Created');
        console.log( this.bookable1);
        console.log( this.bookable2);

        setTimeout( () => {
            this.bookable1.content = "A Very Expensive Villa Content Description ";
            this.bookable2.content = "A Semi Expensive Villa Content Description" ;
        } , 5000);
    }
};
</script>
