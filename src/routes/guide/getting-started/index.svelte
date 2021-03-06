<svelte:head>
	<title>FormValidation • Getting started</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Overview</h1>
    <h2 class="f4 fw4 tc">Getting used with FormValidation</h2>

    <section class="mv5">
        <p class="lh-copy">The <a href="/download" class="blue dim link">FormValidation package</a> consists of the following files:</p>
<SampleCode lang="html" code={`
formvalidation/
|
├── @types          // Consists of TypeScript definition types
|   |
|   └── formvalidation
|       └── global.d.ts // Uses with the global UMD package (dist/js)
|       └── index.d.ts  // Uses with the ES6 package (dist/es6)
|
├── dist            // Consists of generated files from src
|   |
|   ├── amd         // AMD package
|   |
│   ├── css         // Can be used in browser
│   │   └── formValidation(.min).css
|   |
|   ├── es6         // Generated from src/js and can be used with ES6 module
│   │   ├── ...
│   │   ├── core
│   │   ├── locales
│   │   ├── plugins
│   │   ├── validators
│   │   └── index.js
|   |
│   └── js          // Can be used in browser
|       |
│       ├── locales     // The translation packages
│       │   ├── de_DE(.min).js
│       │   ├── en_US(.min).js
│       │   └── ...
|       |
│       ├── plugins
│       │   ├── Bootstrap(.min).js
│       │   ├── Bootstrap3(.min).js
│       │   └── ...
|       |
│       ├── FormValidation.full(.min).js
│       └── FormValidation(.min).js
│
└── src             // Source files
    |
    ├── css         // CSS source files made in SCSS
    │   ├── plugins
    │   │   ├── _bootstrap.scss
    │   │   ├── _bootstrap3.scss
    │   │   └── ...
    │   │
    │   ├── _core.scss
    │   └── index.scss
    │
    └── js          // JavaScript source files made in Typescript
        ├── ...
        ├── core
        ├── locales
        ├── plugins
        ├── validators
        └── index.ts
`} />
        <p class="lh-copy">If you don't know which files should be used in your application, then here is the guideline:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>If you want to use the library in browsers, then upload the <code>dist/css</code> and <code>dist/js</code> folders to the server.</li>
            <li>If you want to use the library with ES6 module, then pick the <code>dist/es6</code> folders.</li>
            <li>Lastly, if you are curious about how the library is developed, then the source folder <code>src</code> is place you will look at.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Production vs development mode</Heading>
        <p class="lh-copy">Each file in the <code>dist/css</code> and <code>dist/js</code> folders has two versions: the normal code in the <code>.css, .js</code> files, and the minified code in the <code>.min.css, .min.js</code> files.</p>
        <p class="lh-copy">In order to reduce the page loading time and enhance the user experience when visiting your site, you should use the <code>.min.css, .min.js</code> files in the production website.</p>
        <p class="lh-copy">Meanwhile, in the development mode, you should use the normal files without <code>.min</code> part to debug the code more easy.</p>
    </section>

    <section class="mv5">
        <Heading>Default vs full version</Heading>
        <p class="lh-copy">The <code>dist/js</code> folder contains two verions of the core library:</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>FormValidation(.min).js</code>: Contains most popular validators</li>
            <li><code>FormValidation.full(.min).js</code>: Contains all validators</li>
        </ul>
        <p class="lh-copy">In most of the times, you only need to include the <code>FormValidation(.min).js</code> file to your page. Since it is smaller than the full version in term of the file size, it will reduce the page loading time.</p>
        <p class="lh-copy">Take a look at the <a href="/guide/validators" class="blue dim link">Validators</a> page to see which validator belongs to the default and full versions.</p>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide">Guide</PrevButton>
            <NextButton target="/guide/getting-started/usage">Usage</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../components/GuideLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import NextButton from '../../../components/NextButton.svelte';
import PrevButton from '../../../components/PrevButton.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>
