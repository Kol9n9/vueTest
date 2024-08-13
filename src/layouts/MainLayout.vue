<template>
    <div class="headerContainer">
        <header>
            <TheHeader/>
        </header>
        <TheBreadcrumb/>
        <transition name="fade">
            <aside v-show="sidebarStatus">
                <div>Sidebar</div>
            </aside>
        </transition>
        <button class="sidebar-button" @click="toggleSidebar">
            <font-awesome-icon :icon="['fas',sidebarIcon]" />
        </button>
    </div>
        
    <section style="height: 2000px; overflow-y: auto;">Content</section>
</template>
<script>
import { ref, defineComponent, computed } from 'vue';

import TheHeader from '../components/TheHeader.vue'
import TheSidebar from '../components/TheSidebar.vue'
import TheBreadcrumb from '../components/TheBreadcrumb.vue'


export default {
    name: 'MainLayout',
    setup(props,ctx){
        const sidebarStatus = ref(true);
        const toggleSidebar = function(){
            sidebarStatus.value = !sidebarStatus.value;
        }
        const sidebarIcon = computed(()=>{
            return sidebarStatus.value ? 'chevron-left' : 'chevron-right'
        })
        return {
            sidebarStatus,
            sidebarIcon,
            toggleSidebar
        }
    },
    components: {
        TheHeader, TheSidebar, TheBreadcrumb
    }
}
</script>
<style scoped>
    .headerContainer{
        position: sticky;
        top: 0;
    }
    aside{
        float: left;
        width: 400px;
        background: red;
    }

    .sidebarWrapper{
        position: relative;
    }
    .sidebar-button{
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.6s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        margin-left: -400px;
    }
</style>