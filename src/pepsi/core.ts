import {
  fabric
} from 'fabric';
import ResizeObserver from 'resize-observer-polyfill';

export interface EditorOptions {
  el: HTMLElement;
}


class Pepsi  {
  private resizeObserver!: ResizeObserver | null;
  options: EditorOptions;
  canvasElement: HTMLCanvasElement
  canvas: fabric.Canvas

  constructor(options: EditorOptions) {
    this.options = options;
    this.canvasElement = document.createElement('canvas');
    this.options.el.appendChild(this.canvasElement);
    this.canvas = new fabric.Canvas(this.canvasElement);
    this.createResizeObserver();
  }

  add(data: fabric.Object) {
    this.canvas.add(data);
  }



  createResizeObserver() {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const {
          width,
          height
        } = entry.contentRect;
        const element = this.canvas.getElement();
        element.style.width = width + 'px';
        element.style.height = height + 'px'; 
        this.canvas.setWidth(width);
        this.canvas.setHeight(height);
      }
    });

    this.resizeObserver.observe(this.options.el);
  }

  destroyResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}

export default Pepsi;