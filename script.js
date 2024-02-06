//1.Create your own resume in JSON format.
var resume = {
    Name : "Aadhish T",
    Age : 23,
    DOB : "11/11/2000",
    Mail : "aadhishmoorthy@gmail.com",
    Phone_no : "6383596811",
    Address : "17/6A,Utthandakumravalasu,Vellakovil",
    Pincode : "638111",
    District : "Tiruppur",
    Education : {10 : {Name : "Bala Matric Hr Sec School" , Percentage : 90.08} , 12 : {Name : "Bala Matric Hr Sec School" , Percentage : 70},UG : {Name : "Kongu Engineering College" , Percentage : 74.7}, PG : {Name : "Kongu Engineering College" , Percentage : 75.4}},
    Skills : ["C","Java","SQL"],
    Projects : ["DDOS Attack","Phishing Attack","Online Fencing"],
    Certified_Course : ["Networking","Salesforce","Java"]
}

//2.For the above JSON , iterate over all for loops(for,for in,for of,forEach)
//for
for(var i=0;i<resume.Projects.length;i++){
    console.log(resume.Projects[i]);
}
console.log(`\n`);
//for in
for(key in resume.Education){
    console.log(resume.Education[key]);
}
console.log(`\n The skills are : `);
//for of
for(var i of resume.Skills){
    console.log(i);
}
console.log(`\n`);
//forEach
resume.Certified_Course.forEach((ele)=>console.log(ele));

