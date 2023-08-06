// JavaScript
const counters = document.querySelectorAll(".count");
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const increment = Math.ceil(target / speed); // Use Math.ceil to avoid getting stuck at certain values

    if (count < target) {
      counter.innerText =
        count + increment <= target ? count + increment : target;
      setTimeout(updateCount, 50); // Increase the timeout to 50 milliseconds
    } else {
      counter.innerText = target; // Corrected from count to counter
    }
  };
  updateCount();
});

