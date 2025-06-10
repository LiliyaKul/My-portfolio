<script></script>

<template>
    <div class="toggler__wrapper">
        <label class="toggler">
            <input type="checkbox" class="toggler__input">
            <div class="toggler__state">
                <div class="toggler__control">
                    <div class="toggler__inner"></div>
                </div>
                <div class="toggler__title">
                    Off
                </div>
            </div>
        </label>
        <label class="toggler">
            <input type="checkbox" class="toggler__input" checked>
            <div class="toggler__state">
                <div class="toggler__control">
                    <div class="toggler__inner"></div>
                </div>
                <div class="toggler__title">
                    On
                </div>
            </div>
        </label>
        <label class="toggler">
            <input type="checkbox" class="toggler__input" disabled>
            <div class="toggler__state">
                <div class="toggler__control">
                    <div class="toggler__inner"></div>
                </div>
                <div class="toggler__title">
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
&lt;label class=&quot;toggler&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;toggler__input&quot;&gt;
    &lt;div class=&quot;toggler__state&quot;&gt;
        &lt;div class=&quot;toggler__control&quot;&gt;
            &lt;div class=&quot;toggler__inner&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toggler__title&quot;&gt;
            Off
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;toggler&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;toggler__input&quot; checked&gt;
    &lt;div class=&quot;toggler__state&quot;&gt;
        &lt;div class=&quot;toggler__control&quot;&gt;
            &lt;div class=&quot;toggler__inner&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toggler__title&quot;&gt;
            On
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;
&lt;label class=&quot;toggler&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;toggler__input&quot; disabled&gt;
    &lt;div class=&quot;toggler__state&quot;&gt;
        &lt;div class=&quot;toggler__control&quot;&gt;
            &lt;div class=&quot;toggler__inner&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toggler__title&quot;&gt;
            Disabled
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/label&gt;  
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.toggler {
    display: inline-block;
}

.toggler__control {
    width: 52px;
    height: 28px;
    border-radius: 16px;
    border: 1px solid #495057;
    display: flex;
    align-items: center;
    background-color: white;
}

.toggler__input {
    position: absolute;
    left: -100vw;
}

.toggler__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.toggler__inner {
    width: 24px;
    height: 24px;
    border-radius: 50&#37;;
    background-color: #DDE2E5;
    border-color: #495057;
    transition: all 0.3s cubic-bezier(.4, .1, .2, 1);
}

.toggler__title {
    font-family: &#039;Inter&#039;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.toggler__input:checked ~ .toggler__state .toggler__control {
    background-color: rgb(109, 0, 109);
    border-color: rgb(109, 0, 109);
    justify-content: end;
}

.toggler__input:checked ~ .toggler__state .toggler__inner {
    background-color: white;
    transform: translateX(0);
}

.toggler__input:focus ~ .toggler__state .toggler__title {
    text-decoration: underline;
}

.toggler__input:disabled ~ .toggler__state .toggler__control {
    background-color: #DDE2E5;
    color: #DDE2E5;
}

.toggler__input:disabled ~ .toggler__state .toggler__control .toggler__inner{
    background-color: #ACB5BD;
}
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.toggler__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.toggler {
    display: inline-block;
}

.toggler__control {
    width: 52px;
    height: 28px;
    border-radius: 16px;
    border: 1px solid #495057;
    display: flex;
    align-items: center;
    background-color: white;
}

.toggler__input {
    position: absolute;
    left: -100vw;
}

.toggler__state {
    display: flex;
    align-items: center;
    gap: 12px;
}

.toggler__inner {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #DDE2E5;
    border-color: #495057;
    transition: all 0.3s cubic-bezier(.4, .1, .2, 1);
}

.toggler__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #495057;
}

.toggler__input:checked ~ .toggler__state .toggler__control {
    background-color: rgb(109, 0, 109);
    border-color: rgb(109, 0, 109);
    justify-content: end;
}

.toggler__input:checked ~ .toggler__state .toggler__inner {
    background-color: white;
    transform: translateX(0);
}

.toggler__input:focus ~ .toggler__state .toggler__title {
    text-decoration: underline;
}

.toggler__input:disabled ~ .toggler__state .toggler__control {
    background-color: #DDE2E5;
    color: #DDE2E5;
}

.toggler__input:disabled ~ .toggler__state .toggler__control .toggler__inner{
    background-color: #ACB5BD;
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