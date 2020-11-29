<template>
  <q-page class="editor-container">
    <resources></resources>
    <div ref="editor" class="editor"></div>
    <properties></properties>
  </q-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { fabric } from 'fabric';
import { Pepsi } from '../pepsi';
import Resources from '../components/Resources';
import Properties from '../components/Properties';

@Component({
  components: {
    Resources,
    Properties
  }
})
export default class Editor extends Vue {
  left = false;
  right = false;
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
      el: this.$refs.editor,
    });
    // "add" rectangle onto canvas
    pepsi.add(rect);
  }
}
</script>
<style lang="scss" scoped>
.editor-container {
  display: flex;
}
.editor {
  flex: 1;
}
</style>