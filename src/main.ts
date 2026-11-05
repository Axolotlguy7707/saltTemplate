import * as Salt from 'saltwater';
import { ExampleScene } from './Scenes/ExampleScene';

export const game = new Salt.Game({
    width: 720,
    height: 720,
    backgroundColor: 0x0000FF
});

await game.start();

game.switchScene(new ExampleScene);