<template>
  <div id="app-wrapper" :style="{ fontSize: fontSize + 'px' }">
    <div id="app">
      <div class="sky">
        <div class="title-box">
          <span class="title">ּבֶרֶז</span>
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
      <img class="bird-1" src="@/assets/images/swallow1.png">
      <img class="bottom" src="@/assets/images/bottom.png">

      <p class="text-box-1">
        בִּקְצֵה‭ ‬הַיְשׁוּב‭, ‬בַּמִדְבָּר‭ ‬הְחָשׂוּף
        <br>הָיָה‭ ‬בֶּרֶז‭ ‬כִּיבּוּי‭ ‬שְׁטִּיפְטֶף‭ ‬לוֹ‭ ‬טִיפְטוּף
        <br>טִיפְּטִיפָּה‭ ‬עוֹד‭ ‬טִיפָּה‭ ‬מִסָּבִיב‭ ‬לַיְּמָמַה
        <br>וּמֵיְמָיוְ‭ ‬הַמְתּוּקִים‭ ‬כָּךְ‭ ‬הִשְׁקּוּ‭ ‬הַשְׁמָמַה
      </p>
      <p class="text-box-2">
        כְּשְׁמָצָאתִי‭ ‬אוׂתוׂ‭, ‬כְּבָר‭ ‬הָיָה‭ ‬שָׁם‭ ‬אָגַּם
        <br>טוֹב‭, ‬בְּעֶצֵם‭ ‬שְׁלוּלִית‭, ‬חָבוּיָה‭ ‬מִכּוּלָם
        <br>מוּקֶפֶת‭ ‬ןן‭ ‬וּכְמוּסַה‭ ‬כְּמוֹ‭ ‬סוֹד
        <br>שָׁקְקּוּ‭ ‬הַחָיִּים‭ ‬בַּה‭, ‬קָסְמוּ‭ ‬לִי‭ ‬מֶאוׂד
      </p>
      <p class="text-box-3">
        מָחְרוׂזֶת‭ ‬הוׂפִיעָה‭, ‬פְּנִינִים‭ ‬לָה‭ ‬שְׁחּוׂרוׂת
        <br>וְסְנוּנִית‭ ‬צָלֱלַה‭ ‬לָה‭ ‬כְּשְׁבָּא‭ ‬לָה‭ ‬לִשְׁתּוֹת
        <br>פִּשְׁפֶּשׁ‭ ‬אָרוֹךְ‭ ‬רֶגֶל‭ ‬עָל‭ ‬פְּנֶיּ‭ ‬מָיִם‭ ‬פָּסָע
        <br>וּמִתָחַת‭ ‬רָקְדּוּ‭ ‬זָחְלִילֵּי‭ ‬יְתוּשָׁה
      </p>
      <p class="text-box-4">
        אוֹר‭ ‬הַשֶׁמֶשׁ‭ ‬רִיצֶד‭ ‬פִּיזוּזִּים‭ ‬שֶׁל‭ ‬עָצְלוּת
        <br>רֹאשָׁנִים‭ ‬אָז‭ ‬בָּקְעוּ‭ ‬וְשָׂחוּ‭ ‬בִּזְרִיזוּת
        <br>אֶיך‭ ‬גִּידְלוּ‭ ‬הֶם‭ ‬רָגְלָיִּם‭ ‬אֶיְנֶנִי‭ ‬יוׂדֶעָ
        <br>רָק‭ ‬אֶדָע‭ ‬שְׁהָפַך‭ ‬כֹּל‭ ‬רֹאשָׁן‭ ‬לִצְפָרְדֶעָ
      </p>
      <p class="text-box-5">
        כָּךְ‭ ‬עָבַר‭ ‬כֹּל‭ ‬הַחוֹפֶשׁ‭, ‬יֶמֶיּ‭ ‬הַשָׁרָב
        <br>עָד‭ ‬שְׁפֶּתָּע‭ ‬הוֹפּיעָ‭ ‬יוֹאָב‭ ‬הַשְׁרָבְרָב
        <br>הוּא‭ ‬תִיקֶן‭ ‬אֶת‭ ‬הַדֶלֶף‭, ‬כֹּה‭ ‬פָּשׁוּט‭ ‬הַדָבַר
        <br>הִתְּיָיבֶּשׁ‭ ‬הַנָוֶוה‭ ‬וְחָזָר‭ ‬הַמִדְּבָּר
      </p>
      <p class="text-box-6">
        שָׁאָלְּתִי‭ "‬מָדוּעָ‭? ‬לָמַה‭ ‬כָּךְ‭ ‬לְקָלְקֶל
        <br>אֶת‭ ‬פִּינָה‭ ‬זוֹ‭ ‬שֶׁל‭ ‬חֶמֶד‭, ‬הַיָפַה‭ ‬בַּתֶבֶל‭?" ‬
        <br>הוּא‭ ‬עָנַה‭ ‬לִי‭ ‬בְּשֶׁקֶט‭, ‬וְהוֹסִיף‭ ‬לֶטִיפַה
        <br>‭"‬לֹא‭ ‬אָמְרוּ‭ ‬לְךָ‭, ‬יֶלֶד‭, ‬שְׁחָבַל‭ ‬כֹּל‭ ‬טִיפָּה‭?"
      </p>

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
      <Bug type="Bug1" :width="50" :x="50" :y="50" :rotate="10"/>
      <Bug type="Bug1" :width="50" :x="50" :y="50" :rotate="20"/>
      <Bug type="Bug1" :width="50" :x="50" :y="50" :rotate="30"/>
      <Bug type="Bug1" :width="50" :x="50" :y="50" :rotate="40"/>
      <Bug type="Bug1" :width="50" :x="50" :y="50" :rotate="50"/>
      <Bug type="Bug2" :width="50" :x="50" :y="60" :rotate="10"/>
      <Bug type="Bug2" :width="50" :x="50" :y="60" :rotate="30"/>
      <Bug type="Larvae2" :width="10" :x="50" :y="60" :rotate="0"/>
    </div>
  </div>
</template>

<script>
import Bug from "./components/Bug.vue";

export default {
  name: "app",
  components: {
    Bug
  },
  data() {
    return {
      dropsTop: 0,
      fontSize: 16
    };
  },
  mounted() {
    addEventListener("scroll", this.handleScroll);
    addEventListener("resize", this.resize);
    console.log("scrolling Injected");
    this.resize();
  },
  beforeDestroy() {
    removeEventListener("scroll", this.handleScroll);
    removeEventListener("resize", this.resize);
    console.log("scrolling Destroyed");
  },
  methods: {
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
$drops-1-offset: 22%;
$drops-2-offset: 30%;
$drops-3-offset: 37%;
$drops-4-offset: 43%;
$drops-5-offset: 53%;
$drops-6-offset: 62%;
$drops-7-offset: 72%;
$drops-8-offset: 82%;
$drops-9-offset: 92%;
$drops-left-offset: 33.4%;

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

#app-wrapper {
  max-width: $app-width;
  margin: 0 auto;
  overflow: hidden;
}
#app {
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
      flex-direction: left;
      position: absolute;
      width: 100%;
      padding: 3em;
      box-sizing: border-box;
      .title {
        width: 70%;
        text-align: right;
        font-size: 5em;
      }
      .author {
        width: 30%;
        text-align: right;
        font-size: 2.2em;
      }
    }
  }

  @for $i from 1 through 10 {
    .text-box-#{$i} {
      position: absolute;
      right: 15%;
      width: 70%;
      z-index: 100;
      direction: rtl;
      text-align: right;
      font-size: 1.6em;
      top: 5% + $i * 10%;
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
    top: 16.7%;
    width: 2%;
    z-index: 9;
  }
  .bird-1 {
    position: absolute;
    left: -20%;
    top: 23%;
    width: 52%;
    z-index: 10;
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
      transform: translateX(-50%);
      position: absolute;
      left: 0;
    }
    .drops-1-1 {
      top: $drops-1-offset + 0%;
      width: 16.3%;
    }
    .drops-1-2 {
      top: $drops-1-offset + 2%;
      width: 36.8%;
    }
    .drops-1-3 {
      top: $drops-1-offset + 4%;
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
      top: $drops-3-offset + 2%;
      width: 36.8%;
    }
    .drops-3-3 {
      top: $drops-3-offset + 4%;
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
}
</style>
