<svelte:head>
	<title>FormValidation • Disabling date</title>
</svelte:head>

<GuideLayout>    
    <h1 class="tc lh-copy">Disabling date</h1>
    
    <section class="mv5">
        <p class="lh-copy">The example below shows how to treat all Sundays as not valid date. You can try to choose a Sunday from the picker to see how it works in action.</p>
        <Demo prefix="/guide/examples/disabling-date" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with Bootstrap Datepicker',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Validating date range',
        'Validating multiple inputs as one',
    ]} />

    <RelatedValidators validators={['date']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>
