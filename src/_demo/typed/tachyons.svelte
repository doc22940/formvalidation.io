<div class="near-black b--light-gray br2 demo relative tl">
    <!-- Overlay -->
    <div class="absolute bg-black-40 top-0 left-0 w-100 h-100 flex flex-column items-center justify-center justify-tc tc z-999" id="demoOverlay">
        <span class="pointer" id="playBtn"><i class="fa fa-youtube-play fa-4x"></i></span>
        <div class="dn f2 fw6 white">
            <div class="pa2">It's a REAL form actually.</div>
            <span class="pointer underline" id="tryBtn">Try it yourself!</span>
        </div>
    </div>

    <!-- Header -->
    <div class="pa2 relative bg-light-gray">
        <div class="absolute top-0 left-1 h-100">
            <div class="dt h-100">
                <div class="dtc v-mid">
                    <div class="dib br-100 h1 w1 bg-red"></div>
                    <div class="dib br-100 h1 w1 bg-yellow"></div>
                    <div class="dib br-100 h1 w1 bg-green"></div>
                </div>
            </div>
        </div>
        <div class="tc">Demo with form made by <a href="/guide/plugins/tachyons" title="Tachyons framework" class="blue dim link">Tachyons</a></div>
    </div>

    <!-- Form body -->
    <div class="pa2">
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Full name</div>
                    <div class="fl w-75">
                        <div class="fl w-100">
                            <div class="fl w-50">
                                <input type="text" name="firstName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                            </div>
                            <div class="fl w-50">
                                <input type="text" name="lastName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Username</div>
                    <div class="fl w-50">
                        <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Email</div>
                    <div class="fl w-50">
                        <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Password</div>
                    <div class="fl w-50">
                        <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Gender</div>
                    <div class="fl w-50">
                        <label for="genderMale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male</label>
                        <label for="genderFemale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female</label>
                        <label for="genderOther" class="lh-copy"><input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other</label>
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2"><div id="captchaOperation"></div></div>
                    <div class="fl w-50">
                        <input type="text" name="captcha" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2"></div>
                    <div class="fl w-50">
                        <label class="lh-copy"><input class="mr2" type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<style>
.demo {
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 70px;
}
</style>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import classSet from 'formvalidation/utils/classSet';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import TypingAnimation from 'formvalidation/plugins/TypingAnimation';

onMount(() => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
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
                        compare: () => {
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
                        callback: (input) => {
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
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            typingAnimation: new TypingAnimation({
                autoPlay: false,
                data: {
                    firstName: ['', 'J', 'John'],
                    lastName: ['', 'S', 'Smith'],
                    username: ['', 'j', 'john', 'john#', 'johnsmith'],
                    email: ['', 'j', 'john', 'johnsmith@', 'johnsmith@gmail.com'],
                    password: ['', 't', 'this', 'thisis', 'this@is#Password'],
                    captcha: [`${randomNumber(1, random[0] + random[1] - 1)}`, `${randomNumber(random[0] + random[1] + 1, random[0] + random[1] + 100)}`, `${random[0] + random[1]}`]
                }
            })
        }
    });

    const demoOverlay = document.getElementById('demoOverlay');

    document.getElementById('playBtn').addEventListener('click', () => {
        classSet(demoOverlay, {
            'flex': false,
            'dn': true,
        });

        fv.resetForm(true).getPlugin('typingAnimation').play().then((fieldIndex) => {
            if (fieldIndex === Object.keys(fv.getFields()).length) {
                classSet(demoOverlay, {
                    'flex z-999': true,
                    'dn': false,
                });
                // All field validations are emulated
                classSet(document.getElementById('tryBtn').parentNode, {
                    dn: false,
                });
            }
        });
    });

    document.getElementById('tryBtn').addEventListener('click', () => {
        classSet(demoOverlay, {
            'flex z-999': false,
            'dn': true,
        });

        // Change the captcha
        const random = [randomNumber(1, 100), randomNumber(1, 200)];
        document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

        // Reset the form
        fv.resetForm(true);

        // Focus on the first field
        form.querySelector('[name="firstName"]').focus();
    });

    return () => {
        fv.destroy();
    };
});
</script>
