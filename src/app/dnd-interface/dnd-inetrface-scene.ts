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