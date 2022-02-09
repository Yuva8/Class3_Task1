var resume1=[{"Name":"yuvaraj"},
             {"age" : 26}, 
             {"Degree":"B.E.Mechnical"},
            { "email":"yuvarajgv@gmail.com"},
            {"Experience":"fresher"},
        {"Address":"xxx"}
    ];
 
for(i=0;i<resume1.length;i++){
    console.log(resume1[i])
}

var resume2 = {"Name":"yuvaraj",
"degree":"B.E.mech",
"email":"yuva@gmail.com",
"Address":"yyy",
"Domain":"Full stack development"}

for(var i in resume2){
    console.log(resume2[i])
}

resume1.forEach((ele)=>{
   console.log(ele)
})

