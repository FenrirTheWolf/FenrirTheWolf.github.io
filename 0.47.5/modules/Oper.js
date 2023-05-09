function oper(system, href, text, href2, text2, href3, text3) {
    if (!href && !href2 && !href3) {
      return;
    }
      ////////////////////////////////////////////////////////////////////
      //OPER DIAPER ADDON
      system2 = system;
      character2 = globalaccesscharacter;
  
      var lechoices="";
  ///////////////////////////////////////////////////////////////////////////////////////////////
  //OPER MAIN SECTION
  /////////////////////////////////////////////////////////////////////////////////////////
      var moneycheck;
      if(character2.sandbox.girl){ 
        console.log("testing for girl " +character2.sandbox.girl );
    girlyfier= function(texty){
        
           if(character2.sandbox.girl=="herm"){
        
            var girlifier=[
        [" shi "," he "],
        [" hir "," his "],
        ["Shi ","He "],
        [" hir "," him "],
        ["hirself","himself"],
        ["Hir ","His "]
        
        
        
      ];
      }else{
      var girlifier=[
        [" she "," he "],
        [" her "," his "],
        ["She ","He "],
        [" her"," him"],
        ["Her ","His "]
        
        
        
      ];
    }
       for (let nx in girlifier) {
  
  // console.log("parer check " +character.sandbox.currenthostparse[x] );
  
      texty = texty.replace(new RegExp(girlifier[nx][1], 'g'),girlifier[nx][0]);
  //console.log("testing "+person[x]+" to replace "+arrarer[pos]); 
   
    }
   
  return texty;
      };
      if(text)text=girlyfier(text);
      if(text2)text2=girlyfier(text2);
      if(text3)text3=girlyfier(text3);
      
       }
      
      if(true){
          var p1;
    var p2;
    var p3;
    if (href != undefined && href != null&& href!=false) {
     p1 = "<td style='text-align:center;' id='hovicli'><a href=" + href + " class='transient'> " + text + " </a></td>";
    } else {
      p1 = "";
    }
    if (href2 != undefined && href2 != null&& href2!=false) {
      p2 = "<td style='text-align:center;"+ "' id='hovicli'><a href=" + href2 + " class='transient'> " + text2 + " </a></td>";
    } else {
      p2 = "";
    }
    ;
    if (href3 != undefined && href3 != null&& href3!=false) {
     p3 = "<td style='text-align:center;' id='hovicli'><a href=" + href3 + " class='transient'> " + text3 + " </a></td>";
    } else {
      p3 = "";
    }
  
  
    ;
    if (spark == false) {
      system.write("<p class='transient'><br></p>");
    }
  
    lechoices = ("<div class='"+("contentcut"+character2.sandbox.daycut)+"'><p class='transient'><table class='unstick ex_link' border='1' style='width:100%;opacity:.01'><tr>" + p1 +
            p2 + p3 + "</tr></p></div>");
        
        
      }else{
        var p1,p2,p3;
       if (href != undefined) {
          p1 = "<td style='text-align:center;' id='hovicli'><a href=" + href + " class='transient'> " + text + " </a></td>";
      } else {
          p1 = "";
      }
      ;
      if (href2 != undefined) {
          p2 = "<td style='text-align:center;' id='hovicli'><a href=" + href2 + " class='transient'> " + text2 + " </a></td>";
      } else {
          p2 = "";
      }
      ;
      if (href3 != undefined) {
          p3 = "<td style='text-align:center;' id='hovicli'><a href=" + href3 + " class='transient'> " + text3 + " </a></td>";
      } else {
          p3 = "";
      }
      ;
      if (spark == false) {
          system.write("<p><br></p>");
      }
  
      lechoices = ("<div class='"+("contentcut"+character2.sandbox.daycut)+"'><p ><table class='unstick ex_link'  border='1' style='width:100%;opacity:.01'><tr>"+p1 +
              p2 + p3 + "</tr></p></div>");
        
      }
      
      
      
      
      
      
      
  
  //table-layout='fixed'
  
      var swaper = "";
      ///////////////////////////////////////
      //the new ambi
      //////////////////////////////////
      
      if (true ) {
  
          
          system.write(lechoices);
          
  
        
         
  
          
      //this.scrollBy(0, 200);
  
  
  
   //$("html, body").animate({scrollTop: $(document).height()}, 500);
      if (fastmode) {
          $(".unstick").delay(200).animate({opacity: 1}, 400);
      } else {
          $(".unstick").delay(100).animate({opacity: 1}, 600);
      }
      ;
  
  
  //setTimeout(function(){system.write(lechoices)},3000,system,lechoices);
  }
  
  }