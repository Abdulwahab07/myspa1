<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{ name : 'home page'}">Home</router-link>
            <router-link class="btn nav-button" :to="{ name : 'second page' }">second</router-link>
        </nav>
        <div class="container mt-4 mb-4 mr-4 ml-4">
            <router-view></router-view>
        </div>
    </div>
</template>
