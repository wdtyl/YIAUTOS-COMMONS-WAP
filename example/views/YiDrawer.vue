<template>
    <div class="skid-btn">
    <yi-button plain hairline type="primary" @click="onShowAction('T')"
      >Top</yi-button
    >
    <yi-button plain hairline type="primary" @click="onShowAction('B')"
      >Bottom</yi-button
    >
    <yi-button plain hairline type="primary" @click="onShowAction('L')"
      >Left</yi-button
    >
    <yi-button plain hairline type="primary" @click="onShowAction('R')"
      >Right</yi-button
    >
      <yi-drawer :show.sync="isShow" :closeable='true' :position="position" @onClosed="onClosed" @onClixkOverlay="onClixkOverlay">
      </yi-drawer>
    </div>
</template>

<script>
    export default {
        name:'YiDrawereeee',
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            onShowAction(pos){
                switch(pos){
                    case 'T':
                    this.position="top"
                    break;
                    case 'L':
                    this.position="left"
                    break;
                    case 'B':
                    this.position="bottom"
                    break;
                    default:
                    this.position="right"  
                }
                this.isShow = true
            },
             onClixkOverlay(){
                console.log('3333333333')
            },
            onClosed(){
                this.isShow =false
                console.log('closed')
            }
        }
    }
</script>

<style scoped>
.skid-btn{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center
}
button{
        width:100px;
        height: 40px;
        text-align: center;
        margin-top: 10px;
    }

</style>