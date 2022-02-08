let student1 = {
    fn : "Aravinda ",
    ln : "HB ",
    age : 40,
    getfullname : function() {
        console.log(this.fn + " " + this.ln);
    }

};

let student2 = {
    fn : "Harry ",
    ln : "KL ",
    age : 40
};

console.log(student1);
student1.getfullname();
console.log(student2);