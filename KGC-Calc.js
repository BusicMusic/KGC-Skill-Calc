//some JS for only showing the Back to Top button when the user scrolls down a certain amount
var scrollFunc= function(){
    const scrollBtn= document.getElementById("topBtn");
    var x=document.getElementById("topBtnAnchor");
    var y= window.scrollY;
    if (y>=1000){
        scrollBtn.className=("showTopBtn");
        x.setAttribute("href", "#pageTop");
    }
    else{
        scrollBtn.className=("hideTopBtn");
        x.removeAttribute("href");
    }
};
window.addEventListener("scroll", scrollFunc);

function closePopup(){
    document.getElementById("popupOverlay").style.display= "none";
}
function showPopup(){
    document.getElementById("popupOverlay").style.display="block";

    popupOverlay.addEventListener('click', function (event){
        if (event.target === popupOverlay){
            closePopup();
        }
    });
}


//Number formatting functions

//rounding decimal to nearest 100th
function nearest100th(number){
    let input= number;
    let output= Math.round(input*100)/100;
    return output;
}
    
//adding english formatting to numbers (Ex: 123,456.789)
function enFormat(number){
    let input= number;
    let output= input.toLocaleString('en');
    return output;
}




//Hero Calc Switch case list - gets the name of the hero based on what button the user clicks, then uses that info to call the corresponding function
function calcSkill(Hero){
    switch(Hero){
        case 'Aramis':
            calcAramisSkill();
            break;
        case 'Evan':
            calcEvanSkill();
            break;
        case 'Shelda':
            calcSheldaSkill();
           break;
        case 'Leonhardt':
            calcLeonhardtSkill();
            break;
        case 'Priya':
            calcPriyaSkill();
            break;
        case 'Daniel':
            calcDanielSkill();
            break;
        case 'Mara':
            calcMaraSkill();
            break;
        case 'ChungAh':
            calcChungAhSkill();
            break;
        case 'Lily':
            calcLilySkill();
            break;
        case 'Jol':
            calcJolSkill();
            break;
        case 'Ren':
            calcRenSkill();
            break;
        case 'Behemus':
            calcBehemusSkill();
            break;
        case 'Lyca':
            calcLycaSkill();
            break;
        case 'Rossette':
            calcRossetteSkill();
            break;
        case 'Lunaire':
            calcLunaireSkill();
            break;
        case 'Yeon':
            calcYeonSkill();
            break;
        case 'ZuoYun':
            calcZuoYunSkill();
            break;
        case 'Zupitere':
            calcZupitereSkill();
            break;
        case 'Draco':
            calcDracoSkill();
            break;
        case 'Mel':
            calcMelSkill();
            break;
        case 'Rahawk':
            calcRahawkSkill();
            break;
        case 'Hansi':
            calcHansiSkill();
            break;
        case 'Asiaq':
            calcAsiaqSkill();
            break;
        case 'Bombie':
            calcBombieSkill();
            break;
        case 'Bardrey':
            calcBardreySkill();
            break;
        case 'Alberon':
            calcAlberonSkill();
            break;
        case 'Cain':
            calcCainSkill();
            break;
        case 'Hela':
            calcHelaSkill();
            break;
        case 'Mirsyl':
            calcMirsylSkill();
            break;
        case 'Taesan':
            calcTaesanSkill();
            break;
        case 'Tia':
            calcTiaSkill();
        case 'ZuoBai':
            calcZuoBaiSkill();
            break;
        case 'Agathe':
            calcAgatheSkill();
            break;
        case 'Neria':
            calcNeriaSkill();
            break;
        case 'Haerang':
            calcHaerangSkill();
            break;
        case 'Gidnil':
            calcGidnilSkill();
            break;
        case 'Kanak':
            calcKanakSkill();
            break;
        case 'Rie':
            calcRieSkill();
            break;
        case 'Nibella':
            calcNibellaSkill();
            break;
        case 'Taebaek':
            calcTaebaekSkill();
            break;
        case 'Cathy':
            calcCathySkill();
            break;
        case 'Esthea':
            calcEstheaSkill();
            break;
        case 'Baldir':
            calcBaldirSkill();
            break;
        case 'Ian':
            calcIanSkill();
            break;
        case 'Ophelia':
            calcOpheliaSkill();
            break;
        case 'Kirdan':
            calcKirdanSkill();
            break;
        case 'Mano':
            calcManoSkill();
            break;
        case 'Victoria':
            calcVictoriaSkill();
            break;
        case 'Aenrath':
            calcAenrathSkill();
            break;
        case 'Elizabeth':
            calcElizabethSkill();
            break;
        case 'Saeryung':
            calcSaeryungSkill();
            break;
        case 'Farael':
            calcFaraelSkill();
            break;
        case 'Garam':
            calcGaramSkill();
            break;
        case 'Dandelyn':
            calcDandelynSkill();
            break;
        case 'Saras':
            calcSarasSkill();
            break;
        case 'Jinju':
            calcJinjuSkill();
            break;
        case 'Bellina':
            calcBellinaSkill();
            break;
        case 'Sargula':
            calcSargulaSkill();
            break;
        case 'Maiu':
            calcMaiuSkill();
            break;
        case 'Patros':
            calcPatrosSkill();
            break;
        case 'Ithena':
            calcIthenaSkill();
            break;
        default:
            console.log("error in selecting hero- no function found for hero named "+ Hero);
    }
}




// Skill Damage Calculator functions for each hero start below
// Note: the 'return' value is just equal to the order in which I completed the Calculators. Neria was first so calcNeriaSkill returns 1, Sargula was second so calcSargulaSkill returns 2, then I just went down the list starting with Aramis.
function calcAramisSkill(){
    let Hero="Aramis";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885*(1+(hpBonus/100));
    let spellAtk=413*(1+(spellBonus/100));
    let atk=266*(1+(atkBonus/100));
    let asp=67*(1+(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1 Range with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+<b>20</b>% attack speed ("+ asp+ " → "+ (asp+20)+ ") with Lv8 Passive";

        aspBonus+=20;
        asp=67+(67*(aspBonus/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> increased damage dealt to designated target of <i>Headshot</i> ("+ SkillDmg+ " → "+ (nearest100th(SkillDmg*1.40))+ ") with <i>Take Aim</i> active";
        SkillDmg*= 1.40;
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg*=0.9;
        output3="<br/>Shoots at three targets instead of one when using <i>Headshot</i> with <i>Quickshot</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per shot of <i>Headshot</i>"+ output1+ output2+ output3);

    return 3;
}

function calcEvanSkill(){
    let Hero="Evan";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    if (document.getElementById(Hero+"Lv8Passive").checked){
        spellBonus= spellBonus+40;
    }

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=148*(1+(atkBonus/100));
    let asp=120*(1+(aspBonus/100));
  
    SkillDmg=(20+spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Starts battle with 100% of MP with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        spellBonus+=40;
        spellAtk=118+(118*(spellBonus/100));
        let x=(20+spellAtk);
        output2="</br>+<b>40</b>% <i>Spell Power</i> ("+temp+" → "+ spellAtk+") with Lv8 Passive";
        SkillDmg=x;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Deals <b>"+ temp+ "</b> increased damage per target hit with <i>Wave Slash</i> active, maximum of <b>"+ (SkillDmg*2)+ "</b> damage";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Unleash Sword Aura</i> on normal attacks";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Crescent Slash</i>"+ output1+ output2+ output3);

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
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg*0.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> additional Protection gained ("+ SkillDmg+ " → "+ (SkillDmg*1.50)+ ") with Lv4 Passive active";
        SkillDmg*=1.50;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Iron Will</i> reduced by 20 (100 MP → 80 MP)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Obtains 2 Mighty Blocks when using <i>Iron Will</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg+(spellAtk*0.5);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Deals <b>"+ temp+ "</b> damage to enemies with <i>Explosive Will</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> protection gained per <i>Iron Will</i> use"+ output1+ output2+ output3);

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
    let hp=1770*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+250 Defence with Lv4 Passive active";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*0.25;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>20% of incoming damage is reflected back to the attacker (halved for Spell Damage) with Lv8 Passive active";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><b>"+ spellAtk+ "</b> Protection gained per enemy hit with <i>Smite</i> with <i>Barrier</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Pushed enemies back by 1 block instead of stunning them with <i>Smite</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Smite</i> attack"+ output1+ output2+ output3);

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
    let hp=708*(1+(hpBonus/100));
    let spellAtk=384*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1 second for stun duration of <i>Blizzard</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Blizzard</i> reduced by 20 with Lv8 Passive (120 MP → 100 MP)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.33;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per second to enemies within the icy area of <i>Intense Cold</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Freezes with <b>"+ temp+ "</b> HP for 2 seconds when taking lethal damage for the first time in battle";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Blizzard</i> attack"+ output1+ output2+ output3);

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
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=50+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+2 seconds for stun duration of <i>Judgement of Light</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=hp*0.20;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Final Max HP increased by <b>"+ temp+ "</b> with Lv8 Passive ("+ hp+ " → "+ (hp*1.20)+ ") ";
        hp*=1.20
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=atk*3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies on the first normal attack with <i>Divine Bash</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Heals self for <b>"+ temp+ "</b> HP per second for 3 seconds with <i>Self Recovery</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by <i>Judgement of Light</i> attack"+ output1+ output2+ output3);

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
    let hp=826*(1+(hpBonus/100));
    let spellAtk=354*(1+(spellBonus/100));
    let atk=77*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1.5 seconds for stun duration of <i>Backstab</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Gains 1 Mighty Block after using <i>Backstab</i>";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+30% damage taken by <i>Backstab</i> target for 10 seconds (halved for bosses) with <i>Expose Weakness</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp1=hp*0.20;
        temp1= nearest100th(temp1);
        temp1= enFormat(temp1);
        output3="<br/>Final Max HP on Mara -20% ("+ hp+ " → "+ (hp-temp1)+ ") with <i>Phantom Illusion</i> active"
        hp=(hp-temp1);
        output3+="<br/>Stats for Mara's Illusion: [HP: "+ (hp/10)+"] [Attack: "+ (atk/10)+ "] [Spell Power: "+ (spellAtk/10)+ "]";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Backstab</i> attack"+ output1+ output2+ output3);

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
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=94*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg1=10+spellAtk;
    let SkillDmg2=SkillDmg1*2.5;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="<br/>-1 <i>Horizontal Dragon Edge</i> needed to cast <i>Azure Dragon Slash</i> (3 → 2)";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg1*0.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>+<b>60</b>% Spell HP Drain for <i>Azure Dragon Slash</i>";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg2*1.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt from the instant <i>Azure Dragon Slash</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg1+(SkillDmg1*10);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Advent of Thunder Dragon</i> with <i>Advent of Thunder Dragon</i> active";
    }
    
    SkillDmg1= nearest100th(SkillDmg1); //rounding to nearest 100th
    SkillDmg1= enFormat(SkillDmg1); //adding commas to the number

    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ SkillDmg1+ "</b> damage dealt per <i>Horizontal Dragon Edge</i> attack<br/><b>"+ SkillDmg2+ "</b> damage dealt per <i>Azure Dragon Slash</i> attack"+ output1+ output2+ output3);

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
    let hp=590*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=59*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=20+spellAtk;
    let hp2=hp*1.5;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= hp*2;
        hp2= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Sha-Sha's HP is 200% of Lily's instead of 150% with Lv4 Passive ("+ (hp*1.5)+ " → "+ hp2+ ")";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Summon Golem</i> & <i>Vitality of Nature</i> both reduced by 30 with Lv8 Passive (<i>Summon Golem</i>: 130 MP → 100 MP) (<i>Vitality of Nature</i>: 60 → 30)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Lily recovers 15 MP per second while Sha-Sha is not summoned with <i>Communing with Nature</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by Sha-Sha's charge attack with <i>Charge!</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Sha-Sha's stats: [HP: "+ hp2+ "] [Attack: "+ (atk*1.5)+ "]<br/> Heals Sha-Sha for <b>"+ SkillDmg+"</b> Health per <i>Vitality of Nature</i> use"+ output1+ output2+ output3);

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
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Starts battle with 90% of MP with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br+1 Second for <i>Avatar</i> skill duration with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+1 Second duration time of <i>Avatar</i> when Jol kill an enemy with <i>Avatar</i> while <i>Eternity</i> is active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Moves behind the closest enemy within 4 range when using <i>Avatar</i> with <i>Salvation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Avatar</i> attack"+ output1+ output2+ output3);

    return 12;
}

function calcRenSkill(){
    let Hero="Ren";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=142*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+100% Movement Speed for 1 second after killing a target with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+1 Mighty Block per target when Full Bloom is used (max +2) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Starts with +2 attack count for <i>Full Bloom</i>, max <i>Full Bloom</i> attack count increases to 10 (6 → 10) with <i>Full Blossom</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*6;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Sanguine Flowers</i> with <i>Sanguine Flowers</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Full Bloom</i> attack stack"+ output1+ output2+ output3);

    return 13;
}

function calcBehemusSkill(){
    let Hero="Behemus";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=165*(1+(spellBonus/100));
    let atk=77*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=40+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        SkillDmg+= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="<br/>Pushes enemies back by 1 extra block with </i>Reckless Protection</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br><b>"+ temp+ "</b> protection granted by Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+350 DEF after using <i>Reckless Protection</i> for 4 seconds with <i>Empire's Provocation</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Reckless Protection</i> damage range is fixed to 2, pushes enemies back by 2/3/4/5 blocks when using <i>Reckless Protection</i> with <i>Powerful Tremor</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Reckless Protection</i> attack"+ output1+ output2+ output3);

    return 14;
}

function calcLycaSkill(){
    let Hero="Lyca";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp1=885*(1+(hpBonus/100));
    let spellAtk1=266*(1+(spellBonus/100));
    let atk1=142*(1+(atkBonus/100));
    let asp1=125*(1+(aspBonus/100));

    let hp2=(hp1*2.8);
    let spellAtk2= (spellAtk1);
    let atk2=(atk1*1.50);
    let asp2=(asp1);
  
    SkillDmg=spellAtk2;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Lyca's DEF increases by 300 while in Werewolf form with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br><i>Wild Fury</i> does additional damage equal to the amount of Protection destroyed with Lv8 Passive>";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=hp*0.20;
        temp= enFormat(nearest100th(temp));

        output3="<br/>+25 MP recovery on normal attacks in both forms and generates Protection equal to 20% of Max HP ("+ temp+ ") after using <i>Wild Fury</i> with <i>Wild Nature</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Wild Fury</i>'s target is changed to the enemy with the highest tier. Lyca's first 3 normal attacks after using <i>Wild Fury</i> have +200% increased <i>Attack Speed</i> with <i>Obsession</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ SkillDmg+ "</b> damage dealt per <i>Wild Fury</i> attack"+ output1+ output2+ output3);

    return 15;
}

function calcRossetteSkill(){
    let Hero="Rossette";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826*(1+(hpBonus/100));
    let spellAtk=177*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Rossette takes 20% less damage from her current target with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=atk*2.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Maximum of <b>"+ temp+ "</b> additional damage dealt on normal attacks with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+30% damage taken by <i>Giant Smite</i> target for 10 seconds (halved for bosses) with <i>Expose Weakness</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>+30% Crit damage after using <i>Giant Smite</i> until a target is killed with <i>Giant Smite</i>, then the Crit damage bonus is reset and Rossette is fully healed";
    }

    let maxDmg=spellAtk*3;
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Minimum of <b>"+ output+ "</b> damage dealt per <i>Giant Smite</i> attack<br/>(Maximum of <b>"+ maxDmg+ "</b> damage)"+ output1+ output2+ output3);

    return 16;
}

function calcLunaireSkill(){
    let Hero="Lunaire";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=15+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br><i>Blessing of the Blue Moon</i> grants +1 Mighty Block with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Buff effects remain active for 2 seconds after <i>Blessing of the Blue Moon</i> ends with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Lunaire recovers 100% MP at the beginning of the battle if the target is behind her, and grants +20% Movement Speed to the target with <i>Swift Blessing</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=0;
        output3="<br/>Grants +2 Mighty Blocks instead of Protection to <i>Blessing of the Blue Moon</i> target with <i>Protection of the Moon</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    let statBoost=(atk+spellAtk)*0.90;
    statBoost= enFormat(nearest100th(statBoost));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ statBoost+ "</b> converted into the target hero's base stats while <i>Blessing of the Blue Moon</i> is active<br/><b>"+ output+ "</b> protection granted to target hero"+ output1+ output2+ output3);

    return 17;
}

function calcYeonSkill(){
    let Hero="Yeon";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Applies Spell CRIT to the healing from <i>Calm and Stormy</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Up to 2 waves of Calm and Stormy can be on the battlefield at the same time with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies in the the 5x5 range of <i>Overflow</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=(SkillDmg*0.25);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Each <i>Calm and Stormy</i> hit does <b>"+ temp+ "</b> less damage/healing ("+ SkillDmg+ " → "+ (SkillDmg-temp)+ ") with <i>Backflow</i> active";
        SkillDmg=SkillDmg-temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt/HP healed per <i>Calm and Stormy</i> hit"+ output1+ output2+ output3);

    return 18;
}

function calcZuoYunSkill(){
    let Hero="ZuoYun";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1062*(1+(hpBonus/100));
    let spellAtk=59*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillAsp=(50+ spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp=SkillAsp+30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+<b>30</b>% attack speed during <i>Enrage</i> ("+ SkillAsp+ " → "+ temp+ ") with Lv4 Passive";
        SkillAsp+=30;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+20% Physical HP Drain with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+1 Attack Count for every 3 attacks during <i>Enrage</i> with <i>Fury</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>+1% Physical HP Drain for each 1.5% HP lost during <i>Enrage</i> with <i>Craving</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillAsp); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>% <i>Attack Speed</i> increase while <i>Enrage</i> is active"+ output1+ output2+ output3);

    return 19;
}

function calcZupitereSkill(){
    let Hero="Zupitere";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=65*(1+(spellBonus/100));
    let atk=53*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= 5+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> damage dealt to the first target of <i>Crackle</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+1 target of Crackle with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.15;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Double the target of <i>Crackle</i> on every third cast. Can be cast again to the attacked target with <i>Infinite Diffusion</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        spellBonus2+=80;
        spellAtk2=65+(65*(spellBonus2/100));
        let temp=SkillDmg*1.80;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Spell Power +80% ("+ spellAtk+ " → "+ (spellAtk*1.80)+ ")with <i>Overload</i> active";
        spellBonus+=80;
        spellAtk=65+(65*(spellBonus/100));
        SkillDmg=5+spellAtk;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt <i>Crackle</i> damage instance"+ output1+ output2+ output3);

    return 20;
}

function calcDracoSkill(){
    let Hero="Draco";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=65*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= 10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Recovers MP when all enemies are killed with <i>Flamebreath</i> in proportion to skill damage count with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+50% <i>Spell Power</i> HP Drain with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*2.35;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Gradually increases damage of <i>Flamebreath</i> by 15% while using skill, max +235% damage (+"+ temp+ " damage) with <i>Ignite</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);

        let spellAtk2=65+(65*((spellBonus+70)/100));
        let temp2=spellAtk2;
        temp2= nearest100th(temp2);
        temp2= enFormat(temp2);
        output3="<br/>MP Cost of <i>Ignite</i> reduced by 45 (70 → 25), +70% <i>Spell Power</i> ("+ temp+ " → "+ temp2+ "), and <i>Flamebreath</i> damage instances reduced to 4 (10 → 4) with <i>Concentrated Flame</i> active";
        spellBonus+=70;
        spellAtk=65+(65*(spellBonus/100));
        SkillDmg=10+spellAtk;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Flamebreath</i> damage instance"+ output1+ output2+ output3);

    return 21;
}

function calcMelSkill(){
    let Hero="Mel";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=177*(1+(atkBonus/100));
    let asp=83*(1+(aspBonus/100));
  
    let SkillDmg= 0+spellAtk;
    let SkillDmg2= 125+(spellAtk*0.02);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+30% Movement Speed for Mel with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+2 seconds for stun duration of <i>Holy Blade Garna</i>'s shockwave attack with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk*0.33;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt from the shockwaves generated on attacks with <i>Wave of the Holy Blade</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Holy Blade of Garna</i> no longer creates a shockwave, lasts for an additional +2.5 seconds, +500 DEF while skill is active with <i>Unleash</i> active";
        SkillDmg=0;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Holy Blade Garna</i> shockwave<br/><b>"+ SkillDmg2+ "</b> damage dealt on normal attacks during <i>Holy Blade of Garna</i>"+ output1+ output2+ output3);

    return 22;
}

function calcRahawkSkill(){
    let Hero="Rahawk";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944*(1+(hpBonus/100));
    let spellAtk=177*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg= 20+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+35% Attack Speed after using <i>Hunt Command</i> (max +105%) with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>+10% damage taken by <i>Hunt Command</i> target for 10 seconds (max 2 stacks, halved for bosses) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by the second <i>Hunt Command</i> with <i>Double Hunt</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*2
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Hunt Command</i> ("+ SkillDmg+ " → "+ temp+ ") with <i>Rigid Claws</i> active";
        SkillDmg= temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per damage instance of <i>Hunt Command</i>"+ output1+ output2+ output3);

    return 23;
}

function calcHansiSkill(){
    let Hero="Hansi";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=71*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));

    let arrowDmg=atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+15% Physical CRIT chance during <i>Rapid Arrows</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let bowsEquipped= document.getElementById("HansiBowAmount").value;
        let bonusDmg= bowsEquipped*15;
        output2="</br><b>"+ bonusDmg+ "</b>% damage increase from "+ bowsEquipped+ " bows equipped ("+ nearest100th(arrowDmg)+ " → "+ (nearest100th(arrowDmg*(1+(bonusDmg/100))))+ ") with Lv8 Passive";
        arrowDmg=arrowDmg*(1+(bonusDmg/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= arrowDmg*2.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Rainstorm</i> arrow";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= arrowDmg*1.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per arrow ("+ nearest100th(arrowDmg)+ " → "+ temp+ ") while <i>Concentrate</i> is active";
    }
    
    let output= nearest100th(arrowDmg);
    output= enFormat(output);

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per arrow shot"+ output1+ output2+ output3);

    return 24;
}

function calcAsiaqSkill(){
    let Hero="Asiaq";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=826*(1+(hpBonus/100));
    let spellAtk=413*(1+(spellBonus/100));
    let atk=59*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg1=50+spellAtk;
    let SkillDmg2=12.5+(spellAtk/4);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Stuns linked enemies for 1.5 seconds if a linked enemy dies with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+50% <i>Attack Speed</i> for Asiaq while <i>Soul Link</i> is active with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg1*0.10;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+10% damage dealt to targets linked with <i>Soul Link</i> ("+ SkillDmg1+ " → "+ temp+ ") with <i>Cursed Link</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Links an additional target when using <i>Soul Link</i> with <i>Another Link</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> shared damage threshold to break the chains of <i>Soul Link</i><br/><b>"+ SkillDmg2+ "</b> additional damage dealt to linked targets when the chains break"+ output1+ output2+ output3);

    return 25;
}

function calcBombieSkill(){
    let Hero="Bombie";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=59*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=atk;
    let skillAoe=0;
    let skillAtkSpd= asp*1.6
    let skillDuration= 3+(spellAtk/50);
    let additionalTargetDmg=0;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        skillAoe= SkillDmg/2;
        output1="</br><b>"+ skillAoe+ "</b> damage dealt to enemies within 3x3 range of the target";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        additionalTargetDmg= spellAtk;
        output2="</br><b>"+ additionalTargetDmg+ "</b> additional spell damage dealt to target";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let SkillDmg2= SkillDmg*3;
        SkillDmg2= nearest100th(SkillDmg2);
        SkillDmg2= enFormat(SkillDmg2);
        output3="<br/><b>"+ SkillDmg2+ "</b> damage dealt by <i>Mega Bomb</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let x=SkillDmg*1.65;
        let temp=(x-SkillDmg);
        SkillDmg=SkillDmg-temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> less damage dealt per bomb due to <i>Bang Snaps</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage per bomb thrown during <i>Rain of Bombs</i>, has an <i>Attack Speed</i> of <b>"+ skillAtkSpd+ "</b>%, and skill lasts for <b>"+ skillDuration+ "</b> seconds"+ output1+ output2+ output3);

    return 26;
}

function calcBardreySkill(){
    let Hero="Bardrey";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=30*(1+(spellBonus/100));
    let atk=71*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=(10+spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        SkillDmg+=5;
        output1="</br><b>5</b> additional MP Recovered by allies from Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        aspBonus+=20;
        let asp2=100+(100*(aspBonus/100));
        output2="</br><b>"+ asp2+ "</b>% <i>Attack Speed</i> from Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><i>Amplify</i> does not affect MP Recovery of allied heroes";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Discord</i> does not affect MP Recovery of allied heroes";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> MP recovered by allies within range of <i>Lilting Melody</i>"+ output1+ output2+ output3);

    return 27;
}

function calcAlberonSkill(){
    let Hero="Alberon";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=708*(1+(hpBonus/100));
    let spellAtk=236*(1+(spellBonus/100));
    let atk=59*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        SkillDmg+= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> additional HP Recovered by allies from Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*0.25;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Maximum of <b>"+ temp+ "</b> protection granted by Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.15;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> Physical Damage bonus granted to allies healed by <i>Radiance of Life</i> with <i>Hymn</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg+(SkillDmg*0.25);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        SkillDmg= temp;
        output3="<br/>Heals the ally with the lowest HP instead of multiple allies with <i>Salvation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> health recovered by allies healed with <i>Radiance of Life</i>"+ output1+ output2+ output3);

    return 28;
}

function calcCainSkill(){
    let Hero="Cain";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1062*(1+(hpBonus/100));
    let spellAtk=177*(1+(spellBonus/100));
    let atk=71*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=5+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>When a target is killed with <i>Circus of Death</i>, deals excess damage to enemies within 2 blocks as special damage with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*1.5;
        temp= enFormat(nearest100th(temp));
        output2="</br>+50% final damage dealt by the first <i>Circus of Death</i> after the beginning of battle ("+ enFormat(nearest100th(SkillDmg))+ " → "+ temp+ ") with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>50% chance to obtain a Tier 1 equipment when a target is killed by <i>Circus of Death</i> with <i>Extort</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.80
        temp= enFormat(nearest100th(temp));
        output3="<br/>Minimum of <b>"+ temp+ "</b> damage dealt by the instant <i>Circus of Death</i> from <i>Solo Dance</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Minimum of <b>"+ output+ "</b> damage dealt per <i>Circus of Death</i> attack"+ output1+ output2+ output3);

    return 29;
}

function calcHelaSkill(){
    let Hero="Hela";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=767*(1+(hpBonus/100));
    let spellAtk=177*(1+(spellBonus/100));
    let atk=0*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg1=15+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg1*0.50;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+50% final damage to center block of <i>Meteor</i> ("+ SkillDmg1+ " → "+ (SkillDmg1+temp)+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let X=0;
        let Y=0;
        while (temp>0){
            temp= temp-10
            if (temp>=0){
                Y=Y+12;
                console.log(temp);
            }
        }
        X= spellAtk;
        X= nearest100th(X);
        X= enFormat(X);

        let temp1= 236+(236*((spellBonus+Y)/100));
        temp1= nearest100th(temp1);
        temp1= enFormat(temp1);
        output2="</br>+12% <i>Spell Power</i> for every 10% <i>Attack Speed</i> exceeding 100% ("+ X+ " → "+ temp1+ ") with Lv8 Passive";
        spellBonus+=Y
        spellAtk=236+(236*(spellBonus/100));
        SkillDmg1=15+spellAtk;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg1*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Supernova</i> meteor with <i>Supernova</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg1*1.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+50% damage dealt by <i>Summon Meteor</i> ("+ SkillDmg1+ " → "+ temp+ ") with <i>Focus Fire</i> active";
        SkillDmg1*= 1.5;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Summon Meteor</i> meteor"+ output1+ output2+ output3);

    return 30;
}

function calcMirsylSkill(){
    let Hero="Mirsyl";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=94*(1+(atkBonus/100));
    let asp=94*(1+(aspBonus/100));
  
    let SkillHealing=30+spellAtk;
    let SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillHealing*1.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+30% health restored to allies by <i>Verdant Garden</i> ("+SkillHealing+" → "+temp+") with Lv4 Passive";
        SkillHealing*=1.3;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>+30% damage taken by enemies attacked by Mirsyl within range of <i>Verdant Garden</i> for 5 seconds (halved for bosses) with Lv8 Passive"
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.15;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Removes crowd control effects on allies within range of <i>Verdant Garden</i> and grants them crowd control immunity for 1 second with <i>Dew of Purification</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=spellAtk*0.35;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies and health restored to allies within range of <i>Verdant Garden</i> upon skill use with <i>Early Spring</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillHealing); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg= nearest100th(SkillDmg);
    SkillDmg= enFormat(SkillDmg);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> healing per second from <i>Verdant Garden</i><br/><b>"+ SkillDmg+ "</b> damage dealt per second to enemies by <i>Verdant Garden</i>"+ output1+ output2+ output3);

    return 31;
}

function calcTaesanSkill(){
    let Hero="Taesan";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1180*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=177*(1+(atkBonus/100));
    let asp=83*(1+(aspBonus/100));
  
    let SkillDmg=30+spellAtk;
    let SkillProtection=hp*0.50;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>After using <i>Power of Great Tiger</i>, the next normal attack deals damage to enemies within 3x3 range in front with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>Spell Damage and Physical Damage equal to 20% of current Protection is added to <i>Power of Great Tiger</i> and the normal attack inflicted after skill use respectively with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Tiger Strike</i> attack with <i>Tiger Strike</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Tenacity</i> does not impact Taesan's skill's effect";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillProtection= nearest100th(SkillProtection);
    SkillProtection= enFormat(SkillProtection);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Power of the Great Tiger</i> attack<br/><b>"+ SkillProtection+ "</b> protection gained per <i>Power of the Great Tiger</i> use"+ output1+ output2+ output3);

    return 32;
}

function calcTiaSkill(){
    let Hero="Tia";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=148*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+20% final damage dealt to enemies within 3 blocks with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Next <i>Gust</i> skill shoots double the amount of arrows when the target is killed Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><i>Avoid Risk</i> does not impact Tia's skill behavior";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Gust</i>'s first arrow pushes targets back by 2 blocks if they're not within 3 blocks of Tia with <i>Breeze</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    let SkillDmg2=SkillDmg*1.40;
    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Gust</i> arrow if the target is within 3 blocks<br/><b>"+ SkillDmg2+"</b> damage dealt per <i>Gust</i> arrow if the target is not within 3 blocks"+ output1+ output2+ output3);

    return 33;
}

function calcZuoBaiSkill(){
    let Hero="ZuoBai";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1357*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= atk+spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Increases attack by <b>"+ enFormat(nearest100th(spellAtk))+ "</b> ("+ enFormat(nearest100th(atk))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>After using <i>Crimson Slash</i>, next 3 normal attacks deal additional <b>"+ temp+ "</b> spell damage with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Does an additional <i>Crimson Slash</i> attack when an enemy is killed with <i>Crimson Slash</i>, and takes 25% less damage during <i>Crimson Slash</i> with <i>Consecutive Slashes</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=atk*0.80;
        output3="<br/><b>"+ enFormat(nearest100th(temp))+ "</b> additional damage dealt by each <i>Crimson Slash</i> attack ("+ enFormat(nearest100th(SkillDmg))+ " → "+ enFormat(nearest100th((SkillDmg+temp)))+") with <i>Advanced Crimson Slash</i> active";
        SkillDmg+=temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Crimson Slash</i> attack"+ output1+ output2+ output3);

    return 34;
}

function calcAgatheSkill(){
    let Hero="Agathe";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=2065*(1+(hpBonus/100));
    let spellAtk=59*(1+(spellBonus/100));
    let atk=100*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let skillDuration=3+(spellAtk/10);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>5x5 radius for <i>Protection of Radiance</i> (2x2 → 5x5) with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Recovers 50% of max MP at the start of battle Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=hp*0.20;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> health restored to allies when Agathe dies with <i>Sacrifice</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=0;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Without the damage taken by Agathe during <i>Protection of Radiance</i>, it's not possible to calculate the damage bonus granted to allys with <i>Retribution</i> active";
    }
    
    let finalSkillDmg= nearest100th(skillDuration); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> seconds duration for <i>Protection of Radiance</i>"+ output1+ output2+ output3);

    return 35;
}

function calcNeriaSkill(){
    let Hero="Neria";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=826*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=94*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));

    let SkillDmg=(300+(spellAtk/10))*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg*1.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Up to +60% additional damage dealt per arrow of <i>Annihilation Time</i> ("+ enFormat(nearest100th(SkillDmg))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let X= 0;
        while (temp>0){
            temp-=3;
            if (temp>=0){
                X+=0.01;
            }
        }
        if (X>0.50){
            X= 0.50;}

        output2="</br>Deals <b>"+ enFormat(nearest100th((SkillDmg*X)))+ "</b> additional damage from a <b>"+ (X*100)+ "</b>% damage increase ("+enFormat(nearest100th(SkillDmg)) +" → "+ enFormat(nearest100th((SkillDmg*(1+X))))+") with Lv8 Passive";
        SkillDmg=SkillDmg*(1+X);
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Maximum of +3 additional attacks for <i>Annihilation Time</i> with <i>Everlasting Night</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Shroud of Night</i> prevents Neria from being targeted, but she can still take damage from AoE attacks";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Annihilation Time</i> attack"+ output1+ output2+ output3);
    return 1;
}

function calcHaerangSkill(){
    let Hero="Haerang";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=826*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    let SkillDmg=10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1.25 seconds for stun duration for the first two concentrated waves of <i>Wave Catcher</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Recovers 50% of MP at the start of battle";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by wave ripples with <i>High Tide</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Freezes the first two enemies hit with <i>Wave Catcher</i> with <i>Frozen Sea</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Wave Catcher</i> concentrated wave"+ output1+ output2+ output3);

    return 36;
}

function calcGidnilSkill(){
    let Hero="Gidnil";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));

    let SpellBlocks= 2;
  
    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>When Gidnil's Spell Block nullifies an enemies movement-restricting skill, stuns that enemy for 1.5 seconds with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+150 DEF for 3 seconds when using <i>Holy Protection</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Takes 50% less damage from enemy skills for 3 seconds when all Gidnil's Spell Blocks are destroyed with <i>Indomitable</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= SpellBlocks;
        output3="<br/>Gidnil receives <b>"+ (temp/2)+ "</b> Spell Blocks ("+ temp+ " → "+ (temp/2)+ ") and gives <b>"+ (temp/2)+ "</b> Spell Blocks to allies within 7x7 range when using <i>Holy Protection</i> with <i>Holy Expansion</i> active";
        SpellBlocks/=2;
    }
        
    document.getElementById(Hero+"SkillDmg").innerHTML=("Gidnil gains <b>"+ SpellBlocks+ "</b> Spell Blocks from <i>Holy Protection</i>"+ output1+ output2+ output3);

    return 37;
}

function calcKanakSkill(){
    let Hero="Kanak";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= spellAtk;
    let SkillDmg2= spellAtk*0.40;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Transfers an enemy's Curse Stacks to a nearby enemy when Kanak kills them with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Kanak takes 30% less damage from enemies who have a Curse Stack with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>When using <i>Soul Rip</i> on a target with Curse Stacks, grants 1 Curse Stack each to 2 nearby enemies with <i>Remnant of Spirits</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Resonance damage incrased from 40% → 70% of <i>Spell Power</i> ("+ enFormat(nearest100th(SkillDmg2))+ " → "+ enFormat(nearest100th((spellAtk*0.70)))+ ") with <i>Spirit's Curse</i> active";
        SkillDmg2= (spellAtk*0.70);
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2=enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt to target when giving them a Curse Stack<br/><b>"+ SkillDmg2+ "</b> damage dealt per Curse Stack on <i>Soul Rip</i> skill use"+output1+  output2+ output3);

    return 38;
}

function calcRieSkill(){
    let Hero="Rie";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=826*(1+(hpBonus/100));
    let spellAtk=177*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let chargeDmg=spellAtk;
    let dollAtk= spellAtk/10;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> charge damage dealt by the Doll summoned last ("+ enFormat(nearest100th(spellAtk))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Rie recovers 15 MP when a doll is destroyed with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies within a 3x3 range of a Doll when it's destroyed with <i>Order: Sacrifice</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=dollAtk*2.50;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+250% damage dealt by doll's normal attacks ("+ enFormat(nearest100th(dollAtk))+ " → "+ temp+"), -50% charge damage dealt by dolls ("+ enFormat(nearest100th(chargeDmg))+ " → "+ enFormat(nearest100th(chargeDmg*0.50))+ "), and grants 1 Mighty Block to dolls when summoned with <i>Command: Modification</i> active";
        dollAtk*=2.50;
        chargeDmg*-0.50;
    }
    
    let finalSkillDmg= nearest100th(chargeDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    dollAtk=enFormat(nearest100th(dollAtk));

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per doll charge attack<br/><b>"+ dollAtk+ "</b> damage dealt per Doll's normal attack"+ output1+ output2+ output3);

    return 39;
}

function calcNibellaSkill(){
    let Hero="Nibella";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1357*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=148*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let chargeDmg=20+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Nibella recovers 100% MP on normal attacks for the first 4 seconds of battle with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br><b>"+ temp+ "</b> damage dealt on the first normal attack after using <i>Desert Charge</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt on the next 3 normal attacks in a 5x5 range after using <i>Desert Charge</i> with <i>Sandsword Gale</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=chargeDmg*0.70;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Desert Charge</i> ("+ enFormat(nearest100th(chargeDmg))+ " → "+ temp+ ") with <i>Recurrence</i> active";
        chargeDmg*=0.70;
    }
    
    let finalSkillDmg= nearest100th(chargeDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Desert Charge</i> damage instance"+ output1+ output2+ output3);

    return 40;
}

function calcTaebaekSkill(){
    let Hero="Taebaek";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1652*(1+(hpBonus/100));
    let spellAtk=59*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Limits provoking range of <i>White Tiger Kick</i> to 5x5 with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Taebaek takes 50% less damage from provoked enemies for 4 seconds with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by the shockwave created after <i>White Tiger Kick</i> ends with <i>Lightning Kick</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.75;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>-25% final max HP for Taebaek ("+ enFormat(nearest100th(hp))+ " → "+ temp+ ") with <i>No Retreat</i> active";
        hp*=0.75;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by <i>White Tiger Kick</i><br/>Minimum of <b>"+ output+ "</b> damage dealt at the end of <i>White Tiger Kick</i>"+ output1+ output2+ output3);

    return 41;
}

function calcCathySkill(){
    let Hero="Cathy";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=35*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=atk;
    let ricochetDmg= SkillDmg*0.70;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+2 attack counts for <i>Dancing Bullet</i> when Cathy kills an enemy during <i>Dancing Bullet</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let Y= 0;
        while (temp>0){
                temp-=30;
            if (temp>=0){
                Y++;
            }
        }
        output2="</br><i>Dancing Bullet</i> has <b>"+ Y+ "</b> additional attack counts with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by the final hit of <i>Dancing Bullet</i> with <i>Finale</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.70;
        temp= nearest100th(temp);
        temp= enFormat(temp);

        let temp2= SkillDmg*1.40;
        temp2= nearest100th(temp2);
        temp2= enFormat(temp2);

        output3="<br/>Ricochet damage increased from 70% → 140% ("+ temp+ " → "+ temp2+ ") with <i>Strafe</i> active";

        ricochetDmg=SkillDmg*1.40;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    ricochetDmg=enFormat(nearest100th(ricochetDmg));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Dancing Bullet</i> hit<br/><b>"+ ricochetDmg+ "</b> damage dealt per <i>Dancing Bullet</i> ricochet hit"+ output1+ output2+ output3);

    return 42;
}

function calcEstheaSkill(){
    let Hero="Esthea";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=117*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= atk*1.60;
    let DmgBonus= atk*1.60;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Target ally of <i>Sacred Censer</i> has +2 Knockback on their next normal attack with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let equipmentNumber= document.getElementById("EstheaEquipmentAmount").value;
        let extraAsp=35*equipmentNumber;

        //gotta use parseInt because for some reason aspBonus is being treated like a string here but nowhere else when I try to add (aspBonus+extraAsp) (it's returning 00 instead of 0) which is throwing off the calculating of Esthea's attack speed
        aspBonus=parseInt(aspBonus);

        aspBonus+=extraAsp;
        console.log(aspBonus);
        let asp2=100*(1+(aspBonus/100));

        output2="</br><b>"+ extraAsp+ "</b>% <i>Attack Speed</i> increase from <b>"+ equipmentNumber+ "</b> gear equipped ("+ enFormat(nearest100th(asp))+ "% → "+ enFormat(nearest100th(asp2))+ "%) with Lv8 Passive";
        
        asp=100*(1+(aspBonus/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Esthea casts <i>Sacred Cencer</i> on herself upon every third <i>Sacred Censer</i> with <i>Spreading Flame</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= atk*0.96;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> protection granted to <i>Sacred Censer</i> target instead of attack bonus with <i>Touch of Embrace</i> active";
        DmgBonus= 0;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    DmgBonus=enFormat(nearest100th(DmgBonus));

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> health restored to target ally per <i>Sacred Censer</i> use<br/><b>"+ DmgBonus+ "</b> damage added to the target ally's next normal attack per <i>Sacred Censer</i> use"+ output1+ output2+ output3);

    return 43;
}

function calcBaldirSkill(){
    let Hero="Baldir";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    //Baldir Base Form
    let hp1=885*(1+(hpBonus/100));
    let spellAtk1=83*(1+(spellBonus/100));
    let atk1=118*(1+(atkBonus/100));
    let asp1=83*(1+(aspBonus/100));

    //Baldir Nature's Fury Form
    let hp2=2213*(1+(hpBonus/100));
    let spellAtk2=83*(1+(spellBonus/100));
    let atk2=118*(1+(atkBonus/100));
    let asp2=100*(1+(aspBonus/100));

    //Baldir Eternal Wisdom Form
    let hp3=885*(1+(hpBonus/100));
    let spellAtk3=248*(1+(spellBonus/100));
    let atk3=118*(1+(atkBonus/100));
    let asp3=125*(1+(aspBonus/100));
  
    let SkillDmg1=spellAtk2+atk2;
    let SkillDmg2= 20+spellAtk3;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Recovers 100% MP at the start of battle with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Energy of the Forest</i> reduced by 30 (75 → 45) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp1=hp2*0.25;
        temp1= enFormat(nearest100th(temp1));
        let temp2=spellAtk3*0.75;
        output3="<br/><b>"+ temp1+ "</b> health recovered by Nature's Fury Baldir and <b>"+ temp2+ "</b> additional spell damage dealt by Eternal Wisdom Baldir when they attack an enemy with a mark generated by <i>Echo of the Forest</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp2*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Gains <b>"+ temp+ "</b> protection when using skill with <i>Solitude of the Forest</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2=enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Timber Split</i> attack<br/><b>"+ SkillDmg2+ "</b> damage dealt per <i>Energy of the Forest</i> attack"+ output1+ output2+ output3);

    return 44;
}

function calcIanSkill(){
    let Hero="Ian";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1180*(1+(hpBonus/100));
    let spellAtk=47*(1+(spellBonus/100));
    let atk=177*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=(100+(spellAtk/10))*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Deals 50% additional damage to the main target of <i>Stride of Steel</i> ("+ enFormat(nearest100th(SkillDmg))+ " → "+ enFormat(nearest100th((SkillDmg*1.50)))+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>-0.1 seconds for concentration time of <i>Stride of Steel</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.30;
        temp= enFormat(nearest100th(temp));
        output3="<br/>When a new target is designated by <i>Stride of Steel</i>, range is changed to 5x5 and damage is increased by 30% (+"+ temp+ " damage) with <i>Fatal Blow</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*1.15;
        let temp2=temp*1.15;
        let temp3= temp2*1.15;

        temp= enFormat(nearest100th(temp));
        temp2= enFormat(nearest100th(temp2));
        temp3= enFormat(nearest100th(temp3));

        output3="<br/>Removes the area damage of <i>Stride of Steel</i>, and each hit deals 15% increased final damage (1st hit: "+ temp+ ", 2nd hit: "+ temp2+ ", 3rd hit: "+ temp3+ ", etc.) with <i>Confrontation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Stride of Steel</i> damage instance"+ output1+ output2+ output3);

    return 45;
}

function calcOpheliaSkill(){
    let Hero="Ophelia";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=106*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp=spellAtk*0.06;
        temp=enFormat(nearest100th(temp));
        let temp2= spellAtk*3;
        temp2=enFormat(nearest100th(temp2));
        output1="</br>Increases <i>Spell Power</i> by +6% (+"+ temp+ ") every time <i>Blood and Soul</i> damages an enemy, max of +300% (+"+ temp2+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+2% Crowd Control resistance whenever <i>Blood and Soul</i> damages an enemy (max of +100%) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= spellAtk*0.50;
        temp= enFormat(nearest100th(temp));
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Bloodstained Land</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>If <i>Blood and Soul</i> dealt damage to enemies 50 times, revives with 100% HP and MP 1 time per battle when killed with <i>Second Advent</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Blood and Soul</i> damage instance"+ output1+ output2+ output3);

    return 46;
}

function calcKirdanSkill(){
    let Hero="Kirdan";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1357*(1+(hpBonus/100));
    let spellAtk=106*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=40+spellAtk;
    let SkillDmgCnt= 0;

    let temp=asp-100;
    while (temp>0){
        temp-=18;
        if(temp>=0)
            SkillDmgCnt++;
    }

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Immune to Crowd Control during <i>Storm Assault</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Increases Movement Speed by 70% during <i>Storm Assault</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Gains +500 DEF and +50% Spell HP Drain when HP is at 30% or lower with <i>Eye of the Storm</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Gains 2 Mighty Blocks upon using <i>Storm Assault</i>, and gains another Mighty Block when destroying the Mighty Block of an enemy during <i>Storm Assault</i> (excluding bosses) with <i>Salvation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Storm Assault</i> damage instance<br/><i>Storm Assault</i> gains <b>"+ SkillDmgCnt+ "</b> additional attacks from <b>"+ (asp-100)+ "</b>% <i>Attack Speed</i> over 100%"+ output1+ output2+ output3);

    return 47;
}

function calcManoSkill(){
    let Hero="Mano";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=236*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmgBonus=atk;
    let SkillHealing= spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br><i>Oath of Protection</i> grants target ally +30% increased Movement Speed with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br><i>Oath of Protection</i> grants target ally +300 DEF with Lv4 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=atk*1.30;
        temp= enFormat(nearest100th(temp));

        output3="<br/>Gains 100% of MP at the start of battle if the target ally is a higher tier than Mano, and +30% increased <i>Attack</i> delivery effect ("+ enFormat(nearest100th(SkillDmgBonus))+ " → "+ temp+ ") with <i>Assistance</i> active";

        SkillDmgBonus*=1.30;
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Oath of Protection</i> also removes crowd control effect on the target ally with <i>Prayer of Purification</i> active";
    }

    let finalSkillDmg= nearest100th(SkillDmgBonus); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> converted into the target hero's base stats during <i> Oath of Protection</i><br/>Heals target ally for <b>"+ SkillHealing+"</b> per second during <i>Oath of Protection</i>"+ output1+ output2+ output3);

    return 48;
}

function calcVictoriaSkill(){
    let Hero="Victoria";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=413*(1+(spellBonus/100));
    let atk=266*(1+(atkBonus/100));
    let asp=67*(1+(aspBonus/100));
  
    let SkillDmg=atk*5;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Victoria's MP is restored by 40 for every block moved with Lv8 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br><i>Whiterun</i> deals an additional 2% damage for every 3% extra Movement Speed (max 100% damage) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><i>Whiterun</i>'s final damage increases by 1% for every Movement Speed that exceeds 225 (max +100%) with <i>Rampage</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=atk*0.50;
        temp= enFormat(nearest100th(temp));
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies within 3x3 range of Victoria during <i>Whiterun</i>'s dash before pushing them back by 2 blocks with <i>Valiant Dash</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per attack after dismounting from <i>Whiterun</i>'s charge<br/>10 damage dealt to targets nearby before pushing them back 1 block upon activating <i>Whiterun</i>"+ output1+ output2+ output3);

    return 49;
}

function calcAenrathSkill(){
    let Hero="Aenrath";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1180*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;
    let SkillDmg2= atk*1.00;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let equipAmt= document.getElementById("AenrathEquipAmount").value;
        let bonusAsp= 120-(40*equipAmt);

        output1="</br>Gains +<b>"+ bonusAsp+ "</b>% increased <i>Attack Speed</i> with <b>"+ (3-equipAmt)+ "</b> empty equipment slots with Lv4 Passive";

        asp=100*(1+((aspBonus+bonusAsp)/100));
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let equipAmt= document.getElementById("AenrathEquipAmount").value;
        let bonusDmg= 180-(60*equipAmt);
        let spellAtk2= 207*(1+((spellBonus+bonusDmg)/100));
        let atk2= 89*(1+((atkBonus+bonusDmg)/100));

        output2="</br>Gains +<b>"+ bonusDmg+ "</b>% increased <i>Attack</i> ("+ enFormat(nearest100th(atk)) +" → "+ enFormat(nearest100th(atk2)) +") and <i>Spell Power</i> ("+ enFormat(nearest100th(spellAtk)) +" → "+ enFormat(nearest100th(spellAtk2)) +") with <b>"+ (3-equipAmt)+ "</b> empty equipment slots with Lv8 Passive";

        spellAtk=207*(1+((spellBonus+bonusDmg)/100));
        atk= 89*(1+((atkBonus+bonusDmg)/100));

        SkillDmg=spellAtk
        SkillDmg2= atk*1.00;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= spellAtk*0.30;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> spell damage dealt 12 times when using <i>Abyss of the Forest</i> with <i>Shadow Sword</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= spellAtk*0.30;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies within 5x5 range 10 times when killed with <i>Endless Abyss</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2= enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Abyss of the Forest</i> attack<br/><b>"+ SkillDmg2+ "</b> damage dealt by normal attacks for 4 seconds after <i>Abyss of the Forest</i>"+ output1+ output2+ output3);

    return 50;
}

function calcElizabethSkill(){
    let Hero="Elizabeth";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    //Elizabeth's stats
    let hp1=1770*(1+(hpBonus/100));
    let spellAtk1=89*(1+(spellBonus/100));
    let atk1=148*(1+(atkBonus/100));
    let asp1=77*(1+(aspBonus/100));

    //Stone Spirit's stats
    let hp2=hp1/10;
    let spellAtk2=spellAtk1;
    let atk2=atk1;
    let asp2=asp1;
  
    let SkillDmg=spellAtk1;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Enemies attacked by a Stone Spirit's normal attack are provoked to attack Elizabeth with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=hp1*0.05;
        temp= enFormat(nearest100th(temp));

        output2="</br>Elizabeth heals herself for <b>"+ temp+ "</b> health when a Stone Spirit is killed with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= hp1*0.25;
        temp= enFormat(nearest100th(temp));

        output3="<br/>Elizabeth summons 2 Stone Spirits when she takes <b>"+ temp+ "</b> damage or more with <i>Protector Spirit</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= spellAtk1;
        temp= enFormat(nearest100th(temp));

        output3="<br/>Stone Spirits deal <b>"+ temp+ "</b> damage to enemies in a 3x3 range, stunning them for 1 second when killed with <i>Last Breath</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt for each Stone Spirit recalled by <i>Guardian Spirit Army</i> skill<br/><b>"+ spellAtk1/10+ "</b> damage dealt by each Stone Spirit's normal attack"+ output1+ output2+ output3);

    return 51;
}

function calcSaeryungSkill(){
    let Hero="Saeryung";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk*0.90;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br><i>Inner Flame</i> restores the target's MP by 40 one time with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br><i>Inner Flame</i> increases the target's <i>Attack Speed</i> by 80% with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>If the linked target's skill costs 60 or more at the start of battle, Saeryung recovers 100% MP and <i>Inner Flame</i> restores the linked hero's MP by 35 every second with <i>Echo</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Skill Duration of <i>Inner Flame</i> is increased to 12 seconds, linked hero's <i>Spell Power</i> and <i>Attack Speed</i> are increased by 12% when they use their skill (max +120%) while <i>Inner Flame</i> is active with <i>Uplift</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> converted into the target hero's base stats while <i>Inner Flame</i> is active"+ output1+ output2+ output3);

    return 52;
}

function calcFaraelSkill(){
    let Hero="Farael";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=354*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>When an enemy is killed by <i>Arcane Scattershot</i>, casts an additional <i>Arcane Spell</i> (max 2 times) with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp= spellAtk*1.50;
        temp= enFormat(nearest100th(temp));

        output2="</br>Final damage of remaining <i>Arcane Spell</i> casts increased by 50% ("+ enFormat(nearest100th(spellAtk))+ " → "+ temp+ ") when an enemy is killed with <i>Arcane Scattershot</i> (can't be stacked) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= spellAtk*0.30;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> Protection gained each time an <i>Arcane Spell</i> is cast during <i>Arcan Scattershot</i> with <i>Undulating Mana</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= spellAtk*0.70;
        temp= enFormat(nearest100th(temp));

        output3="<br/><i>Arcane Spell</i>'s damage area increase to 3 blocks (1 → 3), but deals 30% less damage ("+ enFormat(nearest100th(spellAtk))+ " → "+ temp+") with <i>Dispersion of Mana</i> active";

        SkillDmg=spellAtk*0.70;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by each <i>Arcane Spell</i> from <i>Arcane Scattershot</i>"+ output1+ output2+ output3);

    return 53;
}

function calcGaramSkill(){
    let Hero="Garam";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=207*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;
    let SkillDmg2= atk*1.80;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Evasion rate is increased by 20% with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Gains additional 15 TP upon evading with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=atk*0.70;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> damage dealt by the normal attack upon a successful evasion with <i>Riposte</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>At the start of a battle, if the ally 1 block behind Garam does not have any EVA, grants that ally 10% EVA with <i>Escort</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2= enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> Spell damage dealt from initial <i>Dragon Flash</i> attack<br/><b>"+ SkillDmg2+ "</b> Attack damage dealt by each <i>Dragon Flash</i>'s normal attack after initial Spell damage"+ output1+ output2+ output3);

    return 54;
}

function calcDandelynSkill(){
    let Hero="Dandelyn";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1652*(1+(hpBonus/100));
    let spellAtk=207*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=77*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let hp2=hp*1.30;

        let temp= hp2*0.03;
        temp= enFormat(nearest100th(temp));

        output1="</br>Heals self for <b>"+ temp+ "</b> health for every target damaged by the earthquake during <i>Rumbling Earth</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Enemies damaged by the earthquake of <i>Rumbling Earth</i> take 30% increased damage (halved for bosses) for 3 seconds with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= spellAtk*2;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies meeting the specified conditions with <i>Quench</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Dandelyn gains 100% increased Healing, HP Drain, and Protection effects during <i>Rumbling Earth</i> with <i>Tempering</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    hp1= enFormat(nearest100th(hp));

    let hp2= hp*1.30;
    hp2= enFormat(nearest100th(hp2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per second by <i>Rumbling Earth</i>'s earthquake<br/>Max HP increases by 30% ("+hp1+" → "+hp2+") during <i>Rumbling Earth</i>"+ output1+ output2+ output3);

    return 55;
}

function calcSarasSkill(){
    let Hero="Saras";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=590*(1+(hpBonus/100));
    let spellAtk=41*(1+(spellBonus/100));
    let atk=148*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=(30+spellAtk)*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= asp;
        temp= enFormat(nearest100th(temp));

        let asp2= 100*(1+((parseInt(aspBonus)+50)/100));
        asp2= enFormat(nearest100th(asp2));

        output1="</br>Saras gains 50% increased <i>Attack Speed</i> during <i>Void Hallucination</i> ("+temp+" → "+asp2+") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Saras' normal attacks strike an additional target during <i>Void Hallucination</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>When Saras' HP falls below 50% for the first time in a battle, stuns all enemies within 5x5 range of him for 0.5 seconds and teleports to the other side of the battlefield with <i>Void Escape</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>When using <i>Void Hallucination</i>, a hallucination with 1 ATK and 1 HP on the other side of the battlefield that provokes enemies upon normal attacks with <i>Mirage</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by each of Saras' hallucinations per attack during <i>Void Hallucination</i>"+ output1+ output2+ output3);

    return 56;
}

function calcJinjuSkill(){
    let Hero="Jinju";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=165*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;
    let SkillDmg2= spellAtk*3;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp=spellAtk*0.80;
        temp=enFormat(nearest100th(temp));

        output1="</br><b>"+ temp+ "</b> additional spell damage dealt on next normal attack after using either of her skill attacks with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Gains additional 300 DEF for 1 second when using either of her skill attacks with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>At the beginning of the battle, the first <i>Tiger Gale Kick</i> is replaced by <i>Skyrending Tiger</i>. <i>Skyrending Tiger</i> also gains 50% Spell HP Drain with <i>Full Power</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Number of <i>Tiger Gale Kick</i>'s needed to use before casting <i>Skyrending Tiger</i> is fixed to 3, regardless of tier with <i>Continuous Strike</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per Tiger Gale Kick attack<br/><b>"+ SkillDmg2+ "</b> damage dealt per Skyrending Tiger attack"+ output1+ output2+ output3);

    return 57;
}

function calcBellinaSkill(){
    let Hero="Bellina";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;
    let SkillProtection= spellAtk/10;
    let protectionInterval=2.00;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Bellina is affixed with a <i>Third Eye</i> if an ally hero who is affixed with a <i>Third Eye</i> is killed with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Protection generation interval for <i>Third Eye</i> decreases by 0.50 seconds with Lv8 Passive";
        protectionInterval-=0.50;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk*2;
        temp= enFormat(nearest100th(temp));

        output3="<br/><b>"+ temp+ "</b> damage dealt by the explosion caused by the death of allies affixed with a <i>Third Eye</i> with <i>Mental Explosion</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Bellina recovers 30% additional MP at the start of battle if Mara is on the allied battlefield with <i>One Mind One Heart</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillProtection= enFormat(nearest100th(SkillProtection));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ SkillProtection+ "</b> Protection granted every <b>"+protectionInterval+"</b> seconds to allies affixed with a <i>Third Eye</i><br/><b>"+ output+ "</b> damage dealt to enemies by each <i>Third Eye</i> affixed on allied heroes when </i>Eye of Control</i> is used"+ output1+ output2+ output3);

    return 58;
}

function calcSargulaSkill(){
    let Hero="Sargula";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let hp=1593*(1+(hpBonus/100));
    let spellAtk=118*(1+(spellBonus/100));
    let atk=207*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));

    let SkillDmg=(250+(spellAtk/16.66))*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Sargula heals herself for 100% on Max HP when entering <i>Void Form</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>-30 MP removed from the target's current MP amount on the third normal attack after entering <i>Void Form</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>With <i>Void Ritual</i> active, the highest tier deployed Sargula will kill allies on both the left and right of her at the beginning of the battle. Gains 60 Void and 25% Physical HP drain per ally killed";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>If Sargula is the highest-tier hero on the ally battlefield, enemies are prevented from recovering MP for 3 seconds when Sargula enters <i>Void Form</i> with <i>Demise</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Punishment of Void</i> attack"+ output1+ output2+ output3);

    return 2;
}

function calcMaiuSkill(){
    let Hero="Maiu";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1475*(1+(hpBonus/100));
    let spellAtk=354*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= 354;
    let SkillDmg2= atk+142;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= hp*0.15;
        temp=enFormat(nearest100th(temp));

        output1="</br>Heals self for <b>"+ temp+ "</b> health per second while in <i>Aura of Rock</i> state with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>CRIT Chance increases by 25% while in <i>Aura of Rock</i> state with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*1.50;

        output3="<br/>-30 MP cost for <i>Power of Rock</i> (90 → 60), & <i>Power of Rock</i>'s Rock Smash is upgraded: +25% CRIT chance, +50% final damage ("+SkillDmg +" → "+temp+"), and stuns enemies on hit for 2.5 seconds with <i>Hardening</i> active";

        SkillDmg*=1.50;
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>While in <i>Aura of Rock</i> state, enemies outside the 3x3 range deal 40% less damage to Maiu, and Maiu gains 30% increased Movement Speed with <i>Blessing of the Earth</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by <i>Power of Rock</i>'s Rock Smash<br/><b>"+ SkillDmg2+"</b> damage dealt on normal attacks while in <i>Aura of Rock</i> state"+ output1+ output2+ output3);

    return 59;
}

function calcPatrosSkill(){
    let Hero="Patros";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=89*(1+(spellBonus/100));
    let atk=118*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillHealing= spellAtk;
    let SkillAspBoost= 25;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Patros' Guard is increased by +30 with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Takes 70% less damage after taking damage for the first time in a battle with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Allies affected with <i>For the Empire!</i> gain +5% final <i>Attack Speed</i> for 1 second (does not stack with multiple <i>For the Empire!</i> skills) with <i>Morale Boost</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Allies affected with <i>For the Empire!</i> recover 8 MP per second, and gain 5% increased final <i>Spell Power</i> (does not stack with multiple <i>For the Empire!</i> skills). <i>For the Empire!</i> no longer gives increased <i>Attack Speed</i> with <i>Determination</i> active";
        SkillAspBoost= 0;
    }
    
    let finalSkillDmg= nearest100th(SkillHealing); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Heals allies within range of <i>For the Empire!</i> for <b>"+ output+ "</b> health per second<br/>Increases <i>Attack Speed</i> of allies within range of <i>For the Empire!</i> by <b>"+ SkillAspBoost+ "</b>% (only the highest <i>Attack Speed</i> bonus from <i>For the Empire!</i> is applied)"+ output1+ output2+ output3);

    return 60;
}

function calcIthenaSkill(){
    let Hero="Ithena";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1357*(1+(hpBonus/100));
    let spellAtk=47*(1+(spellBonus/100));
    let atk=236*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= atk*(500+(spellAtk/3));

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Removes all crowd control effects on Ithena when she obtains max Void with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Damage reduction effect lasts for an additional 1.5 seconds (2.0 sec → 3.5 sec) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Maximum damage of <i>Smite of the Rift</i> is increased by +0.5% (+"+ enFormat(nearest100th(SkillDmg*0.005))+ ") per 1% of Ithena's missing HP, max of +40% (+"+ enFormat(nearest100th(SkillDmg*0.40))+ ") with <i>Hatred</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt to each enemy hit by <i>Smite of the Rift</i>"+ output1+ output2+ output3);

    return 61;
}
