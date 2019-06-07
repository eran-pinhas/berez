<template>
  <div id="app-wrapper" :style="{ fontSize: fontSize + 'px', visibily:visibily }">
    <div id="app">
      <div class="sky">
        <div class="title-box">
          <Title class="title"/>
          <span class="author">
            מילים: אלון אוריון
            <br>לחן: יריב לבלנג
          </span>
        </div>
        <img src="@/assets/images/sky.png">
      </div>
      <img class="ground-mountains" src="@/assets/images/top-no-sky.png">
      <div class="ground-sand"></div>
      <img class="faucet" src="@/assets/images/faucet.png">
      <img class="faucet-drop" src="@/assets/images/drop1.png">
      <img class="bird-1" src="@/assets/images/swallow1.png"  @mouseover="birdMoving = true" :class="{ moving: birdMoving}">
      <img class="bottom" src="@/assets/images/bottom.png">

      <Verse1 class="svg-text-box-1" />
      <Verse2 class="svg-text-box-2" />
      <Verse3 class="svg-text-box-3" />
      <Verse4 class="svg-text-box-4" />
      <Verse5 class="svg-text-box-5" />
      <Verse6 class="svg-text-box-6" />

      <div class="canes">
        <img class="leaf-1" src="@/assets/images/leaf3.png">
        <img class="leaf-2" src="@/assets/images/leaf3.png">
        <img class="leaf-3" src="@/assets/images/leaf3.png">
        <img class="leaf-4" src="@/assets/images/leaf3.png">
        <img class="leaf-5" src="@/assets/images/leaf3.png">
        <img class="cane-1" src="@/assets/images/cane1.png">
        <img class="cane-2" src="@/assets/images/cane1.png">
        <img class="cane-3" src="@/assets/images/cane1.png">
      </div>
      <div class="drops-container" :style="{ top: dropsTop + '%' }">
        <img class="drops-1-1" src="@/assets/images/drop2.png">
        <img class="drops-1-2" src="@/assets/images/drop3.png">
        <img class="drops-1-3" src="@/assets/images/drop4.png">
        <img class="drops-2-1" src="@/assets/images/drop5.png">
        <img class="drops-3-1" src="@/assets/images/drop2.png">
        <img class="drops-3-2" src="@/assets/images/drop3.png">
        <img class="drops-3-3" src="@/assets/images/drop4.png">
        <img class="drops-4-1" src="@/assets/images/drop5.png">
        <img class="drops-5-1" src="@/assets/images/drop6.png">
        <img class="drops-6-1" src="@/assets/images/drop5.png">
        <img class="drops-6-2" src="@/assets/images/drop4.png">
        <img class="drops-6-3" src="@/assets/images/drop3.png">
        <img class="drops-7-1" src="@/assets/images/drop4.png">
        <img class="drops-7-2" src="@/assets/images/drop6.png">
        <img class="drops-8-1" src="@/assets/images/drop2.png">
        <img class="drops-8-2" src="@/assets/images/drop3.png">
        <img class="drops-8-3" src="@/assets/images/drop4.png">
        <img class="drops-8-4" src="@/assets/images/drop5.png">
        <img class="drops-9-1" src="@/assets/images/drop5.png">
        <img class="drops-9-2" src="@/assets/images/drop6.png">
      </div>
      <Bug type="Bug1" :width="12" :x="14" :y="43" :rotate="-13"/>
      <Bug type="Bug1" :width="13" :x="50" :y="40" :rotate="20"/>
      <Bug type="Bug1" :width="17" :x="75" :y="42" :rotate="30"/>
      <Bug type="Bug1" :width="17" :x="40" :y="50" :rotate="181"/>
      <Bug type="Bug1" :width="14" :x="30" :y="78" :rotate="90"/>
      <Bug type="Bug1" :width="14" :x="11" :y="66" :rotate="0"/>
      <Bug type="Bug2" :width="16" :x="74" :y="62" :rotate="0"/>
      <Bug type="Bug2" :width="16" :x="12" :y="49" :rotate="30"/>
      <Bug type="Larvae5" :width="12" :x="37" :y="43.8" :rotate="300"/>
      <Bug type="Larvae5" :width="14" :x="37" :y="41" :rotate="0"/>
      <Bug type="Larvae3" :width="7" :x="41" :y="40" :rotate="0"/>
      <Bug type="Larvae4" :width="6" :x="29" :y="42" :rotate="0"/>
      <Bug type="Larvae6" :width="2" :x="35" :y="46" :rotate="140"/>
      <Bug type="Larvae8" :width="7" :x="24" :y="46" :rotate="0"/>
      <Bug type="Larvae7" :width="6" :x="15" :y="49" :rotate="0"/>
      <Bug type="Larvae9" :width="6" :x="0" :y="51" :rotate="0"/>
      <Bug type="Larvae3" :width="5" :x="41" :y="56" :rotate="0"/>
      <Bug type="Larvae4" :width="4" :x="25" :y="52" :rotate="0"/>
      <Bug type="Larvae4" :width="4" :x="2" :y="57" :rotate="100"/>
      <Bug type="Larvae4" :width="3" :x="32" :y="44" :rotate="46"/>
      <Bug type="Larvae6" :width="1.5" :x="41" :y="52" :rotate="140"/>
      <Bug type="Larvae2" :width="5" :x="82" :y="49" :rotate="0"/>
      <Bug type="Larvae2" :width="10" :x="50" :y="60" :rotate="0"/>

      <Tadpole type="tadpole1" :width="14" :x="45" :y="47.5" :rotate="-30"/>
      <Tadpole type="tadpole1" :width="10" :x="36" :y="61" :rotate="-88"/>
      <Tadpole type="tadpole1" :width="10" :x="21" :y="63" :rotate="-50"/>
      <Tadpole type="tadpole1" :width="10" :x="55" :y="58" :rotate="-121"/>
      <Tadpole type="tadpole1" :width="10" :x="70" :y="87" :rotate="-83"/>

      <Tadpole type="tadpole3" :width="18" :x="12" :y="71" :rotate="100"/>
      <Tadpole type="tadpole3" :width="14" :x="30" :y="65" :rotate="57"/>
      <Tadpole type="tadpole3" :width="15" :x="42" :y="61" :rotate="100"/>
      
      <VueAudio :file="song" :autoPlay="true"/>
    </div>
  </div>
</template>

<script>
import Bug from "./components/Bug.vue";
import Tadpole from "./components/Tadpole.vue";
import VueAudio from "vue-audio";
import Song from "./assets/berez_song.mp3";


import Title from './assets/svg/title.svg';
import Verse1 from './assets/svg/verse1.svg';
import Verse2 from './assets/svg/verse2.svg';
import Verse3 from './assets/svg/verse3.svg';
import Verse4 from './assets/svg/verse4.svg';
import Verse5 from './assets/svg/verse5.svg';
import Verse6 from './assets/svg/verse6.svg';

export default {
  name: "app",
  components: {
    Title,
    Verse1,
    Verse2,
    Verse3,
    Verse4,
    Verse5,
    Verse6,
    Bug,
    VueAudio,
    Tadpole
  },

  data() {
    return {
      dropsTop: 0,
      fontSize: 16,
      song: Song,
      visibily: "hidden",
      birdMoving: false
    };
  },

  mounted() {
    // bird amination
    let animationElem = this.$el.getElementsByClassName("bird-1")[0];
    animationElem.addEventListener("webkitAnimationEnd", this.endMotion);
    animationElem.addEventListener("animationend", this.endMotion);

    addEventListener("scroll", this.handleScroll);
    addEventListener("resize", this.resize);
    addEventListener("load", () => {
      this.visibily = "visible";
    });
    console.log("scrolling Injected");
    this.resize();
  },
  beforeDestroy() {
    removeEventListener("scroll", this.handleScroll);
    removeEventListener("resize", this.resize);
    console.log("scrolling Destroyed");
  },
  methods: {
    endMotion() {
      this.birdMoving = false;
    },
    getHead() {
      return document.getElementsByTagName("html")[0];
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      // var sh = $(".lovOpenContainer").scrollHeight;
      // var st = $(".lovOpenContainer").scrollTop;
      let sh = this.getHead().scrollHeight;
      let st = this.getHead().scrollTop;
      // let oh = this.getHead().offsetHeight;
      let x = st / sh;
      this.dropsTop = x * 20;
      // if (sh - st - oh + 1 < 1) {
      //   var n = this.items.length + 1;
      //   this.items.push({ value: n, description: "New loaded content #:" + n });
      // }
    },
    resize() {
      this.fontSize = (this.$el.clientWidth / 1200) * 16;
    }
  }
};
</script>

<style lang="scss">
$drops-mult: 0.7;
$drops-offset: 3%;
$drops-1-offset: $drops-offset + $drops-mult * 22%;
$drops-2-offset: $drops-offset + $drops-mult * 30%;
$drops-3-offset: $drops-offset + $drops-mult * 37%;
$drops-4-offset: $drops-offset + $drops-mult * 43%;
$drops-5-offset: $drops-offset + $drops-mult * 53%;
$drops-6-offset: $drops-offset + $drops-mult * 62%;
$drops-7-offset: $drops-offset + $drops-mult * 72%;
$drops-8-offset: $drops-offset + $drops-mult * 82%;
$drops-9-offset: $drops-offset + $drops-mult * 92%;
$drops-left-offset: 31.4%;

$app-width: 1200px;

$leaf-start-angle: 37deg;
$leaf-end-angle: 45deg;
$leaf-animation2-offset: -30deg;

@keyframes leaf-animation {
  0% {
    transform: translateX(37%) rotate($leaf-start-angle) translateX(-37%);
  }
  100% {
    transform: translateX(37%) rotate($leaf-end-angle) translateX(-37%);
  }
}
@keyframes leaf-animation-2 {
  0% {
    transform: translateX(37%)
      rotate($leaf-start-angle - $leaf-animation2-offset) translateX(-37%);
  }
  100% {
    transform: translateX(37%) rotate($leaf-end-angle - $leaf-animation2-offset)
      translateX(-37%);
  }
}

$b-x-offset: -30%;
$b-y-offset: 15%;
@keyframes bird-1-animation {
  0% {
    transform: translate($b-x-offset, $b-y-offset) rotate(0deg)
      translate(-$b-x-offset, -$b-y-offset);
  }
  50% {
    transform: translate($b-x-offset, $b-y-offset) rotate(10deg)
      translate(-$b-x-offset, -$b-y-offset);
  }
  100% {
    transform: translate($b-x-offset, $b-y-offset) rotate(0deg)
      translate(-$b-x-offset, -$b-y-offset);
  }
}

#app-wrapper {
  max-width: $app-width;
  margin: 0 auto;
  overflow: hidden;
}
#app {
  display: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  padding-top: 350%;
  font-family: "Narkisim";
  .sky {
    font-weight: bold;
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    max-width: $app-width;
    img {
      width: 100%;
    }
    .title-box {
      direction: rtl;
      display: flex;
      justify-content: space-between;
      flex-direction: left;
      position: absolute;
      width: 100%;
      padding: 3em;
      box-sizing: border-box;
      .title {
        width: 21%;
      }
      .author {
        width: 30%;
        text-align: right;
        font-size: 2.2em;
      }
    }
  }

  @for $i from 1 through 10 {
    .svg-text-box-#{$i} {
      position: absolute;

      right: 11%;
      width: 36%;
      z-index: 100;
      top: 4.5% + $i * 10%;

      @media only screen and (max-width: 600px) {
        width: 150%;
      }
    }
  }

  .canes {
    img {
      position: absolute;
      z-index: 10;
    }
    img.cane-1 {
      width: 121%;
      top: 10%;
      right: -62%;
    }
    img.cane-2 {
      width: 121%;
      top: 31%;
      right: -62%;
    }
    img.cane-3 {
      width: 121%;
      top: 55%;
      right: -62%;
    }
    img.leaf-1 {
      width: 57%;
      top: 43%;
      right: 3%;
      animation: leaf-animation 4s ease-in-out infinite;
      animation-direction: alternate;
    }
    img.leaf-2 {
      width: 57%;
      top: 54%;
      right: 3%;
      animation: leaf-animation 5s ease-in-out infinite;
      animation-direction: alternate;
      animation-delay: 3s;
    }
    img.leaf-3 {
      width: 57%;
      top: 83%;
      right: 3%;
      animation: leaf-animation-2 4s ease-in-out infinite;
      animation-direction: alternate;
      animation-delay: 2s;
    }
    img.leaf-4 {
      width: 57%;
      top: 32%;
      right: -7%;
      animation: leaf-animation-2 5s ease-in-out infinite;
      animation-direction: alternate;
      animation-delay: 1s;
    }
    img.leaf-5 {
      width: 57%;
      top: 97%;
      right: -2%;
      animation: leaf-animation-2 6.5s ease-in-out infinite;
      animation-direction: alternate;
      animation-delay: 3s;
    }
  }

  .faucet {
    position: absolute;
    left: 5.8%;
    top: 9.5%;
    width: 31.6%;
    z-index: 10;
  }
  .faucet-drop {
    transform: translateX(-50%);
    position: absolute;
    left: $drops-left-offset;
    top: 14.55%;
    width: 2%;
    z-index: 9;
  }
  .bird-1 {
    position: absolute;
    left: -20%;
    top: 23%;
    width: 52%;
    z-index: 10;
    &.moving {
      animation: bird-1-animation 2s ease-in-out;
    }
  }

  .ground-mountains {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  .ground-sand {
    position: absolute;
    width: 100%;
    top: 8%;
    bottom: 0;
    background-color: #e7dab9;
    z-index: 1;
  }

  .bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    position: absolute;
  }

  .drops-container {
    position: absolute;
    left: $drops-left-offset;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 3;
    img {
      transform: translate(-50%, -50%);
      position: absolute;
      left: 0;
    }
    .drops-1-1 {
      top: $drops-1-offset + 0%;
      width: 16.3%;
    }
    .drops-1-2 {
      top: $drops-1-offset + 0.8%;
      width: 36.8%;
    }
    .drops-1-3 {
      top: $drops-1-offset + 1.6%;
      width: 9.4%;
    }

    .drops-2-1 {
      top: $drops-2-offset;
      width: 22.2%;
    }

    .drops-3-1 {
      top: $drops-3-offset + 0%;
      width: 16.3%;
    }
    .drops-3-2 {
      top: $drops-3-offset + 0.9%;
      width: 36.8%;
    }
    .drops-3-3 {
      top: $drops-3-offset + 1.8%;
      width: 9.4%;
    }
    .drops-4-1 {
      top: $drops-4-offset;
      width: 22.2%;
    }
    .drops-5-1 {
      top: $drops-5-offset;
      width: 29.8%;
    }
    .drops-6-1 {
      top: $drops-6-offset;
      width: 22.2%;
      transform: translateX(-50%) rotate(180deg);
    }
    .drops-6-2 {
      top: $drops-6-offset + 3%;
      width: 9.4%;
      transform: translateX(-50%) rotate(180deg);
    }
    .drops-6-3 {
      top: $drops-6-offset + 5%;
      width: 36.8%;
      transform: translateX(-50%) rotate(180deg);
    }
    .drops-7-1 {
      top: $drops-7-offset;
      width: 9.4%;
    }
    .drops-7-2 {
      top: $drops-7-offset + 3%;
      width: 29.8%;
    }

    .drops-8-1 {
      top: $drops-8-offset;
      width: 16.3%;
    }
    .drops-8-2 {
      top: $drops-8-offset + 1%;
      width: 36.8%;
    }
    .drops-8-3 {
      top: $drops-8-offset + 2%;
      width: 9.4%;
    }
    .drops-8-4 {
      top: $drops-8-offset + 3%;
      width: 22.2%;
    }

    .drops-9-1 {
      top: $drops-9-offset;
      width: 22.2%;
    }
    .drops-9-2 {
      top: $drops-9-offset + 1.2%;
      width: 29.4%;
    }
  }
  .vue-sound-wrapper {
    // position: absolute;
    // top: 1%;
    // left: 1%;
    // z-index: 10000;

    .vue-sound__player {
      & > * {
        display: none;
      }
      & > [Title="Play"] {
        display: block;
        padding: 0.45em;
        border: 0.2em solid #82c15b;
        font-size: 1.4em;
        color: #82c15b;
        border-radius: 50%;
        position: fixed;
        top: 1em;
        left: 1em;
        z-index: 10000;
      }
    }
  }
}
</style>
