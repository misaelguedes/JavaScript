let amigo = {nome: 'Misael',
sexo: 'M',
peso: 69.5,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)