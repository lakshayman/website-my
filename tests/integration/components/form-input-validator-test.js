import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-input-validator', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FormInputValidator />`);

    assert.equal(this.element.textContent.trim(), ':');

    // Template block usage:
    await render(hbs`
      <FormInputValidator>
        template block text
      </FormInputValidator>
    `);

    assert.equal(this.element.textContent.trim(), ':');
  });
});
