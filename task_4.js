function ElectricDevice(name, power){ //родительская функция-конструктор приборов
    this.name = name,
    this.power = power
}

ElectricDevice.prototype.turnOnOff = function(onOff) {//вкл/выкл прибор
    this.onOff = onOff;

    if (this.onOff === "on") {
        console.log('device is On');
        countOnDev += 1;//счетчик вкл. приборов
        powerPerHour = powerPerHour + (this.power / 1000);//счетчик потребления энергии
    } else if (this.onOff === "off") {
        console.log('device is Off')
    } else {console.log('do not know')}
}

ElectricDevice.prototype.view = function() {//вывести прибор в консоль
    console.log(`Прибор ${this.name}, номинальная мощность ${this.power}Вт`)
}

function LightDevice(name, power){//новый световой прибор
    this.name = name,
    this.power = power,
    this.lightType,
    this.powerPerDay
}

LightDevice.prototype = new ElectricDevice();//делегирование

LightDevice.prototype.countPowerPerDay = function() {//потребление энергии в день
    this.powerPerDay = (this.power / 1000) * 24;
}

function ComputingDevice(name, power){//новый вычислительный прибор
    this.name = name,
    this.power = power,
    this.frequency
}

ComputingDevice.prototype = new ElectricDevice();//делегирование

ComputingDevice.prototype.energyUse = function() {//энергоэффективность
    if (this.power < 400) {
        this.energyUse = 'low';
    } else if (this.power > 400 && this.power < 800) {
        this.energyUse = 'middle';
    } else if (this.power > 800) {
        this.energyUse = 'high';
    }
}

//ввод параметров 1-го прибора
let devName1 = prompt('введите название 1-го прибора');
let devPower1 = parseFloat(prompt ('введите мощность 1-го прибора'));
let devType1 = prompt ('выберите тип 1-го прибора: 1 - осветительный; 2 - вычислительный');
let countOnDev = 0, powerPerHour = 0;

if (devType1 == '1') {
    const dev1 = new LightDevice(devName1, devPower1);
    dev1.lightType = prompt('введите тип источника света (LED, галогеновый, натриевый');
    dev1.countPowerPerDay();
    console.log(dev1);
    dev1.turnOnOff(prompt('on/off?'));
} else if (devType1 == '2') {
    const dev1 = new ComputingDevice(devName1, devPower1);
    dev1.frequency = prompt('введите тактовую частоту процессора');
    dev1.energyUse();
    console.log(dev1);
    dev1.turnOnOff(prompt('on/off?'));
};

//ввод параметров 2-го прибора
let devName2 = prompt('введите название 2-го прибора');
let devPower2 = parseFloat(prompt ('введите мощность 2-го прибора'));
let devType2 = prompt ('выберите тип 2-го прибора: 1 - осветительный; 2 - вычислительный');

if (devType2 == '1') {
    const dev2 = new LightDevice(devName2, devPower2);
    dev2.lightType = prompt('введите тип источника света (LED, галогеновый, натриевый');
    dev2.countPowerPerDay();
    console.log(dev2);
    dev2.turnOnOff(prompt('on/off?'));
} else if (devType2 == '2') {
    const dev2 = new ComputingDevice(devName2, devPower2);
    dev2.frequency = prompt('введите тактовую частоту процессора');
    dev2.energyUse();
    console.log(dev2);
    dev2.turnOnOff(prompt('on/off?'));
};


console.log(`включено ${countOnDev} приборов, потребеление энергии = ${powerPerHour} кВт/ч `);