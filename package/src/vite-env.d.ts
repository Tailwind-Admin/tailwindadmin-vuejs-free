/// <reference types="vite/client" />
declare module "*.css";
declare module "swiper/css";
declare module 'vue-easy-lightbox';
declare module 'vue-slick-carousel';

declare module '*?raw' {
  const content: string;
  export default content;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}




declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    disable?: boolean | 'mobile' | 'phone' | 'tablet';
    [key: string]: any;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
    destroy(): void;
  };

  export default AOS;
}
