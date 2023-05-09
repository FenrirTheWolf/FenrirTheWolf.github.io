undum.game.runes = {
    runemenuy: new undum.SimpleSituation(
        "", {
            actions: {
                "simple": function(character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, //function close
                "runemenu": function(character, system, action) {
                    newrune();

                }, //function close
                "r1": function(character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                } //function close
            } //actions close
        } //options close
    )

};
// runes turned upside down to reverse effect, Runes that dont reverse are the same up and down. 
//*essence    -simple rune
//*-control    -simple rune Activating the dreamstate
//*obediance  -medium rune controls the consequnces of harmony
//*--merging    -medium rune Push the TF down or up
//*Break      -hidden rune Breaks the ring instantly
//reversion   -hard rune Reverses the TF if at minimum.
//*pleasure   -hidden rune More fully connects you to the host
//*species    -hard rune Horse dong
//lust       -medium rune Makes host wannna fuck.
//*--release    -hard rune Determins the stability of the ring, causes it to fall off.
//*freedom    -medium rune Determines ability to move
//*arm        -medium rune arms and head

function runesystem2() {
    runesystem("display");


}

function runesystem(swapper) {
    $("#shopmenu").show(0).animate({
        opacity: 1
    }, 100);
    var swaptest = true;

    if (swapper) {
        swaptest = false;
    }



    var icony;

    var smtable = document.getElementById("shopmenu");




    var smholder = "";
    var xeicon = "voub1";
    var xexe = "";
    for (var c = 0; c < 25; ++c) {
        //                     icony = "<img onclick='shopdescer(" + '"' + xexe + '"' + ")' class='shopicon'  src='media/img/" + xeicon + ".png'>";
        //                    smholder = smholder+"<a class='smtablea'  >"+icony+"</a>";
        //                    
        //                    
        //                    
        if (swaptest) {
            icony = "<img id='" + "rune" + c + "' onclick='shopdescer(" + c + ")' class='shopicon'  src='media/img/" + xeicon + ".png'>";

        } else {

            icony = "<img id='" + "rune" + c + "' onclick='closeshop()' class='shopicon'  src='media/img/" + xeicon + ".png'>";
        }




        smholder = smholder + icony;
    }




    //"<img  class='shoppic'  src='media/img/shopanton.png'>"+



    //shoppic.innerHTML ="<img  id='shopbuy'  onclick='diaperbuyer()' src='media/img/noglow.png'>";   


    smtable.innerHTML = smholder;

    //                  var midrune= document.getElementById("rune12");
    //    midrune.className = "midrune";
    //                  
    //                  
    /// dislpay a rune on the menu              




}




function runearchive(character) {

    var randrunesR = [
        [16, 20, 18, 24, 7, 2], //flips and not the same
        [3, 1, 17, 21, 23, 4, 0, 5, 9, 22],
        [23, 18, 19, 24, 21, 16, 15, 20, 7, 2],
        [11, 13, 17, 5, 9, 2],
        [10, 6, 14, 8, 2, 0, 4, 11, 13],
        [11, 10, 13, 14, 1, 3, 22],
        [1, 5, 0, 17, 13, 18, 22, 14]

    ];
    var randrunesN = [
        [11, 13, 4, 20, 24, 0, 17, 7], //flipable and is the same
        [16, 7, 17, 18, 6, 8, 14, 10],
        [9, 23, 21, 15, 5, 1, 3, 19],
        [10, 14, 22, 2, 18, 8, 16, 6],
        [20, 21, 15, 5, 0, 1, 3, 4, 9, 19, 24, 23],
        [17, 23, 11, 7, 3, 10, 24, 4],
        [6, 8, 16, 18, 21, 3, 1, 23, 17, 7]

    ];

    //"obediance",
    //"lust",
    var flips = ["merge", "unmerge", "arms", "stability", "head", "horny"];
    var noflips = ["breaking", "reversion", "feedback", "thoughts", "equalize"];

    character.sandbox.runearchivelist = {
        //"merge","unmerge","arms","stability","head","horny","breaking","reversion","feedback","thoughts","equalize","canine","feline","reptile","horse"

        //control: [18, 22, 16, 6, 2, 8],
        unmerge: [],
        merge: [], //swappable
        breaking: [], //activata once
        reversion: [], //activatable
        arms: [], //swappable
        head: [], //swappable
        feedback: [], //activate once
        thoughts: [], //activate once
        equalize: [], //activate once
        stability: [],
        horny: [] //swappable                

    };
    character.sandbox.runearchivedesc = {
        canine: "Embrace the shape of the knotty canine",
        reptile: "Embrace the shape of the sleek reptile",
        feline: "Embrace the shape of the wise feline",
        control: "Allows for mental connection and control of other runes",
        horse: "Embrace the shape of the mighty stallion!",
        genderbender: "Turns everyone female! Or... at least feminine.... How? Why!?",
        unmerge: "Will reduce the amount of transformation",
        merge: "Will boost the amount of transformation", //swappable
        breaking: "Is very dangerous, accidental activation could cause a disasterous overload", //activata once
        reversion: "When activated at just the right time could completely reverse the transformation", //activatable
        arms: "Causes any transformation to prioritize transforming your arms, but it will force your head to return first", //swappable
        head: "Causes any transformation to prioritize transforming your head back first", //swappable
        feedback: "Unwise to activate as it would dump all essence currently contained", //activate once
        thoughts: "Activates a connection between two people, lasts for a long while then needs refreshing.", //activate once
        stability: "Free or merge the ring with yourself.",
        equalize: "Causes the transformation to settle into a pefectly middle state",
        horny: "Causes a massive incresse in sex drive"

    };
    //runes yet to be plugged in
    /*
   memory:[], //flippable If you hit this it starts SLOWLY replacing memory with that of being a cock. 
                   //either hits host OR player! So they will start forgetting you are not just their cock OR you start forgetting your were not a cock. Once on you can't turn it off.... You have to pick a direction or keep swapping between the two to prevent it.
                     //First step of process is loss of name
                     // WRITE A SCENE ARGUING WITH HOST THAT YOU HAVE NOT ALWAYS BEEN THEIR Penis!
   
   // memory is a 1-10 scale
   // both have it
   // wearing the ring return memory to one and remove from the other
   // ACTIVATION gives -1 +2
   // leaving it give  -2 +1
   
   // BOTH HOST AND COCK can forget
   // It can be reversed with some effort.
   // It can be STUCK at a point if the ring comes off
                     
                 freedom: [],    //swappable     
                    release: [],    //swappable
      
      
   Awareness rune: Cock is only awake when aroused or hard. or urinating if ws activated.
   swaprune: chapter 2 rune that causes player to JUMP to another host. maybe used in chapter 3?
      
   pleasure: [],   //deeper orgasmic connection and lust (not sure what it actually does
 
     lust: [],       //activateable
  finality: [] //turns you 110% in a cock, no moving, no TT, and fully red/whatever color. 
   essence: [],    //
   flavor: []    adds a slight taste to cum. blowjob scene notices it.
     obediance: [],  //swappable
     ctfup: [1, 22, 8],
     harmony:[]; //makes harmony go crazy double gains and losses
     completion:[]; //insta maxes the transformation
   production: MORE CUM, EVEN MORE CUM! CUMPOCOLYPSE!
   numbing rune: makes host unable to feel you for a day (bad rune)
 */




    var runey = character.sandbox.runearchivelist;


    var xyz;
    var grabarune;
    var therune;
    for (xyz in flips) {

        grabarune = rnd(randrunesR.length);

        therune = randrunesR[grabarune - 1];


        randrunesR.splice(grabarune - 1, 1);

        runey[flips[xyz]] = (therune);



    }
    for (xyz in noflips) {

        grabarune = rnd(randrunesN.length);

        therune = randrunesN[grabarune - 1];


        randrunesN.splice(grabarune - 1, 1);

        runey[noflips[xyz]] = (therune);



    }



    console.log(runey);


    character.sandbox.runearchivelist.horse = [5, 10, 15, 20, 1, 2, 3, 9, 14, 19, 24, 8, 6];
    character.sandbox.runearchivelist.feline = [2, 9, 7, 17, 23, 22, 16, 18, 21, 4, 0, 5, 24, 20];
    character.sandbox.runearchivelist.canine = [16, 17, 18, 11, 22, 13, 2, 7];
    character.sandbox.runearchivelist.reptile = [9, 14, 7, 2, 4, 0, 5, 10, 15, 19];

    character.sandbox.runeholder = Object.keys(character.sandbox.runearchivelist);

    // cat maybe? 2,9,7,17,23,22,16,18,21,4,0,5,24,20
    // canine 16,17,18,11,22,13,2,7
    // raptor 9,14,7,2,4,0,5,10,15,19
    // human 22,17,16,18,2,7,13,8,3,11,6,10,1,5

    character.sandbox.runearchivelist.genderbender = [13, 11, 22, 0, 4, 7, 6, 8, 18, 16, 17];
    character.sandbox.runearchivelist.control = [18, 22, 16, 6, 2, 8];
};


function displayrune2(character, runetarget, active) {
    var fullrune = true;
    if (active) {
        switch (active) {
            case "active":

                runesystem();

                break;
            case "remember":
                fullrune = false;
                runesystem();

                break;
            case 4:

                break;
            default:

                break;
        } //End of RND switch
    } else {
        //inactive rune
        runesystem2();
    }

    character.sandbox.runelist = [];

    var selrune;


    var templist = character.sandbox.runearchivelist[runetarget];
    var x;
    var shows = 0;
    var skips = 0;
    for (x in templist) {


        if (fullrune) {
            character.sandbox.runelist.push(templist[x]);
            selrune = document.getElementById("rune" + templist[x]);
            selrune.className = "shopiconclicked";


        } else {
            //      if((skips+shows)>=5&&!(skips==shows)){
            //        
            //        
            //         if(shows<skips){
            //        character.sandbox.runelist.push(templist[x]);
            //   selrune =document.getElementById("rune"+templist[x]);
            //     selrune.className = "shopiconclicked";
            //      shows++;
            //     }else{
            //        skips++;
            //     }
            //        
            //        
            //        
            //      }else{
            //         if((Math.random() < 0.6)){
            //        character.sandbox.runelist.push(templist[x]);
            //   selrune =document.getElementById("rune"+templist[x]);
            //     selrune.className = "shopiconclicked";
            //      shows++;
            //     }else{
            //        skips++;
            //     }
            //        
            //      }

            if ((Math.random() <= 0.9)) {
                character.sandbox.runelist.push(templist[x]);
                selrune = document.getElementById("rune" + templist[x]);
                selrune.className = "shopiconclicked";
                //shows++;
            }

        }




    }


}

function runecheck(system, character, rune) {
    console.log("Rune clicked! " + rune);
    if (rune == 12) {
        //closes the menu and should check the runelist for a matching rune

        //check for a matching rune
        //set active rune


        //character.sandbox.runelist={};
        var tempname = "";

        function arrayCompare(_arr1, _arr2) {
            //    if (
            //      !Array.isArray(_arr1)
            //      || !Array.isArray(_arr2)
            //      || _arr1.length !== _arr2.length
            //      ) {
            //        return false;
            //      }

            // .concat() to not mutate arguments
            const arr1 = _arr1.concat().sort();
            const arr2 = _arr2.concat().sort();

            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {

                    return false;
                }
            }

            return true;
        }

        var runex;
        tempname = "blank";
        for (runex in character.sandbox.runearchivelist) {
            var runey = character.sandbox.runearchivelist[runex];


            if (arrayCompare(runey, character.sandbox.runelist)) {

                tempname = runex;
                console.log("Rune triggeredededededed " + runex);
            };




        }




        character.sandbox.activerune = tempname;
        console.log("Darn it " + character.sandbox.activerune);
        //system.doLink("debug/enter");


    } else {
        var runeindex;
        runeindex = character.sandbox.runelist.indexOf(rune);
        if (runeindex == -1) {

            //add a rune
            character.sandbox.runelist.push(rune);
            console.log("runelist update " + character.sandbox.runelist);


        } else {
            //remove a rune
            character.sandbox.runelist.splice(runeindex, 1);
            console.log("runelist update " + character.sandbox.runelist);

        }



    }




}