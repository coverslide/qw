var test = require('tape')

var qw = require('./qw')

test('basic functionality', function(t){
  var one = qw('my spoon is too big')

  t.equal(one.length, 5, 'Testing length')
  t.equal(one[2], 'is', 'Testing array value')

  t.end()
})

test('Other parsing weirdness', function(t){
  var one = qw(' \t my\tspoon\ris\ntoo big\v')

  t.equal(one.length, 5, 'Testing length')
  t.equal(one[2], 'is', 'Testing array value')

  t.end()
})
