//electronic items ->phone and sound system
//phone -  > mobile phone and cord phone
// sound system -> stereo and stereo 

class Electronics {
    constructor() {
        this.phone = new Phone();
        this.soundSystem = new SoundSystem();
    }
}

class Phone {
    constructor() {
        this.mobilePhone = new MobilePhone();
        this.cordPhone = new CordPhone();
    }
}

class SoundSystem {
    constructor() {
        this.stereo = new Stereo();
        this.stereoSystem = new StereoSystem();
    }
}

class MobilePhone {
    constructor() {
        this.brand = "Samsung";
        this.model = "Galaxy S21";
    }

    call() {
        console.log(`Calling from ${this.brand} ${this.model}`);
    }
}

class CordPhone {
    constructor() {
        this.brand = "Nokia";
        this.model = "3310";
    }

    call() {
        console.log(`Calling from ${this.brand} ${this.model}`);
    }
}

class Stereo {
    constructor() {
        this.brand = "Sony";
        this.model = "Xperia";
    }

    playMusic() {
        console.log(`Playing music from ${this.brand} ${this.model}`);
    }
}
    
class StereoSystem {
    constructor() {
        this.brand = "Bose";
        this.model = "SoundLink";
    }   

    playMusic() {
        console.log(`Playing music from ${this.brand} ${this.model}`);
    }
}



const electronics = new Electronics();
electronics.phone.mobilePhone.call();
electronics.soundSystem.stereo.playMusic();
electronics.phone.cordPhone.call();
electronics.soundSystem.stereoSystem.playMusic();


// Calling from Samsung Galaxy S21
// Playing music from Sony Xperia
// Calling from Nokia 3310
// Playing music from Bose SoundLink



