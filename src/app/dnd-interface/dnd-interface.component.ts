/*
 * File: dnd-interface.component.ts                                            *
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
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import { Component, OnInit } from '@angular/core';

import { Boot, SceneA } from './dnd-inetrface-scene';

@Component({
  selector: 'dnd-interface',
  templateUrl: './dnd-interface.component.html',
  styleUrls: ['./dnd-interface.component.scss']
})
export class DndInterfaceComponent implements OnInit {
  phaserGame!: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ Boot, SceneA ],
      parent: 'dndContainer',
      backgroundColor: '#2d2d2d',
   /*    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      } */
    };
  }
  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.phaserGame = new Phaser.Game(this.config);
  }
}