<template>
    <transition name="fade">
        <div class="loading">
            <div class="spinner"></div>
        </div>
    </transition>
</template>

<style lang="stylus" scoped>
.fade-enter, .fade-leave-to
  opacity 0

.fade-enter-active, .fade-leave-active
  transition opacity 1s

.loading
    background-color rgba(82, 82, 82, 0.2)
    width 100%
    height 100%
    z-index 10
    top 0
    left 0
    position fixed
    
.spinner
    z-index 11
    position absolute
    top 50%
    left 50%
    border 8px solid rgba(0, 0, 0, 0.1)
    border-left-color #22a6b3
    border-radius 50%
    width 50px
    height 50px
    animation spin 1s linear infinite

@keyframes spin
    from
        transform translate(-50%, -50%)
    to 
        transform translate(-50%, -50%) rotate(360deg)

</style>