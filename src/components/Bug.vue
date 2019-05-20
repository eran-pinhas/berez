<template>
  <div class="img-container" :style="style">
    <img :src="img_path">
  </div>
</template>

<script>
import Bug1 from "../assets/images/bug1.png";
import Bug2 from "../assets/images/bug2.png";
import Larvae1 from "../assets/images/larvae1.png";
import Larvae2 from "../assets/images/larvae2.png";
import Larvae3 from "../assets/images/larvae3.png";
import Larvae4 from "../assets/images/larvae4.png";
import Larvae5 from "../assets/images/larvae5.png";
import Larvae6 from "../assets/images/larvae6.png";
import Larvae7 from "../assets/images/larvae7.png";
import Larvae8 from "../assets/images/larvae8.png";
import Larvae9 from "../assets/images/larvae9.png";
import tadpole1 from "../assets/images/tadpole1.png";
import tadpole2 from "../assets/images/tadpole2.png";
import tadpole3 from "../assets/images/tadpole3.png";
import tadpole4 from "../assets/images/tadpole4.png";
import tadpole5 from "../assets/images/tadpole5.png";
import tadpole6 from "../assets/images/tadpole6.png";

let Bugs = {
  Bug1,
  Bug2,
  Larvae1,
  Larvae2,
  Larvae3,
  Larvae4,
  Larvae5,
  Larvae6,
  Larvae7,
  Larvae8,
  Larvae9,
  tadpole1,
  tadpole2,
  tadpole3,
  tadpole4,
  tadpole5,
  tadpole6
};
export default {
  name: "Bug",
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
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$angle: 5deg;

@keyframes shake {
  10%,
  90% {
    transform: rotate($angle/4) translateY(4px);
  }

  20%,
  80% {
    transform: rotate($angle/2);
  }

  30%,
  50%,
  70% {
    transform: rotate(-$angle);
  }

  40%,
  60% {
    transform: rotate($angle);
  }
}
.img-container {
  position: absolute;
  z-index: 12;
  img:hover {
    animation: shake 0.7s linear;
  }
  img {
    width: 100%;
  }
}
</style>
