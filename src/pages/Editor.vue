<template>
  <div ref="editor" class="editor"></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { fabric } from 'fabric';
import { Pepsi } from '../pepsi';

@Component
export default class Editor extends Vue {
  $refs!: {
    editor: HTMLCanvasElement
  }

  mounted() {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    const pepsi = new Pepsi({
      el: this.$refs.editor
    });
    // "add" rectangle onto canvas
    pepsi.add(rect);
  }
}
</script>
<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 500px;;
}
</style>