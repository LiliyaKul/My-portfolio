<script setup>
import { ElIcon } from 'element-plus'
import { SuccessFilled, Warning } from '@element-plus/icons-vue'; 
import { onMounted, nextTick, ref } from 'vue';

const input = ref(null);

onMounted(() => {
  nextTick(() => {
    if (input.value) {
      input.value.focus();
    }
  });
});
</script>

<template>
    <div class="input-component__wrapper">
         <div class="input">
            <label class="input__label">LABEL</label>
            <div class="input__wrapper">
                <el-icon class="input__icon input__icon_success"><SuccessFilled/></el-icon>
                <el-icon class="input__icon input__icon_error"><Warning/></el-icon>
                <input type="text" ref="input" placeholder="Placeholder" name="input" class="input__field">
            </div>
        </div>
        <div class="input">
            <label class="input__label">FOCUS</label>
            <div class="input__wrapper">
                 <el-icon class="input__icon input__icon_success"><SuccessFilled/></el-icon>
                 <el-icon class="input__icon input__icon_error"><Warning/></el-icon>
                <input :ref="'input'" autofocus type="text" placeholder="Filled Input" name="input" class="input__field">
            </div>
        </div>
        <div class="input input_success">
            <label class="input__label">SUCCESS</label>
            <div class="input__wrapper">
                 <el-icon class="input__icon input__icon_success"><SuccessFilled/></el-icon>
                 <el-icon class="input__icon input__icon_error"><Warning/></el-icon>
                <input autofocus type="text" placeholder="Success" name="input" class="input__field">
            </div>
        </div>
        <div class="input input_error">
            <label class="input__label">ERROR</label>
            <div class="input__wrapper">
                 <el-icon class="input__icon input__icon_success"><SuccessFilled/></el-icon>
                 <el-icon class="input__icon input__icon_error"><Warning/></el-icon>
                <input autofocus ref="input" type="text" placeholder="Error" name="input" class="input__field">
            </div>
        </div>
        <div class="input input_disabled">
            <label class="input__label">DISABLED</label>
            <div class="input__wrapper">
                 <el-icon class="input__icon input__icon_success"><SuccessFilled/></el-icon>
                 <el-icon class="input__icon input__icon_error"><Warning/></el-icon>
                <input type="text" ref="input" placeholder="Disabled" name="input" class="input__field" disabled>
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
&lt;div class=&quot;input&quot;&gt;
    &lt;label class=&quot;input__label&quot;&gt;LABEL&lt;/label&gt;
    &lt;div class=&quot;input__wrapper&quot;&gt;
        &lt;!-- &lt;svg class=&quot;input__icon input__icon_success&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#success&quot;&gt;
        &lt;/svg&gt;
        &lt;svg class=&quot;input__icon input__icon_error&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#error&quot;&gt;
        &lt;/svg&gt; --&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;Placeholder&quot; name=&quot;input&quot; class=&quot;input__field&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;input&quot;&gt;
    &lt;label class=&quot;input__label&quot;&gt;FOCUS&lt;/label&gt;
    &lt;div class=&quot;input__wrapper&quot;&gt;
        &lt;svg class=&quot;input__icon input__icon_success&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#success&quot;&gt;
        &lt;/svg&gt;
        &lt;svg class=&quot;input__icon input__icon_error&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#error&quot;&gt;
        &lt;/svg&gt;
        &lt;input 
            :ref=&quot;&#039;input&#039;&quot; 
            autofocus 
            type=&quot;text&quot; 
            placeholder=&quot;Filled Input&quot; 
            name=&quot;input&quot; 
            class=&quot;input__field&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;input input_success&quot;&gt;
    &lt;label class=&quot;input__label&quot;&gt;SUCCESS&lt;/label&gt;
    &lt;div class=&quot;input__wrapper&quot;&gt;
        &lt;svg class=&quot;input__icon input__icon_success&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#success&quot;&gt;
        &lt;/svg&gt;
        &lt;svg class=&quot;input__icon input__icon_error&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#error&quot;&gt;
        &lt;/svg&gt;
        &lt;input autofocus type=&quot;text&quot; placeholder=&quot;Success&quot; name=&quot;input&quot; class=&quot;input__field&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;input input_error&quot;&gt;
    &lt;label class=&quot;input__label&quot;&gt;ERROR&lt;/label&gt;
    &lt;div class=&quot;input__wrapper&quot;&gt;
        &lt;svg class=&quot;input__icon input__icon_success&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#success&quot;&gt;
        &lt;/svg&gt;
        &lt;svg class=&quot;input__icon input__icon_error&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#error&quot;&gt;
        &lt;/svg&gt;
        &lt;input autofocus type=&quot;text&quot; placeholder=&quot;Error&quot; name=&quot;input&quot; class=&quot;input__field&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;input input_disabled&quot;&gt;
    &lt;label class=&quot;input__label&quot;&gt;DISABLED&lt;/label&gt;
    &lt;div class=&quot;input__wrapper&quot;&gt;
        &lt;svg class=&quot;input__icon input__icon_success&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#success&quot;&gt;
        &lt;/svg&gt;
        &lt;svg class=&quot;input__icon input__icon_error&quot;&gt;
            &lt;use href=&quot;../../assets/images/icons/sprite.svg#error&quot;&gt;
        &lt;/svg&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;Disabled&quot; name=&quot;input&quot; class=&quot;input__field&quot; disabled&gt;
    &lt;/div&gt;
&lt;/div&gt;   
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.input {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input__label {
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 4&#37;;
    color: #ACB5BD;
}

.input__field {
    width: 100&#37;;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #DDE2E5;
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #495057;
    padding: 0 24px;  
}

.input__field::placeholder {
    color: #DDE2E5;
}

.input__wrapper {
    position: relative;
}

.input__icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    right: 16px;
} 

.input__icon_success {
    display: none;
    color: #374FC7;
}

.input__icon_error {
    display: none;
    color: #F03D3E;
}

.input__field:focus {
    border-color: #374FC7;
}

.input_success .input__icon_success {
    display: block;
}

.input_error .input__icon_error {
    display: block;
}

.input_error .input__field {
    border: 1px solid #F03D3E;
}

.input_disabled .input__field {
    color: #DDE2E5;
    background-color: #F8F9FA;
}
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>

.input-component__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.input {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input__label {
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 4%;
    color: #ACB5BD;
}

.input__field {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #DDE2E5;
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #495057;
    padding: 0 24px;  
}

@media screen and (max-width: 768px) {
    .input__field {
        height: 48px;
        font-weight: 400;
        font-size: 16px;
    }
}

.input__field::placeholder {
    color: #DDE2E5;
}

.input__wrapper {
    position: relative;
}

.input__icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 13px;
    right: 16px;
} 

@media screen and (max-width: 768px) {
    .input__icon {
        top: 9px;
        right: 18px;
    } 
}

.input__icon_success {
    display: none;
    color: #374FC7;
}

.input__icon_error {
    display: none;
    color: #F03D3E;
}

.input__field:focus {
    border-color: #374FC7;
}

.input_success .input__icon_success {
    display: block;
}

.input_error .input__icon_error {
    display: block;
}

.input_error .input__field {
    border: 1px solid #F03D3E;
}

.input_disabled .input__field {
    color: #DDE2E5;
    background-color: #F8F9FA;
}

.el-icon svg {
    height: 2em;
    width: 2em;
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
        background: var(--white);
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