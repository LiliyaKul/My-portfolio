<script setup>
import { ElIcon } from 'element-plus'
import { ArrowUp } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'

const iconsRotationState = [
  ref(false),
  ref(false),
  ref(false)
];

const toggleRotate = index => {
  if (!iconsRotationState[index]) return; // Проверяем наличие значения в индексе
  iconsRotationState[index].value = !iconsRotationState[index].value;
};
</script>

<template>
<div class="accordion__wrapper">
    <div class="accordion">
        <details class="accordion__item" open>
            <summary class="accordion__summary">
                <div class="accordion__title">Accordion item 1</div>
                <el-icon class="accordion__icon" color="black" :class="{ rotated: iconsRotationState[0]?.value }" @click="toggleRotate(0)"><ArrowUp /></el-icon>
            </summary>
            <div class="accordion__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            </div>
        </details>
        <details class="accordion__item">
            <summary class="accordion__summary">
                <div class="accordion__title">Accordion item 2</div>
                <el-icon class="accordion__icon" color="black" :class="{ rotated: iconsRotationState[1]?.value }" @click="toggleRotate(1)"><ArrowDown /></el-icon>                      
            </summary>
            <div class="accordion__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            </div>
        </details>
        <details class="accordion__item">
            <summary class="accordion__summary">
                <div class="accordion__title">Accordion item 3</div>
                <el-icon class="accordion__icon" color="black" :class="{ rotated: iconsRotationState[2]?.value }" @click="toggleRotate(2)"><ArrowDown /></el-icon>                      
            </summary>
            <div class="accordion__text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </div>
        </details>
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
&lt;div class=&quot;accordion&quot;&gt;
    &lt;details class=&quot;accordion__item&quot; open&gt;
        &lt;summary class=&quot;accordion__summary&quot;&gt;
            &lt;div class=&quot;accordion__title&quot;&gt;Accordion item 1&lt;/div&gt;
            &lt;svg class=&quot;accordion__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#frame&quot;&gt;
            &lt;/svg&gt;
        &lt;/summary&gt;
        &lt;div class=&quot;accordion__text&quot;&gt;
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        &lt;/div&gt;
    &lt;/details&gt;
    &lt;details class=&quot;accordion__item&quot;&gt;
        &lt;summary class=&quot;accordion__summary&quot;&gt;
            &lt;div class=&quot;accordion__title&quot;&gt;Accordion item 2&lt;/div&gt;
            &lt;svg class=&quot;accordion__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#frame&quot;&gt;
            &lt;/svg&gt;                       
        &lt;/summary&gt;
        &lt;div class=&quot;accordion__text&quot;&gt;
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        &lt;/div&gt;
    &lt;/details&gt;
    &lt;details class=&quot;accordion__item&quot;&gt;
        &lt;summary class=&quot;accordion__summary&quot;&gt;
            &lt;div class=&quot;accordion__title&quot;&gt;Accordion item 3&lt;/div&gt;
            &lt;svg class=&quot;accordion__icon&quot;&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#frame&quot;&gt;
            &lt;/svg&gt;                      
        &lt;/summary&gt;
        &lt;div class=&quot;accordion__text&quot;&gt;
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        &lt;/div&gt;
    &lt;/details&gt;
&lt;/div&gt;
            </pre>    
        </div>
        <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
            <pre>
.accordion__summary {
    display: flex;
    justify-content: space-between;
    color: #212429;
}

.accordion__text {
    color: #495057;
    padding-top: 16px;
    padding-bottom: 8px;
}

.accordion__summary::-webkit-details-marker {  /* нестандартный псевдоэлемент Google Chrome */
    display: none;
}

.accordion__icon {
    align-self: right;
    width: 26px;
    height: 26px;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}

.accordion__item {
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    border: 1px solid #ACB5BD;
    border-radius: 8px;
    padding: 24px 32px 24px 32px;
    background-color: white;
}

.accordion__item:last-child {
    margin-bottom: 0;
}
            </pre>  
        </div>
    </div>
</div>
</template>

<style scoped>
.accordion__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.accordion__summary {
    display: flex;
    justify-content: space-between;
    color: #212429;
}

.accordion__text {
    color: #495057;
    padding-top: 16px;
    padding-bottom: 8px;
}

.accordion__summary::-webkit-details-marker {  /* нестандартный псевдоэлемент Google Chrome */
    display: none;
}

.accordion__icon {
    align-self: right;
    width: 26px;
    height: 26px;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}

.accordion__item {
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    border: 1px solid #ACB5BD;
    border-radius: 8px;
    padding: 24px 32px 24px 32px;
    background-color: white;
}

.accordion__item:last-child {
    margin-bottom: 0;
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
    color: var(--grey-4)
}

@media screen and (max-width: 768px) {
    .main__inner {
        grid-template-columns: auto;
    }

    .component-description {
        background: var(--white);
        padding: 32px 16px;
    }

    .component-description__title {
        font-family: Inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: var(--grey-4)
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