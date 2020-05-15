var wm1 = new WeakMap();
var o1 = {};

wm1.set(o1, 58);

wm1.get(o1);  //58
wm1.has(o1);  //true

wm1.delete(o1);
wm1.has(o1);  //false