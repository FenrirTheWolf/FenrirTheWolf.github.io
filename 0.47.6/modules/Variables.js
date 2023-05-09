undum.game.newhosts = {names: []};
undum.game.init = function (character, system) {
  //system init

window.globalaccesscharacter = character;
  character.qualities.day = 0;
  character.qualities.lust=-1;
  character.qualities.dayofweek = 0;
    character.qualities.tfstatus = 0;
    character.qualities.timeofday = 0;
    character.qualities.essence = 0;
    character.qualities.ttcost=0;
    character.qualities.currency = 12;
  character.qualities.ctf =0;
    character.qualities.harmony = 50;
    character.qualities.sus=0;
    character.qualities.dignitylost=0;
  system.setCharacterText("<p>You are starting on an exciting journey.</p>");
  window.startlocations = {
    mallnpc: [],
    parknpc: [],
    postnpc: ["Bret"],
    gymnpc: [],
    adultnpc: []
  };
  
  var sizier = 40;

  character.host={
       lesswater:"",
       reqwater:""
  };
  character.sandbox = {
    nh: {},               //new host holder
    fname: "David",
    clearok:false,
     xeyvarnum: 0,
    tfup: false,
    tfed: false,
    newtracker:{
      cocked:false
    },
    curhost: "",
    playertype:"dragon",
    teststate:"",
    bretbed:false,
    headingholder: "",
    headingholder2: "",
    nightfun: false,
    pchoice: false,
    tftogo: 0,
    eventholder: "",
    ttcarryover: "",
    booksearch: false,
    hasbook: false,
    htarget: 0,
    ringdrain:false,
    ws: true,
    tfresponse:"",
    tfholder:"",
    eventspeed: 2000,
    eventspeedlock: false,
    ttcost: 2,
    mind: 0,
    ring: true,
    reqwater: false,
    fullcock: 0,
    eveningtease: false,
    ringcheck: false, //THis tells the host to check to see if he wants to wear the ring or not! ITs AFTER losing it and finding it!
    cockmeplz: 0,
    cockreq: false,
    ringfinger: false,
    frombook: false,
    bookwork: false,
    acc: 1.1,
    discovery: 0,
    enjoyit: false,
    sextalk:false,
    cocktype:"",
    stealth:false,
    sextype:"",
    morningvar:"",
    ringhelp:false,
    dayringlost:999,
    ignore:false,
    runelist:[],
    runeknown:[],
    ringlost:false,
    outmore:false,
    ringstuck:false,
    ringreallylost:false,
    xeyischeating:0,
    runeholder:[],
    runeactivate:false,
    controlprog:0,
    nogooutcount:0,       //number of days stuck in hourse
    rememberrune:"blank", // The setting for the research scene that carrys over into nighttime I think
    artifactrunes:false, //a future event for getting a list of runes from the artifact
    bookrune:"blank",
    permatalk:false,   //Ring lost for 10 days, host confronts player. This signifies they talked about it, bedtimeskip
    breakshield:true,
    controlrune:false,
    narrowalt:false,
    narrowrune:-1,
    controlruneaccess:false,
    debugrun:false,
    senquews:true,              //partial reveal route to say host is talking
    fakering:false,             //If the host has bought a fake ring or not.
    uwchoice:0,                 //Underwear choice. 0 none chosen, 1 simple chosen, 2 embaressing one chosen.
    nightmasturbate:1,          //Keeps track of number of times masturbated at night
    ctfrole:"friend",              //Alignment chart of cock type. 
    enjoyit2:true,              //Changes mirror scenes to reflect acceptance
    ctfrolemod:"f",               //abbriviated version for use in [] variables, bod,f,pet,pos
    sexnum:0,                    //number of times had sex
    ringgone:false,             //ring is lost forever
    ringgonefirst:true,        //ring lost forever reaction quede up
    perma:false,                //host has told you he thinks you will never be able to change back
    changeofheart:false,        //the enjoyit swaperoo
    reward:false,               //night time trigger for reward scene
    punish:false,               //night time trigger for punishment scene
    toyholdery:[],              // list of avalible toys
    rewardask:false,            //PLayer wants a specific reward Need an aske menu for it though
    funvalue:0,                 //morning RND that determins if a rare event triggers duing the day
    funvaluebase:20,           //base minimum spread for fun value because lazy and not want to search code for it
    funmidholder:"",             //response text from the mid point of the minigame
    funholder:"",                //response text used occasionally
    funexit:"",                  //holder for the minigame to dump into
    funresult:0,                 //resulter for minigame 4=success, 0=used interally, 1=too horny 2=
    weekend:false,             //if it is the weekend or not used to skip discuss scene in morning
    condomtype:"",               //Type of condom for punish/reward scene
    pissaddiction:0,        //setting for enjoying piss too much. Will be maintained after TF state.
    toyused:"",                 //toy used at night for morning to catch it and remove it.
    spritenum:1,               //changed which of shalons sprites are are using in the portrait
    reqtoy:false,             //requested the host to buy a toy at the adult store.
    reqtoynum:0,             //number of times begged for toys
    mindchangetrigger:false,  //is either false of a string, contains the mindchange action link name
    permanum:0,               // number of times the host has mentioned making you perma cock
    harmonyunlockup:false,    //unlock for higher levels of harmony. Turns requests into words
    harmonyunlockdown:false,  //unlock for lower levels of harmony. Turns on checks for how you are doing during the day.
    permabegging:false,  
    adultstoreoutmore:false,  //uses ./adultstoreselector to tell if we need out of pants or in pants variation
    sellringplz:false,        //perma and host is going to sell the ring
    ringsold:false,           //ring has been sold or not
    blinkyactivated:false,     //subliminal teases for max harmony
    forgotten:false,          //after timeskip caused by perma and pills
    partial:false,            //after hospital thing caused by perma and low CTF amount
    partialsextalk:false,
    usedpillsonce:false,      //tells if they have used the pills at least once
    pillprimer:false,         //If the host has asked to use the pills to enter fogotten cock path
    pillroute:false,          //Tells us if the player has started on the path to forgotten
    pillwearoff:0,        //morning trigger to show that the pill has worn off.
    limitbreak:false,       //disables harmony cap to stop insane TT costs.
    tookpill:false,       //check for if the host took a pill the night before
    forgottenfirst:false, //has first time entering workspace as a forgotten cock happened yet
    pilltoforget:0,       // number of times the short time skip has happened.
    gogoperma:false,      // override for perma stuff!
    permateasecheck:false, //setting for skipping every other day when permablae
    skipto:"",            //allows events to skip tf and morning code in case they replace a night
    gooutcount: 0,        //
    oldhostfeels:"",      //Name of the old host that knows you can feel his cock
    oldhostknows:false,   //If he knows you can feel it
    ch2hostloc:[],        //list of locations where the hosts are
    holdem:true,          //debugy thing to prevent hosts from moving around
    docnope:false,
    piccum:false,         //doctor takes picture if you are drooling cum or not
    newhostleave:"home",      //link to leave new host to the locationy thing
    newhostmerge:"newhostpicked/enter",       //link to set up a new host.
    didresearch:false,       //did research that day so ring SHOULD be worn
    ch2loc:"home",         //chapter 2 location for ch2menu situation
    trainloc:false,       //if the location is on the other side of town thus needing the train....
    ch2:false,            //if in chapter 2 or not thus a chapter 2 host
    scenename:"",          //setting for jumping to other
    scenerexit:"",        // something to do with custom host files
    specieslist:["squirrel","horse","canine", "racoon","tiger"],
    pspecieslist:["canine","equine","feline","scalie","bunny","fox","hyena","otter","dolphin","kangaroo"],
    pbigspecieslist:[],
    tongrnd:0,            //type of tongue
    girl:false,            //IS THE HOST A SCARY GIRL!
    storestop:false,        //PLayer has said to buy nothing at the toystore twice
    ringatpawn:false,       // the ring is at the pawnshop
    buyringplz:false,       // asked for the host to buy the ring back!
    ringatpawnnum:0,        //days the ring is at the pawnshop for
    ringgonereason:"",      //reason the ring is gone for good
    fromhome:false,
    forgottenstealth:false,
    metbefore:[[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]],
    splistchoice:0,
    //////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////// CH2 only variables ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    ch2wakefirst:true,        //First time waking up not attached to a host
    daysnotacock:0,           //counter for number of days unattached
    daycut:0,                  //some weird internal code thing for screen clearing
    cssreseter:false,         //check if portait needs reseting
    morninginter:false,
    pillstealthcheck:false,
    alreadyforgot:false,
    withdrawls:10,            //num for withdrawls during chapter 2 
    firstnight:true,          //setting for stealth route in chapter 2 
    wandervar:0,              //keeps track of number of places you have gone in the day.
    pasthost:"mark",
    stayhidden:false,         //special kind of the stealth route
    clothed:false,            //host art tag for if they are wearing clothing
    erect:true,               //cock art tag for if the host is erect or not.
    permalock:false,          //locked in chastity cage all day
    permaplugged:false,       //stuck with plug in all day
    wantoutofcage:false,      //player has asked to be let out of the chastity cage
    wantplugout:false,        //player has asked for the plug to come out.
    destroyringplz:false,     //has asked host to destroy the ring
    dreamscape:true,          //setting to tell the essence spend which dream type we are going to
    permacockmeplz:0,         // number to track which stage of loving being a perma cock you are
    locdeeper:false,          //chapter 2 location thing to say there is more in this location
    ch2re:false,              //using a return to host in chapter 2. 
    underweargift:false,      //if bought the underwear from the mall
    underwear:[false,"pants","",""],             //underwear array
    weekendathome:true,       // weekend code flag if spent it at home
    daysringreallylost:0,      //new counter for checking how many days the ring has been lost.
    operholder:["","","",""],     //passes oper stuff to the ch2menuer
    reqtoymore:false,          // special request to use sex toys more often
    food:0,                   //chapter 2 food amount
    jerked:true,             //first time trying to masturbate at home ch2
    ch2beento:[],           //simple list of locations visited for the special ch2header system
    runehelp:0,
    wttspend:false,         //weekend thingy for the new talk scenes
    wpre:"",                //holder for preset message type in weekend talky parts
    tavernshortcut:false,   // Used to bypass the morning scenes comepletely for random hosts!
    rndmasturbate:0,      // masturbation war on RND
    rndperma:0,           //perma war on RND
    carryevening:"",        //
    screwgame:{
      
      time:0,
      align:0,
      turns:0
      
    }, 
    itemlinklist:{
                  dildo:false,
                  plug:false,
                  vibe:false,
                  milker:false,
                  beads:false,
                  fleshlight:false,
                  penispump:false,
                  buttplug:false,
                  cage:false
                },
    toylist:["bondage","condoms","fakering","vibe2","pill"],// items that the host buys automatically punishments
    toys:{
     
      beads:"./beads",
      plug:"./plug",
      vibe:"./vibe",
      fleshlight:"./fleshlight",
      cage:false,
      vibe2:false,
      bondage:false,
      condoms:false,
      fakering:false,
      pill:false
    },
    
    
    runedo:{
      head:false,
      arms:false,
      reversion:false,
      merge:true,
      stability:true,
      control:false,
      thoughts:true,
      horny:false
      
    },
    runearchivelist:{},
    mark: {
      host: "mark",
      chost:"Mark",
       plantokeep:false,
      defaulthostbackground:"mark",
      libido: 1, 
      sleepy: 0, 
      pref:"bi",
      workheading:"Office Building",
      workheading2:"Modeling Stuido",
      harmony: [
        8, 5, 1, 90], 
      mem: [],
      sender:"office",
      cocktype:"knot",
      lazy:"movies",
  scenes:{}
    },
    
    markparse: {
      host: "Mark", 
      sheath: "sheath", 
      dayjob: "work",
      dayjob2:"work"},
    
    marktalkedto: false,
    bret: {
      host: "bret", 
      chost:"Bret",
       plantokeep:false,
      defaulthostbackground:"bret",
      libido: 2, 
      pref:"gay",
      pref2:"will",
      sleepy: -2,
      harmony: [8, 3, 8, 35], 
      mem: [],
      sender:"mail",
      workheading:"Post Office",
      workheading2:"Post Office",
      cocktype:"knot",
      lazy:"sports",
      
  scenes:{}
    },
    //harmony: [8, 3, 8, 35],
    //harmony: [1, 4,8, 40], 
    //harmony: [8, 5, 1, 90], 
    bretparse: {
      host: "Bret", 
      sheath: "sheath", 
      dayjob: "work",
      dayjob2:"work"
    },
    artifacthidden:false,
    brettalkedto: false,
    bretdom: false,
    
    keagen: {
      host: "keagen",
      chost:"Keagen",
       plantokeep:false,
      defaulthostbackground:"keagen",
      libido: -2, 
      sleepy: 2, 
      pref:"straight",
      workheading:"College",
      workheading2:"Museum",
      harmony: [1, 4,8, 40], 
      mem: [],
      sender:"student",
      cocktype:"normal",
      lazy:"games",
  scenes:{}
      
    },
    keagenparse: {
      host: "Keagen", 
      sheath: "sheath", 
      dayjob: "class",
      dayjob2:"work"
    },
    
    keagentalkedto: false,
    
    
    
    limits: {
      goout: true, 
      cantalk: true, 
      hasarms: true, 
      insheath: 0, 
      cansee: true
    },
    abilities: {shrink: false, command: false, think: false},
    currenthostparse: {      
      host: "Keagen", 
      sheath: "sheath", 
      dayjob: "class",
      dayjob2:"work"},
    tracker: [],
    
    host: {
      host: "",
      libido: 0, //-5 to +5
      sleepy: 0,// -5 to +5
      lazy:""
    },
    reftab: {
      //guy body
        
        bg: "bg.jpg",
        avcanine:"avatar1.png",
        avdragon:"avatar2.png",
        avcat:"avatar3.png",
        avhuman:"avatar4.png",
        avbird:"avatar5.png",
        avblank:"",
        av:"",
        ctf20:"cock20.png",
        ctf40:"cock40.png",
        ctf60:"cock60.png",
        ctf80:"cock80.png",
        ctf20a:"cock20armless.png",
        ctf40a:"cock40armless.png",
        ctf20ha:"cock20armless.png",
        ctf40ha:"cock40armless.png",
        ctf60a:"cock60armless.png",
        ctf80a:"cock80armless.png",
        ctf60ha:"cock60headarmless.png",
        ctf80ha:"cock80headarmless.png",
        ctf100:"cock100.png",
        bretcrotch:"bretcrotch.png",
        hosscrotch:"hosscrotch.png",
        markcrotch:"markcrotch.png",
        markcrotch20:"markcrotch20.png",
        markcrotch40:"markcrotch40.png",
        markcrotch60:"markcrotch60.png",
        markcrotch80:"markcrotch80.png",
       markcrotch100:"markcrotch100.png",
            markclothes20:"markclothes20.png",
            markclothes40:"markclothes40.png",
            markclothes60:"markclothes60.png",
            markclothes80:"markclothes80.png",
            markclothes100:"markclothes100.png",
  
        bretcrotch20:"bretcrotch20.png",
        bretcrotch40:"bretcrotch40.png",
        bretcrotch60:"bretcrotch60.png",
        bretcrotch80:"bretcrotch80.png",
      bretcrotch100:"bretcrotch100.png",
      lizardcrotch20:"raptor.png",
      lizardcrotch40:"raptor.png",
      lizardcrotch60:"raptor.png",
      lizardcrotch80:"raptor.png",
      lizardcrotch100:"raptor4.png",
            leikacrotch20:"leika.png",
      leikacrotch40:"leika.png",
      leikacrotch60:"leika.png",
      leikacrotch80:"leika.png",
      leikacrotch100:"leika.png",
            lioncrotch20:"lioncrotch.png",
     lioncrotch40:"lioncrotch.png",
     lioncrotch60:"lioncrotch.png",
      lioncrotch80:"lioncrotch.png",
      lioncrotch100:"lioncrotch.png",
      lynxcrotch20:"lynxcrotch.png",
     lynxcrotch40:"lynxcrotch.png",
     lynxcrotch60:"lynxcrotch.png",
      lynxcrotch80:"lynxcrotch.png",
      lynxcrotch100:"lynxcrotch.png",
      lizardrclothes20:"reptcloth.png",
      lizardrclothes40:"reptcloth.png",
      lizardrclothes60:"reptcloth.png",
      lizardrclothes80:"reptcloth.png",
      lizardrclothes100:"reptcloth.png",
      lynxclothes20:"lynxcloth.png",
      lynxclothes40:"lynxcloth.png",
      lynxclothes60:"lynxcloth.png",
      lynxclothes80:"lynxcloth.png",
      lynxclothes100:"lynxcloth.png",
      lionclothes20:"lioncloth.png",
      lionclothes40:"lioncloth.png",
      lionclothes60:"lioncloth.png",
      lionclothes80:"lioncloth.png",
      lionclothes100:"lioncloth.png",
      hossclothes40:"hossclothed.png",
      hossclothes60:"hossclothed.png",
      //azyrdeath gets a cookie
      hossclothes80:"hossclothed.png",
      hossclothes100:"hossclothed.png",
            nulllizardcrotch20:"raptornull.png",
      nulllizardcrotch40:"raptornull.png",
      nulllizardcrotch60:"raptornull.png",
      nulllizardcrotch80:"raptornull.png",
      nulllizardcrotch100:"raptornull.png",
                  nullleikacrotch20:"leikanull.png",
      nullleikacrotch40:"leikanull.png",
      nullleikacrotch60:"leikanull.png",
      nullleikacrotch80:"leikanull.png",
      nullleikacrotch100:"leikanull.png",
      headpeek:"/builder/sheathedsource1.png",
      headpeek2:"/builder/sheathedsource2.png",
      headpeek3:"/builder/xeyeditfullcanine.png",
       slitheadpeek:"/builder/slitsource.png",
      slitheadpeek2:"/builder/slitsourcecock.png",
      
        keagencrotch:"keagancrotch.png",
      keagencrotch20:"keagan20.png",
        keagencrotch40:"keagan40.png",
        keagencrotch60:"keagan60.png",
        keagencrotch80:"keagan80.png",
        keagenclothes20:"keaganclothes20.png",
        keagenclothes40:"keaganclothes40.png",
        keagenclothes60:"keaganclothes60.png",
        keagenclothes80:"keaganclothes80.png",
        keagenclothes100:"keaganclothes100.png",
        hosscrotch20:"hoss.png",
         hosscrotch40:"hoss.png",
          hosscrotch60:"hoss.png",
           hosscrotch80:"hoss.png",
            hosscrotch100:"hoss.png",
            
            noarms:"wipcockstuff.png",
            arms:"wipcockstuff1.png",
        armsknotless:"wipcockstuff1knotless.png",
        
        
        pnoarms:"wipcockstuff2.png",
            parms:"wipcockstuff2.png",
        parmsknotless:"wipcockstuff2knotless.png",
        narms:"wipcockstuff3.png",
        narmsknotless:"wipcockstuff3knotless.png",
        experiment2:"/builder/experiment2.png",
           experiment1:"builder/experiment2armless.png.png",
          experimenthead:"builder/experiment2armlesscockhead.png",
        
      keagencrotch100:"keagancrotch.png",
      horse100:"builder/horsefull.png",
      horse95:"builder/horsefullnearly.png",
      canine100:"builder/fullcanine.png",
      canine95:"builder/fullcaninenearly.png",
       humanoid100:"builder/fullhumanoid.png",
       canine95x:"builder/fullcaninenearlyx1.png",
      humanoid95:"builder/fullhumanoidnearly.png",
      humanoid95x:"builder/fullhumanoidnearlyx1.png",
        horse95x:"builder/horsefullnearlyx1.png",
        reptile95:"builder/reptilecockfullnearly.png",
      reptile95x:"builder/reptilecockfullnearly1x.png",
     reptile100:"builder/reptilecockfull.png",
     feline95:"builder/felinecockfullnearly2.png",
           feline95x:"builder/felinecockfullnearlyx.png",
    feline100:"builder/felinecockfulltilt2.png"
    
    },
    portrait: {

      t1: document.getElementById("portait1"),
      t1a: document.getElementById("portait1a"),
      t2: document.getElementById("portait2"),
      t3: document.getElementById("portait3"),
      t4: document.getElementById("portait4"),
      t5: document.getElementById("portait5"),
      t6: document.getElementById("portait6"),
      t7: document.getElementById("portait7"),
      t8: document.getElementById("portait8"),
      t9: document.getElementById("portait9"),
      t10: document.getElementById("portait10"),
      t11: document.getElementById("portait11")
    }

  };

    
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");

  /*
   function characterpanel() {
   if (character.sandbox.clothed) {
   if (character.sandbox.diaper.name == "none") {
   
   document.getElementById("portait9").src= "media/img/" + "clothed" + character.sandbox.gender + ".png";
   } else {
   document.getElementById("portait9").src = "media/img/" + "diaperclothed" + character.sandbox.gender + ".png";
   }
   } else {
   if (character.sandbox.diaper.name != "none") {
   document.getElementById("portait9").src = "media/img/" + character.sandbox.diaper.name + character.sandbox.gender + ".png";
   } else if (character.sandbox.underwear&&character.sandbox.gender=="m"){
   
   document.getElementById("portait9").src = "media/img/underwear" + character.sandbox.gender + ".png";
   } else{
   document.getElementById("portait9").src = "media/img/unclothed" + character.sandbox.gender + ".png";
   
   }
   
   }
   }
   clother = characterpanel.bind(system);
   */
 


  wtf = false;

  npcloc:[];
  harn=function(){
    
    return(character.qualities.ctf < 40&&character.sandbox.host.host=="bret");
    
  };
  fib= function(){
  var hdist = (Math.abs(character.qualities.harmony - 50)) + 1;
                var i;
                var fib = []; // Initialize array!
                var cost=0;

                fib[0] = 0;
                fib[1] = 1;
                for (i = 2; i <= (hdist/2); i++) {
                  // Next fibonacci number = previous + one before previous
                  // Translated to JavaScript:
                  fib[i] = fib[i - 2] + fib[i - 1];
                  cost = (fib[i]);
                }
                character.sandbox.ttcost = Math.floor(cost / 2);
                console.log("TTCOST= " +character.sandbox.ttcost );
                if(character.qualities.ctf>10){
                   system.setQuality("ttcost",character.sandbox.ttcost );
                  
                }else{
                  system.setQuality("ttcost",0 );
                }
               
  
  
  
  };
parer = function(input, style){
    say(input, system, character, style);
  };
  clother = function (x) {
    clother2(character, system, x);
  };
    speedchange=function(){
      console.log("ok button clikery ");
      speedchange2(character);
    };
    clearok=function(){
    var clearbutt=  document.getElementById("clearbutton");
      if(character.sandbox.clearok){
        
        
           character.sandbox.clearok=false;
        clearbutt.style.background="darkgrey";
        
      }else{
        character.sandbox.clearok=true;
         clearbutt.style.background="green";
      }
      
      
      
    };
   delay = function(input,timey){
     
     // delay([response, response, response, dolink ]);
     
     
     console.log("what?"+input[0]+""+input[1]);
     input.unshift(0);
     // [loops0,response,[response,color],response, dolink]
     
     input[0]=input.length-2;
     if (undum.isInteractive()) {
       timemod(system, character, input,timey);
     }else{
       system.doLink(input[input.length - 1]);
     }
     
    
  
   };
//WHAT THE HECK IS THIS! oh its.... complicated.
  function whoknowswhat(information, inorout) {
    if (inorout) {
      character.sandbox.host.mem.push(information);
    } else {
      var test = character.sandbox.host.mem.some(function (info) {
        return info == information;
      });
      return test;
    }
  }
  ;


  knower = whoknowswhat.bind(system);

  function whoknowswhat2(information, inorout) {
    if (inorout) {
      character.sandbox.tracker.push(information);
    } else {
      var test = character.sandbox.tracker.some(function (info) {
        return info == information;
      });
      return test;
    }
  }
  ;
  desc1 = descer.bind(system);
  function descer(character, system) {
  console.log("Well we made it in");
if(character.qualities.essence>=300&&character.qualities.day<10){
undum.screensize=false;
}
if(character.sandbox.runeknown.length>4&&character.qualities.day<5){
  undum.screensize=false;
}
  var sectionone = "Currently you are a simple college student, HEIGHT ish feet tall anthro XX \
       .";
  var sectionzero = "";
  var sectionthree = "";
  if (character.qualities.progress != 0) {
    switch ((Math.floor((character.qualities.progress + 3) / 4) * 20)) {
      case 20:
        sectionzero = "You are " + character.sandbox.fname + ".";
        sectionone = "<p>Your body feels squishy and sensitive.\
                        ";

        break;
      case 40:

        break;
      case 60:

        break;
      case 80:

        break;
      case 100:

        break;
    }//switch close

  } else {
    //Fully humanoid
    console.log("Characther is clear");
    sectionzero = "";
    sectionone = "";
    sectionthree = "";
  } //if close
  //assembler
  console.log("about to hit assembler");
  var uplerd = "<p>" + sectionzero + sectionone + sectionthree + "<p/>";

  //system.setCharacterText(uplerd);
  console.log("really?");


  return uplerd;
}
;

  tracker = whoknowswhat.bind(system);
  function rnd2(vared) {
    var x;
    //var x = Math.floor((Math.random() * 10) + 1);
    if (vared == null) {
     x = system.rnd.randomInt(1, 10);
      return x;

    } else {
      x = system.rnd.randomInt(1, (vared));
      return x;

    }
    //vared = "";

  }
  ;
  rnd = rnd2.bind(system);
    npcloc = ["Mark", "Keagen"];

    var x2;
    for (x2 in npcloc) {
        rndprop(startlocations).push(npcloc[x2]);
    }
    ;

/////////////////////// THIS TOOK SOOO LONG TO FIGURE OUT!!!! and I realized I had to search for a "variable variable". 
//WHAT.... Turns out I just had to objectify a string... WAIT WAHT Does that even MEAN!!!!
//// AND NONE of it worked! 


  //and three lines of code solved it.
  /*
   var x2;
   for (x2 in npcloc) {
   rndprop(startlocations).push(npcloc[x2]);
   }
   ;
   */
  /*behold the ultimate derp solution that really didn't work.
   var derp=this[character.sandgox.startlocations[0]];
   console.log("umm initactivated "+derp[0]);
   derp.push(npcloc[0]);
   console.log ("Aright maybe this doesn't work"+derp[0]);
   console.log ("Aright maybe this doesn't work"+character.sandbox.mallnpc[0]);
   console.log ("Aright maybe this doesn't work"+character.sandbox.gymnpc[0]);
   console.log ("Aright maybe this doesn't work"+character.sandbox.parknpc[0]);
   //and now all I can do is sit back AND WONDER how,why,if this will work.
   //I will rebuild this later.*/


shopdescer=function(rune){
  
  var selrune=document.getElementById("rune"+rune);
          if(selrune.className == "shopiconclicked"){
            selrune.className = "shopicon";
            
          }else{
            
            selrune.className = "shopiconclicked";
          }
          
          if(rune==12){
            
             closeshop();
          }
          runecheck(system,character,rune);
   
  
};
newrune=function(){
    if (undum.isInteractive()) {
runesystem(system, character);
                } 

};


runearchive(character);
displayrune= function(rune,active){
  
  // active changes the setting if true means system will output rune
    if (undum.isInteractive()) {
          displayrune2(character, rune,active);          
                } 
 
  
  
};

};

function speedchange2(character){
 var buttony=document.getElementById("speeddown");
  //.className = "toolsportraitbig"
    console.log("ok button clikery "+ character.sandbox.eventspeed);
              character.sandbox.eventspeed-=250;
              if(character.sandbox.eventspeed==500){
                
                character.sandbox.eventspeed=2000;
              }
  switch (character.sandbox.eventspeed) {
    case 2000:
      
          console.log("this works.... ");
         buttony.style.width="50%";
      buttony.innerHTML="Game Speed";
      break;
    case 1750:
         buttony.style.width="60%";
         buttony.innerHTML=">Game Speed>";
      break;
    case 1500:
         buttony.style.width="70%";
         buttony.innerHTML=">>Game Speed>>";
      break;
    case 1250:
       console.log("this works.... ");
         buttony.style.width="80%";
         buttony.innerHTML=">>>Game Speed>>>";
      break;
    case 1000:
        buttony.style.width="90%";
          buttony.innerHTML=">>>>Game Speed>>>>";
      break;
    case 750:  
       console.log("this works.... ");
      buttony.style.width="100%";
        buttony.innerHTML=">>>>>Game Speed>>>>>";
      break;
    default:
  }//End of RND switch
  
};


var globalonclick;
function clickerizer(toset) {
  console.log("Clickerizer activated! " + toset);
  globalonclick = toset;

}


var rndprop = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};
function strip(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
;
function classswapperin(x) {

  document.getElementById("tools_portrait").className = "toolsportraitbig";

  //x.style.height = "32px";

}
;
function classswapperout(x) {

  document.getElementById("tools_portrait").className = "toolsportrait";




  //x.style.height = "32px";

}
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        closeshop();
    }
});
closeshop=function(){
  $("#shopmenu").hide(0).animate({opacity: 0}, 100);
  
  
}; 
var blinkyactive=false;
blinkymessage= function(character){
  
  var blinkytext =["Cock","Just a part of his body","You love to cum","You are nothing but a cock","You will always be a penis","This is your destiny","You don't need to think anymore"];
  if(character.sandbox.ws){
    blinkytext=["Cock","Just a part of his body","You love to piss","You are nothing but a cock","You will always be a penis","This is your destiny","You don't need to think anymore"];
    
  }
if(character.sandbox.forgotten){
  
    if(character.sandbox.ws){
    blinkytext=["Cock","Just a part of his body","You love to piss","You love to cum","You are nothing but a cock","You have always been a penis","A cock is all that you are","Just go back to sleep","Good cock","Being a cock is all you have ever known","Being a person was just a bad dream","This is the only form you have ever had"];
    
  }else{
    blinkytext =["Cock","Just a part of his body","You love to cum","You are nothing but a cock","You have always been a penis","A cock is all that you are","You don't need to think anymore","Being a cock is all you have ever known","Good cock","Being a person was just a bad dream","This is the only form you have ever had"];
  }
}
 
 
var duration = 4000;
var interval =10000;

if(blinkyactive){
         
    $("#blinky").css('display', 'none');
  clearInterval(blinkytimer);
  blinkyactive=false;
}else{
  $("#blinky").css('display', 'unset');
  blinkyactive=true;
  blinkyelem = document.getElementById("blinky");
 blinkyelem.style.position = "fixed";
  blinkytimer = setInterval(function(){
      var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
        blinkyelem.textContent = blinkytext[Math.round(Math.random() *(blinkytext.length-1))];
    
    blinkyelem.style.left = Math.round(Math.random() * fullWidth) + "px";
    blinkyelem.style.top = Math.round(Math.random() * (fullHeight*.9)) + "px";
   // $('.blink_message').text(text);
    $('.blink_message').fadeIn("1000", function(){
        setTimeout(function(){
            $('.blink_message').fadeOut('1000');
        },duration);
    });
    
}, interval);
}




};
  
    
 function ger(thingy){
   if(Array.isArray(thingy)){
     
     return thingy[rnd(thingy.length)-1];
   }else{
     
     return thingy;
     
   }
 
   
 };