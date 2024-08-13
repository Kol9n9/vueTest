<template>
    <div class="headerWrapper">
        <div class="logo">
        <img src="https://tis.tomsk.gov.ru/img/logo.png" alt="logo"/>
        <a href="#">
            <span>ТИС ТО</span>
        </a>
    </div>
    <div class="mainLinks">
        <div class="linkItem">
            <a href="#" class="button button_middle button_round active">
                <font-awesome-icon icon="home" class="linkIcon active"/>
            </a>
            <div>Старт</div>
        </div>
        <div class="linkItem">
            <a href="#" class="button button_middle button_round">
                <font-awesome-icon icon="code-fork"/>
            </a>
            <div>Процесы</div>
        </div>
    </div>
    <div class="rightLinks">
        <div class="linkItem">
            <a href="#" class="button button_middle button_round">
                <font-awesome-icon icon="home" class="linkIcon active"/>
            </a>
            <div>Старт</div>
        </div>
        <div class="linkItem">
            <a href="#" class="button button_middle button_round">
                <font-awesome-icon icon="code-fork"/>
            </a>
            <div>Процесы</div>
        </div>
    </div>
    </div>
</template>
<script>
</script>
<style scoped>

    .logo{
        width: 400px;
        float: left;
    }
    .logo img {
        width: 60px;
        height: 55px;
        position: absolute;
        top: 8px;
        left: 8px;
    }
    .logo span{
        color: #428143;
        font-size: 2.2em;
        text-transform: none;
        margin: 25px 0 17px 107px;
        display: inline-block;
        line-height: 1;
    }

    .mainLinks, .rightLinks{
        margin-top: 9px;
        display: inline-block;
    }
    .rightLinks{
        float:right;
    }
    .linkItem{
        display: inline-block;
        text-align: center;
        color: #303030;
        padding: 0 5px;
    }
    .linkItem a{
        font-size: 1.3em;
    }
    .linkItem div{
        font-size: 0.9em;
    }
</style>