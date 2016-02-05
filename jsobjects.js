/*

*****************                  *****************           
*               *                  *               *              
*  (functions)  *   <------->      *  (prototype)  *                      
*               *                  *               *                
*****************                  *****************                                                   
                                            ^
                                            '
                                            '
                                            '
                                            '
                                            v            

                                    **********************
                                    *                    *
                                    *  (object instance) *
                                    *                    *
                                    **********************


*/

/*
Object Literals:
    * Data: key --> value pair
    * Objects: methods and attributes

    * 
*/
myName = function() {
    // console.log('Jonathan!');
}
var obj = {
    key: 'value',
    funcKey : function() {
        // console.log('inside function!');
    }
};

obj.name = 'Jonathan';
obj.myName = myName;
// console.log(obj.myName());


keepCount = function() {
    if(!keepCount.callCount) {keepCount.callCount = 0};
    keepCount.callCount += 1;
    console.log("called ", keepCount.callCount, " times");
}


// keepCount();
// keepCount();
// keepCount();


/*
Ctor Functions
*/

ObjFunc = function() {
    console.log(this);
    return true;
}

var obj = new ObjFunc();

console.log(obj);

/*
Prototype
*/
Object.create = function(obj) {
    var F = function() {};
    F.prototype = obj;
    return new F();
}

myPrototype = {};
//Set the prototype of one object to another: inheritance
var obj = Object.create(myPrototype);

//Not all browsers have Object.create so lets create out own:

/*
inheritance chain
*/
grandParent = {
    func: function() {
        console.log("func!");
    },

    logIt: function() {
        console.log(this.bar);
    }
}

myPrototype = Object.create(grandParent);
myPrototype.bar = "I'm an attribute!";

obj = Object.create(myPrototype);
obj.bar = "Overriding attribute!";
//obj.logIt() -->"Overriding attribute!"
// grandParent.logIt() --> undefined

/*
Obj Manipulation
*/

Person = function(fName) {
    this.fName = fName;
}

john = new Person('john');
david = new Person('david');
leon = new Person('leon');
alberto = new Person('alberto');
var count = 0;
//////
Person.prototype.say = function(msg) {
    console.log('john says: ' + msg);
}


john.say = function(msg) {
    console.log('john says: ' + msg);
}
// john.say("HEY!");

Person.prototype.counter = function() {
    count = count + 1;
    console.log(this.fName + ' has increased the counter by one to: ' + count);
}

//unique counter
john.counter = function() {
    count = count + 1;
    console.log(this.fName + ' has increased the counter by one using a unique counter, to: ' + count);
    //call original prototype
    // Person.prototype.counter.call(this);
}

// john.counter();
// david.counter();
// leon.counter();
// alberto.counter();

/*
Classy inheritance
*/

ObjectsNameSpace = {};

ObjectsNameSpace.copyTo = function(target, src) {
    for(var attr in src ){
        target[attr] = src[attr];
    }
}

ObjectsNameSpace.inherits = function(inherited, defn) {
    var inheritedInstance = Object.create(inherited);
    ObjectsNameSpace.copyTo(inheritedInstance, defn);
    var ClassCtor = function() {}
    ObjectsNameSpace.prototype = inheritedInstance;
    return ClassCtor;
}

myPrototype = {};
MyClass = ObjectsNameSpace.inherits(myPrototype, {
    foo: "bar",
    baz: function() {
        console.log(this.foo);
    }
});

myObj = new MyClass();
myObj.baz();

/*
Javascripts Type System

Two ways of checking type:
    * typeof statement: like a function with no ()
    * instanceof operator: anything other than a function returns an expection
*/

function myObject() {};
myObj = new myObject();
//typeof
var objType = typeof myObj; //log: string of object type

//instanceof opertor

function anotherMyObject(){};

var isMyObj = myObj instanceof myObject; //log: true or false

















