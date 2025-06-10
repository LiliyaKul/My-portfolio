<script></script>

<template>
    <div class="radio__wrapper">
        <label class="radio">
            <input type="radio" name="radio-name" value="default" class="radio__input">
            <div class="radio__state">
                <div class="radio__control">
                    <div class="radio__circle"></div>
                </div>
                <div class="radio__title">
                    Default
                </div>
            </div>
        </label>
        <label class="radio">
            <input type="radio" name="radio-name" value="selected" class="radio__input" checked>
            <div class="radio__state">
                <div class="radio__control">
                    <div class="radio__circle"></div>
                </div>
                <div class="radio__title">
                    Selected
                </div>
            </div>
        </label>
        <label class="radio">
            <input type="radio" name="radio-name" value="disabled" class="radio__input" disabled>
            <div class="radio__state">
                <div class="radio__control">
                    <div class="radio__circle"></div>
                </div>
                <div class="radio__title">
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
 &lt;label class=&quot;radio&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;radio-name&quot; value=&quot;default&quot; class=&quot;radio__input&quot;&gt;
    &lt;div class=&quot;radio__state&quot;&gt;
        &lt;div class=&quot;radio__control&quot;&gt;
            &lt;div class=&quot;radio__circle&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;radio__title&quot;&gt;
            Default
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;radio&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;radio-name&quot; value=&quot;selected&quot; class=&quot;radio__input&quot; checked&gt;
    &lt;div class=&quot;radio__state&quot;&gt;
        &lt;div class=&quot;radio__control&quot;&gt;
            &lt;div class=&quot;radio__circle&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;radio__title&quot;&gt;
            Selected
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;radio&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;radio-name&quot; value=&quot;disabled&quot; class=&quot;radio__input&quot; disabled&gt;
    &lt;div class=&quot;radio__state&quot;&gt;
        &lt;div class=&quot;radio__control&quot;&gt;
            &lt;div class=&quot;radio__circle&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;radio__title&quot;&gt;
            Disabled
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;  
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.radio {
    display: inline-block;
}

.radio__control {
    width: 28px;
    height: 28px;
    border-radius: 50&#37;;
    border: 2px solid #495057;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio__circle {
    width: 18px;
    height: 18px;
    border-radius: 50&#37;;
    background-color: rgb(109, 0, 109);
    display: none;
}

.radio__input {
    position: absolute;
    left: -100vw;
}

.radio__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.radio__title {
    font-family: &#039;Inter&#039;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.radio__input:checked ~ .radio__state .radio__control {
    border-color: rgb(109, 0, 109);
}

.radio__input:checked ~ .radio__state .radio__control .radio__circle {
    display: block;
}

.radio__input:focus ~ .radio__state .radio__title {
    text-decoration: underline;
}

.radio__input:disabled ~ .radio__state .radio__control {
    background-color: #DDE2E5;
    color: #DDE2E5;
}
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.radio__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.radio {
    display: inline-block;
}

.radio__control {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #495057;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.radio__circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: rgb(109, 0, 109);
    display: none;
}

.radio__input {
    position: absolute;
    left: -100vw;
}

.radio__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.radio__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.radio__input:checked ~ .radio__state .radio__control {
    border-color: rgb(109, 0, 109);
}

.radio__input:checked ~ .radio__state .radio__control .radio__circle {
    display: block;
}

.radio__input:focus ~ .radio__state .radio__title {
    text-decoration: underline;
}

.radio__input:disabled ~ .radio__state .radio__control {
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