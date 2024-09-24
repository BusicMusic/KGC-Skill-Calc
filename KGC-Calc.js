//Hero Calc Switch case list - gets the name of the hero based on what button the user clicks, then uses that info to call the corresponding function
function calcSkill(Hero){
    switch(Hero){
        case Aramis:
            calcAramisSkill();
            break;
        case Evan:
            calcEvanSkill();
            break;
        case Shelda:
            calcSheldaSkill();
           break;
        case Leonhardt:
            calcLeonhardtSkill();
            break;
        case Priya:
            calcPriyaSkill();
            break;
        case Daniel:
            calcDanielSkill();
            break;
        case Mara:
            calcMaraSkill();
            break;
        case ChungAh:
            calcChungAhSkill();
            break;
        case Lily:
            calcLilySkill();
            break;
        case Jol:
            calcJolSkill();
            break;
        case Ren:
            calcRenSkill();
            break;
        case Behemus:
            calcBehemusSkill();
            break;
        case Lyca:
            calcLycaSkill();
            break;
        case Rossette:
            calcRossetteSkill();
            break;
        case Lunaire:
            calcLunaireSkill();
            break;
        case Yeon:
            calcYeonSkill();
            break;
        case ZuoYun:
            calcZuoYunSkill();
            break;
        case Zupitere:
            calcZupitereSkill();
            break;
        case Draco:
            calcDracoSkill();
            break;
        case Mel:
            calcMelSkill();
            break;
        case Rahawk:
            calcRahawkSkill();
            break;
        case Hansi:
            calcHansiSkill();
            break;
        case Asiaq:
            calcAisaqSkill();
            break;
        case Bombie:
            calcBombieSkill();
            break;
        case Bardrey:
            calcBardreySkill();
            break;
        case Alberon:
            calcAlberonSkill();
            break;
        case Cain:
            calcCainSkill();
            break;
        case Hela:
            calcHelaSkill();
            break;
        case Mirsyl:
            calcMirsylSkill();
            break;
        case Taesan:
            calcTaesanSkill();
            break;
        case ZuoBai:
            calcZuoBaiSkill();
            break;
        case Agathe:
            calcAgatheSkill();
            break;
        case Neria:
            calcNeriaSkill();
            break;
        case Haerang:
            calcHaerangSkill();
            break;
        case Gidnil:
            calcGidnilSkill();
            break;
        case Kanak:
            calcKanakSkill();
            break;
        case Rie:
            calcRieSkill();
            break;
        case Nibella:
            calcNibellaSkill();
            break;
        case Taebaek:
            calcTaebaekSkill();
            break;
        case Cathy:
            calcCathySkill();
            break;
        case Esthea:
            calcEstheaSkill();
            break;
        case Baldir:
            calcBaldirSkill();
            break;
        case Ian:
            calcIanSkill();
            break;
        case Ophelia:
            calcOpheliaSkill();
            break;
        case Kirdan:
            calcKirdanSkill();
            break;
        case Mano:
            calcManoSkill();
            break;
        case Victoria:
            calcVictoriaSkill();
            break;
        case Aenrath:
            calcAenrathSkill();
            break;
        case Elizabeth:
            calcElizabethSkill();
            break;
        case Saeryung:
            calcSaeryungSkill();
            break;
        case Farael:
            calcFaraelSkill();
            break;
        case Garam:
            calcGaramSkill();
            break;
        case Dandelyn:
            calcDandelynSkill();
            break;
        case Saras:
            calcSarasSkill();
            break;
        case Jinju:
            calcJinjuSkill();
            break;
        case Bellina:
            calcBellinaSkill();
            break;
        case Sargula:
            calcSargulaSkill();
            break;
        case Maiu:
            calcMaiuSkill();
            break;
        default:
            console.log("error in selecting hero- no function found");
    }
}


//Skill Damage Calculator functions for each hero start below
function calcAramisSkill(){
    let Hero="Aramis";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=413+(413*(spellBonus/100));
    let atk=266+(266*(atkBonus/100));
    let asp=67+(67*(aspBonus/100));

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Headshot</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg= spellAtk+(spellAtk*0.4);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Headshot</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg= (atk*0.9);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Quickshot</i> attack");
    }
    return 3;
}

function calcEvanSkill(){
    let Hero="Evan";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=148+(148*(atkBonus/100));
    let asp=120+(120*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        spellAtk= spellAtk+(spellAtk*0.4);
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=20+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Crescent Slash</i> attack</br>___ per <i>Sword Aura</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=20+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Crescent Slash</i> attack</br>___ per <i>Sword Aura</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=20+spellAtk;
        let SkillDmg2= spellAtk*0.3;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');


        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Crescent Slash</i> attack</br><b>"+ output2+ "</b> per <i>Sword Aura</i> attack");
    }
    return 4;
}

function calcSheldaSkill(){
    let Hero="Shelda";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=91+(91*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv4Passive").checked){
        SkillDmg=(30+spellAtk);
        SkillDmg= SkillDmg+ (SkillDmg*0.5);
    }
    else
        SkillDmg=(30+spellAtk);

    if (document.getElementById(Hero+"A0").checked){
        // SkillDmg=(30+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Iron Will</i> use</br> _____ damage dealt per <i>Explosive Will</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        // SkillDmg=(30+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Iron Will</i> use</br> _____ damage dealt per <i>Explosive Will</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=(30+spellAtk);
        let SkillDmg2= SkillDmg+(spellAtk*0.5);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');


        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Iron Will</i> use</br><b>"+ output2+ "</b> damage dealt per <i>Explosive Will</i> attack (based off of protection gained from the first use of <i>Iron Will. Increases with other sources of protection gained</i>");
    }
    return 5;
}

function calcLeonhardtSkill(){
    let Hero="Leonhardt";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1770+(1770*(hpBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=91+(91*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv4Passive").checked){
        //Leonhardt's passive skills do not impact his skill
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=30+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Smite</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=30+spellAtk;
        let SkillDmg2=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= SkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Smite</i> attack</br><b>"+ output2+ "</b> protection gained per enemy hit with <i>Barrier</i> active");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=30+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Smite</i> attack");
    }
    return 6;
}

function calcPriyaSkill(){
    let Hero="Priya";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=708+(708*(hpBonus/100));
    let spellAtk=384+(384*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv4Passive").checked){
        //Priya's passive skills do not impact her skill
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=30+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Blizzard</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=30+spellAtk;
        let SkillDmg2=spellAtk*0.3;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= SkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Blizzard</i> attack</br><b>"+ output2+ "</b> damage per second for 3 seconds to enemies within range of <i>Barrier</i>");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=30+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Blizzard</i> attack");
    }
    return 7;
}

function calcDanielSkill(){
    let Hero="Daniel";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        hp=(hp+(hp*0.2));
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=50+spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Judgement of Light</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=50+spellAtk;
        let SkillDmg2=atk*3;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Judgement of Light</i> attack</br><b>"+ output2+ "</b> damage to each enemy on the first normal attack with <i>Divine Bash</i>");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=50+spellAtk;
        let SkillDmg2=hp*0.3;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Judgement of Light</i> attack</br><b>"+ output2+ "</b> health regen per second for 3 seconds with <i>Self-Recovery</i>");
    }
    return 8;
}

function calcMaraSkill(){
    let Hero="Mara";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826+(826*(hpBonus/100));
    let spellAtk=354+(354*(spellBonus/100));
    let atk=77+(77*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        //Mara's passive abilities don't affect her skill
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Backstab</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Backstab</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=spellAtk;
        let SkillDmg2= hp-(hp*0.2);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Backstab</i> attack");
    }
    return 10;
}

function calcChungAhSkill(){
    let Hero="ChungAh";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=94+(94*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        //Chung Ah's passive abilities don't affect her skill damage
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=(10+spellAtk);
        let SkillDmg2=(SkillDmg*2.5);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Horizontal Dragon Edge</i> attack</br><b>"+ output2+ "</b> per <i>Azure Dragon Slash</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=(10+spellAtk);
        let SkillDmg2=(SkillDmg*2.5);
        let SkillDmg3=SkillDmg2+(SkillDmg2*0.4);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let finalSkillDmg3=Math.round(SkillDmg3*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        let output3= finalSkillDmg3.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Horizontal Dragon Edge</i> attack</br><b>"+ output2+ "</b> per <i>Azure Dragon Slash</i> attack</br><b>"+ output3+ "</b> damage per instant <i>Azure Dragon Slash</i> from <i>Relentless Slash</i> awakening");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=(10+spellAtk);
        let SkillDmg2=(SkillDmg*2.5);
        let SkillDmg3=SkillDmg*10;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let finalSkillDmg3=Math.round(SkillDmg3*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        let output3= finalSkillDmg3.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Horizontal Dragon Edge</i> attack</br><b>"+ output2+ "</b> per <i>Azure Dragon Slash</i> attack</br><b>"+ output3+ "</b> damage per instant <i>Advent of Thunder Dragon</i>");
    }
    return 11;
}

function calcLilySkill(){
    let Hero="Lily";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=590+(590*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=59+(59*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        //Lily's passive abilities don't affect her skill damage
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=(20+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br>____ damage per <i>Charge!</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=(20+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br>____ damage per <i>Charge!</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=(20+spellAtk);
        let SkillDmg2=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br><b>"+ output2+ "</b> damage per <i>Charge!</i> attack");
    }
    return 11;
}

function calcJolSkill(){
    let Hero="Jol";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
    
    if (document.getElementById(Hero+"lv8Passive").checked){
        //Jol's passive abilities don't affect his skill damage
    }

    if (document.getElementById(Hero+"A0").checked){
        SkillDmg=(20+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br>____ damage per <i>Charge!</i> attack");
    }
    else if (document.getElementById(Hero+"A1").checked){
        SkillDmg=(20+spellAtk);

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br>____ damage per <i>Charge!</i> attack");
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=(20+spellAtk);
        let SkillDmg2=spellAtk;

        let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
        let finalSkillDmg2=Math.round(SkillDmg2*100)/100; //rounding to nearest 100th
        let output= finalSkillDmg.toLocaleString('en');
        let output2= finalSkillDmg2.toLocaleString('en');
        
        document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Vitality of Nature</i> use</br><b>"+ output2+ "</b> damage per <i>Charge!</i> attack");
    }
    return 12;
}

function calcRenSkill(){}

function calcBehemusSkill(){}

function calcLycaSkill(){}

function calcRossetteSkill(){}

function calcLunaireSkill(){}

function calcYeonSkill(){}

function calcZuoYunSkill(){}

function calcZupitereSkill(){}

function calcDracoSkill(){}

function calcMelSkill(){}

function calcHansiSkill(){}

function calcAsiaqSkill(){}

function calcBombieSkill(){}

function calcAlberonSkill(){}

function calcCainSkill(){}

function calcHelaSkill(){}

function calcMirsylSkill(){}

function calcTaesanSkill(){}

function calcTiaSkill(){}

function calcZuoBaiSkill(){}

function calcAgatheSkill(){}

function calcNeriaSkill(){
    let Hero="Neria";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let atk=94+(94*(atkBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let asp=125+(125*(aspBonus/100));
    let hp=826+(826*(hpBonus/100));

    SkillDmg= atk*(300+(spellAtk/10));
    let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
    let output= finalSkillDmg.toLocaleString('en')
    
    document.getElementById("NeriaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Annihilation Time</i> attack");
    return 1;
}

function calcHaerangSkill(){}

function calcGidnilSkill(){}

function calcKanakSkill(){}

function calcRieSkill(){}

function calcNibellaSkill(){}

function calcTaebaekSkill(){}

function calcCathySkill(){}

function calcEstheaSkill(){}

function calcBaldirSkill(){}

function calcIanSkill(){}

function calcOpheliaSkill(){}

function calcKirdanSkill(){}

function calcManoSkill(){}

function calcVictoriaSkill(){}

function calcAenrathSkill(){}

function calcElizabethSkill(){}

function calcSaeryungSkill(){}

function calcFaraelSkill(){}

function calcGaramSkill(){}

function calcDandelynSkill(){}

function calcSarasSkill(){}

function calcJinjuSkill(){}

function calcBellinaSkill(){}

function calcSargulaSkill(){
    let Hero="Sargula";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let atk=207+(207*(atkBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let asp=100+(100*(aspBonus/100));
    let hp=1593+(1593*(hpBonus/100));

    SkillDmg= (250+(spellAtk/16.66));
    SkillDmg= atk * (SkillDmg/100);
    let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
    let output= finalSkillDmg.toLocaleString('en')
    
    document.getElementById("SargulaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Punishment of Void</i> attack");
    return 2;
}

function calcMaiuSkill(){}

//end of skill calculator functions