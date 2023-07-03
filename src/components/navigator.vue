<template>
    <nav class="nav-main">
        <router-link class="mr-5" to="/">Home</router-link>
        <router-link to="/test/2">Link with props</router-link>
    </nav>
</template>

<style scoped>
.nav-main {
    box-shadow: 1px 1px 10px rgb(0, 0, 0, .1);
    display: flex;
    align-items: center;
    padding-left: 26px;
}

.nav-main a {
    font-size: 1rem;
    color: rgb(0, 0, 0, .6);
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 1px;
    transition: color .2s;
}

.nav-main a:hover{
    color: rgb(74, 222, 128);
}
</style>