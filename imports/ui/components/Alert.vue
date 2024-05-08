<template>
    <Notivue v-slot="item">
        <Notification :item="item" />
    </Notivue>
</template>

<script setup>
import { Notivue, Notification} from 'notivue'
</script>


<style scoped></style>  