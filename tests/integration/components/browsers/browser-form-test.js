import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('browsers/browser-form', 'Integration | Component | browsers/browser form', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{browsers/browser-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#browsers/browser-form}}
      template block text
    {{/browsers/browser-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
