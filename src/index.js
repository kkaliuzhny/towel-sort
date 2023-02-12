
// You should implement your task here.

module.exports = function towelSort (arr) {

 
  if(arr==undefined){return [];}
  else
  {
    let mas=[];
    for(let i =0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            for(let j =0 ;j<arr[i].length;j++)
            {
                mas.push(arr[i][j]);
            }
        }
       else if(i%2!=0)
       {
          for(let j =arr[i].length-1 ;j>=0;j--)
            {
                mas.push(arr[i][j]);
            } 
       }
        
        
    }
     return mas;
  }
}
