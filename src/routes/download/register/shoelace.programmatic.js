export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta24/shoelace.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="row input-field">
            <label class="col-3">Full name</label>
            <div class="col-3">
                <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div class="col-3">
                <input type="text" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Username</label>
            <div class="col-5">
                <input type="text" name="username" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Email address</label>
            <div class="col-5">
                <input type="text" name="email" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Password</label>
            <div class="col-5">
                <input type="password" name="password" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Gender</label>
            <div class="col-6">
                <label>
                    <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" /> Other
                </label>
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label" id="captchaOperation"></label>
            <div class="col-4">
                <input type="text" name="captcha" />
            </div>
        </div>

        <div class="row input-field">
            <div class="col-6 offset-3">
                <label>
                    <input type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions
                </label>
            </div>
        </div>

        <div class="row input-field">
            <div class="col-9 offset-3">
                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Shoelace.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Generate a simple captcha
    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: function() {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(input) {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            shoelace: new FormValidation.plugins.Shoelace(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });  
});
</script-tag>
</body>
</html>
`;