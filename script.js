//1.clas movies

// class Movie {
//     constructor(title,studio,rating){
//         this.title=title;
//         this.studio=studio;
//        if(rating=undefined){
//         this.rating="PG";
//        }
//        else{
//         this.rating=rating;
//        }
//     }
//     getPG(arr){
//         var result=[];
//         for(var i=0;i<arr.length;i++){
//             if(arr[i].rating=="PG") {
//                 result.push(arr[i]);
//             }
//         }
//         return result;
//     }
// }
// var movie1=new Movie("VTK","vels int","PG100");
// var movie2=new Movie("Casino royale","Eom production","PG13");
// var movie3=new Movie("varisu","ags");

// console.log(movie3.getPG([movie1,movie2]));



//2.uml

// class Circle{
//    constructor(radius,color){
//     this.radius=radius;
//     this.color=color;
//    }
//    get radiusCircle(){
//     return this.radius;
//    }
//    get colorCircle(){
//     return this.color;
//    }
//    set radiusCircle(radius){
//     this.radius;
//    } 
   
//     set colorCircle(color){
//      this.color;
//     }
//    get toString(){
//     return this.radius,this.color;
//    }
//    get areaCircle(){
//     return Math.PI*this.radius*this.radius;
//    }
   
//     get circumferanceCircle(){
//     return 2*Math.PI*this.radius;
//     }
   
// }
// var a =new Circle(1.0,"red");
// console.log(a.radius);
// console.log(a.color);
// console.log(a.radiusCircle);
// console.log(a.radius)




//3.Write a “person” class to hold all the details.

// class Person{
//     constructor(name,age,salary,gender){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//         this.gender=gender;
//     }
// }
//     var result = new Person("baskar","24","50k","male")

// console.log(result.name);
// console.log(result.salary);

//output=baskar
//       50k


//4.write a class to calculate the uber price

// class uber_price{
//     constructor(distance_in_KM,base_fare,per_km_price){
//        this.distance_in_KM=distance_in_KM;   
//        this.base_fare=base_fare;
//        this.per_km_price=per_km_price;
//     }
//     get price(){
//         return (base_fare+(distance_in_KM*per_km_price));
//     }
// }
// var person=new uber_price("35","75","12");
// console.log(person.price());


// output:
// 495