let nameOfCoffee = [];

fetch("../src/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((coffee) => {
      let name = coffee.name;
      nameOfCoffee = [...nameOfCoffee, name];
    });

    let mainTimeline = gsap.timeline({
      repeat: -1,
    });

    nameOfCoffee.forEach((coffee) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 6,
      });
      textTimeline.to(".typewritter", {
        text: coffee,
        duration: 1,

        onUpdate: () => {
          curosrTimeline.restart();
          curosrTimeline.pause();
        },
        onComplete: () => {
          curosrTimeline.play();
        },
      });

      mainTimeline.add(textTimeline);
    });
  });

//bliking Cursor
let curosrTimeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.8,
});

curosrTimeline
  .to(".cursor", {
    opacity: 1,
    duration: 0,
  })
  .to(".cursor", {
    opacity: 0,
    duration: 0,
    delay: 0.8,
  });
