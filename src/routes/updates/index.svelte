<svelte:head>
	<title>FormValidation • Updates</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">The latest version v1.4.0</h1>
    <h2 class="f4 fw4 tc">Released 20 April 2019</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add verhoeff() helper method that implements the Verhoeff algorithm.</li>
            <li>The <a class="blue dim link" href="/guide/validators/vat/">vat</a> validator supports <a class="blue dim link" href="/guide/validators/vat/argentinian-vat-number/">Argentinian VAT number</a>.</li>
        </ul>

        <p class="lh-copy">The <a class="blue dim link" href="/guide/validators/id/">id</a> validator supports validating more national identification numbers, including:</p>

        <div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat(3, 1fr);">
            <div class="br2 bg-blue">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/argentinian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Argentinian identification number</div>
                        <p class="lh-copy">(DNI)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-red">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/colombian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Colombian identification number</div>
                        <p class="lh-copy">(NIT)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-gold">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/french-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">French identification number</div>
                        <p class="lh-copy">(NIR)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-green">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/hong-kong-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Hong Kong identification number</div>
                        <p class="lh-copy">(HKID)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-blue">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/indian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Indian identification number</div>
                        <p class="lh-copy">(Aadhaar)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-red">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/korean-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Korean identification number</div>
                        <p class="lh-copy">(RRN)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-gold">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/malaysian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Malaysian identification number</div>
                        <p class="lh-copy">(NRIC)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-green">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/mexican-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Mexican identification number</div>
                        <p class="lh-copy">(CURP)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-blue">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/norwegian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Norwegian identification number</div>
                        <p class="lh-copy">(Fødselsnummer)</p>
                    </a>
                </div>
            </div>
            <div class="br2 bg-red">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/peruvian-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Peruvian identification number</div>
                    </a>
                </div>
            </div>
            <div class="br2 bg-gold">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/taiwanese-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Taiwanese identification number</div>
                    </a>
                </div>
            </div>
            <div class="br2 bg-green">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/validators/id/uruguayan-identification-number/" class="link pointer white db h-100">
                        <div class="f4 fw6">Uruguayan identification number</div>
                    </a>
                </div>
            </div>
        </div>

        <h3>The <a class="blue dim link" href="/guide/plugins/declarative/">Declarative</a> plugin now supports plugin declarations</h3>
<SampleCode lang="html" code={`
<form id="demoForm" method="POST"
    data-fvp-trigger="true"
    data-fvp-trigger___class="FormValidation.plugins.Trigger"
    
    data-fvp-tachyons="true"
    data-fvp-tachyons___class="FormValidation.plugins.Tachyons"

    data-fvp-submit-button="true"
    data-fvp-submit-button___class="FormValidation.plugins.SubmitButton"

    data-fvp-icon="true"
    data-fvp-icon___class="FormValidation.plugins.Icon"
    data-fvp-icon___valid="fa fa-check"
    data-fvp-icon___invalid="fa fa-times"
    data-fvp-icon___validating="fa fa-refresh">
...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        plugins: {
            // You have to register the Declarative plugin only
            declarative: new FormValidation.plugins.Declarative()
        }
    });
});
</script-tag>
`} />

        <p class="lh-copy">It serves the same functionalities such as declaring plugins as</p>

<SampleCode lang="html" code={`
<form id="demoForm">
...
</form>
    
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        plugins: {
            declarative: new FormValidation.plugins.Declarative(),
            // Other plugins
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        }
    });  
});
</script-tag>
`} />        
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Separate id validators to <code>id</code> package to save imports when using with ES6 module.</li>
        </ul>
        <p class="lh-copy">In the previous versions, you need to import the whole <code>id</code> package if you only want to validate the identification number of particular country:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import id from 'formvalidation/dist/es6/validators/id';

const result = id().validate({
    value: ...,
    options: {
        country: 'BR',
        message: 'The input is not a valid Brazilian identification number',
    },
});
`} /> 
        <p class="lh-copy">This version provides the specfic module for each country. As the result, it saves a lot of size when your application is bundled with popular bundlers as Webpack, Rollup, etc.</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import brId from 'formvalidation/dist/es6/validators/id/brId';

const result = brId().validate('An ID here');
`} />

        <ul class="pa0 ma0 ml3 lh-copy mt4">       
            <li>Separate vat validators to <code>vat</code> package to save imports when using with ES6 module.</li>
            <li>In the last version, the <a class="blue dim link" href="/guide/plugins/recaptcha/">Recaptcha plugin</a> doesn't hide the error message and error icon when user click the captcha checkbox.
            The error icon disappears when the captcha is expired. This version fixes that.</li>
            <li>Support the latest version of <a class="blue dim link" href="/guide/plugins/turret/">TurretCSS</a> (v5.1.3).</li>
            <li>The <a class="blue dim link" href="/guide/validators/vat/">vat validator</a> supports <a class="blue dim link" href="/guide/validators/vat/swiss-vat-number/">Swiss VAT numbers</a> that end with TVA, IVA, TPV.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Upgrade source code to be compatible with the latest Tyescript version (3.4.4).</li>
            <li>Fix an issue that the <a class="blue dim link" href="/guide/validators/ismn/">ismn validator</a> passes an invalid ISMN which ends with 0.</li>
            <li>Fix an issue that the <a class="blue dim link" href="/guide/validators/meid/">meid validator</a> passes an invalid MEID which ends with 0.</li>
            <li>The <a class="blue dim link" href="/guide/validators/iban/">iban validator</a> supports the new format of Costa Rica IBAN number (22 digits currently).</li>
            <li>Fix an issue that <a class="blue dim link" href="/guide/plugins/icon/">icon</a> is displayed at wrong position for <a class="blue dim link" href="/guide/plugins/spectre/">Spectre</a> form.</li>
            <li>Fix an issue that the <a class="blue dim link" href="/guide/plugins/message/">Message</a> plugin doesn't ignore field on IE11</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.4.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a class="blue dim link" href="/updates/v1.0.0/#upgrading-to-v1-0-0">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Just download the new version and replace the old files in v1.0.0 with new files in v1.4.0.</li>
        </ul>
    </section>

    <section class="tc mv5">
        <a href="/download/" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.4.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../components/ChangelogLayout.svelte';
import Heading from '../../components/Heading.svelte';
import SampleCode from '../../components/SampleCode.svelte';
</script>