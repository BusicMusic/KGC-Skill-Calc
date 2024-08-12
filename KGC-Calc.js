function calcSkill(Hero){
    switch(Hero){
        case 1:
            break;
        case 2:
            break;
        case 3:
           break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        case 21:
            break;
        case 22:
            break;
        case 23:
            break;
        case 24:
            break;
        case 25:
            break;
        case 26:
            break;
        case 27:
            break;
        case 28:
            break;
        case 29:
            break;
        case 30:
            break;
        case Neria:
            calcNeriaSkill();
            break;
        case 32:
            break;
        default:
            console.log("error in selecting hero- no function found");
    }
}
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
    
    document.getElementById("NeriaSkillDmg").innerHTML=(output+ " per <i>Annihilation Time</i> attack");
    return 3;
}