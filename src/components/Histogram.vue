<script></script>

<template>
    <div class="histogram__wrapper">
        <div class="histogram">
            <div class="histogram__header">
                <div class="histogram__container">
                    <p class="histogram__text">Total orders</p>
                    <a class="histogram__link">View all</a>
                </div>
                <div class="histogram__number">50254</div>
            </div>   
            <div class="histogram__content">
                <div class="histogram__item histogram__item_100"></div>
                <div class="histogram__item histogram__item_70"></div>
                <div class="histogram__item histogram__item_44"></div>
                <div class="histogram__item histogram__item_78"></div>
                <div class="histogram__item histogram__item_44"></div>
                <div class="histogram__item histogram__item_60"></div>
                <div class="histogram__item histogram__item_78"></div>
                <div class="histogram__item histogram__item_100"></div>
                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_44"></div>

                <div class="histogram__item histogram__item_60"></div>
                <div class="histogram__item histogram__item_70"></div>
                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_100"></div>
                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_78"></div>
                <div class="histogram__item histogram__item_60"></div>
                <div class="histogram__item histogram__item_44"></div>
                <div class="histogram__item histogram__item_70"></div>
                <div class="histogram__item histogram__item_60"></div>

                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_78"></div>
                <div class="histogram__item histogram__item_70"></div>
                <div class="histogram__item histogram__item_90"></div>
                <div class="histogram__item histogram__item_60"></div>
                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_60"></div>
                <div class="histogram__item histogram__item_22"></div>
                <div class="histogram__item histogram__item_70"></div>
                <div class="histogram__item histogram__item_34"></div>
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
&lt;div class=&quot;histogram&quot;&gt;
    &lt;div class=&quot;histogram__header&quot;&gt;
        &lt;div class=&quot;histogram__container&quot;&gt;
            &lt;p class=&quot;histogram__text&quot;&gt;Total orders&lt;/p&gt;
            &lt;a class=&quot;histogram__link&quot;&gt;View all&lt;/a&gt;
            &lt;/div&gt;
        &lt;div class=&quot;histogram__number&quot;&gt;50254&lt;/div&gt;
    &lt;/div&gt;   
    &lt;div class=&quot;histogram__content&quot;&gt;
        &lt;div class=&quot;histogram__item histogram__item_100&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_70&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_44&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_78&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_44&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_78&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_100&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_44&quot;&gt;&lt;/div&gt;
                                    
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_70&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_100&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_78&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_44&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_70&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;

        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_78&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_70&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_90&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_60&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_22&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_70&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;histogram__item histogram__item_34&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                </pre>    
            </div>
            <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
                <pre>
.histogram {
display: flex;
flex-direction: column;
gap: 39px;
border: 1px solid #ACB5BD;
border-radius: 8px;
padding: 16px 24px 24px 24px;
}

.histogram__header {
display: flex;
flex-direction: column;
gap: 6px;
}

.histogram__container {
font-family: Inter;
font-weight: 400;
display: flex;
justify-content: space-between;
}

.histogram__text {
font-size: 16px;
color: #212429;
opacity: 0.8px;
line-height: 24px;
}
.histogram__link {
font-size: 16px;
line-height: 24px;
color: #4263EB;
}
.histogram__number {
font-family: Inter;
font-weight: 400;
font-size: 20px;
line-height: 26px;
color: #212429;
}
.histogram__content {
display: flex;
align-items: flex-end;
height: 50px;
gap: 1px; 
}
.histogram__item {
background-color: #4263EB;
flex-grow: 1;
}
.histogram__item_100 {
height: 100&#37;;
}
.histogram__item_90 {
height: 90&#37;;
}
.histogram__item_78 {
height: 78&#37;;
}
.histogram__item_70 {
height: 70&#37;;
}
.histogram__item_60 {
height: 60&#37;;
}
.histogram__item_44 {
height: 44&#37;;
}
.histogram__item_34 {
height: 34&#37;;
}
.histogram__item_22 {
height: 22&#37;;
}  
                </pre>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.histogram__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.histogram {
    display: flex;
    flex-direction: column;
    gap: 39px;
    border: 1px solid #ACB5BD;
    border-radius: 8px;
    padding: 16px 24px 24px 24px;
    background-color: white;
}

.histogram__header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.histogram__container {
    font-family: Inter;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
}

.histogram__text {
    font-size: 16px;
    color: #212429;
    opacity: 0.8px;
    line-height: 24px;
}
.histogram__link {
    font-size: 16px;
    line-height: 24px;
    color: rgb(109, 0, 109);
}
.histogram__number {
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #212429;
}
.histogram__content {
   display: flex;
   align-items: flex-end;
   height: 50px;
   gap: 1px; 
}
.histogram__item {
    background-color: rgb(109, 0, 109);
    flex-grow: 1;
}
.histogram__item_100 {
    height: 100%;
}
.histogram__item_90 {
    height: 90%;
}
.histogram__item_78 {
    height: 78%;
}
.histogram__item_70 {
    height: 70%;
}
.histogram__item_60 {
    height: 60%;
}
.histogram__item_44 {
    height: 44%;
}
.histogram__item_34 {
    height: 34%;
}
.histogram__item_22 {
    height: 22%;
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