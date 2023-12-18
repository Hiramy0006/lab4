// Отримуємо доступ до полотна (canvas)
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Початкові координати квадрата
let x = 50;
let y = 50;

// Розміри квадрата
const squareSize = 50;

// Швидкість руху квадрата
const speed = 2;

// Функція для малювання та анімації
function draw() {
    // Очищаємо полотно
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Малюємо квадрат
    context.fillStyle = 'blue';
    context.fillRect(x, y, squareSize, squareSize);

    // Змінюємо координати для анімації
    x += speed;
    y += speed;

    // Перевіряємо, чи квадрат вийшов за межі полотна
    if (x > canvas.width) {
        x = -squareSize;
    }
    if (y > canvas.height) {
        y = -squareSize;
    }

    // Рекурсивно викликаємо функцію для анімації
    requestAnimationFrame(draw);
}

// Викликаємо функцію для початку анімації
draw();
