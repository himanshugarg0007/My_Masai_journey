
    let n= 10;
    
  for(let i=0;i<=n;i++){
  let bag="";
  // for spaces
  for(let j=0;j<n-i;j++){
    bag+="  ";
  }
  // for upper left pattern
  for(let j=0;j<=i;j++){
    bag+=j+" ";
  }
  //for upper right pattern
  for(let j=i-1; j>=0; j--){
      bag+=j+" ";
  }
  console.log(bag);
}
for(let i=n-1; i>=0; i--){
    let bag="";
    //for spaces
    for(let j=0; j<n-i; j++){
        bag+="  ";
    }
    // for lower left pattern
    for(let j=0; j<=i; j++){
        bag+=j+" ";
    }
    // for lower right pattern
    for(let j=i-1; j>=0; j--){
        bag+=j+" ";
    }
    console.log(bag);
}

