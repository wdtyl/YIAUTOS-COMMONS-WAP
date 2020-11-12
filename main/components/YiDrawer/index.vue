<template>
  <div>
    <van-popup 
     v-model="show" 
     :close-on-popstate="closeOnPopstate"
     :lazy-render="lazyRender"
     :lock-scroll="lockScroll"
     :overlay-class="overlayClass" 
     :round="round" 
     :duration="duration" 
     :overlay-style="overlayStyle" 
     :overlay="overlay" 
     :position="position" 
     :closeable="closeable"
     :close-icon="closeIcon"
     :transition="transition"
     :close-on-click-overlay="closeOnClickOverlay"
     :safe-area-inset-bottom="safeAreaInsetBottom"
     :close-icon-position="closeIconPosition"
     :get-container="getContainer"
     :style="{ height: height ,width:width}" 
     @click-overlay="onClickOverlay"
     @click="onClick"
     @open="onOpen"
     @opened="onOpend"
     @close="onClose"
     @closed="onClosed"
     >
     <slot></slot>
     </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop ,Emit} from 'vue-property-decorator';
@Component
export default class YiDrawer extends Vue {
//props
@Prop({
      default:false
  }) safeAreaInsetBottom:boolean;
@Prop({
      default:true
  }) overlay:boolean;
//是否在点击遮罩层后关闭
@Prop({
      default:true
  }) closeOnClickOverlay: boolean;
  //是否显示关闭图标
@Prop({
      default:false
  }) closeable:boolean;
@Prop({
      default:true
  }) lazyRender:boolean;
@Prop({
      default:true
  }) closeOnPopstate :boolean;
@Prop({
      default:false
  }) show:boolean;
  //侧滑框高
@Prop({
      default:'100%'
  }) height:string;
  //关闭图标位置，可选值为top-left bottom-left bottom-right
@Prop({
      default:'top-right'
  }) closeIconPosition:string;
  //指定挂载的节点，可以传入选择器，或一个返回节点的函数
@Prop(String) getContainer:string | () => Element;
   @Prop({
      default:'80%'
  }) width:string
  //弹出位置，可选值为 top bottom right left
@Prop({
      default:'right'
  }) position:string;
@Prop({
      default:false
  }) round:boolean;
@Prop(String) overlayClass:string|undefined;
@Prop(String) overlayStyle:string|undefined;
@Prop({
      default:.3
  }) duration:number;
@Prop({
      default:true
  }) lockScroll:boolean;
@Prop({
      default:'cross'
  }) closeIcon:string;
@Prop(String) transition:string;

@Emit()
onClickOverlay(){
    this.$emit('onClickOverlay')
}
@Emit()
onClick(e){
  this.$emit('onClick',e)
}
@Emit()
onOpen(){
    this.$emit('onOpen')
}
@Emit()
onOpend(){
   this.$emit('onOpend')
}
@Emit()
onClose(){
 this.$emit('onClose')
}
@Emit()
onClosed(){
 this.$emit('onClosed')
}
}
</script>

<style lang="scss" scoped>
</style>