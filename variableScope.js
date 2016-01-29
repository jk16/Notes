function defFoo() {
    foo = "globally scope var";
}

function defFoo_var() {
    var foo = "foo!";
}

function sayFoo() {
    console.log(foo);

}
defFoo();
/*
    *foo is available to defFoo because it is scoped globally.
    *Caution: Globals may be overwritten by globals with the same name
    *Global scope variables take longer to finda
*/
//sayFoo();
//////////////

//Hoisting

function saySomething() {
    var sayMore;
    if(true) {
        var say = "hoisted var";
    }
    if(false) {
        // var sayMore = "if false define var";
        sayMore = "if false define var";
        
    }
    //we can access var sar outside of the if statement
    // console.log(say);
    // console.log("sayMore: " + sayMore);
    /*
    * prints sayMore as undefined:
        * same thing is declaring it outside the if block
        * undefined: doesnt point to anything
    */
}
// saySomething();

///////
//Closure
function getNames() {
    var name;

    function printName() {
        if(true) {
            name = "Jonathan";//Scope does NOT change
        }

        // console.log(name);
    }//
    printName();
    // console.log(name);
}
getNames();

/*
    * getNames: outter scoped function
    * printName private function inside getNames
    * Closure: Nested function has access to variables declared in another scope
        * in this case, printName has access to outer scope defined var name.
        * "printName has a closure around name"
*/

/////////////
//Immediate Functions
(function() {
    var name;

    function printName() {
        if(true) {
            name = "Jonathan";//Scope does NOT change
        }

        // console.log(name);
    }//
    printName();
    // console.log(name);
})();
//Immediately called when defined, not returned

//-------------------------------------
//creating var in a new scope and returning it
var outer = (function(){
    var f;
    var anObjectLiteral;
    function defWord() {
        if(true) {
            f = "defWord()!";

            anObjectLiteral = {
                "key": "value",
                aFunc: function() {
                    return "aFunc!";
                }
            };
        }
    }

    defWord();

    return anObjectLiteral;

})();
// console.log(outer.key);
// console.log(outer.aFunc());

//////
/*
Using globally defined objects inside a module
*/
var _g = "global";
var myModule = (function(_g){
    // console.log(_g)//undefined
})();

///export a global variable
var myModule = (function(_g, global){
    console.log(_g)//global
    global.word = "word!";
})(_g, this);

// console.log(this.word);

//Limitations:
var _g = "global";
var myMod = (function(_g, global){
    var myObj = {};

    var priv_var = "a private var";

    myObj.f = "f";
    myObj.aFunc = function() {
        return priv_var + "was returned from myMods functions";
    };

    return myObj;
})(_g, this);

console.log(myMod.aFunc());
// new myMod(); //Error
///

MyObj = function() {
    this.key = "val";
    this.doSomething = function() {
        console.log("DOING!");
    }
}

var obj = new MyObj(); //MyObj instance

// console.log(obj.key);
// console.log(obj.doSomething());

////

var MyObject = (function(){


    var myObj = function() {
        var this.key = "valey";
        var this.val = 0;
        this.dosomething = function() {
            this.val++;
            return this.val;
        }
    }

    return myObj;
})();

var obj_1 = new MyObject();
var obj_2 = new MyObject();

console.log(obj_1.dosomething());
console.log(obj_1.dosomething());
console.log(obj_1.dosomething());

console.log(obj_2.dosomething());
console.log(obj_2.dosomething());

