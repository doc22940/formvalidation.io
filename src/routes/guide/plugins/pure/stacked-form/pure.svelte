<PureLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="pure-form pure-form-stacked">
        <div class="pure-control-group">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>
    
        <div class="pure-control-group">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>
    
        <div class="pure-control-group">
            <label>Size</label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="s" /> S
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="m" /> M
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="l" /> L
            </label>
            <label class="pure-checkbox">
                <input type="checkbox" name="size[]" value="xl" /> XL
            </label>
        </div>
    
        <div class="pure-control-group">
            <label>Available in store</label>
            <label class="pure-radio">
                <input type="radio" name="availability" value="yes" /> Yes
            </label>
            <label class="pure-radio">
                <input type="radio" name="availability" value="no" /> No
            </label>
        </div>
    
        <div class="pure-control-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="pure-button pure-button-primary">Add product</button>
        </div>
    </form>
</PureLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Pure from 'formvalidation/plugins/Pure';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './pure.programmatic';
import PureLayout from '../../../../../components/demo/PureLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/pure/stacked-form/pure',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
