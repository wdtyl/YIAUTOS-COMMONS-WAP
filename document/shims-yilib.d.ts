import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $localConfig: string,
    getName: Function,
  }
}
