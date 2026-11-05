import * as Salt from 'saltwater';

export class ExampleScene extends Salt.Scene {
    constructor() {
        super();

        const saltLogo = new Salt.GameObject(55, 220);
        saltLogo.loadGraphic('./images/saltLogo.png'); // Relative to the public folder

        this.addChild(saltLogo);
    }

    // This function runs every frame
    override update(delta: number): void {
        super.update(delta); // it is VERY important to always call super.update(delta). THINGS WILL BREAK IF YOU DON'T!!!
    }
}