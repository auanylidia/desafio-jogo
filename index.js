class heroi{
	constructor(nomeHeroi,idadeHeroi,tipoHeroi){
    	this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
   		this.tipoHeroi = tipoHeroi    
        
    }
    
    atacar(){
    let ataque=" "
    if (this.tipoHeroi==="guerreiro"){
   ataque=" espada"
    }else if(this.tipoHeroi==="monje"){
     ataque=" artes marciais"
    }else if(this.tipoHeroi==="ninja"){
     ataque=" shipudem"
    }else if(this.tipoHeroi==="mago"){
     ataque=" magia"
    }
    	console.log(`o ${this.tipoHeroi} ${this.nomeHeroi} atacou usando ${ataque}`)
  
   }
}


let heroi1 = new heroi("auany",20,"ninja")

heroi1.atacar()