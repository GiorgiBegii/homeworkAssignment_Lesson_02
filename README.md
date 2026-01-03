#Dice Game Angular Task

Features:

mplement a Dice game component. The component should have a button to roll 2 dice, the result of a current roll the 
Win / Loss label (show Win in case the sum is 7), the history of rolls formatted like in the example.
It should be possible to solve this exercise without using directives.
Use pipe for roll history formatting.
Use interpolation properly.
Implement a Win/Loss label and Roll button (inside green rectangle) as a different
component. It should has input/output properties to interact with a parent component.
Execute a first roll automatically at the component creation so nothing is empty
when the UI is rendered.
Feel free to use any styling

Folder Structure: 

src/app/
 ├─ [dice-game](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_02/tree/main/src/app/dice-game)/
 │   ├─ dice-game.component.ts
 │   ├─ dice-game.component.html
 │   └─ dice-game.component.scss
 │
 ├─ [dice-controls](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_02/tree/main/src/app/dice-controls)/
 │   ├─ dice-controls.component.ts
 │   ├─ dice-controls.component.html
 │   └─ dice-controls.component.scss
 │
 ├─ [pipes](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_02/tree/main/src/app/pipes)/
 │   └─ roll-history.pipe.ts
 │
 ├─ [models](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_02/tree/main/src/models)/
 │   └─ roll.model.ts
 │
 └─ app.component.ts
