<template>
  <div class="properties"></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Properties extends Vue {

}
</script>
<style lang="scss" scoped>
.properties {
  width: 300px;
  border-left: 1px solid #CFCFCF;
}
</style>