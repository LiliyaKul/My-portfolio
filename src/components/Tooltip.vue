<script setup>
import { ElIcon } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'; 
</script>

<template>
    <div class="tooltip__wrapper">
        <div class="tooltip">
            <div class="tooltip__trigger">
                <el-icon class="tooltip__trigger_icon"><QuestionFilled /></el-icon>
            </div>
            <div class="tooltip__bubble">Helper Text</div>
        </div>
        <div class="component-description__code">
            <input type="radio" id="#html" name="component-description__code__tabs" class="component-description__code__tabs_html" autofocus checked>
            <input type="radio" id="#css" name="component-description__code__tabs" class="component-description__code__tabs_css">
            <div class="component-description__code__tabs__scroller">
                <label for="#html" class="component-description__code__tabs__scroller_html">HTML</label>
                <label for="#css" class="component-description__code__tabs__scroller_css">CSS</label>
            </div>
            <hr />
            <div class="component-description__code__tabs__content component-description__code__tabs__content_html">
                <pre>
 &lt;div class=&quot;tooltip&quot;&gt;
    &lt;div class=&quot;tooltip__trigger&quot;&gt;
        &lt;svg class=&quot;tooltip__trigger_icon&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#help&quot;&gt;
        &lt;/svg&gt;        
    &lt;/div&gt;
    &lt;div class=&quot;tooltip__bubble&quot;&gt;Helper Text&lt;/div&gt;
&lt;/div&gt;
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.tooltip {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    margin-top: 50px;
}

.tooltip__bubble {
    display: none;
    width: 129px;
    background: #374FC7;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
    color: #DDE2E5;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 10px;
    position: absolute;
    bottom: calc(100&#37; + 8px);
    left: 50&#37;;
    transform: translateX(-50&#37;);
}

.tooltip__bubble:before {
    content: &quot;&quot;;
    border: 6px solid transparent;
    border-top: 6px solid #374FC7;
    position: absolute;
    top: 100&#37;;
    left: 50&#37;;
    transform: translateX(-50&#37;);
}

.tooltip__trigger:hover ~ .tooltip__bubble {
    display: block;
}

.tooltip__trigger_icon {
    width: 24px;
    height: 24px;
}
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.tooltip__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.tooltip {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
    margin-top: 50px;
}

@media screen and (max-width: 375px) {
    .tooltip {
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
        margin-top: 50px;
        margin-left: 50px;
    }
}

.tooltip__bubble {
    display: none;
    width: 129px;
    background: rgb(109, 0, 109);
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
    color: #DDE2E5;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 10px;
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
}

.tooltip__bubble:before {
    content: "";
    border: 6px solid transparent;
    border-top: 6px solid rgb(109, 0, 109);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
}

.tooltip__trigger:hover ~ .tooltip__bubble {
    display: block;
}

.tooltip__trigger_icon {
    width: 24px;
    height: 24px;
}

.el-icon svg {
    height: 2em;
    width: 2em;
    color: rgb(109, 0, 109);
}

.component-description__code {
    background-color: white;
    padding: 20px;
    border-radius: 2%;
    margin-bottom: 50px;
    min-width: 500px;
}

@media screen and (max-width: 375px) {
      .component-description__code {
        min-width: 340px;
    }
} 

.component-description {
    background-color: white;
    padding: 32px 48px;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.component-description__preview {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.component-description__code__tabs__scroller {
    display: flex;
    gap: 40px;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.component-description__title {
    font-family: Inter;
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    color: #495057;
}

@media screen and (max-width: 768px) {
    .main__inner {
        grid-template-columns: auto;
    }

    .component-description {
        background: white;
        padding: 32px 16px;
    }

    .component-description__title {
        font-family: Inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #495057;
    }
    
}

.component-description__preview__elements {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30px 30px 30px;
    row-gap: 16px;
    column-gap: 50px;
    grid-auto-flow: column
}

.component-description__preview__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 16px;
    column-gap: 50px;
}

.component-description__code__tabs__content {
    display: none;
}

.component-description__code__tabs_html,
.component-description__code__tabs_css {
    position: absolute;
    left: -100vw;
}

.component-description__code__tabs_html:checked ~ .component-description__code__tabs__content_html {
    display: block;
}

.component-description__code__tabs_css:checked ~ .component-description__code__tabs__content_css {
    display: block;
}

.component-description__code__tabs_html:focus ~ .component-description__code__tabs__scroller .component-description__code__tabs__scroller_html {
    border-bottom: 5px solid black;
}

.component-description__code__tabs_css:focus ~ .component-description__code__tabs__scroller .component-description__code__tabs__scroller_css {
    border-bottom: 5px solid black;
}
</style>