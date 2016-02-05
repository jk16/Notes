foo = {
    bar: function() {
        console.log(this);
    },

    baz: function(cb) {
        cb();
    }
}
//scope != context: context depends on function invocation
/*
foo.bar();
foo.baz(foo.bar);
*/

function f() {
    var b = "here is a b";
    this.q = function() {
        console.log(b);
    }

    this.q();
}
/*
f();
q();//we can call q!

//since JS is OO:
f = new f();
f.q();
*/

//Function invocation and scope:
function g() {
    console.log(this);
}

console.log(this);
// g();
/*
When you call a function by name using () the context is set to the global context-ALWAYS. 
*/


//Object method vs a function:
z = {
    h: function() {
        console.log(this);
    }
}

f = {
    b: function() {
        console.log(this);
        var out = this.hey();
        console.log(out);
    },

    hey: function() {
        return "hey!";
    }
}

// f.b();
/*
var func = f.b; //this gets set to the global context (which doesnt have a method b)
func();
*/

//How to manipulate context with the .call method
f = {
    z: function() {
        console.log(this);
    }
}

// f.z.call(); //global context
// f.z.call(this);
// f.z.call(f); //context see to the f context

list = {
    printNumbers: function(a,b,c) {
        console.log(this);
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
//pass parameters through the call method
// list.printNumbers.call(list,1,2,3);
var args = [1,2,3];
// list.printNumbers.apply(list, args);




////////////

var obj = {
    hello: 'world', 
    f: function() { 
        console.log(this);
        // return this.hello;
    } 
}; 
obj.f()










