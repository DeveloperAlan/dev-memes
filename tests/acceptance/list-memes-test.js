import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list memes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /list-memes', async function(assert) {
    await visit('/list-memes');

    assert.equal(currentURL(), '/list-memes');
  });
});
