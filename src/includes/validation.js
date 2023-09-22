import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate'
import { required, min, max, email, regex, confirmed } from '@vee-validate/rules'

export default {
    install(app) {
        app.component("VeeForm", VeeForm)
        app.component("VeeField", VeeField)
        app.component("ErrorMessage", ErrorMessage)
        defineRule('required', required)
        defineRule('confirmed', confirmed)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('email', email)
        defineRule('regex', regex)
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is too long`,
                    email: `The field ${ctx.field} must be a valid email`,
                    confirmed: `The password fields do not match`,
                    regex: `The field ${ctx.field} must contain at least one lowercase letter, one uppercase letter, one digit and one special character`
                }
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid`
                return message
            }
        })
    }
}
