<svelte:head>
	<title>FormValidation • v1.0.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 1.0.0</h1>
    <h2 class="f4 fw4 tc">Released 10 June 2018</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>
                <p class="lh-copy">Rewritten everything from scratch in Typescript and ES6.</p>
                <p class="lh-copy">Being type safety with Typescript always gives safe, enjoyable feeling when maintaining a big codebase with 50 <a class="blue dim link" href="/guide/validators/">validators</a> and 26 <a class="blue dim link" href="/guide/plugins/">plugins</a>. These numbers are increasing</p>
            </li>
            <li>
                <p class="lh-copy">No dependency. Hooray!!!</p>
                <p class="lh-copy">It doesn't depend on jQuery anymore. Anyway, if you are still a fan of jQuery and prefer to use it as a jQuery plugin, we build the <a class="blue dim link" href="/guide/plugins/j/">J</a> plugin for you.</p>
            </li>
            <li>Compatible with ES6 module. It means that you can use <code>import</code> and integrate with JavaScript frameworks such as <a class="blue dim link" href="https://reactjs.org/">React</a>, <a class="blue dim link" href="https://vuejs.org/">Vue</a>, <a class="blue dim link" href="https://sapper.svelte.technology/">Sapper</a> (which powers this website), etc.</li>
            <li>Built on plugin based architecture. The core libary is very lighweight. Everything else is <a class="blue dim link" href="/guide/plugins/">plugin</a></li>
            <li>
                <p class="lh-copy">All <a class="blue dim link" href="/guide/validators/">validators</a> can be used independently. Inspried by functional programming paradigm, all built in validators are just functions. So you can use it in browser:</p>
<SampleCode lang="javascript" code={`
const result = FormValidation.validators.creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});

// result.valid === true
// result.meta.type === 'AMERICAN_EXPRESS'
`} />
                <p class="lh-copy">or with ES6 module, server side frameworks such as <a class="blue dim link" href="https://expressjs.com/">Express</a>:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

const result = creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});
// result.valid === true
// result.meta.type === 'AMERICAN_EXPRESS'
`} />
                <p class="lh-copy">Write the validator once and reuse it everywhere. Yay!</p>
            </li>
            <li>In addition to +400 <a class="blue dim link" href="https://mochajs.org/">Mocha</a> unit tests, this version also covers hundreds of end-to-end test cases against Selenium server with <a class="blue dim link" href="http://nightwatchjs.org/">Nightwatch.js</a> framework</li>
            <li>Designed to work with native form without using any specific CSS frameworks. See the demo below.</li>
        </ul>

        <h3>Support more CSS frameworks</h3>
        <p class="lh-copy">This version brings more supports for popular CSS frameworks via new plugins:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Support CSS framework</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap/">Bootstrap</a></td>
                <td class="pv2 ph3">Bootstrap v4.1.1</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap3/">Bootstrap3</a></td>
                <td class="pv2 ph3">Boostrap v3.3.7</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bulma/">Bulma</a></td>
                <td class="pv2 ph3">Bulma v0.7.1</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/foundation/">Foundation</a></td>
                <td class="pv2 ph3">Zurb Foundation v6.4.3</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/pure/">Pure</a></td>
                <td class="pv2 ph3">PureCSS v1.0.0</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/semantic/">Semantic</a></td>
                <td class="pv2 ph3">Semantic UI v2.3.1</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/shoelace/">Shoelace</a></td>
                <td class="pv2 ph3">Shoelace v1.0.0-beta24</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/spectre/">Spectre</a></td>
                <td class="pv2 ph3">Spectre v0.5.1</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/tachyons/">Tachyons</a></td>
                <td class="pv2 ph3">Tachyons v4.9.1</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/uikit/">Uikit</a></td>
                <td class="pv2 ph3">UIKit v3.0.0-beta.42</td>
            </tr>
        </table>
        <Demo prefix="/guide/getting-started/usage/frameworks" supportNativeForm=true frameworks={['Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Uikit']} />

        <h3>New website</h3>
        <p class="lh-copy">The old version of the official website is powered by <a class="blue dim link" href="https://jekyllrb.com/">Jekyll</a>. Since it comes from the Ruby world, it isn't easy for me when I want to customize something.
            I looked for another solutions for creating a documentation website, and the final answer is <a class="blue dim link" href="https://sapper.svelte.technology/">Sapper</a>.</p>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>This entire website is rewritten in Sapper. Super fast website, indeed!</li>
            <li>Everything is developed in JavaScript and under control</li>
            <li>Have you ever heard about functional CSS? This website uses the <a class="blue dim link" href="http://tachyons.io/">Tachyons</a> libary without wrting any new CSS. Yes, I don't have to create any new CSS, just combine existing Tachyons CSS classes to get the job done.</li>
            <li>
                <p class="lh-copy">Every pieces on this website, including the page you're reading rightnow, are <span class="i">components</span>. I can reuse it in any places.</p>
                <p class="lh-copy">The following sample uses a component called <code>Framework</code> to display list of supported CSS frameworks in the <a class="blue dim link" href="/">home page</a>:</p>
<SampleCode lang="html" code={`
<div class="fl w-100 bl bt b--light-gray">
    <Framework name="Bootstrap 4" url="/guide/plugins/bootstrap/" isNew />
    <Framework name="Foundation" url="/guide/plugins/foundation/" />
    <Framework name="UIKit" url="/guide/plugins/uikit/" />
</div>
<div class="fl w-100 bl b--light-gray">
    <Framework name="Semantic UI" url="/guide/plugins/semantic/" />
    <Framework name="PureCSS" url="/guide/plugins/pure/" />
    <Framework name="Bulma" url="/guide/plugins/bulma/" isNew />
</div>
<div class="fl w-100 bl b--light-gray">
    <Framework name="Shoelace" url="/guide/plugins/shoelace/" isNew />
    <Framework name="Spectre" url="/guide/plugins/spectre/" isNew />
    <Framework name="Tachyons" url="/guide/plugins/tachyons/" isNew />
</div>
`} />        
                <p class="lh-copy">No more Jekyll's <code>include</code>.</p>
            </li>
            <li>User can easily copy sample code to clipboard via the <span class="i">Copy</span> button on the top right corner</li>
            <li>Each sample code is a full HTML page with required CSS and JavaScript.</li>
            <li>The iframe demo and its page connect to each other via the <code>postMessage()</code> method. No accessing the DOM directly as in the previous version.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Breaking changes</Heading>

        <h3>Options</h3>
        <p class="lh-copy">From this version, we moved the long list of options in old jQuery plugin to separated, smaller plugins. Look at the table below to upgrade the old options to new plugin:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Options</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>autoFocus</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/auto-focus/">AutoFocus</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>err: 'tooltip'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/tooltip/">Tooltip</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>icon</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/icon/">Icon</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>row</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/message/">Message</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>threshold</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/trigger/">Trigger</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>trigger</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/trigger/">Trigger</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>button</code></li>
                        <li><code>excluded</code></li>
                        <li><code>live</code></li>
                        <li><code>message</code></li>
                        <li><code>verbose</code></li>
                    </ul>
                </td>
                <td class="pv2 ph3">Removed</td>
            </tr>
        </table>
        <p class="lh-copy">The old version provides an option named <code>framework</code> to support form made in given CSS framework. v1.0.0 also supports native form without using any CSS framework.
            Also, the <code>framework</code> is removed and supporting CSS frameworks are served via the following plugins:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old framework option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'bootstrap'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap3/">Bootstrap 3</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'bootstrap4'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap/">Bootstrap</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'foundation'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/foundation/">Foundation</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'foundation5'</code></td>
                <td class="pv2 ph3">Zurb Foundation 5 isn't supported anymore</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'pure'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/pure/">Pure</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'semantic'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/semantic/">Semantic</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'uikit'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/uikit/">Uikit</a></td>
            </tr>
        </table>

        <h3>Declarative mode</h3>
        <p class="lh-copy">The previous version automatically turns the HTML attributes of a field element, <code>data-fv-notempty="true"</code> for example, to associated validator rules.</p>
        <p class="lh-copy">In v1.0.0, you have to enable the <a class="blue dim link" href="/guide/plugins/declarative/">Declarative</a> plugin.</p>

        <h3>Default language package</h3>
        <p class="lh-copy">Before v1.0.0, you can lazily ignore the <code>message</code> option and all the error messages are taken from the English translation package by default. From this version, the core library (<code>FormValidation(.min).js</code>) doesn't consist 
        of any language package, including English package. You have to load them manually. See the <a class="blue dim link" href="/guide/getting-started/localization/">Localization</a> page for more details.</p>

        <h3>Add-ons</h3>
        <p class="lh-copy">The old add-ons are replaced with new plugins.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old add-on</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">i18n</td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/l10n/">L10n</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">mandatoryIcon</td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/mandatory-icon/">MandatoryIcon</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">reCaptcha1</td>
                <td class="pv2 ph3">It isn't supported anymore</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">reCaptcha2</td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/recaptcha/">Recaptcha</a></td>
            </tr>
        </table>

        <h3>APIs</h3>
        <p class="lh-copy">In v1.0.0, we consider every APIs carefully. Some <a class="blue dim link" href="/guide/api/">public methods</a> from old version are changed or removed completely because they don't match with new architecture.
            Look at the table below if you want to upgrade the API.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old API</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">New API</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>addField()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/add-field/">addField()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>enableFieldValidators()</code></td>
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><a class="blue dim link" href="/guide/api/disable-validator/">disableValidator()</a></li>
                        <li><a class="blue dim link" href="/guide/api/enable-validator/">enableValidator()</a></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>getFieldElements()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/get-elements/">getElements()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>getOptions()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/get-fields/">getFields()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>removeField()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/remove-field/">removeField()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>resetField()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/reset-field/">resetField()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>resetForm()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/reset-form/">resetForm()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>revalidateField()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/revalidate-field/">revalidateField()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>updateOption()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/update-validator-option/">updateValidatorOption()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>updateStatus()</code></td>
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><a class="blue dim link" href="/guide/api/update-element-status/">updateElementStatus()</a></li>
                        <li><a class="blue dim link" href="/guide/api/update-field-status/">updateFieldStatus()</a></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>validate()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/validate/">validate()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>validateField()</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/api/validate-field/">validateField()</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>defaultSubmit()</code></li>
                        <li><code>disableSubmitButtons()</code></li>
                        <li><code>getDynamicOption()</code></li>
                        <li><code>getInvalidFields()</code></li>
                        <li><code>getMessages()</code></li>
                        <li><code>getSubmitButton()</code></li>
                        <li><code>isValid()</code></li>
                        <li><code>isValidContainer()</code></li>
                        <li><code>isValidField()</code></li>
                        <li><code>updateMessage()</code></li>
                        <li><code>validateContainer()</code></li>
                    </ul>
                </td>
                <td class="pv2 ph3">Removed</td>
            </tr>
        </table>

        <h4>Events</h4>
        <p class="lh-copy">From v1.0.0, you can't use a <a class="blue dim link" href="/guide/plugins/declarative/">declarative</a> mode to declare event handler. We also change the naming convention of core events to <code>core.[form/field/validator].[event]</code>.
            The plugin event is named as <code>plugins.[pluginName].[event]</code>.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old event</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">New event</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>added.field.fv</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.field.added/">core.field.added</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>err.field.fv</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.field.invalid/">core.field.invalid</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>err.validator.fv</code></li>
                        <li><code>success.validator.fv</code></li>
                    </ul>
                </td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.validator.validated/">core.validator.validated</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>removed.field.fv</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.field.removed/">core.field.removed</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>status.field.fv</code></td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Based on the field status, one of the following events is triggered:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><a class="blue dim link" href="/guide/events/core.field.invalid/">core.field.invalid</a></li>
                        <li><a class="blue dim link" href="/guide/events/core.field.valid/">core.field.valid</a></li>
                        <li><a class="blue dim link" href="/guide/events/core.field.validating/">core.field.validating</a></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>success.field.fv</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.field.valid/">core.field.valid</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>success.form.fv</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/events/core.form.valid/">core.form.valid</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>init.field.fv</code></li>
                        <li><code>init.form.fv</code></li>
                        <li><code>prevalidate.form.fv</code></li>
                    </ul>
                </td>
                <td class="pv2 ph3">Removed</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.0.0</Heading>
        
        <p class="lh-copy b">In general, in order to upgrade from the old jQuery plugin to v1.0.0, you have to:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Upload v1.0.0 files to your server</li>
            <li>Convert options in previous verion to associated plugin</li>
        </ul>
        <p class="lh-copy">You also should take a look at the <span class="i">Breaking changes</span> above.</p>
        <p class="lh-copy">The sample codes below show how previous and current version are used to validate a form which is made with Bootstrap 4.</p>
        <p class="lh-copy b">Previous version (v0.8.1):</p>
<SampleCode lang="html" code={`
<html>
<head>
    <!-- Optional: To use FontAwesome icons for icon option -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Required: Bootstrap CSS -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">

    <!-- Required: FormValidation CSS -->
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="signinForm" method="POST">
        <div class="form-group row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-5">
                <input type="text" class="form-control" name="username" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-5">
                <input type="password" class="form-control" name="password" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-9 offset-md-3">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>

<!-- Required: jQuery v1.9.1 or higher -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script-tag>

<!-- Required: FormValidation plugin -->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!-- Required: The class supports validating Bootstrap form -->
<script-tag src="/vendors/formvalidation/dist/js/framework/bootstrap4.min.js"></script-tag>

<script-tag>
$(document).ready(function() {
    $('#signinForm').formValidation(
        // I am validating Bootstrap 4 form
        framework: 'bootstrap4',

        // Feedback icons
        icon: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh',
        },

        // List of fields and their validation rules
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long',
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore',
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters',
                    },
                }
            },
        },
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy b">Current version (v1.0.0):</p>
<SampleCode lang="html" code={`
<html>
<head>
    <!-- Optional: To use FontAwesome icons for icon plugin -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Required: Bootstrap CSS -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">

    <!-- Required: FormValidation CSS -->
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="loginForm" method="POST">
        <!-- Form markup is the same as in the previous version -->
    </form>

<!-- Required: Need es6-shim to help old browsers understand ES6 -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>

<!-- Required: FormValidation library -->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!-- Required: Plugin supports validating Bootstrap form -->
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('loginForm'),
        {
            fields: {
                // Same as above
            },
            plugins: {
                // Trigger validation when the field value is changed
                trigger: new FormValidation.plugins.Trigger(),

                // Support Bootstrap form
                bootstrap: new FormValidation.plugins.Bootstrap(),

                // Automatically validate the form when pressing its Submit button
                submitButton: new FormValidation.plugins.SubmitButton(),

                // Submit the form if all fields are valid after validating
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),

                // Display various icons based on the field validity
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>   
`} />
        <p class="lh-copy">Again, please take a careful look at the new plugin associating with the <code>framework</code> option in previous version:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old framework option (v0.8.1)</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin (v1.0.0)</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'bootstrap'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap3/">Bootstrap 3</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'bootstrap4'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/bootstrap/">Bootstrap</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'foundation'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/foundation/">Foundation</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'foundation5'</code></td>
                <td class="pv2 ph3">Zurb Foundation 5 isn't supported anymore</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'pure'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/pure/">Pure</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'semantic'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/semantic/">Semantic</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>framework: 'uikit'</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/plugins/uikit/">Uikit</a></td>
            </tr>
        </table>
        <p class="lh-copy">If you have any problem when upgrading to v1.0.0, either try to <a class="blue dim link" href="/guide/getting-started/">use it fresh</a> or <a class="blue dim link" href="mailto: me@phuoc.ng">drop me</a> an email.</p>
    </section>

    <section class="tc mv5">
        <a href="/download/" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.0.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Demo from '../../../components/Demo.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>