                        var FIELD_SIZE_X = 20;
                        var FIELD_SIZE_Y = 20;
                        var SNAKE_SPEED = 200;
                        var snake = [];
                        var direction = 'y+';
                        var gameIsRunning = false;
                        var snake_timer;
                        var food_timer;
                        var score = 0;
                        var currentScore;

                        function init() {
                            prepareGameField();
                            var wrap = document.getElementsByClassName('wrap')[0];

                            wrap.style.width = '400px';

                            document.getElementById('snake-start').addEventListener('click', startGame); //По клику на кнопку snake-start запускаем функцию startGame()
                            document.getElementById('snake-renew').addEventListener('click', refreshGame); //По клику на кнопку snake-renew обновляем игровое поле функцией refreshGame(), начиная новую игру.


                            addEventListener('keydown', changeDirection);
                        }


                        function prepareGameField() {

                            currentScore = document.querySelector('h3');
                            currentScore.classList.add('score-string');

                            var game_table = document.createElement('table');
                            game_table.setAttribute('class', 'game-table');


                            for (var i = 0; i < FIELD_SIZE_X; i++) {

                                var row = document.createElement('tr');
                                row.className = 'game-table-row row-' + i;

                                for (var j = 0; j < FIELD_SIZE_Y; j++) {

                                    var cell = document.createElement('td');
                                    cell.className = 'game-table-cell cell-' + i + '-' + j;

                                    row.appendChild(cell);
                                }
                                game_table.appendChild(row);
                            }

                            document.getElementById('snake-field').appendChild(game_table);
                        }


                        function startGame() {
                            gameIsRunning = true;
                            respawn();

                            snake_timer = setInterval(move, SNAKE_SPEED);
                            setTimeout(createFood, 5000);
                            setTimeout(createObstacles, 7000);
                        }


                        function respawn() {

                            var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
                            var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);


                            var snake_tail = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
                            snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');

                            var snake_head = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
                            snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');

                            snake.push(snake_tail);
                            snake.push(snake_head);
                        }


                        function move() {

                            var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');


                            var new_unit;
                            var snake_coords = snake_head_classes[1].split('-');
                            var coord_y = parseInt(snake_coords[1]);
                            var coord_x = parseInt(snake_coords[2]);


                            if (direction == 'x-') {
                                new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
                            } else if (direction == 'x+') {
                                new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
                            } else if (direction == 'y+') {
                                new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
                            } else if (direction == 'y-') {
                                new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
                            }


                            if (!isSnakeUnit(new_unit) && new_unit !== undefined && !haveObstacle(new_unit)) {
                                new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
                                snake.push(new_unit);


                                if (!haveFood(new_unit)) {
                                    var removed = snake.splice(0, 1)[0];
                                    var classes = removed.getAttribute('class').split(' ');
                                    removed.setAttribute('class', classes[0] + ' ' + classes[1]);
                                }
                            } else {
                                finishTheGame();
                            }
                        }




                        function isSnakeUnit(unit) {
                            var check = false;

                            if (snake.includes(unit)) {
                                check = true;
                            }
                            return check;
                        }

                        function haveFood(unit) {
                            var check = false;

                            var unit_classes = unit.getAttribute('class').split(' ');
                            if (unit_classes.includes('food-unit')) {
                                check = true;
                                createFood();
                                score++;

                                currentScore.innerHTML = 'Ваш текущий счет: ' + score;


                            }
                            return check;
                        }


                        function haveObstacle(unit) {
                            var check = false;

                            var unit_classes = unit.getAttribute('class').split(' ');
                            if (unit_classes.includes('obstacle-unit')) {
                                check = true;
                                createObstacles();
                            }
                            return check;
                        }


                        function createFood() {
                            var foodCreated = false;

                            while (!foodCreated) {
                                var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
                                var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

                                var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
                                var food_cell_classes = food_cell.getAttribute('class').split(' ');



                                if (!food_cell_classes.includes('snake-unit')) {
                                    var classes = '';
                                    for (var i = 0; i < food_cell_classes.length; i++) {
                                        classes += food_cell_classes[i] + ' ';
                                    }

                                    food_cell.setAttribute('class', classes + 'food-unit');
                                    foodCreated = true;
                                }


                            }

                        }

                        function createObstacles() {
                            var obstacleCreated = false;

                            while (!obstacleCreated) {

                                var obstacle_x = Math.floor(Math.random() * FIELD_SIZE_X);
                                var obstacle_y = Math.floor(Math.random() * FIELD_SIZE_Y);

                                var obstacle_cell = document.getElementsByClassName('cell-' + obstacle_y + '-' + obstacle_x)[0];
                                var obstacle_cell_classes = obstacle_cell.getAttribute('class').split(' ');



                                if (!obstacle_cell_classes.includes('snake-unit') || !obstacle_cell_classes.includes('food-unit')) {
                                    var obstacleClasses = '';
                                    for (var i = 0; i < obstacle_cell_classes.length; i++) {
                                        obstacleClasses += obstacle_cell_classes[i] + ' ';
                                    }

                                    obstacle_cell.setAttribute('class', obstacleClasses + 'obstacle-unit');
                                    obstacleCreated = true;
                                }


                            }

                        }



                        function changeDirection(e) {
                            console.log(e);
                            switch (e.keyCode) {
                                case 37:
                                    if (direction != 'x+') {
                                        direction = 'x-'
                                    }
                                    break;
                                case 38:
                                    if (direction != 'y-') {
                                        direction = 'y+'
                                    }
                                    break;
                                case 39:
                                    if (direction != 'x-') {
                                        direction = 'x+'
                                    }
                                    break;
                                case 40:
                                    if (direction != 'y+') {
                                        direction = 'y-'
                                    }
                                    break;
                            }
                        }


                        function finishTheGame() {
                            gameIsRunning = false;
                            clearInterval(snake_timer);
                            alert('Вы проиграли! Ваш результат: ' + score.toString());
                        }


                        function refreshGame() {
                            location.reload();
                        }


                        window.onload = init;