<template>
  <div class="img-container" :class="{ moving: isMoving}" :style="style">
    <img :src="img_path" @mouseover="isMoving = true">
  </div>
</template>

<script>
import tadpole1 from "../assets/images/tadpole1.png";
import tadpole2 from "../assets/images/tadpole2.png";
import tadpole3 from "../assets/images/tadpole3.png";
import tadpole4 from "../assets/images/tadpole4.png";
import tadpole5 from "../assets/images/tadpole5.png";
import tadpole6 from "../assets/images/tadpole6.png";

let Bugs = {
  tadpole1,
  tadpole2,
  tadpole3,
  tadpole4,
  tadpole5,
  tadpole6
};
export default {
  name: "Tadpole",
  props: {
    type: String,
    x: Number,
    y: Number,
    rotate: Number,
    width: Number
  },
  data() {
    return {
      img_path: Bugs[this.$props.type],
      style: {
        left: `${this.$props.x}%`,
        top: `${this.$props.y}%`,
        width: `${this.$props.width}%`,
        transform: `rotate(${this.$props.rotate}deg)`
      },
      isMoving: false
    };
  },
  mounted() {
    let animationElem = this.$el.getElementsByTagName("img")[0];
    // Code for Chrome, Safari and Opera
    animationElem.addEventListener("webkitAnimationEnd", this.endMotion);

    // Standard syntax
    animationElem.addEventListener("animationend", this.endMotion);
  },
  methods: {
    endMotion() {
      this.isMoving = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$angle: 10deg;
$x_move: 60%;
$y_move: -40%;

@keyframes swim {
  10% {
    transform: translate($x_move*0.375, $y_move*0.375) rotate($angle/4);
  }
  65% {
    transform: translate($x_move*0.375, $y_move*0.375) rotate(-$angle/9);
  }
  
  15% {
    transform: translate($x_move*0.75, $y_move*0.75) rotate(-$angle/4);
  }
  30% {
    animation-timing-function: ease-in;
    transform: translate($x_move*0.75, $y_move*0.75) rotate($angle/6);
  }

  20% {
    animation-timing-function: ease-out;
    transform: translate($x_move, $y_move) rotate(0);
  }


  100% {
    animation-timing-function: ease-out;
  }

  // 40%,
  // 60% {
  //   transform: rotate($angle);
  // }
}
.img-container {
  position: absolute;
  z-index: 12;
  &.moving img {
    animation: swim 3s;
  }
  img {
    width: 100%;
  }
}
</style>
