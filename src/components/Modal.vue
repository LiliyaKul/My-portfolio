<script setup>
import { ElIcon } from 'element-plus'
import { Close } from '@element-plus/icons-vue'; 

const modalOpen = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'  
}

const modalClose = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'initial';
}
</script>

<template>
    <div class="modal__wrapper">
        <button id="modal-open" class="button button_primary" @click="modalOpen">Open modal</button>
        <div id="modal" class="modal">
            <div class="modal__inner">
                <div id="modal-close"  @click="modalClose">
                    <el-icon class="modal__close"><Close /></el-icon>
                </div>
                <div class="modal__content">
                    <div class="modal__title">Modal title</div>
                    <div class="modal__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                         Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                </div>  
            </div>
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
&lt;button id=&quot;modal-open&quot; class=&quot;button button_primary&quot; @click=&quot;modalOpen&quot;&gt;Open modal&lt;/button&gt;
&lt;div id=&quot;modal&quot; class=&quot;modal&quot;&gt;
    &lt;div class=&quot;modal__inner&quot;&gt;
       &lt;div id=&quot;modal-close&quot; class=&quot;modal__close&quot;&gt;
            &lt;svg&gt;
                &lt;use href=&quot;../../assets/images/icons/sprite.svg#x&quot;&gt;
            &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div class=&quot;modal__content&quot;&gt;
            &lt;div class=&quot;modal__title&quot;&gt;Modal title&lt;/div&gt;
            &lt;div class=&quot;modal__description&quot;&gt;
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Exercitation veniam consequat sunt nostrud amet.
            &lt;/div&gt;
        &lt;/div&gt;  
    &lt;/div&gt;
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.modal {
    position: fixed;
    background-color: rgba(196, 196, 196, 0.5);;
    width: 100&#37;;
    height: 100&#37;;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
}

.modal__inner {
    width: 428px;
    border-radius: 8px;
    background: white; 
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50&#37;;
    left: 50&#37;;
    transform: translateX(-50&#37;) translateY(-50&#37;);
}

.modal__close {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
}

.modal__title {
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #334D6E;
    text-align: left;
    margin-bottom: 14px;
}

.modal__description {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.button {
    font-family: Roboto;
    font-size: 16px;
    line-height: 18.75px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    padding: 15px 53px 14px 53px;
    font-weight: 500;
    height: 48px;
    width: 200px;
}
.button_primary {
    color: white;
    background: rgb(109, 0, 109);
    transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
}
.modal__wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.modal {
    position: fixed;
    background-color: rgba(196, 196, 196, 0.5);;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
}

.modal__inner {
    width: 428px;
    border-radius: 8px;
    background: white; 
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.modal__close {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
}

.modal__title {
    font-family: Inter;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #334D6E;
    text-align: left;
    margin-bottom: 14px;
}

.modal__description {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}
.component-description__code {
    background-color: white;
    padding: 20px;
    border-radius: 2%;
    margin-bottom: 50px;
    min-width: 500px;
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