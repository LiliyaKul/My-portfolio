<script></script>

<template>
<div class="button-component__wrapper">


    <div class="button__wrapper">
        <button class="button button_primary">Primary</button>
        <button class="button button_primary" disabled>Primary</button>
        <button class="button button_secondary">Secondary</button>
        <button class="button button_secondary" disabled>Secondary</button>
        <button class="button button_alternate">Alternate</button>
        <button class="button button_alternate" disabled>Alternate</button>
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
    &lt;div class=&quot;button__wrapper&quot;&gt;
        &lt;button class=&quot;button button_primary&quot;&gt;Primary&lt;/button&gt;
        &lt;button class=&quot;button button_primary&quot; disabled&gt;Primary&lt;/button&gt;
        &lt;button class=&quot;button button_secondary&quot;&gt;Secondary&lt;/button&gt;
        &lt;button class=&quot;button button_secondary&quot; disabled&gt;Secondary&lt;/button&gt;
        &lt;button class=&quot;button button_alternate&quot;&gt;Alternate&lt;/button&gt;
        &lt;button class=&quot;button button_alternate&quot; disabled&gt;Alternate&lt;/button&gt;
    &lt;/div&gt;
            </pre>    
        </div>
        <div class="component-description__code__tabs__content component-description__code__tabs__content_css">
            <pre>
    .button__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
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
    }
    button:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    .button_primary {
        color: white;
        background: rgb(109, 0, 109);
        transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
    }
    .button_primary:hover {
        background: rgb(78, 0, 78);
    }
    .button_secondary {
        color: white;
        background: rgb(82, 1, 140);
        transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
    }
    .button_secondary:hover {
        background: #330060;
    }
    .button_alternate {
        color: black;
        background: white;
        border-color: white;
        border: 1px solid #ACB5BD
    }
    .button_alternate:hover {
        border: 1px solid #212429
    }
            </pre>  
        </div>
    </div>
</div>
</template>

<style scoped>
.button-component__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
}

.button__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

@media screen and (max-width: 375px) {
    .button__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    }   
} 

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
}
@media screen and (max-width: 375px) {
    .button {
        padding: 15px 20px 14px 20px;
    }
}

button:disabled {
    opacity: 0.5;
    pointer-events: none;
}
.button_primary {
    color: white;
    background: rgb(109, 0, 109);
    transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
}
.button_primary:hover {
    background: rgb(78, 0, 78);
  }
.button_secondary {
    color: white;
    background: rgb(82, 1, 140);
    transition: opacity 200ms ease-in-out, background 200ms ease-in-out;
}
.button_secondary:hover {
    background: #330060;
  }
.button_alternate {
    color: black;
    background: white;
    border-color: white;
    border: 1px solid #ACB5BD
}
.button_alternate:hover {
    border: 1px solid #212429
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