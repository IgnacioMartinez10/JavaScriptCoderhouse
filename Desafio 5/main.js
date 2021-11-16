class Cliente{
    constructor(nombre) {
        this.nombre = nombre;
        this.precioCorte = 500;
        this.precioBarba = 150;
        this.precioADomicilio = 200;
    }

    corteConBarba(){
        alert("Bienvenido " + this.nombre + " el corte de pelo + barba cuesta $" +(this.precioCorte + this.precioBarba));
    }

    corteADomicilio(){
        alert ("Bienvenido " + this.nombre + " el corte de pelo a domicilio cuesta $" + (this.precioCorte + this.precioADomicilio));
    }
    corteConBarbaDomicilio(){
        alert ("Bienvenido " + this.nombre + " el corte de pelo a domicilio + barba cuesta $" + (this.precioCorte + this.precioADomicilio + this.precioBarba));
    }
}

const cliente1 = new Cliente ("Lucas")
const cliente2 = new Cliente ("Tomás")
const cliente3 = new Cliente ("Matias")

cliente1.corteConBarba();
cliente2.corteADomicilio();
cliente3.corteConBarbaDomicilio();


