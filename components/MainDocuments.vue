<script setup lang="ts">
  import { ref, computed } from "vue";
  const docsValue = [
    {
      title: "Лицензионный договор",
      description: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
      link: "/document/licensdoc",
    },
    {
      title: "Политика обработки персональных данных",
      description: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться. ",
      link: "/document/perspolitic",
    },
    {
      title: "Информация об оплате",
      description:
        "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции. ",
      link: "/document/payinfo",
    },
    {
      title: "Лицензионный договор",
      description: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
      link: "/document/licensdoc",
    },
    {
      title: "Политика обработки персональных данных",
      description: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться. ",
      link: "/document/perspolitic",
    },
    {
      title: "Информация об оплате",
      description:
        "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции. ",
      link: "/document/payinfo",
    },
  ];

  const counterDocsSlider = ref<number>(0);
  const docsSlider = ref<string>(" docsSlider");

  function navigateToRoute(routeName: string) {
    navigateTo(routeName);
  }

  const paginatedData = computed(() => {
    const startIndex = 0;
    const endIndex = docsValue.length;
    return docsValue.slice(startIndex, endIndex);
  });

  function nextSlide(nameSlider: string) {
    counterDocsSlider.value = (counterDocsSlider.value % paginatedData.value.length) / 3;
  }

  function prevSlide(nameSlider: string) {
    counterDocsSlider.value = (counterDocsSlider.value - 1 + paginatedData.value.length) % paginatedData.value.length;
  }

  function goToSlide(index: number, nameSlider: string) {
    counterDocsSlider.value = index;
  }
</script>
<template>
  <div>
    <h2>Документы</h2>
    <div class="docs">
      <div class="slider">
        <div class="slider-content">
          <div class="slides" :style="{ transform: 'translateX(' + -counterDocsSlider * 100 + '%)' }">
            <div class="slide" v-for="(item, index) in paginatedData" :key="index">
              <div class="docs-item">
                <div>
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.description }}</p>
                </div>
                <button @click="navigateToRoute(item.link)">Перейти</button>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="prev" @click="prevSlide( docsSlider)"><img :src="require(`@/assets/img/icon/leftArrow.svg`)" alt="&lt;" /></button>
        <button class="next" @click="nextSlide( docsSlider)"><img :src="require(`@/assets/img/icon/rightArrow.svg`)" alt="&gt;"</button> -->
        <div class="dots">
          <span
            class="dot"
            v-for="(slide, index) in paginatedData.length / 3"
            :key="index"
            :class="{ active: index === counterDocsSlider }"
            @click="goToSlide(index, docsSlider)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  h2 {
    text-align: center;
  }
  .slider {
    position: relative;
    width: 100%;
    .slider-content {
      overflow: hidden;
      .slides {
        display: flex;
        transition: transform 0.5s ease;
        gap: 8%;
        padding: 10px;
        .slide {
          flex: 0 0 27%;
          display: flex;
          background-color: var(--background-color);
          color: var(--primary-text-color);
        }
      }
    }

    .prev,
    .next {
      position: absolute;
      display: flex;
      top: 50%;
      justify-content: center;
      align-items: center;
      background-color: var(--background-highlight-color);
      border-radius: 10rem;
      border: none;
      cursor: pointer;
    }
    .dots {
      display: flex;
      justify-content: center;
      & .dot {
        background-color: #d9d9d9;
        cursor: pointer;
        border-radius: 50%;
        transition: 0.4s;
        &:hover {
          background-color: #005eb9;
          color: #fff;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      & .dot.active {
        cursor: default;
        background-color: #007aff;
      }
    }
  }
  .dots {
    padding: 1rem;
    & .dot {
      width: 10px;
      height: 10px;
      margin: 0 5px;
    }
  }
  .docs-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    gap: 40px;
    & h2 {
      color: #1253a2;
      text-align: left;
    }
    & button {
      outline: 0;
      border: none;
      border-radius: 5px;
      background-color: #0584fe;
      color: #fff;
      padding: 11px;
      transition: 0.4s;
      &:hover {
        background-color: #005eb9;
        color: #fff;
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
