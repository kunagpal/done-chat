import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('done-chat functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('done-chat main page shows up', function() {
  F('title').text('done-chat', 'Title is set');
});
