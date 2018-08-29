/**
 * @author forrest
 * Date: 18/9/1
 */
import Button from './src/button.vue'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
