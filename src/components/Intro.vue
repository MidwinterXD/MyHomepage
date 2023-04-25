
<template>
    <div id="intro">
        <h1 class="intro-title">MidwinterXD</h1>
        <h2 class="intro-subtitle">A GameDesigner&Developer,Visual Art Lover</h2>
        <!-- 跳转另一个页面，原页面刷新 -->
        <div class="intro-enter">
            <a href="https://game.midwinterxd.com" >  ENTER  </a>
        </div>
        
       
    </div>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }

</script>
<style>
#intro
    {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        /* 鼠标不可选区 */
        user-select: none;
        /* 不遮挡鼠标指针 */
        pointer-events: none;
        
        
    }
    .intro-title{
        /* 白色 */
        color: rgb(255, 255, 255);
        text-shadow: 0 0 10px #912929;
        text-align:center; 
        font-size: 100px; 
        margin-top: 2em;
	    margin-bottom: 0.1em;
        font-family: STXingkai, serif;

        @media screen and (max-width: 50em) {
		    font-size: 3.5rem;
        }
	}

        
    .intro-subtitle{
        /* 白色 */
        color: rgb(196, 196, 196);
        text-align:center; 
        font-size: 20px; 
        font-family: 'STFangsong';
        /* 字体间距 */
        letter-spacing: 3px;
        /* 斜体 */
        font-style: italic;

        @media screen and (max-width: 50em) {
		    font-size: 0.1rem;
	    }
		

    }
    .intro-enter{
        animation-name: slidein-enter;
        animation-duration: 2s;
    }
    .intro-enter a{
        /* 白色 */
        color: rgb(255, 255, 255);
        text-shadow: 0 0 10px #912929;
        text-align:center; 
        margin-top: 0%;
        margin-bottom: 0%;
        font-size: 18px; 
        font-family: 'FZShuTi';
        /* 字体间距 */
        letter-spacing: 6px;
        /* 行距 */
        line-height: 10em;
        /* 没有下划线 */
        text-decoration: none;
        /* 边框 */
        border: 1px solid rgb(255, 255, 255);
        /* 内边界 */
        padding: 0.5em 1em;
   
        @media screen and (max-width: 50em) {
		    font-size: 0.5rem;
	    }

        pointer-events: auto;


        
    }
    
    @keyframes slidein-enter {
    from {
    margin-top: 70%;
    }

    to {
    margin-top: 0%;
    }
    }
    
   

    

</style>