interface Radio {
    switchRadio(triggl:boolean):void
}
interface Battery {
    checkBettary():void
}

class Car implements Radio {
    switchRadio(){
        
    }

}

class CellPhone implements Radio ,Battery{
    switchRadio(){}

    checkBettary(){}
}
