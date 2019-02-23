function calConverter(number) {
//cm = parseInt(number);
inches = (number/2.54);
return inches;
}

//Added QUnit Test
QUnit.test("calConverter", function(assert) {
assert.equal(calConverter(1), 0.39370078740157477, "1 Centimeter == 0.39370078740157477 inches.");
assert.equal(calConverter(2), 0.7874015748031495, "2 Centimeter == 0.7874015748031495 inches.");
assert.equal(calConverter(3),1.1811023622047244, "50 Centimeter == 1.1811023622047243 inches.");
assert.equal(calConverter(4), 1.574803149606299, "10 Centimeter == 4 inches.");
assert.equal(calConverter(5), 1.968503937007874, "500 Centimeter == 5 inches.");

}); 
