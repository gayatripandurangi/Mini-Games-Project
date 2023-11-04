
function makedivinvisible(){
    var inpt=document.getElementById('field1') ;
    console.log(inpt.value);
    if(inpt.value==''){
      document.getElementById('player').innerHTML="No Name";
    } 
    else{
    document.getElementById('player').innerHTML=inpt.value;
    }
    
    const a4=document.getElementById('scoreboard');
    a4.style.display='grid';
    const a1=document.getElementById('options');
    a1.style.display='flex';
    const a6=document.getElementById('btn');
    a6.style.display='flex';
    const a2=document.getElementById('heading');
    a2.style.display='block';
    const a3=document.getElementById('games');
    a3.style.display='none';
    
    const a5=document.getElementById('images1');
    a5.style.height='35%';
    }
    
    function reset(){
      const div11=document.getElementById('options');
    div11.style.display='flex';
    const div111=document.getElementById('hidden');
    div111.style.display='none';
    document.getElementById('winorloose').innerHTML="Choose one of below 3 options";
    var rese=document.getElementById('winorloose');
        rese.style.color='black';  
    }
     
    function playagain(){
      const div11=document.getElementById('options');
    div11.style.display='flex';
    const div111=document.getElementById('hidden');
    div111.style.display='none';
    document.getElementById('winorloose').innerHTML="Choose one of below 3 options";
    document.getElementById('systemscore').innerHTML='0';
    document.getElementById('playerscore').innerHTML='0';
    }
    
    function chooserock(){
      const div11=document.getElementById('options');
    div11.style.display='none';
    systemseletion("rock");
    }
    
    function choosepaper(){
      const div11=document.getElementById('options');
    div11.style.display='none';
    systemseletion("paper");
    
    }
    
    function choosescissors(){
    
      const div11=document.getElementById('options');
    div11.style.display='none';
    systemseletion("scissor");
    }
    
    function systemseletion(userselect)
    {
      const rock="https://content.instructables.com/F02/BBV9/I7Q0TFTU/F02BBV9I7Q0TFTU.jpg?auto=webp&fit=bounds&frame=1";
      const paper="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmmKD1kXcKkp6DglJ9XfmWKklh3tLApTGrBAYsy6HyZN-z1jc_gXpIEwKTaXvcSA97HQ&usqp=CAU"
      const scissors="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFkdcJBi5ePtE8c75EAd15ilKj-RimD1FFoZuPs-IFEkU5rwwzJ6mOsDCP5cy-aHX5S0&usqp=CAU"
      let player=document.getElementById('playerscore').innerHTML;
      console.log(player);
      let system=document.getElementById('systemscore').innerHTML;
      console.log(system);
      let choice = ['rock', 'paper', 'scissor'];
      let i = Math.floor(Math.random() * 3);
      if(userselect=='rock'){
      document.getElementById('img4').src=rock;
      }
      else if(userselect=='paper'){
    
        document.getElementById('img4').src=paper;
      }
      else{
        document.getElementById('img4').src=scissors;
      }
      if(choice[i]=='rock'){
       console.log('rock');
        
        document.getElementById('img5').src=rock;
       
      } else if(choice[i]=='paper'){
        console.log('Paper');
        document.getElementById('img5').src=paper;
      }else{
        console.log('Scissors');
        document.getElementById('img5').src=scissors;
      }
    
    
      const div111=document.getElementById('hidden');
    div111.style.display='flex';
      var img44=document.getElementById('img4');
    img44.style.display='inherit';
    img44.style.height="90%";
    img44.style.width="25%";
    var img55=document.getElementById('img5');
    img55.style.display='inherit';
    img55.style.height="90%";
    img55.style.width="25%";
              if(userselect==choice[i]){ 
        //tie
        document.getElementById('winorloose').innerHTML="It's a Tie , Lets go for win next time";  
        var tie=document.getElementById('winorloose');
        tie.style.color='blue';  
      }
      else if( (userselect=='rock'&& choice[i]=='scissor')||(userselect=='paper' && choice[i]=='rock' )||(userselect=='scissor' && choice[i]=='paper')){
        document.getElementById('winorloose').innerHTML="Congratulations!!! You Won this round";
        var win=document.getElementById('winorloose');
        win.style.color='green';  
        let player2=+player+1;
        document.getElementById('playerscore').innerHTML=player2;
        //userscore=userscore+1;
        }
        else{
          document.getElementById('winorloose').innerHTML="Oh! Ho! You Lose!! Better Luck Next Time";
          var lose=document.getElementById('winorloose');
        lose.style.color='red';  
          console.log(system);
          let system2=+system+1;
          console.log(system2);
          document.getElementById('systemscore').innerHTML=system2;
      }
    }