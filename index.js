var friendList = ['Chandramoli', 'Grisha', 'Alfred', 'Rohan', 'Kyan', 'Priyanka', 'Roshni', 'Karan', 'Prabhat', 'Yugaan', 'Shikhar', 'Anirudh', 'Kumar', 'Kunwar', 'Aryan', 'Aviral', 'Siddharth', 'Shresht', 'Sulagna', 'Laksh', 'Nikhil', 'Shonali', 'Pallav', 'Yash']; 
 
var fName;
function readData() {
  
  var name = document.getElementById("inputName").value;
  var pass = document.getElementById("inputPassword").value;
  var commonMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're an extraordinary friend and celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
  finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're an extraordinary friend and celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";


  name=name.trim();
  
  fName = name;

  var passCheck = false;
  var nameCheck = false;

  
  if (pass == "HBD123"){
    passCheck = true;
  } 
  
  

  if(friendList.includes(name)) {
    nameCheck = true;
  }

  if(passCheck==false || nameCheck==false){
    alert('Wrong Password! Or you are not invited!');
  }

  else {  
    // var nameId = friendList.indexOf(name);
    // localStorage.setItem("nameId", nameId);
    // // Simulate a mouse click:
//    alert ("You in!"); 
   
   
     var myobj = document.querySelector(".loginBox");
     myobj.remove(); 

     document.querySelector(".MainBody").style.visibility = "visible";

     document.querySelector("body").style.overflow = "visible";
     document.querySelector(".Title-Stamp ").style.visibility = "visible";
     
     var friend = friendList.indexOf(name);

     var finalMessage='';
    

     switch (friend) {
           
        case 0:
            finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. Thanks for being there and listening to me cry. I hope we've patched up for good <3 (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            
            break;
        case 1: 
            finalMessage = "I understand that things are way different between us, and we aren’t as outwardly tight as we used to be - in fact, I’ve taken a break to simply let myself adjust to this new status quo and nothing else. You’re still one of the most important people in my life, and all I have is love for you. It would simply be incomplete to not have you there. I totally understand if you don’t wish to come. Try just for the Holi part at least? Please come thanks.";
            break; 
        case 2:
            finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. Our girl trouble talks are damn sike xD ily muah (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 3: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're legit my bff da, Roshan Ram, and without you it would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 4 : 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. Kyancer, aap hi guruji hein _/\_ Pakka I'll come suncity soom xD Without you, it would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 5: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. BBG you're legit so smokin hot I promise I'll try not to pounce on you, my Ferrari queen - you just come first. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 6: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. Roshni, I feel so happy around you :') and having my birthday without you would be so incomplete (Full on guilt trip xD) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 7: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. Da Karan one ahpliskliya donut scene it will be so please come okay. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        case 8:
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're literally my oldest friend (thanks for the map help lmao) and celebrating my last birthday here without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 9:
            finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're an extraordinary friend and celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        
        case 10: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're one damn cute friend xD celebrating without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 11: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. It's been a while but I still feel super positive around you, so yeah pls come thanks xD. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 12: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're legit such a major soulmate. I fucking love you man. Ily so much that I didn't go to UIUC out of respect for bha... (xD) friend celebrating my last birthday here would be legit useless without you. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion. Now accept my invite and come put scene!";
            break;

        case 13: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're my cute daddy and celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 14: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. I genuinely feel so comfy w you man, despite it being a while. Celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 15: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're such a beautiful friend man. Chai scene ftw. Celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;
        
        case 16: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're legit one proper bestie. Despite all you do is roast me xD. Celebrating my birthday without you would be so... ideal (but pls come :D). (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
            break;

        case 17: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're my caliban da please make time for me thanks. Celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
        break;
       
      case 18: 
      finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. I know it's tough :( and you're probably a million miles away, but ily so please superman my way. Celebrating my birthday without you is so incomplete (so please be there in spirit thanks). (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I'm missing you :'(";
        break;
       
      case 19: 
      finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. I know it's tough :( and you're probably a million miles away, but ily so please superman my way. Celebrating my birthday without you is so incomplete (so please be there in spirit thanks). (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I'm missing you :'(";
        break;
       
       case 20: 
      finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. I know it's tough :( and you're probably a million miles away, but ily so please superman my way. Celebrating my birthday without you is so incomplete (so please be there in spirit thanks). (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I'm missing you :'(";
        break;
       
      case 21: 
       finalMessage = "This is where I call my friends and give them an invite. One custom paragraph where I tell them to come. My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time it coincides again. I know you know this xD I'm just telling them why this time is extra special";
       break;
       
       case 22: 
       finalMessage = "This is where I call my friends and give them an invite. One custom paragraph where I tell them to come. My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time it coincides again. I know you know this xD I'm just telling them why this time is extra special";
       break;
       
      case 23:
       finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're legit one proper bestie bro. Hope I bu,p into you more often after your exams are over! (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. ik it's tough but do try!";
       break;
       
       

        default: 
        finalMessage = "It would be one proper bomb if you could make it to either (or both!) of my Birthday Scenes. You're such a beautiful friend da. Celebrating my birthday without you would be so incomplete. (Boring history alert) My 19th is quite special because the Hindi Calendar resets every 19 years. Back in 2002, I was born on Holi. This time being my last birthday here at home adds to the occasion, and I wouldn't miss having you. Now accept my invite and come put scene!";
        break;
     }

     document.getElementById("friendName").innerHTML = name;
     document.getElementById("personalMessage").innerHTML = finalMessage;

     var photo = "ImgAssets/friendRepo/" + friend +".jpg" ;
     
     document.getElementById("fImage").setAttribute("src", photo);
        



           


        

     }

     

  
  
}

function closingBoxHoli() {

    document.querySelector(".MainBody").style.visibility = "hidden";
    document.querySelector(".closingBoxHoli").style.visibility = "visible";

  

    

}

function closingBoxBowling() {

    document.querySelector(".MainBody").style.visibility = "hidden";
    document.querySelector(".closingBoxBowling").style.visibility = "visible";

     

}
