function counter() {
    let _count = 0;

    return {
        add: function(increment) { _count += increment },
        retrieve: function() {return 'The counter is currently at: ' + _count }
    }
}

const c1 = counter();
c1.add(10);
c1.add(5);
console.log(c1.retrieve());  // 15

const c2 = counter();
c2.add(20);
c2.add(14);
console.log(c2.retrieve());  // 34