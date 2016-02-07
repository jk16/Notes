/*
Variable Scope in Javascript
*/



/*

Javascript has two basic scopes for variables:
    * Global and Function Scope
*/

//Example of a globally scope variable:
g = 'global variable!';

function setGlobalInAFunction() {
    g_2 = 'global variable!'; //attached to the global scope
}

function callGlobal() {
    console.log(g);
}

function callGlobalInFunction() {
    console.log(g_2);
}

//callGlobal();


// setGlobalInAFunction();
// callGlobalInFunction();

/*
Problems with global references:
    * Can be easily overwritten
    * Takes Javascript runtime longer to find when using them

var:
    * scoped to the function it is defined in
*/

/*
Hoisting: Declared variables will be available anywhere inside of the function they were declared in.
*/

function hoist() {
    // if(true) {
    //     var h = 'hoisted variable name';
    // }
    // if (false) {
    //     h2 = 'hoisted!';
    // }

    // console.log(h2)

    //Better way of doing the same thing:
    var h,
        h2;
    if(true) {
        h = 'hoisted variable name'; 
    }
    if(false) {
        h2 = 'hoisted!';
    }

    console.log("h = " + h);
    console.log("h2 = " + h2);

}

/*

*/

// hoist();


/*
undefined != 'not' defined
    undefined --> exists but has no reference
*/

/*

A function defined without a function around it will be defined 
in the global scope of the js runtime.

We can scope other functions inside functions.

If you have a function with a function inside it then the variables 
declared in the outer function can be accesed from within the child 
function; 'closure'.


*/

function outerScope() {
    var f;

    function getf() {
        if(true) {
            f = 'closured var!';
        }

        console.log(f);
    }

    getf();
    console.log(f);
}

// outerScope();

/*
Immediate Functions / Javascript Modules
*/

//Local Access to global data
/*


var myModule = (function($,globalScope){
    console.log($);
    globalScope.something = 'something in the global scope';
})(jQuery, this);


*/

MyObject = (
    function() {
        var privateCount = 0;

        var Obj = function() {
            this.inc = function() {
                privateCount += 1;
                return privateCount;
            }
        };
    return Obj;
    }
    )();

var counter1 = new MyObject();
var counter2 = new MyObject();

console.log(counter1.inc());
console.log(counter1.inc());
console.log(counter1.inc());
console.log(counter2.inc());




















