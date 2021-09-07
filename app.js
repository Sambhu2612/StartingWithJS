document.querySelectorAll(".ball").forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
});
