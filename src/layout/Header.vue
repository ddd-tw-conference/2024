<script setup>
import {ref} from 'vue';

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<template>
    <header class="sticky top-0 z-20 bg-gray-950/70 border-b-2 border-b-blue-800/30 backdrop-blur text-white pt-3 pb-3">
        <div class="container mx-auto">
            <nav class="md:flex justify-between pl-5 md:pl-0">
                <div class="flex justify-between">
                    <router-link class="text-xl font-bold" to="/">
            <span class="flex pt-2 pb-3">
              <img alt="Logo of DDDesign TW 2023" src="/favicon.svg" />
              <span class="ml-2">DDDesign TW</span>
            </span>
                    </router-link>
                    <div class="mt-2 md:hidden" @click="toggleNav">
                        <button class="text-white focus:outline-none pr-5 md:pr-0" type="button">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    fill-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>

                <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col md:flex md:flex-row justify-end">
                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/about">
                            關於我們
                        </router-link>
                    </li>

                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/agenda">
                            議程資訊
                        </router-link>
                    </li>

                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/call-for-proposals">
                            徵求講者
                        </router-link>
                    </li>

                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/sponsors">
                            企業贊助
                        </router-link>
                    </li>
                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/volunteer">
                            招募志工
                        </router-link>
                    </li>
                    <li class="pt-3 pb-3 mr-5">
                        <router-link class="font-me text-white hover:text-blue-300" to="/tickets">
                            購票
                        </router-link>

                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style>
/* @import '../style.css'; */
</style>
