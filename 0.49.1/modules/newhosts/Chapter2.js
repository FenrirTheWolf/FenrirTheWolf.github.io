ch2msg = function(character, system, from) {
    if(character.sandbox.daysnotacock>21){
      //after 7 more days goes down to 7
    }else if(character.sandbox.daysnotacock>7){
      //after 7 more days goes down to 10
        character.sandbox.withdrawls=17-(character.sandbox.daysnotacock-7);
    }else if(character.sandbox.daysnotacock<=7){
      //after 7 days goes up to 20
        character.sandbox.withdrawls=10+character.sandbox.daysnotacock;
    }
    var rndnum=rnd(character.sandbox.withdrawls);
    var rndpick=rnd(10);
    if(rndnum>4){
        //-------------------------//
        //--// Cock Sensations //--//
        //-------------------------//
        //messages from host's cock sensations
        switch (rndpick) {
            case 1:
                parer("The sensation of rubbing spreads up and down your body rather suddenly! host must be rubbing his cock right now! All you can do is blush with embarrassment hoping no one notices you acting strange! Your whole body arches backwards suddenly and you FEEL the cum spurting up through you! The phantom sensations end but you do notice a constant taste of cum in your mouth now!");
                break;
            case 2:
                parer("There is a sudden tightness around you, like a warm moist sleeping bag. You know its just some distant sensation from hosts cock, but it feels so real! The embrace of his sheath wrapped around you. The scents and tastes of being trapped in his flesh as just another part of his body... You snap yourself out of it and try to ignore the sensations!");
                break;
            case 3:
                parer("You suddenly feel like you are getting squeezed and pushed around! Almost falling off your feet as host must be adjusting you in his sheath... or his cock in it's sheath. The distinction in your mind is a bit blurry still. If you can feel it does that mean it is still a part of you?... Or you are still a part of it? Maybe your mind/soul really are still in his sheath and walking around is the real phantom sensation!");
                break;
            case 4:
                parer("Sometimes it seem like you are living a double life. Constantly feeling host's cock as if it were still you. It is so easy to just close your eyes and completly sink back into the sensations. The swaying as he walks lightly jostling you between his legs. If you concentrate hard enough you can almost start to see again from the point of view of his cock! The shock when that happens is enough to jump you out of it.");
                break;
            case 5:
                parer("You get surprised as you feel cloth suddenly slide over your face! You flail at it but find nothing there, the sensation continues as you realize it must be coming from host. All you can do is wait it out as what must be underwear rubs against your body. Silly cloth prison keeping you from the rest of the world, yet you can't help but enjoy the thought of being trapped in it again.");
                break;
            case 6:
                parer("Suddenly you feels something slimy slide down over your entire body! It's tight and stretchy but you don't feel or see anything actually there! As the sensation continues you realize it must be a condom host is wearing! It makes you want to wiggle and squirm, like you were just forced into a latex bed as it shrink wrapped around you! You do everything you can to ignore the constant sensation and carry on.");
                break;
            case 7:
                // Sex
                //watersports
                //chastity
                //sex
                parer("You start to feel a bit strange, a sort of hard to move feeling. At first you don't think much of it but then everything feels tight and squishy along your whole body! You have to brace yourself against the onslaught of sensations! Over and over you feel like your body is getting shoved into a tight hole! host must be.... having fun somewhere. Your face goes bright red as you are helplessly used from a distance! What feels like a urethra connected to your throat fills with cum, you half expect a stream of the stuff to shoot from you! All the sensations end slowly as you are left with lingering taste of cum in your mouth");
                break;      
            case 8:
                if(character.sandbox.ws){
                    parer("A massive surge of movement spreads through you as it feels like something is shooting up your throat! You quickly close your mouth and cover it but nothing is coming out. Yet you can feel it! The taste of piss pouring out over your tongue and a constant pressurized stream flowing up a urethra into your mouth! All you can do is moan to yourself as host finishes pissing and the phantom sensations end.");
                break;
                }
            case 9:
                if(character.sandbox.pissaddiction>5){
                    parer("You occasionally wander past people and helplessly glance at their crotch wondering what their piss would taste like. You could do way better pissing than their cock ever could! The desire to be complimented after you finish draining their bladder, wiping the piss from your face... You just want prove how good a penis you can be... That last one rattles your thoughts enough to realizing what you were thinking!");
                break;
                }
            case 10:
            parer("You suddenly get a weird squished feeling around your face! It is easy enough to guess what it is, having felt it any number of times as host rubbed you during the day. Just the pleasant feeling of his touch squeezing your soft body, rubbing over the head and then down the shaft! There is nothing you can do to get away from the sensations! Not that you could do anything about it while you were a cock either...");
                break;
            default:
        } //End of RND switch
    }else if(rndnum>4){
    //----------------------//
    //--//HEAT messages //--//
    //----------------------//
      // Heat messages
        switch (rndpick) {
            case 1:
                parer("You are terribly distracted with each step you take. There is a desperate need to be filled that just won't go away. Wandering around the city is certainly helping but only so much");
            break;
            case 2:
                parer("There is almost a sense of embarrassment as you wander about. It feels like you are constantly super exposed! As if you just want to hide in a nice sheath behind a pair of underwear. You are not supposed to be out in public! The moment of panic passes as you try to remind yourself you are not a cock anymore.");
                break;
            case 3:
                parer("You catch yourself every now and then staring at peoples crotches. It's almost instinctual as a deep part of your wonders what their cock is like, or more accurately what it would feel like to be their cock. It's almost like house searching as you wonder about becoming their new little friend. You eventually have to shake your head trying to get the thought out.");
                break;
            case 4:
                parer("The heat comes back to you rather suddenly when your ass clenches randomly as if letting you know it was displeased not having a cock to squeeze. Biting down on your lip is about the best you can do to drown out the desperate sensations of need. There is no way you can last much longer if this doesn't go away on it's own!");
                break;
            case 5:
                parer("A soft wind blows past you, memories of your warm sheath come flooding back. Being a cock was so nice, so warm. It was a bit sticky and moist sometimes but so was most of your body. It just felt so nice and comfortable, safe. You manage to get your head focused again trying to remind yourself that you are a person now darn it!");
                break;
            case 6:
                parer("Everything seem strange being this high up. You spent soo long being down at crotch level with the world it feels like you are on stilts all the time now. Even moving around on your own feels strange. For so long you were carried around wherever without a choice at all. You can't help but sigh remembering how nice that felt.");
                break;
            case 7:
                parer("Walking past places feels different now, anything adult related chatches your eye fast. It might be because you are effectivly perma horny! Donut shop... be fun to be slide into one of them, a hot dog stand just causes a instant giggle. Passing a clothing store and all you can think of is all the different kinds of underwear your could get your owner to cover you with!");
                break;
            case 8:
                parer("Occasionally you try to move or throb in clearly cock like ways just instinctually. An occasional reminder that you can't do that anymore. You feel bad for a moment till you remember you can do WAY more things as a person! Being able to move and walk and talk is way more important than the ability to throb and twitch! Right?");
                break;
            case 9:
                parer("You keep thinking about the feeling in your ass and how much you just NEED to be filled! You know this is just those damn runes taunting you into becoming a cock again! But that doesn't change the fact of how it feels. You need it so badly! It is so intense you almost wonder if the consequences are worth it just to end this desperate heat!");
                break;
            case 10:
                if (character.sandbox.ws) {
                    parer("You wander past a bathroom and wonder if your owner needs to piss. You could always sort of feel how full his bladder was, slightly. Just a distant pressure always reminding you of your purpose. The thought of going in there and keeling in front of a urinal as his piss streams from your mouth invades your mind before you shake it off as nonsense.");
                }else{
                    parer("You wander past a bathroom only thinking of it being a good place to sneak off so you can be stroked! Throbbing till those balls clench and send torrents of cum up your throat! You catch yourself drooling before managing to shake yourself out of the daydream.");
                }
                break;
            default:
        }//End of RND switch
    }
};

undum.game.ch2 = {
    ch2: new undum.SimpleSituation(
        "", {
            actions: {
                "fiddler": function (character, system, action) {
                    $("#save").attr('disabled', true);
                    console.log(character,character.sandbox)
                    character.sandbox.cocktype="";
                    console.log("================ FIDDLER WHY! " + character.host.host);
                    character.sandbox.ch2=true;
                    character.sandbox.ring=true;
                    //system.setQuality("day", 5);
                    var rndprop = function (obj) {
                        var keys = Object.keys(obj);
                        return obj[keys[ (rnd(keys.length)-1) << 0]];
                    };
                    system.setQuality("harmony", 0);
                    if(character.sandbox.holdem){
                        var tempnames = undum.game.newhosts.names;
                        character.sandbox.newhostnames = undum.game.newhosts.names;
                          //, "mark", "keagen" "leia",
                        var x2;
                            
                        var raveltype;
                        if(character.sandbox.playertype == "dragon"){
                            raveltype = "ravel2";
                        }else{
                            raveltype = "ravel";
                        }

                        var newhostlocations = {
                            adult: [],
                            arcade: [],
                            carnival: [raveltype],
                            cinema: [],
                            club: [],
                            farm: [],
                            gym: [],
                            library: [],
                            mall: [],
                            museum: [],
                            park: [],
                            pawn: [],
                            post: [],
                            pub: [],
                            tavern: [],
                            train: [],
                        };
                        character.sandbox.ch2hostloc = newhostlocations;
                        for (x2 in character.sandbox.newhostnames) {
                            var locarray=character.nh[tempnames[x2]]["locations"];
                            if(tempnames[x2] != "ravel" && tempnames[x2] != "ravel2" && tempnames[x2] != "mark"){
                                switch (locarray.length) {
                                    case 0:
                                        //standard
                                        rndprop(newhostlocations).push(tempnames[x2]);
                                        break;
                                    case 1:
                                        //one location 
                                        newhostlocations[locarray[0]].push(tempnames[x2]);
                                        break;
                                    default:
                                  //run standard on special list
                                        newhostlocations[locarray[rnd(locarray.length)-1]].push(tempnames[x2]);
                                }//End of RND switch
                            }
                        }
                        character.sandbox.holdem=false;
                    }else{
                        if(character.qualities.dayofweek == 3){
                            character.sandbox.holdem = true;
                            character.sandbox.ch2beento = [];
                        }
                    }
                    //Random cock events sent to player from all the hosts they have ever had.
                    //hyena that loves piercings
                    //Jaxe
                    //Will the equine
                    //he is the boyfriend to bret in the future. 
                    //explore relationship with bret..... NOT MORE PUNS!
                    //girly boy sissy  
                    // jessie Jamie TWINS!
                    //
                    //Raptor
                    // Aleik
                    //Possesive lion might muscles but has a small pee pee.
                    //Dominic 
                    //kobold
                    //Ravel the carnival kobold, does a magic trick with his cock... just bend over. Also might be a freakshow of the kobold with the biggest dong in the world!
                    //female squirrel
                    //Verona 
                    /*
                     * SPECIES I WOULD LOVE TO WRITE FOR!!!!
                     * Squirrel
                     * Skunk
                     * bunny jackalope
                     * tanuki
                     * dolphin or shark
                     * bat 
                    */
                    //possessive host YOU ARE MY cock now, And I am NEVER letting you go!
                    //code goes here for figuring out where hosts should go
                    //to access a new host's information
                    var myhostlist;
                    for (myhostlist in character.nh) {
                        if (character.nh[myhostlist].loc.includes(character.qualities.dayofweek)) {
                            character.sandbox.ch2hostloc.push(character.nh[myhostlist].name);
                        }
                    };

                    oper(system, "places2", "Take the bus");

                }, //function close  
                "pasthost": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, //function close
                "nhreturn": function (character, system, action) {
                    //SETS A NEW ACTIVE HOST! 
                    $("#save").attr('disabled', true);
                    //character.sandbox.girl=false;
                    var nh= character.nh[character.sandbox.activenh];
                    character.sandbox.currenthostparse=nh.parse;
                    character.sandbox.scenerexit= "newhostpicked/enter";
                    character.sandbox.host = character.nh[character.sandbox.activenh];
                    character.host=character.nh[character.sandbox.activenh];
                    character.sandbox.headingholder=character.sandbox.activenh; 
                    character.sandbox.curhost= character.host.chost;
                    if(character.sandbox.host.genderismale===true){
                        character.sandbox.girl=false;
                    }else{
                        if(character.sandbox.genderismale=="herm"){
                            character.sandbox.girl="herm";
                        }else{
                            character.sandbox.girl=true;
                        }
                        
                    }
                    character.sandbox.internalballs=false;
                    if(character.sandbox.host?.parse?.balls=="internal balls"){
                        character.sandbox.internalballs=true;
                    }
                    parer("<h1>"+character.host.chost+"</h1>");
                    document.getElementById("creatorname").innerHTML = "Character Written by<br> "+character.host.creator;
                    $("#creatorname").css('display', 'block');
                    // console.log("Huh why no no worky ");
                    // parer(nh.greet);
                    // oper(system, "ravelhostgreet/scene1", "Hold on to your butts....");
                    // oper(system, "home", "Maybe later..... Head home",,"Test the real scene");
                    if (character.sandbox.tavernshortcut) {
                        system.doLink("ch2morning/enter");
                    }else{
                        system.doLink((nh.host+"hostgreet/scene1"));
                    }
                }, //function close

                "r1": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                } //function close

            }//actions close
        }//options close
    ),
    bus: new undum.SimpleSituation(
        "", {
            actions: {
                "simple": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, //function close
                "r1": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
               } //function close
            }//actions close
        }//options close
    ),
    home: new undum.SimpleSituation(
        "", {
            canView: function (character, system, host) {
                return (true);
            },
            heading: "Your house",
            tags: ["place2"],
            displayOrder: 4,
            enter: function (character, system, from) {
                character.sandbox.trainloc=false;
                character.sandbox.currenthostparse= character.sandbox[character.sandbox.pasthost+"parse"];
                character.sandbox.girl=false;
                if(character.sandbox.fromhome){
                    character.sandbox.fromhome=false;
                    system.doLink("ch2home/night");
                }else{
                    parer("(There are currently a bunch of characters somewhere in the city. This is a HIGHLY work in progress example of what the area that new characters will appear in will look like. As well as Player made characters. Check the discord if you are interested in making one. The link is on the left.)");
                    
                    //thankyou dracxon
                    character.sandbox.fromhome=true;
                    //,"Call up"+character.sandbox.host.chost,"./ch1"
                    if(character.qualities.dayofweek==6){
                        oper(system, "ch2/fiddler","Explore the town");
                    }else{
                        oper(system, "places2", "Take the bus");
                    }
                }
            },
            actions: {
                "ch1": function (character, system, action) {
                    transer();
                    system.setQuality("ctf",20);
                    clother();
                    parer("Sexy butt fun! (returning to chapter 1!)");
                    oper(system, "transformation", "Ohh.. ok");
                }, //function close
                "r1": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
               } //function close
            }//actions close
        }
    ),
    places2: new undum.SimpleSituation(
        "<h1><p class=transient>Choose a location</p><h1>", {
            displayOrder: 4,
            choices: "#place2",
            enter: function (character, system, from) {
            }
        }
    ),
    ch2menu: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function (character, system, action) {
                }, //function close
    
                "r1": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                } //function close
            }//actions close
        }//options close
    ),
    mall: new undum.SimpleSituation(
        "", {
            heading: "Mall",
            tags: ["place2"],
            displayOrder: 4,
            optionText:function (character, system, from){
                return "Mall"+ ch2header(character,"mall");
            },
            enter: function (character, system, from) {
                character.sandbox.ch2loc="mall";
                character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                parer("You enter the busy mall, with is shops and various stores. Every one of them just itching to get your precious limited money! You don't have much though and all the people turn out to be distracting in all the wrong way. Occasionally people give you strange glances noticing how your gaze is always on their crotch as they walk past.");
                //underwear section
                //food section naughty veggies
                ch2msg(character, system);
                //character.sandbox.operholder=[];
                oper(system,"./underwear","Check out the underwear section","./food","Buy some food");
                spark=true;
                ch2menuer(character,system);
            },
            actions: {
                "food": function (character, system, action) {
                    transer();
                    system.setQuality("currency",character.qualities.currency-100 );
                    character.sandbox.food+=7;
                    parer("You wander through the store picking up some essentials for a few days. You keep getting stuck looking at things you really shouldn't... Long vegetables, condoms, skin moisturizer, lube... And even when you drag your attention away from those you end up staring at people crotches as they pass through the store.");
                    character.sandbox.wandervar++;
                    ch2hoster(character, system);
                    ch2menuer(character, system);
                }, //function close
                "underwear": function (character, system, action) {
                    transer();
                    character.sandbox.wandervar++;
                    parer("You wander through the clothing section of the mall and end up stopping at the underwear section. For some reason it's the only interesting thing you seem to find. It is so distracting looking at them all and imagining what it must feel like to be trapped in each one. Thoughts of your previous host wearing them rubbing you through the cloth!");
                    oper(system, "./out", "Don't buy anything");
                    spark=true;
                    oper(system, "./pouch", "Tight pouch style","./lace","Girly lace underwear","./boxers","Simple boxers");
                    spark=true;
                    oper(system, "./thong", "Mens thong","./jock","Jock strap","./white","Tight White Undies");
                }, //function close
                "thong": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"thong","sexy mens thong","can continue to enjoy the feeling of the thong as host has to deal with it stuck up under his tail."];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer("You end up taking one of the mens thongs with you to the check out. The idea of it wedged up the ass while you get to stay in the tight pouchy front area is just too appealing. It might even make them extra horny to play with you more often...");
                    ch2menuer(character,system);
                }, //function close
                "out": function (character, system, action) {
                    transer();
                    parer("You decide against buying one of the pairs of underwear, you would probably only end up trapped inside whichever you bought anyway....");
                    ch2menuer(character,system);
                }, //function close
                "jock": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"jockstrap","sexy jockstrap","can continue enjoying way his jockstrap cradles you."];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer("You end up taking one of the jock straps with you to check out. Maybe the next person you get stuck to will enjoy them! Their butt all exposed while the big pouch area gives you a bunch of room. Plus they are kind of naughty....");
                    ch2menuer(character,system);
                }, //function close
                "white": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"white briefs","tight underwear","can continue to enjoy the tight comfort of his briefs."];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer("You end up taking one of the standard white briefs with you to check out. They may seem normal to most but any cock knows how tight these things feel! It's actually really nice feeling them rub and squeeze you, even if it does seem almost like a prison somtimes.");
                    ch2menuer(character,system);
                }, //function close
                "lace": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"lace panties","girly panties","get to still enjoy the thought of how host must look in the lace panties."];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer(`You end up taking one of the feminine lace underwear with you to check out. 
                        You can't help but feel a little embarrassed taking them to the check out with you, 
                        especially since they obviously have extra cloth for ones bulge. Then again it might be even more embarrassing to imagine yourself trapped inside them!`);
                    ch2menuer(character,system);
                }, //function close
                "pouch": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"pouch style underwear","weird tight pouch underwear","can continue to enjoy the tightness of the pouch underwear as it enhances your bulge shape!"];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer("You end up taking one of the sexy pouch styles with you to check out. They look pretty tight espeically around the crotch where it looks like they would sort of force the b#alls and sh#eath outward for the world to see! It's pretty clear they are made to really show off how big of a bulge you could make inside them!");
                    ch2menuer(character,system);
                }, //function close
                "boxers": function (character, system, action) {
                    transer();
                    character.sandbox.underwear[true,"boxers","spacious boxers","have room inside the boxers instead of some super tight imprisoning underwear."];
                    system.setQuality("currency",character.qualities.currency-10);
                    parer("You end up taking one of the boxers with you to check out. You spent so long in a tight pair of underwear, with these you could just relax with just his sheath holding you. No silly cloth prison or extra musky space this time!");
                    ch2menuer(character,system);
                }, //function close
                "r1": function (character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                } //function close
            }//actions close
        }
    ),
   club: new undum.SimpleSituation(
           "",
           {
             heading: "Night Club",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Night Club"+ ch2header(character,"club");
             },
             canChoose:
       function (character, system, host) {
         
         return (character.sandbox.wandervar>1);
       },
             enter:
                     function (character, system, from) {
                     character.sandbox.ch2loc="club";
                     character.sandbox.locdeeper=true;
              character.sandbox.ch2beento.push(character.sandbox.ch2loc);
              parer("You wait around till a bit later and end up wandering to a night club. Either you find relief or something to distract you, either way they might have something to drink to calm you down. It's not too packed but you would still end up bumping into people on the dance floor. The lighting is pretty low so it's thankfully hard to get distracted by peoples crotches...");
           ch2msg(character, system);
                       
                       character.sandbox.operholder=[];
                       //Order a drink (give access to a host)
                       //dance party! (give access to a host)
                       //make system to get drunk and then dance for access!
                       oper(system,"./sitbar","Get a drink","./godance","Get on that dance floor!");
                       spark=true;
         ch2menuer(character,system);
                     },
             actions: {
               "sitbar": function (character, system, action) {
                 transer();
                 character.sandbox.wandervar++;
                 system.setQuality("currency",character.qualities.currency- 20);
                 parer("You take a seat at the bar and try desperatly not to rub your throbbing hole against the seat... Almost instinctively you set some money down on the counter and just get a look from the bartender as he nods. A few moments later he slides a glass toward you with an evil looking drink in it. You take a sip and it is.... strong! He must have noticed how much you needed it....");
              oper(system, "./finishdrink", "Finish your drink","./slow","Take it slow");
               }, //function close
               "finishdrink": function (character, system, action) {
             transer();
             parer("You quickly down the drink not giving it any chance to escape. Your eyes nearly cross as you clench your entire body just like when you were a cock... It doen't take long before the room gets a bit funny feeling...");
             oper(system, "./out", "Haed bak hmoe","./isdrunk","Id Tmie to dnace!");
           }, //function close
           
           "slow": function (character, system, action) {
             transer();
             parer("You know better than to drink it all at once, instead you spend some time just to enjoy the atmosphere of the club. Listen to the music, enjoy the drink as you slowly feeling your head get tingly. You are feeling pretty good after a while and almost forget all about how much you could really use a cock up your ass. How good it would feel sliding up into you, making you a part of it.... Claiming you as its replacement....");
             parer("You manage to snap out of it and decide it's time to head home before you make a poor decision.");
             oper(system, "./out", "Stand up and head for home");
           }, //function close
           "godance": function (character, system, action) {
             transer();
              character.sandbox.wandervar++;
               system.setQuality("lust",character.qualities.lust+10 );
             parer("Dancing is usually a fun distracting activity, but not here! Every bump to you makes you shudder hoping it's someones cock teasing you back there. It's just a simple club dance floor but to you its a sea of thrusting hips all teasing you to come play! You try to have some fun dancing but when you catch yourself going for your pants you know it's time to stop! ");
             oper(system, "./out", "Head back home...");
           }, //function close
               "isdrunk": function (character, system, action) {
             transer();
             parer("This is great! The music the dancing! For the first time in days you are not thinking anything naughty at all. Just enjoying yourself before realizeing you have been rubbing your butt against someone for the last minute. You feel a bit embarrassed and end up heading back to the bar to sit down...");
      
         ch2hoster(character, system);
          ch2menuer(character,system);
           }, //function close
           "out": function (character, system, action) {
             transer();
             
             system.setQuality("lust",character.qualities.lust-10 );
             parer("You stumble around a bit but thankfully your place isn't that far of a walk. And after a few minutes to stumbling the buzz starts to fade enough that you are no longer wobbling around. It may have helped some though as your head does feel a bit more at ease. ");    
             ch2menuer(character,system);
       
           }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   adult: new undum.SimpleSituation(
           "",
           {
             heading: "Adult Novelties",
             tags: ["place2"],
             displayOrder: 4,
             
             optionText:function (character, system, from){
          return "Adult Novelties"+ ch2header(character,"adult");
             },
             enter:function (character, system, from) {
     character.sandbox.ch2loc="adult";
     character.sandbox.ch2beento.push(character.sandbox.ch2loc);
     
                            parer("Considering your current state of mind, coming here is more like giving in than distracting yourself. You really need to find a new crotch to attach to, or some way to endure these withdrawls! But then again maybe buying a toy or two could help relieve the desperate sensations that are bothering you. The front area has mostly fetish gear while the other room has the sextoys. There is also an unmarked door way in the back. ");
                       
                 
                       //buy sex toys... used to reduce horniness?
                       //Look at sex toys"./backroom","Head into the back room door"
                       
                        ch2hoster(character, system);
                       oper(system,"./toys", "Look at the sex toys");
                       spark=true;
                //ch2menuer(character,system);
                     },
             actions: {
               "toys": function (character, system, action) {
                 transer();
                 system.setQuality("lust",character.qualities.lust+10 );
                 parer("You have a look at all the wonderfull sex toys. Though most of them you would love to have used on you in a rather different way than others. In fact many of them you might not even have interest in using at all... just hoping to keep them around as a present for your next owner! The idea of him using them.... It might look weird to buy a BUNCH of them all at once...");
 //                var itemlinklist={
 //                  dildo:false,
 //                  plug:false,
 //                  vibe:false,
 //                  milker:false,
 //                     beads:false,
 //                  fleshlight:false,
 //                  penispump:false,
 //                     buttplug:false,
 //                  cage:false
 //                };
                 
 //                    var operholderloop;
 //                
                 
                 //dildo
                 //plug
                 //vibrator
                 //Milker
                 //beads
                 //fleshlight
                 //penispump
                 //butt plug
                 //chastity cage
                 var listynum=0;
                var loopwordything=[];
                var inloopwerd="";
             loopwordything=[];
                 for(let xd in character.sandbox.itemlinklist){
                   
                 inloopwerd= xd ;
                   listynum++;
                   console.log("xd is " + xd);
              
               if(character.sandbox.itemlinklist[xd]){
                 
                 loopwordything.push([false,""]);
                     console.log("wordything " + loopwordything );
               }else{
                 
                 if(inloopwerd=="penispump"){
                   inloopwerd="penis pump";
                 }
                     if(inloopwerd=="vibe"){
                   inloopwerd="vibrator";
                 }
                     if(inloopwerd=="buttplug"){
                   inloopwerd="butt plug";
                 }
                        if(inloopwerd=="plug"){
                   inloopwerd="penis plug";
                 }
                 loopwordything.push(["./"+xd,"Buy the "+inloopwerd]);
               }
                  
            
               
              if(listynum==3){
                console.log("ugh work damnit " + loopwordything );
                    oper(system,loopwordything[0][0],loopwordything[0][1],loopwordything[1][0],loopwordything[1][1],loopwordything[2][0],loopwordything[2][1]);
                listynum=0;
                  loopwordything=[];
                  spark=true;
              }
            
      
               
           
           }
                
            
 
                 
                 
                          //oper(system, character.sandbox.toys.beads, "Sounding beads",character.sandbox.toys.plug,"Penis plug",character.sandbox.toys.vibe,"Cock ring vibrator");
                          
                          
                          
 //                if(character.sandbox.toys.cage){
 //                  
 //                  oper(system, "./nothing", "Don't pick anything",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
 //                }else{
 //                  oper(system, "./nothing", "Don't pick anything (Chastity Cage)",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
 //                }
              ch2menuer(character,system);
               }, //function close
               "vibe": function (character, system, action) {
             transer();
             system.setQuality("currency",character.qualities.currency-20 );
             character.sandbox.itemlinklist[action]=true;
             parer(" Item bought! Description and usage WIP");
               ch2menuer(character,system);
           }, //function close
               "dildo": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-40 );
             character.sandbox.itemlinklist[action]=true;
            parer(" Item bought! Description and usage WIP");
         ch2menuer(character,system);
           }, //function close
           "buttplug": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-30 );
             character.sandbox.itemlinklist[action]=true;
            parer(" Item bought! Description and usage WIP");
           ch2menuer(character,system);
           }, //function close
           "cage": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-40);
             character.sandbox.itemlinklist[action]=true;
            parer(" Item bought! Description and usage WIP");
      ch2menuer(character,system);
           }, //function close
           "fleshlight": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-20 );
             character.sandbox.itemlinklist[action]=true;
              parer(" Item bought! Description and usage WIP");
            ch2menuer(character,system);
           }, //function close
           "beads": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-20 );
             character.sandbox.itemlinklist[action]=true;
         parer(" Item bought! Description and usage WIP");
           ch2menuer(character,system);
           }, //function close
           "plug": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-30 );
             character.sandbox.itemlinklist[action]=true;
                 parer(" Item bought! Description and usage WIP");
          ch2menuer(character,system);
           }, //function close
           "milker": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-100 );
             character.sandbox.itemlinklist[action]=true;
               parer(" Item bought! Description and usage WIP");
           ch2menuer(character,system);
           }, //function close
           "penispump": function (character, system, action) {
             transer();
              system.setQuality("currency",character.qualities.currency-50 );
             character.sandbox.itemlinklist[action]=true;
               parer(" Item bought! Description and usage WIP");
            ch2menuer(character,system);
           }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   park: new undum.SimpleSituation(
           "",
           {
             heading: "Park",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Park"+ ch2header(character,"park");
             },
             enter:
                     function (character, system, from) {
                 character.sandbox.ch2loc="park";
                 character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                 //go for a walk (catch somone pissing on a bush)
                 //park bathroom (who knows!
                 //Enjoy the scenery 
                 
                       parer("A walk in the park seems like a great way to relax and let your mind wander away from thoughts of sex. It works for a while, just wandering down trails and enjoying the fresh air. Eventually you happen to see an animal jump in the distance just out of sight. You suddenly get flush with embarrassment, the last thing you need is to be stuck as some animals cock! After that you quickly get back to the main area of the park.");
                       
                        ch2msg(character, system);
                        
                        //,"./restroom","Restroom"
                       oper(system, "./walk", "Go for a walk","./enjoy","Enjoy the park");
                          
                       
                     
                     },
             actions: {
               "walk": function (character, system, action) {
                 transer();
                character.sandbox.wandervar++;
                 switch (rnd(5)) {
               case 1:
                 if(character.sandbox.ws){
                   
                   parer("You take a short walk through the wooded area of the park just to get your mind off of things. Though that is the very last thing that happenes when you encounter a sound that sends shivers up your spine! A pattering of liquid onto the ground, someone pissing... It sends you straight into memories of when that was you, piss pouring through your body, shooting from your mouth!");
                   if(character.sandbox.pissaddiction>9){
                        oper(system, "./ignoreit", "Just try to ignore it","./pissaddict","Wonder what it tastes like...");  
                     
                   }else{
                     
                        oper(system, "./ignoreit", "Just try to ignore it");  
                   }
                    
                   
                        break;
                 }
                 
                 
                 
               
               case 2:
                 
                 system.setQuality("lust",character.qualities.lust-10 );
                 parer("You wander through the paths just enjoying yourself. So far away from all those cocks you so desperatly want inside of you. Thankfully this isn't the actual forest, though there is some wildlife in the park still. Nothing to worry about that could cause you to end up 'staying' in this out here. Thankfully the walk is calm and peacefull enough to relax your distress a bit.");
                    ch2menuer(character,system);
                    break;
               case 3:
                    system.setQuality("lust",character.qualities.lust-10 );
                 parer("It's nice wandering through the park trails like this. You almost want to make sure your next owner can take you out here, enjoying this open air as a cock would be way better! You only catch yourself realizing what you are thinking when you hear a noise behind you...<br><br>You don't see anyone back there, but after another few steps you hear it again.... It's spooky enough that you make your way quickly back to the open area");
     ch2hoster(character, system);
                   ch2menuer(character,system);
                    break;
               case 4:
                     system.setQuality("lust",character.qualities.lust+10 );
                 parer("Even nature seems to be taunting you now. Just walking through the woods you see mushrooms and fruit even trees that resemble phallic shapes! It might just be your lust overwhelmed mind that is seeing everything in a naughty light. Though it's terrifying thought of what might happen to you if you did try to use one of the penis shaped mushrooms as a dildo... It is technically alive.... Best not risk it.");
                   ch2menuer(character,system);
                    break;
               case 5:
                 parer("As you are walking through the park you come across a small picnic area with a brook next to it. There are even a few fruit trees around the area. It seems to be a sort of landmark for the park as there is even a small picknic table in the shade.");
                 oper(system, "./pickfruit", "Pick some apples","./swim","Go for a swim");
                    break;
               default:
             }//End of RND switch
               
 //                
 //                  ch2hoster(character, system);
 //             ch2menuer(character,system);
               }, //function close
               "pickfruit": function (character, system, action) {
             transer();
             character.sandbox.food++;
             parer("You climb up some trees to collect some friut and such, at least it's some food you don't have to go out and buy. Though you couldn't help yourself but to pick the most phallic shaped ones you could find.");
                ch2menuer(character,system);
           }, //function close
           "swim": function (character, system, action) {
             transer();
             system.setQuality("lust",Math.floor(character.qualities.lust/2) );
             parer("Since there is no one around you just strip off your clothes and dive into the water. Considering how horny you have been this is perhaps the best way to get your mind off of it and maybe cool your desperate ass. It actually works and you find yourself much less horny after a few minutes in the water. (might add a stolen clothing event here later hehe)");
             parer("You get out and shake off, spending a bit relaxing and drying. Thankfully no one came by and you put on your clothing even if it is a bit damp now.");
       ch2menuer(character,system);
           }, //function close
               "pissaddict": function (character, system, action) {
             transer();
                system.setQuality("lust",character.qualities.lust+10 );
             parer("The desperate urge to ask them something, but you don't want to interupt... So many feelings go through your mind all at once. Honestly you miss it so much all you really want to do is ask for a taste! But knowing your condition that is likely to end you up taking up his cocks job rather quickly! Before you can act on your desires you hear a zipper go up and footsteps moving away.");
      ch2menuer(character,system);
      
           }, //function close
               "ignoreit": function (character, system, action) {
             transer();
             parer("You try your best to ignore it and walk down the path to get as far away from the person pissing as possible. A part of you just was so desperate to ask if they needed help with that!");
           ch2menuer(character,system);
           }, //function close
               "restroom": function (character, system, action) {
             transer();
             parer("");
             oper(system, "", "");
           }, //function close
           "enjoy": function (character, system, action) {
             transer();
             system.setQuality("lust",character.qualities.lust-10);
             
             parer("The atmosphere of the park is rather nice and peacefull. Even if you end up looking at people's crotches as they wander past. As a cock you didn't get to spend much time out side of a pair of pants. Certainly nothing like a park. It almost makes you feel naked or exposed to be seeing the open area. Despite how relaxing this might be you can't help but feel a warm sheath would be so much better!");
              ch2hoster(character, system);
          ch2menuer(character,system);
           }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   post: new undum.SimpleSituation(
           "",
           {
             heading: "Post Office",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Post Office"+ ch2header(character,"post");
             },
             enter:
                     function (character, system, from) {
                character.sandbox.ch2loc="post";
                character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                //Check for mail!
                //Hide from bret!
                //Write a letter to your uncle about how he got you turned into a fucking cock!
               
                
                           if(character.sandbox.host.host=="bret"){
                             parer("Thankfully you don't see Bret in the building today. He must be out of deliveries, it's hard enough not begging to be his cock again every night. But seeing him in person might be a bit too much for your willpower or your mind if he started coming up with more puns. <br>Checking your PO box for any letters from your uncle or anyone interesting turns up nothing.");
                             
                           }else{
                             
                                 parer("You head into the post office and check your PO box for any letters from your uncle or someone else interesting. No surprise there are none to be found. You don't even know his current address to send him a letter! You hear someone in the back make a joke about their 'package'! It is enough to make you blush and make your way out of there in a rush.");
                              
                           }
                            ch2msg(character, system);
                       
                       
                         ch2hoster(character, system);
                    ch2menuer(character,system);
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   arcade: new undum.SimpleSituation(
           "",
           {
             heading: "Arcade",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Arcade"+ ch2header(character,"arcade");
             },
             enter:
                     function (character, system, from) {
                 character.sandbox.ch2loc="arcade";
                 character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("The arcade seems like a good place to get your mind off of things. Plenty of things to do specifically for the purpose of being distractions. It even works for a while but the whole standing in one place for too long causes your ass to twich and clench more frequently than when you keep moving.");
                       //Play games to distract yourself
                       //Small chance of getting prize!
                       //DDR and host is naughty!!!!
                       //maybe minigame?
                         ch2hoster(character, system);
                       
          ch2menuer(character,system);
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   library: new undum.SimpleSituation(
           "",
           {
             heading: "Library",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Library"+ ch2header(character,"library");
             },
             enter:
                     function (character, system, from) { 
                       character.sandbox.ch2loc="library";     
                       character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("host has been in here a few times while you were trapped in his pants, you never really got to see the place. Every wall is lined with books and even the frond desk seems piled with unsorted books. You decided to look at the occult and magic sections just out of curiosity, a suprisingly number of books have been taken out.");   
                       ch2msg(character, system);
               system.doLink("./proper");
                     },
             actions: {
               "proper": function (character, system, action) {
             transer();       
             
                        
                            //WORLD LOREBOOKS
                          
              //Lore section
              //Occult section
              //Try really hard not to moan loudly
               // Study to give massive bonuses to rune control for the next host        
                       
                       //theeast gets a cookie
                       
            ch2hoster(character, system);
                       //"./occult", "",
                       oper(system, "./lore","Lore section","./arcane","Arcane section","./occult","Occult Section");
               
                           
                           
               spark=true;
                           
                ch2menuer(character,system);
       
           }, //function close
           "occult": function (character, system, action) {
             transer();
             parer("The occult section of the library is likely the least used part. There are large tables for those needing to cross referance multiple books at once.  Only conspiricy nuts and college students likely ever come here. Still if you want to know how the darn runes work this is the place to do it.");
             
             
                     oper(system, "./study", "Study Runes","./learn","Try to learn new runes");
      spark=true;
              oper(system, "./proper", "Head back to the library proper");
     
           }, //function close
           "study": function (character, system, action) {
             transer();
             
             
             
                      character.sandbox.wandervar++;
                      
                      
                      if(character.qualities.lust>60){
                        
                        parer("All of these books are just so boring... Trying to read about dreams and controling things in them, you end up unintentionally paracticing right there in your seat.  Half the time you just end up day dreaming about condoms or sheaths. Every now and then when you really get into it, you almost can see something... A circle of light above you, and then a touch which wakes you right up! Almost feeling like you were seein from the perspective of your previous owners cock! After notcing the small puddle of white that leaked out of your mouth you quickly make your way out of the library!");
                        
                        
                           
                          ch2hoster(character, system);
                      }else{
                          character.sandbox.runehelp++;
             parer("You spend some time studying how runes work in the first place, which delves you into numerous books about dreams and lucid dreamscapes. You don't understand much of it but the little you do pick up on seems like it might help a small bit in the future...");
              
             ch2menuer(character,system);
                        
                      }
           
           }, //function close
           "learn": function (character, system, action) {
             transer();
                  character.sandbox.wandervar++;
                 var grabarune;
                 var therune;
             
                
                if(character.qualities.lust>60){
                  
                  parer("You try your best to focus on all the dusty boring old books but all you can really think about is how much more fun this was before. A hand softly rubbing over you, keeping you nice and hard while you read throug the pages. Cum occasionally leaking from your mouth in the process sometimes. There is a sudden shiver that goes up your spine as you feel host suddenly rub his cock... It causes you to moan out loud and what feels like cum floods into your mouth! You quickly have to leave the building before you get in trouble for noise... or stains...");
                   ch2hoster(character, system);
                   ch2menuer(character,system);
                }else{
                  
                 if(character.sandbox.runeholder.length!=0){
                       grabarune=rnd(character.sandbox.runeholder.length);
                   
                     therune= character.sandbox.runeholder[grabarune-1];
                 
                 
                 character.sandbox.runeholder.splice(grabarune-1,1);
                 character.sandbox.runeknown.push(therune);
                 
                 console.log("just a test " + character.sandbox.runeknown );
                 
                 }
                 if(character.sandbox.fname=="Dingle"){
                     if(character.sandbox.runeholder.length!=0){
                       grabarune=rnd(character.sandbox.runeholder.length);
                   
                     therune= character.sandbox.runeholder[grabarune-1];
                 
                 
                 character.sandbox.runeholder.splice(grabarune-1,1);
                 character.sandbox.runeknown.push(therune);
                 
                 console.log("just a test " + character.sandbox.runeknown );
                 
                 }
                     if(character.sandbox.runeholder.length!=0){
                       grabarune=rnd(character.sandbox.runeholder.length);
                   
                     therune= character.sandbox.runeholder[grabarune-1];
                 
                 
                 character.sandbox.runeholder.splice(grabarune-1,1);
                 character.sandbox.runeknown.push(therune);
                 
                 console.log("just a test " + character.sandbox.runeknown );
                 
                 }
                 }
                 
                 parer("You spend a good bit of time working on the runes you know of and checking them across dozens of other artifacts to come up with matches and ideas to what yours might do. It is FAR easier to do in the library than it ever was while you were dripping cum! Still you can't help but remember all the time you spent looking at pages like this while getting rubbed to stay hard... You manage to stop thinking about that just before you actually start to drool on the books again!");
                 
                 if(character.sandbox.runeholder.length==0){
                   
                   parer("You feel as if there are no more runes you can currently figure out...");
                 }
                 
              ch2menuer(character,system);
               }
                 
               
           }, //function close
 
               "lore": function (character, system, action) {
                 transer();
                 parer("You head into the history section of the library, the air is a bit thicker with the smell of old books. A few tables with chairs are set up to referance and read. Possibly copy over since the books here are not intended to leave the library. You have a feeling the books here might be slightly less important to your current situation....");
             system.doLink("./lore2");
           
            
               }, //function close
               "lore2": function (character, system, action) {
                 
              oper(system, "./proper", "Head back to the library proper");
                   spark=true;
             oper(system, "./geo", "Geography","./nature","Nature","","History");
           }, //function close
              "geo": function (character, system, action) {
             transer();
             parer("The world is large but with far more openness below the crust. With a land to ocean ratio of about 60% water to 40% land. Travel is diffcult on the surface but trains tend to run through the numerous underground caverns to get from disant locations.<br> The western side of the current continent is predominently 'kin' animal aspected people. The eastern side is inhabited mostly by 'mythics' those with minimal animal aspects. Humans are around in the mix of both but more common in the east."); 
             
                  system.doLink("./lore2");
             
           }, //function close
           "nature": function (character, system, action) {
             transer();
             parer("Between towns and cities are LARGE stretches of forests. These are highly invasive and take a great deal of effort to trim back each day. Unchecked the forest can overtake a half a foot of ground each day. Parks and such do not have this level of excellerated growth. Between towns there are smaller settlements that allow overland trade and travel through the vast forests and mountains. Magic is said to be much stronger deeper in the forests, and technology begins to break down.");
               system.doLink("./lore2");
           }, //function close
           "history": function (character, system, action) {
             transer();
             parer("The fracture is an event that took place in a truly distant time past. The theory is that every species had their own 'world' or plane of existence. A dimension that they became the dominant species. This race would eventually develop magic, as all would eventually. Then at some point they would all inevitably create the 'fracture' a specific rune structure to access other worlds.<br> Once a speices creates the 'fracture' their world collides and merges with all others that made a fracture. This even is called the 'great fracture' when all worlds at the exact same 'magical tech' level joined together in the same world. With the same level of understanding and society development.<br> Every species evolved seperately and were dumped into the current world at the same time in history. That was A VERY long time ago.");
     system.doLink("./lore2");
           }, //function close
               "arcane": function (character, system, action) {
             transer();
     parer("This area has a funny smell to it almost like ozone, or maybe musk... It's hard to tell but this section is all about the arcane world of magic, artifacts and apparently turning people into cocks. This area really won't help your current situation much as all the books here explain how magic works and it's history... rather than how to use it. ");
         
             system.doLink("./arcane2");
           }, //function close
           "arcane2": function (character, system, action) {
       oper(system, "./proper", "Head back to the library proper");
                   spark=true;
             oper(system,"./magic","Magic", "./scars", "Rune Scars","./essence","Complicated part");
       
           }, //function close
           "essence": function (character, system, action) {
             transer();
             parer("The nature of what magic IS... can be complicated.\
                            The soul has a great deal to do with magic in the world. And why orgasms can power it.<br>When two individuals orgasm it releases energy.  The energy is nessesary for consumation. This is why artificial impregnation is not possible without an orgasmic source of energy in this world.<br> The energy of the two orgasms come together and CAN form a 'soul' if accompanied egg and sperm meet forming a vessel for it. This energy is called essence and if no viable egg/sperm pair occours the energy will not find a vessle contain it and the energy dissapates harmlessly.");
             system.doLink("./arcane2");
           }, //function close
           "magic": function (character, system, action) {
             transer();
             parer("Magic is highly fogotten in the world but still is very present in the form of artifacts of the past. They are however highly unstable and can cause all sorts of problems. Magic takes up the form of inticate patterns laced into a physical object. These patterns form what is called a 'runic matrix'.A matrix can do all sorts of things to the world around it.  <br> However the process of making these matricies is lost to time. It is thought to have something to do with the interference caused by technology. Thus one would need to be completely isolated from society in a remote location to even attempt to recreate them.");
            system.doLink("./arcane2");
           }, //function close
           "scars": function (character, system, action) {
             transer();
             parer("Rune scars are the result of an unshielded runic matrix coming into contact with someone with a soul. Over time a matrix can break down, as such they must be 'sealed' every 50 or so years. The longer they go without this the more safety built into the matix gets disabled. The act of sealing an artifact is the primary job of arcanists and museums. <br> Due to the similarities in souls and matricies the two can interact. When this happens it is called a 'rune scar' Usually showing up on the body as well. The function of the original matix is usualy intact and the 'soul' becomes the new stabilizing force. Sort of a natural method of sealing a matix. Having a rune scar will also prevent further scars as two matricies will repel eachother. In anchient times this was a well known limit as no one could wield more than one magic item at a time.");
               system.doLink("./arcane2");
           }, //function close
           "leave": function (character, system, action) {
             transer();
             parer(""); 
             ch2menuer(character,system);
             oper(system, "", "");
           }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   carnival: new undum.SimpleSituation(
           "",
           {
             heading: "Carnival",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Carnival"+ ch2header(character,"carnival");
             },
             enter:
                     function (character, system, from) {
               character.sandbox.ch2loc="carnival";
               character.sandbox.ch2beento.push(character.sandbox.ch2loc);
               parer("<h1>Carnival Freakshow</h1>");
                            parer("You head into the carnival for some fun and end up in front of the q1FREAKSHOWq1 It has posters of all kinds of silly things, the giraffe with a short neck and a wolf with 20 tails! At the bottom you see a mention of the world's most well endowed kobold!!!! It just shows a picture of this cute looking lizard with a huge bulge in his pants!<br> q1HEY Gonna have to come back later! The show doesn't start for another few hours!q1 You have to look around till you notice the little kobold from the picture looking up at you!q1");
                       //go on rides
                       //visit the freakshow tent
                       //SPOOKY HOUSE?
                       //
                           ch2msg(character, system);
                           
                           
                             ch2hoster(character, system);
                    ch2menuer(character,system);
                     },
             actions: {
               "ch1": function (character, system, action) {
                 transer();
                 
                
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   gym: new undum.SimpleSituation(
           "",
           {
             heading: "Gym",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Gym"+ ch2header(character,"gym");
             },
             enter:
                     function (character, system, from) {
                   character.sandbox.ch2loc="gym";
                   character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("The gym for those that want to be BUFF, and show off their impressive bulges. It certainly doesn't help the desperate need to be filled you are constantly feeling! A small part of you realizing you could become trapped AS one of those bulges one day! This is probably one of the least helpfull places for keeping yourself distracted!");
                       //Workout with the machines
                       //Go for some yoga
                       
                       
                       //both of those lead to locker room shower scene.
                           ch2msg(character, system);
                         ch2hoster(character, system);
                ch2menuer(character,system);
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   train: new undum.SimpleSituation(
           "",
           {
             heading: "Train",
             tags: ["place2"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Train"+ ch2header(character,"train");
             },
             enter:
                     function (character, system, from) {
                     character.sandbox.ch2loc="train";
                     character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                    system.setQuality("currency", character.qualities.currency-5);
            
                            
                       character.sandbox.trainloc=true;
                      // character.sandbox.wandervar--;
                 
                      switch (rnd(5)) {
                 case 1:
                 case 2:
                 case 3:
                   
                   
                    delay(["You get on the train as it head for the outskirts of town","Choo chooo....","./trainstop2"]);
                   
                      break;
                 case 4:
                   
                   system.setQuality("lust",character.qualities.lust+10 );
                    delay(["You get on the train as it head for the outskirts of town","Choo chooo....","You are suddenly surprised by a hand groping between your legs!","./trainstop2"]);
                      break;
                 case 5:
                   
                    system.setQuality("lust",character.qualities.lust+10 );
                    delay(["You get on the rather packed train as it heads for the outskirts of town","Choo chooo....","You feel someone rubbing a hard object against your butt!","./trainstop2"]);
                      break;
                 default:
               }//End of RND switch
                      
                      
                      
                         
                         //close quarters butthump
                         //get groped
                         //Wait for your next stop....
                         // spot somone outside the train
 //
                         
                          
 
 
                     },
             actions: {
               "trainstop": function (character, system, action) {
                 transer();
                 ch2msg(character, system);
                 parer("The train finally reaches it's destination after a rather short ride but considering the speed of the thing you have actually traveled a fair distance!");
                  character.sandbox.trainloc=true;
                 oper(system, "place3", "Explore around");
               }, //function close
               "trainstop2": function (character, system, action) {
                 transer();
      ch2msg(character, system);
                 parer("The train finally reaches it's destination after a rather short ride but considering the speed of the thing you have actually traveled a fair distance!");
                  character.sandbox.trainloc=true;
                   ch2hoster(character, system);
                 oper(system, "place3", "Explore around");
           }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }//options close
   ),
         place3: new undum.SimpleSituation(
                "<h1><p class=transient>Choose a location</p><h1>",
           {
 
             displayOrder: 4,
             choices: "#place3",
 
             enter: function (character, system, from) {
               
 
 
             }
           }
         ),
   farm: new undum.SimpleSituation(
           "",
           {
             canView: function (character, system, host) {
               return true;
             },
             heading: "Local Farm",
             tags: ["place3"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Farm"+ ch2header(character,"farm");
             },
             enter:
                     function (character, system, from) {
                                            character.sandbox.ch2loc="farm";
                                            character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("Horses cows and big fields. Also a local stop for getting fresh vegtables!");
                       character.sandbox.trainloc=true;
                       //Stare longingly at a horse cock.
                       //buy some fresh veggies
                       //talk to the farmer
                       //Lama
                       //corn maze
                       //cows milking machines
                       
                         ch2hoster(character, system);
            ch2menuer(character,system);
 
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
   tavern: new undum.SimpleSituation(
           "",
           {
             canView: function (character, system, host) {
               return true;
             },
             heading: "Tavern",
             tags: ["place3"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Tavern"+ ch2header(character,"tavern");
             },
             enter:
                     function (character, system, from) {
                character.sandbox.ch2loc="tavern";
                
                character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("The tavern is a rather nice looking place, though it is extremely out of the way. It practically borders to woodlands. The atmosphere is rather nice and the lighting is low. It seems to be mostly focused around the large bar that takes up most of the room, stools all around it. A short wall with dozens of drinks sits in the center of the bar area. ");
                       character.sandbox.trainloc=true;
                           ch2msg(character, system);
                       //Sit at the bar
                       //Ask about area (lore stuff
 
                       //sleep the night
                       //Random hostifications!?!
                       
                       oper(system, "./sitdown", "Sit down at the bar");
                       spark=true;
          
                ch2menuer(character,system);
                    
 
                     },
             actions: {
               "sitdown": function (character, system, action) {
                 transer();
                 parer("You sit down at the bar and look over the menu of drinks and snacks. For being so far on the edge of town it has really good variety. Several drinks you never even heard of! Though it doesn't seem to say how strong they are. Still anything to distract you from the desperate heat you are constantly feeling would be nice!");
                 
                 oper(system, "./weird", "Order something weird","./beer","Just go with a beer.");
              ch2menuer(character,system);
               }, //function close
               "weird": function (character, system, action) {
                 transer();
                 parer("You can't help yourself and order something that looks rather exotic. The bartender just gives you a look with a raised eye brow but he doesn't question you and begins mixing a few things together. He places it in front of you and adds a single drop of one last liquid causing it to suddenly seperate in cracked like lines of multiple colors. q1I will get a room ready for you....q1 He says, leaving you alone with the concerning beverage");
                 oper(system, "./nope", "Reconsider the drink","./sleepthenightdrink","Looks safe enough.... (you know what you are getting into)");
               }, //function close
               "nope": function (character, system, action) {
                 transer();
                 parer("You take one sniff of the mixture and quickly decide that anything capable of making you tipsy from the smell of it really shouldn't go inside you! The bar tender just snickers when you decide against the drink... q1No problem, happens all the time.q1 He says giving you a much less exotic variety to enjoy. It still hits you hard but by the end of the night you are still mostly clear headed enough to stumble out of the bar.");
                 ch2menuer(character,system);
               }, //function close
              "sleepthenightdrink": function (character, system, action) {
                 transer();
                 parer("You take a sip of the strange liquid in front of you. It's pretty good actually! You look back down at it and have another sip or two before it really hits you. It may be only lightly alchoholic but the aphrodesiac in the drink REALLY starts to kick in! The last thing you needed right now was more encouragement! The bar tender just shakes his head as you finish your drink, a lost look of lust on you face. q1Here is your room for the night... Someone will be up to join you shortlyq1 He says passing over a key. You almost feel like ripping off your clothing at bar... so a room is probably a good idea...");
                 oper(system, "./room", "A bit hazey... Head upstairs to find your room");
               }, //function close
               "sleepthenight": function (character, system, action) {
                 transer();
                 parer("You just can't think straight after the beer, all that is on your mind is about what isn't in your ass! That damn artifact has left you so desperate for relief that you can't help but ask the bartender about staying the night. He just gives you a look... q1Top bunk or bottom Bunk....q1 He asks... It hits the gutter part of your mind before you actually understand what he means. q1Yea, it's bottom bunk for youq1 He says and hands you a room key.");
                 oper(system, "./room", "Head upstairs to find your room");
               }, //function close
               "room": function (character, system, action) {
                 transer();
                 parer("You head upstairs see a hall of doors. Each has a red and green marker above the knob, some have no marker. It looks like this is some sort of open door sort of hookup thing. Checking your key it seems you are number 8. The door has no maker at the moment and the moment you turn the key it changes to green.... A clear invite. Already things are getting hazey as you feel both drunk and hyper horny! The next thing you remember is laying on a bed rubbing your poor desperate ass....");
                 oper(system, "./uhoh", ".......");
               }, //function close
               "uhoh": function (character, system, action) {
                 transer();
                 parer("The next few events are rather hazey.... You remember less and less from the next few hours. There was someone that came in... ");
                 delay([
                   "So hazey....",
                   "Both of you talking... thrusting.... It felt so good!",
                   "You needed it so much, was that you begging?",
                   "So confused... They couldn't pull out... It was stuck...?",
                   "So tired, both of you snuggling to sleep... Who was it behind you?.",
                   "./sleepysexscene"
                 ]); 
                
           
               }, //function close
               "sleepysexscene": function (character, system, action) {
                 transer();
              var randomhost=""; 
                 var whloop=true;
                 while(whloop){
                randomhost=undum.game.newhosts.names[rnd(undum.game.newhosts.names.length-1)];
                   
                                         if(
                     randomhost!="ravel2"&&
                     randomhost!="mark"){
               whloop=false;
               
                     }
                   
                   
                 }
                 
                                 if(character.sandbox.playertype=="dragon"&&randomhost=="ravel"){
                 randomhost="ravel2";
                   
                 }
           
                character.sandbox.activenh =randomhost;
                 
                 character.sandbox.tavernshortcut=true;
                 
                 system.doLink("ch2/nhreturn");
                
               }, //function close
               "beer": function (character, system, action) {
                 transer();
                 parer("You just order a simple beer their selection at random. They give you some free snacks to go with it as you enjoy the atmosphere and chill music. You start to notice something odd about the tavern, it rather prominently offers a place to stay for the night. But there are a bunch of little hearts around it. At the bottom there is a disclaimer about not being responsible for activities in said rooms and that all accept the consequences of their actions. It almost looks like a blind date sort of thing.... or something much more naughty. You can feel a shudder of anticipation from your desperate needy hole reading about it....");
               if(character.qualities.lust>60){
                 parer("You have trouble resisting the offer of that... 'room' for the night.");
                 
                   oper(system, "./sleepthenight", "Sleep the night anyway!");
                   spark=true;
                   ch2menuer(character,system);
               }else{
                 character.sandbox.trainloc=true;
                 ch2menuer(character,system);
                 
               }
           
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
                     
           }
   ),
   pawn: new undum.SimpleSituation(
           "",
           {
             canView: function (character, system, host) {
               return (true);
             },
             heading: "Pawn Shop",
             tags: ["place3"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Pawn Shop"+ ch2header(character,"pawn");
             },
             enter:
                     function (character, system, from) {
   character.sandbox.ch2loc="pawn";
   character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("Pawn shop! Great place to sell old stuff like jewlery and rings");
                            
                            
                            // Look around at stuff (lllllaalalaaaore
                            //
                            //Find a ring that looks just like yours concerningly!!
                            //
                            //Ask him to keep an eye out for any rings and keep a hold of them for you.
                                ch2msg(character, system);
                              ch2hoster(character, system);
                       character.sandbox.trainloc=true;
                    ch2menuer(character,system);
         
 
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
                     
           }
   ),
   pub: new undum.SimpleSituation(
           "",
           {
             canView: function (character, system, host) {
               return (true);
             },
             heading: "Pub",
             tags: ["place3"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "Pub"+ ch2header(character,"pub");
             },
             enter:
                     function (character, system, from) {
                    character.sandbox.ch2loc="pub";
                    character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                            parer("Place to order drinks and hang out. Then get drunk");
                       character.sandbox.trainloc=true;
                           ch2msg(character, system);
                       
                       
                       
                         ch2hoster(character, system);
                      ch2menuer(character,system);
         
                      //gay pub with dance stage!!!
                      //Enjoy the show
                      
                      //Have a drink
                      
                      //
                      
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
                     
           }
   ),
   cinema: new undum.SimpleSituation(
           "",
           {
             canView: function (character, system, host) {
               return (true);
             },
             heading: "The Cinema",
             tags: ["place3"],
             displayOrder: 4,
             optionText:function (character, system, from){
          return "The Cinema"+ ch2header(character,"cinema");
             },
             enter:
                     function (character, system, from) {
                         character.sandbox.ch2loc="cinema";
                         character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                         character.sandbox.trainloc=true;
                            parer("Great out of the way cinema that has really great seats! ");
                       //Watch a movie
                       // Horror movie (lower)
                       // XXX rated movie (raise)
                       // Romance movie? (new host option)
                      //
                           ch2msg(character, system);
                       
                       
                         ch2hoster(character, system);
                   ch2menuer(character,system);
          
 
                     },
             actions: {
               "simple": function (character, system, action) {
                 transer();
                 parer("");
              ch2menuer(character,system);
               }, //function close
               "r1": function (character, system, action) {
                 transer();
                 parer("");
                 oper(system, "", "");
               } //function close
             }//actions close
           }
   ),
    museum: new undum.SimpleSituation(
        "", {
            canView: function (character, system, host) {
                return (true);
            },
            heading: "Museum",
            tags: ["place3"],
            displayOrder: 4,
            optionText:function (character, system, from){
                return "Museum"+ ch2header(character,"museum");
            },
            enter: function (character, system, from) {
 //                      var hello=1;
 //                      hello2=1;
 //                      {
 //                      let hello2=2;
 //                      
 //                      }
 //                      hello2==1
 
                //MOAR LOAR
                //look at artifacts
                //Ask about Scars and runes
                //Maybe find the pedestal for your ring!
                character.sandbox.trainloc=true;
                character.sandbox.ch2loc="museum";
                character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                parer("You head into the museum to look at other potentially dangerous artifacts. Museums are not really places for works of art or scuptures or paintings. It has some... it is mostly a sort of repository of stuff that they don't want people to be touching. Still they get money from displaying them for people to look at, plus they have cutural significance.<br>On that note there is a 10 dollar entrance fee...");
                ch2msg(character, system);    
                oper(system, "./fee", "Pay the entrance fee");
            },
            actions: {
                "simple": function (character, system, action) {
                    transer();
                    parer("");
                    ch2menuer(character,system);
                }, //function close
                "fee": function (character, system, action) {
                    transer();

                    parer("You hand money a bored looking guy behind a window to recieve a stamp on the back of your hand and he directs you through a turnstyle thing to enter the museum proper. There are a few guard type people here or there but for the most part you are able to wander about without trouble. Everything on display is behind a thick sheet of glass and some stuff even have weird glowing circles around the base of their displays. Each comes with a plaque displaying various information about each object.");
                    system.doLink("./mmenu");
                }, //function close
                "mmenu": function (character, system, action) {
                    oper(system, "./lookaround", "Look around","./newe", "New exhibit","./tour","Go on a tour");
                    spark=true;
                    oper(system, "./leave", "Leave the Muesum");
                }, //function close
                "tour": function (character, system, action) {
                    transer();
                    parer("You notice a room with a sign that says 'Guided Tours Start Here!'. Curiously you step inside and end up waiting nearly an hour before the next one starts. Only two or three other people show up for it. Even worse they seem to avoid all the most interesting artifacts. You get the feeling this was inteneded for the general public and purposely only talked about boring history stuff. It is so dull that you almost feel like you have forgotten more history than you learned. ");
                    parer("Of course in your distracted state it's all the other people your thoughts keep drifting to....");
                    ch2hoster(character, system);
                    oper(system, "./leave", "Escape the tour");
                }, //function close
                "lookaround": function (character, system, action) {
                    transer();
                    parer("You spend some time just wanding through the museum and looking at all the other atifacts on display. The really have an impressive variety of items, especially ones of a suggestive lewd nature. Though none of them that seem to turn a person INTO a cock! You must have won the cursed item jackpot with yours. Still a few of them are interesting and catch your eye. ");
                    system.doLink("./lookmenu");
                }, //function close
                "lookmenu": function (character, system, action) {
                    oper(system, "./sword", "A big shiny sword","./collar","A collar","./totem","A wooden fertility totem");
                    spark=true;
                    oper(system, "./leave", "Leave the museum");
                }, //function close
                "totem": function (character, system, action) {
                    transer();
                    parer("The wooden fertility totem depicts a woman with a large belly and multiple breasts. She seems to be a mix of species which is actually rare for artifacts as most come from a single common species tribe. This one seems to come from the end of the era of magics, thought to possibly be one of the last created pieces. It's purpose is clear enough as it was intended to improve fertility of those around it. The story of how it was found is much more interesting though.<br>After a number of unexplained pregnancies, it was found burried in a box at a construction site. It was only after 2 men were found to be pregnant and another having been completely turned female a team was called into find the cause. It's runic matix was quickly sealed supressing it's unintended effects. It is said if it were not found when it was, the whole city could have ended up pregnant when matrix shattered.");
                    system.doLink("./lookmenu");
                }, //function close
                "collar": function (character, system, action) {
                    transer();
                    parer("A simple metal collar with a number of runes around it. It actually looks concerningly similar to your own ring but the marking are a bit different. The plaque calls it a 'Collar of Obedience'. Apparently it was used to train animals far faster than through normal means. It didn't control them as it merely speed up the process of training. However the unfortunate archaeologist that discovered it found it worked on ANYONE. It is unclear if it always did this or if it was due to degredation of it's runic matrix.<br> The matix in the collar is incomplete now as most of it stayed with the archaeologist in the form of rune scars with only minor side effects.");
                    system.doLink("./lookmenu");
                }, //function close
                "sword": function (character, system, action) {
                    transer();
                    parer("It is hard to pass up the big sword in one of the display cases. It apparently is called the impure sword, once called the sword of purity. Apparently it dates back to the old ages of the wars. It was meant to clear the mind of anyone it harmed. Crazed with madness or lust, it would calm those it struck. Only somone that truly wanted to fight for a real reason would continue to be a threat. However according to it's info plaque, it did this by absorbing said emotions into itself. <br>Long story short it absorbed so much that it began to emit such emotions. After several battle fields became wild orgies it was retired from service.");
                    system.doLink("./lookmenu");
                }, //function close
                "newe": function (character, system, action) {
                    transer();
                    parer("Heading to the new exhibit you find a doorway blocked off with a simple red plush rope with a sign 'Coming soon!' hanging from it. None of the guards are nearby though and it is just a simple rope...");
                    oper(system, "./sneak", "Sneak in","./nofunmode","Turn back");
                }, //function close
                "nofunmode": function (character, system, action) {
                    transer();
                    parer("You turn away from the off limits room. You don't want to get into trouble, not to mention the people that took the pedestal could even be people that work here. Whatever secret that might be really helpful and beneficial to you in a ton of ways can stay in there.");
                    system.doLink("./mmenu");
                }, //function close
                "sneak": function (character, system, action) {
                    transer();
                    parer("You slip under the rope half expecting an alarm to trigger or cage to drop from the ceiling or something, but nothing happens.");
                    parer("Inside the small room is a bit of construciton and unfinished glass panels stored against a wall.... But most important is the STONE PEDESTAL that sits in the center of the room. The VERY familar pedestal! It is just as you remember it, the cock sticking out of the top of it and all the weird glyphic images carved into it. There glass walls have not been installed around it yet... Something about it almost seems to be drawing you toward it, as if it wants you to touch it.");
                    oper(system, "./spooky", "....");
                }, //function close
                "spooky": function (character, system, action) {
                    transer();
                    system.setQuality("lust",character.qualities.lust+20 );
                    character.sandbox.listmode=true;
                    parer("You almost don't even realize you moved until you pull your hand back! Half unconsiously you touched the dildo only for it to zap you! Like a static shock. A sudden surge of tingles spreads from your ass, a wave of pleasure and need. The sensation is replaced with strange pulling from a distance... In fact many sensations of pulling. As if your name were being called from far away just beyond earshot....");
                    oper(system, "./leave", "Get out of there before you are caught!");
                }, //function close
                "leave": function (character, system, action) {
                    transer();
                    character.sandbox.trainloc=true;
                    ch2menuer(character,system);
                }, //function close
                "r1": function (character, system, action) {
                } //function close
            }//actions close
        }
    )
};



herer = function(character, localloc){
    var perlist = character.sandbox.ch2hostloc[localloc];
    var personhere;
    var roommentionknown="";
    var roommention="";
    console.log(character.sandbox.ch2hostloc);
    try {
        if(perlist.length == 1){
            //one person here
            console.log("Just one " + perlist);
            if(character.nh[perlist[0]].known){
                roommention = character.nh[perlist[0]].lookat;
            }else{
                roommention = character.nh[perlist[0]].lookat;
            }
        }else{
            //more than one  
            console.log("More than one " + perlist );
            for(personhere in perlist){
                if(personhere == perlist.length){
                    // last in entry list
                    roommention += " and ";
                    if(character.nh[perlist[personhere]].known){
                        roommentionknown += character.nh[perlist[personhere]].known;
                    }else{
                        roommention += character.nh[perlist[personhere]].lookat;
                    }
                }else{
                    if(personhere == 0){
                    }else{
                        roommention += ", ";
                    }
                    if(character.nh[perlist[personhere]].known){
                        roommentionknown += character.nh[perlist[personhere]].known;
                    }else{
                        roommention += character.nh[perlist[personhere]].lookat;
                    }
                }
            }
        }
        console.log("humm " + roommention );
        return roommention;
    } catch (e) {
        console.log("TRYCATCH " + e);
    }
};

ch2menuer = function(character, system){
    if(character.sandbox.locdeeper){
        character.sandbox.locdeeper = false;
        spark=true; 
    }
    if(character.sandbox.wandervar > 2){
        character.sandbox.wandervar = 0;
        spark=true;
        oper(system, "home","It is getting a bit late out, head back home");
    }else{
        character.sandbox.wandervar++;
        if(character.sandbox.trainloc){
            character.sandbox.trainloc = false;
            oper(system, "home","Head back home","place3","Keep wandering");
        }else{
            oper(system, "home","Head back home","places2","Keep wandering");
        } 
    }
};    



ch2hoster = function(character, system){ 
    //Past you: "fuck you future me"!
    if(character.qualities.lust<20||character.sandbox.keagenhehe){
        //lust not high enough
    }else{
      try {
        console.log(character.sandbox.ch2hostloc[character.sandbox.ch2loc]);
        if(character.sandbox.ch2hostloc[character.sandbox.ch2loc].length>0){
            parer("You see " + herer(character, character.sandbox.ch2loc) + " here as well.");
            try {
                if(character.sandbox.ch2hostloc[character.sandbox.ch2loc].length>1){    
                    spark=true;
                    var locholder = character.sandbox.ch2hostloc[character.sandbox.ch2loc];
                    for(var locloop = 0; locloop<Math.ceil(locholder.length/3);locloop++){
                        console.log("locloop peek " +locloop );
                        var loctemp = [];
                        var nobreaky = [];
                        for(var locloop2 = 0; locloop2 < 3;locloop2++){
                            console.log("locloop2 peek " + locloop2 );
                            if(locholder[locloop2+(locloop*3)]){
                                console.log("locloop2 peekaroo "  );
                                loctemp.push("ch2/host" + locholder[locloop2 + (locloop*3)]);
                                nobreaky.push("Greet the " + character.nh[locholder[locloop2 + (locloop*3)]]["species"]);
                            }
                        }
                        oper(system,loctemp[0], nobreaky[0], loctemp[1], nobreaky[1], loctemp[2], nobreaky[2] );
                    }
                }else{
                    oper(system, "ch2/host" + character.sandbox.ch2hostloc[character.sandbox.ch2loc][0], "Say hello to the " + character.nh[character.sandbox.ch2hostloc[character.sandbox.ch2loc][0]]["species"]);
                }
            } catch (e) {
                console.log("TRYCATCH " + e);
            }
        }else{
            //no one here!
        }
      } catch (e) {
        console.log("TRYCATCH " + e);
      }
    }
};
ch2header = function(character, loc){
    console.log("but why not? "+loc );
    var perlist=character.sandbox.ch2hostloc[loc];
    var returnlist=" ";
    var triggered=false;
    if(character.sandbox.ch2beento.includes(loc)||character.sandbox.listmode){
        for(let personhere in perlist){
            triggered=true;
            if(character.nh[perlist[personhere]].known){
                returnlist+=character.nh[perlist[personhere]].known;
                console.log("humm " + returnlist );
            }else{
                returnlist+=character.nh[perlist[personhere]].species;
                console.log("humm " + returnlist );
            }
            returnlist+=" ";
        }
    }else{
        returnlist="";
    }
    if(triggered){
        returnlist=" ("+returnlist+")";
    }
    return returnlist;
};  