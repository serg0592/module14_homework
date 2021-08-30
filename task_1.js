let a = {
    prop1 : 1,
    prop2 : 'abc',
    prop3 : true
};
let b = Object.create(a);

b.prop4 = 2;
b.prop5 = 'def';
b.prop6 = false;

let func1 = function(obj) {
  for (key in object) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj.key);        
    };
  };
};
func1 = b;