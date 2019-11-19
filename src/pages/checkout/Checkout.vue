<template>
    <div class="checkout">
        <h2 class="title">Método de pagamento</h2>
        <form>
            <div class="form-group">
                <label for="card-number">Número do cartão</label>
                <input type="text" id="card-number" />
            </div>
            <div class="form-group">
                <label for="card-holder">Nome do titular</label>
                <input type="text" id="card-holder" />
            </div>
            <div class="form-group-inline">
                <div class="form-group expiration-date">
                    <label for="expiration-month">Data de expiração</label>
                    <div class="input-group">
                        <select id="expiration-month">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                        </select>
                        <select id="expiration-year">
                            <option>2030</option>
                            <option>2029</option>
                            <option>2028</option>
                            <option>2027</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="cvv-code">Código de segurança</label>
                <input type="text" id="cvv-code" />
            </div>
            <div class="button-container">
                <button class="submit-button">Pagar</button>
            </div>
        </form>
    </div>
</template>

<style lang="stylus" scoped>
.checkout
    padding 0 20px
    width 30%
    height 500px
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 4px

.title
    text-align left

.form-group
    width 100%
    text-align left
    margin-bottom 20px

    label
        display block
        margin 10px 0    

    input, select 
        width 100%
        height 32px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 0
        box-sizing content-box


.expiration-date
    .input-group
        display flex
        justify-content space-between

        select
            width 46%

.form-group-inline
    display flex

.button-container
    position absolute
    width calc(100% - 40px) 
    bottom 20px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 1px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0
</style>