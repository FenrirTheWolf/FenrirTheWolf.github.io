undum.game.rareminigame = {

    rareminigame: new undum.SimpleSituation(
        "", {

            // The work block.
            //A bit harder each character has a diffrent job. This section very personalized
            //Possibility of compacting them if player is stuffed in pants
            //jobs, mailman, student, office
            // after an hour decide if should be horny, wait impatiently or BE THE COCK
            //
            //
            //
            //
            //
            //heading:"Inside a sheath"

            /*
             
             
              "rare_": function (character, system, action) {
                transer();
                //for 
                
                
              
                parer("");
                    
                    
                    parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                
                character.sandbox.funmidholder2=""; //happens once in the middle
                character.sandbox.funholder="",   //happens once every other input
                        character.sandbox.funexit="./rareofficeexit";
                
                oper(system, "rareminigame/screwgame", "Focus!");
              }, //function close
              "rare_exit": function (character, system, action) {
                transer();
                switch (character.sandbox.funresult) {
                  case 0:
                    //success
                    parer("");
                    
                    
                    break;
                  case 1:
                    //got too horny
                    
                     parer("");
                    
                    break;
                  case 2:
                    //wiggled too much
                    parer("");
                    
                    
                    break;
                }//End of RND switch
                 
                  var eventmid="events/halfway2";
                if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                  //sending to the bathroom encounter
                  
                  eventmid="events/restroom2";
                }
                oper(system, eventmid, "Try to relax for for the remaining time");
              }, //function close
             
             
             */




            heading: function(character, system) {
                //              switch (character.sandbox.host.host) {
                //                  case "bret":
                //                    character.sandbox.headingholder2 = "Post Office";
                //                    break;
                //                  case "keagen":
                //                    character.sandbox.headingholder2 = "College";
                //                    break;
                //                  case "mark":
                //                    character.sandbox.headingholder2 = "Office Building";
                //                   
                //                    break;
                //                }
                //              return (character.sandbox.headingholder2);
            },
            actions: {
                "screwgame": function(character, system, action) {
                    transer();
                    character.sandbox.screwgame.align = 1;
                    character.sandbox.screwgame.time = 0;
                    character.sandbox.screwgame.turns = 0;
                    var turnseffect = "";
                    var spacer = "IIII";
                    for (var turny = 0; turny < character.sandbox.screwgame.turns; turny++) {

                        turnseffect = spacer + turnseffect;


                    }

                    parer("Don't move around too much! Moving will cause this much arousal!<br>' " + turnseffect + " '", "text-align: center;color: #b81ec6;");


                    //parer("Keep still and don't about anything naughty!!","text-align: center;color: #b81ec6;");
                    system.write('<svg  viewBox="0 0 100 8" width="100%" height="100%"><defs><linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%" spreadMethod="pad"><stop offset="0%" stop-color="red" stop-opacity="1"></stop><stop offset="50%" stop-color="white" stop-opacity="1"></stop><stop offset="100%" stop-opacity="1" stop-color="grey"></stop></linearGradient></defs><g><rect x="0" y="0" width="100%" height="60" style="fill: url(&quot;#gradient2&quot;);"></rect></g><g><line x1="50" y1="0" x2="50" y2="60" stroke-width="1" stroke="black"></line><circle cx="50" cy="4" r="2"></circle></g><g><text class="svgtext" y="6" x="1">Horny</text></g><g><text text-anchor="end" class="svgtext" style="text-anchor: end;" y="6" x="99">Bored</text></g></svg>');

                    //parer("HORNY IIIIIIIIIIIIIIIIIIIII Mind IIIIIIIIIIIIIIIIIIIII BORED<br><br><br>","text-align: center;color: #b81ec6;");

                    parer("(Mind will slide toward the nearest edge if you stay still. Clearing your mind will move you closer to bored. Wiggle only as a last resort!)", "text-align: center");
                    oper(system, "./screwmenu", "Try not to get hard!", "./hint", "Hint?");
                    //system.doLink("./screwmenu");
                }, //function close
                "hint": function(character, system, action) {
                    transer();
                    parer("(It may be helpfull to stay slightly horny and avoid the being anywhere near bored)");
                    oper(system, "./screwmenu", "Try not to get hard!");
                }, //function close
                "screwmenu": function(character, system, action) {
                    transer();
                    if (character.sandbox.screwgame.time > 15) {

                        character.sandbox.reward = true;
                        character.sandbox.funresult = 3;
                        oper(system, character.sandbox.funexit, "Finally it sounds like it's ending!");

                    } else {
                        spark = true;
                        //oper(system, "./check", "Check alignment and progress");

                        //character.sandbox.daycaremind=0;



                        oper(system, "./left", "Wiggle a bit", "./turn", "Stay still", "./right", "Clear your head");

                    }

                }, //function close
                "screwmenu2": function(character, system, action) {
                    spark = true;


                    if (character.sandbox.screwgame.time > 15) {

                        system.doLink("./screwmenu");
                    } else {

                        //character.sandbox.daycaremind=0;
                        character.sandbox.screwgame.turns++;
                        oper(system, "./left", "Wiggle a bit");

                    }


                }, //function close
                "check": function(character, system, action) {
                    transer();
                    character.sandbox.screwgame.time++;
                    /*
                   daycareescape/check
                   
                   
                            screwgame
        time:60,
        align:0,
        turns:0
                   
                   */
                    spark = true;
                    //                var turncheck;
                    //
                    //                turncheck = (rnd(2));
                    if (((character.sandbox.screwgame.align <= 0))) {

                        character.sandbox.screwgame.align--;
                        //                 
                    }
                    if (((character.sandbox.screwgame.align >= 0))) {

                        character.sandbox.screwgame.align++;

                    }
                    //                  if (turncheck == 1 && ((character.sandbox.screwgame.align >= 0))) {
                    //
                    //                  character.sandbox.screwgame.align++;
                    //                } else if (turncheck == 2 && ((character.sandbox.screwgame.align <= 0))) {
                    //
                    //                  character.sandbox.screwgame.align--;
                    ////                 
                    //                }



                    // character.sandbox.screwgame.align=0;
                    var spacer = "IIIIII";
                    var align1;
                    var align2;
                    align1 = 3 - character.sandbox.screwgame.align;
                    align2 = 3 + character.sandbox.screwgame.align;
                    var starter = " MIND ";

                    for (var i = 0; i < align1; i++) {

                        starter = starter + spacer;


                    }

                    for (var i = 0; i < align2; i++) {

                        starter = spacer + starter;


                    }
                    starter = "HORNY " + starter + " BORED";

                    var timelist = ["You probably have a rather long amount of time left to go", "You probably still have a while left to go", "You probably have less than half to go", "It is almost over!", "Success!"];
                    var turnseffect = "";

                    parer("" + (timelist[Math.floor(character.sandbox.screwgame.time / 4)]) + "", "text-align: center;color: black;");

                    for (var turny = 0; turny < character.sandbox.screwgame.turns; turny++) {

                        turnseffect = spacer + turnseffect;


                    }

                    parer("Don't move around too much! Moving will cause this much arousal!<br>' " + turnseffect + " '", "text-align: center;color: #b81ec6;");



                    //parer(starter,"text-align: center;color: #b81ec6;");
                    if (character.sandbox.screwgame.align > 4) {
                        character.sandbox.screwgame.align = 4;
                    }
                    var value = character.sandbox.screwgame.align * 12 + 50;

                    system.write('<svg viewBox="0 0 100 8" width="100%" height="100%"><defs><linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%" spreadMethod="pad"><stop offset="0%" stop-color="red" stop-opacity="1"></stop><stop offset="50%" stop-color="white" stop-opacity="1"></stop><stop offset="100%" stop-opacity="1" stop-color="grey"></stop></linearGradient></defs><g><rect x="0" y="0" width="100%" height="60" style="fill: url(&quot;#gradient2&quot;);"></rect></g><g><line x1="' + value + '" y1="0" x2="' + value + '" y2="60" stroke-width="1" stroke="black"></line><circle cx="' + value + '" cy="4" r="2"></circle></g><g><text class="svgtext" y="6" x="1">Horny</text></g><g><text text-anchor="end" class="svgtext" style="text-anchor: end;" y="6" x="99">Bored</text></g></svg>');
                    if (character.sandbox.screwgame.time == 8) {
                        parer(character.sandbox.funmidholder);

                    } else {
                        if ((character.sandbox.screwgame.time % 2) == 1) {

                            parer(character.sandbox.funholder);
                        }

                    }
                    parer("<br><br>");
                    if (character.sandbox.screwgame.align > 3) {


                        system.doLink("./screwmenu2");


                    } else if (character.sandbox.screwgame.align < -3) {
                        system.doLink("./toohorny");

                    } else {
                        system.doLink("./screwmenu");
                    }
                }, //function close
                "toohorny": function(character, system, action) {
                    character.sandbox.punish = true;
                    character.sandbox.funresult = 1;
                    system.doLink(character.sandbox.funexit);

                }, //function close
                "turn": function(character, system, action) {
                    transer();
                    //                try {
                    //                   //parer(""+(character.sandbox.screwgame.align));
                    //                } catch (e) {
                    //                  
                    //                  console.log("TRYCATCH " + e);
                    //                  
                    //                }


                    //character.sandbox.screwgame.time++;


                    // parer("You turn the crayon in the screw but you really can't see what you are doing!");
                    //               var turncheck;
                    //               if(character.sandbox.screwgame.turns>7){
                    //                 
                    //                 turncheck=(rnd(2));
                    //                 
                    //               }else{
                    //                 
                    //                  turncheck=(rnd(3));
                    //               }
                    //                
                    //               
                    //               if(turncheck==1&&(!(character.sandbox.screwgame.align>0))){
                    //                  console.log("check me numbers " +character.sandbox.screwgame.align+"  " +turncheck);
                    //                  if(rnd(3)==1){
                    //                  
                    //                  character.sandbox.screwgame.align--;
                    //                }
                    //                 character.sandbox.screwgame.align--;
                    //               }else if(turncheck==2&&(!(character.sandbox.screwgame.align<0))){
                    //                 console.log("check me numbers " +character.sandbox.screwgame.align+"  " +turncheck);
                    //                 character.sandbox.screwgame.align++;
                    //                  if(rnd(3)==1&&character.sandbox.screwgame.align>0){
                    //                  
                    //                  character.sandbox.screwgame.align++;
                    //                }
                    //               }else{
                    //                 
                    //                 
                    //               }
                    //                if(character.sandbox.screwgame.align>3){
                    //                  character.sandbox.screwgame.align=4;
                    //               }
                    //                 if(character.sandbox.screwgame.align<-3){
                    //                  character.sandbox.screwgame.align=-4;
                    //               }
                    if (character.sandbox.screwgame.align > 3) {
                        parer("You are so bored you have to wiggle a bit!!", "text-align: center;");
                        parer("Check the alignment!", "text-align: center;");
                        system.doLink("./screwmenu2");


                    } else if (character.sandbox.screwgame.align < -3) {


                        parer("SOOOO horny, you can feel yourself start to get hard!!", "text-align: center;");
                        system.doLink("./toohorny");
                    } else {




                        system.doLink("./check");


                    }


                }, //function close
                "right": function(character, system, action) {
                    transer();
                    //bored so wiggle a bit




                    character.sandbox.screwgame.align += 2;




                    system.doLink("./check");
                }, //function close
                "left": function(character, system, action) {
                    //horny soo.... wiggle a bit
                    transer();
                    if (character.sandbox.screwgame.align > 0) {
                        character.sandbox.screwgame.align -= 2;
                    }
                    character.sandbox.screwgame.turns++;
                    console.log("align is " + character.sandbox.screwgame.align + " And turns " + character.sandbox.screwgame.turns);
                    character.sandbox.screwgame.align -= character.sandbox.screwgame.turns;



                    console.log("taking away now align is " + character.sandbox.screwgame.align);
                    system.doLink("./check");
                }, //function close

                "leaving": function(character, system, action) {
                        transer();
                        alt = (true) ? "" : "<p>";
                        parer("" + alt);
                        system.setQuality("harmony", character.qualities.harmony + 1);
                        //system.setQuality("timeofday", character.qualities.timeofday + 1);

                        oper(system, "returner", "Workday not done yet");
                    } //function close
            } //actions close
        } //options close
    )

};