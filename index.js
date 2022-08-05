// Code your solutions in this file
//let message= `Thank you`;

//function writecards()
/*let name =["Ada", "Brendan", "Ali"];
const message = 
  [
    "Thank you"
  ];*/

function writeCards(name,event) 
{
    //let [i]=0;
    //while ([i]<=2)
     let message= [];
      for (let i=0;i<name.length;i++)
      {
         const messages=`Thank you, ${name[i]}, for the wonderful ${event} gift!`;
         message.push(messages);
      }
      return message;
    
}
 //console.log(writeCards([`Guadalupe`,`Ollie`,`Aki`],"surprise"));
 function countDown(a)
 {
    while(a>0) 
    {
        console.log(a);
        a--;
    }
    console.log(a);
 }