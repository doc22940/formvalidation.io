<svelte:head>
	<title>FormValidation • v0.3.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.3.2</h1>
    <h2 class="f4 fw4 tc">Released 21 March 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/ip" class="blue dim link">ip validator</a>. Support both IPv4 and IPv6</li>
            <li>Add <a href="/guide/validators/isbn" class="blue dim link">isbn validator</a>, support both ISBN 10 and ISBN 13</li>
            <li>Add <a href="/guide/validators/step" class="blue dim link">step validator</a></li>
            <li>Add <code>selector</code> option for each field. The field can be defined by CSS validator instead of the <code>name</code> attribute</li>
            <li>Add <a href="/guide/validators/mac" class="blue dim link">mac validator</a></li>
            <li>Add <a href="/guide/validators/base64" class="blue dim link">base64 validator</a></li>
            <li>Add cvv validator</li>
            <li>Add <a href="/guide/validators/phone" class="blue dim link">phone validator</a>. Support US phone number only</li>
            <li>Add <code>container</code> option for each field to indicate where the error messages are shown</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><a href="/guide/validators/credit-card" class="blue dim link">creditCard validator</a> now validates both IIN ranges and length</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>