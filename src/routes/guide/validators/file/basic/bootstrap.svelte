<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Avatar</label>
            <div class="col-sm-5">
                <input type="file" class="form-control" name="avatar" />
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            avatar: {
                validators: {
                    notEmpty: {
                        message: 'Please select an image'
                    },
                    file: {
                        extension: 'jpeg,jpg,png',
                        type: 'image/jpeg,image/png',
                        maxSize: 2097152,   // 2048 * 1024
                        message: 'The selected file is not valid'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/file/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
