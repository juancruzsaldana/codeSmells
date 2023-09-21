const switchCase = {
    getPokemonType(pokemon) {
        switch (pokemon) {
            case 'pikachu':
                return 'electric';
            case 'squirtle':
                return 'water';
            case 'charmander':
                return 'fire';
            case 'bulbasaur':
                return 'grass';
            default:
                return 'unknown';
        }
    },

    performPokemonAttack(pokemon) {
        let damage = 0;
        const remainigLive = 14;
        let newLife = 100;
        switch (pokemon) {
            case 'pikachu':
                damage = 0.4;
                newLife = remainigLive - remainigLive * damage;
                this.setOponentLife(newLife);
                this.electricEffect();
                break;
            case 'squirtle':
                damage = 0.25;
                newLife = remainigLive - remainigLive * damage;
                this.setOponentLife(newLife);
                this.watterEffect();
                break;
            case 'charmander':
                damage = 0.3;
                newLife = remainigLive - remainigLive * damage;
                this.setOponentLife(newLife);
                this.fireEffect();
                break;
            case 'bulbasaur':
                damage = 0.2;
                newLife = remainigLive - remainigLive * damage;
                this.setOponentLife(newLife);
                this.grassEffect();
                break;
            default:
                damage = 0;
                newLife = remainigLive - remainigLive * damage;
                this.setOponentLife(newLife);
                break;
        }
        return damage
    },

    setOponentLife(life) {
      return life
    },
    fireEffect() {
        return 0
    },
    watterEffect() {
        return 0
    },
    electricEffect() {
        return 0
    },
    grassEffect() {
        return 0
    }

}

const ifStament = {
    getInterestByType (type) {
        let interest;
        if(type === 'simple'){
            interest = 10;
        }else{
            interest = 20;
        }
        return interest;
    }
}
module.exports = {switchCase, ifStament}