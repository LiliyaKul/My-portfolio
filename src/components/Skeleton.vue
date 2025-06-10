<script></script>

<template>
<div class="skeleton__wrapper">
    <div class="skeleton">
        <div class="skeleton__top">
            <div class="skeleton__circle"></div>
            <div class="skeleton__box">
                <div class="skeleton__line skeleton__line_small"></div>
                <div class="skeleton__line skeleton__line_medium"></div>
            </div>
        </div>
        <div class="skeleton__bottom">
            <div class="skeleton__line skeleton__line_big"></div>
            <div class="skeleton__line skeleton__line_big"></div>
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
&lt;div class=&quot;skeleton&quot;&gt;
    &lt;div class=&quot;skeleton__top&quot;&gt;
        &lt;div class=&quot;skeleton__circle&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;skeleton__box&quot;&gt;
            &lt;div class=&quot;skeleton__line skeleton__line_small&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;skeleton__line skeleton__line_medium&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;skeleton__bottom&quot;&gt;
        &lt;div class=&quot;skeleton__line skeleton__line_big&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;skeleton__line skeleton__line_big&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
            </pre>    
        </div>
        <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
            <pre>
.skeleton {
    border: 1px solid #ACB5BD;
    border-radius: 8px;
    padding: 32px 40px 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: white;
}

.skeleton__top {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.skeleton__circle {
    width: 64px;
    height: 64px;
    border-radius: 50&#37;;
    background: #DDE2E5;
}
.skeleton__box {
   display: flex;
   flex-direction: column;
   gap: 8px;
   justify-content: center;
   flex-grow: 1;
}
.skeleton__line {
    background: linear-gradient(92.51deg, 
    #DDE2E5 6.44&#37;, #E2E6E8 38.47&#37;, 
    #F3F5F5 56.48&#37;, #E3E7EA 77.5&#37;, 
    #DDE2E5 102.52&#37;);
    height: 20px;
}
.skeleton__line_small {
    width: 40&#37;    
}
.skeleton__line_medium {
    width: 60&#37;;  
}
.skeleton__bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.skeleton__line_big {
    width: 100&#37;;
}
.skeleton__circle,
.skeleton__line {
    animation: pulse 1.5s infinite ease-in-out alternate;
}

@keyframes pulse {
    0&#37; { opacity: 0.8; }
    50&#37; { opacity: 0.2; }
    100&#37; { opacity: 0.8; }
}
            </pre>  
        </div>
    </div>
</div>
</template>

<style scoped>
.skeleton__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.skeleton {
    border: 1px solid #ACB5BD;
    border-radius: 8px;
    padding: 32px 40px 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: white;
}

.skeleton__top {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.skeleton__circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #DDE2E5;
}
.skeleton__box {
   display: flex;
   flex-direction: column;
   gap: 8px;
   justify-content: center;
   flex-grow: 1;
}
.skeleton__line {
    background: linear-gradient(92.51deg, #DDE2E5 6.44%, #E2E6E8 38.47%, #F3F5F5 56.48%, #E3E7EA 77.5%, #DDE2E5 102.52%);
    height: 20px;
}
.skeleton__line_small {
    width: 40%    
}
.skeleton__line_medium {
    width: 60%;  
}
.skeleton__bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.skeleton__line_big {
    width: 100%;
}

.skeleton__circle,
.skeleton__line {
    animation: pulse 1.5s infinite ease-in-out alternate;
}

@keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 0.2; }
    100% { opacity: 0.8; }
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