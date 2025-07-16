const obj={
    name:"Ramu Kaka",
    age:89,
    surname:"Naik",
    fun:function(){
        console.log("Name",this.name);
        console.log("Age",this.age);
        console.log("Surname",this.surname);
        return "fun called!!!";
    },
}

module.exports=obj;