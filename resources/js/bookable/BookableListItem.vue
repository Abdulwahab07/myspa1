<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5> {{ title }}</h5>
                    </div>
                    <br/>
                    <div class="card-body">
                         {{ content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {"title":String , "content":String, "price":Number},
    mounted() {
        console.log(this.title);
    }
};
</script>
