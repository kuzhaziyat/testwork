<script lang="ts" setup>
  const isOpen = ref(false);
  const isSend = ref(false);
  const payload = ref({
    carNumber: "",
    region: "",
    sts: "",
  });

  const isNullCarNumber = ref(false);
  const isNullRegion = ref(false);
  const isNullSts = ref(false);

  function checkFormValid() {
    if (payload.value.carNumber && payload.value.region && payload.value.sts) {
      isSend.value = true;
      isNullSts.value = false;
      isNullCarNumber.value = false;
      isNullRegion.value = false;

      window.scrollTo(0, 0);

      payload.value.region = "";
      payload.value.sts = "";
      payload.value.carNumber = "";

      setTimeout(() => {
        isSend.value = false;
      }, 3 * 1000);
    } else {
      if (!payload.value.carNumber) {
        isNullCarNumber.value = true;
      }
      if (!payload.value.region) {
        isNullRegion.value = true;
      }
      if (!payload.value.sts) {
        isNullSts.value = true;
      }
    }
  }
</script>
<template>
  <UAlert v-if="isSend" description="Данные были успешно отправленны" title="Успешно!" />
  <UModal v-model="isOpen">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0ThIonKfSHo?si=yPmdQWiDeFMeCNW3"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </UModal>

  <div class="block-1">
    <div class="block-1__left">
      <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <form>
        <div>
          <div class="input-column">
            <label>Номер автомобиля</label>
            <input type="text" v-model="payload.carNumber" :class="{ null: isNullCarNumber }" />
          </div>
          <div class="input-column">
            <label>Регион</label>
            <input type="text" v-model="payload.region" :class="{ null: isNullRegion }" />
          </div>
        </div>
        <div class="input-column">
          <label>Свидетельство о регистрации ТС</label>
          <input type="text" v-model="payload.sts" :class="{ null: isNullSts }" />
        </div>
      </form>
      <div>
        <button @click="checkFormValid()">
          Проверить штрафы
          <img src="/assets/icon/rightArrowIcon.svg" />
        </button>
        <button @click="isOpen = true">
          <img src="/assets/icon/youtubeIcon.svg" />
          О сервисе
          <span>(1 мин. 20 сек)</span>
        </button>
      </div>
      <span class="subtext">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</span>
    </div>
    <div class="block-1__right">
      <img src="/assets/img/mainPage.svg" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .block-1 {
    display: flex;
    &__left {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      & div {
        display: flex;
        gap: 10px;
        flex-grow: 1;
        & button {
          display: flex;
          align-items: center;
          gap: 2px;
          outline: 0;
          border: 1px solid #0584fe;
          border-radius: 5px;
          background-color: transparent;
          padding: 11px;
          transition: 0.4s;

          & span {
            color: #1253a2;
          }
          &:hover {
            background-color: #0584fe;
            color: #fff;
          }
          &:active {
            transform: scale(0.9);
          }
        }
      }

      & form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        & div {
          display: flex;
          gap: 10px;
          flex-grow: 1;
        }
        & label {
          font-size: 12px;
        }
        & input {
          outline: 0;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #bcbcbc;
          transition: 0.4s;
          &:focus {
            box-shadow: 0px 0px 8px 4px rgba(106, 128, 144, 0.2);
          }
        }
      }
    }
    &__right {
      width: 50%;
    }
  }
  .subtext {
    color: #8f8f8f;
  }
  .input-column {
    flex-direction: column;
  }
  .null {
    border: 1px solid red !important;
  }
</style>
import { ref } from 'vue/dist/vue.mjs';
