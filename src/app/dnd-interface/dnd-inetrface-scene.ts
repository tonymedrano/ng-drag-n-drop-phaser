/*
 * File: dnd-inetrface-scene.ts                                                *
 * Project: dnd-drag-n-drop                                                    *
 * Created Date: Su Feb yyyy                                                   *
 * Author: <<author>                                                           *
 * -----                                                                       *
 * Last Modified: Sun Feb 27 2022                                              *
 * Modified By: Tony Medrano                                                   *
 * -----                                                                       *
 * Copyright (c) 2022 Amiguin for Javascript                                   *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

import * as Phaser from "phaser";

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'main' });
    }
    create() {
        console.log('create method');
    }
    preload() {
        console.log('preload method');
    }
    update() {
        console.log('update method');
    }
}


export class Boot extends Phaser.Scene {

    constructor() {
        super({ key: 'boot', active: true });
    }

    preload() {
        //  this.load.image('circle', 'assets/equipments/dragcircle.png');
        this.load.spritesheet('circle', 'assets/equipments/dragcircle.png', { frameWidth: 16 });
        this.load.image('tank1', 'assets/equipments/storage-tank-1.png');
        this.load.image('tank3', 'assets/equipments/storage-tank-3.png');
        this.load.image('tank4', 'assets/equipments/storage-tank-4.png');
        this.load.image('tank5', 'assets/equipments/storage-tank-5.png');
        this.load.image('tank6', 'assets/equipments/storage-tank-6.png');
    }

    create() {
        this.scene.start('sceneA');
    }

}

export class SceneA extends Phaser.Scene {
    x: any;
    y: any;

    constructor() {
        super({ key: 'sceneA' });
    }

    create() {
        const staticImage1: any = this.add.sprite(110, 510, 'tank1').setInteractive();
        const image1: any = this.add.sprite(110, 510, 'tank1').setInteractive();
        staticImage1.scale = 0.25;
        image1.scale = 0.25;

        const circle1: any = this.add.sprite(0, 0, 'circle');
        const circle2: any = this.add.sprite(0, 0, 'circle');

        const staticImage2: any = this.add.sprite(300, 510, 'tank3').setInteractive();
        const image2: any = this.add.sprite(300, 510, 'tank3').setInteractive();
        image2.scale = 0.25;
        staticImage2.scale = 0.25;

        const staticImage3: any = this.add.sprite(480, 510, 'tank4').setInteractive();
        const image3: any = this.add.sprite(480, 510, 'tank4').setInteractive();
        image3.scale = 0.25;
        staticImage3.scale = 0.25;

        const staticImage4: any = this.add.sprite(680, 510, 'tank5').setInteractive();
        const image4: any = this.add.sprite(680, 510, 'tank5').setInteractive();
        image4.scale = 0.25;
        staticImage4.scale = 0.25;

        this.input.setDraggable([image1, image2, image3, image4]);

        this.input.on('dragstart', (pointer: any, shape: any) => {
            shape.setTint(0xff0000);
        });

        this.input.on('drag', (pointer: any, shape: any, dragX: any, dragY: any) => {
            shape.x = dragX;
            shape.y = dragY;
            circle1.x = dragX + 60;
            circle1.y = dragY - 40;
            circle2.x = dragX + 60;
            circle2.y = dragY - 20;
        });

        this.input.on('dragend', (pointer: any, shape: any,) => {
            shape.clearTint();
        });
    }
    

}