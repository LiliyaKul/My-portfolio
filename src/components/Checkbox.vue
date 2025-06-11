<script setup>
import { ElIcon } from 'element-plus'
import { Check } from '@element-plus/icons-vue'; 
</script>

<template>
    <div class="checkbox__wrapper">
        <label class="checkbox">
            <input type="checkbox" class="checkbox__input">
            <div class="checkbox__state">
                <div class="checkbox__control">
                    <el-icon class="checkbox__icon"><Check /></el-icon>
                </div>
                <div class="checkbox__title">
                    Default
                </div>
            </div>
        </label>
        <label class="checkbox">
            <input type="checkbox" class="checkbox__input" checked>
            <div class="checkbox__state">
                <div class="checkbox__control">
                    <el-icon class="checkbox__icon"><Check /></el-icon>
                </div>
                <div class="checkbox__title">
                    Checked
                </div>
            </div>
        </label>
        <label class="checkbox__item">
            <input type="checkbox" class="checkbox__input" disabled>
            <div class="checkbox__state">
                <div class="checkbox__control">
                    <el-icon class="checkbox__icon"><Check /></el-icon>
                </div>
                <div class="checkbox__title">
                    Disabled
                </div>
            </div>
        </label>
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
&lt;label class=&quot;checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;checkbox__input&quot;&gt;
    &lt;div class=&quot;checkbox__state&quot;&gt;
        &lt;div class=&quot;checkbox__control&quot;&gt;
            &lt;svg class=&quot;checkbox__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#check&quot;&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;checkbox__title&quot;&gt;
            Default
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;checkbox__input&quot; checked&gt;
    &lt;div class=&quot;checkbox__state&quot;&gt;
        &lt;div class=&quot;checkbox__control&quot;&gt;
            &lt;svg class=&quot;checkbox__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#check&quot;&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;checkbox__title&quot;&gt;
            Checked
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;checkbox__item&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;checkbox__input&quot; disabled&gt;
    &lt;div class=&quot;checkbox__state&quot;&gt;
        &lt;div class=&quot;checkbox__control&quot;&gt;
            &lt;svg class=&quot;checkbox__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#check&quot;&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;checkbox__title&quot;&gt;
            Disabled
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;  
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.checkbox {
    display: inline-block;
}

.checkbox__control {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #495057;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox__input {
    position: absolute;
    left: -100vw;
}

.checkbox__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.checkbox__title {
    font-family: &#039;Inter&#039;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.checkbox__icon {
    height: 24px;
    width: 24px;
    display: none;
    color: white;
}

.checkbox__input:checked ~ .checkbox__state .checkbox__control {
    background-color: rgb(109, 0, 109);
    border-color: rgb(109, 0, 109);
}

.checkbox__input:checked ~ .checkbox__state .checkbox__icon {
    display: block;
}

.checkbox__input:focus ~ .checkbox__state .checkbox__title {
    text-decoration: underline;
}

.checkbox__input:disabled ~ .checkbox__state .checkbox__control {
    background-color: #DDE2E5;
    color: #DDE2E5;
}

                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.el-icon svg {
    height: 2em;
    width: 2em;
}
.checkbox__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.checkbox {
    display: inline-block;
}

.checkbox__control {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #495057;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.checkbox__input {
    position: absolute;
    left: -100vw;
}

.checkbox__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.checkbox__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.checkbox__icon {
    height: 36px;
    width: 36px;
    display: none;
    color: white;
    text-align: center;
}

.checkbox__input:checked ~ .checkbox__state .checkbox__control {
    background-color: rgb(109, 0, 109);
    border-color: rgb(109, 0, 109);
}

.checkbox__input:checked ~ .checkbox__state .checkbox__icon {
    display: block;
}

.checkbox__input:focus ~ .checkbox__state .checkbox__title {
    text-decoration: underline;
}

.checkbox__input:disabled ~ .checkbox__state .checkbox__control {
    background-color: #DDE2E5;
    color: #DDE2E5;
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